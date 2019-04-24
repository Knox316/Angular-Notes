#first step
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
#generate dist folder
RUN npm run build --prod

#second step
FROM nginx:alpine
COPY --from=node /app/dist/Challenge /usr/share/nginx/html
#151.101.16.162 registry.npmjs.org

