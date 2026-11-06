// Dnevni blog tekstovi (novembar). Podaci: nov-a.js, nov-b.js, nov-c.js → window.MJ_NOV.
// Format teksta (x): svaki red = blok. "## " podnaslov, "- " stavka liste, "> " kurziv zaključak,
// "[Tekst](ruta|arg)" dugme, "@zvezdana" / "@aspekti" / "@paket" ponuda e-knjige, **bold** u tekstu.
(function(){
var h=React.createElement;window.MJ_NOV=window.MJ_NOV||[];if(/ui_kits/.test(location.pathname))window.MJ_NOV_ALL=true;
function AA(){try{return MJ_A}catch(e){return window.MJ_A||'assets/site/'}}
function inl(s){var out=[],re=/\*\*(.+?)\*\*/g,m,last=0,i=0;while((m=re.exec(s))){if(m.index>last)out.push(s.slice(last,m.index));out.push(h('b',{key:i++},m[1]));last=re.lastIndex;}if(last<s.length)out.push(s.slice(last));return out;}
var P={fontSize:20,lineHeight:1.6,fontWeight:500,color:'#000',margin:'0 0 16px',textWrap:'pretty',textAlign:'justify',hyphens:'auto'};
var H2={font:'700 22px/1.2 Inter,sans-serif',textTransform:'uppercase',letterSpacing:'.08em',color:'#000',margin:'34px 0 14px',textWrap:'balance'};
var SCRIPT={fontFamily:'var(--font-script)',fontWeight:700,lineHeight:1.1,color:'#111'};
var BOOKS={zvezdana:['Zvezdana pozornica','Svih 12 znakova, kuće, planete i aspekti, da sama pročitaš svoju natalnu kartu. 25 €','E-knjiga%20Zvezdana%20pozornica'],aspekti:['Aspekti','Kako planete razgovaraju u tvojoj karti i šta ti tranziti donose. 15 €','E-knjiga%20Aspekti'],paket:['Paket: obe e-knjige','Zvezdana pozornica + Aspekti. 30 € umesto 40 €','Paket%20e-knjiga']};
function offer(key,go){var b=BOOKS[key]||BOOKS.zvezdana;return h('div',{key:'of',style:{marginTop:44,padding:'38px 42px',background:'rgba(255,255,255,.3)',backdropFilter:'blur(16px) saturate(1.25)',WebkitBackdropFilter:'blur(16px) saturate(1.25)',border:'1px solid rgba(197,160,89,.7)',color:'#111',boxShadow:'0 16px 36px rgba(0,0,0,.12)',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(200px,auto)',gap:30,alignItems:'center'}},
 h('div',null,h('div',{style:{fontSize:13,letterSpacing:'.2em',textTransform:'uppercase',fontWeight:500,marginBottom:8}},'Psihoskop · e-knjige'),h('div',{style:Object.assign({},SCRIPT,{fontSize:34,lineHeight:1})},b[0]),h('p',{style:{margin:'12px 0 0',fontSize:20,lineHeight:1.6}},b[1])),
 h('div',{style:{display:'grid',gap:12,justifyItems:'start'}},h('a',{href:'mailto:marina.rakic1806@gmail.com?subject='+b[2],style:Object.assign({},SCRIPT,{fontSize:34,whiteSpace:'nowrap',textDecoration:'underline',textDecorationThickness:1,textUnderlineOffset:6})},'Želim e-knjigu'),h('a',{onClick:function(){go('astro')},style:{cursor:'pointer',fontSize:12,letterSpacing:'.14em',textTransform:'uppercase',color:'#111',textDecoration:'underline',textUnderlineOffset:4}},'Astro kutak')));}
function blocks(x,go){var L=x.split('\n').map(function(s){return s.trim()}).filter(Boolean),out=[],list=null,btns=null,k=0;
 function flush(){if(list){out.push(h('ul',{key:k++,style:{margin:'0 0 18px',paddingLeft:22,display:'grid',gap:8,fontSize:20,lineHeight:1.55,color:'#000'}},list.map(function(t,i){return h('li',{key:i},inl(t))})));list=null;}if(btns){out.push(h('div',{key:k++,style:{display:'flex',gap:22,flexWrap:'wrap',margin:'40px 0 6px'}},btns));btns=null;}}
 L.forEach(function(s){var m;
  if(s.indexOf('- ')===0){if(btns)flush();(list=list||[]).push(s.slice(2));return;}
  if((m=s.match(/^\[(.+?)\]\((.+?)\)$/))){if(list)flush();var r=m[2].split('|'),Cta=window.MJCta;(btns=btns||[]).push(r[0].indexOf('mailto:')===0?h(Cta,{key:m[1],onClick:function(){location.href=r[0]}},m[1]):h(Cta,{key:m[1],onClick:function(){go(r[0],r[1])}},m[1]));return;}
  flush();
  if(s.indexOf('## ')===0)out.push(h('h2',{key:k++,style:H2},s.slice(3)));
  else if(s.indexOf('> ')===0)out.push(h('p',{key:k++,style:Object.assign({},SCRIPT,{margin:'30px 0 10px',fontSize:38,lineHeight:1.2,textWrap:'balance'})},s.slice(2)));
  else if(s.charAt(0)==='@')out.push(offer(s.slice(1),go));
  else out.push(h('p',{key:k++,style:P},inl(s)));
 });flush();return out;}
function natalBox(go){return h('a',{key:'nb',onClick:function(){go('post-x','kamen-za-tvoj-natal')},style:{marginTop:44,display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:24,alignItems:'center',padding:'26px 32px',cursor:'pointer',color:'#111',textDecoration:'none',background:'rgba(255,255,255,.22)',backdropFilter:'blur(14px) saturate(1.25)',WebkitBackdropFilter:'blur(14px) saturate(1.25)',border:'1px solid rgba(255,255,255,.6)',boxShadow:'0 16px 36px rgba(0,0,0,.08)'}},h('div',null,h('div',{style:{fontSize:13,letterSpacing:'.2em',textTransform:'uppercase',fontWeight:500,marginBottom:8}},'Ne znaš koji je tvoj?'),h('div',{style:{font:'700 20px/1.3 Inter,sans-serif',textTransform:'uppercase',letterSpacing:'.06em'}},'Kamen za tvoj natal')),h('span',{style:Object.assign({},SCRIPT,{fontSize:34,lineHeight:1})},'Saznaj'));}
function signup(){var DS=window.MnjauprrrrrDesignSystem_64b9d1||{};var MailBar=DS.MailBar,Kicker=DS.Kicker;if(!MailBar)return null;return h('div',{key:'su',style:{marginTop:60}},Kicker&&h(Kicker,{tone:'ink'},'Svaki dan jedan tekst'),h('h2',{style:Object.assign({},H2,{margin:'8px 0 10px'})},'Čitaj ovo u svom inboksu'),h('p',{style:Object.assign({},P,{margin:'0 0 18px'})},'Prijavi se i dobijaj tekstove mejlom, uz poklon: Self-love dnevnik za 31 dan.'),h('div',{className:'mj-mail mj-mail-ink mj-mail-gold',style:{display:'block',borderRadius:12,'--mail-1':'rgba(255,255,255,.26)','--mail-2':'rgba(255,255,255,.12)','--mail-btn':'rgba(255,255,255,.34)','--mail-btn-hover':'rgba(255,255,255,.55)','--hairline-strong':'rgba(197,160,89,.7)','--shadow-mailbar':'0 10px 30px rgba(0,0,0,.08)'}},h(MailBar,{onSubmit:window.mjSubscribe,thanks:'Hvala, mačkice! Proveri mejl.',label:'SIGN UP',catSrc:AA()+'macka-sanduce.png'})));}
function fmt(d){var M=['jan','feb','mar','apr','maj','jun','jul','avg','sep','okt','nov','dec'],p=d.split('-');return (+p[2])+'. '+M[+p[1]-1];}
function today(){var t=new Date();return t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0');}
function sorted(){return window.MJ_NOV.filter(function(p){return !p.stalno}).sort(function(a,b){return a.d<b.d?-1:1});}
window.MJ_NOV_PUBLISHED=function(){var t=today();return sorted().filter(function(p){return !p.stalno&&(p.d<=t||window.MJ_NOV_ALL)});};
function NovPost(props){var go=props.go,p=props.post,DS=window.MnjauprrrrrDesignSystem_64b9d1||{},Kicker=DS.Kicker;
 var list=sorted(),i=p.stalno?-2:list.indexOf(p),next=list[i+1],prev=list[i-1],t=today();
 var nav=h('div',{style:{display:'flex',justifyContent:'space-between',gap:20,marginTop:70,paddingTop:22,borderTop:'1px solid rgba(197,160,89,.7)'}},
  prev?h('a',{onClick:function(){go('post-x',prev.id)},style:{cursor:'pointer',display:'grid',gap:6,color:'#000',textDecoration:'none',maxWidth:'46%'}},h('span',{style:{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase'}},'← Prethodni'),h('span',{style:{font:'700 15px/1.3 Inter',textTransform:'uppercase',letterSpacing:'.06em'}},prev.t)):h('span'),
  next&&next.d<=t||next&&window.MJ_NOV_ALL?h('a',{onClick:function(){go('post-x',next.id)},style:{cursor:'pointer',display:'grid',gap:6,color:'#000',textDecoration:'none',textAlign:'right',maxWidth:'46%'}},h('span',{style:{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase'}},'Sledeći →'),h('span',{style:{font:'700 15px/1.3 Inter',textTransform:'uppercase',letterSpacing:'.06em'}},next.t)):h('span',{style:{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase',alignSelf:'end'}},'Sledeći tekst stiže sutra'));
 return h('section',{style:{position:'relative',overflow:'hidden',background:'var(--sedef-2)',padding:'110px 0 120px'}},
  h('div',{className:'mj-leopard',style:{position:'absolute',inset:0,backgroundSize:'260px auto',opacity:.3,pointerEvents:'none'}}),
  h('div',{style:{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 50% 70% at 50% 45%, rgba(239,229,214,.88) 0%, rgba(239,229,214,.5) 65%, rgba(239,229,214,0) 100%)'}}),
  h('article',{lang:'sr',style:{position:'relative',maxWidth:780,margin:'0 auto'}},
   h('a',{onClick:function(){go('blog')},style:{display:'inline-block',marginBottom:18,font:'600 12px Inter',letterSpacing:'.14em',textTransform:'uppercase',cursor:'pointer'}},'← Blog'),
   Kicker?h(Kicker,{tone:'ink'},p.k+' · '+fmt(p.d)):null,
   h('h1',{style:{font:'700 52px/1.12 Inter,sans-serif',textTransform:'uppercase',letterSpacing:'.02em',color:'#000',margin:'12px 0 26px',textWrap:'balance'}},p.t),
   blocks(p.x,go),p.id!=='kamen-za-tvoj-natal'&&natalBox(go),signup(),p.stalno?null:nav));}
function NovList(props){var go=props.go,DS=window.MnjauprrrrrDesignSystem_64b9d1||{},Kicker=DS.Kicker;var L=window.MJ_NOV_PUBLISHED().reverse();if(!L.length)return null;
 return h('div',{style:{marginTop:90}},Kicker&&h(Kicker,{tone:'ink'},'Novembar · svaki dan jedan tekst'),
   h('div',{style:{marginTop:18,borderTop:'1px solid rgba(197,160,89,.7)'}},L.map(function(p){return h('a',{key:p.id,onClick:function(){go('post-x',p.id)},style:{display:'grid',gridTemplateColumns:'200px minmax(0,1fr) auto',alignItems:'baseline',gap:24,padding:'22px 4px',borderBottom:'1px solid rgba(197,160,89,.7)',cursor:'pointer',color:'#000',textDecoration:'none'}},h('span',{style:{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase',fontWeight:500}},fmt(p.d)+' · '+p.k),h('span',{style:{font:'700 20px/1.3 Inter,sans-serif',textTransform:'uppercase',letterSpacing:'.06em'}},p.t),h('span',{style:{fontFamily:'var(--font-script)',fontWeight:700,fontSize:32,lineHeight:1}},'Pročitaj'));})));}window.MJNovList=NovList;
function patch(){
 if(!window.PostX||window.PostX.__nov)return;
 var OP=window.PostX,OB=window.Blog;
 var NP=function(props){var p=window.MJ_NOV.filter(function(x){return x.id===props.id})[0];return p?h(NovPost,{go:props.go,post:p}):h(OP,props);};NP.__nov=1;
 window.PostX=NP;
 try{PostX=NP;}catch(e){}
}
patch();window.MJ_NOV_PATCH=patch;
})();
