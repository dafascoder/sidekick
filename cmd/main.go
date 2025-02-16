package main

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"sidekick/internal/config"
	"sidekick/internal/logging"
	"sidekick/internal/server"
	"syscall"

	"time"
)

var Environment = "development"

func init() {
	os.Setenv("env", Environment)
	os.Setenv("port", "8080")
	// run generate script
	exec.Command("make", "tailwind-build").Run()
}

func main() {

	logger := logging.NewLogger()

	killSig := make(chan os.Signal, 1)

	signal.Notify(killSig, os.Interrupt, syscall.SIGTERM)

	srv := server.NewServer()

	go func() {
		err := srv.ListenAndServe()

		if errors.Is(err, http.ErrServerClosed) {
			logger.LogInfo().Msg("Server closed")
		} else if err != nil {
			logger.LogError().Err(err).Msg("Server error")
			os.Exit(1)
		}
	}()

	logger.Info().Msgf("Server started", slog.String("port", config.Env.Port))
	<-killSig

	logger.Info().Msg("Shutting down server")

	// Create a context with a timeout for shutdown
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// Attempt to gracefully shut down the server
	if err := srv.Shutdown(ctx); err != nil {
		logger.Error().Msgf("Server shutdown failed", slog.Any("err", err))
		os.Exit(1)
	}

	logger.Info().Msg("Server shutdown Complete")

}
