package db

import (
	"context"
	"database/sql"
	_ "embed"

	_ "github.com/tursodatabase/go-libsql"
)

//go:embed schema.sql
var ddl string

func Provide() *Queries {

	dbName := "file:sidekick-dev.db"
	db, err := sql.Open("libsql", dbName)

	if err != nil {
		panic(err)
	}

	if _, err := db.ExecContext(context.Background(), ddl); err != nil {
		panic(err)
	}

	return New(db)
}
