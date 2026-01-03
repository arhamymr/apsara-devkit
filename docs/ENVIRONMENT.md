# Environment Variables Guide

## Overview

This document describes all environment variables required for production deployment.

## Required Variables

### Core Configuration

| Variable                        | Description                                                   | Example                                         |
| ------------------------------- | ------------------------------------------------------------- | ----------------------------------------------- |
| `NEXT_PUBLIC_APP_URL`           | Your production domain                                        | `https`                                         |
| ://yourdomain.com `DB_PASSWORD` | PostgreSQL password                                           | `secure-password-here`                          |
| `BETTER_AUTH_SECRET`            | Auth encryption key (generate with `openssl rand -base64 32`) | `random-string`                                 |
| `DATABASE_URL`                  | PostgreSQL connection string                                  | `postgresql://apsara:pass@postgres:5432/apsara` |

### OAuth Providers (Optional)

| Variable               | Description                    |
| ---------------------- | ------------------------------ |
| `GITHUB_CLIENT_ID`     | GitHub OAuth app client ID     |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth app client secret |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID         |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret     |

## Internal Service URLs

These are set automatically by Docker and should NOT be changed:

| Variable              | Value                                                     | Purpose              |
| --------------------- | --------------------------------------------------------- | -------------------- |
| `NEXT_PUBLIC_API_URL` | `http://backend:2222`                                     | Internal backend API |
| `DATABASE_URL`        | `postgresql://apsara:${DB_PASSWORD}@postgres:5432/apsara` | PostgreSQL           |

## Generating Secrets

### Better Auth Secret

```bash
openssl rand -base64 32
```

## Deployment

### Zero-Downtime Deployment Strategy

The deployment script uses a three-phase strategy to minimize downtime:

1. **Build Phase**: Build new Docker images while services continue running
2. **Deploy Phase**: Recreate containers with new images (brief downtime during restart)
3. **Cleanup Phase**: Remove old images after successful deployment

This ensures your application stays available during most of the deployment process.

### Setup Steps

1. Copy the environment template:

   ```bash
   cp .env.production .env.production
   ```

2. Edit `.env.production` with your values

3. Make deploy script executable:

   ```bash
   chmod +x scripts/deploy.sh
   ```

4. Deploy to production:

   ```bash
   ./scripts/deploy.sh production
   ```

### Manual Deployment

If you prefer manual control:

```bash
# Build images
docker compose build --no-cache

# Start/Update services
docker compose up -d --force-recreate

# Check status
docker compose ps

# View logs
docker compose logs -f

# Cleanup old images
docker image prune -f
```

### Docker Cleanup Commands

To manage disk space on your VPS:

```bash
# Remove unused images (safe)
docker image prune -f

# Remove build cache (safe)
docker builder prune -f

# Full cleanup (removes everything unused)
docker system prune -a -f
```

## Architecture

```
Cloudflare DNS → VPS :80 → Web (:3000) [Public]
                                ├──→ Backend (:2222) [Internal]
                                ├──→ AI (:3333) [Internal]
                                └──→ PostgreSQL (:5432) [Internal]
```

Only the web service is exposed publicly. Backend, AI, and PostgreSQL communicate internally through Docker DNS.
