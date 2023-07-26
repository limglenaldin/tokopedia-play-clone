DEFAULT_GOAL := welcome
.PHONY: compose-up compose-down

welcome:
	@echo "available command: compose-up compose-down"

compose-up:
	docker-compose -f docker-compose.yml up --build -d

compose-down:
	docker-compose kill
	docker-compose rm -f