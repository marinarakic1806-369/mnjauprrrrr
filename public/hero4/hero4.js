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
  var gb,gc,gx,W=0,H=0,t=0,last=0,gp=null,ptr=null,ptrT=0,raf=0;
  function size(){var w=gc.offsetWidth,h=gc.offsetHeight,d=Math.min(2,devicePixelRatio||1);if(w===W&&h===H)return;W=w;H=h;gc.width=Math.round(w*d);gc.height=Math.round(h*d);gx.setTransform(d,0,0,d,0,0)}
  function tick(now){
    raf=requestAnimationFrame(tick);
    if(innerWidth<=860)return;
    gb=document.getElementById('gb2');gc=document.getElementById('gc2');
    if(!gb||!gc)return;
    if(!gx||gx.canvas!==gc){
      gx=gc.getContext('2d');W=H=0;gp=null;
      gb.addEventListener('pointermove',function(e){var r=gc.getBoundingClientRect();ptr={x:(e.clientX-r.left)*(gc.offsetWidth/r.width),y:(e.clientY-r.top)*(gc.offsetHeight/r.height)};ptrT=performance.now()})
    }
    var dt=Math.min(50,now-last);last=now;size();
    gx.globalCompositeOperation='destination-out';gx.fillStyle='rgba(0,0,0,'+Math.min(1,0.02*dt/16.7).toFixed(3)+')';gx.fillRect(0,0,W,H);
    var tx,ty;
    if(ptr&&now-ptrT<1500){tx=ptr.x;ty=ptr.y}
    else{t+=dt/1000;tx=W/2+W*0.46*Math.sin(t*2.3)+W*0.08*Math.sin(t*5.1+1);ty=H/2+H*0.40*Math.sin(t*3.1+.6)+H*0.08*Math.sin(t*6.7)}
    if(!gp)gp={x:W/2,y:-H*0.25};
    var nx=gp.x+(tx-gp.x)*0.3,ny=gp.y+(ty-gp.y)*0.3;
    if(Math.hypot(nx-gp.x,ny-gp.y)>0.25){
      var k=(Math.sin(t*1.3)+1)/2,c='rgba('+Math.round(205+36*k)+','+Math.round(160+56*k)+','+Math.round(70+70*k)+',1)';
      gx.globalCompositeOperation='source-over';gx.lineCap='round';gx.lineJoin='round';gx.beginPath();gx.moveTo(gp.x,gp.y);gx.lineTo(nx,ny);
      gx.shadowColor='rgba(232,190,100,.7)';gx.shadowBlur=16;gx.strokeStyle=c;gx.lineWidth=13;gx.stroke();
      gx.shadowBlur=0;gx.strokeStyle='rgba(255,246,214,.85)';gx.lineWidth=4;gx.stroke()
    }
    gp.x=nx;gp.y=ny
  }
  if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches))raf=requestAnimationFrame(tick);
})();
