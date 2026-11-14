import asyncio, html
from playwright.async_api import async_playwright
CSS="""
@font-face{font-family:I;src:url(file:///usr/share/fonts/opentype/inter/Inter-Regular.otf);font-weight:400}
@font-face{font-family:I;src:url(file:///usr/share/fonts/opentype/inter/Inter-Medium.otf);font-weight:500}
@font-face{font-family:I;src:url(file:///usr/share/fonts/opentype/inter/Inter-Bold.otf);font-weight:700}
@font-face{font-family:I;src:url(file:///usr/share/fonts/opentype/inter/Inter-ExtraBold.otf);font-weight:800}
*{margin:0;box-sizing:border-box}
body{width:1080px;height:1350px;background:#fff;font-family:I;color:#111;position:relative;overflow:hidden}
.top{position:absolute;top:64px;left:80px;right:80px;display:flex;justify-content:space-between;font-size:26px;font-weight:500;color:#111;letter-spacing:.5px}
.top span:last-child{color:#9a9a9a}
.bot{position:absolute;bottom:64px;left:80px;right:80px;display:flex;justify-content:space-between;align-items:center;font-size:24px;color:#9a9a9a}
.pill{background:#111;color:#fff;border-radius:40px;padding:14px 26px;font-weight:600;font-size:24px}
.wrap{position:absolute;left:80px;right:80px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center}
.tag{display:inline-block;background:#EFE7DB;color:#111;border-radius:30px;padding:10px 22px;font-size:24px;font-weight:600;margin-bottom:44px;align-self:flex-start}
h1{font-size:118px;line-height:1.0;font-weight:800;letter-spacing:-4px}
h2{font-size:72px;line-height:1.05;font-weight:800;letter-spacing:-2px;margin-bottom:54px}
.sub{font-size:40px;line-height:1.35;color:#555;margin-top:44px;max-width:860px}
.hl{background:linear-gradient(transparent 62%,#EFD9C3 62%)}
.row{display:flex;gap:34px;padding:30px 0;border-top:2px solid #111}
.row:last-of-type{border-bottom:2px solid #111}
.n{font-size:30px;font-weight:700;min-width:62px;padding-top:6px}
.row b{display:block;font-size:42px;line-height:1.15;font-weight:700;letter-spacing:-.5px}
.row p{font-size:30px;line-height:1.35;color:#666;margin-top:8px}
.end{font-size:38px;font-weight:700;margin-top:48px;line-height:1.3}
.browser{position:absolute;border-radius:18px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.18);background:#fff;border:1px solid #e6e6e6}
.bar{height:42px;background:#f3f3f3;display:flex;align-items:center;gap:10px;padding:0 18px}
.bar i{width:13px;height:13px;border-radius:50%;background:#d9d9d9;display:block}
.bar u{flex:1;margin-left:20px;height:24px;border-radius:12px;background:#fff;text-decoration:none;font-size:15px;color:#888;display:flex;align-items:center;padding-left:14px;font-style:normal}
.browser img{display:block;width:100%}
.phone{position:absolute;border-radius:54px;border:12px solid #111;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,.25);background:#111}
.phone img{display:block;width:100%;border-radius:42px}
"""
def page(body,n,tot,cta=None):
    bot=f'<div class="bot"><span>Link do sajta je u biu</span><span class="pill">{cta}</span></div>' if cta else '<div class="bot"><span></span><span>prevuci →</span></div>' if n<tot else '<div class="bot"><span>Piši mi u DM</span><span class="pill">mackica.web</span></div>'
    return f'<html><head><meta charset="utf-8"><style>{CSS}</style></head><body><div class="top"><span>mackica.web</span><span>{n:02d} / {tot:02d}</span></div>{body}{bot}</body></html>'
def rows(items):
    return ''.join(f'<div class="row"><div class="n">{i+1:02d}</div><div><b>{a}</b>{f"<p>{b}</p>" if b else ""}</div></div>' for i,(a,b) in enumerate(items))
