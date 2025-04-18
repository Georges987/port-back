FROM node:23.10-alpine3.20 AS base

# All deps stage
FROM base AS deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install
COPY . .
RUN node ace build
ENV NODE_ENV=production
ENV HOST=127.0.0.1
ENV PORT=10000
EXPOSE 10000
# CMD ["node", "--import=ts-node-maintained/register/esm", "./bin/server.ts"]
CMD ["npm", "run", "dev"]
