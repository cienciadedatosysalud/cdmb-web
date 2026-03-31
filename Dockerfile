FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/html/cdmb-web

COPY ./docs /usr/share/nginx/html/cdmb-web

RUN echo '<script>window.location.href="/cdmb-web/"</script>' > /usr/share/nginx/html/index.html

EXPOSE 80
