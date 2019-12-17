FROM node:12.13.1

USER node

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV HOME=/home/node

WORKDIR /home/node/swoma/angular

RUN npm i -g npm

RUN npm install -g @angular/cli@8.3.20 && npm cache clean --force

EXPOSE 4200

CMD [ "node" ]