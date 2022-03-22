FROM node:16.8.0
WORKDIR /build/src
COPY /build/src/ /build/src/
COPY package*.json /build/src 
RUN npm install --only=prod
CMD ["node", "main.js"]
EXPOSE 3000
