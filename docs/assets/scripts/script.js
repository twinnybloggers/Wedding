function functionCreateElement(a,b){var c=document.createElement(a);for(var d in b)"class"==d?c.classList.add.apply(c.classList,b[d]):"content"==d?c.innerHTML=b[d]:c[d]=b[d];return c}function functionLoadScript(a){return new Promise(function(b,c){var d=functionCreateElement("script",{src:a,async:!0,defer:!0}),e=!1;d.onload=d.onreadystatechange=function(){e||this.readyState&&"complete"!=this.readyState||(e=!0,b())},d.onerror=function(){c(d,a)};var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(d,f)})}Defer(function(){var a=document.getElementById("app"),b=document.getElementById("loaders");b.remove(),a.classList.remove("invisible"),functionRunInvitation()},2e3);function functionRunInvitation(){var a=window.location.search,b=new URLSearchParams(a);document.getElementById("text_kepada").innerText=null!=b.get("kepada")||null!=b.get("to")?b.get("kepada")||b.get("to"):"Tamu Undangan";var c=!1;functionPlayMusic=function(a,b){b.playMusic?a&&a.play():a&&(c?a.pause():a.play()),a&&(a.onplaying=function(){c=!0},a.onpause=function(){c=!1})},functionFullScreen=function(a){var b=document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement;b?document.exitFullscreen?(document.exitFullscreen(),null!=a&&(a.querySelector(".fullscreen_off").classList.add("hidden"),a.querySelector(".fullscreen_on").classList.remove("hidden"))):document.webkitExitFullscreen?(document.webkitExitFullscreen(),null!=a&&(a.querySelector(".fullscreen_off").classList.add("hidden"),a.querySelector(".fullscreen_on").classList.remove("hidden"))):document.mozCancelFullScreen?(document.mozCancelFullScreen(),null!=a&&(a.querySelector(".fullscreen_off").classList.add("hidden"),a.querySelector(".fullscreen_on").classList.remove("hidden"))):document.msExitFullscreen&&(document.msExitFullscreen(),null!=a&&(a.querySelector(".fullscreen_off").classList.add("hidden"),a.querySelector(".fullscreen_on").classList.remove("hidden"))):document.documentElement.requestFullscreen?(document.documentElement.requestFullscreen(),null!=a&&(a.querySelector(".fullscreen_off").classList.remove("hidden"),a.querySelector(".fullscreen_on").classList.add("hidden"))):document.documentElement.mozRequestFullScreen?(document.documentElement.mozRequestFullScreen(),null!=a&&(a.querySelector(".fullscreen_off").classList.remove("hidden"),a.querySelector(".fullscreen_on").classList.add("hidden"))):document.documentElement.webkitRequestFullScreen?(document.documentElement.webkitRequestFullScreen(),null!=a&&(a.querySelector(".fullscreen_off").classList.remove("hidden"),a.querySelector(".fullscreen_on").classList.add("hidden"))):document.documentElement.msRequestFullscreen&&(document.documentElement.msRequestFullscreen(),null!=a&&(a.querySelector(".fullscreen_off").classList.remove("hidden"),a.querySelector(".fullscreen_on").classList.add("hidden")))},functionCountdown=function(a){var b=new Date(a.dataset.datetime).getTime(),c=a.querySelector(".countdown > .day > .number"),d=a.querySelector(".countdown > .hour > .number"),e=a.querySelector(".countdown > .minute > .number"),f=a.querySelector(".countdown > .second > .number"),g=setInterval(function(){var a=new Date().getTime(),h=b-a,i=Math.floor(h/(24*(60*(60*1e3)))),j=Math.floor(h%(24*(60*(60*1e3)))/(60*(60*1e3))),k=Math.floor(h%(60*(60*1e3))/(60*1e3)),l=Math.floor(h%(60*1e3)/1e3);c.innerHTML=i,d.innerHTML=j,e.innerHTML=k,f.innerHTML=l,0>h&&(clearInterval(g),c.innerHTML="00",d.innerHTML="00",e.innerHTML="00",f.innerHTML="00")},1e3)};var d="";document.querySelectorAll(".glide__slide").forEach(function(a,b){d+="<div class=\"glide__bullet ".concat(0==b?"hidden":""," relative mx-1 h-1 w-full cursor-pointer overflow-hidden rounded-lg first:ml-0 last:mr-0\" data-glide-dir=\"=").concat(b,"\"></div>")}),functionLoadScript("https://cdn.jsdelivr.net/npm/@glidejs/glide").then(function(){var a=new Glide(".glide",{autoplay:8e3,animationDuration:600,animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",hoverpause:!0,gap:0,rewind:!1,type:"slider"}).mount();a.disable(),a.on("move.after",function(){0==a.index?document.body.classList.add("glide_first"):document.body.classList.remove("glide_first")}),document.getElementById("glide__bullets").innerHTML=d,document.getElementById("button_swipe")&&document.getElementById("button_swipe").addEventListener("click",function(b){b.preventDefault(),a.enable(),a.go(">"),document.querySelector(".glide__bullets").classList.remove("invisible"),functionPlayMusic(document.getElementById("music")?document.getElementById("music"):null,{playMusic:!0})}),document.getElementById("button_toggle_audio")&&document.getElementById("button_toggle_audio").addEventListener("click",function(){c?(this.querySelector(".audio_on").classList.add("hidden"),this.querySelector(".audio_off").classList.remove("hidden"),functionPlayMusic(document.getElementById("music")?document.getElementById("music"):null,{playMusic:!1})):(this.querySelector(".audio_on").classList.remove("hidden"),this.querySelector(".audio_off").classList.add("hidden"),functionPlayMusic(document.getElementById("music")?document.getElementById("music"):null,{playMusic:!0}))}),document.getElementById("button_hadiah")&&document.getElementById("button_hadiah").addEventListener("click",function(a){a.preventDefault(),document.querySelector(".container_hadiah").classList.remove("hidden"),document.querySelector(".container_kado").classList.add("hidden")}),document.getElementById("button_kado")&&document.getElementById("button_kado").addEventListener("click",function(a){a.preventDefault(),document.querySelector(".container_kado").classList.remove("hidden"),document.querySelector(".container_hadiah").classList.add("hidden")}),document.getElementById("button_salin_rekening")&&document.getElementById("button_salin_rekening").addEventListener("click",function(a){a.preventDefault();var b=document.getElementById("nomor_rekening").textContent.replace(/\s/g,"").replace("-","").trim();if(!navigator.clipboard){var c=document.createElement("textarea");c.textContent=b,c.className="sr-only",document.body.appendChild(c);var d=document.getSelection(),e=document.createRange();e.selectNode(c),d.removeAllRanges(),d.addRange(e),document.execCommand("copy"),document.getElementById("button_salin_rekening").innerHTML="Berhasil Disalin",d.removeAllRanges(),document.body.removeChild(c)}else navigator.clipboard.writeText(b).then(function(){document.getElementById("button_salin_rekening").innerHTML="Berhasil Disalin"}).catch(function(){document.getElementById("button_salin_rekening").innerHTML="Gagal Disalin"})}),document.getElementById("button_toggle_fullscreen")&&document.getElementById("button_toggle_fullscreen").addEventListener("click",function(a){a.preventDefault(),this.querySelector(".fullscreen_off").classList.remove("hidden"),functionFullScreen(this)});var b=document.querySelector(".layout_gallery");b&&functionLoadScript("https://cdn.jsdelivr.net/npm/medium-zoom@1.0.6/dist/medium-zoom.min.js").then(function(){for(var a=b.querySelector("#image_list").textContent.split(/\s*,\s*/),c=0;c<a.length;c++)a[c]="<img data-zoomable class='rounded-md mb-3 animate_animated animate_fadeIn animate_slower ' src='".concat(a[c],"' />");b.querySelector("#image_list").innerHTML=a.toString().replace(/\,/g,""),mediumZoom("[data-zoomable]",{margin:0,opacity:1,borderRadius:0})});for(var e=document.getElementsByClassName("countdown_wrapper"),f=0;f<e.length;f++)this.functionCountdown(e[f])})}var pathName=window.location.pathname.split("/").pop();