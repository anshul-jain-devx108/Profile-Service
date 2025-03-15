# FROM node:18

# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["node", "src/index.js"]


# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) first
COPY package*.json ./

# Install dependencies (only production dependencies)
RUN npm install --omit=dev

# Copy the rest of the application code
COPY . .

# Expose the port Cloud Run expects

EXPOSE 3000

# Start the application
CMD ["node", "src/index.js"]
