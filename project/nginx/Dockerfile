FROM nginx

RUN apt update && apt install vim -y

RUN rm /etc/nginx/conf.d/default.conf 
COPY nginx.conf /etc/nginx/conf.d/
