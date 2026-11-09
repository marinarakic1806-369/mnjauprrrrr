import os,sys
from playwright.sync_api import sync_playwright
T=[('pozornica','Zvezdana pozornica','Psihoskop · Osnove astrologije','Znakovi, kuće, planete i aspekti: sve što ti treba da sama pročitaš svoju natalnu&nbsp;kartu.'),
   ('aspekti','Aspekti','Psihoskop · Odnosi planeta u natalu','Kako planete razgovaraju u tvojoj karti: konjunkcije, kvadrati, trigoni i šta znače za&nbsp;tebe.')]
css='''@page{size:8.5in 11in;margin:0}html,body{margin:0}body{width:8.5in;height:11in;position:relative;overflow:hidden;background:#F4EDE2;font-family:Inter,sans-serif;color:#1D1A17}
.lp{position:absolute;inset:0;background:url(leopard-dugme-2.png) 0 0/2.6in auto repeat;opacity:.32}
.w{position:absolute;left:50%;top:2.15in;width:5.6in;height:5.6in;margin-left:-2.8in;background:url(astro-natal-zlatni.png) center/contain no-repeat;opacity:.28}
.c{position:absolute;left:0;right:0;top:3.05in;text-align:center}
.cat{width:2.35in;display:block;margin:0 auto}
.br{margin-top:.28in;font:700 58pt/1 Corinthia,cursive}
.t{margin-top:.18in;font:700 30pt/1.1 Inter;text-transform:uppercase;letter-spacing:.06em}
.k{margin-top:.3in;font:600 8.5pt Inter;letter-spacing:.3em;text-transform:uppercase;color:#8A6A28}
.d{margin:.16in auto 0;max-width:4.3in;font:500 11pt/1.55 Inter}'''
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--allow-file-access-from-files'])
    pg=b.new_page()
    for k,t,kick,d in T:
        h=f'<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="../tokens/fonts.css"><style>{css}</style></head><body><div class="lp"></div><div class="w"></div><div class="c"><img class="cat" src="maca-srca.png"><div class="br">Mnjauprrrrr</div><div class="t">{t}</div><div class="k">{kick}</div><div class="d">{d}</div></div></body></html>'
        open(f'c-{k}.html','w',encoding='utf-8').write(h)
        pg.goto('file://'+os.path.abspath(f'c-{k}.html')); pg.wait_for_timeout(800); pg.evaluate('document.fonts.ready')
        pg.pdf(path=f'c-{k}.pdf',width='8.5in',height='11in',print_background=True)
    b.close()
