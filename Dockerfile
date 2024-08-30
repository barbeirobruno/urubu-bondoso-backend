# Use an official Node.js image as the base
FROM node:18-alpine

# Create a working directory inside the container
WORKDIR /usr/src/app

# Copy project configuration files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the container

COPY . .

# Expose the port on which the NestJS application will run (default: 3000)
EXPOSE 3000

# Command to start the application in development mode
CMD ["npm", "run", "start:dev"]