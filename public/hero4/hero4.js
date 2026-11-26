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
  /* dim-zmija: ulazi odozgo sa desne strane, racva se u vise tragova, pravi osmicu oko dugmeta, ulazi u dugme (dugme blinkne), izlazi i uvija se sa druge strane */
  var L=160,T=150;                       /* ivice canvas-a oko dugmeta (mora da se poklapa sa CSS) */
  var gb,gc,gx,cta,W=0,H=0,bw=0,bh=0,start=0,last=0,ptr=null,ptrT=0,F=null,inside=false,flashT=0,lastFl=0;
  /* putanja u jedinicama sirine (w) i visine (h) dugmeta, od centra */
  var WP=[[1.25,-2.6],[0.95,-1.7],[0.6,-0.95],[0.2,-0.3],[-0.3,0.4],[-0.8,0.85],[-1.05,0.05],[-0.75,-0.85],[-0.2,-0.5],[0.1,0.05],[0.6,0.8],[1.05,0.1],[0.75,-0.85],[0.15,-0.55],[-0.2,0.0],[-0.6,0.6],[-0.9,0.1],[-0.6,-0.7],[-0.1,-0.3],[0.3,0.2],[0.8,0.9],[1.1,0.3]];
  var DUR=13, PAUSE=1.6;
  function cr(p0,p1,p2,p3,u){var u2=u*u,u3=u2*u;return .5*((2*p1)+(-p0+p2)*u+(2*p0-5*p1+4*p2-p3)*u2+(-p0+3*p1-3*p2+p3)*u3)}
  function at(s){                         /* s u [0,1) */
    var n=WP.length-1,f=Math.max(0,Math.min(.9999,s))*n,i=Math.floor(f),u=f-i;
    var P=function(k){return WP[Math.max(0,Math.min(n,k))]};
    return {x:bw*cr(P(i-1)[0],P(i)[0],P(i+1)[0],P(i+2)[0],u),y:bh*cr(P(i-1)[1],P(i)[1],P(i+1)[1],P(i+2)[1],u)}
  }
  function size(){var w=gc.offsetWidth,h=gc.offsetHeight,d=Math.min(2,devicePixelRatio||1);bw=cta.offsetWidth;bh=cta.offsetHeight;if(w===W&&h===H)return;W=w;H=h;gc.width=Math.round(w*d);gc.height=Math.round(h*d);gx.setTransform(d,0,0,d,0,0)}
  function tick(now){
    requestAnimationFrame(tick);
    if(innerWidth<=860)return;
    gb=document.getElementById('gb2');gc=document.getElementById('gc2');cta=gb&&gb.querySelector('.cta');
    if(!gb||!gc||!cta)return;
    if(!gx||gx.canvas!==gc){
      gx=gc.getContext('2d');W=H=0;F=null;start=now;
      gb.addEventListener('pointermove',function(e){var r=gc.getBoundingClientRect();ptr={x:(e.clientX-r.left)*(gc.offsetWidth/r.width),y:(e.clientY-r.top)*(gc.offsetHeight/r.height)};ptrT=performance.now()})
    }
    var dt=Math.min(50,now-last);last=now;size();if(!W)return;
    var cx=L+bw/2,cy=T+bh/2,tx,ty,live=false;
    gx.globalCompositeOperation='destination-out';gx.fillStyle='rgba(0,0,0,'+Math.min(1,0.026*dt/16.7).toFixed(3)+')';gx.fillRect(0,0,W,H);
    if(ptr&&now-ptrT<1500){tx=ptr.x;ty=ptr.y;live=true}
    else{
      var ph=((now-start)/1000)%(DUR+PAUSE);
      if(ph<DUR){var q=at(ph/DUR);tx=cx+q.x;ty=cy+q.y;live=true}
    }
    if(!F)F=[0,1,2].map(function(){return {x:cx+bw*1.25,y:cy-bh*2.6,px:0,py:0,ok:false}});
    var rates=[.26,.17,.11],wid=[26,34,22],al=[.34,.22,.18];
    if(live){
      for(var i=0;i<3;i++){
        var f=F[i];f.px=f.x;f.py=f.y;
        var ox=i===0?0:(i===1?-bw*0.07:bw*0.06),oy=i===0?0:(i===1?bh*0.12:-bh*0.1);
        f.x+=(tx+ox-f.x)*rates[i];f.y+=(ty+oy-f.y)*rates[i];
        if(!f.ok){f.px=f.x;f.py=f.y;f.ok=true}
        gx.globalCompositeOperation='source-over';gx.lineCap='round';gx.lineJoin='round';
        gx.beginPath();gx.moveTo(f.px,f.py);gx.lineTo(f.x,f.y);
        gx.strokeStyle='rgba(222,196,138,'+al[i]+')';gx.lineWidth=wid[i];gx.stroke();
        if(i===0){gx.strokeStyle='rgba(252,244,224,.45)';gx.lineWidth=10;gx.stroke()}
      }
      var hx=F[0].x-L,hy=F[0].y-T,nowIn=hx>bw*0.05&&hx<bw*0.95&&hy>bh*0.1&&hy<bh*0.9;
      if(nowIn&&!inside&&now-lastFl>3500){lastFl=now;cta.classList.add('flash');clearTimeout(flashT);flashT=setTimeout(function(){cta.classList.remove('flash')},420)}
      inside=nowIn
    }else{F.forEach(function(f){f.ok=false;f.x=cx+bw*1.25;f.y=cy-bh*2.6})}
  }
  if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches))requestAnimationFrame(tick);
})();
