FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY index.html /usr/share/nginx/html
# Move the default conf out of the way
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf_orig 
# Copy in project's new nginx conf
COPY nginx.conf /etc/nginx
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]