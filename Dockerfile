FROM node:15.0.1

WORKDIR /app

COPY . .

RUN npm install
RUN npm install mongo-seeding-cli -g  

EXPOSE 3000

ENTRYPOINT ["npm", "start"]