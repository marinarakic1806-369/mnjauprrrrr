# Mnjauprrrrr: uputstvo za Claude

Marina (vlasnica brenda Mnjauprrrrr, nakit od hirurškog čelika i poludragog kamenja, astrologija).
Odgovaraj **na srpskom, latinicom, u ženskom rodu**, kratko i praktično.

## GLAVNI PLAN (8. 11. 2026): najvažnije, svaka akcija mora biti korak ka ovome

Cilj: **Zvezdani krug**, Marinina online zajednica za žene na **Skoolu**, sa mesečnom članarinom.
- Tim: Marina (natal), astro.zmaj (dugogodišnji astrolog, 13 knjiga o astrologiji i numerologiji), koleginice za sinastriju i numerologiju, čitanje šolje.
- Šta članice dobijaju: natal (Marina), sinastrija i numerologija (koleginice),
  šolja i afirmacije (saradnica), druženje, siguran prostor, kače svoje slike i proizvode, popust na nakit.
- Start samo sa **Krugom**: redovno 29 €/mes, **promo 19 €/mes zauvek za prvih 18**. Cena se ne objavljuje u najavi, otkriva se u mejlu listi.
  **Zlatni krug** (oko 100 €/mes, uz jednu ličnu uslugu) dodaje se kasnije. Predavačice i saradnice ne plaćaju članarinu.
  Članske cene (predlog, 8.11.): Zvezdani zapis 79 € (umesto 100), Zvezdani ključ 49 € (umesto 60),
  sinastrija, numerologija i šolja 20% popusta na cenu koleginice, savet o kamenu po natalu besplatan, nakit 10% popusta.
  Prvih 18 članica dobija promo cenu koja ostaje ista zauvek.
  Lične usluge (natal, sinastrija, brojevi, šolja) i nakit NISU u članarini: članice ih dobijaju po posebnoj ceni.
  U članarini: zajednica, afirmacije, izložbeni kutak, online sastanci na temu izabranu anketom, živi rituali.
- Bez snimljenih materijala: živi časovi (Mlad Mesec, Pun Mesec) se snimaju i postaju biblioteka.
- **Žene koje stvaraju:** ne samo ručni rad (torbe, nakit, sveće), nego vremenom i druge sposobne žene: nutricionistkinje,
  izdavačice, lekarke, preduzetnice. Prodaju i nude kroz krug (provizija ili konsignacija). Ne piši „svojim rukama“, nego „nešto svoje“.
  Mesečna kutija: kamen meseca, sveća, afirmacija.
- Paketi: kamen i afirmacija, element koji fali (Zvezdani ključ i narukvica), ljubavni paket (sinastrija i Rozenkvarc).
- Sajt je izlog (nakit, blog, Zvezdani zapis), a Skool je kuća zajednice. Svoju aplikaciju ne pravimo.

**Pravno:** Marina je državna službenica. Zakon o državnim službenicima, čl. 28 zabranjuje joj preduzetništvo,
a čl. 26 dozvoljava rad za drugog poslodavca uz pismenu saglasnost rukovodioca.
Zato posao glasi na **sestru** (dobila je otkaz u Alta banci, prijavljuje se na NSZ: jednokratna isplata naknade,
obuka za preduzetništvo, subvencija). Radnja se otvara tek posle NSZ i knjigovođe.
Dok se to ne reši, nove porudžbine se ne primaju na Marinino ime.
Koraci su u Claude Docs dokumentu „Koraci: firma, sestra i Zvezdani krug“ (https://claude.ai/artifact/8a5KMpRM9bkVb51Fcpbmo2).
Sledeći korak čeka odgovor sestre.

Marinina karta (18.06.1980, 12:20, Beograd): ASC 5°35' Vaga, MC 6°44' Rak; Sunce i Venera u Blizancima u 9. kući;
Merkur u Raku u 10.; Mesec i Jupiter u Devici u 11.; Severni čvor u Lavu u 11.; Mars i Saturn u Devici u 12.; Pluton u Vagi u 1.
Tranziti: Uran ulazi u 9. kuću (konačno 11.3.2027); Jupiter na Severnom čvoru 21.10.2026, 5.2.2027 i 18.6.2027 (dobar start);
Saturn na DSC (partnerstva, ugovori). Najveći izazov joj je samosabotaža: hrabri je, bez smanjivanja.

## Šta najbolje prolazi na Instagramu (po njenim rezultatima)

1. **Reel Ovan (6 s):** crno-belo sa **jednom crvenom bojom**, brza priča: žena u crvenom se izdvaja iz gomile,
   pa as karta sa siluetom, pa ruka sa prstenom i narukvicom drži kartu, pa natpis OVAN. Nakit je u kadru suptilno.
2. **Karusel „Kamen po natalu“:** „Ti nisi samo tvoj znak“, „Isti znak, drugi kamen“, tri koraka,
   ponuda (savet 1.000 RSD, besplatno uz kupovinu), link mnjauprrrrr.com/kamen.
Zajednički imenitelj: **identitet i ličnost** („ti si drugačija, nisi samo znak“), lična priča, jedna boja na crno-belom, nakit kao deo nje.
Nove objave pravi po ovom modelu i vodi ih ka planu (lista čekanja za Zvezdani krug, Zvezdani zapis, nakit po elementu).

## Pravila brenda

- Proveri sve dvaput, posebno astrologiju. Ono što ne može da se potvrdi, izostavi.
- Nikad jedna reč sama u poslednjem redu (koristi &nbsp;).
- Kamenje se piše velikim slovom: Crni Ahat, Gorski Kristal, Mesečev Kamen.
- Naslovi Inter 700, velika slova; Corinthia za skript i CTA; zlatna #C5A059, #E8C982, #8A6A28; krem #F4EDE2;
  leopard pattern (leopard-dugme-2.png); okviri krem sa zlatnom linijom od 1px.
- Pregledi uvek kao slike ili HTML koji može da otvori sa strane; PNG za Instagram.

## Tehnika

- Sajt je u `public/`. Commit i push na `main`, a Cloudflare Workers automatski objavljuje.
- Proizvodi su u `public/data.js` (window.MJ_PRODUCTS, novi idu na početak). Kratki linkovi su u `public/nakit/<id>/`.
  Privesci imaju `imgs:[slika, 'assets/site/lanci-izbor.jpg']`. Lanac je uključen u cenu, a dužina može da se bira.
- Posle izmene povećaj `?v=` (data.js, app.js, nov-a/b/c.js) u svim HTML fajlovima.
- Blog je u nov-a.js, nov-b.js i nov-c.js. Dugmad su `[Tekst](nakit/<id>)` i vode na mnjauprrrrr.com/<putanja>/.
- Stranica Zvezdani zapis je `public/zvezdani-zapis/`: 100 € ceo zapis, 60 € ključ, PDF za 3 do 5 dana. Link je u meniju svih strana.
- Testiranje lokalno: `python3 -m http.server 8765` u public/, pa Playwright sa /usr/bin/google-chrome.
