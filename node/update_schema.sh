export SCHEMA_PATH=../prisma/schema.prisma
export PRISMA_CLIENT=prisma-client-js
npx prisma generate --schema ${SCHEMA_PATH}