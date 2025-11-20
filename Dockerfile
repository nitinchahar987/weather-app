# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install build tools for native modules
RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the project
COPY . .

# Expose React default port
EXPOSE 3000

# Start the app accessible externally
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
