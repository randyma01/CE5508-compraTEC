# Node.js Version
FROM node:11

# Working Directory
WORKDIR /app
COPY package.json /app

# Dependencies
RUN npm install
COPY . /app

#Port
EXPOSE 8000

#Execute 
CMD npm start
