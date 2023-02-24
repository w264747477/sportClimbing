FROM hub.iot.chinamobile.com/library/nginx:1.14
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo "Asia/Shanghai" > /etc/timezone
# RUN sed -i '0,/\/usr\/share\/nginx\/html;/s//\/data\/www;/' /etc/nginx/conf.d/default.conf
COPY mallos/ /data/www/mallos
WORKDIR /data/www/
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
# FROM hub.iot.chinamobile.com/library/nginx:1.14
# RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
#     && echo "Asia/Shanghai" > /etc/timezone
# RUN sed -i '7a \    location /mallos/dataCockpit {\n\        alias  /data/www/;\n\        index  index.html;\n\        try_files  $uri /index.html;\n\    }\n' /etc/nginx/conf.d/default.conf
# RUN sed -i '15c \        root  /data/www;' /etc/nginx/conf.d/default.conf
# COPY mallos-dataCockpit/ /data/www/mallos-dataCockpit
# WORKDIR /data/www/
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]