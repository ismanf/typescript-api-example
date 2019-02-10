FROM node:10-alpine as builder

USER node

WORKDIR /home/node

COPY --chown=node:node package.json .

RUN npm install

COPY --chown=node:node . .

RUN npm run build


FROM node:10-alpine

USER node

WORKDIR /home/node

COPY --chown=node:node --from=builder /home/node/dist .

COPY --chown=node:node --from=builder /home/node/node_modules .

CMD npm run serve