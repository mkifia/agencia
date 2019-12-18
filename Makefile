COMPOSE_FILE := docker-compose.yaml
DOCKER_COMPOSE := docker-compose

up: ## Start all or c=<name> containers in foreground
	@$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) up $(c)

start: ## Start all or c=<name> containers in background
	@$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) up -d $(c)

stop: ## Stop all or c=<name> containers
	@$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) stop $(c)

logs: ## Show logs for all or c=<name> containers
	@$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) logs --tail=100 -f $(c)

status: ## Show status of containers
	@$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) ps

ps: status ## Alias of status

restart: ## Restart all or c=<name> containers
	@$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) stop $(c)
	@$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) up $(c) -d

clean: confirm ## Clean all data
	@$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) down