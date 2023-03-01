FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm i

RUN npm run build

COPY . .

CMD [ "node", "dist/main.js" ]
