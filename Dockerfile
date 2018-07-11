FROM node:8-alpine

RUN apk update && apk add bash \
		&& echo "PS1='\u:\w\$ '" > /root/.bashrc \
		&& mkdir /home/Development \
		&& rm /var/cache/apk/*

WORKDIR /home/Development

RUN npm install && npm i -g mocha

VOLUME /home/Development

ENTRYPOINT /bin/bash