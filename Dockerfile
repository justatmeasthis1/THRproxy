# Use official pnpm image with Node 20 LTS
FROM pnpm/pnpm:9.12.2-node20

# Set working directory
WORKDIR /usr/src/app

# Copy package files first for caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies in production mode
RUN pnpm install --frozen-lockfile --prod

# Copy the rest of the source code
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
