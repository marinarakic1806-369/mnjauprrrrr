(function(){
  var tries=0,last=null,stable=0;
  function go(){
    var k=document.getElementById('kp');
    if(k&&k===last&&document.getElementById('note')){stable++}else{stable=0;last=k}
    if(stable>=2){ (function(){
(function(){
  var $=function(s){return document.querySelector(s)};
  var root=$('#kp'),stage=$('#stage'),cam=$('#cam'),env=$('#env'),word=$('#word'),l1=$('#l1'),l2=$('#l2'),hint=$('#hint'),cta=document.getElementById('cta')||document.createElement('a');
  var c0=$('#c0'),beats=[$('#b0'),$('#b1'),$('#b3')];
  var clamp=function(v){return v<0?0:v>1?1:v};
  var span=function(p,a,b){if(a.length){b=a[1];a=a[0]}return clamp((p-a)/(b-a))};
  var eio=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2},eo=function(t){return 1-Math.pow(1-t,3)},mix=function(a,b,t){return a+(b-a)*t};
  var RATIO=1566/1368,RV=837/800;
  var BEATS=[[.34,.39,.46,.50],[.54,.59,.76,.80],[.84,.89,2,2]];
  var still=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W=0,H=0,L={},WW=0,WH=0;
  function px(v){return v.toFixed(2)+'px'}

  function layout(){
    var r=stage.getBoundingClientRect();W=r.width;H=r.height;
    var wide=W>=H*1.05,X={wide:wide};
    if(!wide){
      X.bw=Math.min(W*0.84,H*0.5/RATIO);X.cx0=W/2;X.cy0=H*0.29;
      X.sw=Math.min(W*0.26,H*0.13/RATIO);X.top=H*0.035;
      X.cx1=W/2;X.cy1=X.top+X.sw*RATIO/2;
      X.zTop=H*0.70;X.zw=Math.min(W*0.88,520);X.zl=(W-X.zw)/2;
      var aH=H*0.5;
      X.ax=W/2;X.ay=H*0.5;X.wMax=W*0.78;
      X.vSolo=Math.min(W*0.66,H*0.32/RV);
      X.byA=H*0.44;X.byF=H*0.42;X.wyF=H*0.14;
    }else{
      X.bw=Math.min(H*0.66/RATIO,W*0.42);X.cx0=W/2;X.cy0=H*0.5;
      X.sw=Math.min(W*0.24,H*0.34/RATIO);X.top=H*0.07;
      X.cx1=W*0.2;X.cy1=X.top+X.sw*RATIO/2;
      X.zw=Math.min(W*0.6,680);X.zl=(W-X.zw)/2;X.zTop=X.top+X.sw*RATIO+H*0.07;
      X.ax=W/2;X.ay=H*0.4;X.wMax=W*0.5;
      X.vSolo=Math.min(W*0.28,H*0.3/RV);
      X.byA=H*0.42;X.byF=H*0.4;X.wyF=H*0.12;
    }
    X.short=!wide&&H<W*1.5;if(X.short)X.ay=H*0.28;
    L=X;
    document.getElementById('note').style.top=wide?'19.5%':'';
    env.style.width=px(L.bw);
    // note on the paper
    var fs=L.bw*0.25;
    [l1,l2].forEach(function(e){e.style.fontSize=px(fs)});
    var max=L.bw*0.59*0.94,wm=Math.max(l1.offsetWidth,l2.offsetWidth,1);
    if(wm>max){fs=fs*max/wm;[l1,l2].forEach(function(e){e.style.fontSize=px(fs)})}
    // big word behind the bracelets
    var wf=Math.min(L.wMax/3.1,H*(L.short?0.13:(L.wide?0.14:0.2)));
    word.style.fontSize=px(wf);
    var ww=Math.max(word.children[0].offsetWidth,word.children[1].offsetWidth,1);
    if(ww>L.wMax){wf=wf*L.wMax/ww;word.style.fontSize=px(wf)}
    WW=word.offsetWidth;WH=word.offsetHeight;
    cam.style.transformOrigin=L.ax+'px '+(H*0.45)+'px';
    var ts=wide?Math.max(22,Math.min(34,W*0.024)):Math.max(20,Math.min(28,W*0.064));
    beats.forEach(function(b){
      b.style.width=px(L.zw);b.style.left=px(L.zl);b.style.top=px(L.zTop);
      b.querySelector('h2').style.fontSize=px(ts);
    });
    // the last block never runs off the bottom
    var lb=beats[beats.length-1];
    L.bx=L.ax;L.wxF=L.ax;L.wsF=0.6;L.compact=false;
    {
      // text always sits right under the bracelet; on a short screen the title moves to the left of the bracelet
      var gap=H*(L.wide?0.08:0.045),lh=lb.offsetHeight,bh=L.vSolo*RV;
      var room=H*0.97-lh-gap,bot=L.byF+bh/2;
      if(bot>room||L.short){
        var need=room-H*0.1;                       // height available for the bracelet
        if(L.short||(!L.wide&&need<bh*0.82)){
          L.compact=true;
          L.vSolo=Math.min(W*0.5,Math.max(need,H*0.2)/RV);bh=L.vSolo*RV;L.byA=0;
          L.byF=Math.max(H*0.07+bh/2,Math.min(room-bh/2,H*0.1+bh/2));L.byA=L.byF+H*0.02;
          L.bx=W*0.69;L.wxF=W*0.24;L.wsF=Math.min(1,(W*0.38)/WW);L.wyF=L.byF;
        }else{
          L.byF-=bot-room;L.byA=L.byF+H*0.02;
          L.wyF=Math.max(H*0.07,L.byF-bh/2-H*0.06);
        }
      }
      var tp=L.byF+bh/2+gap;
      beats.forEach(function(x){x.style.top=px(tp)});
      beats[0].style.top=px(tp+H*0.07);
      c0.style.width=px(L.vSolo);
    }
  }

  // liquid glass: gold strokes that follow the finger or drift on their own behind the button
  var gb=document.getElementById('gb')||document.createElement('div'),gc=document.getElementById('gc')||document.createElement('canvas'),gx=gc.getContext('2d'),gW=0,gH=0,gOn=false,gRaf=0,gLast=0,gt=0,gp=null,gPtr=null,gPtrT=-9999;
  function gSize(){
    var w=gb.offsetWidth,h=gb.offsetHeight,d=Math.min(2,window.devicePixelRatio||1);
    if(w===gW&&h===gH)return;gW=w;gH=h;gc.width=Math.round(w*d);gc.height=Math.round(h*d);gx.setTransform(d,0,0,d,0,0);
  }
  gb.addEventListener('pointermove',function(e){var r=gb.getBoundingClientRect();gPtr={x:e.clientX-r.left,y:e.clientY-r.top};gPtrT=performance.now()});
  function gTick(now){
    gRaf=0;if(!gOn)return;
    var dt=Math.min(50,now-gLast);gLast=now;gSize();
    gx.globalCompositeOperation='destination-out';gx.fillStyle='rgba(0,0,0,'+Math.min(1,0.045*dt/16.7).toFixed(3)+')';gx.fillRect(0,0,gW,gH);
    var tx,ty;
    if(gPtr&&now-gPtrT<1500){tx=gPtr.x;ty=gPtr.y}
    else if(still){tx=null}
    else{
      gt+=dt/1000;
      tx=gW/2+gW*0.42*Math.sin(gt*2.3)+gW*0.08*Math.sin(gt*5.1+1);
      ty=gH/2+gH*0.40*Math.sin(gt*3.1+.6)+gH*0.08*Math.sin(gt*6.7);
    }
    if(tx!==null){
      if(!gp)gp={x:tx,y:ty};
      var nx=gp.x+(tx-gp.x)*0.3,ny=gp.y+(ty-gp.y)*0.3;
      if(Math.hypot(nx-gp.x,ny-gp.y)>0.25){
        var k=(Math.sin(gt*1.3)+1)/2,
            c='rgba('+Math.round(196+(236-196)*k)+','+Math.round(166+(220-166)*k)+','+Math.round(104+(170-104)*k)+',.36)';
        gx.globalCompositeOperation='source-over';gx.lineCap='round';gx.lineJoin='round';
        gx.beginPath();gx.moveTo(gp.x,gp.y);gx.lineTo(nx,ny);
        gx.shadowColor='rgba(232,208,150,.35)';gx.shadowBlur=14;gx.strokeStyle=c;gx.lineWidth=16;gx.stroke();
        gx.shadowBlur=0;gx.strokeStyle='rgba(255,246,222,.22)';gx.lineWidth=4;gx.stroke();
      }
      gp.x=nx;gp.y=ny;
    }
    gRaf=requestAnimationFrame(gTick);
  }
  function glass(on){
    if(on===gOn)return;gOn=on;
    if(on){gLast=performance.now();if(!gRaf)gRaf=requestAnimationFrame(gTick)}
    else{if(gRaf){cancelAnimationFrame(gRaf);gRaf=0}gx.clearRect(0,0,gc.width,gc.height);gp=null}
  }

  var lastCta=-1;
  function render(p){
    // envelope: big in the middle, then up into the corner
    var e=still?1:eio(span(p,[.28,.42]));
    var s=mix(1,0.8,e),y=mix(L.cy0,-L.bw*RATIO*0.62,e);
    env.style.transform='translate3d('+px(L.cx0-L.bw/2)+','+px(y-L.bw*RATIO/2)+',0) scale('+s.toFixed(4)+')';
    var eop=1-(still?1:eio(span(p,[.31,.42])));
    env.style.opacity=eop.toFixed(3);env.style.visibility=eop<.002?'hidden':'visible';
    // writing on the paper
    var t=still?1:eo(span(p,[.08,.24]));
    var t1=span(t,0,.55),t2=span(t,.45,1);
    l1.style.clipPath='inset(-25% '+((1-t1)*100).toFixed(2)+'% -25% 0)';
    l2.style.clipPath='inset(-25% '+((1-t2)*100).toFixed(2)+'% -25% 0)';
    var shine=(p*320).toFixed(1)+'% 0';
    l1.style.backgroundPosition=shine;l2.style.backgroundPosition=shine;
    hint.style.opacity=(still?0:1-span(p,[.02,.07])).toFixed(3);

    // camera pushes in slowly
    var z=still?1.03:1+0.05*eio(span(p,[.44,.88]));
    cam.style.transform='scale('+z.toFixed(4)+')';

    // the big word: sharpens in behind, then floats up and blurs away
    var wi=still?1:eo(span(p,[.31,.47])),wo=still?1:eio(span(p,L.compact?[.46,.60]:[.62,.80]));
    var wop=wi*(1-(L.compact?0.1:0.68)*wo),wb=(1-wi)*18+wo*1.6,wsc=mix(1,L.wsF,wo),wy=mix(L.ay,L.wyF,wo),wx=mix(L.ax,L.wxF,wo);
    word.style.opacity=wop.toFixed(3);
    word.style.transform='translate3d('+px(wx-WW/2)+','+px(wy-WH/2)+',0) scale('+wsc.toFixed(4)+')';
    word.style.filter=(wb>.05?'blur('+wb.toFixed(2)+'px) ':'')+'drop-shadow(0 2px 14px rgba(120,80,20,.22))';
    word.style.backgroundPosition=((p*260)).toFixed(1)+'% 0';
    word.style.visibility=wop<.002?'hidden':'visible';

    // the bracelet sharpens out of the haze, with a soft shadow to the right
    var a1=still?1:eo(span(p,L.compact?[.56,.68]:[.50,.62]));
    var shadow='drop-shadow(14px 12px 14px rgba(70,45,15,.30))';
    c0.style.width=px(L.vSolo);
    c0.style.opacity=a1.toFixed(3);
    var by=L.compact?L.byF:mix(L.byA,L.byF,wo);
    c0.style.transform='translate3d('+px((L.compact?L.bx:mix(L.ax,L.bx,wo))-L.vSolo/2)+','+px(by-L.vSolo*RV/2+(1-a1)*22)+',0) scale('+(0.9+0.1*a1).toFixed(4)+')';
    c0.style.filter=((1-a1)>.01?'blur('+((1-a1)*16).toFixed(2)+'px) ':'')+shadow;
    c0.style.visibility=a1<.002?'hidden':'visible';

    // text
    var ctaOn=0;
    for(var j=0;j<beats.length;j++){
      var q=BEATS[j],o,dy,bl;
      if(still){o=(j===2)?1:0;dy=0;bl=0}
      else{
        var en=eo(span(p,[q[0],q[1]])),ex=eio(span(p,[q[2],q[3]]));
        o=en*(1-ex);dy=(1-en)*14-ex*14;bl=(1-en)*6+ex*6;
      }
      var b=beats[j];
      b.style.opacity=o.toFixed(3);
      b.style.transform='translate3d(0,'+px(dy)+',0)';
      b.style.filter=bl>.05&&o>.002?'blur('+bl.toFixed(2)+'px)':'none';
      b.style.visibility=o<.002?'hidden':'visible';
      if(j===2)ctaOn=o>.5?1:0;
    }
    if(ctaOn!==lastCta){lastCta=ctaOn;glass(!!ctaOn);cta.tabIndex=ctaOn?0:-1;beats[2].style.pointerEvents=ctaOn?'auto':'none'}
  }

  function target(){
    var r=root.getBoundingClientRect(),run=r.height-H;
    return run>0?clamp(-r.top/run):0;
  }
  var cur=0,raf=0,last=0;
  function tick(now){
    raf=0;var dt=Math.min(64,now-last);last=now;
    var g=target(),ease=1-Math.pow(1-.12,dt/16.67);
    cur+=(g-cur)*ease;if(Math.abs(g-cur)<.00005)cur=g;
    render(cur);
    if(cur!==g)raf=requestAnimationFrame(tick);
  }
  function kick(){if(!raf){last=performance.now();raf=requestAnimationFrame(tick)}}

  layout();cur=still?1:target();render(cur);
  if(still){root.style.height='100svh'}
  window.__kp={set:function(p){cur=p;render(p)}};
  if(document.fonts&&document.fonts.ready){document.fonts.ready.then(function(){layout();render(cur)})}
  new ResizeObserver(function(){layout();render(cur)}).observe(stage);
  window.addEventListener('scroll',kick,{passive:true});
})();
})(); requestAnimationFrame(function(){requestAnimationFrame(function(){k.classList.add('kp-ready')})}); return }
    if(++tries<200) setTimeout(go,100);
  }
  go();
})();