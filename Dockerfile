FROM node AS builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build --production

FROM nginx:stable-alpine
WORKDIR /app
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
