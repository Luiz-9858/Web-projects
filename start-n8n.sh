#!/bin/bash

# ============================================
# Script de Inicialização n8n + PostgreSQL
# Autor: Luiz Fernando
# Versão: 1.0
# ============================================

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Diretório do projeto
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCKER_COMPOSE_FILE="$PROJECT_DIR/n8n-backups/n8n-docker/docker-compose.yml"

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}🚀 Iniciando n8n + PostgreSQL${NC}"
echo -e "${BLUE}================================${NC}\n"

# 1. Verificar se Docker está rodando
echo -e "${YELLOW}[1/5]${NC} Verificando Docker..."
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker não está rodando!${NC}"
    echo -e "${YELLOW}💡 Inicie o Docker Desktop e tente novamente.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker está rodando${NC}\n"

# 2. Verificar se arquivo docker-compose existe
echo -e "${YELLOW}[2/5]${NC} Verificando arquivos..."
if [ ! -f "$DOCKER_COMPOSE_FILE" ]; then
    echo -e "${RED}❌ Arquivo docker-compose.yml não encontrado!${NC}"
    echo -e "${YELLOW}📂 Esperado em: $DOCKER_COMPOSE_FILE${NC}"
    exit 1
fi
echo -e "${GREEN}✅ docker-compose.yml encontrado${NC}\n"

# 3. Parar containers antigos (se existirem)
echo -e "${YELLOW}[3/5]${NC} Limpando containers antigos..."
cd "$PROJECT_DIR/n8n-backups/n8n-docker" || exit
docker-compose down > /dev/null 2>&1
echo -e "${GREEN}✅ Ambiente limpo${NC}\n"

# 4. Iniciar containers
echo -e "${YELLOW}[4/5]${NC} Iniciando containers..."
echo -e "${BLUE}   ⏳ Isso pode levar alguns segundos...${NC}"
if docker-compose up -d; then
    echo -e "${GREEN}✅ Containers iniciados com sucesso!${NC}\n"
else
    echo -e "${RED}❌ Erro ao iniciar containers${NC}"
    exit 1
fi

# 5. Aguardar n8n ficar pronto
echo -e "${YELLOW}[5/5]${NC} Aguardando n8n inicializar..."
MAX_ATTEMPTS=30
ATTEMPT=0
while [ $ATTEMPT -lt $MAX_ATTEMPTS ]; do
    if curl -s http://localhost:5678 > /dev/null 2>&1; then
        echo -e "${GREEN}✅ n8n está pronto!${NC}\n"
        break
    fi
    ATTEMPT=$((ATTEMPT + 1))
    echo -e "${BLUE}   ⏳ Tentativa $ATTEMPT/$MAX_ATTEMPTS...${NC}"
    sleep 2
done

if [ $ATTEMPT -eq $MAX_ATTEMPTS ]; then
    echo -e "${RED}❌ n8n não respondeu após $MAX_ATTEMPTS tentativas${NC}"
    echo -e "${YELLOW}💡 Verifique os logs: docker-compose logs -f${NC}"
    exit 1
fi

# Exibir informações de acesso
echo -e "${BLUE}================================${NC}"
echo -e "${GREEN}🎉 n8n Iniciado com Sucesso!${NC}"
echo -e "${BLUE}================================${NC}\n"

echo -e "${YELLOW}📡 Informações de Acesso:${NC}"
echo -e "${BLUE}   URL:${NC} http://localhost:5678"
echo -e "${BLUE}   Usuário:${NC} admin"
echo -e "${BLUE}   Webhook:${NC} http://localhost:5678/webhook/portfolio-contact\n"

echo -e "${YELLOW}📊 Comandos Úteis:${NC}"
echo -e "${BLUE}   Ver logs:${NC} cd n8n-backups/n8n-docker && docker-compose logs -f"
echo -e "${BLUE}   Parar:${NC} cd n8n-backups/n8n-docker && docker-compose down"
echo -e "${BLUE}   Restart:${NC} cd n8n-backups/n8n-docker && docker-compose restart\n"

echo -e "${GREEN}✨ Pronto para usar!${NC}"
echo -e "${YELLOW}💡 Acesse http://localhost:5678 no navegador${NC}\n"