# Use Node.js 20 LTS Debian-based image (full tooling included)
FROM node:20-bullseye

# Enable Corepack and install the specific pnpm version
RUN corepack enable && corepack prepare pnpm@9.12.2 --activate

# Set working directory
WORKDIR /usr/src/app

# Copy package files first for caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy the rest of the source code
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
