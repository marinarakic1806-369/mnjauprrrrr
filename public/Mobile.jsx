const MJ_M_LINKS=[['o-nama','O nama'],['nakit','Nakit'],['astro','Astro'],['blog','Blog'],['kontakt','Kontakt'],['kristali','Kristali']];
const MJ_GLASS={background:'rgba(247,241,232,.74)',backdropFilter:'blur(14px) saturate(1.25)',WebkitBackdropFilter:'blur(14px) saturate(1.25)'};
function MLeo({op=.3,children,style}){return <div style={{position:'relative',overflow:'hidden',...style}}><div className="mj-leopard" style={{position:'absolute',inset:0,backgroundSize:'260px auto',opacity:op,pointerEvents:'none'}}/>{children}</div>;}
function MFrame({children,style}){return <div style={{position:'relative',margin:'10px',boxShadow:'0 16px 36px rgba(0,0,0,.12)',...style}}><div style={{position:'absolute',inset:-10,border:'1px solid rgba(197,160,89,.7)',pointerEvents:'none'}}/>{children}</div>;}
function MobileNav({go,active,n,openCart}){
 const NSx=window.MnjauprrrrrDesignSystem_64b9d1;const [o,setO]=React.useState(false);
 const nav=p=>{setO(false);go(p);};
 return <div style={{position:'sticky',top:0,zIndex:100}}>
  <div style={{...MJ_GLASS,height:56,display:'flex',alignItems:'center',gap:10,padding:'0 12px 0 14px',borderTop:'1px solid rgba(255,255,255,.65)',boxShadow:'0 6px 20px rgba(29,26,23,.08)'}}>
   <a onClick={()=>nav('home')} style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer',textDecoration:'none',color:'var(--ink)'}}><img src={MJ_A+'logo.png'} alt="Mnjauprrrrr" style={{width:36,height:36,borderRadius:999}}/><span style={{fontFamily:'var(--font-script)',fontWeight:700,fontSize:28,lineHeight:1}}>Mnjauprrrrr</span></a>
   <div style={{marginLeft:'auto'}}><NSx.IconButton icon="shopping-bag" label="Korpa" variant="krem" badge={n} onClick={openCart}/></div>
   <button aria-label="Meni" onClick={()=>setO(v=>!v)} style={{all:'unset',cursor:'pointer',width:44,height:44,display:'grid',placeItems:'center',fontSize:24,color:'var(--ink)'}}>{o?'×':'☰'}</button>
  </div>
  {o&&<div style={{...MJ_GLASS,position:'absolute',left:0,right:0,top:56,padding:'14px 22px 26px',display:'grid',gap:4,boxShadow:'0 20px 40px rgba(29,26,23,.12)'}}>
   {MJ_M_LINKS.map(([p,l])=><a key={p} onClick={()=>nav(p)} style={{cursor:'pointer',padding:'12px 0',borderBottom:'1px solid rgba(29,26,23,.1)',font:'600 14px Inter,sans-serif',letterSpacing:'.16em',textTransform:'uppercase',color:active===p?'#8A6A28':'var(--ink)'}}>{l}</a>)}
  </div>}
 </div>;
}
function HomeM({go}){
 const Cta=window.MJCta;const {Kicker,Marquee,MailBar}=window.MnjauprrrrrDesignSystem_64b9d1;const A=MJ_A;
 const [pk,setPk]=React.useState(0);const PK=[['polu-3-kamena.jpg','50% 55%'],['polu-jaspis-prsten.jpg','50% 50%'],['polu-bik-ogrlica.jpg','50% 62%']];
 const H1={...MJ_H1,fontSize:34,lineHeight:1.12};const H2={...MJ_H2,fontSize:28,letterSpacing:'.06em'};const P={...MJ_P,fontSize:15};
 const pad={padding:'0 24px'};
 return <div>
  <MLeo op={.28} style={{background:'linear-gradient(180deg,#FAF6EF 0,var(--hero-1) 60%,var(--sedef) 100%)',padding:'40px 0 50px'}}>
   <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 45% at 30% 18%, rgba(250,246,239,.9) 0%, rgba(250,246,239,0) 100%)'}}/>
   <div style={{position:'relative',...pad}}><Kicker>Čarolija detalja</Kicker><h1 style={{...H1,margin:'14px 0 20px'}}>Komadi nakita koji govore i kada ćutiš</h1><p style={{...P,margin:'0 0 26px'}}>Moderan dizajn i sirovi prirodni materijali. Nakit koji ćeš želeti da nosiš svakog dana. Tiha raskoš, energija koja se oseti pre nego što se vidi.</p><Cta onClick={()=>go('nakit')}>Istraži</Cta></div>
   <MFrame style={{margin:'44px 34px 0'}}><video src={A+'hero.mp4'} poster={A+'hero.jpg'} autoPlay muted loop playsInline style={{width:'100%',aspectRatio:'513/654',objectFit:'cover',objectPosition:'50% 20%',display:'block'}}/></MFrame>
  </MLeo>
  <MLeo op={.34} style={{background:'linear-gradient(180deg,var(--sedef),rgb(229,210,193))'}}>
   <img src={A+'ahat-pirit.jpg'} alt="Privezak od crnog ahata i pirita" style={{position:'relative',width:'100%',aspectRatio:'4/3',objectFit:'cover',objectPosition:'70% 50%',display:'block',transform:'scaleX(-1)',WebkitMaskImage:'linear-gradient(180deg,transparent 0%,#000 14%,#000 72%,transparent 100%)',maskImage:'linear-gradient(180deg,transparent 0%,#000 14%,#000 72%,transparent 100%)'}}/>
   <div style={{position:'relative',...pad,padding:'0 24px 54px',marginTop:-20}}><Kicker>Tiha moć</Kicker><h2 style={{...H2,margin:'8px 0 12px'}}>Crni ahat</h2><p style={{...P,margin:'0 0 24px'}}>Zauzmi prostor koji zaslužuješ. Dodaj boju, teksturu i detalje koji čine da se osećaš dobro. Ne moraš da se uklopiš da bi pripadala, tu si da budeš svoja.</p><Cta onClick={()=>go('nakit','Ogrlice')}>Ogrlice</Cta></div>
  </MLeo>
  <Marquee height={76} items={[{text:'Ogrlice',script:true},{text:'Narukvice'},{text:'Prstenje',script:true},{text:'Minđuše'}]}/>
  <section style={{background:'var(--komp)'}}>
   <img src={A+'komplet.jpg'} alt="Prsten i ogrlica od hirurškog čelika sa crnim oniksom" style={{width:'100%',aspectRatio:'3/4',objectFit:'cover',objectPosition:'50% 0%',display:'block'}}/>
   <div style={{...pad,padding:'34px 24px 50px'}}><Kicker>Jak kao</Kicker><h2 style={{...H2,margin:'6px 0 10px'}}>Hirurški čelik</h2><p style={{...P,margin:'0 0 10px'}}>Snaga koja čuva lepotu. Ne rđa, ne tamni, ne popušta.</p><div style={{...P,display:'grid',gap:2,marginBottom:22}}><span>• Srebrni sjaj koji traje.</span><span>• Pozlata tiho prefinjena.</span></div><Cta kind="pill" onClick={()=>go('nakit')} style={{backgroundImage:'linear-gradient(rgba(244,237,226,.6),rgba(244,237,226,.6)), url('+A+'leopard-dugme-2.png)',backgroundSize:'100% 100%, 54px auto',border:'1px solid rgba(255,255,255,.95)'}}>Istraži</Cta></div>
  </section>
  <MLeo op={.34} style={{background:'var(--sedef)',padding:'44px 0 54px'}}>
   <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(244,237,226,.85) 0%, rgba(244,237,226,0) 100%)'}}/>
   <div style={{position:'relative',display:'flex',gap:10,alignItems:'center',...pad,marginBottom:16}}><button aria-label="Prethodna" onClick={()=>setPk((pk+2)%3)} style={{all:'unset',cursor:'pointer',width:30,height:30,display:'grid',placeItems:'center',fontSize:20,color:'rgba(29,26,23,.6)'}}>‹</button><div style={{display:'flex',gap:7}}>{[0,1,2].map(i=><button key={i} aria-label={'Fotografija '+(i+1)} onClick={()=>setPk(i)} style={{all:'unset',cursor:'pointer',width:pk===i?18:6,height:6,borderRadius:999,background:pk===i?'#C5A059':'rgba(29,26,23,.28)',transition:'width .3s'}}/>)}</div><button aria-label="Sledeća" onClick={()=>setPk((pk+1)%3)} style={{all:'unset',cursor:'pointer',width:30,height:30,display:'grid',placeItems:'center',fontSize:20,color:'rgba(29,26,23,.6)'}}>›</button></div>
   <MFrame style={{margin:'0 34px'}}><img src={A+PK[pk][0]} alt="Poludrago kamenje" style={{width:'100%',aspectRatio:'501/631',objectFit:'cover',objectPosition:PK[pk][1],display:'block'}}/></MFrame>
   <div style={{position:'relative',margin:'30px 16px 0',padding:'30px 26px 30px',borderRadius:'48% 52% 46% 54% / 38% 40% 60% 62%',background:'linear-gradient(135deg,rgba(255,255,255,.55),rgba(246,239,229,.32))',backdropFilter:'blur(14px) saturate(1.25)',WebkitBackdropFilter:'blur(14px) saturate(1.25)'}}><div style={{padding:'10px 14px'}}><Kicker>Magija kristala</Kicker><h2 style={{...H2,margin:'8px 0 12px'}}>Poludrago kamenje</h2><p style={{...P,margin:'0 0 18px'}}>Kristali su nepromenljive strukture, zbog čega emituju konstantnu stabilnu frekvenciju. Kada nosimo kristale oni podižu našu energiju.</p><Cta onClick={()=>go('kristali')}>Kristali</Cta></div></div>
  </MLeo>
  <div style={{position:'relative'}}><Marquee height={76} items={[{text:'Ahat'},{text:'Turmalin',script:true},{text:'Citrin'},{text:'Aventurin',script:true},{text:'Gorski kristal'}]}/><img src={A+'usta-ciklama.png'} alt="" style={{position:'absolute',right:16,top:-60,width:96,zIndex:4,transform:'rotate(-8deg)'}}/></div>
  <MLeo op={.34} style={{background:'var(--sedef)',padding:'50px 0 56px'}}>
   <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 90% 50% at 40% 25%,rgba(246,239,229,.94),rgba(246,239,229,0) 100%)'}}/>
   <div style={{position:'relative',...pad}}><Kicker>Registruj se</Kicker><h2 style={{...H2,margin:'10px 0 12px'}}>Nismo dosadni</h2><p style={{...P,margin:'0 0 22px'}}>Registruj se i na poklon dobijaš <b>Self-love dnevnik</b> – 31 dan male, svakodnevne prakse ljubavi prema sebi.</p>
    <div className="mj-mail mj-mail-ink mj-mail-gold" style={{display:'block',borderRadius:12,'--mail-1':'rgba(255,255,255,.26)','--mail-2':'rgba(255,255,255,.12)','--mail-btn':'rgba(255,255,255,.34)','--mail-btn-hover':'rgba(255,255,255,.55)','--hairline-strong':'rgba(197,160,89,.7)','--shadow-mailbar':'0 10px 30px rgba(0,0,0,.08)',backdropFilter:'blur(16px) saturate(1.25)',WebkitBackdropFilter:'blur(16px) saturate(1.25)',margin:'0 0 24px'}}><MailBar onSubmit={window.mjSubscribe} thanks="Hvala, mačkice! Proveri mejl." label="SIGN UP" catSrc={A+'macka-sanduce.png'}/></div>
    <Cta kind="link" size={38} onClick={()=>go('o-nama')}>O nama</Cta></div>
   <MFrame style={{margin:'44px 34px 0'}}><img src={A+'devojka-cela.jpg'} alt="Devojka u crnom kaputu sa heklanom torbicom, belim čarapama i salonkama" style={{width:'100%',aspectRatio:'9/10',objectFit:'cover',objectPosition:'50% 96%',display:'block'}}/></MFrame>
  </MLeo>
  {window.MJSreca&&<window.MJSreca mob/>}
 </div>;
}
function FooterM({astro}){
 const {SocialLinks}=window.MnjauprrrrrDesignSystem_64b9d1;const A=MJ_A;const tx=astro?'#F2E6CC':'#1D1A17';
 return <footer id="kontakt">
  <div style={{position:'relative',padding:'46px 24px 40px',background:astro?'#58565A':'url('+A+'footer-turmalin.jpg) center/cover',color:tx,display:'grid',gap:18,justifyItems:'start'}}>
   {!astro&&<div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(244,237,226,.55),rgba(244,237,226,.25))'}}/>}
   <div style={{position:'relative',display:'grid',gap:4}}><div style={{fontFamily:'var(--font-script)',fontWeight:700,fontSize:48,lineHeight:1}}>Mnjauprrrrr</div><div style={{font:'700 18px/1.2 Inter,sans-serif',letterSpacing:'.08em',textTransform:'uppercase'}}>Nakit za mačkice</div><div style={{fontSize:14}}>Ili jesi ili nisi mačka</div></div>
   <div style={{position:'relative'}}><SocialLinks direction="row" gap={12}/></div>
   <a href="mailto:marina.rakic1806@gmail.com" style={{position:'relative',color:tx,fontSize:14,textDecoration:'underline',textUnderlineOffset:4}}>marina.rakic1806@gmail.com</a>
   <img src={A+'maca-providna.png'} alt="" style={{position:'absolute',right:22,bottom:26,width:64}}/>
  </div>
  <div style={{background:'#1B1815',color:'#F3E9DA',fontSize:12,padding:'14px 24px',letterSpacing:'.06em'}}>© Mnjauprrrrr</div>
 </footer>;
}

