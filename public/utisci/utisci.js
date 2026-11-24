(function(){
  var last=null,stable=0,tries=0;
  function bind(s){
    var cs=[].slice.call(s.querySelectorAll('.u-c'));
    function on(c){cs.forEach(function(x){x.classList.toggle('on',x===c)})}
    cs.forEach(function(c){
      c.addEventListener('mouseenter',function(){if(innerWidth>860)on(c)});
      c.addEventListener('focus',function(){on(c)});
      c.addEventListener('click',function(){on(c)});
    });
    on(cs[0]);
  }
  (function w(){
    var s=document.getElementById('utisci');
    if(s&&s===last&&s.querySelector('.u-c')){stable++}else{stable=0;last=s}
    if(stable>=3){bind(s);return}
    if(++tries<200)setTimeout(w,120);
  })();
})();
