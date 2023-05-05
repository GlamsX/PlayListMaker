FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app

RUN npm run build

EXPOSE 3030

CMD ["npm", "run", "start:prod"]