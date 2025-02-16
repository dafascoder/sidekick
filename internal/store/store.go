package store

import "time"

type SessionStore interface {
	CreateSession(session *Session) (*Session, error)
	GetUserFromSession(sessionID string, userID int64) (*User, error)
}

type Session struct {
	Id         string
	Expiration time.Time
	UserId     int64
}

type User struct {
	ID       int64  `json:"id"`
	Email    string `json:"email"`
	Password string `json:"-"`
}
