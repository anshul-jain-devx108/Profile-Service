FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000  # Ensure this matches the `PORT` variable

CMD ["npm", "run", "dev"]
