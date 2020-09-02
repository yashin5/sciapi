FROM node:14.9.0-alpine3.10

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]