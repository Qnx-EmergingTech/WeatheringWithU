FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./

# Install dependencies, including Vite
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serving the application
FROM node:20-alpine

WORKDIR /app

RUN rm -rf .git

COPY --from=builder /app/dist .

RUN npm install -g serve

CMD ["serve", "-s", ".", "-l", "tcp://0.0.0.0:8080"]
