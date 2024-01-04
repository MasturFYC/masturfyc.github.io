import{s as P,f as o,a as C,l as y,g as l,h,u as E,c as $,m as b,d as c,j as m,i as j,v as r,x as _}from"../chunks/scheduler.ee114aae.js";import{S as k,i as I}from"../chunks/index.81b31921.js";function w(f){let e,t,u="Nginx-FPM + PHP Configuration",p,a,n,v=`server {

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
}`,d;return{c(){e=o("div"),t=o("h1"),t.textContent=u,p=C(),a=o("div"),n=o("pre"),d=y(v),this.h()},l(i){e=l(i,"DIV",{class:!0});var s=h(e);t=l(s,"H1",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-1631klj"&&(t.textContent=u),p=$(s),a=l(s,"DIV",{class:!0});var g=h(a);n=l(g,"PRE",{});var x=h(n);d=b(x,v),x.forEach(c),g.forEach(c),s.forEach(c),this.h()},h(){m(t,"class","is-size-3 pb-4"),m(a,"class","content"),m(e,"class","section p-0")},m(i,s){j(i,e,s),r(e,t),r(e,p),r(e,a),r(a,n),r(n,d)},p:_,i:_,o:_,d(i){i&&c(e)}}}class O extends k{constructor(e){super(),I(this,e,null,w,P,{})}}export{O as component};
