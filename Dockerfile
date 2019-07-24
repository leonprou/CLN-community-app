FROM colucom/nodejs:8.12.0
USER root
#WORKDIR /app
#RUN apt install git
#COPY package*.json ./
COPY . .
RUN rm -rf node_modules && rm package-lock.json

RUN ls -lah

RUN ls -l scripts

RUN export NODE_ENV=qa scripts/deploy.sh
RUN cp -r server/* . 
RUN ls -lah
#RUN npm ls 2>&1

#COPY . /app
#RUN cd server && npm install
#WORKDIR /app/server
CMD [ "npm", "start" ]