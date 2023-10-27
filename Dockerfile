FROM node:20.8.0
LABEL authors="prog-ops"

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "start"]
