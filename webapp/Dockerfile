FROM node:latest as builder

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app

RUN npm run build

FROM node:latest

WORKDIR /app

COPY --from=builder /app/.next /app/.next

COPY --from=builder /app/public /app/public

COPY --from=builder /app/package.json /app/package.json

RUN npm i --opit=dev

EXPOSE 3000

CMD ["npm", "run", "start"]