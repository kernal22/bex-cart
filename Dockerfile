#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:10.19.0

WORKDIR /app/src

COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]

RUN npm install

COPY . .

CMD npm run start:build

#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:10.19.0-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --quiet --only=production

## We just need the build to execute the command
## We just need the build to execute the command
COPY --from=builder /build ./build