FROM node:20-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . ./

EXPOSE 3000

#CMD ["npm", "start"]
CMD ["npm", "run", "dev"]
