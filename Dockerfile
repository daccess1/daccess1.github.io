FROM nginx:stable-alpine

COPY .https://d25ebjvanew4na.cloudfront.net/static/ /usr/share/nginx/htmlhttps://d25ebjvanew4na.cloudfront.net/static/
COPY ./pages /usr/share/nginx/html/pages
COPY ./scripts /usr/share/nginx/html/scripts
COPY ./scss /usr/share/nginx/html/scss
COPY ./index.html /usr/share/nginx/html