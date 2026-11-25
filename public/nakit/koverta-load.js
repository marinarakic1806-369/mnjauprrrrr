(function(){
  var done=false,loading=false;
  function foot(b){var i=document.querySelector('#mfoot img.e');if(!i)return;var u=b?'/assets/kamen/koverta.webp?v=1':'/assets/kamen/koverta-sampanj.webp?v=1';if(i.getAttribute('src')!==u)i.setAttribute('src',u);}
  function place(){
    if(done)return;
    var h=[].slice.call(document.querySelectorAll('h1')).find(function(x){return x.textContent.trim()==='Nakit';});
    var sec=document.getElementById('li-koverta');
    if(!h){ if(sec)sec.remove(); document.documentElement.classList.remove('mj-li'); foot(false); return; }
    var grid=h.closest('section')||h.parentElement; if(!grid)return;
    function bad(e){var c=getComputedStyle(e);return /hidden|auto|scroll/.test(c.overflowX+' '+c.overflowY);}
    for(var a=grid.parentElement;a&&a.id!=='root'&&a!==document.body;a=a.parentElement){if(bad(a))a.style.setProperty('overflow','clip','important');}
    foot(true);
    if(sec&&sec.previousElementSibling===grid)return;
    if(!sec){sec=document.createElement('section');sec.id='li-koverta';sec.style.cssText='position:relative;width:100%;pointer-events:none;margin-top:'+(innerWidth<=860?'-150px':'0');}
    grid.parentNode.insertBefore(sec,grid.nextSibling);document.documentElement.classList.add('mj-li');
    if(!sec._w){sec._w=1;watch(sec);}
  }
  function watch(sec){
    function go(){
      if(loading)return;
      var r=sec.getBoundingClientRect();
      if(r.top<innerHeight+800&&r.bottom>-800){
        loading=true;clearInterval(t);removeEventListener('scroll',go);
        var s=document.createElement('script');s.src='/nakit/koverta.js?v=20';
        s.onload=function(){var host=document.createElement('div');sec.appendChild(host);window.MJKoverta.mount(host);};
        document.head.appendChild(s);
      }
    }
    var t=setInterval(go,700);addEventListener('scroll',go,{passive:true});go();
  }
  new MutationObserver(place).observe(document.documentElement,{childList:true,subtree:true});
  place();
})();
