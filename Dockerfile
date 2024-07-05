FROM nginx:stable-alpine

COPY ./img /usr/share/nginx/html/img
COPY ./pages /usr/share/nginx/html/pages
COPY ./scripts /usr/share/nginx/html/scripts
COPY ./scss /usr/share/nginx/html/scss
COPY ./index.html /usr/share/nginx/html