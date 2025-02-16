package server

import (
	"fmt"
	"net/http"
	"sidekick/internal/db"
	"sidekick/internal/handlers"
	"time"
)

type Server struct {
	db          *db.Queries
	homeHandler *handlers.HomeHandler
}

func NewServer() *http.Server {

	NewServer := &Server{
		db:          db.Provide(),
		homeHandler: handlers.NewHomeHandler(),
	}

	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", 8080),
		Handler:      NewServer.RegisterRoutes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	return server
}
