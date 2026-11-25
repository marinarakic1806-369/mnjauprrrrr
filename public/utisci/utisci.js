(function(){
  var last=null,stable=0,tries=0;
  function bind(s){
    var row=s.querySelector('.u-row'),cs=[].slice.call(s.querySelectorAll('.u-c'));
    function on(c){cs.forEach(function(x){x.classList.toggle('on',x===c)})}
    function mid(){
      var r=row.getBoundingClientRect(),cx=r.left+r.width/2,best=cs[0],bd=1e9;
      cs.forEach(function(c){var b=c.getBoundingClientRect(),d=Math.abs(b.left+b.width/2-cx);if(d<bd){bd=d;best=c}});
      on(best);
    }
    cs.forEach(function(c){
      c.addEventListener('mouseenter',function(){if(innerWidth>860)on(c)});
      c.addEventListener('focus',function(){on(c)});
    });
    row.addEventListener('scroll',function(){if(innerWidth<=860||!row.matches(':hover'))mid()},{passive:true});
    row.addEventListener('mouseleave',mid);
    if(!s.querySelector('.u-nav')){
      var nav=document.createElement('div');nav.className='u-nav';
      nav.innerHTML='<button type="button" aria-label="Prethodna">&larr;</button><button type="button" aria-label="Sledeća">&rarr;</button>';
      row.parentNode.appendChild(nav);
      var step=function(d){var w=cs[0].getBoundingClientRect().width+18;row.scrollBy({left:d*w,behavior:'smooth'})};
      nav.children[0].addEventListener('click',function(){step(-1)});
      nav.children[1].addEventListener('click',function(){var end=row.scrollLeft+row.clientWidth>=row.scrollWidth-4;if(end)row.scrollTo({left:0,behavior:'smooth'});else step(1)});row.addEventListener('scroll',function(){var end=row.scrollLeft+row.clientWidth>=row.scrollWidth-4;nav.children[1].innerHTML=end?'&larr;':'&rarr;'},{passive:true});
    }
    on(cs[0]);
    // telefon: sam se pomera zdesna ulevo (pauza dok je dodiruje)
    var timer=null,paused=false,resume=0,vis=true;
    var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function auto(){
      if(innerWidth>860||paused||!vis||rm||Date.now()<resume)return;
      var w=cs[0].getBoundingClientRect().width+12,end=row.scrollLeft+row.clientWidth>=row.scrollWidth-6;
      if(end)row.scrollTo({left:0,behavior:'smooth'});else row.scrollBy({left:w,behavior:'smooth'});
    }
    ['touchstart','pointerdown','click'].forEach(function(e){row.addEventListener(e,function(){paused=true},{passive:true})});
    if('IntersectionObserver' in window){new IntersectionObserver(function(en){vis=en[0].isIntersecting},{threshold:.4}).observe(row)}
    timer=setInterval(auto,3600);
    // slike svih kartica se ucitavaju unapred (cim se sekcija priblizi), da slajd ne ceka
    function pre(){cs.forEach(function(c){var im=c.querySelector('img');if(im){im.loading='eager';im.decoding='async'}})}
    if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){if(en[0].isIntersecting){pre();io.disconnect()}},{rootMargin:'1800px 0px'});io.observe(s)}else pre();
  }
  (function w(){
    var s=document.getElementById('utisci');
    if(s&&s===last&&s.querySelector('.u-c')){stable++}else{stable=0;last=s}
    if(stable>=3){bind(s);return}
    if(++tries<200)setTimeout(w,120);
  })();

  // v53: ulazna animacija (redom) + skidanje navodnika iz teksta (zlatni su iznad); radi i kad React ponovo iscrta karticu
  (function(){
    var n=0,ticks=0,io=null;
    if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.style.setProperty('--d',(n++%4*0.15)+'s');e.target.classList.add('in');io.unobserve(e.target)}});n=0},{threshold:.15});
    }
    function scan(){
      document.querySelectorAll('#utisci .u-c:not([data-rv])').forEach(function(c){
        c.setAttribute('data-rv','1');
        var q=c.querySelector('.u-q');if(q)q.textContent=q.textContent.replace(/^[\u201E\u201C"]\s*/,'').replace(/\s*[\u201C\u201D"]$/,'');
        if(io){c.classList.add('rv');io.observe(c)}
      });
      if(++ticks<100)setTimeout(scan,300);
    }
    scan();
  })();
})();
