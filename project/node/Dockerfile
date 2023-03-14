FROM node:17


WORKDIR /usr/app/

COPY src .

RUN apt-get update && apt-get install -y wget

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

RUN npm install

EXPOSE 3000

