#!/bin/bash
set -e

echo "🚀 Deploying Apsara Devkit"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_step() { echo -e "${BLUE}[STEP]${NC} $1"; }

command -v docker >/dev/null 2|| { log_error "Docker not found"; exit 1; }
command -v docker compose >/dev/null 2|| { log_error "Docker Compose not found"; exit 1; }

log_info "Pre-flight checks passed"

log_step "Running cleanup..."
./scripts/cleanup.sh

log_step "Building Docker images..."
docker compose build --no-cache

log_step "Starting services..."
docker compose up -d

log_info "Waiting for services..."
sleep 15

log_step "Running health checks..."
HEALTHY=true

if curl -sf "http://localhost:80" > /dev/null 2>&1; then
    log_info "✓ Web is healthy (port 80)"
else
    log_warn "✗ Web may not be responding (port 80)"
    HEALTHY=false
fi

if curl -sf "http://localhost:2222/health" > /dev/null 2>&1 || curl -sf "http://localhost:2222" > /dev/null 2>&1; then
    log_info "✓ Backend is healthy (port 2222)"
else
    log_warn "✗ Backend may not be responding (port 2222)"
fi

log_info "Container status:"
docker compose ps

echo ""
if [ "$HEALTHY" = true ]; then
    log_info "✅ Deployment successful!"
else
    log_warn "⚠️  Some services may need attention"
    log_info "Check logs with: docker compose logs"
fi

echo ""
log_info "Useful commands:"
echo "  View logs:    docker compose logs -f"
echo "  Stop:         docker compose down"
echo "  Restart:      docker compose restart"
