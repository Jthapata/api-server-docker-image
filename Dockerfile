FROM node

LABEL maintainer="jesse zapta"
LABEL description="This will host a site from the express module"
LABEL cohort="18"
LABEL animal="tiger"

WORKDIR /app

COPY . .

EXPOSE 8181

RUN npm install

CMD [ "npm", "run", "start" ]