FROM node:18

COPY . .

RUN npm ci

EXPOSE 3000

CMD [ "node","date-service.js" ]