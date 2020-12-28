FROM node:15.0.1-slim

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install make && \ 
    npm install 

CMD npm start