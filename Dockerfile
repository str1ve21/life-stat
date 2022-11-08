FROM node AS prod
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm test - if you want to test before to build
ENV VITE_PROD_API /api
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=prod /app/docs .
COPY ./nginx.conf /etc/nginx/
EXPOSE 3000
# run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
