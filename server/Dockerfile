# Use a base image
FROM node:18.16.0-alpine3.16

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . .

# Install dependencies (if any)
RUN npm i

# Expose a port (if needed)
EXPOSE 8080

# Define the command to run when the container starts
CMD ["yarn","dev"]