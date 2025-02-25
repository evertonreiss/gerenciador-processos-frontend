#Stage 1: Build
FROM node:22-slim AS builder

WORKDIR /app

RUN npm install -g @quasar/cli

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 9090

CMD ["npm", "run", "dev"]
