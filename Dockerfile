# Use an official lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the port environment variable and expose it
ENV PORT=3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
