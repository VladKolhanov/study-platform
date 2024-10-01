#!/bin/sh

if [ "$POSTGRES_DB" = "postgres" ]; then
  echo "Wait postgres..."

  while ! nc -z "db" $POSTGRES_PORT; do
    sleep 0.5
  done

  echo "PostgreSQL run"
fi

pnpm run db:generate
pnpm run dev &
pnpm run db:studio

exec "$@"
