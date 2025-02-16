package dbstore

import (
	"context"
	"sidekick/internal/db"
	"sidekick/internal/store"
	"time"

	"github.com/google/uuid"
)

type SessionStore struct {
	db *db.Queries
}

type NewSessionStoreParams struct {
	DB *db.Queries
}

func NewSessionStore(params NewSessionStoreParams) *SessionStore {
	return &SessionStore{
		db: params.DB,
	}
}

func (s *SessionStore) CreateSession(session *store.Session) (*store.Session, error) {
	sessionID, err := uuid.NewRandom()

	if err != nil {
		return nil, err
	}

	err = s.db.CreateSession(
		context.Background(),
		db.CreateSessionParams{
			UserID:    session.UserId,
			SessionID: sessionID.String(),
			ExpiresAt: session.Expiration.Format(time.RFC3339),
		},
	)

	if err != nil {
		return nil, err
	}

	return &store.Session{
		Id:         session.Id,
		Expiration: session.Expiration,
		UserId:     session.UserId,
	}, nil
}

func (s *SessionStore) GetUserFromSession(sessionID string, userID int64) (*store.User, error) {
	dbUser, err := s.db.GetUserByToken(
		context.Background(),
		sessionID,
	)

	if err != nil {
		return nil, err
	}

	return &store.User{
		ID:    dbUser.ID,
		Email: dbUser.Email,
	}, nil
}
