FROM node:12.19.0

USER node

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV HOME=/home/node

WORKDIR /home/node/agencia/front

RUN npm install -g @angular/cli

EXPOSE 4200

CMD [ "node" ]