FROM node:21.7.0
RUN mkdir /home/nexcent
WORKDIR /home/nexcent
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
