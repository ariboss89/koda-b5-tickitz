# Use the latest LTS version of Node.js
FROM node:lts-alpine3.23 AS build
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm ci
# Copy the rest of your application files
COPY . .
RUN npm run build
 
# Production Stage
FROM nginx:mainline-alpine3.23

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/ngix/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]