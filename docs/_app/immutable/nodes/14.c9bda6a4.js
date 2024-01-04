import{s as r,f as c,g as n,u as d,j as m,i as l,x as o,d as p}from"../chunks/scheduler.ee114aae.js";import{S as u,i as h}from"../chunks/index.81b31921.js";function g(t){let e,s=`<div class="title">Configure zram in Ubuntu 22.04</div> <div class="content"><p>Apa itu <code>zram</code>. zram biasa disebut <code>compcache</code> (<b>compressed cache</b>)
      adalah sebuah blok kompresi device pada modul kernel di linux dalam suatu <code>ram</code>.
      Blok device yang dibuat oleh zram ini dapat digunakan sebagai <code>swap</code>
      atau biasa dikenal dengan nama <code>RAM disk</code>.</p> <p>Kegunaan zram secara umum adalah tempat temporary file (<code>/tmp</code>)
      dan sebagai <code>swap</code> device.</p> <p><span class="is-size-5">Konfigurasi zram di file</span> <code>/usr/bin/init-zram-swapping</code></p> <pre>#!/bin/sh

cores=$(nproc --all)
modprobe zram num_devices=$cores
compress=&quot;lz4hc&quot;
priority=32764

# Calculate memory to use for zram (1/2 of ram)
totalmem=\`LC_ALL=C free | grep -e &quot;^Mem:&quot; | sed -e &#39;s/^Mem: *//&#39; -e &#39;s/  *.*//&#39;\`
mem=$((totalmem / $cores * 1024))

# initialize the devices
core=0
while [ $core -lt $cores ]; do
  echo $compress &gt; /sys/block/zram$core/comp_algorithm
  echo $mem &gt; /sys/block/zram$core/disksize
  mkswap /dev/zram$core
  swapon -p $(( priority + core )) /dev/zram$core
  core=$(( core + 1 ))
done</pre></div>`;return{c(){e=c("section"),e.innerHTML=s,this.h()},l(a){e=n(a,"SECTION",{class:!0,"data-svelte-h":!0}),d(e)!=="svelte-995h3u"&&(e.innerHTML=s),this.h()},h(){m(e,"class","svelte-1dw4ok8")},m(a,i){l(a,e,i)},p:o,i:o,o,d(a){a&&p(e)}}}class b extends u{constructor(e){super(),h(this,e,null,g,r,{})}}export{b as component};
