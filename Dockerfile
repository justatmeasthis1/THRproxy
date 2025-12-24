# Use official Node LTS image
FROM node:20-bullseye

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (for caching)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies with pnpm via corepack
RUN corepack enable && pnpm install --frozen-lockfile --prod

# Copy the rest of the source code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
