;// Home.jsx
function Home({
  go
}) {
  const Cta = window.MJCta;
  const {
    Kicker,
    Marquee,
    BlobPanel,
    MailBar
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  const [pk, setPk] = React.useState(0);
  const PK = [{
    src: 'polu-3-kamena.jpg',
    pos: '50% 55%',
    alt: 'Ogrlice od ahata, oniksa i jaspisa na kamenoj ploči'
  }, {
    src: 'polu-jaspis-prsten.jpg',
    pos: '50% 50%',
    alt: 'Prsten od dalmatinskog jaspisa sa zlatnim stopicama'
  }, {
    src: 'polu-bik-ogrlica.jpg',
    pos: '50% 62%',
    alt: 'Ogrlica od rozenkvarca sa znakom Bika'
  }];
  return React.createElement("div", null, React.createElement("header", {
    style: {
      position: 'relative',
      height: 1340,
      background: 'linear-gradient(180deg,#FAF6EF 0,var(--hero-1) 60%,var(--sedef) 100%)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .28
    }
  }), React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .3,
      WebkitMaskImage: 'linear-gradient(90deg,transparent 35%,#000 100%)',
      maskImage: 'linear-gradient(90deg,transparent 35%,#000 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 55% 50% at 28% 30%, rgba(250,246,239,.85) 0%, rgba(250,246,239,.45) 60%, rgba(250,246,239,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 173,
      top: 122,
      width: 560,
      zIndex: 5
    }
  }, React.createElement(Kicker, null, "\u010Carolija detalja"), React.createElement("h1", {
    style: {
      ...MJ_H1,
      margin: '16px 0 24px'
    }
  }, "Komadi nakita", React.createElement("br", null), "koji govore", React.createElement("br", null), "i kada \u0107uti\u0161"), React.createElement("p", {
    style: {
      ...MJ_P,
      lineHeight: 1.6,
      marginBottom: 56,
      whiteSpace: 'nowrap'
    }
  }, "Moderan dizajn i sirovi prirodni materijali.", React.createElement("br", null), "Nakit koji \u0107e\u0161 \u017Eeleti da nosi\u0161 svakog dana.", React.createElement("br", null), "Tiha rasko\u0161 za one koje ne moraju da vi\u010Du.", React.createElement("br", null), "Ne\u017Enost koja nosi snagu, prime\u0107ena bez re\u010Di."), React.createElement(Cta, {
    onClick: () => go('nakit')
  }, "Istra\u017Ei")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 746,
      top: 126,
      width: 541,
      height: 682,
      boxSizing: 'border-box',
      border: '1px solid rgba(197,160,89,.7)',
      zIndex: 3,
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 760,
      top: 140,
      width: 513,
      height: 654,
      zIndex: 3,
      boxShadow: '0 16px 36px rgba(0,0,0,.12)'
    }
  }, React.createElement("video", {
    src: A + 'hero.mp4',
    poster: A + 'hero.jpg',
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      width: 513,
      height: 654,
      objectFit: 'cover',
      objectPosition: '50% 20%',
      display: 'block'
    }
  })), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 604,
      width: '100%',
      height: 736,
      zIndex: 2,
      WebkitMaskImage: 'url(' + A + 'maska-ahat-2.png)',
      maskImage: 'url(' + A + 'maska-ahat-2.png)',
      WebkitMaskSize: '100% 100%',
      maskSize: '100% 100%',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat'
    }
  }, React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      WebkitMaskImage: 'linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.55) 7%,#000 18%),linear-gradient(to right,transparent 690px,#000 770px,#000 1263px,transparent 1343px)',
      maskImage: 'linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.55) 7%,#000 18%),linear-gradient(to right,transparent 690px,#000 770px,#000 1263px,transparent 1343px)',
      WebkitMaskComposite: 'source-over',
      maskComposite: 'add'
    }
  }, React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg,rgb(229,210,193),rgb(226,208,190))',
      position: 'relative'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .46,
      WebkitMaskImage: 'linear-gradient(112deg,transparent 30%,rgba(0,0,0,.35) 46%,#000 68%)',
      maskImage: 'linear-gradient(112deg,transparent 30%,rgba(0,0,0,.35) 46%,#000 68%)'
    }
  }), React.createElement("div", { style: { position: 'absolute', left: 0, top: 110, width: 983, height: 676, WebkitMaskImage: 'linear-gradient(180deg,transparent 0%,#000 6%)', maskImage: 'linear-gradient(180deg,transparent 0%,#000 6%)' } }, React.createElement("div", { style: { width: '100%', height: '100%', WebkitMaskImage: 'linear-gradient(270deg,transparent 0%,rgba(0,0,0,.25) 13%,rgba(0,0,0,.7) 26%,#000 36%)', maskImage: 'linear-gradient(270deg,transparent 0%,rgba(0,0,0,.25) 13%,rgba(0,0,0,.7) 26%,#000 36%)' } }, React.createElement("img", { src: A + 'ahat-pirit.jpg', alt: "Privezak od crnog ahata i pirita", style: { width: '100%', height: '100%', transform: 'scaleX(-1)', display: 'block' } }))), React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .42,
      mixBlendMode: 'multiply',
      pointerEvents: 'none',
      WebkitMaskImage: 'linear-gradient(112deg,transparent 37%,rgba(0,0,0,.6) 45%,#000 51%,rgba(0,0,0,.4) 58%,transparent 66%)',
      maskImage: 'linear-gradient(112deg,transparent 37%,rgba(0,0,0,.6) 45%,#000 51%,rgba(0,0,0,.4) 58%,transparent 66%)'
    }
  })))), React.createElement("div", {
    style: {
      position: 'absolute',
      right: 167,
      top: 851,
      width: 340,
      color: '#1d1a17',
      zIndex: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, React.createElement(Kicker, null, "Tiha mo\u0107"), React.createElement("h2", {
    style: {
      ...MJ_H2,
      color: '#1d1a17',
      letterSpacing: '.08em',
      margin: '8px 0 12px'
    }
  }, "Crni ahat"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      textAlign: 'justify',
      hyphens: 'auto'
    },
    lang: "sr"
  }, "Zauzmi prostor koji zaslu\u017Euje\u0161. Dodaj boju, teksturu i detalje koji \u010Dine da se ose\u0107a\u0161 dobro. Ne mora\u0161 da se uklopi\u0161 da bi pripadala, tu si da bude\u0161 svoja."), React.createElement(Cta, {
    style: {
      marginTop: 56
    },
    onClick: () => go('nakit', 'Ogrlice')
  }, "Ogrlice"))), React.createElement(Marquee, {
    items: [{
      text: 'Ogrlice',
      script: true
    }, {
      text: 'Narukvice'
    }, {
      text: 'Prstenje',
      script: true
    }, {
      text: 'Minđuše'
    }]
  }), React.createElement("section", {
    style: {
      position: 'relative',
      height: 1545,
      overflow: 'hidden',
      background: 'var(--komp)'
    }
  }, React.createElement("img", {
    src: A + 'komplet.jpg',
    alt: "Prsten i ogrlica od hirur\u0161kog \u010Delika sa crnim oniksom",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 0%',
      display: 'block'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 173,
      top: 700,
      width: 460
    }
  }, React.createElement(Kicker, null, "Jak kao"), React.createElement("h2", {
    style: {
      ...MJ_H2,
      margin: '4px 0 10px'
    }
  }, "Hirur\u0161ki \u010Delik"), React.createElement("p", {
    style: {
      ...MJ_P,
      margin: '0 0 56px'
    }
  }, "Snaga koja \u010Duva lepotu.", React.createElement("br", null), "Ne r\u0111a, ne tamni, ne popu\u0161ta.", React.createElement("br", null), "Srebrni sjaj koji traje.", React.createElement("br", null), "Tiho prefinjena pozlata."), React.createElement(Cta, {
    kind: "pill",
    onClick: () => go('nakit'),
    style: {
      backgroundImage: 'linear-gradient(rgba(244,237,226,.6),rgba(244,237,226,.6)), url(' + A + 'leopard-dugme-2.png)',
      backgroundSize: '100% 100%, 54px auto',
      border: '1px solid rgba(255,255,255,.95)'
    }
  }, "Istra\u017Ei"))), React.createElement("section", {
    style: {
      position: 'relative',
      height: 986,
      background: 'var(--sedef)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .34
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(244,237,226,.8) 0%, rgba(244,237,226,.4) 60%, rgba(244,237,226,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transform: 'translateX(-79px) scale(1.08)',
      transformOrigin: '799px 50%'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 290,
      top: 146,
      zIndex: 6,
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, React.createElement("button", {
    "aria-label": "Prethodna",
    onClick: () => setPk((pk + 2) % 3),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: 22,
      height: 22,
      display: 'grid',
      placeItems: 'center',
      fontSize: 18,
      lineHeight: 1,
      color: 'rgba(29,26,23,.6)'
    }
  }, "\u2039"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7
    }
  }, [0, 1, 2].map(i => React.createElement("button", {
    key: i,
    "aria-label": 'Fotografija ' + (i + 1),
    onClick: () => setPk(i),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: pk === i ? 18 : 6,
      height: 6,
      borderRadius: 999,
      background: pk === i ? '#C5A059' : 'rgba(29,26,23,.28)',
      transition: 'width .3s,background .3s'
    }
  }))), React.createElement("button", {
    "aria-label": "Slede\u0107a",
    onClick: () => setPk((pk + 1) % 3),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: 22,
      height: 22,
      display: 'grid',
      placeItems: 'center',
      fontSize: 18,
      lineHeight: 1,
      color: 'rgba(29,26,23,.6)'
    }
  }, "\u203A")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 290,
      top: 178,
      width: 501,
      height: 631,
      padding: 14,
      zIndex: 4,
      boxSizing: 'border-box',
      border: '1px solid rgba(197,160,89,.7)'
    }
  }, React.createElement("img", {
    src: A + PK[pk].src,
    alt: PK[pk].alt,
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)',
      objectFit: 'cover',
      objectPosition: PK[pk].pos
    }
  })), React.createElement(BlobPanel, {
    blobSrc: A + 'blob.png',
    padding: "54px 84px 0",
    height: 548,
    style: {
      position: 'absolute',
      left: 736,
      top: 178,
      zIndex: 3,
      background: 'linear-gradient(135deg,rgba(255,255,255,.55),rgba(246,239,229,.32))',
      backdropFilter: 'blur(14px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(14px) saturate(1.25)',
      filter: 'none',
      WebkitMaskImage: 'url(' + A + 'blob.png)',
      maskImage: 'url(' + A + 'blob.png)',
      WebkitMaskSize: '100% 100%',
      maskSize: '100% 100%',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat'
    }
  }, React.createElement(Kicker, null, "Magija kristala"), React.createElement("h2", {
    style: {
      ...MJ_H2,
      margin: '8px 0 14px'
    }
  }, "Poludrago", React.createElement("br", null), "kamenje"), React.createElement("p", {
    style: MJ_P
  }, "Kristali su nepromenljive strukture, zbog \u010Dega emituju konstantnu stabilnu frekvenciju. Kada nosimo kristale oni podi\u017Eu na\u0161u energiju. Jaspis Dalmatinac energija \u010Diste radosti."), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginTop: 56
    }
  }, React.createElement(Cta, {
    onClick: () => go('kristali')
  }, "Kristali"))))), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(Marquee, {
    items: [{
      text: 'Ahat'
    }, {
      text: 'Turmalin',
      script: true
    }, {
      text: 'Citrin'
    }, {
      text: 'Aventurin',
      script: true
    }, {
      text: 'Gorski kristal'
    }]
  }), React.createElement("img", {
    src: A + 'usta-ciklama.png',
    style: {
      position: 'absolute',
      right: 150,
      top: -120,
      width: 180,
      zIndex: 4,
      transform: 'rotate(-8deg)'
    }
  })), React.createElement("section", {
    style: {
      position: 'relative',
      height: 860,
      background: 'var(--sedef)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .34
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 46% 62% at 28% 50%,rgba(246,239,229,.94),rgba(246,239,229,.6) 60%,rgba(246,239,229,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 760,
      top: 181,
      width: 513,
      boxSizing: 'border-box',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)',
      zIndex: 2
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -14,
      border: '1px solid rgba(197,160,89,.7)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      overflow: 'hidden',
      aspectRatio: '9/10'
    }
  }, React.createElement("img", {
    src: A + 'devojka-cela.jpg',
    alt: "Devojka u crnom kaputu sa heklanom torbicom, belim \u010Darapama i salonkama",
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover',
      objectPosition: '50% 96%'
    }
  }))), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 173,
      top: 196,
      width: 440,
      zIndex: 3
    }
  }, React.createElement(Kicker, {
    style: {
      display: 'block',
      lineHeight: 1,
      marginTop: 0
    }
  }, "Registruj se"), React.createElement("h2", {
    style: {
      ...MJ_H2,
      margin: '10px 0 14px'
    }
  }, "Nismo", React.createElement("br", null), "dosadni"), React.createElement("p", {
    style: {
      ...MJ_P,
      margin: '0 0 26px'
    }
  }, "Registruj se i na poklon dobija\u0161 ", React.createElement("b", null, "Self-love dnevnik"), " \u2013 31 dan male, svakodnevne prakse ljubavi prema sebi."), React.createElement("div", {
    className: "mj-mail mj-mail-ink mj-mail-gold",
    style: {
      display: 'block',
      width: 440,
      borderRadius: 12,
      '--mail-1': 'rgba(255,255,255,.26)',
      '--mail-2': 'rgba(255,255,255,.12)',
      '--mail-btn': 'rgba(255,255,255,.34)',
      '--mail-btn-hover': 'rgba(255,255,255,.55)',
      '--hairline-strong': 'rgba(197,160,89,.7)',
      '--shadow-mailbar': '0 10px 30px rgba(0,0,0,.08)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
      margin: '0 0 26px'
    }
  }, React.createElement(MailBar, {
    onSubmit: window.mjSubscribe,
    thanks: "Hvala, ma\u010Dkice! Proveri mejl.",
    label: "SIGN UP",
    catSrc: A + 'macka-sanduce.png'
  })), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 569,
      transform: 'translateY(-100%)'
    }
  }, React.createElement(Cta, {
    kind: "link",
    onClick: () => go('o-nama')
  }, "O nama")))), window.MJSreca && React.createElement(window.MJSreca, null));
}
window.Home = Home;
;// Pages.jsx
function ONama({
  go
}) {
  const Cta = window.MJCta;
  const {
    Marquee
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  return React.createElement("div", null, React.createElement("header", {
    style: {
      position: 'relative',
      height: 1081,
      background: '#3a2e28',
      overflow: 'hidden'
    }
  }, React.createElement("img", {
    src: A + 'selfie.jpg',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(15,10,8,.62) 0,rgba(15,10,8,.3) 55%,transparent 85%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 150,
      top: 250,
      width: 420,
      color: 'var(--krem)',
      zIndex: 2
    }
  }, React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: 'var(--krem)',
      marginBottom: 34
    }
  }, "O nama"), ['S obzirom da je moje Sunce u znaku Blizanaca, slobodno se može reći „o nama". Blizanac sam, a podznak mi je u znaku Vage – dupli vazduh, mislilac.', 'Mesec, moja duša je u Devici.\nImam 4 planete u Devici, tako da nisam\nklasičan vetropirasti Blizanac.', 'Uređivanje, kreiranje, učenje i knjige\nsu moja velika strast i pasija.', 'Simboli i značenja su ono što volim.\nNakit koji kreiram govori umesto mene.'].map((t, i) => React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 4px',
      fontSize: 14,
      lineHeight: 1.6,
      whiteSpace: 'pre-line',
      textWrap: 'balance',
      textShadow: '0 1px 8px rgba(0,0,0,.45)'
    }
  }, t)), React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 14,
      textShadow: '0 1px 8px rgba(0,0,0,.45)'
    }
  }, "U\u017Eivaj."))), React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 60% 90% at 0% 45%, rgba(255,255,255,.7) 0%, rgba(255,255,255,.3) 45%, transparent 75%), linear-gradient(90deg, #F6EFE5 0%, var(--sedef-2) 55%, #E6D8C4 100%)',
      paddingTop: 60
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .32,
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse 55% 60% at 50% 58%, rgba(246,239,229,.9) 0%, rgba(246,239,229,.55) 60%, rgba(246,239,229,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(Marquee, {
    height: 90,
    items: [{
      text: 'Vatra',
      script: true
    }, {
      text: 'Zemlja'
    }, {
      text: 'Vazduh',
      script: true
    }, {
      text: 'Voda'
    }]
  }), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      padding: '110px 110px 120px'
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 1180,
      color: '#111',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: 10
    }
  }, "Psihoskop \xB7 e-knjige"), React.createElement("h2", {
    style: {
      ...MJ_H2,
      color: '#111',
      fontSize: 40,
      marginTop: 0,
      marginBottom: 24
    }
  }, "Pro\u010Ditaj svoj natal"), React.createElement("p", {
    style: {
      ...MJ_P,
      color: '#111',
      margin: '0 0 56px',
      maxWidth: 760,
      textWrap: 'balance'
    }
  }, "Knjige i simboli su moja velika ljubav, pa sam spojila jedno i drugo i napravila Astro e-knjigu samo za tebe. Uz nju \u0107e\u0161 mo\u0107i sama da \u010Dita\u0161 svoju natalnu kartu, da razume\u0161 svoje ku\u0107e i planete i da vidi\u0161 kako me\u0111usobno razgovaraju."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 40,
      width: '100%',
      textAlign: 'left'
    }
  }, MJ_EBOOKS.map((b, i) => {
    const ln = i === 0 ? '#7FB394' : '#E6A9C7';
    return React.createElement("div", {
      key: b[0],
      style: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'clamp(100px,30%,170px) minmax(0,1fr)',
        gap: 36,
        alignItems: 'stretch',
        padding: 32,
        boxSizing: 'border-box',
        background: 'rgba(255,255,255,.3)',
        backdropFilter: 'blur(16px) saturate(1.25)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
        border: '1px solid ' + ln,
        boxShadow: '0 16px 36px rgba(0,0,0,.12)'
      }
    }, React.createElement("div", {
      style: {
        alignSelf: 'center',
        width: '100%',
        overflow: 'hidden',
        containerType: 'inline-size',
        boxSizing: 'border-box',
        aspectRatio: '210/297',
        background: '#58565A',
        border: '1px solid ' + ln,
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
        gap: 7,
        padding: 14,
        boxShadow: '0 16px 36px rgba(0,0,0,.22)',
        transform: 'rotate(' + (i === 0 ? -3 : 3) + 'deg)'
      }
    }, React.createElement("img", {
      src: MJ_A + 'astro-natal-zlatni.png',
      alt: "",
      style: {
        width: '80%'
      }
    }), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: '15cqw',
        lineHeight: 1,
        color: '#E8C982'
      }
    }, "Mnjauprrrrr"), React.createElement("span", {
      style: {
        fontSize: '5.6cqw',
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: '#E8C982',
        textAlign: 'center'
      }
    }, b[0])), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
        height: '100%'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.35,
        minHeight: '2.7em',
        display: 'flex',
        alignItems: 'flex-end',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: '#111',
        textWrap: 'balance'
      }
    }, b[1]), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-script)',
        fontFamily: 'Inter,sans-serif',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.04em',
        fontSize: 24,
        lineHeight: 1.15,
        marginTop: 4,
        textWrap: 'balance',
        whiteSpace: 'pre-line',
        color: '#111'
      }
    }, b[0].replace(' ', '\n')), i === 1 && React.createElement("img", {
      src: MJ_A + 'maca-providna.png',
      alt: "Ma\u010Dkica",
      style: {
        position: 'absolute',
        right: 18,
        top: -46,
        width: 96,
        animation: 'mj-float 6s ease-in-out infinite',
        pointerEvents: 'none'
      }
    }), React.createElement("span", {
      style: {
        font: '700 26px/1 Inter',
        whiteSpace: 'nowrap',
        marginTop: 'auto',
        paddingTop: 24
      }
    }, b[3], " \u20AC"), React.createElement("a", {
      href: 'mailto:marina.rakic1806@gmail.com?subject=' + encodeURIComponent('E-knjiga Psihoskop – ' + b[0]),
      style: {
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: 34,
        lineHeight: 1.1,
        color: '#111',
        textDecoration: 'underline',
        textDecorationThickness: 1,
        textUnderlineOffset: 5
      }
    }, "\u017Delim e-knjigu")));
  })), React.createElement("div", {
    style: {
      marginTop: 40,
      padding: '24px 34px',
      boxSizing: 'border-box',
      background: 'rgba(255,255,255,.3)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
      border: '1px solid rgba(197,160,89,.7)',
      width: '100%',
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: '8px 22px'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1
    }
  }, "Paket"), React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "obe e-knjige za ", React.createElement("strong", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "30 \u20AC")), React.createElement("a", {
    href: 'mailto:marina.rakic1806@gmail.com?subject=' + encodeURIComponent('Psihoskop paket – obe e-knjige'),
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1,
      color: '#111',
      textDecoration: 'underline',
      textDecorationThickness: 1,
      textUnderlineOffset: 5
    }
  }, "\u017Delim obe")), React.createElement("a", {
    onClick: () => go('astro'),
    style: {
      paddingTop: 36,
      cursor: 'pointer',
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: '#111',
      textDecoration: 'underline',
      textUnderlineOffset: 4
    }
  }, "Saznaj vi\u0161e u Astro kutku"))))));
}
const MJ_EL_IMG = {
  Vatra: 'aventurin-lav.jpg',
  Zemlja: 'ahat-jarac.jpg',
  Vazduh: 'aventurin-blizanci.jpg'
};
const MJ_KAMEN = {
  Vatra: {
    uvod: 'Ako želiš da se povežeš sa energijom vatre, biraj kamenje koje simbolizuje hrabrost, samopouzdanje, pokret, optimizam i unutrašnju snagu.',
    z: [['ovan', 'Ovan', 'Karneol i Ametist', 'Akcija, odlučnost i usmeravanje snažne energije.'], ['lav', 'Lav', 'Rozenkvarc i Aventurin', 'Samopouzdanje, toplina, kreativnost i otvoreno srce.'], ['strelac', 'Strelac', 'Lapis Lazuli i Ametist', 'Mudrost, širina pogleda, intuicija i istraživanje novih puteva.']]
  },
  Zemlja: {
    uvod: 'Ako želiš da se povežeš sa stabilnošću, sigurnošću, strpljenjem i sposobnošću da ideju pretvoriš u nešto opipljivo, biraj kamenje koje se povezuje sa uzemljenjem i materijalizacijom.',
    z: [['bik', 'Bik', 'Aventurin i Crni Ahat', 'Obilje, stabilnost, uživanje i sigurnost.'], ['devica', 'Devica', 'Jaspis i Crni Turmalin', 'Organizacija, praktičnost, fokus i zaštita.'], ['jarac', 'Jarac', 'Crni Ahat i Crni Turmalin', 'Istrajnost, disciplina, snaga i čvrst oslonac.']]
  },
  Vazduh: {
    uvod: 'Ako želiš da podstakneš komunikaciju, jasno razmišljanje, nove ideje i otvorenost prema drugačijim perspektivama, biraj kamenje koje se povezuje sa mentalnom jasnoćom i izražavanjem.',
    z: [['blizanci', 'Blizanci', 'Amazonit i Gorski Kristal', 'Komunikacija, radoznalost i jasnoća misli.'], ['vaga', 'Vaga', 'Rozenkvarc i Amazonit', 'Harmonija, ravnoteža i nežno izražavanje.'], ['vodolija', 'Vodolija', 'Labradorit i Ametist', 'Originalnost, intuicija i nove perspektive.']]
  },
  Voda: {
    uvod: 'Ako želiš da se povežeš sa emocijama, intuicijom, dubinom i unutrašnjim svetom, biraj kamenje koje se tradicionalno povezuje sa osećajnošću i zaštitom.',
    z: [['rak', 'Rak', 'Rozenkvarc i Labradorit', 'Nežnost, emotivna sigurnost i intuicija.'], ['skorpija', 'Škorpija', 'Crni Turmalin i Labradorit', 'Zaštita, transformacija i dubina.'], ['ribe', 'Ribe', 'Ametist i Gorski Kristal', 'Intuicija, duhovnost i unutrašnji mir.']]
  }
};
const MJ_POLJA = [['Ja, ličnost i izgled', 'Predstavlja tvoju ličnost, ponašanje, izgled, prvi utisak i način na koji započinješ stvari.', 'Ovan', 'Vatra', 'ovan'], ['Novac, vrednosti i sigurnost', 'Govori o novcu, imovini, talentima, samopouzdanju i onome što ti je važno.', 'Bik', 'Zemlja', 'bik'], ['Komunikacija i učenje', 'Predstavlja govor, pisanje, razmišljanje, učenje, kraća putovanja i odnose sa bliskim okruženjem.', 'Blizanci', 'Vazduh', 'blizanci'], ['Dom, porodica i koreni', 'Govori o domu, porodici, poreklu, privatnosti i unutrašnjem osećaju sigurnosti.', 'Rak', 'Voda', 'rak'], ['Ljubav, kreativnost i radost', 'Predstavlja romantiku, decu, kreativnost, zabavu, hobije i potrebu za izražavanjem.', 'Lav', 'Vatra', 'lav'], ['Posao, zdravlje i rutina', 'Govori o svakodnevnim obavezama, radu, navikama, organizaciji i brizi o telu.', 'Devica', 'Zemlja', 'devica'], ['Partnerstva i odnosi', 'Predstavlja brak, ljubavne i poslovne odnose, saradnju i način na koji biramo partnera.', 'Vaga', 'Vazduh', 'vaga'], ['Transformacija i zajednički resursi', 'Govori o dubokim emocijama, intimnosti, promenama, nasleđu i zajedničkom novcu.', 'Škorpija', 'Voda', 'skorpija'], ['Vera, znanje i putovanja', 'Predstavlja visoko obrazovanje, filozofiju, duhovnost, daleka putovanja i širenje vidika.', 'Strelac', 'Vatra', 'strelac'], ['Karijera i životni cilj', 'Govori o karijeri, statusu, ambicijama, uspehu i mestu koje zauzimamo u društvu.', 'Jarac', 'Zemlja', 'jarac'], ['Prijatelji i budućnost', 'Predstavlja prijateljstva, grupe, društvene mreže, želje, planove i ostvarenje ciljeva.', 'Vodolija', 'Vazduh', 'vodolija'], ['Podsvest i unutrašnji svet', 'Govori o snovima, intuiciji, tajnama, povlačenju, duhovnosti i onome što nosimo duboko u sebi.', 'Ribe', 'Voda', 'ribe']];
const MJ_EBOOKS = [['Zvezdana pozornica', 'Osnove astrologije', 'Znakovi, kuće, planete i aspekti — sve što ti treba da sama pročitaš svoju natalnu kartu.', 25], ['Aspekti', 'Odnosi planeta u natalu', 'Kako planete razgovaraju u tvojoj karti: konjunkcije, kvadrati, trigoni i šta znače za tebe.', 15]];
const MJ_ZNACI = {
  Vatra: ['ovan', 'lav', 'strelac'],
  Zemlja: ['bik', 'devica', 'jarac'],
  Vazduh: ['blizanci', 'vaga', 'vodolija'],
  Voda: ['rak', 'skorpija', 'ribe']
};
function Astro({
  go,
  add
}) {
  const Cta = window.MJCta;
  const {
    ElementBlock,
    ElementCard,
    ProductCard
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  const BK = window.mjBackGo && window.mjBack;
  const AE = window.mjAstroEl;
  const [el, setElRaw] = React.useState(BK ? BK.el : AE || null);
  const [ex, setEx] = React.useState(!!BK);
  React.useEffect(() => {
    const h = e => {
      window.mjAstroEl = null;
      setElRaw(e.detail);
      setEx(false);
      const f = () => {
        const n = curRef.current;
        if (n) window.scrollTo({
          top: n.getBoundingClientRect().top + window.scrollY - 110
        });
      };
      [120, 500, 1100].forEach(t => setTimeout(f, t));
    };
    window.addEventListener('mjastro', h);
    return () => window.removeEventListener('mjastro', h);
  }, []);
  React.useEffect(() => {
    if (AE && !BK) {
      window.mjAstroEl = null;
      const f = () => {
        const n = curRef.current;
        if (n) window.scrollTo({
          top: n.getBoundingClientRect().top + window.scrollY - 110
        });
      };
      [150, 600, 1200].forEach(t => setTimeout(f, t));
    }
  }, []);
  React.useEffect(() => {
    if (BK) {
      window.mjBackGo = false;
      const y = BK.y;
      window.mjBack = null;
      const f = () => {
        const n = exRef.current;
        window.scrollTo({
          top: n ? n.getBoundingClientRect().top + window.scrollY - 110 : y
        });
      };
      [150, 600, 1200].forEach(t => setTimeout(f, t));
    }
  }, []);
  const [more, setMore] = React.useState(false);
  const setEl = v => {
    setElRaw(v);
    setEx(false);
  };
  const exRef = React.useRef(null);
  const moreRef = React.useRef(null);
  const curRef = React.useRef(null);
  const openEx = () => {
    setEx(true);
    setTimeout(() => {
      const n = exRef.current;
      if (n) window.scrollTo({
        top: n.getBoundingClientRect().top + window.scrollY - 110,
        behavior: 'smooth'
      });
    }, 60);
  };
  const km = el ? MJ_KAMEN[el] : null;
  const MAIL = 'mailto:marina.rakic1806@gmail.com';
  const els = el ? MJ_PRODUCTS.filter(x => x.el === el) : [];
  const cur = el ? MJ_ELEMENTS.find(x => x.id === el) : null;
  return React.createElement("div", null, React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#58565A',
      color: '#F2E6CC',
      padding: '330px 8% 110px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 340,
      backgroundImage: 'url(' + A + 'astro-mesec-sunce.png)',
      backgroundSize: '340px 340px',
      backgroundRepeat: 'repeat-x',
      opacity: .88,
      pointerEvents: 'none',
      WebkitMaskImage: 'linear-gradient(180deg,#000 70%,transparent 100%)',
      maskImage: 'linear-gradient(180deg,#000 70%,transparent 100%)'
    }
  }), React.createElement("style", null, '@keyframes mjTw{0%,100%{opacity:.8;transform:scale(.9)}50%{opacity:1;transform:scale(1.12)}}'), React.createElement("img", {
    src: A + 'astro-sjaj-zlatni.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 17,
      top: 4,
      width: 48,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 0s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-zvezda-zlatna.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 97,
      top: 98,
      width: 40,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 0.8s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-sjaj-breskva.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 215,
      top: 143,
      width: 40,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 1.9s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-zvezda-zlatna.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 453,
      top: 199,
      width: 40,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 2.6s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-sjaj-zlatni.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 590,
      top: 12,
      width: 48,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 1.1s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-sjaj-breskva.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 701,
      top: 8,
      width: 40,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 3.2s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-zvezda-zlatna.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 895,
      top: 145,
      width: 40,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 0.4s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-sjaj-zlatni.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 1113,
      top: 92,
      width: 48,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 2.2s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-sjaj-breskva.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 1274,
      top: 16,
      width: 40,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 1.5s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-zvezda-zlatna.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 384,
      top: 117,
      width: 44,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 1.4s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-sjaj-zlatni.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 1229,
      top: 137,
      width: 52,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 0.2s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-sjaj-breskva.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 111,
      top: 195,
      width: 44,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 2.9s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-sjaj-zlatni.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 771,
      top: 90,
      width: 52,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 3.6s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-zvezda-zlatna.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 1039,
      top: 8,
      width: 44,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 2s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-sjaj-breskva.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 252,
      top: 14,
      width: 44,
      mixBlendMode: 'screen',
      pointerEvents: 'none',
      animation: 'mjTw 4.8s ease-in-out 0.6s infinite'
    }
  }), React.createElement("img", {
    src: A + 'astro-zvezdani-trag.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 78,
      top: 165,
      width: 160,
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1100,
      margin: 'auto'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr)',
      justifyItems: 'start',
      alignItems: 'start',
      marginBottom: 70
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      paddingTop: 80,
      maxWidth: 620
    }
  }, React.createElement("div", {
    style: {
      display: 'inline-block'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: '#F2E6CC',
      marginBottom: 14
    }
  }, "Astro"), React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: '#F2E6CC',
      marginTop: 0,
      fontSize: 48,
      letterSpacing: '.06em',
      marginBottom: 24
    }
  }, "Energetski", React.createElement("br", null), "astro kutak")), ['U svakome od nas žive sva četiri elementa: vatra, zemlja, vazduh i voda.', 'Svaki element ima svoje mesto i simboliku u natalnoj karti. Neki su naglašeni, neki manje izraženi.', 'Ukoliko želiš da pojačaš simboliku određenog elementa u svom životu, odaberi poludrago kamenje koje se tradicionalno povezuje sa tim elementom.'].map((t, i) => React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 12px',
      fontSize: 20,
      color: '#F2E6CC'
    }
  }, t))), React.createElement("div", {
    style: {
      position: 'relative'
    }
  })), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 18,
      marginBottom: 22
    }
  }, React.createElement("span", {
    style: {
      font: '700 22px/1 Inter',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: '#F2E6CC'
    }
  }, "Biraj po elementu"), el && React.createElement("a", {
    onClick: () => setEl(null),
    style: {
      cursor: 'pointer',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#F2E6CC'
    }
  }, "zatvori \xD7")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 18
    }
  }, MJ_ELEMENTS.map(e => React.createElement("button", {
    key: e.id,
    onClick: () => {
      const v = el === e.id ? null : e.id;
      setEl(v);
      if (v) setTimeout(() => {
        const n = curRef.current;
        if (n) {
          const m = window.innerWidth <= 860;
          window.scrollTo({
            top: n.getBoundingClientRect().top + window.scrollY + (m ? parseFloat(getComputedStyle(n).paddingTop) - 230 : -110),
            behavior: 'smooth'
          });
        }
      }, 80);
    },
    style: {
      all: 'unset',
      cursor: 'pointer',
      boxSizing: 'border-box',
      display: 'grid',
      justifyItems: 'center',
      gap: 10,
      padding: '26px 14px 22px',
      border: el === e.id ? '2px solid #9CCBB0' : '1px solid rgba(156,203,176,.75)',
      background: el === e.id ? 'rgba(156,203,176,.12)' : 'transparent',
      textAlign: 'center',
      transition: 'background .3s'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 'clamp(34px,9.5vw,56px)',
      lineHeight: 1,
      color: '#D4B06A'
    }
  }, e.id), React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#F2E6CC'
    }
  }, e.signs), React.createElement("span", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      height: 30,
      marginTop: 4
    }
  }, (MJ_ZNACI[e.id] || []).map(z => React.createElement("img", {
    key: z,
    src: A + 'znak-ravno-' + z + '.png',
    alt: z,
    style: {
      height: 28,
      width: 'auto'
    }
  })))))), cur && React.createElement("div", {
    ref: curRef,
    className: "mj-cur",
    style: {
      position: 'relative',
      marginTop: 40,
      padding: '411px 0 411px'
    }
  }, React.createElement("div", {
    className: "mj-cur-strip",
    style: {
      position: 'absolute',
      top: 0,
      WebkitMaskImage: 'linear-gradient(180deg,#000 70%,transparent 100%)',
      maskImage: 'linear-gradient(180deg,#000 70%,transparent 100%)',
      height: 391,
      left: 'calc(50% - 720px)',
      width: 1440,
      backgroundImage: 'url(' + A + 'astro-mesec-sunce.png)',
      backgroundSize: '391px 391px',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '0 0',
      opacity: .9,
      pointerEvents: 'none'
    }
  }, [[20, 5, 55, 0], [679, 14, 55, 1.1], [1280, 106, 55, 2.2], [1413, 158, 60, 0.2], [887, 103, 60, 3.6]].map(([x, y, w, d], j) => React.createElement("img", {
    key: j,
    src: A + 'astro-sjaj-zlatni.png',
    alt: "",
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      mixBlendMode: 'screen',
      animation: 'mjTw 4.8s ease-in-out ' + d + 's infinite'
    }
  })), [[288, 14, 1.8], [106, 105, 3]].map(([x, y, d], j) => React.createElement("img", {
    key: 'm' + j,
    className: "mj-m-only",
    src: A + 'astro-sjaj-zlatni.png',
    alt: "",
    style: {
      display: 'none',
      position: 'absolute',
      left: x,
      top: y,
      width: 52,
      mixBlendMode: 'screen',
      animation: 'mjTw 4.8s ease-in-out ' + d + 's infinite'
    }
  }))), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      justifyItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      maxWidth: 620,
      width: '100%',
      padding: '44px 52px 46px',
      border: '2px solid #F6C6DE',
      textAlign: 'center',
      background: 'rgba(88,86,90,.9)',
      boxShadow: '0 22px 50px rgba(0,0,0,.22)'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: '#F2E6CC',
      marginBottom: 6
    }
  }, cur.signs), React.createElement("h3", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 88,
      lineHeight: 1,
      color: '#D4B06A'
    }
  }, cur.id), React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 20,
      lineHeight: 1.6,
      color: '#F2E6CC'
    }
  }, cur.text), React.createElement("em", {
    style: {
      display: 'block',
      margin: '14px 0',
      fontSize: 20,
      color: '#F2E6CC'
    }
  }, cur.quote), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 700,
      color: '#F2E6CC'
    }
  }, cur.line), React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, React.createElement("a", {
    onClick: openEx,
    style: {
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1.1,
      paddingRight: 6,
      borderBottom: '1px solid #D4B06A',
      backgroundImage: 'linear-gradient(100deg,#D4B06A 0%,#D4B06A 40%,#F3E2B8 48%,#FFFFFF 50%,#F3E2B8 52%,#D4B06A 60%,#D4B06A 100%)',
      backgroundSize: '300% 100%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'mjShine 7s ease-in-out infinite'
    }
  }, "Istra\u017Ei")))), React.createElement("div", {
    className: "mj-cur-strip",
    style: {
      position: 'absolute',
      bottom: 0,
      WebkitMaskImage: 'linear-gradient(0deg,#000 70%,transparent 100%)',
      maskImage: 'linear-gradient(0deg,#000 70%,transparent 100%)',
      height: 391,
      left: 'calc(50% - 720px)',
      width: 1440,
      backgroundImage: 'url(' + A + 'astro-mesec-sunce.png)',
      backgroundSize: '391px 391px',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '0 0',
      opacity: .9,
      pointerEvents: 'none'
    }
  }, [[20, 5, 55, 0], [679, 14, 55, 1.1], [1280, 106, 55, 2.2], [1413, 158, 60, 0.2], [887, 103, 60, 3.6]].map(([x, y, w, d], j) => React.createElement("img", {
    key: j,
    src: A + 'astro-sjaj-zlatni.png',
    alt: "",
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      mixBlendMode: 'screen',
      animation: 'mjTw 4.8s ease-in-out ' + d + 's infinite'
    }
  })), [[288, 14, 1.8], [106, 105, 3]].map(([x, y, d], j) => React.createElement("img", {
    key: 'm' + j,
    className: "mj-m-only",
    src: A + 'astro-sjaj-zlatni.png',
    alt: "",
    style: {
      display: 'none',
      position: 'absolute',
      left: x,
      top: y,
      width: 52,
      mixBlendMode: 'screen',
      animation: 'mjTw 4.8s ease-in-out ' + d + 's infinite'
    }
  })))), React.createElement("style", null, '@keyframes mjShine{0%{background-position:100% 0}60%,100%{background-position:0% 0}}'), cur && ex && React.createElement("div", {
    ref: exRef,
    style: {
      marginTop: 70,
      color: '#F2E6CC'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Kamenje za element"), React.createElement("h2", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 72,
      lineHeight: 1,
      color: '#D4B06A'
    }
  }, cur.id), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.6
    }
  }, km.uvod)), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 18,
      marginTop: 34
    }
  }, km.z.map(z => React.createElement("div", {
    key: z[0],
    onClick: () => {
      const sl = n => {
        const x = n.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
        return {
          aventurin: 'zeleni-aventurin',
          jaspis: 'dalmatinski-jaspis'
        }[x] || x;
      };
      const ids = z[2].split(' i ').map(sl);
      window.mjBack = {
        el,
        y: window.scrollY
      };
      go('kristali');
      const f = () => {
        const el = ids.map(i => document.getElementById(i)).find(Boolean);
        if (el) window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 110
        });
      };
      [450, 1000, 1800].forEach(t => setTimeout(f, t));
    },
    title: 'Kristali: ' + z[2],
    style: {
      cursor: 'pointer',
      border: '1px solid rgba(156,203,176,.75)',
      padding: '26px 24px',
      display: 'grid',
      gap: 10,
      alignContent: 'start'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement("img", {
    src: A + 'znak-ravno-' + z[0] + '.png',
    alt: "",
    style: {
      height: 32,
      width: 'auto'
    }
  }), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.1,
      paddingRight: 6,
      backgroundImage: 'linear-gradient(100deg,#D4B06A 0%,#D4B06A 40%,#F3E2B8 48%,#FFFFFF 50%,#F3E2B8 52%,#D4B06A 60%,#D4B06A 100%)',
      backgroundSize: '300% 100%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'mjShine 7s ease-in-out infinite'
    }
  }, z[1])), React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 20
    }
  }, z[2]), React.createElement("div", {
    style: {
      fontSize: 20,
      lineHeight: 1.55
    }
  }, z[3])))), React.createElement("p", {
    style: {
      margin: '30px 0 0',
      fontSize: 20,
      fontStyle: 'italic'
    }
  }, "Nosi kamenje kao svoj mali, li\u010Dni podsetnik na energiju koju \u017Eeli\u0161 da neguje\u0161 i razvija\u0161 u sebi."), React.createElement("div", {
    style: {
      marginTop: 70,
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: 10
    }
  }, "Za one koji vole da znaju malo vi\u0161e"), React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, React.createElement("a", {
    onClick: () => {
      const o = !more;
      setMore(o);
      if (o) setTimeout(() => {
        const n = moreRef.current;
        if (n) {
          const m = window.innerWidth <= 860;
          window.scrollTo({
            top: n.getBoundingClientRect().top + window.scrollY + (m ? parseFloat(getComputedStyle(n).paddingTop) - 230 : -110),
            behavior: 'smooth'
          });
        }
      }, 80);
    },
    style: {
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1.1,
      paddingRight: 6,
      borderBottom: '1px solid #D4B06A',
      backgroundImage: 'linear-gradient(100deg,#D4B06A 0%,#D4B06A 40%,#F3E2B8 48%,#FFFFFF 50%,#F3E2B8 52%,#D4B06A 60%,#D4B06A 100%)',
      backgroundSize: '300% 100%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'mjShine 7s ease-in-out infinite'
    }
  }, more ? 'Zatvori' : 'Istraži')), React.createElement("div", {
    style: {
      position: 'relative',
      marginLeft: 'calc(50% - 720px)',
      width: 1440,
      height: 340,
      backgroundImage: 'url(' + A + 'astro-mesec-sunce.png)',
      backgroundSize: '340px 340px',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '0 0',
      opacity: .88,
      pointerEvents: 'none',
      WebkitMaskImage: 'linear-gradient(180deg,transparent 0%,#000 8%,#000 92%,transparent 100%)',
      maskImage: 'linear-gradient(180deg,transparent 0%,#000 8%,#000 92%,transparent 100%)'
    }
  }), more && React.createElement("div", {
    ref: moreRef,
    style: {
      marginTop: 50
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: '#F2E6CC',
      marginBottom: 14
    }
  }, "Natal"), React.createElement("h2", {
    style: {
      margin: '0 0 16px',
      font: '700 34px/1.2 Inter',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: '#F2E6CC',
      maxWidth: 820
    }
  }, "U natalnoj karti postoji 12 polja svako polje govori o jednom va\u017Enom delu \u017Eivota"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.6,
      maxWidth: 640
    }
  }, "Natalna karta pokazuje gde se odre\u0111ene \u017Eivotne teme odvijaju, koji znak njima upravlja i kako mo\u017Eemo bolje da razumemo sebe. Svako polje ima svoj prirodni znak i element."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 0,
      marginTop: 36,
      borderTop: '1px solid rgba(246,198,222,.55)',
      borderLeft: '1px solid rgba(246,198,222,.55)'
    }
  }, MJ_POLJA.map((x, i) => React.createElement("div", {
    key: i,
    onClick: () => {
      window.mjBackKuce = {
        y: window.scrollY
      };
      go('post-x', 'kuce');
      const f = () => {
        const e = document.getElementById('kuca-' + (i + 1));
        if (e) window.scrollTo({
          top: e.getBoundingClientRect().top + window.scrollY - 100
        });
      };
      [400, 900, 1600].forEach(t => setTimeout(f, t));
    },
    title: "Pro\u010Ditaj vi\u0161e o ovoj ku\u0107i",
    style: {
      cursor: 'pointer',
      padding: '22px 22px 24px',
      borderRight: '1px solid rgba(246,198,222,.55)',
      borderBottom: '1px solid rgba(246,198,222,.55)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      background: x[3] === el ? 'rgba(246,198,222,.08)' : 'transparent'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: .8,
      color: '#D4B06A'
    }
  }, i + 1, "."), React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase'
    }
  }, "polje")), React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 20
    }
  }, x[0]), React.createElement("div", {
    style: {
      fontSize: 20,
      lineHeight: 1.55
    }
  }, x[1]), React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, React.createElement("img", {
    src: A + 'znak-ravno-' + x[4] + '.png',
    alt: "",
    style: {
      height: 22,
      width: 'auto'
    }
  }), x[2], " \xB7 ", x[3])))), React.createElement("p", {
    style: {
      margin: '30px 0 0',
      fontSize: 20,
      lineHeight: 1.6,
      maxWidth: 760
    }
  }, React.createElement("strong", null, "Va\u017Eno je da zna\u0161:"), " prirodni znak polja nije uvek znak koji se nalazi na vrhu tog polja u tvojoj natalnoj karti. Zato svako od nas ima druga\u010Diju astrolo\u0161ku pri\u010Du."), React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)',
      gap: 50,
      alignItems: 'end'
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.6
    }
  }, "\u017Deli\u0161 da sazna\u0161 kojim znakom je odre\u0111eno polje u tvojoj natalnoj karti koje te najvi\u0161e interesuje i koji kamen mo\u017Ee\u0161 da nosi\u0161 kao simbol podr\u0161ke toj \u017Eivotnoj oblasti?"), React.createElement("a", {
    href: MAIL + '?subject=Natalna%20karta%20%E2%80%93%20polje',
    style: {
      justifySelf: 'start',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 1,
      color: '#D4B06A',
      textDecoration: 'underline',
      textDecorationThickness: 1,
      textUnderlineOffset: 6
    }
  }, "Javi mi se i izra\u010Duna\u0107u ti")))), React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 70,
      padding: '60px 0 30px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'rgba(240,222,180,.5)'
    }
  }), React.createElement("span", {
    style: {
      color: '#D4B06A',
      fontSize: 18
    }
  }, "\u2726"), React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'rgba(240,222,180,.5)'
    }
  })), React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      marginBottom: 84
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Psihoskop \xB7 e-knjige"), React.createElement("h2", {
    style: {
      margin: 0,
      font: '700 40px/1.15 Inter',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: '#F2E6CC'
    }
  }, "Nau\u010Di da \u010Dita\u0161 svoju kartu"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1,
      color: '#D4B06A',
      marginTop: 6
    }
  }, "sama, kad god po\u017Eeli\u0161")), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 44
    }
  }, MJ_EBOOKS.map((b, i) => {
    const c = i === 0 ? {
      line: '#9CCBB0',
      glow: 'rgba(120,190,155,.28)',
      st: 'astro-natal.png',
      rot: -10
    } : {
      line: '#F6C6DE',
      glow: 'rgba(246,190,220,.28)',
      st: 'astro-planeta.png',
      rot: 8
    };
    return React.createElement("div", {
      key: b[0],
      style: {
        position: 'relative',
        padding: '34px 30px 30px',
        border: '2px solid ' + c.line,
        background: 'radial-gradient(ellipse 90% 80% at 30% 20%, ' + c.glow + ' 0%, rgba(255,255,255,.06) 60%, rgba(255,255,255,.03) 100%)',
        backdropFilter: 'blur(14px) saturate(1.25)',
        WebkitBackdropFilter: 'blur(14px) saturate(1.25)',
        boxShadow: '0 22px 50px rgba(0,0,0,.28), 0 0 0 6px rgba(255,255,255,.04)'
      }
    }, React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '170px minmax(0,1fr)',
        gap: 28,
        alignItems: 'stretch',
        height: '100%'
      }
    }, React.createElement("div", {
      style: {
        alignSelf: 'center',
        width: 170,
        boxSizing: 'border-box',
        aspectRatio: '210/297',
        background: '#58565A',
        border: '1px solid ' + c.line,
        outline: '1px solid rgba(255,255,255,.18)',
        outlineOffset: 5,
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
        gap: 8,
        padding: 14,
        boxShadow: '0 18px 40px rgba(0,0,0,.35)',
        transform: 'rotate(-2deg)'
      }
    }, React.createElement("img", {
      src: A + 'astro-natal-zlatni.png',
      alt: "",
      style: {
        width: '82%'
      }
    }), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 1,
        color: '#D4B06A'
      }
    }, "Mnjauprrrrr"), React.createElement("span", {
      style: {
        fontSize: 8,
        letterSpacing: '.3em',
        fontWeight: 700,
        color: '#F2E6CC'
      }
    }, "PSIHOSKOP"), React.createElement("span", {
      style: {
        fontSize: 9.5,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: '#D4B06A',
        textAlign: 'center'
      }
    }, b[0])), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 12
      }
    }, React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: '#3A3438',
        background: c.line,
        padding: '5px 12px'
      }
    }, b[1]), React.createElement("div", {
      style: {
        fontFamily: 'var(--font-script)',
        fontFamily: 'Inter,sans-serif',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.04em',
        fontSize: 28,
        lineHeight: 1.15,
        textWrap: 'balance',
        color: '#D4B06A'
      }
    }, b[0]), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 20,
        lineHeight: 1.55,
        color: '#F2E6CC'
      }
    }, b[2]), React.createElement("div", {
      style: {
        font: '700 30px/1 Inter',
        color: '#F2E6CC',
        marginTop: 'auto',
        whiteSpace: 'nowrap'
      }
    }, b[3], " \u20AC"), React.createElement("a", {
      href: MAIL + '?subject=' + encodeURIComponent('E-knjiga Psihoskop – ' + b[0]),
      style: {
        marginTop: 6,
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: 34,
        lineHeight: 1,
        color: c.line,
        textDecoration: 'underline',
        textDecorationThickness: 1,
        textUnderlineOffset: 6
      }
    }, "\u017Delim e-knjigu"))));
  })), React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 60,
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0,1fr) auto',
      gap: 36,
      alignItems: 'center',
      padding: '30px 40px',
      border: '1px solid rgba(240,222,180,.7)',
      background: 'linear-gradient(90deg, rgba(156,203,176,.16), rgba(255,255,255,.05) 50%, rgba(246,198,222,.16))',
      backdropFilter: 'blur(14px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(14px) saturate(1.25)'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: .9,
      color: '#D4B06A'
    }
  }, "Paket"), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 4
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: '#F2E6CC'
    }
  }, "Zvezdana pozornica + Aspekti"), React.createElement("div", {
    style: {
      fontSize: 20,
      color: '#F2E6CC'
    }
  }, "Obe e-knjige zajedno \u2014 ", React.createElement("span", {
    style: {
      textDecoration: 'line-through',
      opacity: .8,
      whiteSpace: 'nowrap'
    }
  }, "40 \u20AC"), " ", React.createElement("strong", {
    style: {
      color: '#F2E6CC',
      whiteSpace: 'nowrap'
    }
  }, "30 \u20AC"))), React.createElement("a", {
    href: MAIL + '?subject=' + encodeURIComponent('Psihoskop paket – obe e-knjige'),
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1,
      color: '#D4B06A',
      textDecoration: 'underline',
      textDecorationThickness: 1,
      textUnderlineOffset: 6
    }
  }, "\u017Delim obe")))))));
}
const MJ_ARTICLE_CSS = '.mj-art h1{margin:14px 0 24px;font:700 56px/1.12 Inter,sans-serif;text-transform:uppercase;letter-spacing:.02em;color:#000}.mj-art h2{margin:44px 0 14px;font:700 28px/1.15 Inter,sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#000}.mj-art h2:first-child{margin-top:0}.mj-art h3{margin:0 0 14px;font:700 28px/1.15 Inter,sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#000}.mj-art h4{margin:18px 0 8px;font:600 12px Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase}.mj-art p{margin:0 0 10px;font:500 14px/1.7 Inter,sans-serif;color:#000}.mj-art .bu{font-size:16px;margin-bottom:28px}.mj-art .kick{font:500 13px Inter;letter-spacing:.2em;text-transform:uppercase;color:var(--ink-70)}.mj-art b{font-weight:700}.mj-art .zav{font-style:italic}.mj-art .stone{padding-top:64px}.mj-art .cta{display:inline-block;margin-top:46px;font:700 34px/1 Corinthia,cursive;color:#000;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:7px}.mj-art .chips{display:flex;flex-wrap:wrap;gap:8px 18px}.mj-art .chips a{font:600 12px Inter;letter-spacing:.14em;text-transform:uppercase;color:#000;text-decoration:none;border-bottom:1px solid rgba(0,0,0,.35);padding-bottom:2px}';
const MJ_POSTS = [['post', null, 'Astrologija · O nama', 'Upoznaj me kroz moj Mesec'], ['post-x', 'kamen-za-tvoj-natal', 'Kristali · Astro', 'Kamen za tvoj natal'], ['post-x', 'kuce', 'Astrologija', 'Kuće u natalu'], ['post-x', 'novembar', 'Astro pismo', 'Novembar Sezona Škorpije'], ['post-x', 'mesec', 'Astrologija', 'Mesec u natalnoj karti'], ['post-eknjiga', null, 'Odlomak iz e-knjige', 'We are made of star stuff'], ['post-x', 'galerija', 'E-knjige', 'Zaviri među stranice'], ['post-x', 'dnevnik', 'Self-love', 'Da li vodiš dnevnik?']];
window.MJ_POSTS = MJ_POSTS;
function Blog({
  go
}) {
  const Cta = window.MJCta;
  const {
    Kicker
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  return React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--sedef-2)',
      padding: '190px 0 120px'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .44,
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse 50% 70% at 50% 45%, rgba(239,229,214,.85) 0%, rgba(239,229,214,.45) 65%, rgba(239,229,214,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 840,
      margin: '0 auto'
    }
  }, React.createElement(Kicker, null, "Blog"), React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: '#000',
      margin: '8px 0 12px'
    }
  }, "Zvezdana pozornica"), React.createElement("p", {
    style: {
      margin: '0 0 28px',
      fontSize: 20,
      fontWeight: 500
    }
  }, "\u0160aputanje zvezda i kristala"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      columnGap: 40,
      alignItems: 'start'
    }
  }, React.createElement("div", {
    onClick: () => go('post'),
    style: {
      padding: 13,
      border: '1px solid rgba(197,160,89,.7)',
      cursor: 'pointer'
    }
  }, React.createElement("img", {
    src: MJ_A + 'malta-1-kartica.png',
    alt: "Marina u \u0161arenoj haljini na ulici Valete",
    style: {
      width: '100%',
      aspectRatio: '1206/1749',
      objectFit: 'cover',
      display: 'block',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)'
    }
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '32px 36px',
      background: 'rgba(255,255,255,.16)',
      backdropFilter: 'blur(18px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(18px) saturate(1.25)',
      border: '1px solid rgba(255,255,255,.45)',
      boxShadow: '0 16px 36px rgba(0,0,0,.08)'
    }
  }, React.createElement(Kicker, {
    tone: "ink"
  }, "Astrologija \xB7 O nama"), React.createElement("h2", {
    style: {
      ...MJ_H2,
      color: '#000',
      margin: '14px 0 18px'
    }
  }, "Upoznaj me kroz moj Mesec"), React.createElement("p", {
    style: {
      ...MJ_P,
      fontSize: 20,
      color: '#000',
      fontWeight: 500,
      margin: '0 0 56px'
    }
  }, "S obzirom da mi je Sunce u znaku Blizanaca, mo\u017Ee se slobodno re\u0107i \u201EO nama\u201C. Pri\u010Da\u0107u ti malo o sebi na moj na\u010Din."), React.createElement(Cta, {
    onClick: () => go('post')
  }, "Pro\u010Ditaj"))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      columnGap: 40,
      alignItems: 'start',
      marginTop: 70
    },
    className: "mj-blog-row2"
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '32px 36px',
      background: 'rgba(255,255,255,.16)',
      backdropFilter: 'blur(18px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(18px) saturate(1.25)',
      border: '1px solid rgba(255,255,255,.45)',
      boxShadow: '0 16px 36px rgba(0,0,0,.08)'
    }
  }, React.createElement(Kicker, {
    tone: "ink"
  }, "Self-love"), React.createElement("h2", {
    style: {
      ...MJ_H2,
      color: '#000',
      margin: '14px 0 18px'
    }
  }, "Da li vodi\u0161 dnevnik?"), React.createElement("p", {
    style: {
      ...MJ_P,
      fontSize: 20,
      color: '#000',
      fontWeight: 500,
      margin: '0 0 56px'
    }
  }, "31 dan male, svakodnevne prakse ljubavi prema sebi. Jedan dan, jedna stranica, mali koraci do velike promene."), React.createElement(Cta, {
    onClick: () => go('post-x', 'dnevnik')
  }, "Pro\u010Ditaj")), React.createElement("div", {
    onClick: () => go('post-x', 'dnevnik'),
    style: {
      padding: 13,
      border: '1px solid rgba(197,160,89,.7)',
      cursor: 'pointer'
    }
  }, React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      background: '#EFE5D6',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)'
    }
  }, React.createElement("img", {
    src: MJ_A + 'maca-providna.png',
    alt: "Ma\u010Dkica",
    style: {
      width: '72%'
    }
  })))), window.MJNovList && React.createElement(window.MJNovList, {
    go: go
  }), React.createElement("div", {
    style: {
      marginTop: 90
    }
  }, React.createElement(Kicker, {
    tone: "ink"
  }, "Jo\u0161 sa bloga"), React.createElement("div", {
    style: {
      marginTop: 18,
      borderTop: '1px solid rgba(197,160,89,.7)'
    }
  }, MJ_POSTS.filter(x => x[0] !== 'post' && x[1] !== 'dnevnik').map(([r, a, k, t]) => React.createElement("a", {
    key: t,
    onClick: () => go(r, a),
    style: {
      display: 'grid',
      gridTemplateColumns: '200px minmax(0,1fr) auto',
      alignItems: 'baseline',
      gap: 24,
      padding: '22px 4px',
      borderBottom: '1px solid rgba(197,160,89,.7)',
      cursor: 'pointer',
      color: '#000',
      textDecoration: 'none'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500
    }
  }, k), React.createElement("span", {
    style: {
      font: '700 20px/1.3 Inter,sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, t), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1
    }
  }, "Pro\u010Ditaj")))))));
}
function PostX({
  go,
  id
}) {
  const Cta = window.MJCta;
  const {
    Kicker,
    MailBar
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  const P = {
    ...MJ_P,
    fontSize: 20,
    color: '#000',
    margin: '0 0 16px',
    textWrap: 'pretty',
    textAlign: 'justify',
    hyphens: 'auto'
  };
  const H2 = {
    ...MJ_H2,
    fontSize: 22,
    color: '#000',
    margin: '32px 0 14px'
  };
  const li = a => React.createElement("ul", {
    style: {
      margin: '0 0 16px',
      paddingLeft: 20,
      display: 'grid',
      gap: 6,
      fontSize: 20,
      color: '#000'
    }
  }, a.map(x => React.createElement("li", {
    key: x
  }, x)));
  const offer = React.createElement("div", {
    style: {
      marginTop: 44,
      padding: '38px 42px',
      background: 'rgba(255,255,255,.3)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
      border: '1px solid rgba(197,160,89,.7)',
      color: '#111',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(220px,auto)',
      gap: 30,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Psihoskop \xB7 e-knjige"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1,
      color: '#111'
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-block',
      paddingRight: 6,
      backgroundImage: 'linear-gradient(100deg,#111 0%,#111 40%,#C5A059 47%,#F3E2B8 50%,#C5A059 53%,#111 60%,#111 100%)',
      backgroundSize: '300% 100%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'mjShine 7s ease-in-out infinite'
    }
  }, React.createElement("style", null, '@keyframes mjShine{0%{background-position:100% 0}60%,100%{background-position:0% 0}}'), "Zvezdana pozornica")), React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 20,
      lineHeight: 1.6
    }
  }, "Sve planete, znakovi, ku\u0107e i aspekti.", React.createElement("br", null), "25\xA0\u20AC \xB7 Aspekti 15\xA0\u20AC \xB7 paket\xA030\xA0\u20AC")), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      justifyItems: 'start'
    }
  }, React.createElement("a", {
    href: "mailto:marina.rakic1806@gmail.com?subject=E-knjige%20Psihoskop",
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1.1,
      whiteSpace: 'nowrap',
      color: '#111',
      textDecoration: 'underline',
      textDecorationThickness: 1,
      textUnderlineOffset: 6
    }
  }, "\u017Delim e-knjigu"), React.createElement("a", {
    onClick: () => go('astro'),
    style: {
      cursor: 'pointer',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#111',
      textDecoration: 'underline',
      textUnderlineOffset: 4
    }
  }, "Astro kutak")));
  const C = {
    kuce: {
      k: 'Astrologija · 12 kuća',
      t: 'Kuće u natalu',
      b: React.createElement(React.Fragment, null, React.createElement("p", {
        style: P
      }, "Natalna karta ima dvanaest ku\u0107a \u2013 dvanaest soba tvog \u017Eivota. Svaka pri\u010Da svoju pri\u010Du: o tome ko si, \u0161ta voli\u0161, koga bira\u0161, \u010Dega se pla\u0161i\u0161 i gde se vra\u0107a\u0161 kada sve utihne. \u010Citaj redom, ili se vrati u Astro kutak i izaberi ku\u0107u koja te zanima."), (window.MJ_KUCE || []).map(k => React.createElement("div", {
        key: k.n,
        id: 'kuca-' + k.n,
        style: {
          paddingTop: 24,
          marginTop: 24,
          borderTop: '1px solid rgba(197,160,89,.7)'
        }
      }, React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 20
        }
      }, React.createElement("div", {
        style: {
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 56,
          lineHeight: 1,
          color: '#8A6A28'
        }
      }, k.n, "."), window.mjBackKuce && React.createElement("a", {
        onClick: () => {
          const y = window.mjBackKuce.y;
          window.mjBackKuce = null;
          go('astro');
          [150, 600, 1200].forEach(t => setTimeout(() => window.scrollTo({
            top: y
          }), t));
        },
        style: {
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          color: '#1D1A17',
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 34,
          lineHeight: 1,
          textDecoration: 'none'
        }
      }, React.createElement("span", {
        style: {
          fontFamily: 'Inter,sans-serif',
          fontWeight: 300,
          fontSize: 20
        }
      }, "\u2190"), "nazad na Astro")), React.createElement("h2", {
        style: {
          ...H2,
          margin: '6px 0 18px'
        }
      }, k.t), k.b.map((x, i) => x.startsWith('h:') ? React.createElement("h3", {
        key: i,
        style: {
          margin: '26px 0 10px',
          font: '700 15px/1.3 Inter,sans-serif',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: '#000'
        }
      }, x.slice(2)) : x.startsWith('l:') ? React.createElement(React.Fragment, {
        key: i
      }, li(x.slice(2).split('|'))) : x.startsWith('q:') ? (() => {
        const q = x.slice(2).replace(/[„”]/g, '').split('\n');
        return React.createElement("div", {
          key: i,
          style: {
            margin: '26px 0 10px',
            display: 'grid',
            gap: 10,
            color: '#000'
          }
        }, React.createElement("p", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-script)',
            fontWeight: 700,
            fontSize: 34,
            lineHeight: 1.2,
            textWrap: 'balance'
          }
        }, q[0]), q.length > 1 && React.createElement("p", {
          style: {
            margin: 0,
            fontSize: 20,
            lineHeight: 1.6,
            fontStyle: 'italic',
            whiteSpace: 'pre-line',
            textWrap: 'pretty'
          }
        }, q.slice(1).join('\n')));
      })() : React.createElement("p", {
        key: i,
        style: P
      }, x)))), offer)
    },
    novembar: {
      k: 'Astro pismo · Novembar 2026',
      t: 'Sezona Škorpije',
      b: React.createElement(React.Fragment, null, React.createElement("p", {
        style: P
      }, "Novembar po\u010Dinje u znaku \u0160korpije \u2013 dubine, istine i svega onog \u0161to ne izgovaramo naglas. Ovo nije mesec za povr\u0161no. Ovo je mesec da pogleda\u0161 unutra."), React.createElement("p", {
        style: {
          margin: '10px 0 24px',
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 34,
          lineHeight: 1.2
        }
      }, "Prvo dubina, pa \u0161irina."), React.createElement("h2", {
        style: H2
      }, "Merkur retrogradan do 13. novembra"), React.createElement("p", {
        style: P
      }, "Merkur je retrogradan od 24. oktobra i ceo period provodi u \u0160korpiji. Vra\u0107aju se stari razgovori, poruke, ljudi i misli koje si gurnula pod tepih. Ne potpisuj na brzinu, proveri dvaput, i daj sebi pravo da se predomisli\u0161. Istog dana, 13. novembra, i Venera kre\u0107e napred \u2013 pa se i pitanja ljubavi i novca kona\u010Dno pomeraju."), React.createElement("h2", {
        style: H2
      }, "Mlad Mesec u \u0160korpiji \u2013 9. novembar"), React.createElement("p", {
        style: P
      }, "Najbolji dan u mesecu za tihu, iskrenu nameru. Ne onu koju \u0107e\u0161 objaviti, nego onu koju zapi\u0161e\u0161 samo za sebe. \u0160ta \u017Eeli\u0161 da pusti\u0161, a \u0161ta da preobrazi\u0161?"), React.createElement("h2", {
        style: H2
      }, "Pun Mesec u Blizancima \u2013 24. novembar"), React.createElement("p", {
        style: P
      }, "Supermesec \u2013 drugi najbli\u017Ei ove godine. Posle \u0160korpijine dubine dolazi lako\u0107a: razgovori, ideje, smeh. Sve \u0161to si u ti\u0161ini shvatila sada \u017Eeli da bude izgovoreno."), React.createElement("h2", {
        style: H2
      }, "Strelac od 22. novembra"), React.createElement("p", {
        style: P
      }, "Sunce ulazi u Strelca i tempo se ubrzava. Horizont se \u0161iri \u2013 putovanja, planovi, vera da mo\u017Ee bolje."), React.createElement("h2", {
        style: H2
      }, "Kamenje meseca"), React.createElement("p", {
        style: P
      }, React.createElement("b", null, "Crni Ahat"), " \u2013 za\u0161tita i uzemljenje dok kopa\u0161 po dubinama \u0160korpije. ", React.createElement("b", null, "Lapis Lazuli"), " \u2013 jasna misao i iskrena re\u010D, savr\u0161en saveznik dok se Merkur vra\u0107a napred i Strelac otvara horizont."), React.createElement("div", {
        style: {
          display: 'flex',
          gap: 22,
          flexWrap: 'wrap',
          margin: '56px 0 6px'
        }
      }, React.createElement(Cta, {
        onClick: () => go('nakit', 'kamen:Crni ahat')
      }, "Crni Ahat"), React.createElement(Cta, {
        onClick: () => go('nakit', 'kamen:Lapis lazuli')
      }, "Lapis Lazuli")), React.createElement("h2", {
        style: H2
      }, "Mala praksa za novembar"), React.createElement("p", {
        style: P
      }, "Na mlad Mesec zapi\u0161i jednu stvar koju vi\u0161e ne \u017Eeli\u0161 da nosi\u0161. Na pun Mesec, 24. novembra, pro\u010Ditaj je ponovo i vidi koliko si se pomerila."), React.createElement("p", {
        style: {
          margin: '26px 0 0',
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 34,
          lineHeight: 1.2
        }
      }, "Mnjau, Marina"), offer)
    },
    mesec: {
      k: 'Psihoskop · odlomak iz e-knjige',
      t: 'Mesec u natalnoj karti',
      b: React.createElement(React.Fragment, null, React.createElement("p", {
        style: P
      }, "Mesec je tvoje unutra\u0161nje dete \u2013 onaj deo tebe koji ose\u0107a, pamti, pla\u010De i raduje se bez razloga. On je tvoj emotivni refleks, tvoje nesvesno, tvoje \u201Eprirodno ja\u201C koje reaguje pre nego \u0161to pomisli\u0161."), React.createElement("p", {
        style: {
          margin: '10px 0 24px',
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 34,
          lineHeight: 1.2
        }
      }, "Ako je Sunce tvoja volja, Mesec je tvoja du\u0161a."), React.createElement("h2", {
        style: H2
      }, "Simbolika Meseca"), li(['majka – prva sigurnost, hraniteljka, figura koja te grli', 'emocije – tvoja osećajnost, promenljivost raspoloženja', 'intuicija i nesvesno – ono što osećaš i pre nego što znaš', 'prošlost i pamćenje – sve što nosiš u telu i u sećanju', 'dom i porodica – ono gde se povlačiš da se osećaš sigurno']), React.createElement("h2", {
        style: H2
      }, "Svetla i senke Meseca"), React.createElement("p", {
        style: P
      }, React.createElement("b", null, "Svetlo:"), " intuicija, briga, toplina, saose\u0107anje.", React.createElement("br", null), React.createElement("b", null, "Senka:"), " hirovitost, preterana osetljivost, pasivnost."), React.createElement("p", {
        style: {
          margin: '26px 0 0',
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 34,
          lineHeight: 1.2
        }
      }, "\u201EMoje pravo je da ose\u0107am.\u201C"), React.createElement("p", {
        style: {
          ...P,
          marginTop: 20
        }
      }, "Gde je tvoj Mesec \u2013 u Raku, Biku, Jarcu ili \u0160korpiji? Kako se pona\u0161a sa Venerom, a kako sa Marsom? Odgovori su u e-knjizi."), offer)
    },
    galerija: {
      k: 'E-knjige',
      t: 'Zaviri među stranice',
      b: React.createElement(React.Fragment, null, React.createElement("p", {
        style: P
      }, "Psihoskop nije samo tekst \u2013 svaka strana je mala zvezdana pozornica. Evo nekoliko ilustracija koje te \u010Dekaju unutra."), React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
          gap: 24,
          margin: '26px 0 10px'
        }
      }, [['astro-mesec-sunce.png', 'Sunce i Mesec'], ['astro-kola.png', 'Zvezdana kola'], ['astro-top-traka.png', 'Planete u orbitama'], ['astro-natal-zlatni.png', 'Natalna karta']].map(([s, c]) => React.createElement("figure", {
        key: s,
        style: {
          margin: 0,
          display: 'grid',
          gap: 10
        }
      }, React.createElement("div", {
        style: {
          padding: 10,
          border: '1px solid rgba(197,160,89,.7)'
        }
      }, React.createElement("div", {
        style: {
          aspectRatio: '210/297',
          background: '#58565A',
          display: 'grid',
          placeItems: 'center',
          boxShadow: '0 16px 36px rgba(0,0,0,.12)'
        }
      }, React.createElement("img", {
        src: A + s,
        alt: c,
        style: {
          width: '74%',
          opacity: .95
        }
      }))), React.createElement("figcaption", {
        style: {
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 30,
          lineHeight: 1
        }
      }, c)))), offer)
    },
    dnevnik: {
      k: 'Self-love',
      t: 'Da li vodiš dnevnik?',
      b: React.createElement(React.Fragment, null, React.createElement("p", {
        style: P
      }, "Iskreno \u2013 kada si poslednji put zapisala ne\u0161to samo za sebe? Ne listu za kupovinu, ne poruku, nego jednu re\u010Denicu o tome kako se zaista ose\u0107a\u0161."), React.createElement("p", {
        style: P
      }, "Dnevnik je mesto gde ne mora\u0161 da bude\u0161 pametna, lepa ni dosledna. Samo svoja. Zato sam napravila ", React.createElement("b", null, "Self-love dnevnik"), " \u2013 31 dan male, svakodnevne prakse ljubavi prema sebi."), React.createElement("p", {
        style: {
          margin: '10px 0 24px',
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 34,
          lineHeight: 1.2
        }
      }, "Jedan dan, jedna stranica, mali koraci do velike promene."), React.createElement("p", {
        style: P
      }, "Pi\u0161i mi: vodi\u0161 li dnevnik, i \u0161ta ti je pomoglo da ne odustane\u0161 posle tre\u0107eg dana?"), React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '28px 0 6px',
          textAlign: 'center'
        }
      }, React.createElement("figure", {
        style: {
          margin: 0,
          display: 'grid',
          gap: 10,
          width: 'min(300px,100%)'
        }
      }, React.createElement("div", {
        style: {
          padding: 10,
          border: '1px solid rgba(197,160,89,.7)'
        }
      }, React.createElement("div", {
        style: {
          position: 'relative',
          aspectRatio: '210/297',
          overflow: 'hidden',
          background: '#F4EDE2',
          boxShadow: '0 16px 36px rgba(0,0,0,.12)',
          color: '#1D1A17'
        }
      }, React.createElement("div", {
        className: "mj-leopard",
        style: {
          position: 'absolute',
          inset: 0,
          backgroundSize: '200px auto',
          opacity: .22
        }
      }), React.createElement("div", {
        style: {
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(244,237,226,.92) 0%, rgba(244,237,226,.5) 60%, rgba(244,237,226,0) 100%)'
        }
      }), React.createElement("div", {
        style: {
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 8,
          padding: '0 18px'
        }
      }, React.createElement("img", {
        src: A + 'maca-providna.png',
        alt: "Ma\u010Dkica sa nao\u010Darima u obliku srca",
        style: {
          width: '42%',
          height: 'auto',
          aspectRatio: '651/548',
          flex: 'none',
          objectFit: 'contain'
        }
      }), React.createElement("div", {
        style: {
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 34,
          lineHeight: 1
        }
      }, "Mnjauprrrrr"), React.createElement("div", {
        style: {
          font: '700 26px/1.1 Inter,sans-serif',
          letterSpacing: '.08em',
          textTransform: 'uppercase'
        }
      }, "Self-love"), React.createElement("div", {
        style: {
          fontSize: 10,
          letterSpacing: '.22em',
          textTransform: 'uppercase'
        }
      }, "Dnevnik \xB7 31 dan")))), React.createElement("figcaption", {
        style: {
          fontFamily: 'var(--font-script)',
          fontWeight: 700,
          fontSize: 34,
          lineHeight: 1
        }
      }, "Korica"))), React.createElement("div", {
        style: {
          marginTop: 30
        }
      }, React.createElement(Kicker, {
        tone: "ink"
      }, "Poklon"), React.createElement("h2", {
        style: {
          ...H2,
          margin: '8px 0 10px'
        }
      }, "Registruj se i dnevnik je tvoj"), React.createElement("p", {
        style: {
          ...P,
          margin: '0 0 18px'
        }
      }, "Ostavi mejl i Self-love dnevnik sti\u017Ee ti na poklon."), React.createElement("div", {
        className: "mj-mail mj-mail-ink mj-mail-gold",
        style: {
          display: 'block',
          borderRadius: 12,
          '--mail-1': 'rgba(255,255,255,.26)',
          '--mail-2': 'rgba(255,255,255,.12)',
          '--mail-btn': 'rgba(255,255,255,.34)',
          '--mail-btn-hover': 'rgba(255,255,255,.55)',
          '--hairline-strong': 'rgba(197,160,89,.7)',
          '--shadow-mailbar': '0 10px 30px rgba(0,0,0,.08)'
        }
      }, React.createElement(MailBar, {
        onSubmit: window.mjSubscribe,
        thanks: "Hvala, ma\u010Dkice! Proveri mejl.",
        label: "SIGN UP",
        catSrc: A + 'macka-sanduce.png'
      }))))
    }
  };
  const c = C[id] || C.mesec;
  return React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--sedef-2)',
      padding: '110px 0 120px'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .3,
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse 50% 70% at 50% 45%, rgba(239,229,214,.88) 0%, rgba(239,229,214,.5) 65%, rgba(239,229,214,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 780,
      margin: '0 auto'
    }
  }, React.createElement("a", {
    onClick: () => go('blog'),
    style: {
      display: 'inline-block',
      marginBottom: 18,
      font: '600 12px Inter',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "\u2190 Blog"), React.createElement(Kicker, {
    tone: "ink"
  }, c.k), React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: '#000',
      margin: '12px 0 22px'
    }
  }, c.t), c.b));
}
function PostEbook({
  go
}) {
  const Cta = window.MJCta;
  const {
    Kicker
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const P = {
    ...MJ_P,
    fontSize: 20,
    color: '#000',
    margin: '0 0 16px',
    textWrap: 'pretty',
    textAlign: 'justify',
    hyphens: 'auto'
  };
  const uloge = [['Kuća', 'GDE se radnja odvija?', 'scena, bina'], ['Planeta', 'KO je glavni lik u predstavi?', 'glumac'], ['Horoskopski znak', 'ŠTA tačno radi, sa koliko energije i na koji način?', 'uloge koje glumci igraju'], ['Vladar kuće', 'ZBOG ČEGA ILI KOGA nešto radi?', 'energija scene'], ['Aspekt', 'KAKO I ZAŠTO?', 'radnja predstave']];
  return React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--sedef-2)',
      padding: '110px 0 120px'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .3,
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse 50% 70% at 50% 45%, rgba(239,229,214,.88) 0%, rgba(239,229,214,.5) 65%, rgba(239,229,214,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 780,
      margin: '0 auto'
    }
  }, React.createElement("a", {
    onClick: () => go('blog'),
    style: {
      display: 'inline-block',
      marginBottom: 18,
      font: '600 12px Inter',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "\u2190 Blog"), React.createElement(Kicker, {
    tone: "ink"
  }, "Psihoskop \xB7 odlomak iz e-knjige"), React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: '#000',
      margin: '12px 0 22px'
    }
  }, "Zvezdana pozornica"), React.createElement("p", {
    style: P
  }, "Astronom, planetarni nau\u010Dnik i komunikator, Karl Sagan poetski je rekao:"), React.createElement("p", {
    style: {
      margin: '6px 0 26px',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1.2
    }
  }, "\u201EWe are made of star stuff.\u201D"), React.createElement("p", {
    style: P
  }, "Dopada mi se da mislim da je \u017Eivot stvoren od istih elemenata od kojih su satkane zvezde i nebeska tela. Oduvek je ljude zanimalo \u0161ta \u0107e biti sutra."), React.createElement("p", {
    style: P
  }, "Svaki veliki vojskovo\u0111a i vladar imao je svog li\u010Dnog astrologa ili numerologa, tako da hajde da zajedno zavirimo u svet zvezda i otkrijemo njihov jezik."), React.createElement("h2", {
    style: {
      ...MJ_H2,
      fontSize: 24,
      color: '#000',
      margin: '34px 0 18px'
    }
  }, "Natalna karta kao predstava"), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      marginBottom: 30
    }
  }, uloge.map(([a, b, c]) => React.createElement("div", {
    key: a,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px minmax(0,1fr)',
      gap: 18,
      alignItems: 'baseline',
      padding: '14px 20px',
      background: 'rgba(255,255,255,.22)',
      backdropFilter: 'blur(14px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(14px) saturate(1.25)',
      border: '1px solid rgba(255,255,255,.6)'
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.3,
      color: '#000'
    }
  }, a), React.createElement("span", {
    style: {
      fontSize: 20,
      lineHeight: 1.5,
      color: '#000'
    }
  }, React.createElement("b", null, b), " ", React.createElement("i", null, "(", c, ")"))))), React.createElement("h2", {
    style: {
      ...MJ_H2,
      fontSize: 24,
      color: '#000',
      margin: '34px 0 14px'
    }
  }, "\u0160ta je natalni horoskop?"), React.createElement("p", {
    style: P
  }, "Polo\u017Eaj zvezda na nebu u trenutku tvog ro\u0111enja. Tvoj karakter, ve\u0161tine, sposobnosti, na\u010Din na koji deluje\u0161 i ono \u0161to daje\u0161 i prima\u0161 od svog okru\u017Eenja jeste tvoj li\u010Dni horoskop o kome nam zvezde pri\u010Daju."), React.createElement("p", {
    style: P
  }, "Ne postoji univerzalni lek niti predikcija koju jedna slobodna volja nije preveslala. Zvezde ti govore o tvojim potencijalima, mogu\u0107nostima i manje razvijenim osobinama. Kako \u0107e\u0161 ti to iskoristiti, predstavlja tvoj li\u010Dni izbor."), React.createElement("h2", {
    style: {
      ...MJ_H2,
      fontSize: 24,
      color: '#000',
      margin: '34px 0 14px'
    }
  }, "Ovan"), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement("p", {
    style: P
  }, "Ovan je \u010Dista sirova sila \u017Eivota koja se ne obja\u0161njava, ona se do\u017Eivljava. Kada do\u0111e, ni\u0161ta nije spremno, ali sve mora da se pokrene. To je znak bu\u0111enja, prvi uzdah posle mraka, trenutak kad krv udari u glavu i telo krene da se bori za svoje postojanje. On ne pita da li ima mesta, on se probija\u2026"), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 70,
      background: 'linear-gradient(180deg,rgba(239,229,214,0),rgba(239,229,214,.95))'
    }
  })), React.createElement("div", {
    style: {
      marginTop: 40,
      padding: '40px 44px',
      background: 'rgba(255,255,255,.3)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
      border: '1px solid rgba(197,160,89,.7)',
      color: '#111',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(220px,auto)',
      gap: 30,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Nastavak u e-knjizi"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1,
      color: '#111'
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-block',
      paddingRight: 6,
      backgroundImage: 'linear-gradient(100deg,#111 0%,#111 40%,#C5A059 47%,#F3E2B8 50%,#C5A059 53%,#111 60%,#111 100%)',
      backgroundSize: '300% 100%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'mjShine 7s ease-in-out infinite'
    }
  }, React.createElement("style", null, '@keyframes mjShine{0%{background-position:100% 0}60%,100%{background-position:0% 0}}'), "Zvezdana pozornica")), React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 20,
      lineHeight: 1.6
    }
  }, "Svih 12 znakova, ku\u0107e, planete i aspekti, da sama pro\u010Dita\u0161 svoju natalnu kartu. 68 strana \xB7 25\xA0\u20AC.", React.createElement("br", null), "Uz Aspekte paket je 30\xA0\u20AC.")), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      justifyItems: 'start'
    }
  }, React.createElement("a", {
    href: "mailto:marina.rakic1806@gmail.com?subject=E-knjiga%20Zvezdana%20pozornica",
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1.1,
      whiteSpace: 'nowrap',
      color: '#111',
      textDecoration: 'underline',
      textDecorationThickness: 1,
      textUnderlineOffset: 6
    }
  }, "\u017Delim e-knjigu"), React.createElement("a", {
    onClick: () => go('astro'),
    style: {
      cursor: 'pointer',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#111',
      textDecoration: 'underline',
      textUnderlineOffset: 4
    }
  }, "Astro kutak")))));
}
function Post({
  go
}) {
  const html = MJ_CONTENT.post.replace(/href="astro.html"/g, 'data-go="astro"');
  return React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--sedef-2)',
      padding: '110px 0 120px'
    }
  }, React.createElement("style", null, MJ_ARTICLE_CSS + '.mj-post p{text-align:justify;hyphens:auto}'), React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .3,
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse 50% 70% at 50% 45%, rgba(239,229,214,.85) 0%, rgba(239,229,214,.45) 65%, rgba(239,229,214,0) 100%)'
    }
  }), React.createElement("div", {
    className: "mj-art mj-post",
    lang: "sr",
    style: {
      position: 'relative',
      maxWidth: 840,
      margin: '0 auto'
    },
    onClick: e => {
      const g = e.target.closest('[data-go]');
      if (g) {
        e.preventDefault();
        go(g.dataset.go);
      }
    }
  }, React.createElement("a", {
    onClick: () => go('blog'),
    style: {
      display: 'inline-block',
      marginBottom: 18,
      font: '600 12px Inter',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, "\u2190 Blog"), React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 28,
      margin: '56px 0 0'
    }
  }, [['malta-3.jpg', '50% 45%', 'Marina ispred narandžastih vrata sa cvećem na Malti'], ['malta-2.jpg', '50% 45%', 'Marina na kamenoj ulici u Valeti'], ['malta-4.jpg', '50% 40%', 'Marina na šarenim stepenicama u Valeti']].map(([s, pos, alt]) => React.createElement("div", {
    key: s,
    style: {
      padding: 10,
      border: '1px solid rgba(197,160,89,.7)'
    }
  }, React.createElement("img", {
    src: MJ_A + s,
    alt: alt,
    style: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
      objectPosition: pos,
      display: 'block',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)'
    }
  }))))));
}
function Kristali({
  go
}) {
  const Cta = window.MJCta;
  const {
    Kicker,
    Marquee
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const C = MJ_CONTENT;
  const back = !!window.mjBack;
  return React.createElement("div", null, React.createElement("style", null, MJ_ARTICLE_CSS), React.createElement("header", {
    style: {
      position: 'relative',
      background: 'var(--sedef-2)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .42
    }
  }), React.createElement("div", { style: { position: 'relative', width: '86%', marginLeft: '14%', WebkitMaskImage: 'linear-gradient(to right,transparent 0%,rgba(0,0,0,.35) 6%,rgba(0,0,0,.8) 13%,#000 18%)', maskImage: 'linear-gradient(to right,transparent 0%,rgba(0,0,0,.35) 6%,rgba(0,0,0,.8) 13%,#000 18%)' } }, React.createElement("div", { style: { WebkitMaskImage: 'linear-gradient(to top right,transparent 0%,rgba(0,0,0,.4) 14%,#000 30%)', maskImage: 'linear-gradient(to top right,transparent 0%,rgba(0,0,0,.4) 14%,#000 30%)' } }, React.createElement("img", { src: MJ_A + 'ahat-pirit.jpg', alt: "Privezak od crnog ahata", style: { width: '100%', display: 'block' } }))), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 84,
      top: 200,
      width: 450,
      boxSizing: 'border-box',
      padding: '32px 36px',
      background: 'rgba(255,255,255,.16)',
      backdropFilter: 'blur(18px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(18px) saturate(1.25)',
      border: '1px solid rgba(255,255,255,.45)',
      boxShadow: '0 16px 36px rgba(0,0,0,.08)'
    }
  }, React.createElement(Kicker, {
    tone: "ink"
  }, "Nevidljivi jezik prirode"), React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: '#000',
      margin: '14px 0 24px'
    }
  }, "Energija kristala"), React.createElement("p", {
    style: {
      ...MJ_P,
      fontSize: 20,
      color: '#000',
      fontWeight: 500
    }
  }, "U srcu zemlje, milionima godina unazad, priroda je kroz savr\u0161en spoj pritiska, toplote i elemenata stvarala svoja najstabilnija remek-dela \u2013 kristale. Oni nisu samo estetski privla\u010Dni ukrasi ili dodaci nakitu. Kristali su nosioci naj\u010Distijih prirodnih frekvencija koje vekovima fasciniraju \u010Dove\u010Danstvo i slu\u017Ee kao podr\u0161ka ljudskom telu, umu i duhu."))), React.createElement(Marquee, {
    items: [{
      text: 'Ahat'
    }, {
      text: 'Turmalin',
      script: true
    }, {
      text: 'Citrin'
    }, {
      text: 'Aventurin',
      script: true
    }, {
      text: 'Gorski kristal'
    }]
  }), React.createElement("section", {
    className: "mj-art",
    style: {
      background: 'radial-gradient(ellipse 60% 90% at 100% 45%, rgba(255,255,255,.7) 0%, rgba(255,255,255,.3) 45%, transparent 75%), linear-gradient(90deg, #E6D8C4 0%, var(--sedef-2) 45%, #F6EFE5 100%)',
      padding: '90px 0 100px',
      position: 'relative',
      overflow: 'hidden'
    },
    onClick: e => {
      const a = e.target.closest('a');
      if (a && /nakit|index/.test(a.getAttribute('href') || '')) {
        e.preventDefault();
        go('nakit');
      }
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .42,
      pointerEvents: 'none',
      WebkitMaskImage: 'linear-gradient(90deg,#000 30%,rgba(0,0,0,.35) 100%)',
      maskImage: 'linear-gradient(90deg,#000 30%,rgba(0,0,0,.35) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 690,
      margin: '0 auto',
      textAlign: 'left'
    },
    dangerouslySetInnerHTML: {
      __html: C.k2.replace(/^<article[^>]*>/, '')
    }
  })), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(Marquee, {
    height: 90,
    items: [{
      text: 'Energija kristala'
    }, {
      text: 'Energija kristala',
      script: true
    }]
  })), React.createElement("section", {
    className: "mj-art",
    style: {
      background: 'radial-gradient(ellipse 60% 90% at 100% 45%, rgba(255,255,255,.7) 0%, rgba(255,255,255,.3) 45%, transparent 75%), linear-gradient(90deg, #E6D8C4 0%, var(--sedef-2) 45%, #F6EFE5 100%)',
      padding: '80px 0 80px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("style", null, '@keyframes mjShine{0%{background-position:100% 0}60%,100%{background-position:0% 0}}@keyframes mjRun{0%{offset-distance:0%;opacity:0}3%{opacity:1}86%{opacity:1}90%{offset-distance:100%;opacity:0}100%{offset-distance:100%;opacity:0}}@keyframes mjTwink{0%,55%,100%{opacity:0;transform:scale(.3) rotate(0deg)}65%{opacity:1;transform:scale(1.1) rotate(45deg)}75%{opacity:.25;transform:scale(.6) rotate(70deg)}83%{opacity:1;transform:scale(.95) rotate(90deg)}93%{opacity:0;transform:scale(.3) rotate(110deg)}}@keyframes mjGlint{0%,69%,100%{opacity:0;transform:scale(.3) rotate(0deg)}75%{opacity:1;transform:scale(1.15) rotate(45deg)}83%{opacity:.25;transform:scale(.6) rotate(70deg)}89%{opacity:1;transform:scale(.95) rotate(90deg)}97%{opacity:0;transform:scale(.3) rotate(110deg)}'), React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .42,
      pointerEvents: 'none',
      WebkitMaskImage: 'linear-gradient(90deg,#000 30%,rgba(0,0,0,.35) 100%)',
      maskImage: 'linear-gradient(90deg,#000 30%,rgba(0,0,0,.35) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 780,
      marginLeft: 120
    }
  }, React.createElement(Kicker, {
    tone: "ink"
  }, "Poludrago kamenje"), React.createElement("h2", {
    style: {
      margin: '6px 0 18px'
    }
  }, "Kamen po kamen"), React.createElement("nav", {
    className: "chips",
    dangerouslySetInnerHTML: {
      __html: C.chips.replace(/^<nav[^>]*>|<\/nav>$/g, '')
    }
  }), [{
    id: 'labradorit',
    name: 'Labradorit',
    title: 'Kamen magije i transformacije',
    intro: 'Skriva igru svetlosti – plave, zelene i zlatne odsjaje koji se pokažu tek kad ga okreneš.',
    body: C.labBody,
    im: {
      src: 'labradorit.jpg',
      pos: '50% 60%',
      alt: 'Privezak od labradorita sa zlatnom zvezdicom u pesku'
    }
  }].concat(C.stones.map(s => {
    const id = (s.match(/id="([^"]+)"/) || [])[1];
    const im = STONE_IMG[id];
    if (!im) return {
      id,
      raw: s
    };
    const m = s.match(/<p><b>(.*?):?<\/b>(?:<br>)?:?\s*(.*?)<\/p>/);
    return {
      id,
      im,
      name: s.match(/<h3>(.*?)<\/h3>/)[1],
      title: m[1].replace(/:$/, ''),
      intro: m[2],
      body: s.replace(/^<article[^>]*>|<\/article>$/g, '').replace(/<h3>.*?<\/h3>/, '').replace(m[0], '')
    };
  })).filter(st => !st.raw).map((st, i) => React.createElement("article", {
    key: st.id,
    className: "stone",
    id: st.id,
    style: {
      width: 1200,
      display: 'grid',
      gridTemplateColumns: i % 2 ? '580px 541px' : '541px 580px',
      columnGap: 79,
      alignItems: 'stretch',
      margin: i ? '0 0 120px' : '80px 0 120px'
    }
  }, React.createElement("div", {
    style: {
      order: i % 2 ? 0 : 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, React.createElement("h1", {
    style: {
      ...MJ_H1,
      fontSize: 44,
      color: '#000',
      margin: '0 0 20px'
    }
  }, st.title), React.createElement("p", {
    style: {
      ...MJ_P,
      color: '#000',
      fontWeight: 600,
      margin: '0 0 18px'
    }
  }, st.intro), React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: st.body
    }
  }), React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 56,
      justifyContent: 'flex-start',
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      flexWrap: 'wrap'
    }
  }, back && React.createElement("a", {
    onClick: () => {
      window.mjBackGo = true;
      go('astro');
    },
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: '#1D1A17',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1,
      textDecoration: 'none'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'Inter,sans-serif',
      fontWeight: 300,
      fontSize: 22
    }
  }, "\u2190"), "nazad"), ['karneol', 'hematit'].includes(st.id) ? React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1,
      color: '#000'
    }
  }, "Modeli uskoro") : React.createElement(Cta, {
    onClick: () => go('nakit')
  }, "Nakit"))), React.createElement("div", {
    style: {
      order: i % 2 ? 1 : 0,
      alignSelf: 'start'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      flex: 'none',
      width: 541,
      height: 682,
      padding: 13,
      boxSizing: 'border-box',
      border: '1px solid rgba(197,160,89,.7)'
    }
  }, React.createElement("img", {
    src: MJ_A + st.im.src,
    alt: st.im.alt,
    style: {
      width: 513,
      height: 654,
      objectFit: 'cover',
      objectPosition: st.im.pos,
      display: 'block',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: '100%',
      marginBottom: 8,
      font: '700 40px/1.1 Corinthia,cursive',
      color: '#000',
      whiteSpace: 'nowrap',
      padding: '0 6px 0 0',
      backgroundImage: 'linear-gradient(100deg,#111 0%,#111 40%,#C5A059 47%,#F3E2B8 50%,#C5A059 53%,#111 60%,#111 100%)',
      backgroundSize: '300% 100%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'mjShine 7s ease-in-out infinite'
    }
  }, st.name.replace(/(^|\s)\S/g, s => s.toUpperCase())))))), (() => {
    const rs = [{
      id: 'labradorit'
    }].concat(C.stones.map(s => ({
      id: (s.match(/id="([^"]+)"/) || [])[1],
      raw: s
    }))).filter(x => x.raw && !STONE_IMG[x.id]);
    if (!rs.length) return null;
    return React.createElement("div", {
      className: "mj-k-raw",
      style: {
        width: 1200
      }
    }, React.createElement("style", null, '.mj-k-raw .stone{padding-top:0;margin:0}.mj-k-raw h3{margin:0 0 14px}'), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(' + rs.length + ',minmax(0,1fr))',
        gap: 40,
        alignItems: 'stretch'
      }
    }, rs.map(st => React.createElement("div", {
      key: st.id,
      id: st.id,
      style: {
        boxSizing: 'border-box',
        padding: '36px 40px',
        background: 'rgba(255,255,255,.26)',
        backdropFilter: 'blur(16px) saturate(1.25)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
        border: '1px solid rgba(255,255,255,.65)',
        boxShadow: '0 16px 36px rgba(0,0,0,.08)'
      },
      dangerouslySetInnerHTML: {
        __html: st.raw.replace(/ id="[^"]+"/, '')
      }
    }))), React.createElement("div", {
      style: {
        marginTop: 56,
        display: 'flex',
        gap: 36,
        alignItems: 'center'
      }
    }, back && React.createElement("a", {
      onClick: () => {
        window.mjBackGo = true;
        go('astro');
      },
      style: {
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: '#1D1A17',
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: 34,
        lineHeight: 1,
        textDecoration: 'none'
      }
    }, React.createElement("span", {
      style: {
        fontFamily: 'Inter,sans-serif',
        fontWeight: 300,
        fontSize: 22
      }
    }, "\u2190"), "nazad"), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: 34,
        lineHeight: 1,
        color: '#000'
      }
    }, "Modeli uskoro")));
  })())));
}
const STONE_PROD = {
  'labradorit': 'labradorit',
  'gorski-kristal': 'gorski-ogrlica',
  'ametist': 'ametist',
  'lapis-lazuli': 'lapis',
  'dalmatinski-jaspis': 'jaspis-sapice',
  'zeleni-aventurin': 'blizanci',
  'crni-ahat': 'jarac',
  'rozenkvarc': 'bik'
};
const STONE_SHORT = [];
const STONE_NOPROD = ['lapis-lazuli'];
const STONE_IMG = {
  'gorski-kristal': {
    src: 'p-gorski-ogrlica.jpg',
    pos: '50% 60%',
    alt: 'Ogrlica sa gorskim kristalom i biserima na zlatnom lančiću'
  },
  'amazonit': {
    src: 'p-amazonit-krug.jpg',
    pos: '50% 55%',
    alt: 'Prsten od amazonita sa zlatnim kockicama'
  },
  'ametist': {
    src: 'p-ametist.jpg',
    pos: '50% 55%',
    alt: 'Prsten sa ametistom na kamenom postolju'
  },
  'lapis-lazuli': {
    src: 'p-lapis.jpg',
    pos: '50% 55%',
    alt: 'Prsten od lapis lazulija sa zlatnim kockicama'
  },
  'dalmatinski-jaspis': {
    src: 'polu-jaspis-prsten.jpg',
    pos: '50% 62%',
    alt: 'Prsten od dalmatinskog jaspisa na kamenom postolju'
  },
  'zeleni-aventurin': {
    src: 'aventurin-blizanci.jpg',
    pos: '50% 72%',
    alt: 'Ogrlica od zelenog aventurina na postolju'
  },
  'crni-ahat': {
    src: 'ahat-jarac.jpg',
    pos: '50% 60%',
    alt: 'Prsten od crnog ahata sa znakom Jarca na postolju'
  },
  'rozenkvarc': {
    src: 'bik-ogrlica.jpg',
    pos: '50% 70%',
    alt: 'Ogrlica od rozenkvarca sa znakom Bika'
  }
};
Object.assign(window, {
  ONama,
  Astro,
  Blog,
  Post,
  PostEbook,
  PostX,
  Kristali
});
;// Shop.jsx
function Nakit({
  go,
  add,
  cat
}) {
  const {
    Kicker,
    CollectionCard,
    ProductCard
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  const isK = typeof cat === 'string' && cat.startsWith('kamen:');
  const kam = isK ? cat.slice(6) : null;
  const kw = isK ? kam.toLowerCase().replace(/crni /g, '').split(/\s+i\s+/).map(x => x.trim().slice(0, 5)) : [];
  const [c, setC] = React.useState(isK ? null : cat || null);
  const gridRef = React.useRef(null);
  React.useEffect(() => {
    setC(isK ? null : cat || null);
    if (cat) setTimeout(() => {
      const el = gridRef.current;
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }, 120);
  }, [cat]);
  const pick = n => {
    setC(n);
    setTimeout(() => {
      const el = gridRef.current;
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }, 60);
  };
  const list = c ? MJ_PRODUCTS.filter(p => p.cat.includes(c)) : isK ? MJ_PRODUCTS.filter(p => kw.some(k => (p.stone || '').toLowerCase().includes(k))) : [];
  const lbl = c || kam;
  const topRef = React.useRef(),
    ulRef = React.useRef();
  const [lh, setLh] = React.useState(0);
  React.useLayoutEffect(() => {
    const m = () => {
      if (!topRef.current || !ulRef.current) return;
      const t = topRef.current.getBoundingClientRect(),
        u = ulRef.current.getBoundingClientRect(),
        k = t.height / topRef.current.offsetHeight || 1;
      setLh(Math.round((u.bottom - t.top) / k + 4));
    };
    m();
    const id = setTimeout(m, 400);
    document.fonts && document.fonts.ready.then(m);
    window.addEventListener('resize', m);
    return () => {
      clearTimeout(id);
      window.removeEventListener('resize', m);
    };
  }, []);
  return React.createElement("div", null, React.createElement("section", {
    ref: topRef,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--sedef)',
      padding: '110px 8% 60px'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .34,
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: lh || 'calc(100% - 62px)',
      background: 'radial-gradient(ellipse 45% 60% at 20% 30%, rgba(244,237,226,.85) 0%, rgba(244,237,226,.4) 60%, rgba(244,237,226,0) 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: lh || 'calc(100% - 62px)',
      background: 'rgba(244,237,226,.74)',
      backdropFilter: 'blur(14px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(14px) saturate(1.25)',
      borderTop: '1px solid rgba(255,255,255,.65)',
      boxShadow: '0 -6px 24px rgba(29,26,23,.06)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(Kicker, null, "Nakit za ma\u010Dkice"), React.createElement("h1", {
    style: {
      ...MJ_H1,
      margin: '10px 0 40px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 24
    }
  }, "Nakit"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, [['Ogrlice', 'komplet.jpg'], ['Narukvice', 'turmalin-set.jpg'], ['Prstenje', 'ahat-jarac.jpg'], ['Minđuše', 'p-mindjuse-visece.jpg']].map(([n, f]) => React.createElement("div", {
    key: n,
    style: {
      padding: 10,
      border: '1px solid rgba(197,160,89,.7)',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)'
    }
  }, React.createElement(window.MJVid, {
    vid: null
  }, React.createElement(CollectionCard, {
    image: A + (n === 'Ogrlice' ? 'p-ogrlica-suza.jpg' : f),
    script: React.createElement("span", {
      ref: n === 'Ogrlice' ? ulRef : null,
      style: {
        display: 'inline-block',
        marginLeft: -10,
        fontSize: 34,
        lineHeight: 1,
        textDecoration: 'underline',
        textDecorationThickness: 1,
        textUnderlineOffset: 6,
        textDecorationColor: c === n ? '#C5A059' : 'currentColor'
      }
    }, n),
    caps: "",
    height: 400,
    onClick: () => pick(n)
  }))))))), React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 60% 90% at 0% 45%, rgba(255,255,255,.7) 0%, rgba(255,255,255,.3) 45%, transparent 75%), linear-gradient(90deg, #F6EFE5 0%, var(--sedef-2) 55%, #E6D8C4 100%)'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .3,
      pointerEvents: 'none',
      WebkitMaskImage: 'linear-gradient(90deg,rgba(0,0,0,.35) 0%,#000 70%)',
      maskImage: 'linear-gradient(90deg,rgba(0,0,0,.35) 0%,#000 70%)'
    }
  }), lbl && React.createElement("section", {
    ref: gridRef,
    style: {
      position: 'relative',
      padding: '50px 8% 110px'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      marginBottom: 36,
      alignItems: 'baseline',
      gap: 18
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1
    }
  }, lbl), React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-70)'
    }
  }, list.length, " komada")), list.length ? React.createElement("div", {
    className: "mj-pgrid",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 32
    }
  }, list.map(p => React.createElement("div", {
    key: p.id,
    style: {
      padding: 13,
      border: '1px solid rgba(197,160,89,.7)'
    }
  }, React.createElement(ProductCard, {
    image: p.img,
    name: p.name,
    stone: p.stone,
    price: rsd(p.price),
    oldPrice: p.old && rsd(p.old),
    badge: p.badge,
    onAdd: p.price == null ? () => go('proizvod', p.id + '|' + (c || cat)) : () => add(p),
    onOpen: () => go('proizvod', p.id + '|' + (c || cat))
  })))) : React.createElement("div", {
    style: {
      position: 'relative',
      padding: '60px 0',
      textAlign: 'center',
      display: 'grid',
      justifyItems: 'center',
      gap: 14
    }
  }, React.createElement("img", {
    src: A + 'macka-sanduce.png',
    style: {
      width: 240
    }
  }), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 56
    }
  }, "Uskoro\u2026"), React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-70)'
    }
  }, "Ma\u010Dkica jo\u0161 sprema ovu kolekciju."))), React.createElement("section", {
    id: "celik",
    style: {
      position: 'relative',
      padding: '32px 8% 64px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 75% 70% at 40% 50%, rgba(244,237,226,.92) 0%, rgba(244,237,226,.6) 55%, rgba(244,237,226,0) 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, React.createElement("div", null, React.createElement(Kicker, null, "Jak kao"), React.createElement("h2", {
    style: {
      ...MJ_H2,
      margin: '6px 0 44px'
    }
  }, "Hirur\u0161ki \u010Delik"))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 24
    }
  }, [['Apsolutna bezbednost za vašu kožu', 'Zbog svojih antialergijskih svojstava, ovaj materijal ne izaziva iritacije i potpuno je bezbedan za osetljivu kožu, pružajući vam maksimalnu udobnost tokom celog dana.'], ['Bezbrižno nošenje u svim uslovima', 'Visoka otpornost na vodu, rđu i oksidaciju znači da vaš omiljeni nakit neće ostavljati tamne ili zelene tragove na koži, niti gubiti svoj prvobitni sjaj pri kontaktu sa vlagom.'], ['Dugovečnost srebrnog sjaja', 'Ukoliko izaberete komad u njegovoj prirodnoj, srebrnoj nijansi, on za razliku od klasičnog srebra nikada neće potamneti niti promeniti boju, zadržavajući svoj prefinjeni izgled godinama.'], ['Prefinjena estetika pozlate', 'Komadi sa nanosom žutog ili roze zlata pružaju vrhunski luksuzan izgled. Važno je znati da trajnost ove pozlate (koja može trajati od nekoliko meseci do nekoliko godina) direktno zavisi od učestalosti nošenja i izloženosti vodi, što svakom komadu daje lični pečat vašeg stila života.']].map(([b, t], i) => React.createElement("div", {
    key: b,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '26px 28px',
      background: 'rgba(255,255,255,.26)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
      border: '1px solid rgba(255,255,255,.65)',
      boxShadow: '0 16px 36px rgba(0,0,0,.06)'
    }
  }, React.createElement("p", {
    style: {
      ...MJ_P,
      margin: 0,
      textWrap: 'pretty'
    }
  }, React.createElement("b", null, b, ":"), " ", t), i === 2 && React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 32
    }
  }, React.createElement(window.MJCta, {
    kind: "link",
    onClick: () => go('kristali')
  }, "Kristali"))))), React.createElement("p", {
    style: {
      ...MJ_P,
      margin: '64px 0 0',
      maxWidth: 760,
      textWrap: 'pretty'
    }
  }, "Izuzetna izdr\u017Eljivost ovog materijala \u2013 koji je zbog svoje sterilnosti i otpornosti na\u0161ao primenu u medicini, vrhunskom kulinarstvu i industriji \u2013 \u010Dini ga idealnim za nakit koji zahteva minimalno anga\u017Eovanje oko odr\u017Eavanja."), React.createElement("h3", {
    style: {
      font: '700 15px/1.3 Inter,sans-serif',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      margin: '40px 0 10px'
    }
  }, "Ritual i nega"), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40
    }
  }, React.createElement("p", {
    style: {
      ...MJ_P,
      margin: 0,
      maxWidth: 760,
      textWrap: 'pretty'
    }
  }, "Da biste svom komadu vratili refleksiju i visoki sjaj, dovoljno je da sprovedete jednostavan ritual nege. Operite nakit u blagom rastvoru sapunice i mlake vode, a zatim ga ne\u017Eno prebri\u0161ite i potpuno osu\u0161ite mekanom pamu\u010Dnom tkaninom."), React.createElement(window.MJCta, {
    kind: "link",
    onClick: () => go('blog')
  }, "Blog"))))));
}
function Proizvod({
  go,
  add,
  id
}) {
  const {
    Kicker,
    Badge,
    QuantityStepper,
    Button,
    ProductCard
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const [pid, from0] = String(id || '').split('|');
  const p = MJ_PRODUCTS.find(x => x.id === pid) || MJ_PRODUCTS[0];
  const from = from0 && from0 !== 'undefined' && from0 !== 'null' ? from0 : p.cat[0];
  const fromLbl = from.startsWith('kamen:') ? from.slice(6) : from;
  const [q, setQ] = React.useState(1);
  const [o, setO] = React.useState(0);
  const [im, setIm] = React.useState(0);
  React.useEffect(() => {
    setO(0);
    setIm(0);
    setQ(1);
    window.scrollTo(0, 0);
  }, [id]);
  const price = p.opts ? p.opts[o][1] : p.price;
  const addP = () => add(p.opts ? {
    ...p,
    id: p.id + '-' + o,
    name: p.name + ' · ' + p.opts[o][0],
    price
  } : p, q);
  return React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(90deg, #F6EFE5 0%, var(--sedef-2) 55%, #E6D8C4 100%)',
      padding: '60px 8% 110px'
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: .3,
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 45% 55% at 72% 32%, rgba(244,237,226,.9) 0%, rgba(244,237,226,.55) 60%, rgba(244,237,226,0) 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-70)',
      marginBottom: 30
    }
  }, React.createElement("a", {
    style: {
      cursor: 'pointer',
      display: 'inline-block',
      marginBottom: 12,
      fontWeight: 600,
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    },
    onClick: () => go('nakit', from)
  }, "\u2190 Nazad na ", fromLbl), React.createElement("div", null, React.createElement("a", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => go('nakit')
  }, "Nakit"), " / ", React.createElement("a", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => go('nakit', from)
  }, fromLbl), " / ", p.name)), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 80,
      alignItems: 'start'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      justifyItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      padding: 13,
      border: '1px solid rgba(197,160,89,.7)',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)'
    }
  }, (() => {
    const u = (p.imgs || [p.img])[im] || p.img;
    const st = {
      display: 'block',
      width: '100%',
      aspectRatio: p.ratio || '4/5',
      objectFit: 'cover'
    };
    return /\.mp4$/.test(u) ? React.createElement("video", {
      key: u,
      src: u,
      poster: p.img,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      style: st
    }) : React.createElement("img", {
      src: u,
      alt: p.name,
      style: st
    });
  })(), p.imgs && React.createElement(React.Fragment, null, React.createElement("button", {
    "aria-label": "Prethodna",
    onClick: () => setIm((im + p.imgs.length - 1) % p.imgs.length),
    style: {
      all: 'unset',
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 44,
      height: 44,
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
      fontSize: 26,
      lineHeight: 1,
      color: '#1D1A17',
      background: 'rgba(251,247,240,.7)',
      backdropFilter: 'blur(14px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(14px) saturate(1.25)',
      border: '1px solid rgba(255,255,255,.8)',
      left: 28
    }
  }, "\u2039"), React.createElement("button", {
    "aria-label": "Slede\u0107a",
    onClick: () => setIm((im + 1) % p.imgs.length),
    style: {
      all: 'unset',
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 44,
      height: 44,
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
      fontSize: 26,
      lineHeight: 1,
      color: '#1D1A17',
      background: 'rgba(251,247,240,.7)',
      backdropFilter: 'blur(14px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(14px) saturate(1.25)',
      border: '1px solid rgba(255,255,255,.8)',
      right: 28
    }
  }, "\u203A"))), p.imgs && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7
    }
  }, p.imgs.map((u, k) => React.createElement("button", {
    key: k,
    "aria-label": 'Fotografija ' + (k + 1),
    onClick: () => setIm(k),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: im === k ? 18 : 6,
      height: 6,
      borderRadius: 999,
      background: im === k ? 'rgba(29,26,23,.7)' : 'rgba(29,26,23,.28)',
      transition: 'width .3s,background .3s'
    }
  })))), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22,
      paddingTop: 30
    }
  }, React.createElement(Kicker, null, p.stone), React.createElement("h1", {
    style: {
      ...MJ_H1,
      fontSize: 48
    }
  }, p.name), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.cat.map(k => React.createElement(Badge, {
    key: k,
    tone: "krem"
  }, k)), p.el && React.createElement(Badge, {
    tone: "astro"
  }, p.el), p.tag && React.createElement(Badge, {
    tone: "krem"
  }, p.tag), p.badge && React.createElement(Badge, {
    tone: "gold"
  }, p.badge)), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'baseline',
      font: '600 24px/1 Inter'
    }
  }, rsd(price), p.old && React.createElement("s", {
    style: {
      fontSize: 16,
      fontWeight: 400,
      opacity: .5
    }
  }, rsd(p.old))), React.createElement("p", {
    style: {
      ...MJ_P,
      maxWidth: 480
    }
  }, p.optOpis && p.optOpis[o] || p.opis || 'Hirurški čelik i poludragi kamen.'), p.opts && React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, p.opts.map((x, i) => React.createElement("button", {
    key: i,
    onClick: () => setO(i),
    style: {
      all: 'unset',
      cursor: 'pointer',
      padding: '9px 16px',
      borderRadius: 999,
      fontSize: 13,
      border: '1px solid ' + (o === i ? '#C5A059' : 'var(--hairline-strong)'),
      background: o === i ? 'rgba(197,160,89,.12)' : '#fff'
    }
  }, x[0], " \xB7 ", rsd(x[1])))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, React.createElement(QuantityStepper, {
    value: q,
    onChange: setQ
  }), price == null ? React.createElement(window.MJCta, {
    onClick: () => {
      location.href = 'mailto:marina.rakic1806@gmail.com?subject=' + encodeURIComponent('Upit: ' + p.name);
    }
  }, "Po\u0161alji upit") : React.createElement(window.MJCta, {
    onClick: addP
  }, "Dodaj u korpu")), React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hairline-strong)'
    }
  }, [['Materijal', p.mat || 'Hirurški čelik'], ['Kamen', p.kamen || p.stone], ...(p.info || []), ...(p.el ? [['Element', p.el]] : [])].map(([k, v]) => React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      padding: '16px 0',
      alignItems: 'baseline',
      borderBottom: '1px solid var(--hairline-strong)',
      fontSize: 20
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, k), React.createElement("span", null, v)))))), React.createElement("h2", {
    style: {
      position: 'relative',
      margin: '100px 0 28px',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1,
      color: 'var(--ink)'
    }
  }, "Ma\u010Dkice su uzele i ovo"), React.createElement("div", {
    className: "mj-pgrid",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 28
    }
  }, mjRel(p).map(x => React.createElement("div", {
    key: x.id,
    style: {
      padding: 13,
      border: '1px solid rgba(197,160,89,.7)',
      minWidth: 0
    }
  }, React.createElement(ProductCard, {
    image: x.img,
    name: x.name,
    stone: x.stone,
    price: rsd(x.price),
    onAdd: () => add(x),
    onOpen: () => go('proizvod', x.id)
  })))));
}
function Korpa({
  open,
  items,
  close,
  setQty,
  remove
}) {
  const {
    Button,
    QuantityStepper,
    IconButton
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const sub = items.reduce((s, i) => s + i.p.price * i.q, 0);
  window.useMjTick && window.useMjTick();
  const prize = window.mjWheelPrize && window.mjWheelPrize();
  const disc = prize && prize.pct ? Math.round(sub * prize.pct / 100) : 0;
  const total = sub - disc;
  const freeShip = sub >= 4000 || prize && prize.ship;
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!open && sent) {
      setSent(false);
      items.forEach(i => remove(i.p.id));
    }
  }, [open]);
  return React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, React.createElement("div", {
    onClick: close,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(29,26,23,.35)',
      opacity: open ? 1 : 0,
      transition: 'opacity .3s',
      boxShadow: '0 4px 12px 0 rgba(0,0,0,.15)'
    }
  }), React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(440px,100vw)',
      boxSizing: 'border-box',
      background: 'var(--sedef)',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform .4s cubic-bezier(.2,.7,.2,1)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-20px 0 40px rgba(60,40,20,.15)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 28px',
      borderBottom: '1px solid var(--hairline-strong)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      font: '700 20px Inter',
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, "Tvoja"), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: .6
    }
  }, "korpa")), React.createElement(IconButton, {
    icon: "x",
    label: "Zatvori",
    onClick: close
  })), sent ? React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      alignContent: 'center',
      justifyItems: 'center',
      gap: 14,
      textAlign: 'center',
      padding: '0 34px'
    }
  }, React.createElement("img", {
    src: MJ_A + 'maca-providna.png',
    alt: "",
    style: {
      width: 110,
      animation: 'mj-float 6s ease-in-out infinite'
    }
  }), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 54,
      lineHeight: 1
    }
  }, "Hvala, ma\u010Dkice!"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: '#1D1A17'
    }
  }, "Tvoja porud\u017Ebina je primljena. Javljam ti se na mejl sa podacima za uplatu, a nakit \u0161aljem Post Expressom \u010Dim uplata stigne."), React.createElement("a", {
    onClick: close,
    style: {
      marginTop: 10,
      cursor: 'pointer',
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: '#1D1A17',
      textDecoration: 'underline',
      textUnderlineOffset: 4
    }
  }, "Nastavi kupovinu")) : React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: '8px 28px'
    }
  }, !items.length && React.createElement("div", {
    style: {
      padding: '60px 0',
      textAlign: 'center'
    }
  }, React.createElement("img", {
    src: MJ_A + 'maca-providna.png',
    style: {
      width: 110,
      margin: '0 auto'
    }
  }), React.createElement("p", {
    style: {
      color: 'var(--ink-70)'
    }
  }, "Korpa je prazna. Ma\u010Dkica \u010Deka.")), items.map(i => React.createElement("div", {
    key: i.p.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '84px 1fr',
      gap: 16,
      padding: '18px 0',
      borderBottom: '1px solid var(--hairline-strong)'
    }
  }, React.createElement("img", {
    src: i.p.img,
    style: {
      width: 84,
      height: 104,
      objectFit: 'cover'
    }
  }), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      alignContent: 'start'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-70)'
    }
  }, i.p.stone), React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, i.p.name), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement(QuantityStepper, {
    size: "sm",
    value: i.q,
    onChange: n => setQty(i.p.id, n)
  }), React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, rsd(i.p.price * i.q))), React.createElement("a", {
    onClick: () => remove(i.p.id),
    style: {
      cursor: 'pointer',
      fontSize: 12,
      color: 'var(--ink-70)'
    }
  }, "Ukloni"))))), React.createElement("div", {
    style: {
      padding: '22px 28px 28px',
      borderTop: '1px solid var(--hairline-strong)',
      display: 'grid',
      gap: 16
    }
  }, (items.length > 0 || prize) && React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, prize && React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10,
      padding: '10px 14px',
      border: '1px solid rgba(197,160,89,.7)',
      background: 'rgba(255,255,255,.4)'
    }
  }, React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1
    }
  }, prize.txt), React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-70)'
    }
  }, "Nagrada sa to\u010Dka \xB7 va\u017Ei jo\u0161 ", window.mjLeft(prize.t))), disc > 0 && React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: 'nowrap'
    }
  }, "\u2212", rsd(disc))), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.06em'
    }
  }, freeShip ? 'Dostava je besplatna 🐾' : 'Još ' + rsd(4000 - sub) + ' do besplatne dostave'), React.createElement("div", {
    style: {
      height: 4,
      background: 'rgba(197,160,89,.2)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      height: '100%',
      width: (freeShip ? 100 : Math.min(100, sub / 40)) + '%',
      background: 'linear-gradient(90deg,#E8C982,#C5A059)',
      transition: 'width .5s'
    }
  })))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '700 15px Inter',
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, React.createElement("span", null, "Ukupno"), React.createElement("span", null, rsd(total))), React.createElement(KorpaForma, {
    items: items,
    total: total,
    onSent: () => setSent(true)
  })))));
}
Object.assign(window, {
  Nakit,
  Proizvod,
  Korpa
});
function KorpaForma({
  items,
  total,
  onSent
}) {
  const {
    Button
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const [f, setF] = React.useState({
    ime: '',
    adresa: '',
    telefon: '',
    mejl: ''
  });
  const [st, setSt] = React.useState('');
  const I = {
    boxSizing: 'border-box',
    width: '100%',
    padding: '12px 16px',
    font: '400 15px Inter,sans-serif',
    color: '#1D1A17',
    background: 'rgba(255,255,255,.6)',
    border: '1px solid rgba(197,160,89,.7)',
    borderRadius: 12,
    outline: 'none'
  };
  const ok = items.length && f.ime.trim() && f.adresa.trim() && f.telefon.trim() && /\S+@\S+\.\S+/.test(f.mejl);
  const send = async e => {
    e.preventDefault();
    if (!ok || st === 'salje') return;
    setSt('salje');
    const spisak = items.map(i => '• ' + i.p.name + ' (' + i.p.stone + ') x' + i.q + ' – ' + rsd(i.p.price * i.q)).join('\n');
    const data = {
      _subject: 'Nova porudžbina – Mnjauprrrrr',
      _template: 'box',
      _captcha: 'false',
      _replyto: f.mejl,
      'Ime i prezime': f.ime,
      'Adresa za dostavu': f.adresa,
      'Telefon': f.telefon,
      'Mejl': f.mejl,
      'Porudžbina': spisak,
      'Nagrada sa točka': (window.mjWheelPrize && window.mjWheelPrize() || {}).txt || 'nema',
      'Ukupno': rsd(total)
    };
    try {
      let ifr = document.getElementById('mj-order-ifr');
      if (!ifr) {
        ifr = document.createElement('iframe');
        ifr.id = 'mj-order-ifr';
        ifr.name = 'mj-order-ifr';
        ifr.style.display = 'none';
        document.body.appendChild(ifr);
      }
      const fm = document.createElement('form');
      fm.method = 'POST';
      fm.action = 'https://formsubmit.co/marina.rakic1806@gmail.com';
      fm.target = 'mj-order-ifr';
      fm.style.display = 'none';
      Object.entries(data).forEach(([k, v]) => {
        const t = document.createElement('textarea');
        t.name = k;
        t.value = v;
        fm.appendChild(t);
      });
      document.body.appendChild(fm);
      let done = false;
      const fin = () => {
        if (done) return;
        done = true;
        fm.remove();
        onSent();
      };
      ifr.onload = fin;
      setTimeout(fin, 3500);
      fm.submit();
    } catch (x) {
      setSt('greska');
    }
  };
  const fld = (k, ph, t) => React.createElement("input", {
    key: k,
    type: t || 'text',
    placeholder: ph,
    value: f[k],
    onChange: e => setF({
      ...f,
      [k]: e.target.value
    }),
    style: I
  });
  return React.createElement("form", {
    onSubmit: send,
    style: {
      display: 'grid',
      gap: 10
    }
  }, fld('ime', 'Ime i prezime'), fld('adresa', 'Adresa, grad, poštanski broj'), fld('telefon', 'Telefon (za kurira)', 'tel'), fld('mejl', 'Mejl', 'email'), React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    disabled: !ok || st === 'salje'
  }, st === 'salje' ? 'Šaljem…' : 'Poruči'), st === 'greska' && React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: '#9A2B2B',
      textAlign: 'center'
    }
  }, "Ne\u0161to nije u redu sa vezom. Poku\u0161aj ponovo ili pi\u0161i na marina.rakic1806@gmail.com"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--ink-70)',
      textAlign: 'center'
    }
  }, "Pla\u0107anje uplatom na ra\u010Dun \u2013 podatke ti \u0161aljem na mejl. Nakit \u0161aljem Post Expressom \u010Dim uplata stigne."));
}
;// Mobile.jsx
const MJ_M_LINKS = [['o-nama', 'O nama'], ['nakit', 'Nakit'], ['astro', 'Astro'], ['/zvezdani-zapis/', 'Zvezdani zapis'], ['blog', 'Blog'], ['kontakt', 'Kontakt'], ['kristali', 'Kristali']];
const MJ_GLASS = {
  background: 'rgba(247,241,232,.74)',
  backdropFilter: 'blur(14px) saturate(1.25)',
  WebkitBackdropFilter: 'blur(14px) saturate(1.25)'
};
function MLeo({
  op = .3,
  children,
  style
}) {
  return React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: op,
      pointerEvents: 'none'
    }
  }), children);
}
function MFrame({
  children,
  style
}) {
  return React.createElement("div", {
    style: {
      position: 'relative',
      margin: '10px',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)',
      ...style
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -10,
      border: '1px solid rgba(197,160,89,.7)',
      pointerEvents: 'none'
    }
  }), children);
}
function MobileNav({
  go,
  active,
  n,
  openCart
}) {
  const NSx = window.MnjauprrrrrDesignSystem_64b9d1;
  const [o, setO] = React.useState(false);
  const nav = p => {
    setO(false);
    go(p);
  };
  return React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }, React.createElement("div", {
    style: {
      ...MJ_GLASS,
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 12px 0 14px',
      borderTop: '1px solid rgba(255,255,255,.65)',
      boxShadow: '0 6px 20px rgba(29,26,23,.08)'
    }
  }, React.createElement("a", {
    onClick: () => nav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'var(--ink)'
    }
  }, React.createElement("img", {
    src: MJ_A + 'logo.png',
    alt: "Mnjauprrrrr",
    style: {
      width: 36,
      height: 36,
      borderRadius: 999
    }
  }), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1
    }
  }, "Mnjauprrrrr")), React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, React.createElement(NSx.IconButton, {
    icon: "shopping-bag",
    label: "Korpa",
    variant: "krem",
    badge: n,
    onClick: openCart
  })), React.createElement("button", {
    "aria-label": "Meni",
    onClick: () => setO(v => !v),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: 44,
      height: 44,
      display: 'grid',
      placeItems: 'center',
      fontSize: 24,
      color: 'var(--ink)'
    }
  }, o ? '×' : '☰')), React.createElement(MJMenuOverlay, {
    o: o,
    nav: nav,
    active: active,
    n: n,
    openCart: openCart,
    close: () => setO(false)
  }));
}
/* 6.11.2026: meni na telefonu sa animacijom kao na novoj pocetnoj (krug + stavke) */
function MJMenuOverlay({ o, nav, active, n, openCart, close }) {
  const h = React.createElement;
  const [vw, setVw] = React.useState(() => [window.innerWidth, window.innerHeight]);
  React.useEffect(() => { const f = () => setVw([window.innerWidth, window.innerHeight]); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f); }, []);
  React.useEffect(() => { document.body.style.overflow = o ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [o]);
  const cx = vw[0] - 34, cy = -28, D = 2 * Math.hypot(Math.max(cx, vw[0] - cx), vw[1]) + 40;
  const E = 'cubic-bezier(.7,0,.2,1)';
  const soc = [['Instagram', 'https://www.instagram.com/mnjauprrrrr'], ['TikTok', 'https://www.tiktok.com/@mnjauprrrrr'], ['Pinterest', 'https://www.pinterest.com/marinar369/'], ['Facebook', 'https://www.facebook.com/share/1CaxCXrf5x/?mibextid=wwXIfr']];
  const tx = { font: '600 11px Inter,sans-serif', letterSpacing: '.18em', textTransform: 'uppercase', color: '#1D1A17', textDecoration: 'none' };
  return h('div', { style: { position: 'absolute', left: 0, right: 0, top: 56, height: 'calc(100vh - 56px)', overflow: 'hidden', pointerEvents: o ? 'auto' : 'none' } },
    h('style', null, '@keyframes mjCatWig{0%,100%{transform:rotate(0) scale(1)}50%{transform:rotate(-8deg) scale(1.06)}}'),
    h('div', { style: { position: 'absolute', left: cx - D / 2, top: cy - D / 2, width: D, height: D, borderRadius: '50%', background: '#E6D8C4', border: '1.5px solid #C5A059', boxSizing: 'border-box', transform: o ? 'scale(1)' : 'scale(0)', transition: 'transform ' + (o ? '.8s' : '.6s') + ' ' + E + (o ? '' : ' .15s'), willChange: 'transform' } }),
    h('div', { style: { position: 'absolute', inset: 0, opacity: o ? 1 : 0, transition: o ? 'opacity .5s .3s' : 'opacity .25s' } },
      h('div', { className: 'mj-leopard', style: { position: 'absolute', inset: 0, backgroundSize: '260px auto', opacity: .42, pointerEvents: 'none' } }),
      h('div', { style: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 95% 75% at 30% 50%,rgba(251,247,240,.8) 0%,rgba(251,247,240,.35) 70%,rgba(251,247,240,.1) 100%)', pointerEvents: 'none' } }),
      h('div', { style: { position: 'relative', height: '100%', boxSizing: 'border-box', padding: '22px 28px 32px', display: 'flex', flexDirection: 'column', overflowY: 'auto' } },
        h('div', { style: { display: 'grid', borderTop: '1px solid rgba(29,26,23,.18)' } },
          MJ_M_LINKS.map(([p, l], i) => h('a', { key: p, onClick: () => p[0] === '/' ? (location.href = p) : nav(p), style: { cursor: 'pointer', display: 'grid', gridTemplateColumns: '40px minmax(0,1fr)', alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid rgba(29,26,23,.18)', color: active === p ? '#8A6A28' : '#1D1A17', textDecoration: 'none' } },
            h('span', { style: { font: '600 11px Inter,sans-serif', letterSpacing: '.14em', opacity: o ? 1 : 0, transition: 'opacity .5s ' + (o ? .35 + i * .06 : 0) + 's' } }, String(i + 1).padStart(2, '0')),
            h('span', { style: { display: 'block', overflow: 'hidden', paddingBottom: '.08em' } },
              h('span', { style: { display: 'block', font: '600 14px Inter,sans-serif', letterSpacing: '.16em', textTransform: 'uppercase', transform: o ? 'none' : 'translateY(110%)', transition: 'transform .7s ' + E + ' ' + (o ? .3 + i * .06 : 0) + 's' } }, l))))),
        h('img', { src: MJ_A + 'maca-providna.png', alt: '', style: { display: 'block', width: 92, height: 'auto', margin: '26px auto 22px', animation: 'mjCatWig 2.6s ease-in-out infinite' } }),
        h('div', { style: { marginTop: 'auto', display: 'grid', gap: 18, justifyItems: 'start', opacity: o ? 1 : 0, transition: o ? 'opacity .6s .75s' : 'opacity .2s' } },
          h('a', { onClick: () => { close(); openCart && openCart(); }, style: { ...tx, cursor: 'pointer', padding: '13px 22px', border: '1px solid #1D1A17', borderRadius: 999 } }, 'Korpa · ' + (n || 0)),
          h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '10px 18px' } }, soc.map(([t, u]) => h('a', { key: t, href: u, target: '_blank', rel: 'noopener', style: tx }, t))),
          h('a', { href: 'mailto:marina@mnjauprrrrr.com', style: { font: '500 14px Inter,sans-serif', color: '#1D1A17', textDecoration: 'none' } }, 'marina@mnjauprrrrr.com')))));
}
function HomeM({
  go
}) {
  const Cta = window.MJCta;
  const {
    Kicker,
    Marquee,
    MailBar
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  const [pk, setPk] = React.useState(0);
  const PK = [['polu-3-kamena.jpg', '50% 55%'], ['polu-jaspis-prsten.jpg', '50% 50%'], ['polu-bik-ogrlica.jpg', '50% 62%']];
  const H1 = {
    ...MJ_H1,
    fontSize: 34,
    lineHeight: 1.12
  };
  const H2 = {
    ...MJ_H2,
    fontSize: 28,
    letterSpacing: '.06em'
  };
  const P = {
    ...MJ_P,
    fontSize: 17
  };
  const pad = {
    padding: '0 24px'
  };
  return React.createElement("div", null, React.createElement(MLeo, {
    op: .44,
    style: {
      background: 'linear-gradient(180deg,#FAF6EF 0,var(--hero-1) 40%,var(--sedef) 66%,rgb(229,210,193) 100%)'
    }
  }, React.createElement("div", { style: { position: 'relative', padding: '40px 0 50px' } }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 80% 45% at 30% 18%, rgba(250,246,239,.9) 0%, rgba(250,246,239,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      ...pad
    }
  }, React.createElement(Kicker, null, "\u010Carolija detalja"), React.createElement("h1", {
    style: {
      ...H1,
      margin: '14px 0 20px'
    }
  }, "Komadi nakita koji govore i kada \u0107uti\u0161"), React.createElement("p", {
    style: {
      ...P,
      margin: '0 0 40px',
      textWrap: 'pretty'
    }
  }, "Moderan dizajn i sirovi prirodni materijali. Nakit koji \u0107e\u0161 \u017Eeleti da nosi\u0161 svakog dana. Tiha rasko\u0161 za one koje ne moraju da vi\u010Du. Ne\u017Enost koja nosi snagu, prime\u0107ena bez re\u010Di."), React.createElement(Cta, {
    onClick: () => go('nakit')
  }, "Istra\u017Ei")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 50,
      background: 'none',
      pointerEvents: 'none'
    }
  }), React.createElement(MFrame, {
    style: {
      margin: '44px 34px 0'
    }
  }, React.createElement("video", {
    ref: el => {
      if (el && !el.dataset.m) {
        el.dataset.m = 1;
        el.muted = true;
        el.setAttribute('muted', '');
        el.play && el.play().catch(() => {});
      }
    },
    src: A + 'hero.mp4',
    poster: A + 'hero.jpg',
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      width: '100%',
      aspectRatio: '513/654',
      objectFit: 'cover',
      objectPosition: '50% 20%',
      display: 'block'
    }
  }))), React.createElement("div", { style: { position: 'relative' } }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 50,
      background: 'none',
      pointerEvents: 'none'
    }
  }), React.createElement("img", {
    src: A + 'ahat-pirit.jpg',
    alt: "Privezak od crnog ahata i pirita",
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4/3',
      objectFit: 'cover',
      objectPosition: '70% 50%',
      display: 'block',
      transform: 'scaleX(-1)',
      WebkitMaskImage: 'radial-gradient(ellipse 72% 64% at 50% 52%,#000 42%,transparent 100%)',
      maskImage: 'radial-gradient(ellipse 72% 64% at 50% 52%,#000 42%,transparent 100%)',
      WebkitMaskComposite: 'source-over'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      ...pad,
      padding: '0 24px 54px',
      marginTop: -20
    }
  }, React.createElement(Kicker, null, "Tiha mo\u0107"), React.createElement("h2", {
    style: {
      ...H2,
      margin: '8px 0 12px'
    }
  }, "Crni ahat"), React.createElement("p", {
    style: {
      ...P,
      margin: '0 0 40px',
      textWrap: 'pretty'
    }
  }, "Zauzmi prostor koji zaslu\u017Euje\u0161. Dodaj boju, teksturu i detalje koji \u010Dine da se ose\u0107a\u0161 dobro. Ne mora\u0161 da se uklopi\u0161 da bi pripadala, tu si da bude\u0161 svoja."), React.createElement(Cta, {
    onClick: () => go('nakit', 'Ogrlice')
  }, "Ogrlice")))), React.createElement(Marquee, {
    height: 76,
    items: [{
      text: 'Ogrlice',
      script: true
    }, {
      text: 'Narukvice'
    }, {
      text: 'Prstenje',
      script: true
    }, {
      text: 'Minđuše'
    }]
  }), React.createElement("section", {
    style: {
      background: 'var(--komp)'
    }
  }, React.createElement("img", {
    src: A + 'komplet.jpg',
    alt: "Prsten i ogrlica od hirur\u0161kog \u010Delika sa crnim oniksom",
    style: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
      objectPosition: '50% 0%',
      display: 'block'
    }
  }), React.createElement("div", {
    style: {
      ...pad,
      padding: '34px 24px 26px'
    }
  }, React.createElement(Kicker, null, "Jak kao"), React.createElement("h2", {
    style: {
      ...H2,
      margin: '6px 0 10px'
    }
  }, "Hirur\u0161ki \u010Delik"), React.createElement("p", {
    style: {
      ...P,
      margin: '0 0 40px'
    }
  }, "Snaga koja \u010Duva lepotu.", React.createElement("br", null), "Ne r\u0111a, ne tamni, ne popu\u0161ta.", React.createElement("br", null), "Srebrni sjaj koji traje.", React.createElement("br", null), "Tiho prefinjena pozlata."), React.createElement(Cta, {
    kind: "pill",
    onClick: () => go('nakit'),
    style: {
      backgroundImage: 'linear-gradient(rgba(244,237,226,.6),rgba(244,237,226,.6)), url(' + A + 'leopard-dugme-2.png)',
      backgroundSize: '100% 100%, 54px auto',
      border: '1px solid rgba(255,255,255,.95)'
    }
  }, "Istra\u017Ei"))), React.createElement(MLeo, {
    op: .46,
    style: {
      background: 'var(--sedef)',
      padding: '24px 0 54px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 70,
      background: 'linear-gradient(180deg,var(--komp) 0%,rgba(0,0,0,0) 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(244,237,226,.85) 0%, rgba(244,237,226,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      ...pad,
      marginBottom: 16
    }
  }, React.createElement("button", {
    "aria-label": "Prethodna",
    onClick: () => setPk((pk + 2) % 3),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: 30,
      height: 30,
      display: 'grid',
      placeItems: 'center',
      fontSize: 20,
      color: 'rgba(29,26,23,.6)'
    }
  }, "\u2039"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7
    }
  }, [0, 1, 2].map(i => React.createElement("button", {
    key: i,
    "aria-label": 'Fotografija ' + (i + 1),
    onClick: () => setPk(i),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: pk === i ? 18 : 6,
      height: 6,
      borderRadius: 999,
      background: pk === i ? 'rgba(29,26,23,.7)' : 'rgba(29,26,23,.28)',
      transition: 'width .3s'
    }
  }))), React.createElement("button", {
    "aria-label": "Slede\u0107a",
    onClick: () => setPk((pk + 1) % 3),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: 30,
      height: 30,
      display: 'grid',
      placeItems: 'center',
      fontSize: 20,
      color: 'rgba(29,26,23,.6)'
    }
  }, "\u203A")), React.createElement(MFrame, {
    style: {
      margin: '0 34px'
    }
  }, React.createElement("img", {
    src: A + PK[pk][0],
    alt: "Poludrago kamenje",
    style: {
      width: '100%',
      aspectRatio: '501/631',
      objectFit: 'cover',
      objectPosition: PK[pk][1],
      display: 'block'
    }
  })), React.createElement("div", {
    style: {
      position: 'relative',
      margin: '30px 18px 0',
      padding: '40px 26px 48px',
      borderRadius: '48% 52% 46% 40% / 26% 28% 34% 30%',
      boxShadow: '0 0 28px 14px rgba(246,239,229,.55)',
      background: 'linear-gradient(135deg,rgba(255,255,255,.55),rgba(246,239,229,.32))',
      backdropFilter: 'blur(14px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(14px) saturate(1.25)'
    }
  }, React.createElement("div", {
    style: {
      padding: '10px 14px'
    }
  }, React.createElement(Kicker, null, "Magija kristala"), React.createElement("h2", {
    style: {
      ...H2,
      margin: '8px 0 12px'
    }
  }, "Poludrago kamenje"), React.createElement("p", {
    style: {
      ...P,
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Kristali su nepromenljive strukture, zbog \u010Dega emituju konstantnu stabilnu frekvenciju. Kada nosimo kristale oni podi\u017Eu na\u0161u energiju. Jaspis Dalmatinac energija \u010Diste radosti."), React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, React.createElement(Cta, {
    onClick: () => go('kristali')
  }, "Kristali"))))), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(Marquee, {
    height: 76,
    items: [{
      text: 'Ahat'
    }, {
      text: 'Turmalin',
      script: true
    }, {
      text: 'Citrin'
    }, {
      text: 'Aventurin',
      script: true
    }, {
      text: 'Gorski kristal'
    }]
  }), React.createElement("img", {
    src: A + 'usta-ciklama.png',
    alt: "",
    style: {
      position: 'absolute',
      right: 16,
      top: -60,
      width: 96,
      zIndex: 4,
      transform: 'rotate(-8deg)'
    }
  })), React.createElement(MLeo, {
    op: .5,
    style: {
      background: 'var(--sedef)',
      padding: '50px 0 56px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 90% 50% at 40% 25%,rgba(246,239,229,.94),rgba(246,239,229,0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      ...pad
    }
  }, React.createElement(Kicker, null, "Registruj se"), React.createElement("h2", {
    style: {
      ...H2,
      margin: '10px 0 12px'
    }
  }, "Nismo dosadni"), React.createElement("p", {
    style: {
      ...P,
      margin: '0 0 22px',
      textWrap: 'balance'
    }
  }, "Registruj se i na poklon dobija\u0161 ", React.createElement("b", null, "Self-love dnevnik"), ", 31 dan male, svakodnevne prakse ljubavi prema sebi."), React.createElement("div", {
    className: "mj-mail mj-mail-ink mj-mail-gold",
    style: {
      display: 'block',
      borderRadius: 12,
      '--mail-1': 'rgba(255,255,255,.26)',
      '--mail-2': 'rgba(255,255,255,.12)',
      '--mail-btn': 'rgba(255,255,255,.34)',
      '--mail-btn-hover': 'rgba(255,255,255,.55)',
      '--hairline-strong': 'rgba(197,160,89,.7)',
      '--shadow-mailbar': '0 10px 30px rgba(0,0,0,.08)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
      margin: '0 0 40px'
    }
  }, React.createElement(MailBar, {
    onSubmit: window.mjSubscribe,
    thanks: "Hvala, ma\u010Dkice! Proveri mejl.",
    label: "SIGN UP",
    catSrc: A + 'macka-sanduce.png'
  })), React.createElement(Cta, {
    kind: "link",
    onClick: () => go('o-nama')
  }, "O nama")), React.createElement(MFrame, {
    style: {
      margin: '44px 34px 0'
    }
  }, React.createElement("img", {
    src: A + 'devojka-cela.jpg',
    alt: "Devojka u crnom kaputu sa heklanom torbicom, belim \u010Darapama i salonkama",
    style: {
      width: '100%',
      aspectRatio: '9/10',
      objectFit: 'cover',
      objectPosition: '50% 96%',
      display: 'block'
    }
  }))), window.MJSreca && React.createElement(window.MJSreca, {
    mob: true
  }));
}
function FooterM({
  astro
}) {
  const {
    SocialLinks
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  const tx = astro ? '#F2E6CC' : '#1D1A17';
  return React.createElement("footer", {
    id: "kontakt"
  }, React.createElement("div", {
    style: {
      position: 'relative',
      padding: (astro ? '46px' : '170px') + ' 24px 40px',
      background: astro ? '#58565A' : 'url(' + A + 'footer-turmalin.jpg) center top/cover',
      color: tx,
      display: 'grid',
      gap: 18,
      justifyItems: 'start'
    }
  }, !astro && React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(244,237,226,.55),rgba(244,237,226,.25))'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 4
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1
    }
  }, "Mnjauprrrrr"), React.createElement("div", {
    style: {
      font: '700 18px/1.2 Inter,sans-serif',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "Nakit za ma\u010Dkice"), React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "Ili jesi ili nisi ma\u010Dka")), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(SocialLinks, {
    direction: "row",
    gap: 12
  })), React.createElement("a", {
    href: "mailto:marina.rakic1806@gmail.com",
    style: {
      position: 'relative',
      color: tx,
      fontSize: 14,
      textDecoration: 'underline',
      textUnderlineOffset: 4
    }
  }, "marina.rakic1806@gmail.com"), React.createElement("img", {
    src: A + 'maca-providna.png',
    alt: "",
    style: {
      position: 'absolute',
      right: 22,
      bottom: 26,
      width: 64
    }
  })), React.createElement("div", {
    style: {
      background: '#1B1815',
      color: '#F3E9DA',
      fontSize: 12,
      padding: '14px 24px',
      letterSpacing: '.06em'
    }
  }, "\xA9 Mnjauprrrrr"));
}
const MJ_CELIK = {
  "items": [["Apsolutna bezbednost za vašu kožu", "Zbog svojih antialergijskih svojstava, ovaj materijal ne izaziva iritacije i potpuno je bezbedan za osetljivu kožu, pružajući vam maksimalnu udobnost tokom celog dana."], ["Bezbrižno nošenje u svim uslovima", "Visoka otpornost na vodu, rđu i oksidaciju znači da vaš omiljeni nakit neće ostavljati tamne ili zelene tragove na koži, niti gubiti svoj prvobitni sjaj pri kontaktu sa vlagom."], ["Dugovečnost srebrnog sjaja", "Ukoliko izaberete komad u njegovoj prirodnoj, srebrnoj nijansi, on za razliku od klasičnog srebra nikada neće potamneti niti promeniti boju, zadržavajući svoj prefinjeni izgled godinama."], ["Prefinjena estetika pozlate", "Komadi sa nanosom žutog ili roze zlata pružaju vrhunski luksuzan izgled. Važno je znati da trajnost ove pozlate (koja može trajati od nekoliko meseci do nekoliko godina) direktno zavisi od učestalosti nošenja i izloženosti vodi, što svakom komadu daje lični pečat vašeg stila života."]],
  "dur": "Izuzetna izdržljivost ovog materijala – koji je zbog svoje sterilnosti i otpornosti našao primenu u medicini, vrhunskom kulinarstvu i industriji – čini ga idealnim za nakit koji zahteva minimalno angažovanje oko održavanja.",
  "care": "Da biste svom komadu vratili refleksiju i visoki sjaj, dovoljno je da sprovedete jednostavan ritual nege. Operite nakit u blagom rastvoru sapunice i mlake vode, a zatim ga nežno prebrišite i potpuno osušite mekanom pamučnom tkaninom."
};
function MCelik() {
  const {
    Kicker
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const P = {
    ...MJ_P,
    fontSize: 17,
    textWrap: 'pretty'
  };
  return React.createElement("section", {
    style: {
      position: 'relative',
      padding: '54px 20px 60px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 90% 60% at 40% 40%, rgba(244,237,226,.92) 0%, rgba(244,237,226,0) 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(Kicker, null, "Jak kao"), React.createElement("h2", {
    style: {
      ...MJ_H2,
      fontSize: 28,
      letterSpacing: '.06em',
      margin: '6px 0 26px'
    }
  }, "Hirur\u0161ki \u010Delik"), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, MJ_CELIK.items.map(([b, t]) => React.createElement("div", {
    key: b,
    style: {
      padding: '20px 20px',
      background: 'rgba(255,255,255,.26)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
      border: '1px solid rgba(255,255,255,.65)',
      boxShadow: '0 16px 36px rgba(0,0,0,.06)'
    }
  }, React.createElement("p", {
    style: {
      ...P,
      margin: 0
    }
  }, React.createElement("b", null, b, ":"), " ", t)))), React.createElement("p", {
    style: {
      ...P,
      margin: '28px 0 0'
    }
  }, MJ_CELIK.dur), React.createElement("h3", {
    style: {
      font: '700 15px/1.3 Inter,sans-serif',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      margin: '28px 0 10px'
    }
  }, "Ritual i nega"), React.createElement("p", {
    style: {
      ...P,
      margin: 0
    }
  }, MJ_CELIK.care)));
}
function NakitM({
  go,
  add,
  cat
}) {
  const {
    Kicker,
    ProductCard
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  const isK = typeof cat === 'string' && cat.startsWith('kamen:');
  const kam = isK ? cat.slice(6) : null;
  const kw = isK ? kam.toLowerCase().replace(/crni /g, '').split(/\s+i\s+/).map(x => x.trim().slice(0, 5)) : [];
  const [c, setC] = React.useState(isK ? null : cat || null);
  const gridRef = React.useRef(null);
  const scroll = () => setTimeout(() => {
    const el = gridRef.current;
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 70,
      behavior: 'smooth'
    });
  }, 80);
  React.useEffect(() => {
    setC(isK ? null : cat || null);
    if (cat) scroll();
  }, [cat]);
  const list = c ? MJ_PRODUCTS.filter(p => p.cat.includes(c)) : isK ? MJ_PRODUCTS.filter(p => kw.some(k => (p.stone || '').toLowerCase().includes(k))) : [];
  const lbl = c || kam;
  return React.createElement(MLeo, {
    op: .3,
    style: {
      background: 'linear-gradient(90deg, #F6EFE5 0%, var(--sedef-2) 55%, #E6D8C4 100%)'
    }
  }, React.createElement("section", {
    style: {
      position: 'relative',
      padding: '36px 20px 30px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 80% 40% at 25% 12%, rgba(244,237,226,.9) 0%, rgba(244,237,226,0) 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(Kicker, null, "Nakit za ma\u010Dkice"), React.createElement("h1", {
    style: {
      ...MJ_H1,
      fontSize: 36,
      margin: '8px 0 24px'
    }
  }, "Nakit"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 14
    }
  }, [['Ogrlice', 'komplet.jpg'], ['Narukvice', 'turmalin-set.jpg'], ['Prstenje', 'ahat-jarac.jpg'], ['Minđuše', 'p-mindjuse-visece.jpg']].map(([n, f]) => React.createElement("button", {
    key: n,
    onClick: () => {
      setC(n);
      scroll();
    },
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'grid',
      gap: 8
    }
  }, React.createElement("div", {
    style: {
      padding: 7,
      border: '1px solid rgba(197,160,89,.7)',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)'
    }
  }, React.createElement(window.MJVid, {
    vid: null
  }, React.createElement("img", {
    src: A + (n === 'Ogrlice' ? 'p-ogrlica-suza.jpg' : f),
    alt: n,
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      display: 'block'
    }
  }))), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.1,
      textDecoration: 'underline',
      textDecorationThickness: 1,
      textUnderlineOffset: 5,
      textDecorationColor: c === n ? '#C5A059' : 'currentColor'
    }
  }, n)))))), lbl && React.createElement("section", {
    ref: gridRef,
    style: {
      position: 'relative',
      padding: '24px 16px 30px',
      ...MJ_GLASS,
      background: 'rgba(244,237,226,.6)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      margin: '0 4px 18px'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 42,
      lineHeight: 1
    }
  }, lbl), React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-70)'
    }
  }, list.length, " komada")), list.length ? React.createElement("div", {
    className: "mj-pgrid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 14
    }
  }, list.map(p => React.createElement("div", {
    key: p.id,
    style: {
      padding: 7,
      border: '1px solid rgba(197,160,89,.7)',
      minWidth: 0
    }
  }, React.createElement(ProductCard, {
    image: p.img,
    name: p.name,
    stone: p.stone,
    price: rsd(p.price),
    badge: p.badge,
    onAdd: p.price == null ? () => go('proizvod', p.id + '|' + lbl) : () => add(p),
    onOpen: () => go('proizvod', p.id + '|' + (c || cat))
  })))) : React.createElement("div", {
    style: {
      padding: '30px 0',
      textAlign: 'center',
      display: 'grid',
      justifyItems: 'center',
      gap: 10
    }
  }, React.createElement("img", {
    src: A + 'macka-sanduce.png',
    alt: "",
    style: {
      width: 160
    }
  }), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 42
    }
  }, "Uskoro\u2026"))), React.createElement(MCelik, null));
}
function ProizvodM({
  go,
  add,
  id
}) {
  const {
    Kicker,
    Badge,
    QuantityStepper,
    Button,
    ProductCard
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const [pid, from0] = String(id || '').split('|');
  const p = MJ_PRODUCTS.find(x => x.id === pid) || MJ_PRODUCTS[0];
  const from = from0 && from0 !== 'undefined' && from0 !== 'null' ? from0 : p.cat[0];
  const fromLbl = from.startsWith('kamen:') ? from.slice(6) : from;
  const [q, setQ] = React.useState(1);
  const [o, setO] = React.useState(0);
  React.useEffect(() => {
    setO(0);
    setQ(1);
    window.scrollTo(0, 0);
  }, [id]);
  const price = p.opts ? p.opts[o][1] : p.price;
  const addP = () => add(p.opts ? {
    ...p,
    id: p.id + '-' + o,
    name: p.name + ' · ' + p.opts[o][0],
    price
  } : p, q);
  return React.createElement(MLeo, {
    op: .3,
    style: {
      background: 'linear-gradient(90deg, #F6EFE5 0%, var(--sedef-2) 55%, #E6D8C4 100%)',
      padding: '20px 20px 50px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 90% 50% at 50% 55%, rgba(244,237,226,.92) 0%, rgba(244,237,226,0) 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 18
    }
  }, React.createElement("a", {
    onClick: () => go('nakit', from),
    style: {
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, "\u2190 Nazad na ", fromLbl), React.createElement("div", {
    style: {
      padding: 9,
      border: '1px solid rgba(197,160,89,.7)',
      boxShadow: '0 16px 36px rgba(0,0,0,.12)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      gap: 8,
      scrollbarWidth: 'none'
    }
  }, (p.imgs || [p.img]).map((u, k) => React.createElement("img", {
    key: k,
    src: u,
    alt: p.name + (k ? ' ' + (k + 1) : ''),
    style: {
      display: 'block',
      flex: '0 0 100%',
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      scrollSnapAlign: 'start'
    }
  })))), p.imgs && p.imgs.length > 1 && React.createElement("div", {
    style: {
      marginTop: -8,
      fontSize: 11,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-70)',
      textAlign: 'center'
    }
  }, "Prevuci \u2192 izbor lanca"), React.createElement("div", null, React.createElement(Kicker, null, p.stone), React.createElement("h1", {
    style: {
      ...MJ_H1,
      fontSize: 30,
      margin: '6px 0 0'
    }
  }, p.name)), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, p.cat.map(k => React.createElement(Badge, {
    key: k,
    tone: "krem"
  }, k)), p.el && React.createElement(Badge, {
    tone: "astro"
  }, p.el), p.tag && React.createElement(Badge, {
    tone: "krem"
  }, p.tag), p.badge && React.createElement(Badge, {
    tone: "gold"
  }, p.badge)), React.createElement("div", {
    style: {
      font: '600 22px/1 Inter'
    }
  }, rsd(price)), React.createElement("p", {
    style: {
      ...MJ_P,
      fontSize: 17,
      margin: 0
    }
  }, p.optOpis && p.optOpis[o] || p.opis || 'Hirurški čelik i poludragi kamen.'), p.opts && React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, p.opts.map((x, i) => React.createElement("button", {
    key: i,
    onClick: () => setO(i),
    style: {
      all: 'unset',
      cursor: 'pointer',
      padding: '11px 16px',
      borderRadius: 999,
      fontSize: 13,
      border: '1px solid ' + (o === i ? '#C5A059' : 'var(--hairline-strong)'),
      background: o === i ? 'rgba(197,160,89,.12)' : '#fff'
    }
  }, x[0], " \xB7 ", rsd(x[1])))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement(QuantityStepper, {
    value: q,
    onChange: setQ
  }), price == null ? React.createElement(Button, {
    size: "sm",
    onClick: () => {
      location.href = 'mailto:marina.rakic1806@gmail.com?subject=' + encodeURIComponent('Upit: ' + p.name);
    }
  }, "Po\u0161alji upit") : React.createElement(Button, {
    size: "sm",
    onClick: addP
  }, "Dodaj u korpu")), React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hairline-strong)'
    }
  }, [['Materijal', p.mat || 'Hirurški čelik'], ['Kamen', p.kamen || p.stone], ...(p.info || []), ...(p.el ? [['Element', p.el]] : [])].map(([k, v]) => React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '110px 1fr',
      gap: 10,
      padding: '12px 0',
      borderBottom: '1px solid var(--hairline-strong)',
      fontSize: 14
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, k), React.createElement("span", null, v)))), React.createElement("h2", {
    style: {
      margin: '30px 0 0',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1
    }
  }, "Ma\u010Dkice su uzele i ovo"), React.createElement("div", {
    className: "mj-pgrid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 14
    }
  }, mjRel(p).map(x => React.createElement("div", {
    key: x.id,
    style: {
      padding: 7,
      border: '1px solid rgba(197,160,89,.7)',
      minWidth: 0
    }
  }, React.createElement(ProductCard, {
    image: x.img,
    name: x.name,
    stone: x.stone,
    price: rsd(x.price),
    onAdd: () => go('proizvod', x.id + '|' + from),
    onOpen: () => go('proizvod', x.id + '|' + from)
  }))))));
}
Object.assign(window, {
  MobileNav,
  HomeM,
  FooterM,
  NakitM,
  ProizvodM
});
function ONamaM({
  go
}) {
  const {
    Marquee
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  const G = {
    background: 'rgba(255,255,255,.3)',
    backdropFilter: 'blur(16px) saturate(1.25)',
    WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
    boxShadow: '0 16px 36px rgba(0,0,0,.12)'
  };
  const T = ['S obzirom da je moje Sunce u znaku Blizanaca, slobodno se može reći „o nama". Blizanac sam, a podznak mi je u znaku Vage – dupli vazduh, mislilac.', 'Mesec, moja duša je u Devici. Imam 4 planete u Devici, tako da nisam klasičan vetropirasti Blizanac.', 'Uređivanje, kreiranje, učenje i knjige\nsu moja velika strast i pasija.', 'Simboli i značenja su ono što volim. Nakit koji kreiram govori umesto mene.'];
  return React.createElement("div", null, React.createElement(MFrame, {
    style: {
      margin: '26px 20px 0'
    }
  }, React.createElement("img", {
    src: A + 'selfie.jpg',
    alt: "Marina se smeje i slika selfi",
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  })), React.createElement("div", {
    style: {
      padding: '34px 22px 40px',
      color: '#111'
    }
  }, React.createElement("h1", {
    style: {
      margin: '0 0 18px',
      font: '700 34px/1.1 Inter,sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, "O nama"), T.map((t, i) => React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 12px',
      fontSize: 17,
      lineHeight: 1.6,
      textWrap: 'balance',
      whiteSpace: 'pre-line'
    }
  }, t)), React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1
    }
  }, "U\u017Eivaj.")), React.createElement(Marquee, {
    height: 64,
    items: [{
      text: 'Vatra',
      script: true
    }, {
      text: 'Zemlja'
    }, {
      text: 'Vazduh',
      script: true
    }, {
      text: 'Voda'
    }]
  }), React.createElement("div", {
    style: {
      padding: '44px 20px 50px',
      color: '#111'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Psihoskop \xB7 e-knjige"), React.createElement("h2", {
    style: {
      margin: '0 0 14px',
      font: '700 28px/1.15 Inter,sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, "Pro\u010Ditaj svoj natal"), React.createElement("p", {
    style: {
      margin: '0 0 30px',
      fontSize: 16,
      lineHeight: 1.6,
      textWrap: 'pretty'
    }
  }, "Knjige i simboli su moja velika ljubav, pa sam spojila jedno i drugo i napravila Astro e-knjigu samo za tebe. Uz nju \u0107e\u0161 mo\u0107i sama da \u010Dita\u0161 svoju natalnu kartu, da razume\u0161 svoje ku\u0107e i planete i da vidi\u0161 kako me\u0111usobno razgovaraju."), React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, MJ_EBOOKS.map((b, i) => {
    const ln = i === 0 ? '#7FB394' : '#E6A9C7';
    return React.createElement("div", {
      key: b[0],
      style: {
        ...G,
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '112px minmax(0,1fr)',
        gap: 18,
        padding: 18,
        border: '1px solid ' + ln
      }
    }, React.createElement("div", {
      style: {
        alignSelf: 'center',
        aspectRatio: '210/297',
        background: '#58565A',
        border: '1px solid ' + ln,
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
        gap: 5,
        padding: 8,
        boxShadow: '0 12px 26px rgba(0,0,0,.22)',
        transform: 'rotate(' + (i === 0 ? -3 : 3) + 'deg)'
      }
    }, React.createElement("img", {
      src: A + 'astro-natal-zlatni.png',
      alt: "",
      style: {
        width: '78%'
      }
    }), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 1,
        color: '#E8C982'
      }
    }, "Mnjauprrrrr"), React.createElement("span", {
      style: {
        fontSize: 7,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: '#E8C982',
        textAlign: 'center'
      }
    }, b[0])), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        textWrap: 'balance'
      }
    }, b[1]), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-script)',
        fontFamily: 'Inter,sans-serif',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.04em',
        fontSize: 20,
        lineHeight: 1.15,
        textWrap: 'balance'
      }
    }, b[0]), i === 1 && React.createElement("img", {
      src: A + 'maca-providna.png',
      alt: "Ma\u010Dkica",
      style: {
        position: 'absolute',
        right: 12,
        top: -34,
        width: 64,
        animation: 'mj-float 6s ease-in-out infinite',
        pointerEvents: 'none'
      }
    }), React.createElement("span", {
      style: {
        font: '700 22px/1 Inter',
        marginTop: 'auto',
        paddingTop: 12
      }
    }, b[3], " \u20AC"), React.createElement("a", {
      href: 'mailto:marina.rakic1806@gmail.com?subject=' + encodeURIComponent('E-knjiga Psihoskop – ' + b[0]),
      style: {
        marginTop: 14,
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: 30,
        lineHeight: 1.1,
        color: '#111',
        textDecoration: 'underline',
        textDecorationThickness: 1,
        textUnderlineOffset: 4
      }
    }, "\u017Delim e-knjigu")));
  })), React.createElement("div", {
    style: {
      ...G,
      marginTop: 22,
      padding: '18px 20px',
      border: '1px solid rgba(197,160,89,.7)',
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: '6px 14px'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1
    }
  }, "Paket"), React.createElement("span", {
    style: {
      fontSize: 17
    }
  }, "obe e-knjige za ", React.createElement("strong", null, "30 \u20AC")), React.createElement("a", {
    href: 'mailto:marina.rakic1806@gmail.com?subject=' + encodeURIComponent('Psihoskop paket – obe e-knjige'),
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1,
      color: '#111',
      textDecoration: 'underline',
      textDecorationThickness: 1,
      textUnderlineOffset: 4
    }
  }, "\u017Delim obe")), React.createElement("a", {
    onClick: () => go('astro'),
    style: {
      display: 'inline-block',
      marginTop: 30,
      cursor: 'pointer',
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: '#111',
      textDecoration: 'underline',
      textUnderlineOffset: 4
    }
  }, "Saznaj vi\u0161e u Astro kutku")));
}
;// Wheel.jsx
const MJ_PRIZES = [{
  id: 'p10',
  l: ['10%', 'popusta'],
  w: 22,
  pct: 10,
  txt: '10% popusta na nakit'
}, {
  id: 'dost',
  l: ['Besplatna', 'dostava'],
  w: 20,
  ship: true,
  txt: 'Besplatna dostava'
}, {
  id: 'p15',
  l: ['15%', 'popusta'],
  w: 4,
  pct: 15,
  txt: '15% popusta na nakit'
}, {
  id: 'ek',
  l: ['20%', 'na e-knjige'],
  w: 8,
  txt: '20% popusta na e\u2011knjige'
}, {
  id: 'pok',
  l: ['Mali', 'poklon'],
  w: 6,
  txt: 'Mali poklon uz porudžbinu'
}, {
  id: 'p10b',
  l: ['10%', 'popusta'],
  w: 22,
  pct: 10,
  txt: '10% popusta na nakit'
}, {
  id: 'dostb',
  l: ['Besplatna', 'dostava'],
  w: 20,
  ship: true,
  txt: 'Besplatna dostava'
}, {
  id: 'opet',
  l: ['Zavrti', 'opet'],
  w: 10,
  again: true,
  txt: 'Zavrti opet'
}];
const MJ_DAY = 24 * 3600 * 1000;
function mjWheelGet() {
  try {
    const w = JSON.parse(localStorage.getItem('mj-wheel') || 'null');
    if (w && w.prize && Date.now() - w.t > MJ_DAY) return {
      ...w,
      expired: true
    };
    return w;
  } catch (e) {
    return null;
  }
}
function mjWheelPrize() {
  const w = mjWheelGet();
  if (!w || w.expired || !w.prize) return null;
  return {
    ...MJ_PRIZES.find(p => p.id === w.prize),
    t: w.t
  };
}
window.mjWheelPrize = mjWheelPrize;
function mjUsed() {
  try {
    return JSON.parse(localStorage.getItem('mj-wheel-used') || '[]');
  } catch (e) {
    return [];
  }
}
function mjIsUsed(e) {
  return !!e && mjUsed().includes(String(e).trim().toLowerCase());
}
function mjMarkUsed(e) {
  if (!e) return;
  try {
    const u = mjUsed();
    const k = String(e).trim().toLowerCase();
    if (!u.includes(k)) {
      u.push(k);
      localStorage.setItem('mj-wheel-used', JSON.stringify(u));
    }
  } catch (x) {}
}
window.mjIsUsed = mjIsUsed;
(function () {
  const s = window.mjSubscribe;
  if (s && !s.__w) {
    const f = function (e) {
      try {
        localStorage.setItem('mj-email', e);
      } catch (x) {}
      window.dispatchEvent(new Event('mjsub'));
      return s.apply(this, arguments);
    };
    f.__w = 1;
    window.mjSubscribe = f;
  }
})();
function useMjTick() {
  const [, s] = React.useState(0);
  React.useEffect(() => {
    const i = setInterval(() => s(x => x + 1), 1000);
    const r = () => s(x => x + 1);
    window.addEventListener('mjwheel', r);
    window.addEventListener('mjsub', r);
    return () => {
      clearInterval(i);
      window.removeEventListener('mjwheel', r);
      window.removeEventListener('mjsub', r);
    };
  }, []);
}
function mjLeft(t) {
  const ms = Math.max(0, t + MJ_DAY - Date.now());
  const h = Math.floor(ms / 36e5),
    m = Math.floor(ms % 36e5 / 6e4),
    s = Math.floor(ms % 6e4 / 1e3);
  return [h, m, s].map(x => String(x).padStart(2, '0')).join(':');
}
window.mjLeft = mjLeft;
window.useMjTick = useMjTick;
function MJWheel({
  size = 513,
  rot,
  spinning,
  win
}) {
  const A = MJ_A;
  const C = 300,
    R = 258,
    N = 8,
    G = 'rgba(197,160,89,.9)';
  const pt = (a, r) => [C + r * Math.sin(a * Math.PI / 180), C - r * Math.cos(a * Math.PI / 180)];
  const seg = i => {
    const a0 = i * 45,
      a1 = a0 + 45,
      [x0, y0] = pt(a0, R),
      [x1, y1] = pt(a1, R);
    return `M${C},${C} L${x0},${y0} A${R},${R} 0 0 1 ${x1},${y1} Z`;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      maxWidth: '100%',
      aspectRatio: '1/1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '7%',
      borderRadius: '50%',
      backdropFilter: 'blur(3px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(3px) saturate(1.25)',
      background: 'rgba(255,255,255,.06)',
      border: '1px solid rgba(255,255,255,.7)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8), 0 18px 40px rgba(0,0,0,.12)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 600",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible',
      filter: 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "mjLeo",
    patternUnits: "userSpaceOnUse",
    width: "150",
    height: "150"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "150",
    height: "150",
    fill: "#F6EFE5"
  }), /*#__PURE__*/React.createElement("image", {
    href: A + 'leopard-dugme-2.png',
    width: "150",
    height: "150",
    preserveAspectRatio: "xMidYMid slice",
    opacity: ".5"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "mjGl",
    cx: "50%",
    cy: "40%",
    r: "60%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#fff",
    stopOpacity: ".9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#FBF7F0",
    stopOpacity: ".55"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "mjShine",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#C5A059",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".42",
    stopColor: "#C5A059",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".5",
    stopColor: "#FFF3D2",
    stopOpacity: "1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".58",
    stopColor: "#C5A059",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C5A059",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "gradientTransform",
    type: "rotate",
    from: "0 .5 .5",
    to: "360 .5 .5",
    dur: "5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "mjSheen",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#fff",
    stopOpacity: ".55"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".45",
    stopColor: "#fff",
    stopOpacity: ".08"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "mjGold",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#E8C982"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".5",
    stopColor: "#C5A059"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#A2702F"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: C,
    cy: C,
    r: "262",
    fill: "none",
    stroke: G,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: C,
    cy: C,
    r: "262",
    fill: "none",
    stroke: "url(#mjShine)",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      transformOrigin: '300px 300px',
      transform: 'rotate(' + rot + 'deg)',
      transition: spinning ? 'transform 5.4s cubic-bezier(.12,.7,.08,1)' : 'none'
    }
  }, MJ_PRIZES.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: p.id,
    d: seg(i),
    fill: win === i ? 'rgba(232,201,130,.28)' : i % 2 ? 'rgba(255,255,255,.04)' : 'rgba(255,255,255,.14)',
    stroke: G,
    strokeWidth: win === i ? 2.5 : 1.2,
    style: {
      transition: 'fill .6s'
    }
  })), MJ_PRIZES.map((p, i) => {
    const a = i * 45 + 22.5;
    return /*#__PURE__*/React.createElement("g", {
      key: 't' + p.id,
      transform: 'rotate(' + a + ' 300 300)'
    }, /*#__PURE__*/React.createElement("text", {
      x: "300",
      y: "104",
      textAnchor: "middle",
      style: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: /^[0-9−]/.test(p.l[0]) ? 34 : 19,
        letterSpacing: /^[0-9−]/.test(p.l[0]) ? '.02em' : '.08em',
        fill: '#1D1A17'
      }
    }, p.l[0].toUpperCase()), /*#__PURE__*/React.createElement("text", {
      x: "300",
      y: "130",
      textAnchor: "middle",
      style: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: '.16em',
        fill: '#1D1A17'
      }
    }, p.l[1].toUpperCase()));
  })), /*#__PURE__*/React.createElement("circle", {
    cx: C,
    cy: C,
    r: R - 2,
    fill: "none",
    stroke: "rgba(255,255,255,.85)",
    strokeWidth: "1.5",
    style: {
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: C,
    cy: C,
    r: "74",
    fill: "#FBF7F0",
    stroke: G,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("image", {
    href: A + 'maca-providna.png',
    x: "244",
    y: "240",
    width: "112",
    height: "112",
    preserveAspectRatio: "xMidYMid meet"
  }), /*#__PURE__*/React.createElement("image", {
    href: A + 'usta-ciklama.png',
    x: "214",
    y: "10",
    width: "80",
    height: "62",
    transform: "rotate(-9 254 41)",
    preserveAspectRatio: "xMidYMid meet",
    style: {
      filter: 'drop-shadow(0 4px 6px rgba(0,0,0,.18))'
    }
  })));
}
function MJSreca({
  mob
}) {
  const {
    Kicker,
    MailBar,
    Marquee
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const band = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    height: mob ? 76 : undefined,
    items: [{
      text: 'Točak sreće',
      script: true
    }, {
      text: 'Malo ljubavi'
    }, {
      text: 'od mačkice',
      script: true
    }]
  }));
  const A = MJ_A;
  const Cta = window.MJCta;
  useMjTick();
  const [ask, setAsk] = React.useState(false);
  const [rot, setRot] = React.useState(() => {
    const w = mjWheelGet();
    return w && w.rot || 0;
  });
  const [spinning, setSpinning] = React.useState(false);
  const [win, setWin] = React.useState(() => {
    const w = mjWheelGet();
    return w && w.prize && !w.expired ? MJ_PRIZES.findIndex(p => p.id === w.prize) : null;
  });
  const email = (() => {
    try {
      return localStorage.getItem('mj-email');
    } catch (e) {
      return null;
    }
  })();
  const w = mjWheelGet();
  const prize = mjWheelPrize();
  const TEST = !/netlify\.app|pages\.dev|workers\.dev|mnjauprrrrr\./.test(location.hostname);
  const [used, setUsed] = React.useState(false);
  const done = !!(w && w.prize) || !w && mjIsUsed(email);
  const canSpin = !spinning && (TEST || !done && !used);
  const spin = force => {
    if (spinning) return;
    const em = (() => {
      try {
        return localStorage.getItem('mj-email');
      } catch (e) {
        return null;
      }
    })();
    if (force !== true && !em) {
      setAsk(true);
      return;
    }
    if (!TEST && mjIsUsed(em) && !(w && w.again)) {
      setUsed(true);
      setAsk(false);
      return;
    }
    setAsk(false);
    const pool = MJ_PRIZES.map((p, i) => ({
      p,
      i
    })).filter(x => !(w && w.again && x.p.again));
    const tot = pool.reduce((s, x) => s + x.p.w, 0);
    let r = Math.random() * tot,
      pick = pool[0];
    for (const x of pool) {
      r -= x.p.w;
      if (r <= 0) {
        pick = x;
        break;
      }
    }
    const target = 360 - (pick.i * 45 + 22.5) + (Math.random() * 24 - 12);
    const base = rot - rot % 360;
    const nr = base + 360 * 6 + target;
    setWin(null);
    setSpinning(true);
    setRot(nr);
    setTimeout(() => {
      setSpinning(false);
      setWin(pick.i);
      const st = {
        rot: nr % 360,
        t: Date.now(),
        prize: pick.p.again ? null : pick.p.id,
        again: !!pick.p.again
      };
      if (!pick.p.again) mjMarkUsed(em);
      try {
        localStorage.setItem('mj-wheel', JSON.stringify(st));
      } catch (e) {}
      window.dispatchEvent(new Event('mjwheel'));
    }, 5500);
  };
  const H2 = mob ? {
    ...MJ_H2,
    fontSize: 30,
    margin: '10px 0 12px'
  } : {
    ...MJ_H2,
    margin: '10px 0 14px'
  };
  const P = mob ? {
    ...MJ_P,
    fontSize: 17,
    margin: '0 0 40px'
  } : {
    ...MJ_P,
    margin: '0 0 56px'
  };
  const mail = /*#__PURE__*/React.createElement("div", {
    className: "mj-mail mj-mail-ink mj-mail-gold",
    style: {
      display: 'block',
      width: mob ? 'auto' : 440,
      borderRadius: 12,
      '--mail-1': 'rgba(255,255,255,.26)',
      '--mail-2': 'rgba(255,255,255,.12)',
      '--mail-btn': 'rgba(255,255,255,.34)',
      '--mail-btn-hover': 'rgba(255,255,255,.55)',
      '--hairline-strong': 'rgba(197,160,89,.7)',
      '--shadow-mailbar': '0 10px 30px rgba(0,0,0,.08)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)'
    }
  }, /*#__PURE__*/React.createElement(MailBar, {
    onSubmit: e => {
      try {
        localStorage.setItem('mj-email', e);
      } catch (x) {}
      if (!TEST && mjIsUsed(e)) {
        setUsed(true);
        setAsk(false);
        return;
      }
      try {
        window.mjSubscribe && window.mjSubscribe(e);
      } catch (x) {}
      setAsk(false);
      setTimeout(() => spin(true), 300);
    },
    thanks: "Vrti se\u2026",
    label: "ZAVRTI",
    catSrc: A + 'macka-sanduce.png'
  }));
  const btn = /*#__PURE__*/React.createElement("button", {
    onClick: () => spin(),
    disabled: !canSpin,
    style: {
      all: 'unset',
      cursor: canSpin ? 'pointer' : 'default',
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 62,
      padding: '0 44px',
      borderRadius: 999,
      background: 'rgba(255,255,255,.34)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
      border: '1px solid rgba(197,160,89,.7)',
      boxShadow: '0 10px 30px rgba(0,0,0,.08)',
      font: '700 ' + (mob ? 30 : 34) + 'px/1 var(--font-script)',
      paddingTop: 4,
      color: '#1D1A17',
      opacity: canSpin ? 1 : .55
    }
  }, spinning ? 'Vrti se…' : w && w.again ? 'Zavrti opet' : 'Zavrti');
  const res = prize && !spinning ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500
    }
  }, "Tvoja nagrada"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 ' + (mob ? 24 : 30) + 'px/1.15 Inter,sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      textWrap: 'balance'
    }
  }, prize.txt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.5
    }
  }, "\u010Ceka te u korpi. Va\u017Ei za prvu kupovinu jo\u0161 ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, mjLeft(prize.t)))) : null;
  const usedMsg = !TEST && !spinning && !prize && (used || done) ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      maxWidth: 380,
      textWrap: 'pretty'
    }
  }, "Ovaj mejl je ve\u0107 zavrteo to\u010Dak. To\u010Dak sre\u0107e se vrti samo jednom po mejlu, uz prvu prijavu.") : null;
  const reset = TEST && !spinning ? /*#__PURE__*/React.createElement("a", {
    onClick: () => {
      try {
        localStorage.removeItem('mj-wheel');
        localStorage.removeItem('mj-email');
        localStorage.removeItem('mj-wheel-used');
      } catch (e) {}
      setWin(null);
      setAsk(false);
      setUsed(false);
      window.dispatchEvent(new Event('mjwheel'));
    },
    style: {
      cursor: 'pointer',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-70)',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, "\u21BA Probaj ponovo (vidi\u0161 samo ti u pregledu)") : null;
  const ctrl0 = res || usedMsg || (ask && !email ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "Upi\u0161i mejl i to\u010Dak se vrti \u2013 dnevnik ti sti\u017Ee na poklon."), mail) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      justifyItems: mob ? 'center' : 'start'
    }
  }, btn, w && w.again && !spinning && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "Sre\u0107a te prati \u2013 ima\u0161 jo\u0161 jedno okretanje!")));
  const ctrl = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      justifyItems: mob ? 'center' : 'start'
    }
  }, ctrl0, reset);
  const txt = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      display: 'block',
      lineHeight: 1,
      marginTop: 0
    }
  }, "Ma\u010Dkin to\u010Dak sre\u0107e"), /*#__PURE__*/React.createElement("h2", {
    style: H2
  }, mob ? 'Zavrti' : /*#__PURE__*/React.createElement(React.Fragment, null, "Zavrti", /*#__PURE__*/React.createElement("br", null), "i osvoji")), /*#__PURE__*/React.createElement("p", {
    style: mob ? {
      ...P,
      textWrap: 'balance'
    } : P
  }, "Zavrti to\u010Dak i osvoji nagradu. Nagrada va\u017Ei 24 sata i samo za prvu kupovinu."), ctrl);
  const bg = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mj-leopard",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundSize: '260px auto',
      opacity: mob ? .48 : .34,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: mob ? 'radial-gradient(ellipse 90% 50% at 40% 25%,rgba(246,239,229,.94),rgba(246,239,229,0) 100%)' : 'radial-gradient(ellipse 46% 62% at 72% 50%,rgba(246,239,229,.94),rgba(246,239,229,.6) 60%,rgba(246,239,229,0) 100%)'
    }
  }));
  const style = /*#__PURE__*/React.createElement("style", null, '@keyframes mjBulb{0%,100%{opacity:.45}50%{opacity:1}}');
  if (mob) return /*#__PURE__*/React.createElement(React.Fragment, null, band, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--sedef)',
      padding: '50px 20px 36px'
    }
  }, style, bg, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, txt), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(MJWheel, {
    size: 350,
    rot: rot,
    spinning: spinning,
    win: win
  }))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, band, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 820,
      background: 'var(--sedef)',
      overflow: 'hidden'
    }
  }, style, bg, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 880,
      top: 129,
      width: 400,
      zIndex: 3
    }
  }, txt), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 134,
      top: 90,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(MJWheel, {
    size: 620,
    rot: rot,
    spinning: spinning,
    win: win
  }))));
}
window.MJSreca = MJSreca;
window.MJ_PRIZES = MJ_PRIZES;
function MJPrizeChip({
  openCart
}) {
  useMjTick();
  const p = mjWheelPrize();
  if (!p) return null;
  return /*#__PURE__*/React.createElement("a", {
    onClick: openCart,
    style: {
      position: 'fixed',
      left: 16,
      bottom: 16,
      zIndex: 150,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 18px 10px 10px',
      borderRadius: 999,
      background: 'rgba(247,241,232,.8)',
      backdropFilter: 'blur(16px) saturate(1.25)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.25)',
      border: '1px solid rgba(197,160,89,.7)',
      boxShadow: '0 12px 30px rgba(0,0,0,.14)',
      color: '#1D1A17',
      textDecoration: 'none',
      maxWidth: 'calc(100vw - 32px)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MJ_A + 'maca-providna.png',
    alt: "",
    style: {
      width: 34,
      height: 34,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px/1.2 Inter,sans-serif',
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, p.txt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#5C534A'
    }
  }, "Nagrada sa to\u010Dka \xB7 va\u017Ei jo\u0161 ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, mjLeft(p.t)))));
}
window.MJPrizeChip = MJPrizeChip;

