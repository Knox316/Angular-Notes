#first step
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
#generate dist folder
RUN npm run build --prod

#second step
FROM nginx:alpine
COPY --from=node /app/dist/CHALLENGE /usr/share/nginx/html