const MJ_CELIK={"items":[["Apsolutna bezbednost za vašu kožu","Zbog svojih antialergijskih svojstava, ovaj materijal ne izaziva iritacije i potpuno je bezbedan za osetljivu kožu, pružajući vam maksimalnu udobnost tokom celog dana."],["Bezbrižno nošenje u svim uslovima","Visoka otpornost na vodu, rđu i oksidaciju znači da vaš omiljeni nakit neće ostavljati tamne ili zelene tragove na koži, niti gubiti svoj prvobitni sjaj pri kontaktu sa vlagom."],["Dugovečnost srebrnog sjaja","Ukoliko izaberete komad u njegovoj prirodnoj, srebrnoj nijansi, on za razliku od klasičnog srebra nikada neće potamneti niti promeniti boju, zadržavajući svoj prefinjeni izgled godinama."],["Prefinjena estetika pozlate","Komadi sa nanosom žutog ili roze zlata pružaju vrhunski luksuzan izgled. Važno je znati da trajnost ove pozlate (koja može trajati od nekoliko meseci do nekoliko godina) direktno zavisi od učestalosti nošenja i izloženosti vodi, što svakom komadu daje lični pečat vašeg stila života."]],"dur":"Izuzetna izdržljivost ovog materijala – koji je zbog svoje sterilnosti i otpornosti našao primenu u medicini, vrhunskom kulinarstvu i industriji – čini ga idealnim za nakit koji zahteva minimalno angažovanje oko održavanja.","care":"Da biste svom komadu vratili refleksiju i visoki sjaj, dovoljno je da sprovedete jednostavan ritual nege. Operite nakit u blagom rastvoru sapunice i mlake vode, a zatim ga nežno prebrišite i potpuno osušite mekanom pamučnom tkaninom."};
function MCelik(){const {Kicker}=window.MnjauprrrrrDesignSystem_64b9d1;const P={...MJ_P,fontSize:15,textWrap:'pretty'};
 return <section style={{position:'relative',padding:'54px 20px 60px'}}><div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 90% 60% at 40% 40%, rgba(244,237,226,.92) 0%, rgba(244,237,226,0) 100%)',pointerEvents:'none'}}/>
  <div style={{position:'relative'}}><Kicker>Jak kao</Kicker><h2 style={{...MJ_H2,fontSize:28,letterSpacing:'.06em',margin:'6px 0 26px'}}>Hirurški čelik</h2>
   <div style={{display:'grid',gap:14}}>{MJ_CELIK.items.map(([b,t])=><div key={b} style={{padding:'20px 20px',background:'rgba(255,255,255,.26)',backdropFilter:'blur(16px) saturate(1.25)',WebkitBackdropFilter:'blur(16px) saturate(1.25)',border:'1px solid rgba(255,255,255,.65)',boxShadow:'0 16px 36px rgba(0,0,0,.06)'}}><p style={{...P,margin:0}}><b>{b}:</b> {t}</p></div>)}</div>
   <p style={{...P,margin:'28px 0 0'}}>{MJ_CELIK.dur}</p>
   <h3 style={{font:'700 15px/1.3 Inter,sans-serif',letterSpacing:'.14em',textTransform:'uppercase',margin:'28px 0 10px'}}>Ritual i nega</h3>
   <p style={{...P,margin:0}}>{MJ_CELIK.care}</p></div></section>;}
