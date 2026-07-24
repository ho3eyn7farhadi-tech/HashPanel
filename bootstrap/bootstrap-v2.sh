#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "========== HashPanel Bootstrap v2 =========="

mkdir -p \
src/controllers \
src/models \
src/routes \
src/middleware \
src/storage \
src/templates \
src/engine \
src/panel \
src/lib

touch \
src/controllers/auth.ts \
src/controllers/config.ts \
src/controllers/user.ts \
src/controllers/subscription.ts \
src/routes/api.ts \
src/routes/web.ts \
src/models/user.ts \
src/models/config.ts \
src/storage/database.ts \
src/engine/vless.ts \
src/engine/trojan.ts \
src/engine/subscription.ts \
src/panel/dashboard.ts \
src/panel/login.ts \
src/lib/logger.ts

echo "HashPanel v2 structure ready."
