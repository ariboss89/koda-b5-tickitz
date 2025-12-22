# Use the latest LTS version of Node.js
FROM alpine:latest AS build
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
FROM nginx:mainline-alpine3.23 as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]