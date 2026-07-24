#!/data/data/com.termux/files/usr/bin/bash

set -e

echo "====================================="
echo "      HashPanel Bootstrap v1"
echo "====================================="

mkdir -p \
src/api \
src/auth \
src/config \
src/core \
src/database \
src/services \
src/subscription \
src/telegram \
src/types \
src/utils \
src/views/admin \
public \
database

echo "[✓] Directories checked"

touch \
src/index.ts \
src/api/router.ts \
src/api/status.ts \
src/api/config.ts \
src/api/users.ts \
src/api/subscription.ts \
src/api/telegram.ts \
src/core/response.ts \
src/config/generator.ts \
src/services/configManager.ts \
src/database/users.ts \
src/views/layout.ts \
src/views/dashboard.ts \
src/views/admin/panel.ts \
database/schema.sql

echo "[✓] Base files checked"

git status

echo
echo "HashPanel Bootstrap v1 Completed."
