/* Hero (desktop): skaliranje stage-a 1440x960, video u ramu, zlatna staklena animacija iza dugmeta (ista kao ranije) */
(function(){
  var SW=1440,SH=960;
  function f(){
    var h=document.querySelector('[data-hero]'),s=document.querySelector('.gw-s');
    if(!s||!h||!h.clientWidth)return;
    if(window.innerWidth<=860){h.style.removeProperty('height');return}
    var W=h.clientWidth,hh=Math.max(520,Math.min((window.innerHeight-72)*1.18,SH*W/SW)),k=Math.max(W/SW,hh/SH);
    s.style.setProperty('--gs',k);s.style.top='0px';
    h.style.setProperty('height',(72+hh)+'px','important');
  }
  f();addEventListener('resize',f);
  function p(){
    f();
    if(window.innerWidth<=860)return;
    document.querySelectorAll('#gwv').forEach(function(v){
      v.muted=true;v.defaultMuted=true;v.setAttribute('muted','');v.setAttribute('playsinline','');
      if(v.paused){var r=v.play();if(r&&r.catch)r.catch(function(){})}
    });
  }
  p();setInterval(p,1000);
  ['click','touchstart','scroll','mousemove','keydown'].forEach(function(e){addEventListener(e,p,{passive:true})});
  document.addEventListener('visibilitychange',p);
})();

(function(){
  /* dim / talas: providna zlatna traka koja se uvija oko dugmeta i ulazi u njega sa svih strana (ulaz odozgo) */
  var gb,gc,gx,W=0,H=0,t=0,last=0,ptr=null,ptrT=0,p0=null,p1=null,p2=null;
  function size(){var w=gc.offsetWidth,h=gc.offsetHeight,d=Math.min(2,devicePixelRatio||1);if(w===W&&h===H)return;W=w;H=h;gc.width=Math.round(w*d);gc.height=Math.round(h*d);gx.setTransform(d,0,0,d,0,0)}
  function tick(now){
    requestAnimationFrame(tick);
    if(innerWidth<=860)return;
    gb=document.getElementById('gb2');gc=document.getElementById('gc2');
    if(!gb||!gc)return;
    if(!gx||gx.canvas!==gc){
      gx=gc.getContext('2d');W=H=0;p0=p1=p2=null;
      gb.addEventListener('pointermove',function(e){var r=gc.getBoundingClientRect();ptr={x:(e.clientX-r.left)*(gc.offsetWidth/r.width),y:(e.clientY-r.top)*(gc.offsetHeight/r.height)};ptrT=performance.now()})
    }
    var dt=Math.min(50,now-last);last=now;size();if(!W)return;
    gx.globalCompositeOperation='destination-out';gx.fillStyle='rgba(0,0,0,'+Math.min(1,0.05*dt/16.7).toFixed(3)+')';gx.fillRect(0,0,W,H);
    var tx,ty;
    if(ptr&&now-ptrT<1500){tx=ptr.x;ty=ptr.y}
    else{
      t+=dt/1000;
      var k=Math.exp(-t*1.4);
      tx=W/2+W*0.40*Math.sin(t*2.1)+W*0.09*Math.sin(t*4.7+1);
      ty=H/2+H*0.36*Math.sin(t*2.9+.6)+H*0.09*Math.sin(t*6.1)-H*0.9*k;
    }
    if(!p2){p2=p1=p0={x:W/2,y:-H*0.1}}
    p0=p1;p1=p2;p2={x:p2.x+(tx-p2.x)*0.2,y:p2.y+(ty-p2.y)*0.2};
    var kk=(Math.sin(t*1.1)+1)/2,col=Math.round(205+36*kk)+','+Math.round(160+56*kk)+','+Math.round(70+66*kk);
    var mx0=(p0.x+p1.x)/2,my0=(p0.y+p1.y)/2,mx1=(p1.x+p2.x)/2,my1=(p1.y+p2.y)/2;
    gx.globalCompositeOperation='source-over';gx.lineCap='round';gx.lineJoin='round';
    gx.beginPath();gx.moveTo(mx0,my0);gx.quadraticCurveTo(p1.x,p1.y,mx1,my1);
    gx.strokeStyle='rgba('+col+',.36)';gx.lineWidth=34;gx.stroke();
    gx.strokeStyle='rgba(255,236,180,.42)';gx.lineWidth=11;gx.stroke();
  }
  if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches))requestAnimationFrame(tick);
})();
