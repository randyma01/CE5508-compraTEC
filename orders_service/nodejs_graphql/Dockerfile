# Node.js Version
FROM node:11

# Working Directory
WORKDIR /usr/src/app

# Install all Dependencies
COPY package*.json ./
RUN npm install

#Bundle App Source
COPY . .

#Port
EXPOSE 8080

#Execute 
CMD [ "npm", "start" ]
