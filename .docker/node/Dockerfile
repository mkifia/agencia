FROM node:12.13.1

USER node

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV HOME=/home/node

WORKDIR /home/node/agencia/front

RUN npm install -g @angular/cli@8.3.20

EXPOSE 4200

CMD [ "node" ]