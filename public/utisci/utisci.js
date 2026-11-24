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
      row.insertAdjacentElement('afterend',nav);
      var step=function(d){var w=cs[0].getBoundingClientRect().width+18;row.scrollBy({left:d*w,behavior:'smooth'})};
      nav.children[0].addEventListener('click',function(){step(-1)});
      nav.children[1].addEventListener('click',function(){step(1)});
    }
    on(cs[0]);
  }
  (function w(){
    var s=document.getElementById('utisci');
    if(s&&s===last&&s.querySelector('.u-c')){stable++}else{stable=0;last=s}
    if(stable>=3){bind(s);return}
    if(++tries<200)setTimeout(w,120);
  })();
})();