function NakitM({go,add,cat}){
 const {Kicker,ProductCard}=window.MnjauprrrrrDesignSystem_64b9d1;const A=MJ_A;
 const isK=typeof cat==='string'&&cat.startsWith('kamen:');const kam=isK?cat.slice(6):null;const kw=isK?kam.toLowerCase().replace(/crni /g,'').split(/\s+i\s+/).map(x=>x.trim().slice(0,5)):[];
 const [c,setC]=React.useState(isK?null:(cat||null));const gridRef=React.useRef(null);
 const scroll=()=>setTimeout(()=>{const el=gridRef.current;if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-70,behavior:'smooth'})},80);
 React.useEffect(()=>{setC(isK?null:(cat||null));if(cat)scroll();},[cat]);
 const list=c?MJ_PRODUCTS.filter(p=>p.cat.includes(c)):isK?MJ_PRODUCTS.filter(p=>kw.some(k=>(p.stone||'').toLowerCase().includes(k))):[];const lbl=c||kam;
 return <MLeo op={.3} style={{background:'linear-gradient(90deg, #F6EFE5 0%, var(--sedef-2) 55%, #E6D8C4 100%)'}}>
  <section style={{position:'relative',padding:'36px 20px 30px'}}><div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 40% at 25% 12%, rgba(244,237,226,.9) 0%, rgba(244,237,226,0) 100%)',pointerEvents:'none'}}/>
   <div style={{position:'relative'}}><Kicker>Nakit za mačkice</Kicker><h1 style={{...MJ_H1,fontSize:36,margin:'8px 0 24px'}}>Nakit</h1>
   <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:14}}>{[['Ogrlice','komplet.jpg'],['Narukvice','turmalin-set.jpg'],['Prstenje','ahat-jarac.jpg'],['Minđuše','p-mindjuse-visece.jpg']].map(([n,f])=><button key={n} onClick={()=>{setC(n);scroll();}} style={{all:'unset',cursor:'pointer',display:'grid',gap:8}}><div style={{padding:7,border:'1px solid rgba(197,160,89,.7)',boxShadow:'0 16px 36px rgba(0,0,0,.12)'}}><img src={A+f} alt={n} style={{width:'100%',aspectRatio:'4/5',objectFit:'cover',display:'block'}}/></div><span style={{fontFamily:'var(--font-script)',fontWeight:700,fontSize:30,lineHeight:1.1,textDecoration:'underline',textDecorationThickness:1,textUnderlineOffset:5,textDecorationColor:c===n?'#C5A059':'currentColor'}}>{n}</span></button>)}</div></div>
  </section>
  {lbl&&<section ref={gridRef} style={{position:'relative',padding:'24px 16px 30px',...MJ_GLASS,background:'rgba(244,237,226,.6)'}}>
   <div style={{display:'flex',alignItems:'baseline',gap:12,margin:'0 4px 18px'}}><span style={{fontFamily:'var(--font-script)',fontWeight:700,fontSize:42,lineHeight:1}}>{lbl}</span><span style={{marginLeft:'auto',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--ink-70)'}}>{list.length} komada</span></div>
   {list.length?<div className="mj-pgrid" style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:14}}>{list.map(p=><div key={p.id} style={{padding:7,border:'1px solid rgba(197,160,89,.7)',minWidth:0}}><ProductCard image={p.img} name={p.name} stone={p.stone} price={rsd(p.price)} badge={p.badge} onAdd={p.price==null?()=>go('proizvod',p.id+'|'+lbl):()=>add(p)} onOpen={()=>go('proizvod',p.id+'|'+(c||cat))}/></div>)}</div>
   :<div style={{padding:'30px 0',textAlign:'center',display:'grid',justifyItems:'center',gap:10}}><img src={A+'macka-sanduce.png'} alt="" style={{width:160}}/><div style={{fontFamily:'var(--font-script)',fontWeight:700,fontSize:42}}>Uskoro…</div></div>}
  </section>}
  <MCelik/>
 </MLeo>;
}
function ProizvodM({go,add,id}){
 const {Kicker,Badge,QuantityStepper,Button,ProductCard}=window.MnjauprrrrrDesignSystem_64b9d1;
 const [pid,from0]=String(id||'').split('|');const p=MJ_PRODUCTS.find(x=>x.id===pid)||MJ_PRODUCTS[0];const from=from0&&from0!=='undefined'&&from0!=='null'?from0:p.cat[0];const fromLbl=from.startsWith('kamen:')?from.slice(6):from;
 const [q,setQ]=React.useState(1);const [o,setO]=React.useState(0);React.useEffect(()=>{setO(0);setQ(1);window.scrollTo(0,0);},[id]);
 const price=p.opts?p.opts[o][1]:p.price;const addP=()=>add(p.opts?{...p,id:p.id+'-'+o,name:p.name+' · '+p.opts[o][0],price}:p,q);
 return <MLeo op={.3} style={{background:'linear-gradient(90deg, #F6EFE5 0%, var(--sedef-2) 55%, #E6D8C4 100%)',padding:'20px 20px 50px'}}>
  <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 90% 50% at 50% 55%, rgba(244,237,226,.92) 0%, rgba(244,237,226,0) 100%)',pointerEvents:'none'}}/>
  <div style={{position:'relative',display:'grid',gap:18}}>
   <a onClick={()=>go('nakit',from)} style={{cursor:'pointer',fontSize:12,fontWeight:600,letterSpacing:'.14em',textTransform:'uppercase',whiteSpace:'nowrap'}}>← Nazad na {fromLbl}</a>
   <div style={{padding:9,border:'1px solid rgba(197,160,89,.7)',boxShadow:'0 16px 36px rgba(0,0,0,.12)'}}><img src={p.img} alt={p.name} style={{display:'block',width:'100%',aspectRatio:'4/5',objectFit:'cover'}}/></div>
   <div><Kicker>{p.stone}</Kicker><h1 style={{...MJ_H1,fontSize:30,margin:'6px 0 0'}}>{p.name}</h1></div>
   <div style={{display:'flex',flexWrap:'wrap',gap:8}}>{p.cat.map(k=><Badge key={k} tone="krem">{k}</Badge>)}{p.el&&<Badge tone="astro">{p.el}</Badge>}{p.badge&&<Badge tone="gold">{p.badge}</Badge>}</div>
   <div style={{font:'600 22px/1 Inter'}}>{rsd(price)}</div>
   <p style={{...MJ_P,fontSize:15,margin:0}}>{p.opis||'Hirurški čelik i poludragi kamen.'}</p>
   {p.opts&&<div style={{display:'flex',flexWrap:'wrap',gap:8}}>{p.opts.map((x,i)=><button key={i} onClick={()=>setO(i)} style={{all:'unset',cursor:'pointer',padding:'11px 16px',borderRadius:999,fontSize:13,border:'1px solid '+(o===i?'#C5A059':'var(--hairline-strong)'),background:o===i?'rgba(197,160,89,.12)':'#fff'}}>{x[0]} · {rsd(x[1])}</button>)}</div>}
   <div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}><QuantityStepper value={q} onChange={setQ}/>{price==null?<Button size="lg" onClick={()=>{location.href='mailto:marina.rakic1806@gmail.com?subject='+encodeURIComponent('Upit: '+p.name)}}>Pošalji upit</Button>:<Button size="lg" onClick={addP}>Dodaj u korpu</Button>}</div>
   <div style={{borderTop:'1px solid var(--hairline-strong)'}}>{[['Materijal','Hirurški čelik'],['Kamen',p.stone],...(p.info||[]),...(p.el?[['Element',p.el]]:[])].map(([k,v])=><div key={k} style={{display:'grid',gridTemplateColumns:'110px 1fr',gap:10,padding:'12px 0',borderBottom:'1px solid var(--hairline-strong)',fontSize:14}}><span style={{fontWeight:600,fontSize:11,letterSpacing:'.14em',textTransform:'uppercase'}}>{k}</span><span>{v}</span></div>)}</div>
   <h2 style={{margin:'30px 0 0',fontFamily:'var(--font-script)',fontWeight:700,fontSize:42,lineHeight:1}}>Mačkice su uzele i ovo</h2>
   <div className="mj-pgrid" style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:14}}>{MJ_PRODUCTS.filter(x=>x.id!==p.id).slice(0,4).map(x=><div key={x.id} style={{padding:7,border:'1px solid rgba(197,160,89,.7)',minWidth:0}}><ProductCard image={x.img} name={x.name} stone={x.stone} price={rsd(x.price)} onAdd={()=>go('proizvod',x.id+'|'+from)} onOpen={()=>go('proizvod',x.id+'|'+from)}/></div>)}</div>
  </div>
 </MLeo>;
}
Object.assign(window,{MobileNav,HomeM,FooterM,NakitM,ProizvodM});

