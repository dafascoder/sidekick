package server

import (
	"net/http"
)

type middleware func(http.Handler) http.Handler

// wrapMiddleware applies middleware to a handler and returns the wrapped handler
func wrapMiddleware(h http.Handler, middlewares []middleware) http.Handler {
	for i := len(middlewares) - 1; i >= 0; i-- {
		h = middlewares[i](h)
	}
	return h
}

func (s *Server) RegisterRoutes() http.Handler {
	mux := http.NewServeMux()

	routes := map[string]struct {
		Handler     http.Handler
		Middlewares []middleware
	}{
		"/": {
			Handler:     s.homeHandler,
			Middlewares: []middleware{},
		},
	}

	// Register routes with pre-wrapped middleware
	for pattern, route := range routes {
		mux.Handle(pattern, wrapMiddleware(route.Handler, route.Middlewares))
	}

	// Static file server (no middleware)
	fileServer := http.FileServer(http.Dir("./static"))
	mux.Handle("/static/", http.StripPrefix("/static/", fileServer))

	return mux
}
