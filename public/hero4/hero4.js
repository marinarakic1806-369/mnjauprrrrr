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
  /* zlatna traka (kao "Liquid Glass Button"): glatka, siroka, sa suzenim repom; ulazi odozgo, petlja oko dugmeta i prolazi kroz njega */
  var gb,gc,gx,W=0,H=0,t=0,last=0,pts=[],ptr=null,ptrT=0,cur=null;
  var LMAX=820;
  function size(){var w=gc.offsetWidth,h=gc.offsetHeight,d=Math.min(2,devicePixelRatio||1);if(w===W&&h===H)return;W=w;H=h;gc.width=Math.round(w*d);gc.height=Math.round(h*d);gx.setTransform(d,0,0,d,0,0)}
  function path(t){
    var x=W/2+W*0.30*Math.sin(t*1.15)+W*0.13*Math.sin(t*2.9+1.2);
    var y=H*0.55+H*0.21*Math.sin(t*1.75+.4)+H*0.07*Math.sin(t*3.4);
    var k=Math.exp(-t*1.1);           /* ulaz odozgo */
    return {x:x+W*0.10*k,y:y-H*0.95*k}
  }
  function ribbon(p,scale,col,blur,glow){
    var n=p.length;if(n<4)return;
    var L=[],R=[];
    for(var i=0;i<n;i++){
      var a=p[Math.max(0,i-1)],b=p[Math.min(n-1,i+1)],dx=b.x-a.x,dy=b.y-a.y,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l;
      var f=i/(n-1),w=scale*Math.pow(f,.75);
      L.push({x:p[i].x+nx*w,y:p[i].y+ny*w});R.push({x:p[i].x-nx*w,y:p[i].y-ny*w});
    }
    gx.beginPath();gx.moveTo(L[0].x,L[0].y);
    for(i=1;i<n-1;i++){gx.quadraticCurveTo(L[i].x,L[i].y,(L[i].x+L[i+1].x)/2,(L[i].y+L[i+1].y)/2)}
    gx.lineTo(L[n-1].x,L[n-1].y);gx.lineTo(R[n-1].x,R[n-1].y);
    for(i=n-2;i>0;i--){gx.quadraticCurveTo(R[i].x,R[i].y,(R[i].x+R[i-1].x)/2,(R[i].y+R[i-1].y)/2)}
    gx.lineTo(R[0].x,R[0].y);gx.closePath();
    var g=gx.createLinearGradient(p[0].x,p[0].y,p[n-1].x,p[n-1].y);
    g.addColorStop(0,col[0]);g.addColorStop(.55,col[1]);g.addColorStop(1,col[2]);
    gx.shadowColor=glow;gx.shadowBlur=blur;gx.fillStyle=g;gx.fill();gx.beginPath();gx.arc(p[n-1].x,p[n-1].y,scale*0.98,0,6.2832);gx.shadowBlur=0;gx.fill();
  }
  function tick(now){
    requestAnimationFrame(tick);
    if(innerWidth<=860)return;
    gb=document.getElementById('gb2');gc=document.getElementById('gc2');
    if(!gb||!gc)return;
    if(!gx||gx.canvas!==gc){
      gx=gc.getContext('2d');W=H=0;pts=[];cur=null;
      gb.addEventListener('pointermove',function(e){var r=gc.getBoundingClientRect();ptr={x:(e.clientX-r.left)*(gc.offsetWidth/r.width),y:(e.clientY-r.top)*(gc.offsetHeight/r.height)};ptrT=performance.now()})
    }
    var dt=Math.min(50,now-last);last=now;size();if(!W)return;
    var tg;
    if(ptr&&now-ptrT<1500){tg=ptr}else{t+=dt/1000;tg=path(t)}
    if(!cur)cur={x:tg.x,y:tg.y};
    cur.x+=(tg.x-cur.x)*0.22;cur.y+=(tg.y-cur.y)*0.22;
    pts.push({x:cur.x,y:cur.y});var acc=0,cut=0;for(var q=pts.length-1;q>0;q--){acc+=Math.hypot(pts[q].x-pts[q-1].x,pts[q].y-pts[q-1].y);if(acc>LMAX){cut=q;break}}if(cut)pts.splice(0,cut);if(pts.length>400)pts.shift();
    gx.clearRect(0,0,W,H);
    ribbon(pts,24,['rgba(190,140,50,.0)','rgba(214,170,78,1)','rgba(244,214,140,1)'],30,'rgba(232,190,100,.75)');
    ribbon(pts,8,['rgba(255,240,200,0)','rgba(255,244,214,.7)','rgba(255,250,235,.98)'],0,'rgba(0,0,0,0)');
  }
  if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches))requestAnimationFrame(tick);
})();
