var createElement=function(a,b){var c=document.createElement(a);for(var d in b)"class"==d?c.classList.add.apply(c.classList,b[d]):"content"==d?c.innerHTML=b[d]:c[d]=b[d];return c},loadScript=function(a){return new Promise(function(b,c){var d=createElement("script",{src:a,async:!0,defer:!0}),e=!1;d.onload=d.onreadystatechange=function(){e||this.readyState&&"complete"!=this.readyState||(e=!0,b())},d.onerror=function(){c(d,a)};var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(d,f)})},getURLParams=function(a,b){var c=new URLSearchParams(a);(null!=c.get("kepada")||null!=c.get("to"))&&(b.innerText=c.get("kepada")||c.get("to"))},musicIsPlaying=!1,playMusic=function(a,b){a&&(b.playMusic?(a.play(),musicIsPlaying=!0):musicIsPlaying?(a.pause(),musicIsPlaying=!1):(a.play(),musicIsPlaying=!0),a.onplaying=function(){musicIsPlaying=!0},a.onpause=function(){musicIsPlaying=!1})},fullScreenMode=function(a){var b=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement,c=function(b){a&&(b?(a.querySelector(".fullscreen_off").classList.remove("hidden"),a.querySelector(".fullscreen_on").classList.add("hidden")):(a.querySelector(".fullscreen_off").classList.add("hidden"),a.querySelector(".fullscreen_on").classList.remove("hidden")))};if(!b){var d=document.documentElement.requestFullscreen||document.documentElement.mozRequestFullScreen||document.documentElement.webkitRequestFullScreen||document.documentElement.msRequestFullscreen;d&&(d.call(document.documentElement),c(!0))}else{var e=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen;e&&(e.call(document),c(!1))}},isLoaded=!1;setTimeout(function(){if(!isLoaded){isLoaded=!0;var a=document.getElementById("app"),b=document.getElementById("loaders");b.remove(),a.classList.remove("invisible"),getURLParams(window.location.search,document.getElementById("text_kepada")),loadScript("https://cdn.jsdelivr.net/npm/@glidejs/glide").then(function(){var a=document.querySelector(".glide__bullets"),b=new Glide(".glide",{autoplay:8e3,animationDuration:600,animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",hoverpause:!0,gap:0,rewind:!1,type:"slider"}).mount();b.disable(),b.on("move.after",function(){0===b.index?document.body.classList.add("glide_first"):document.body.classList.remove("glide_first")});var c="";document.querySelectorAll(".glide__slide").forEach(function(a,b){c+="<div class=\"glide__bullet ".concat(0==b?"hidden":""," relative mx-1 h-1 w-full cursor-pointer overflow-hidden rounded-md first:ml-0 last:mr-0\" data-glide-dir=\"=").concat(b,"\"></div>")}),a.innerHTML=c;var d=document.querySelector(".layout_cover");if(d){var e=d.querySelector("#button_swipe");e&&e.addEventListener("click",function(c){c.preventDefault(),b.enable(),b.go(">"),a.classList.remove("invisible"),playMusic(document.getElementById("music")?document.getElementById("music"):null,{playMusic:!0})})}var f=document.querySelector(".layout_date");if(f){var g=f.querySelector(".countdown_wrapper");if(g)var h=new Date(g.dataset.datetime).getTime(),i={days:g.querySelector(".countdown .day .number"),hours:g.querySelector(".countdown .hour .number"),minutes:g.querySelector(".countdown .minute .number"),seconds:g.querySelector(".countdown .second .number")},j=setInterval(function(){var a=new Date().getTime(),b=h-a;if(0>b)for(var c in clearInterval(j),i)i[c].innerHTML="00";else{var d={days:Math.floor(b/(24*(60*(60*1e3)))),hours:Math.floor(b%(24*(60*(60*1e3)))/(60*(60*1e3))),minutes:Math.floor(b%(60*(60*1e3))/(60*1e3)),seconds:Math.floor(b%(60*1e3)/1e3)};for(var e in i)i[e].innerHTML=d[e]}},1e3)}var k=document.querySelector(".layout_gallery");k&&loadScript("https://cdn.jsdelivr.net/npm/medium-zoom@1.0.6/dist/medium-zoom.min.js").then(function(){var a=k.querySelector("#image_list").textContent.split(/\s*,\s*/);a.forEach(function(b,c){a[c]="<img data-zoomable class='rounded-md mb-3 animate_animated animate_fadeIn animate_slower w-full' src='".concat(b,"' />")}),k.querySelector("#image_list").innerHTML=a.toString().replace(/\,/g,""),mediumZoom("[data-zoomable]")});var l=document.querySelector(".layout_gift");if(l){var m=function(a){return navigator.clipboard?navigator.clipboard.writeText(a):new Promise(function(b,c){var d=document.createElement("textarea");d.textContent=a,d.className="sr-only",document.body.appendChild(d);var e=document.getSelection(),f=document.createRange();f.selectNode(d),e.removeAllRanges(),e.addRange(f);var g=document.execCommand("copy");e.removeAllRanges(),document.body.removeChild(d),g?b():c()})},n=l.querySelector("#button_hadiah");n&&n.addEventListener("click",function(a){a.preventDefault(),l.querySelector(".container_hadiah").classList.remove("hidden"),l.querySelector(".container_kado").classList.add("hidden")});var o=l.querySelector("#button_kado");o&&o.addEventListener("click",function(a){a.preventDefault(),l.querySelector(".container_kado").classList.remove("hidden"),l.querySelector(".container_hadiah").classList.add("hidden")});var p=l.querySelector("#button_salin_rekening");p&&p.addEventListener("click",function(a){a.preventDefault();var b=l.querySelector("#nomor_rekening").textContent.replace(/\s/g,"").replace("-","").trim();m(b).then(function(){p.innerHTML="Berhasil Disalin"}).catch(function(){p.remove()})})}var q=document.querySelector(".fab");if(q){var r=q.querySelector("#button_toggle_fullscreen");r&&r.addEventListener("click",function(a){a.preventDefault(),fullScreenMode(r)});var s=q.querySelector("#button_toggle_audio");s&&s.addEventListener("click",function(a){a.preventDefault(),musicIsPlaying?(this.querySelector(".audio_on").classList.add("hidden"),this.querySelector(".audio_off").classList.remove("hidden"),playMusic(document.getElementById("music")?document.getElementById("music"):null,{playMusic:!1})):(this.querySelector(".audio_on").classList.remove("hidden"),this.querySelector(".audio_off").classList.add("hidden"),playMusic(document.getElementById("music")?document.getElementById("music"):null,{playMusic:!0}))})}})}},2e3);