S={}
S['1-instagram-1']=page('<div class="wrap"><div class="tag">Savet za mali biznis</div><h1>Instagram<br>nije sajt.</h1><p class="sub">I zato tvoj biznis ne sme da zavisi samo&nbsp;od&nbsp;njega.</p></div>',1,2)
S['1-instagram-2']=page('<div class="wrap"><h2>Zašto ti treba <span class="hl">tvoje mesto</span> na&nbsp;internetu</h2>'+rows([('Profil nije tvoj.','Jedna blokada ili hakovanje i nema te. Sajt ostaje.'),('Algoritam bira ko te vidi.','Sajt vidi svako ko te traži.'),('Na Google-u te nalaze kupci.','Ljudi koji već traže baš to što ti radiš.')])+'<p class="end">Instagram dovodi ljude.<br>Sajt ih pretvara u&nbsp;kupce.</p></div>',2,2)
S['2-sekunde-1']=page('<div class="wrap"><div class="tag">Prvi utisak</div><h1>Imaš<br>3&nbsp;sekunde.</h1><p class="sub">Toliko traje prvi utisak kad neko otvori tvoj&nbsp;sajt. Evo šta mora da vidi&nbsp;odmah.</p></div>',1,2)
S['2-sekunde-2']=page('<div class="wrap"><h2>Na vrhu sajta, <span class="hl">bez&nbsp;skrolovanja</span></h2>'+rows([('Šta radiš.','U jednoj rečenici, bez uvoda i bez „dobro došli“.'),('Za koga je to.','Da se tvoj kupac odmah prepozna.'),('Šta sad da uradi.','Jedno dugme: pošalji poruku, pozovi, kupi.')])+'<p class="end">Sve ostalo može&nbsp;niže.</p></div>',2,2)
S['3-pet-1']=page('<div class="wrap"><div class="tag">Lista za proveru</div><h1>5 stvari bez kojih sajt ne&nbsp;radi.</h1><p class="sub">Za male biznise: salone, radionice, ručni rad, kafiće, usluge.</p></div>',1,2)
S['3-pet-2']=page('<div class="wrap" style="justify-content:center">'+rows([('Radi savršeno na telefonu.','Tvoji kupci dolaze sa Instagrama, dakle sa telefona.'),('Prave fotografije.','Tvoji proizvodi i tvoj prostor, ne slike sa interneta.'),('Cene ili bar „već od“.','Ljudi ne pišu kad ne znaju da li mogu da priušte.'),('Kontakt na jedan klik.','Poruka, poziv ili mejl, bez traženja.'),('Brzo učitavanje.','Spor sajt ljudi zatvore pre nego što vide šta nudiš.')])+'<p class="end">Fali ti nešto od ovoga? Piši mi&nbsp;u&nbsp;DM.</p></div>',2,2)
# portfolio
S['4-mnjau-1']=page('''<div style="position:absolute;left:80px;top:150px"><div class="tag" style="margin-bottom:24px">Novi sajt</div><h2 style="font-size:84px;margin-bottom:10px">Mnjauprrrrr</h2><p style="font-size:34px;color:#666">Nakit, astrologija i blog</p></div>
<div class="browser" style="left:80px;top:470px;width:860px"><div class="bar"><i></i><i></i><i></i><u>mnjauprrrrr.com</u></div><img src="file:///home/claude/web/home-d.png"></div>
<div class="phone" style="left:760px;top:600px;width:250px"><img src="file:///home/claude/web/home-m.png"></div>''',1,3)
S['4-mnjau-2']=page('''<div style="position:absolute;left:80px;top:150px"><h2 style="font-size:64px;margin-bottom:0">Pravljen prvo<br>za <span class="hl">telefon</span>.</h2></div>
<div class="phone" style="left:60px;top:470px;width:300px"><img src="file:///home/claude/web/kamen-m.png"></div>
<div class="phone" style="left:390px;top:430px;width:300px"><img src="file:///home/claude/web/home-m.png"></div>
<div class="phone" style="left:720px;top:470px;width:300px"><img src="file:///home/claude/web/krug-m.png"></div>''',2,3)
S['4-mnjau-3']=page('<div class="wrap"><h2>Šta sajt <span class="hl">radi</span></h2>'+rows([('Katalog nakita sa upitom','Svaki komad ima svoju stranu i kratak link za Instagram.'),('Blog, novi tekst svaki dan','Ljudi se vraćaju, a Google ga pronalazi.'),('Stranice za usluge','Astrološki zapis, kamen po natalu i lista čekanja za zajednicu.'),('Isti stil kao na Instagramu','Leopard, zlatna i krem u svakom detalju.')])+'</div>',3,3,cta='mackica.web')

S['5-hoj-1']=page('''<div style="position:absolute;left:80px;top:150px"><div class="tag" style="margin-bottom:24px">Novi sajt</div><h2 style="font-size:84px;margin-bottom:10px">House of Joy</h2><p style="font-size:34px;color:#666">Privatna vila sa bazenom za proslave i odmor</p></div>
<div class="browser" style="left:80px;top:470px;width:860px"><div class="bar"><i></i><i></i><i></i><u>houseofjoy.pages.dev</u></div><img src="file:///home/claude/web/hoj-home-d.png"></div>
<div class="phone" style="left:760px;top:600px;width:250px"><img src="file:///home/claude/web/hoj-home-m.png"></div>''',1,3)
S['5-hoj-2']=page('''<div style="position:absolute;left:80px;top:150px"><h2 style="font-size:64px;margin-bottom:0">Rezervacija<br>na <span class="hl">jedan dodir</span>.</h2></div>
<div class="phone" style="left:60px;top:470px;width:300px"><img src="file:///home/claude/web/hoj-prostor-m.png"></div>
<div class="phone" style="left:390px;top:430px;width:300px"><img src="file:///home/claude/web/hoj-home-m.png"></div>
<div class="phone" style="left:720px;top:470px;width:300px"><img src="file:///home/claude/web/hoj-cene-m.png"></div>''',2,3)
S['5-hoj-3']=page('<div class="wrap"><h2>Šta sajt <span class="hl">radi</span></h2>'+rows([('Poziv i rezervacija uvek pri ruci','Dugmad su na dnu ekrana dok gost skroluje.'),('Srpski i engleski','Jednim klikom, za goste iz zemlje i inostranstva.'),('Jasne cene','Radni dan, vikend i noćenje, bez dopisivanja.'),('Prostor i proslave','Bazen, jacuzzi, rođendani i radionice, sa fotkama.')])+'</div>',3,3,cta='mackica.web')

async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--allow-file-access-from-files'])
        pg=await b.new_page(viewport={'width':1080,'height':1350})
        for k,v in S.items():
            open(f'/tmp/{k}.html','w').write(v)
            await pg.goto(f'file:///tmp/{k}.html'); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'/home/claude/web/out/{k}.png')
        await b.close()
import os; os.makedirs('/home/claude/web/out',exist_ok=True)
asyncio.run(main())
