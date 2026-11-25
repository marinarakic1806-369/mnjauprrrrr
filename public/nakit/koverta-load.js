(function(){
  var done=false,loading=false;
  function place(){
    if(done)return;
    var h=[].slice.call(document.querySelectorAll('h1')).find(function(x){return x.textContent.trim()==='Nakit';});
    var sec=document.getElementById('li-koverta');
    if(!h){ if(sec)sec.remove(); return; }
    var grid=h.closest('section')||h.parentElement; if(!grid)return;
    function bad(e){var c=getComputedStyle(e);return /hidden|auto|scroll/.test(c.overflowX+' '+c.overflowY);}
    for(var a=grid.parentElement;a&&a.id!=='root'&&a!==document.body;a=a.parentElement){if(bad(a))a.style.setProperty('overflow','clip','important');}
    if(sec&&sec.previousElementSibling===grid)return;
    if(!sec){sec=document.createElement('section');sec.id='li-koverta';sec.style.cssText='position:relative;width:100%;margin-top:60px';}
    grid.parentNode.insertBefore(sec,grid.nextSibling);
    if(!sec._w){sec._w=1;watch(sec);}
  }
  function watch(sec){
    var io=new IntersectionObserver(function(e){
      if(e[0].isIntersecting&&!loading){loading=true;io.disconnect();
        var s=document.createElement('script');s.src='/nakit/koverta.js?v=2';
        s.onload=function(){var host=document.createElement('div');sec.appendChild(host);window.MJKoverta.mount(host);};
        document.head.appendChild(s);}
    },{rootMargin:'800px 0px'});
    io.observe(sec);
  }
  new MutationObserver(place).observe(document.documentElement,{childList:true,subtree:true});
  place();
})();
