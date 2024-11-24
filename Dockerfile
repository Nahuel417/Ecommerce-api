# Etapa 1: Construyendo la app
FROM node:18 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Compila el proyecto TypeScript a JavaScript
RUN npm run build

# Etapa 2: Crea una imagen pequeña
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["node", "dist/main.js"]
