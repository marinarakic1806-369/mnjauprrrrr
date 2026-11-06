const MJ_PRIZES=[
 {id:'p10',l:['10%','popusta'],w:22,pct:10,txt:'10% popusta na nakit'},
 {id:'dost',l:['Besplatna','dostava'],w:20,ship:true,txt:'Besplatna dostava'},
 {id:'p15',l:['15%','popusta'],w:4,pct:15,txt:'15% popusta na nakit'},
 {id:'ek',l:['20%','na e-knjige'],w:8,txt:'20% popusta na e\u2011knjige'},
 {id:'pok',l:['Mali','poklon'],w:6,txt:'Mali poklon uz porudžbinu'},
 {id:'p10b',l:['10%','popusta'],w:22,pct:10,txt:'10% popusta na nakit'},
 {id:'dostb',l:['Besplatna','dostava'],w:20,ship:true,txt:'Besplatna dostava'},
 {id:'opet',l:['Zavrti','opet'],w:10,again:true,txt:'Zavrti opet'}
];
const MJ_DAY=24*3600*1000;
function mjWheelGet(){try{const w=JSON.parse(localStorage.getItem('mj-wheel')||'null');if(w&&w.prize&&Date.now()-w.t>MJ_DAY)return {...w,expired:true};return w;}catch(e){return null;}}
function mjWheelPrize(){const w=mjWheelGet();if(!w||w.expired||!w.prize)return null;return {...MJ_PRIZES.find(p=>p.id===w.prize),t:w.t};}
window.mjWheelPrize=mjWheelPrize;
(function(){const s=window.mjSubscribe;if(s&&!s.__w){const f=function(e){try{localStorage.setItem('mj-email',e);}catch(x){}window.dispatchEvent(new Event('mjsub'));return s.apply(this,arguments);};f.__w=1;window.mjSubscribe=f;}})();
function useMjTick(){const [,s]=React.useState(0);React.useEffect(()=>{const i=setInterval(()=>s(x=>x+1),1000);const r=()=>s(x=>x+1);window.addEventListener('mjwheel',r);window.addEventListener('mjsub',r);return ()=>{clearInterval(i);window.removeEventListener('mjwheel',r);window.removeEventListener('mjsub',r);};},[]);}
function mjLeft(t){const ms=Math.max(0,t+MJ_DAY-Date.now());const h=Math.floor(ms/36e5),m=Math.floor(ms%36e5/6e4),s=Math.floor(ms%6e4/1e3);return [h,m,s].map(x=>String(x).padStart(2,'0')).join(':');}
window.mjLeft=mjLeft;window.useMjTick=useMjTick;

