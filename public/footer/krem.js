(function(){
if(window.__mjKremFooter)return;window.__mjKremFooter=1;
var HTML="<div class=\"f-in\">\n<div class=\"f-soc l\"></div>\n<div class=\"f-env\"><img class=\"e\" src=\"/assets/kamen/koverta-sampanj.webp?v=1\" alt=\"\" loading=\"lazy\"><div class=\"f-paper\"><img src=\"/assets/site/maca-providna.png\" alt=\"\"><div class=\"s\">Mnjauprrrrr</div><div class=\"h\">Nakit za mačkice</div><div class=\"t\">Ili jesi ili nisi mačka</div><a href=\"mailto:marina.rakic1806@gmail.com\">marina.rakic1806@gmail.com</a></div></div>\n<div class=\"f-soc r\"><a href=\"https://www.tiktok.com/@mnjauprrrrr\" target=\"_blank\" rel=\"noopener\" aria-label=\"TikTok\"><svg viewBox=\"0 0 24 24\"><path d=\"M16.6 3c.3 2.4 1.8 4 4.1 4.2v3.1c-1.5 0-2.9-.4-4.1-1.2v6.4c0 3.6-2.6 6.1-6 6.1a5.9 5.9 0 0 1-6-5.9c0-3.6 3.1-6.3 6.7-5.8v3.2c-1.7-.5-3.3.6-3.3 2.4 0 1.5 1.200 2.700 2.700 2.700 1.700 0 2.700-1.200 2.700-3V3z\"/></svg></a><a href=\"https://www.instagram.com/mnjauprrrrrr\" target=\"_blank\" rel=\"noopener\" aria-label=\"Instagram\"><svg viewBox=\"0 0 24 24\"><path d=\"M7.800 2h8.400A5.800 5.800 0 0 1 22 7.800v8.400a5.800 5.800 0 0 1-5.800 5.800H7.800A5.800 5.800 0 0 1 2 16.200V7.800A5.800 5.800 0 0 1 7.800 2zm0 2A3.800 3.800 0 0 0 4 7.800v8.400A3.800 3.800 0 0 0 7.800 20h8.400a3.800 3.800 0 0 0 3.800-3.800V7.800A3.800 3.800 0 0 0 16.200 4H7.800zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.500-3.200a1.200 1.200 0 1 1 0 2.400 1.200 1.200 0 0 1 0-2.400z\"/></svg></a><a href=\"https://www.facebook.com/share/1CaxCXrf5x/?mibextid=wwXIfr\" target=\"_blank\" rel=\"noopener\" aria-label=\"Facebook\"><svg viewBox=\"0 0 24 24\"><path d=\"M13.500 22v-8.200h2.800l.4-3.300h-3.200V8.400c0-.9.300-1.600 1.600-1.600h1.700V3.900c-.3 0-1.300-.1-2.400-.1-2.500 0-4.200 1.500-4.200 4.300v2.400H7.400v3.300h2.800V22h3.300z\"/></svg></a><a href=\"https://www.pinterest.com/marinar369/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Pinterest\"><svg viewBox=\"0 0 24 24\"><path d=\"M12 2a10 10 0 0 0-3.600 19.300c-.1-.8-.2-2 0-2.900l1.200-5s-.3-.6-.3-1.500c0-1.400.8-2.400 1.800-2.400.9 0 1.300.6 1.300 1.400 0 .9-.5 2.100-.8 3.300-.2 1 .5 1.800 1.500 1.800 1.800 0 3.200-1.900 3.200-4.600 0-2.400-1.700-4.100-4.200-4.100-2.900 0-4.600 2.200-4.600 4.400 0 .9.300 1.800.8 2.300.1.1.1.2.1.3l-.3 1.100c0 .2-.2.2-.4.1-1.300-.6-2.100-2.500-2.100-4 0-3.300 2.400-6.300 6.900-6.300 3.600 0 6.400 2.600 6.400 6 0 3.600-2.300 6.500-5.400 6.500-1.100 0-2.100-.6-2.400-1.200l-.7 2.500c-.2.900-.9 2.100-1.300 2.800A10 10 0 1 0 12 2z\"/></svg></a></div>\n</div><div class=\"f-copy\">© 2026 Mnjauprrrrr</div>";
function go(){
  var old=document.querySelector('footer#kontakt');
  if(!old||document.getElementById('mfoot'))return false;
  old.removeAttribute('id');old.style.display='none';old.setAttribute('data-old-footer','1');
  if(!document.getElementById('mfoot-css')){var l=document.createElement('link');l.id='mfoot-css';l.rel='stylesheet';l.href='/footer/footer.css?v=17';document.head.appendChild(l)}
  var f=document.createElement('footer');f.id='mfoot';f.innerHTML='<span id="kontakt" style="position:absolute;top:0"></span>'+HTML;
  old.parentNode.insertBefore(f,old.nextSibling);return true;
}

document.documentElement.classList.add('mj-print');
function clr(){
  var R=document.getElementById('root')||document.body;
  document.querySelectorAll('body *').forEach(function(e){
    if(e.closest('#mfoot')||e.closest('#li-koverta')||e.tagName==='VIDEO'||e.tagName==='IMG')return;
    var r=e.getBoundingClientRect();if(r.width<Math.min(1000,innerWidth*.9)||r.height<60)return;
    var cs0=getComputedStyle(e);if(cs0.position==='fixed')return;
    var c=getComputedStyle(e),bi=c.backgroundImage,bc=c.backgroundColor;
    var light=function(s){var m=s.match(/rgba?\(([^)]*)\)/g);if(!m)return false;return m.every(function(x){var n=x.match(/[\d.]+/g).map(Number);return n[0]>225&&n[1]>212&&n[2]>190&&(n.length<4||n[3]>0)})};
    if(r.height>=200&&bc==='rgb(244, 237, 226)')e.style.setProperty('background-color','transparent','important');
    if(r.height<200){}else if(e.classList.contains('mj-leopard'))e.style.setProperty('background-image','none','important');
    else if(bi.indexOf('leopard')>-1&&e.className.indexOf('mj-leopard')<0&&!e.closest('footer'))e.style.setProperty('background-image','none','important');
    else if(bi.indexOf('linear-gradient')===0&&light(bi))e.style.setProperty('background-image','none','important');
    if(e.dataset.mjm)return;
    var empty=!e.children.length&&!e.textContent.trim();
    var tint=/rgba\(\s*\d+,\s*\d+,\s*\d+,\s*0?\.\d+\s*\)/.test(bc);
    if(e.tagName==='DIV'&&r.height>=60&&empty&&(bi.indexOf('gradient')>-1||tint)&&cs0.position!=='fixed'){
      e.dataset.mjm=1;e.style.setProperty('display','none','important');
    }else if(bi.indexOf('gradient')>-1&&!empty&&r.height>200&&e.tagName!=='NAV'&&e.tagName!=='HEADER'&&e.tagName!=='BUTTON'){
      e.dataset.mjm=1;e.style.setProperty('background-image','none','important');
    }
  });
}
var ct=0;(function t(){clr();if(ct++<12)setTimeout(t,400)})();
var tries=0;(function t(){if(go()||tries++>80)return;setTimeout(t,150)})();
new MutationObserver(function(){var o=document.querySelector('footer#kontakt');if(o&&!document.getElementById('mfoot'))go()}).observe(document.documentElement,{childList:true,subtree:true});
})();
