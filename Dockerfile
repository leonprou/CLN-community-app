FROM colucom/nodejs:8.12.0
USER root

COPY . .

CMD [ "npm", "start" ]