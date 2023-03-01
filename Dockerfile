FROM node:18

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

COPY node_modules ./node_modules
COPY dist ./dist

CMD [ "node", "dist/main.js" ]
