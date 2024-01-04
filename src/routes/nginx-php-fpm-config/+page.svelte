<div class="container is-max-desktop">
  <h1 class="title is-family-secondary">Nginx-FPM + PHP Configuration</h1>
  <div class="content">
    <pre>{`server {

  listen 80 default_server;
  listen [::]:80 default_server;

  access_log /var/log/nginx/example.journaldev.com-access.log;
  error_log  /var/log/nginx/example.journaldev.com-error.log error;
  root /var/www/html;

  index index.php index.html index.htm index.nginx-debian.html;

  server_name gucel.id;

  location / {
    index index.php index.html;
    try_files $uri $uri/ /index.php?$query_string;
  }

  location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/run/php/php8.2-fpm.sock;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    # ini digunakan sebagai server variabe di PHP untuk root path site
    fastcgi_param DOC_ROOT /home/fyc/app/php-home-page;
  }

  location ~ /\.ht {
    deny all;
  }
}`}</pre>
  </div>
</div>

