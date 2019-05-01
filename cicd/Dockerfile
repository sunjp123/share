FROM node

RUN mkdir /share

WORKDIR /share

COPY ./package.json /share

RUN [ "npm", "install" ]

RUN openssl genrsa -out rsa_1024_priv.pem 1024

RUN openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem

COPY . /share/

CMD [ "npm", "start" ]
