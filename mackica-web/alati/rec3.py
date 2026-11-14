import asyncio, base64, os, shutil
from playwright.async_api import async_playwright
JS='''
window.__scroll=(y,ms)=>new Promise(r=>{const s=scrollY,d=y-s,t0=performance.now();function f(t){const p=Math.min((t-t0)/ms,1),e=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;scrollTo(0,s+d*e);p<1?requestAnimationFrame(f):r()}requestAnimationFrame(f)});
window.__to=(sel,pos,ms,i)=>{const el=document.querySelectorAll(sel)[i||0];const b=el.getBoundingClientRect();return __scroll(scrollY+b.top-innerHeight*pos,ms)};
const F=document.createElement('div');F.className='finger';document.body.appendChild(F);F.style.transform='translate(216px,600px)';
window.__point=(sel,i)=>{const el=document.querySelectorAll(sel)[i||0];const b=el.getBoundingClientRect();F.style.opacity=1;F.style.transform='translate('+(b.left+b.width/2)+'px,'+(b.top+b.height/2)+'px)'};
window.__press=(sel,i)=>{const el=document.querySelectorAll(sel)[i||0];const b=el.getBoundingClientRect();const x=b.left+b.width/2,y=b.top+b.height/2;F.classList.remove('down');void F.offsetWidth;F.classList.add('down');const f=document.createElement('div');f.className='tapfx';f.style.left=x+'px';f.style.top=y+'px';document.body.appendChild(f);setTimeout(()=>f.remove(),900);setTimeout(()=>el.click(),150)};
window.__hide=()=>{F.style.opacity=0};
'''
frames=[]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--allow-file-access-from-files'])
        ctx=await b.new_context(viewport={'width':432,'height':768},device_scale_factor=2,is_mobile=True,has_touch=True)
        pg=await ctx.new_page()
        await pg.goto('file:///home/claude/rec/rec.html'); await pg.add_script_tag(content=JS); await pg.wait_for_timeout(700)
        cdp=await ctx.new_cdp_session(pg)
        def on(fr):
            frames.append((fr['metadata']['timestamp'],fr['data']))
            asyncio.ensure_future(cdp.send('Page.screencastFrameAck',{'sessionId':fr['sessionId']}))
        cdp.on('Page.screencastFrame',on)
        await cdp.send('Page.startScreencast',{'format':'jpeg','quality':90,'maxWidth':864,'maxHeight':1536,'everyNthFrame':1})
        w=pg.wait_for_timeout; ev=pg.evaluate
        async def tap(sel,i=0,after=1800):
            await ev(f"__point('{sel}',{i})"); await w(850)
            await ev(f"__press('{sel}',{i})"); await w(450); await ev("__hide()"); await w(after)
        await w(2600)
        await tap('#lang',0,2000); await tap('#lang',0,1300)
        await ev("__hide()"); await ev("__to('.hfone',.08,1800)"); await w(3000)
        await ev("__to('.stk',.32,1500)"); await w(600)
        await tap('.s1',0,2400)
        await ev("__to('.stk',.32,900)"); await w(300); await tap('.s2',0,2400)
        await ev("__to('.stk',.32,900)"); await w(300); await tap('.s3',0,2400)
        await ev("__hide()")
        await ev("__to('#radovi',.05,1500)"); await w(700)
        await ev("__to('.proj h3',.10,1300,0)"); await w(3400)
        await ev("__to('.proj .type',.2,1300,0)"); await w(1200)
        await ev("__to('.proj h3',.10,1500,1)"); await w(3400)
        await ev("__to('.proj .type',.2,1300,1)"); await w(1200)
        await ev("__to('#dobijas',.08,1300)"); await w(600)
        for i in range(6):
            await ev(f"__to('.card',.45,800,{i})"); await w(500)
        await ev("__to('.walk',.18,1400)"); await w(2600)
        for i in range(3):
            await ev(f"__to('.prow',.32,700,{i})"); await w(250)
            await tap('.prow .get',i,1300)
        await ev("__hide()")
        await ev("__to('#kontakt',.12,1500)"); await w(3000)
        await cdp.send('Page.stopScreencast')
        await b.close()
asyncio.run(main())
d='/home/claude/rec/fr'; shutil.rmtree(d,ignore_errors=True); os.makedirs(d)
lines=[]
for k,(ts,data) in enumerate(frames):
    fn=f'{d}/{k:05d}.jpg'; open(fn,'wb').write(base64.b64decode(data))
    dur=(frames[k+1][0]-ts) if k+1<len(frames) else 0.04
    lines.append(f"file '{fn}'\nduration {max(dur,0.001):.4f}")
lines.append(f"file '{d}/{len(frames)-1:05d}.jpg'")
open('/home/claude/rec/list.txt','w').write('\n'.join(lines))
import statistics
gaps=[frames[k+1][0]-frames[k][0] for k in range(len(frames)-1)]
print(len(frames), round(frames[-1][0]-frames[0][0],1), 'fps~',round(len(frames)/(frames[-1][0]-frames[0][0]),1),'maxgap',round(max(gaps),3))
