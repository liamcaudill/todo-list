FROM node:18

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

# Generate Prisma database client code
RUN npm run prisma:generate
ENV PORT=3000
CMD [ "npm", "run","start:dev"]