function MJWheel({size=513,rot,spinning,win}){
 const A=MJ_A;const C=300,R=258,N=8,G='rgba(197,160,89,.9)';
 const pt=(a,r)=>[C+r*Math.sin(a*Math.PI/180),C-r*Math.cos(a*Math.PI/180)];
 const seg=i=>{const a0=i*45,a1=a0+45,[x0,y0]=pt(a0,R),[x1,y1]=pt(a1,R);return `M${C},${C} L${x0},${y0} A${R},${R} 0 0 1 ${x1},${y1} Z`;};
 return <div style={{position:'relative',width:size,maxWidth:'100%',aspectRatio:'1/1'}}><div style={{position:'absolute',inset:'7%',borderRadius:'50%',backdropFilter:'blur(3px) saturate(1.25)',WebkitBackdropFilter:'blur(3px) saturate(1.25)',background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.7)',boxShadow:'inset 0 1px 0 rgba(255,255,255,.8), 0 18px 40px rgba(0,0,0,.12)'}}></div>
  <svg viewBox="0 0 600 600" style={{position:'absolute',inset:0,width:'100%',height:'100%',overflow:'visible',filter:'none'}}>
   <defs>
    <pattern id="mjLeo" patternUnits="userSpaceOnUse" width="150" height="150"><rect width="150" height="150" fill="#F6EFE5"></rect><image href={A+'leopard-dugme-2.png'} width="150" height="150" preserveAspectRatio="xMidYMid slice" opacity=".5"></image></pattern>
    <radialGradient id="mjGl" cx="50%" cy="40%" r="60%"><stop offset="0" stopColor="#fff" stopOpacity=".9"></stop><stop offset="1" stopColor="#FBF7F0" stopOpacity=".55"></stop></radialGradient>
    <linearGradient id="mjShine" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#C5A059" stopOpacity="0"></stop><stop offset=".42" stopColor="#C5A059" stopOpacity="0"></stop><stop offset=".5" stopColor="#FFF3D2" stopOpacity="1"></stop><stop offset=".58" stopColor="#C5A059" stopOpacity="0"></stop><stop offset="1" stopColor="#C5A059" stopOpacity="0"></stop><animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5" dur="5s" repeatCount="indefinite"></animateTransform></linearGradient>
    <linearGradient id="mjSheen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".55"></stop><stop offset=".45" stopColor="#fff" stopOpacity=".08"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient>
    <linearGradient id="mjGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E8C982"></stop><stop offset=".5" stopColor="#C5A059"></stop><stop offset="1" stopColor="#A2702F"></stop></linearGradient>
   </defs>
   <circle cx={C} cy={C} r="262" fill="none" stroke={G} strokeWidth="1.5"></circle><circle cx={C} cy={C} r="262" fill="none" stroke="url(#mjShine)" strokeWidth="4"></circle>
   
   <g style={{transformOrigin:'300px 300px',transform:'rotate('+rot+'deg)',transition:spinning?'transform 5.4s cubic-bezier(.12,.7,.08,1)':'none'}}>
    {MJ_PRIZES.map((p,i)=><path key={p.id} d={seg(i)} fill={win===i?'rgba(232,201,130,.28)':(i%2?'rgba(255,255,255,.04)':'rgba(255,255,255,.14)')} stroke={G} strokeWidth={win===i?2.5:1.2} style={{transition:'fill .6s'}}></path>)}
    {MJ_PRIZES.map((p,i)=>{const a=i*45+22.5;return <g key={'t'+p.id} transform={'rotate('+a+' 300 300)'}><text x="300" y="104" textAnchor="middle" style={{fontFamily:'Inter, sans-serif',fontWeight:700,fontSize:/^[0-9−]/.test(p.l[0])?34:19,letterSpacing:/^[0-9−]/.test(p.l[0])?'.02em':'.08em',fill:'#1D1A17'}}>{p.l[0].toUpperCase()}</text><text x="300" y="130" textAnchor="middle" style={{fontFamily:'Inter, sans-serif',fontWeight:600,fontSize:13,letterSpacing:'.16em',fill:'#1D1A17'}}>{p.l[1].toUpperCase()}</text></g>})}
   </g>
   <circle cx={C} cy={C} r={R-2} fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="1.5" style={{pointerEvents:'none'}}></circle>
   <circle cx={C} cy={C} r="74" fill="#FBF7F0" stroke={G} strokeWidth="1.5"></circle>
   <image href={A+'maca-providna.png'} x="244" y="240" width="112" height="112" preserveAspectRatio="xMidYMid meet"></image>
   <image href={A+'usta-ciklama.png'} x="214" y="10" width="80" height="62" transform="rotate(-9 254 41)" preserveAspectRatio="xMidYMid meet" style={{filter:'drop-shadow(0 4px 6px rgba(0,0,0,.18))'}}></image>
  </svg>
 </div>;
}

function MJSreca({mob}){
 const {Kicker,MailBar,Marquee}=window.MnjauprrrrrDesignSystem_64b9d1;const band=<div style={{position:'relative',zIndex:5}}><Marquee height={mob?76:undefined} items={[{text:'Točak sreće',script:true},{text:'Malo ljubavi'},{text:'od mačkice',script:true}]}/></div>;const A=MJ_A;const Cta=window.MJCta;useMjTick();
 const [ask,setAsk]=React.useState(false);const [rot,setRot]=React.useState(()=>{const w=mjWheelGet();return w&&w.rot||0;});const [spinning,setSpinning]=React.useState(false);const [win,setWin]=React.useState(()=>{const w=mjWheelGet();return w&&w.prize&&!w.expired?MJ_PRIZES.findIndex(p=>p.id===w.prize):null;});
 const email=(()=>{try{return localStorage.getItem('mj-email')}catch(e){return null}})();const w=mjWheelGet();const prize=mjWheelPrize();
 const TEST=!/netlify\.app|mnjauprrrrr\./.test(location.hostname);const canSpin=!spinning&&(TEST||!w||!w.prize||w.expired||w.again);
 const spin=(force)=>{if(spinning)return;if(force!==true&&!(()=>{try{return localStorage.getItem('mj-email')}catch(e){return null}})()){setAsk(true);return;}setAsk(false);const pool=MJ_PRIZES.map((p,i)=>({p,i})).filter(x=>!(w&&w.again&&x.p.again));const tot=pool.reduce((s,x)=>s+x.p.w,0);let r=Math.random()*tot,pick=pool[0];for(const x of pool){r-=x.p.w;if(r<=0){pick=x;break;}}
  const target=360-(pick.i*45+22.5)+(Math.random()*24-12);const base=rot-(rot%360);const nr=base+360*6+target;setWin(null);setSpinning(true);setRot(nr);
  setTimeout(()=>{setSpinning(false);setWin(pick.i);const st={rot:nr%360,t:Date.now(),prize:pick.p.again?null:pick.p.id,again:!!pick.p.again};try{localStorage.setItem('mj-wheel',JSON.stringify(st));}catch(e){}window.dispatchEvent(new Event('mjwheel'));},5500);};
 const H2=mob?{...MJ_H2,fontSize:30,margin:'10px 0 12px'}:{...MJ_H2,margin:'10px 0 14px'};const P=mob?{...MJ_P,fontSize:16,margin:'0 0 22px'}:{...MJ_P,margin:'0 0 26px'};
 const mail=<div className="mj-mail mj-mail-ink mj-mail-gold" style={{display:'block',width:mob?'auto':440,borderRadius:12,'--mail-1':'rgba(255,255,255,.26)','--mail-2':'rgba(255,255,255,.12)','--mail-btn':'rgba(255,255,255,.34)','--mail-btn-hover':'rgba(255,255,255,.55)','--hairline-strong':'rgba(197,160,89,.7)','--shadow-mailbar':'0 10px 30px rgba(0,0,0,.08)',backdropFilter:'blur(16px) saturate(1.25)',WebkitBackdropFilter:'blur(16px) saturate(1.25)'}}><MailBar onSubmit={e=>{try{localStorage.setItem('mj-email',e)}catch(x){}try{window.mjSubscribe&&window.mjSubscribe(e)}catch(x){}setAsk(false);setTimeout(()=>spin(true),300);}} thanks="Vrti se…" label="ZAVRTI" catSrc={A+'macka-sanduce.png'}/></div>;
 const btn=<button onClick={()=>spin()} disabled={!canSpin} style={{all:'unset',cursor:canSpin?'pointer':'default',boxSizing:'border-box',display:'inline-flex',alignItems:'center',justifyContent:'center',height:62,padding:'0 44px',borderRadius:999,background:'rgba(255,255,255,.34)',backdropFilter:'blur(16px) saturate(1.25)',WebkitBackdropFilter:'blur(16px) saturate(1.25)',border:'1px solid rgba(197,160,89,.7)',boxShadow:'0 10px 30px rgba(0,0,0,.08)',font:'700 14px/1 Inter,sans-serif',letterSpacing:'.2em',textTransform:'uppercase',color:'#1D1A17',opacity:canSpin?1:.55}}>{spinning?'Vrti se…':(w&&w.again?'Zavrti opet':'Zavrti')}</button>;
 const res=prize&&!spinning?<div style={{display:'grid',gap:8}}><span style={{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase',fontWeight:500}}>Tvoja nagrada</span><span style={{font:'700 '+(mob?24:30)+'px/1.15 Inter,sans-serif',textTransform:'uppercase',letterSpacing:'.04em',textWrap:'balance'}}>{prize.txt}</span><span style={{fontSize:14,lineHeight:1.5}}>Čeka te u korpi. Važi još <b style={{fontVariantNumeric:'tabular-nums'}}>{mjLeft(prize.t)}</b></span></div>:null;
 const reset=TEST&&!spinning?<a onClick={()=>{try{localStorage.removeItem('mj-wheel');localStorage.removeItem('mj-email')}catch(e){}setWin(null);setAsk(false);window.dispatchEvent(new Event('mjwheel'));}} style={{cursor:'pointer',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--ink-70)',textDecoration:'underline',textUnderlineOffset:3}}>↺ Probaj ponovo (vidiš samo ti u pregledu)</a>:null;
 const ctrl0=res||(ask&&!email?<div style={{display:'grid',gap:10}}><span style={{fontSize:14}}>Upiši mejl i točak se vrti – dnevnik ti stiže na poklon.</span>{mail}</div>:<div style={{display:'grid',gap:10,justifyItems:'start'}}>{btn}{w&&w.again&&!spinning&&<span style={{fontSize:14}}>Sreća te prati – imaš još jedno okretanje!</span>}</div>);
 const ctrl=<div style={{display:'grid',gap:14,justifyItems:'start'}}>{ctrl0}{reset}</div>;
 const txt=<><Kicker style={{display:'block',lineHeight:1,marginTop:0}}>Mačkin točak sreće</Kicker><h2 style={H2}>Zavrti<br/>i osvoji</h2><p style={P}>Zavrti točak i osvoji popust, besplatnu dostavu ili mali poklon. Jedno okretanje po mejlu – nagrada važi 24 sata. Besplatna dostava za sve porudžbine od 4.000 RSD.</p>{ctrl}</>;
 const bg=<><div className="mj-leopard" style={{position:'absolute',inset:0,backgroundSize:'260px auto',opacity:.34,pointerEvents:'none'}}></div><div style={{position:'absolute',inset:0,pointerEvents:'none',background:mob?'radial-gradient(ellipse 90% 50% at 40% 25%,rgba(246,239,229,.94),rgba(246,239,229,0) 100%)':'radial-gradient(ellipse 46% 62% at 72% 50%,rgba(246,239,229,.94),rgba(246,239,229,.6) 60%,rgba(246,239,229,0) 100%)'}}></div></>;
 const style=<style>{'@keyframes mjBulb{0%,100%{opacity:.45}50%{opacity:1}}'}</style>;
 if(mob)return <>{band}<section style={{position:'relative',overflow:'hidden',background:'var(--sedef)',padding:'50px 20px 56px'}}>{style}{bg}<div style={{position:'relative'}}>{txt}</div><div style={{position:'relative',display:'flex',justifyContent:'center',marginTop:40}}><MJWheel size={350} rot={rot} spinning={spinning} win={win}/></div></section></>;
 return <>{band}<section style={{position:'relative',height:820,background:'var(--sedef)',overflow:'hidden'}}>{style}{bg}
  <div style={{position:'absolute',left:880,top:129,width:400,zIndex:3}}>{txt}</div>
  <div style={{position:'absolute',left:134,top:90,zIndex:2}}><MJWheel size={620} rot={rot} spinning={spinning} win={win}/></div>
 </section></>;
}
window.MJSreca=MJSreca;window.MJ_PRIZES=MJ_PRIZES;

function MJPrizeChip({openCart}){useMjTick();const p=mjWheelPrize();if(!p)return null;
 return <a onClick={openCart} style={{position:'fixed',left:16,bottom:16,zIndex:150,cursor:'pointer',display:'flex',alignItems:'center',gap:12,padding:'10px 18px 10px 10px',borderRadius:999,background:'rgba(247,241,232,.8)',backdropFilter:'blur(16px) saturate(1.25)',WebkitBackdropFilter:'blur(16px) saturate(1.25)',border:'1px solid rgba(197,160,89,.7)',boxShadow:'0 12px 30px rgba(0,0,0,.14)',color:'#1D1A17',textDecoration:'none',maxWidth:'calc(100vw - 32px)',boxSizing:'border-box'}}>
  <img src={MJ_A+'maca-providna.png'} alt="" style={{width:34,height:34,objectFit:'contain'}}/>
  <span style={{display:'grid',gap:2}}><span style={{font:'700 12px/1.2 Inter,sans-serif',letterSpacing:'.1em',textTransform:'uppercase'}}>{p.txt}</span><span style={{fontSize:11,color:'#5C534A'}}>Nagrada sa točka · važi još <b style={{fontVariantNumeric:'tabular-nums'}}>{mjLeft(p.t)}</b></span></span></a>;}
window.MJPrizeChip=MJPrizeChip;
