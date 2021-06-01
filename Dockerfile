FROM node:10-alpine

WORKDIR /usr/src/app

COPY ["package*.json", "tsconfig.json", "./"]

COPY . .

RUN npm install

RUN npm run buildnew

COPY ./build .

EXPOSE 5500

CMD npm run prod