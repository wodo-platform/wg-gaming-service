# The image is built on top of one that has node preinstalled
FROM bitnami/node:14 as builder

ENV NODE_ENV="production"

# Copy app's source code to the /app directory
COPY . /app

COPY [".npmrc", "/app/"]

# The application's directory will be the working directory
WORKDIR /app

RUN chmod 777 -R /app
RUN chmod 777 -R /app/*

RUN npm install typescript -g
RUN npm config set unsafe-perm true

# command line arguments npm-cli-login :

# -u: NPM Username
# -p: NPM Password
# -e: NPM Email
# -r: NPM Registry
# -s: NPM Scope
# --quotes: Set to false by default. Specifies whether your auth token requires quotes. This might required when your auth token has special characters, like =, ? etc.
# --config-path: Set to ~/ by default. Can be used to configure a custom .npmrc file to edit (Do note this is the path of the file, not the file itself)
# For example: npm-cli-login -u testUser -p testPass -e test@example.com

# Or: npm-cli-login -u testUser -p testPass -e test@example.com -r https://private.npm.com -s @privateNPM --quotes
RUN npm install -g npm-cli-login

RUN npm-cli-login -u serhattanrikut -p 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 -e wodo-platform@noreply.github.com -r https://npm.pkg.github.com -s @wodo-platform --quotes

RUN npm install

#RUN npx prisma generate


# Only copy the required distribution code to the runner
FROM bitnami/node:14-prod
ENV NODE_ENV="production"

# Copy the application code
COPY --from=builder /app /app

# Create a non-root user
RUN useradd -r -u 1001 -g root nonroot
RUN chown -R nonroot /app
USER nonroot

WORKDIR /app

ARG PORT=3000
ENV PORT=${PORT}

EXPOSE ${PORT}

# Start the application
CMD ["npm", "start"]