function ONamaM({go}){
 const {Marquee}=window.MnjauprrrrrDesignSystem_64b9d1;const A=MJ_A;const G={background:'rgba(255,255,255,.3)',backdropFilter:'blur(16px) saturate(1.25)',WebkitBackdropFilter:'blur(16px) saturate(1.25)',boxShadow:'0 16px 36px rgba(0,0,0,.12)'};
 const T=['S obzirom da je moje Sunce u znaku Blizanaca, slobodno se može reći „o nama". Blizanac sam, a podznak mi je u znaku Vage – dupli vazduh, mislilac.','Mesec, moja duša je u Devici. Imam 4 planete u Devici, tako da nisam klasičan vetropirasti Blizanac.','Uređivanje, kreiranje, učenje i knjige su moja strast.','Simboli i značenja su ono što volim. Nakit koji kreiram govori umesto mene.'];
 return <div>
  <MFrame style={{margin:'26px 20px 0'}}><img src={A+'selfie.jpg'} alt="Marina se smeje i slika selfi" style={{display:'block',width:'100%',height:'auto'}}/></MFrame>
  <div style={{padding:'34px 22px 40px',color:'#111'}}><h1 style={{margin:'0 0 18px',font:'700 34px/1.1 Inter,sans-serif',textTransform:'uppercase',letterSpacing:'.04em'}}>O nama</h1>
   {T.map((t,i)=><p key={i} style={{margin:'0 0 12px',fontSize:17,lineHeight:1.6,textWrap:'pretty'}}>{t}</p>)}<p style={{margin:'6px 0 0',fontFamily:'var(--font-script)',fontWeight:700,fontSize:38,lineHeight:1}}>Uživaj.</p></div>
  <Marquee height={64} items={[{text:'Vatra',script:true},{text:'Zemlja'},{text:'Vazduh',script:true},{text:'Voda'}]}/>
  <div style={{padding:'44px 20px 50px',color:'#111'}}>
   <div style={{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase',fontWeight:500,marginBottom:8}}>Psihoskop · e-knjige</div>
   <h2 style={{margin:'0 0 14px',font:'700 28px/1.15 Inter,sans-serif',textTransform:'uppercase',letterSpacing:'.04em'}}>Pročitaj svoj natal</h2>
   <p style={{margin:'0 0 30px',fontSize:16,lineHeight:1.6,textWrap:'pretty'}}>Knjige i simboli su moja strast, pa sam sve što znam o astrologiji spakovala na jedno mesto. Da možeš sama da pročitaš svoju natalnu kartu – svoje znakove, kuće, planete i odnose među njima.</p>
   <div style={{display:'grid',gap:22}}>{MJ_EBOOKS.map((b,i)=>{const ln=i===0?'#7FB394':'#E6A9C7';return <div key={b[0]} style={{...G,position:'relative',display:'grid',gridTemplateColumns:'112px minmax(0,1fr)',gap:18,padding:18,border:'1px solid '+ln}}>
    <div style={{alignSelf:'center',aspectRatio:'210/297',background:'#58565A',border:'1px solid '+ln,display:'grid',justifyItems:'center',alignContent:'center',gap:5,padding:8,boxShadow:'0 12px 26px rgba(0,0,0,.22)',transform:'rotate('+(i===0?-3:3)+'deg)'}}><img src={A+'astro-natal-zlatni.png'} alt="" style={{width:'78%'}}/><span style={{fontFamily:'var(--font-script)',fontWeight:700,fontSize:17,lineHeight:1,color:'#E8C982'}}>Mnjauprrrrr</span><span style={{fontSize:7,letterSpacing:'.1em',textTransform:'uppercase',fontWeight:700,color:'#E8C982',textAlign:'center'}}>{b[0]}</span></div>
    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:6}}><span style={{fontSize:11,letterSpacing:'.14em',textTransform:'uppercase'}}>{b[1]}</span><span style={{fontFamily:'var(--font-script)',fontWeight:700,fontSize:34,lineHeight:1.05}}>{b[0]}</span>{i===1&&<img src={A+'maca-providna.png'} alt="Mačkica" style={{position:'absolute',right:12,top:-34,width:64,animation:'mj-float 6s ease-in-out infinite',pointerEvents:'none'}}/>}<span style={{font:'700 22px/1 Inter',marginTop:4}}>{b[3]} €</span><a href={'mailto:marina.rakic1806@gmail.com?subject='+encodeURIComponent('E-knjiga Psihoskop – '+b[0])} style={{fontFamily:'var(--font-script)',fontWeight:700,fontSize:28,lineHeight:1.1,color:'#111',textDecoration:'underline',textDecorationThickness:1,textUnderlineOffset:4}}>Želim e-knjigu</a></div></div>})}</div>
   <div style={{...G,marginTop:22,padding:'18px 20px',border:'1px solid rgba(197,160,89,.7)',display:'flex',alignItems:'baseline',flexWrap:'wrap',gap:'6px 14px'}}><span style={{fontFamily:'var(--font-script)',fontWeight:700,fontSize:40,lineHeight:1}}>Paket</span><span style={{fontSize:15}}>obe e-knjige za <strong>30 €</strong></span><a href={'mailto:marina.rakic1806@gmail.com?subject='+encodeURIComponent('Psihoskop paket – obe e-knjige')} style={{marginLeft:'auto',fontFamily:'var(--font-script)',fontWeight:700,fontSize:32,lineHeight:1,color:'#111',textDecoration:'underline',textDecorationThickness:1,textUnderlineOffset:4}}>Želim obe</a></div>
   <a onClick={()=>go('astro')} style={{display:'inline-block',marginTop:30,cursor:'pointer',fontSize:12,letterSpacing:'.16em',textTransform:'uppercase',color:'#111',textDecoration:'underline',textUnderlineOffset:4}}>Saznaj više u Astro kutku</a></div>
 </div>;
}
