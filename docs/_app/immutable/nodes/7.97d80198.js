import{s as y,f as o,a as P,l as C,g as l,h,r as E,c as $,m as k,d as c,j as m,i as I,x as r,u}from"../chunks/scheduler.6ec384de.js";import{S as b,i as j}from"../chunks/index.2b0a6367.js";function w(f){let e,t,_="Nginx-FPM + PHP Configuration",p,a,n,x=`server {

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

  location ~ .php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/run/php/php8.2-fpm.sock;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    # ini digunakan sebagai server variabe di PHP untuk root path site
    fastcgi_param DOC_ROOT /home/fyc/app/php-home-page;
  }

  location ~ /.ht {
    deny all;
  }
}`,d;return{c(){e=o("div"),t=o("h1"),t.textContent=_,p=P(),a=o("div"),n=o("pre"),d=C(x),this.h()},l(i){e=l(i,"DIV",{class:!0});var s=h(e);t=l(s,"H1",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-hlu21u"&&(t.textContent=_),p=$(s),a=l(s,"DIV",{class:!0});var g=h(a);n=l(g,"PRE",{});var v=h(n);d=k(v,x),v.forEach(c),g.forEach(c),s.forEach(c),this.h()},h(){m(t,"class","title is-family-secondary"),m(a,"class","content"),m(e,"class","container is-max-desktop")},m(i,s){I(i,e,s),r(e,t),r(e,p),r(e,a),r(a,n),r(n,d)},p:u,i:u,o:u,d(i){i&&c(e)}}}class O extends b{constructor(e){super(),j(this,e,null,w,y,{})}}export{O as component};
