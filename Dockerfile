FROM node:latest
WORKDIR /tmp/project_modules
COPY package.json /tmp/project_modules/package.json
RUN npm install .
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

