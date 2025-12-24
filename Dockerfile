# Use Debian-based Node.js 20 LTS image (full tooling included)
FROM node:20-bullseye

# Install pnpm globally via npm
RUN npm install -g pnpm@9.12.2

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (for caching)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy the rest of the source code
COPY . .

# Expose the port your app uses
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
