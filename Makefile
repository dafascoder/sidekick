APP_NAME ?= sidekick

.PHONY: vet
vet:
	go vet ./...

.PHONY: staticcheck
staticcheck:
	staticcheck ./...

.PHONY: test
test:
	go test -race -v -timeout 30s ./...

.PHONY: tailwind-watch
tailwind-watch:
	npx @tailwindcss/cli -i ./static/css/input.css -o ./static/css/style.css --watch

.PHONY: tailwind-build
tailwind-build:
	npx @tailwindcss/cli -i ./static/css/input.css -o ./static/css/style.min.css --minify

.PHONY: templ-watch
templ-watch:
	templ generate --watch

.PHONY: templ-generate
templ-generate:
	templ generate
	
.PHONY: dev
dev:
	air

.PHONY: build
build:
	make tailwind-build
	make templ-generate
	go build -ldflags "-X main.Environment=production" -o ./bin/$(APP_NAME) ./cmd/main.go