FROM node:20 as development

WORKDIR /app 
COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npm", "run", "start:dev"]