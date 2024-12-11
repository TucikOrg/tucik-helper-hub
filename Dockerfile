# Build Stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Vite app
RUN npm run build

# Production Stage
FROM node:18-alpine

# Install the static server
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Command to run the static server
CMD ["serve", "-s", "dist", "-l", "3000"]