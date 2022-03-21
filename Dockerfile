FROM node:16.14.2 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@8.5.5
RUN npm install 

COPY . .

RUN npm run build

FROM node:16.14.2 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@8.5.5
RUN npm install 

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]