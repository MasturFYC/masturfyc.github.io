<section>
	<div class="title">Configure zram in Ubuntu 22.04</div>
	<div class="content">
		<p>Apa itu <code>zram</code>. zram biasa disebut <code>compcache</code> (<b>compressed cache</b>)
      adalah sebuah blok kompresi device pada modul kernel di linux dalam suatu <code>ram</code>.
      Blok device yang dibuat oleh zram ini dapat digunakan sebagai <code>swap</code>
      atau biasa dikenal dengan nama <code>RAM disk</code>.
		</p>
    <p>
      Kegunaan zram secara umum adalah tempat temporary file (<code>/tmp</code>)
      dan sebagai <code>swap</code> device.
    </p>
    <p><span class="is-size-5">Konfigurasi zram di file</span> <code>/usr/bin/init-zram-swapping</code></p>
    <pre>#!/bin/sh

cores=$(nproc --all)
modprobe zram num_devices=$cores
compress="lz4hc"
priority=32764

# Calculate memory to use for zram (1/2 of ram)
totalmem=`LC_ALL=C free | grep -e "^Mem:" | sed -e 's/^Mem: *//' -e 's/  *.*//'`
mem=$((totalmem / $cores * 1024))

# initialize the devices
core=0
while [ $core -lt $cores ]; do
  echo $compress > /sys/block/zram$core/comp_algorithm
  echo $mem > /sys/block/zram$core/disksize
  mkswap /dev/zram$core
  swapon -p $(( priority + core )) /dev/zram$core
  core=$(( core + 1 ))
done</pre>
	</div>
</section>

<style lang="scss">
	section {
		max-width: 640px;
		margin: 0 auto;
	}
</style>
