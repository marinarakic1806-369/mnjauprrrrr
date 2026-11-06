/* @ds-bundle: {"format":4,"namespace":"MnjauprrrrrDesignSystem_64b9d1","components":[{"name":"BlobPanel","sourcePath":"components/content/BlobPanel.jsx"},{"name":"BlogCard","sourcePath":"components/content/BlogCard.jsx"},{"name":"ElementBlock","sourcePath":"components/content/ElementBlock.jsx"},{"name":"Cta","sourcePath":"components/core/Cta.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"MailBar","sourcePath":"components/forms/MailBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"NAV_LINKS","sourcePath":"components/navigation/SiteNav.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"},{"name":"SocialLinks","sourcePath":"components/navigation/SocialLinks.jsx"},{"name":"Badge","sourcePath":"components/shop/Badge.jsx"},{"name":"Button","sourcePath":"components/shop/Button.jsx"},{"name":"CollectionCard","sourcePath":"components/shop/CollectionCard.jsx"},{"name":"ElementCard","sourcePath":"components/shop/ElementCard.jsx"},{"name":"FilterChip","sourcePath":"components/shop/FilterChip.jsx"},{"name":"Icon","sourcePath":"components/shop/Icon.jsx"},{"name":"IconButton","sourcePath":"components/shop/IconButton.jsx"},{"name":"ProductCard","sourcePath":"components/shop/ProductCard.jsx"},{"name":"QuantityStepper","sourcePath":"components/shop/QuantityStepper.jsx"}],"sourceHashes":{"components/content/BlobPanel.jsx":"d36b65925bc2","components/content/BlogCard.jsx":"a14f0f3b24a1","components/content/ElementBlock.jsx":"3664a5b8e63c","components/core/Cta.jsx":"956055cdfc7a","components/core/Kicker.jsx":"c6869cf53b23","components/core/Marquee.jsx":"f8b269936533","components/forms/MailBar.jsx":"c2495f6f72b4","components/navigation/SiteFooter.jsx":"6bfa72429a78","components/navigation/SiteNav.jsx":"c82aa35b9f14","components/navigation/SocialLinks.jsx":"7d8ea3126b39","components/shop/Badge.jsx":"17857fd7e6c7","components/shop/Button.jsx":"cab254053c25","components/shop/CollectionCard.jsx":"2152425c081a","components/shop/ElementCard.jsx":"6ea691337343","components/shop/FilterChip.jsx":"2f653f7c720e","components/shop/Icon.jsx":"2bc03692995b","components/shop/IconButton.jsx":"19c24d568329","components/shop/ProductCard.jsx":"4f54e52cf83f","components/shop/QuantityStepper.jsx":"f62de2d52675","ui_kits/website/Home.jsx":"fd64147676fc","ui_kits/website/Pages.jsx":"c05ccf01d93b","ui_kits/website/Shop.jsx":"125fe9f1f4c3","ui_kits/website/content.js":"e0fdf2c1eacc","ui_kits/website/data.js":"4c45d5048bcd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MnjauprrrrrDesignSystem_64b9d1 = window.MnjauprrrrrDesignSystem_64b9d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BlobPanel.jsx
try { (() => {
function BlobPanel({
  blobSrc,
  children,
  width = 560,
  height = 458,
  padding = '94px 96px 0',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      boxSizing: 'border-box',
      padding,
      background: 'url(' + blobSrc + ') center/100% 100% no-repeat',
      filter: 'var(--shadow-blob)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { BlobPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BlobPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/ElementBlock.jsx
try { (() => {
function ElementBlock({
  name,
  text,
  quote,
  signs
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 64,
      lineHeight: 1,
      color: '#fff'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      fontSize: 14.4,
      lineHeight: 1.55,
      opacity: .93
    }
  }, text), quote && /*#__PURE__*/React.createElement("em", {
    style: {
      display: 'block',
      color: 'var(--ljub-em)',
      margin: '10px 0',
      fontSize: 14.4
    }
  }, quote), signs && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.4,
      fontWeight: 700,
      opacity: .93
    }
  }, signs));
}
Object.assign(__ds_scope, { ElementBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ElementBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Cta.jsx
try { (() => {
function Cta({
  children,
  href,
  onClick,
  kind = 'plain',
  tone = 'ink',
  size,
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const click = e => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };
  if (kind === 'link') {
    const s = size || 44;
    return /*#__PURE__*/React.createElement("a", {
      href: href || '#',
      onClick: click,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: 'inline-block',
        color: tone === 'ink' ? '#000' : 'var(--krem)',
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: s,
        lineHeight: 1,
        letterSpacing: h ? '.05em' : '.02em',
        textDecoration: 'underline',
        textDecorationThickness: '1px',
        textUnderlineOffset: Math.round(s * .16),
        opacity: h ? .65 : 1,
        transition: 'opacity .3s,letter-spacing .3s',
        cursor: 'pointer',
        ...style
      }
    }, children);
  }
  const s = size || 34;
  const TILE = Math.round(s * 1.6);
  return /*#__PURE__*/React.createElement("a", {
    className: kind === 'pill' ? 'mj-leopard' : undefined,
    href: href || '#',
    onClick: click,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: Math.round(s * 1.55),
      padding: '4px ' + Math.round(s * .85) + 'px 0',
      borderRadius: 999,
      backgroundColor: 'var(--sedef)',
      backgroundSize: TILE + 'px',
      color: 'var(--ink)',
      textDecoration: 'none',
      border: '1px solid ' + (h ? 'var(--zlato)' : 'rgba(29,26,23,.16)'),
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: s,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      boxShadow: h ? '0 10px 22px rgba(60,40,20,.20),inset 0 1px 0 rgba(255,255,255,.7)' : '0 6px 14px rgba(60,40,20,.12),inset 0 1px 0 rgba(255,255,255,.7)',
      transform: p ? 'scale(.97)' : h ? 'translateY(-1px)' : 'none',
      transition: 'border-color .3s,box-shadow .3s,transform .15s',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Cta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Cta.jsx", error: String((e && e.message) || e) }); }

// components/content/BlogCard.jsx
try { (() => {
function BlogCard({
  image,
  kicker,
  title,
  excerpt,
  cta = 'Pročitaj',
  onOpen
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'stretch',
      textDecoration: 'none',
      color: '#000',
      background: 'var(--blog-card)',
      boxShadow: 'var(--shadow-card)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      minHeight: 340,
      objectFit: 'cover',
      objectPosition: '60% 30%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--ink-70)'
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 14px',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 34,
      letterSpacing: '.08em',
      lineHeight: 1.15,
      color: '#000'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 14,
      lineHeight: 1.7,
      fontWeight: 500
    }
  }, excerpt), /*#__PURE__*/React.createElement(__ds_scope.Cta, {
    style: {
      marginTop: 10
    },
    onClick: onOpen
  }, cta)));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function Kicker({
  children,
  tone = 'muted',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-kick)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: tone === 'krem' ? 'var(--krem)' : tone === 'ink' ? 'var(--ink)' : 'var(--ink-70)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
function Marquee({
  items = [],
  transparent = false,
  height = 84,
  scriptSize = 60,
  capsSize = 27,
  gap = 70,
  duration = 34,
  style
}) {
  const [p, setP] = React.useState(false);
  const run = k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flex: 'none',
      gap,
      paddingRight: gap,
      animation: 'mj-marquee ' + duration + 's linear infinite',
      animationPlayState: p ? 'paused' : 'running',
      color: 'rgba(29,26,23,.85)'
    }
  }, [...items, ...items].map((it, i) => it.script ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: scriptSize,
      lineHeight: 1
    }
  }, it.text) : /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: capsSize,
      letterSpacing: '.08em'
    }
  }, it.text)));
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    onMouseEnter: () => setP(true),
    onMouseLeave: () => setP(false),
    style: {
      position: 'relative',
      zIndex: 3,
      height,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      background: transparent ? 'transparent' : 'var(--glass)',
      backdropFilter: transparent ? 'none' : 'blur(14px)',
      WebkitBackdropFilter: transparent ? 'none' : 'blur(14px)',
      borderTop: transparent ? 0 : '1px solid var(--glass-border)',
      ...style
    }
  }, run('a'), run('b'));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/forms/MailBar.jsx
try { (() => {
function MailBar({
  catSrc,
  label = 'SIGN IN',
  placeholder = 'Email',
  thanks = 'Hvala! Javićemo se uskoro.',
  onSubmit,
  style
}) {
  const [v, setV] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (!v.includes('@')) return;
      setMsg(thanks);
      setV('');
      onSubmit && onSubmit(v);
    },
    style: {
      display: 'flex',
      width: 681,
      maxWidth: '100%',
      height: 62,
      border: '1px solid var(--hairline-strong)',
      background: 'linear-gradient(180deg,var(--mail-1),var(--mail-2))',
      boxShadow: 'var(--shadow-mailbar)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: v,
    onChange: e => setV(e.target.value),
    placeholder: placeholder,
    "aria-label": "Email",
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      background: 'transparent',
      padding: '0 18px',
      font: '500 12px Inter,sans-serif',
      letterSpacing: '.18em',
      color: 'var(--ink)',
      textTransform: 'uppercase',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Prijavi se",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      flex: 'none',
      width: 176,
      border: 0,
      borderLeft: '1px solid var(--hairline-strong)',
      background: h ? 'var(--mail-btn-hover)' : 'var(--mail-btn)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      padding: '3px 8px 4px',
      cursor: 'pointer',
      transition: 'background .3s',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 7.5px Inter,sans-serif',
      letterSpacing: '.22em',
      color: 'var(--ink)',
      lineHeight: 1
    }
  }, label), catSrc && /*#__PURE__*/React.createElement("img", {
    src: catSrc,
    alt: "Ma\u010Dka viri iz sandu\u010Deta",
    style: {
      width: '100%',
      flex: 1,
      minHeight: 0,
      objectFit: 'contain'
    }
  }))), msg && /*#__PURE__*/React.createElement("p", {
    role: "status",
    style: {
      margin: '8px 0 0',
      textAlign: 'center',
      fontSize: 12.8,
      color: 'var(--zlato-tekst)'
    }
  }, msg));
}
Object.assign(__ds_scope, { MailBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/MailBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteNav.jsx
try { (() => {
const NAV_LINKS = [['o-nama', 'O Nama'], ['nakit', 'Nakit'], ['astro', 'Astro'], ['blog', 'Blog'], ['kontakt', 'Kontakt'], ['kristali', 'Kristali']];
function SiteNav({
  logoSrc,
  active,
  onNavigate,
  links = NAV_LINKS,
  style
}) {
  const [h, setH] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 90,
      padding: '0 6%',
      background: 'var(--glass)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--hairline)',
      boxShadow: 'var(--shadow-nav)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate && onNavigate('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      flex: 'none'
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Logo Mnjauprrrrr",
    style: {
      width: 58,
      height: 58,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1,
      color: 'var(--ink)'
    }
  }, "Mnjauprrrrr")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 37,
      flex: 'none'
    }
  }, links.map(([id, label]) => {
    const on = active === id;
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      onClick: () => onNavigate && onNavigate(id),
      onMouseEnter: () => setH(id),
      onMouseLeave: () => setH(null),
      style: {
        position: 'relative',
        padding: '6px 0',
        whiteSpace: 'nowrap',
        flex: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: 12.5,
        fontWeight: 600,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: on ? 'var(--zlato-tamno)' : 'var(--ink)'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 1,
        width: on || h === id ? '100%' : 0,
        background: 'var(--zlato)',
        transition: 'width .3s'
      }
    }));
  })));
}
Object.assign(__ds_scope, { NAV_LINKS, SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SocialLinks.jsx
try { (() => {
const P = {
  tiktok: 'M16.6 3c.3 2.3 1.7 3.9 3.9 4.1v3.1c-1.4 0-2.7-.4-3.9-1.2v6.2c0 3.3-2.5 5.8-5.7 5.8A5.7 5.7 0 0 1 5.3 15c0-3.2 2.6-5.8 5.9-5.6v3.2c-1.3-.2-2.7.8-2.7 2.3 0 1.3 1 2.4 2.4 2.4 1.5 0 2.5-1.1 2.5-2.6V3h3.2z',
  instagram: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.3-3.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z',
  facebook: 'M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-1 .4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.2v2.7H7.7v3.3h2.7V22h3.1z',
  pinterest: 'M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.1c0 .2-.1.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.6 2.5c-.2.9-.9 2-1.3 2.7A10 10 0 1 0 12 2z'
};
const HREF = {
  tiktok: 'https://www.tiktok.com/@mnjauprrrrr',
  instagram: 'https://www.instagram.com/mnjauprrrrr',
  facebook: 'https://www.facebook.com/share/1CaxCXrf5x/?mibextid=wwXIfr',
  pinterest: 'https://www.pinterest.com/marinar369/'
};
function SocialLinks({
  size = 56,
  gap = 17,
  direction = 'column',
  networks = ['tiktok', 'instagram', 'facebook', 'pinterest']
}) {
  const [h, setH] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction,
      gap
    }
  }, networks.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: HREF[n],
    target: "_blank",
    rel: "noopener",
    "aria-label": n,
    onMouseEnter: () => setH(n),
    onMouseLeave: () => setH(null),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: h === n ? 'var(--zlato)' : 'linear-gradient(145deg,var(--social-1),var(--social-2))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-social)',
      transform: h === n ? 'translateX(6px) scale(1.06)' : 'none',
      transition: 'transform .3s,background .3s'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: '46%',
      height: '46%',
      fill: '#111'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: P[n]
  })))));
}
Object.assign(__ds_scope, { SocialLinks });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SocialLinks.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  background,
  catSrc,
  variant = 'turmalin',
  email = 'marina.rakic1806@gmail.com',
  year = 2026
}) {
  const t = variant === 'turmalin';
  const H = t ? 947 : 901;
  return /*#__PURE__*/React.createElement("footer", {
    id: "kontakt"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: H,
      background: 'var(--zalfija) url(' + background + ') center top/' + (t ? '100% 100%' : 'cover'),
      color: '#111'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      top: 610
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SocialLinks, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 130,
      top: 598
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 76,
      lineHeight: 1,
      color: 'var(--ink-70)',
      marginLeft: '-.16em'
    }
  }, "Mnjauprrrrr"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '6px 0 8px',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 40,
      letterSpacing: '.08em',
      lineHeight: 1.15,
      color: 'var(--ink-70)'
    }
  }, "Nakit za", /*#__PURE__*/React.createElement("br", null), "ma\u010Dkice"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ink-70)'
    }
  }, "Ili jesi ili nisi ma\u010Dka")), catSrc && /*#__PURE__*/React.createElement("img", {
    src: catSrc,
    alt: "Ma\u010Dkica sa nao\u010Darama",
    style: {
      position: 'absolute',
      left: t ? 135 : undefined,
      right: t ? undefined : 60,
      top: t ? 462 : 84,
      width: t ? 120 : 190,
      animation: 'mj-float 6s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: t ? 900 : 846,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-70)',
      textDecoration: 'none',
      letterSpacing: '.04em',
      whiteSpace: 'nowrap'
    }
  }, email)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pravo)',
      color: 'var(--pravo-tekst)',
      textAlign: 'center',
      padding: 16,
      fontSize: 11.2,
      letterSpacing: '.18em',
      textTransform: 'uppercase'
    }
  }, "\xA9 ", year, " Mnjauprrrrr"));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/shop/Badge.jsx
try { (() => {
const T = {
  ink: ['var(--ink)', '#fff'],
  gold: ['var(--zlato)', 'var(--ink)'],
  krem: ['var(--sedef-2)', 'var(--ink)'],
  astro: ['var(--ljub)', '#fff'],
  turm: ['var(--turm)', 'var(--ink)'],
  white: ['#fff', 'var(--ink)']
};
function Badge({
  children,
  tone = 'ink',
  style
}) {
  const [bg, fg] = T[tone] || T.ink;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 10px',
      borderRadius: 999,
      background: bg,
      color: fg,
      font: '600 10px/1 var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/Badge.jsx", error: String((e && e.message) || e) }); }

// components/shop/Button.jsx
try { (() => {
const SZ = {
  sm: {
    h: 38,
    px: 20,
    s: 26,
    c: 11
  },
  md: {
    h: 48,
    px: 28,
    s: 32,
    c: 12
  },
  lg: {
    h: 58,
    px: 36,
    s: 38,
    c: 13
  }
};
const V = {
  leopard: ['var(--sedef)', 'var(--ink)', 'rgba(29,26,23,.16)', 'var(--sedef)', 'var(--ink)'],
  primary: ['var(--ink)', '#fff', 'var(--ink)', '#3a3631', '#fff'],
  gold: ['var(--zlato)', 'var(--ink)', 'var(--zlato)', '#d6b779', 'var(--ink)'],
  outline: ['transparent', 'var(--ink)', 'var(--ink)', 'var(--ink)', '#fff'],
  light: ['#fff', 'var(--ink)', '#fff', 'var(--sedef-2)', 'var(--ink)'],
  ghost: ['transparent', 'var(--ink)', 'transparent', 'rgba(29,26,23,.06)', 'var(--ink)']
};
function Button({
  children,
  variant = 'light',
  size = 'md',
  lettering = 'script',
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const s = SZ[size] || SZ.md;
  const [bg, fg, bd, hbg, hfg] = V[variant] || V.leopard;
  const sc = lettering === 'script';
  const on = h && !disabled;
  return /*#__PURE__*/React.createElement("button", {
    className: variant === 'leopard' ? 'mj-leopard' : undefined,
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      paddingTop: sc ? 4 : 0,
      borderRadius: 999,
      border: (variant === 'leopard' ? '1px' : '1.5px') + ' solid ' + (variant === 'leopard' && on ? 'var(--zlato)' : bd),
      boxShadow: variant === 'leopard' ? (on ? '0 10px 22px rgba(60,40,20,.20)' : '0 6px 14px rgba(60,40,20,.12)') + ',inset 0 1px 0 rgba(255,255,255,.7)' : 'none',
      backgroundColor: on ? hbg : bg,
      backgroundSize: '54px',
      color: on ? hfg : fg,
      fontFamily: sc ? 'var(--font-script)' : 'var(--font-sans)',
      fontWeight: sc ? 700 : 600,
      fontSize: sc ? s.s : s.c,
      lineHeight: 1,
      letterSpacing: sc ? 0 : '.14em',
      textTransform: sc ? 'none' : 'uppercase',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transform: p && !disabled ? 'scale(.97)' : 'none',
      transition: 'background .3s,color .3s,transform .15s',
      whiteSpace: 'nowrap',
      flex: 'none',
      ...style
    }
  }, icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/Button.jsx", error: String((e && e.message) || e) }); }

// components/shop/CollectionCard.jsx
try { (() => {
function CollectionCard({
  image,
  script,
  caps,
  onClick,
  height = 420
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'var(--sedef-2)',
      boxShadow: 'var(--shadow-photo)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: script,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.05)' : 'none',
      transition: 'transform .9s cubic-bezier(.2,.7,.2,1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '18px 24px 20px',
      background: 'var(--glass)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderTop: '1px solid var(--glass-border)',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: .9,
      color: 'var(--ink)'
    }
  }, script), caps && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, caps, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: h ? 40 : 22,
      height: 1,
      background: 'currentColor',
      transition: 'width .3s'
    }
  }))));
}
Object.assign(__ds_scope, { CollectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/CollectionCard.jsx", error: String((e && e.message) || e) }); }

// components/shop/ElementCard.jsx
try { (() => {
function ElementCard({
  element,
  signs,
  description,
  selected = false,
  onClick
}) {
  const [h, setH] = React.useState(false);
  const on = h || selected;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: '30px 26px 26px',
      cursor: 'pointer',
      minHeight: 210,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      color: '#fff',
      background: selected ? 'rgba(255,255,255,.10)' : 'rgba(255,255,255,.03)',
      border: '1px solid ' + (on ? 'var(--zlato)' : 'rgba(255,255,255,.22)'),
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'all .3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 64,
      lineHeight: .85
    }
  }, element), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: on ? 'var(--zlato)' : 'var(--ljub-em)'
    }
  }, signs), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      opacity: .9
    }
  }, description));
}
Object.assign(__ds_scope, { ElementCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/ElementCard.jsx", error: String((e && e.message) || e) }); }

// components/shop/FilterChip.jsx
try { (() => {
function FilterChip({
  children,
  selected = false,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 36,
      padding: '0 16px',
      borderRadius: 999,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      flex: 'none',
      border: '1px solid ' + (selected ? 'var(--ink)' : h ? 'rgba(29,26,23,.45)' : 'var(--hairline-strong)'),
      background: selected ? 'var(--ink)' : 'transparent',
      color: selected ? '#fff' : 'var(--ink)',
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      transition: 'all .3s'
    }
  }, children);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/shop/Icon.jsx
try { (() => {
function toPascal(n) {
  return n.split(/[-_ ]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  fill = 'none',
  style
}) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons || {};
  const node = lib[toPascal(name)] || lib[name];
  if (!node) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      ...style
    }
  });
  const kids = node[0] === 'svg' ? node[2] : node;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, kids.map((c, i) => React.createElement(c[0], {
    key: i,
    ...c[1]
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/Icon.jsx", error: String((e && e.message) || e) }); }

// components/shop/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'plain',
  size = 44,
  badge,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const V = {
    plain: [h ? 'rgba(29,26,23,.06)' : 'transparent', 'var(--ink)', 'transparent'],
    krem: [h ? 'var(--zlato)' : 'linear-gradient(145deg,var(--social-1),var(--social-2))', 'var(--ink)', 'transparent'],
    dark: [h ? '#3a3631' : 'var(--ink)', '#fff', 'var(--ink)'],
    outline: [h ? 'var(--ink)' : 'transparent', h ? '#fff' : 'var(--ink)', 'var(--ink)']
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      border: '1.5px solid ' + V[2],
      background: V[0],
      color: V[1],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0,
      flex: 'none',
      transition: 'background .3s,color .3s',
      ...style
    }
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * .46)
  }) : icon, badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 0,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      boxSizing: 'border-box',
      borderRadius: 999,
      background: 'var(--zlato)',
      color: 'var(--ink)',
      font: '700 10px/18px var(--font-sans)',
      textAlign: 'center'
    }
  }, badge) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/shop/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  name,
  stone,
  price,
  oldPrice,
  badge,
  onAdd,
  onOpen,
  wished = false,
  onWish,
  ratio = '3/4',
  dark = false
}) {
  const [h, setH] = React.useState(false);
  const fg = dark ? '#fff' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick: onOpen,
    style: {
      display: 'grid',
      gap: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--sedef-2)',
      boxShadow: 'var(--shadow-photo)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: h ? 'scale(1.04)' : 'none',
      transition: 'transform .9s cubic-bezier(.2,.7,.2,1)'
    }
  }), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "white",
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, badge), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Lista \u017Eelja",
    onClick: e => {
      e.stopPropagation();
      onWish && onWish();
    },
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: 0,
      background: 'var(--glass)',
      backdropFilter: 'blur(14px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: wished ? '#7E0E18' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 18,
    fill: wished ? 'currentColor' : 'none'
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onAdd && onAdd();
    },
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 12,
      height: 44,
      borderRadius: 999,
      border: '1px solid var(--glass-border)',
      background: 'var(--glass)',
      backdropFilter: 'blur(14px)',
      color: 'var(--ink)',
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      opacity: h ? 1 : 0,
      transform: h ? 'none' : 'translateY(8px)',
      transition: 'all .3s'
    }
  }, "Dodaj u korpu")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 5,
      color: fg
    }
  }, stone && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: dark ? 'var(--ljub-em)' : 'var(--ink-70)'
    }
  }, stone), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      lineHeight: 1.25
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 14,
      fontWeight: 500
    }
  }, price, oldPrice && /*#__PURE__*/React.createElement("s", {
    style: {
      opacity: .5
    }
  }, oldPrice))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/shop/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  min = 1,
  max = 10,
  onChange,
  size = 'md'
}) {
  const h = size === 'sm' ? 34 : 44;
  const set = n => onChange && onChange(Math.max(min, Math.min(max, n)));
  const b = {
    width: h,
    height: h,
    border: 0,
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--ink)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: h,
      borderRadius: 999,
      border: '1.5px solid var(--ink)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Manje",
    style: {
      ...b,
      opacity: value <= min ? .3 : 1
    },
    onClick: () => set(value - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 24,
      textAlign: 'center',
      font: '600 14px/1 var(--font-sans)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Vi\u0161e",
    style: {
      ...b,
      opacity: value >= max ? .3 : 1
    },
    onClick: () => set(value + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 16
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      height: 1356,
      background: 'linear-gradient(180deg,var(--hero-1) 0,var(--hero-2) 60%,var(--hero-3) 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 173,
      top: 196,
      width: 560,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "\u010Carolija detalja"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...MJ_H1,
      margin: '22px 0 36px'
    }
  }, "Komadi nakita", /*#__PURE__*/React.createElement("br", null), "koji govore", /*#__PURE__*/React.createElement("br", null), "i kada \u0107uti\u0161"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...MJ_P,
      marginBottom: 58
    }
  }, "Moderan dizajn i sirovi prirodni materijali.", /*#__PURE__*/React.createElement("br", null), "Nakit koji \u0107e\u0161 \u017Eeleti da nosi\u0161 svakog dana."), /*#__PURE__*/React.createElement(Cta, {
    onClick: () => go('nakit')
  }, "Istra\u017Ei")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 760,
      top: 196,
      width: 513,
      height: 654,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'hero.jpg',
    style: {
      width: 513,
      height: 654,
      objectFit: 'cover',
      objectPosition: '50% 8%'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: A + 'maska-ahat.webp',
    style: {
      position: 'absolute',
      left: 0,
      top: 680,
      width: '100%',
      height: 676,
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 990,
      top: 828,
      width: 410,
      color: '#1d1a17',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...MJ_H2,
      color: '#1d1a17',
      letterSpacing: '.08em',
      marginBottom: 12
    }
  }, "Crni ahat"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Zauzmi prostor koji zaslu\u017Euje\u0161.", /*#__PURE__*/React.createElement("br", null), "Dodaj boju, teksturu i detalje koji \u010Dine da se ose\u0107a\u0161 dobro.", /*#__PURE__*/React.createElement("br", null), "Ne mora\u0161 da se uklopi\u0161 da bi pripadala, tu si da bude\u0161 svoja."), /*#__PURE__*/React.createElement(Cta, {
    style: {
      marginTop: 14
    },
    onClick: () => go('nakit', 'Prstenje')
  }, "Prstenje"))), /*#__PURE__*/React.createElement(Marquee, {
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
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--komp)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'komplet.jpg',
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 170,
      top: 790,
      width: 380
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Jak kao"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...MJ_H2,
      margin: '4px 0 6px'
    }
  }, "Hirur\u0161ki \u010Delik"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...MJ_P,
      marginBottom: 20
    }
  }, "Snaga koja \u010Duva lepotu."), /*#__PURE__*/React.createElement(Cta, {
    kind: "pill",
    onClick: () => go('nakit')
  }, "Istra\u017Ei"))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 986,
      background: 'var(--leopard) url(' + A + 'leopard.jpg) center/cover',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'jaspis.webp',
    style: {
      position: 'absolute',
      left: 302,
      top: 230,
      width: 540,
      filter: 'drop-shadow(0 20px 30px rgba(90,60,30,.18))'
    }
  }), /*#__PURE__*/React.createElement(BlobPanel, {
    blobSrc: A + 'blob.png',
    style: {
      position: 'absolute',
      left: 736,
      top: 236,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Magija kristala"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...MJ_H2,
      margin: '8px 0 14px'
    }
  }, "Poludrago", /*#__PURE__*/React.createElement("br", null), "kamenje"), /*#__PURE__*/React.createElement("p", {
    style: MJ_P
  }, "Kristali su nepromenljive strukture, zbog \u010Dega emituju konstantnu stabilnu frekvenciju. Kada nosimo kristale oni podi\u017Eu na\u0161u energiju. Jaspis Dalmatinac energija \u010Diste radosti."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Cta, {
    onClick: () => go('kristali')
  }, "Kristali")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
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
  }), /*#__PURE__*/React.createElement("img", {
    src: A + 'usta.png',
    style: {
      position: 'absolute',
      right: 158,
      top: -62,
      width: 138,
      zIndex: 4,
      transform: 'rotate(-8deg)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 807,
      background: '#111',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'noge.jpg',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 80%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 130,
      top: 300,
      width: 380,
      color: 'var(--krem)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "krem"
  }, "Registruj se"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...MJ_H2,
      color: 'var(--krem)',
      margin: '10px 0 14px'
    }
  }, "Nismo", /*#__PURE__*/React.createElement("br", null), "dosadni"), /*#__PURE__*/React.createElement(Cta, {
    tone: "krem",
    onClick: () => go('o-nama')
  }, "O nama"))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 90,
      background: 'var(--sedef)',
      zIndex: 6,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 14,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(MailBar, {
    catSrc: A + 'macka-sanduce.png'
  })));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
function ONama({
  go
}) {
  const Cta = window.MJCta;
  const {
    Marquee
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      height: 1081,
      background: '#3a2e28',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'selfie.jpg',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(15,10,8,.62) 0,rgba(15,10,8,.3) 55%,transparent 85%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 216,
      top: 230,
      width: 420,
      color: 'var(--krem)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: 'var(--krem)',
      marginBottom: 34
    }
  }, "O nama"), ['Mi smo, ja Marina.', 'Za Blizance kažu da su skup više ličnosti.', 'Uređivanje, kreiranje, učenje i knjige su moja strast.', 'Blizanac podznak Vaga, dupli vazduh, mislilac.\nMesec, moja duša je u Devici.\nImam 4 planete u Devici, tako da nisam klasičan\nvetropirasti Blizanac.', 'Simboli i značenja su ono što volim.\nNakit koji kreiram govori umesto mene.'].map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 4px',
      fontSize: 14,
      lineHeight: 1.6,
      whiteSpace: 'pre-line',
      textShadow: '0 1px 8px rgba(0,0,0,.45)'
    }
  }, t)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 14,
      textShadow: '0 1px 8px rgba(0,0,0,.45)'
    }
  }, "U\u017Eivaj."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--sedef-2)'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    transparent: true,
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 90,
      padding: '110px 150px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 520,
      color: '#111'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...MJ_H2,
      color: '#111',
      fontSize: 40,
      marginBottom: 30
    }
  }, "Za one koji vole da znaju vi\u0161e"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...MJ_P,
      color: '#111'
    }
  }, "U natalnoj karti postoji 12 polja, svako od njih govori o jednom va\u017Enom delu \u017Eivota. Natalna karta pokazuje gde se odre\u0111ene \u017Eivotne teme odvijaju, koji znak njima upravlja i kako mo\u017Eemo bolje da razumemo sebe.", /*#__PURE__*/React.createElement("br", null), "Svako polje ima svoj prirodni znak i element.", /*#__PURE__*/React.createElement("br", null), "\u017Deli\u0161 da sazna\u0161 kojim znakom je odre\u0111eno polje u tvojoj natalnoj karti koje te najvi\u0161e interesuje?", /*#__PURE__*/React.createElement("br", null), "Koji kamen mo\u017Ee\u0161 da nosi\u0161 kao simbol podr\u0161ke toj \u017Eivotnoj oblasti?"), /*#__PURE__*/React.createElement(Cta, {
    style: {
      marginTop: 10
    },
    onClick: () => go('astro')
  }, "Astro")), /*#__PURE__*/React.createElement("img", {
    src: A + 'devica-privezak.jpg',
    style: {
      width: 560,
      flex: 'none',
      boxShadow: '0 16px 36px rgba(60,40,20,.14)'
    }
  }))));
}
function Astro({
  go
}) {
  const {
    ElementBlock
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ljub)',
      color: '#fff',
      padding: '140px 8% 130px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 60,
      alignItems: 'center',
      marginBottom: 90
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: '#fff',
      fontSize: 48,
      letterSpacing: '.06em',
      marginBottom: 24
    }
  }, "Energetski", /*#__PURE__*/React.createElement("br", null), "astro kutak"), ['U svakome od nas žive sva četiri elementa: vatra, zemlja, vazduh i voda.', 'Svaki element ima svoje mesto i simboliku u natalnoj karti. Neki su naglašeni, neki manje izraženi.', 'Ukoliko želiš da pojačaš simboliku određenog elementa u svom životu, odaberi poludrago kamenje koje se tradicionalno povezuje sa tim elementom.'].map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 12px',
      fontSize: 15.2,
      opacity: .92
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'astro-natal.png',
    style: {
      width: '44%'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: A + 'astro-planeta.png',
    style: {
      width: '56%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 70
    }
  }, MJ_ELEMENTS.map(e => /*#__PURE__*/React.createElement(ElementBlock, {
    key: e.id,
    name: e.id,
    text: e.text,
    quote: e.quote,
    signs: e.line
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--sedef-2)',
      padding: '80px 8%'
    }
  }, [['ahat-jarac.jpg', 'aventurin-blizanci.jpg'], ['bik-ogrlica.jpg', 'devica-ogrlica.jpg']].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28,
      maxWidth: 820,
      margin: '0 auto 36px'
    }
  }, r.map(f => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: A + f,
    onClick: () => go('nakit'),
    style: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
      boxShadow: 'var(--shadow-photo)',
      cursor: 'pointer'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--turm)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '6%',
      alignItems: 'center',
      padding: '90px 8%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'turmalin-set.jpg',
    style: {
      width: '100%',
      maxHeight: 640,
      objectFit: 'cover',
      boxShadow: '0 16px 36px rgba(0,0,0,.14)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 80,
      lineHeight: 1,
      color: '#fff',
      marginBottom: 10
    }
  }, "Turmalin"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...MJ_H2,
      fontSize: 41.6,
      marginBottom: 16
    }
  }, "Raznobojna", /*#__PURE__*/React.createElement("br", null), "amajlija"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...MJ_P,
      fontSize: 16,
      marginBottom: 10
    }
  }, "Jedan kamen, \u010Ditav spektar boja. Svaka boja nosi svoju simboliku, spojene zajedno harmonizuju razli\u010Dite energije."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...MJ_P,
      fontSize: 16
    }
  }, "Amajlija sre\u0107e, duginih boja."))));
}
const MJ_ARTICLE_CSS = '.mj-art h1{margin:14px 0 24px;font:700 56px/1.12 Inter,sans-serif;text-transform:uppercase;letter-spacing:.02em;color:#000}.mj-art h2{margin:44px 0 14px;font:700 28px/1.15 Inter,sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#000}.mj-art h2:first-child{margin-top:0}.mj-art h3{margin:0 0 14px;font:700 28px/1.15 Inter,sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#000}.mj-art h4{margin:18px 0 8px;font:600 12px Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase}.mj-art p{margin:0 0 10px;font:500 14px/1.7 Inter,sans-serif;color:#000}.mj-art .bu{font-size:16px;margin-bottom:28px}.mj-art .kick{font:500 13px Inter;letter-spacing:.2em;text-transform:uppercase;color:var(--ink-70)}.mj-art b{font-weight:700}.mj-art .zav{font-style:italic}.mj-art .stone{padding-top:64px}.mj-art .cta{display:inline-block;margin-top:18px;font:700 44px/1 Corinthia,cursive;color:#000;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:7px}.mj-art .chips{display:flex;flex-wrap:wrap;gap:8px 18px}.mj-art .chips a{font:600 12px Inter;letter-spacing:.14em;text-transform:uppercase;color:#000;text-decoration:none;border-bottom:1px solid rgba(0,0,0,.35);padding-bottom:2px}';
function Blog({
  go
}) {
  const {
    Kicker,
    BlogCard
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--sedef-2)',
      padding: '190px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 840,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Blog"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: '#000',
      margin: '8px 0 12px'
    }
  }, "Zvezdana pozornica"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 28px',
      fontSize: 16,
      fontWeight: 500
    }
  }, "\u0160aputanje zvezda i kristala"), /*#__PURE__*/React.createElement(BlogCard, {
    image: MJ_A + 'selfie.jpg',
    kicker: "Astrologija \xB7 O nama",
    title: "Upoznaj me kroz moj Mesec",
    excerpt: "S obzirom da mi je Sunce u znaku Blizanaca, mo\u017Ee se slobodno re\u0107i \u201EO nama\u201C. Pri\u010Da\u0107u ti malo o sebi na moj na\u010Din.",
    onOpen: () => go('post')
  })));
}
function Post({
  go
}) {
  const html = MJ_CONTENT.post.replace(/href="astro.html"/g, 'data-go="astro"');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--sedef-2)',
      padding: '190px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("style", null, MJ_ARTICLE_CSS), /*#__PURE__*/React.createElement("div", {
    className: "mj-art",
    style: {
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
  }, /*#__PURE__*/React.createElement("a", {
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
  }, "\u2190 Blog"), /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })));
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, MJ_ARTICLE_CSS), /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      background: 'var(--sedef-2)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MJ_A + 'ahat-pirit.jpg',
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 70,
      top: 150,
      width: 400
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "ink"
  }, "Nevidljivi jezik prirode"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...MJ_H1,
      color: '#000',
      margin: '14px 0 24px'
    }
  }, "Energija kristala"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...MJ_P,
      color: '#000',
      fontWeight: 500
    }
  }, "U srcu zemlje, milionima godina unazad, priroda je kroz savr\u0161en spoj pritiska, toplote i elemenata stvarala svoja najstabilnija remek-dela \u2013 kristale. Oni nisu samo estetski privla\u010Dni ukrasi ili dodaci nakitu. Kristali su nosioci naj\u010Distijih prirodnih frekvencija koje vekovima fasciniraju \u010Dove\u010Danstvo i slu\u017Ee kao podr\u0161ka ljudskom telu, umu i duhu."))), /*#__PURE__*/React.createElement(Marquee, {
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
  }), /*#__PURE__*/React.createElement("section", {
    className: "mj-art",
    style: {
      background: 'var(--sedef-2)',
      padding: '90px 200px 100px'
    },
    onClick: e => {
      const a = e.target.closest('a');
      if (a && /nakit|index/.test(a.getAttribute('href') || '')) {
        e.preventDefault();
        go('nakit');
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      margin: '0 auto'
    },
    dangerouslySetInnerHTML: {
      __html: C.k2.replace(/^<article[^>]*>/, '')
    }
  })), /*#__PURE__*/React.createElement("section", {
    className: "mj-art",
    style: {
      background: 'var(--sedef-2)',
      padding: '10px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      margin: '0 auto',
      borderTop: '1px solid rgba(60,45,30,.18)',
      paddingTop: 60
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "ink"
  }, "Poludrago kamenje"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '6px 0 18px'
    }
  }, "Kamen po kamen"), /*#__PURE__*/React.createElement("nav", {
    className: "chips",
    dangerouslySetInnerHTML: {
      __html: C.chips.replace(/^<nav[^>]*>|<\/nav>$/g, '')
    }
  }), /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: C.stones.join('')
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 40,
      fontStyle: 'italic',
      color: 'var(--ink-70)'
    }
  }, "(Ovde su prikazana prva 3 od 10 kamenova \u2014 ostali su u ui_kits/website/source/kristali.html.)"))));
}
Object.assign(window, {
  ONama,
  Astro,
  Blog,
  Post,
  Kristali
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shop.jsx
try { (() => {
function Nakit({
  go,
  add,
  cat
}) {
  const {
    Kicker,
    CollectionCard,
    FilterChip,
    ProductCard,
    ElementCard
  } = window.MnjauprrrrrDesignSystem_64b9d1;
  const A = MJ_A;
  const [c, setC] = React.useState(cat || 'Sve');
  const [el, setEl] = React.useState(null);
  React.useEffect(() => setC(cat || 'Sve'), [cat]);
  const list = MJ_PRODUCTS.filter(p => (c === 'Sve' || p.cat === c) && (!el || p.el === el));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--sedef)',
      padding: '110px 8% 40px'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Nakit za ma\u010Dkice"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...MJ_H1,
      margin: '10px 0 40px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 24
    }
  }, "Nakit", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      textTransform: 'none',
      fontSize: 96,
      lineHeight: .8,
      letterSpacing: 0,
      color: 'var(--ink)'
    }
  }, c === 'Sve' ? 'sve' : c)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, [['Ogrlice', 'komplet.jpg'], ['Narukvice', 'turmalin-set.jpg'], ['Prstenje', 'ahat-jarac.jpg'], ['Minđuše', 'devica-privezak.jpg']].map(([n, f]) => /*#__PURE__*/React.createElement(CollectionCard, {
    key: n,
    image: A + f,
    script: n,
    caps: "Istra\u017Ei",
    height: 340,
    onClick: () => setC(n)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ljub)',
      padding: '50px 8%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      display: 'flex',
      alignItems: 'baseline',
      gap: 18,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 22px/1 Inter',
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, "Biraj po elementu"), el && /*#__PURE__*/React.createElement("a", {
    onClick: () => setEl(null),
    style: {
      cursor: 'pointer',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ljub-em)'
    }
  }, "poni\u0161ti \xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, MJ_ELEMENTS.map(e => /*#__PURE__*/React.createElement(ElementCard, {
    key: e.id,
    element: e.id,
    signs: e.signs,
    selected: el === e.id,
    onClick: () => setEl(el === e.id ? null : e.id)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--sedef-2)',
      padding: '50px 8% 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 36,
      alignItems: 'center'
    }
  }, ['Sve', 'Ogrlice', 'Narukvice', 'Prstenje', 'Minđuše'].map(x => /*#__PURE__*/React.createElement(FilterChip, {
    key: x,
    selected: c === x,
    onClick: () => setC(x)
  }, x)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-70)'
    }
  }, list.length, " komada")), list.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 28
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: p.img,
    name: p.name,
    stone: p.stone,
    price: rsd(p.price),
    oldPrice: p.old && rsd(p.old),
    badge: p.badge,
    onAdd: () => add(p),
    onOpen: () => go('proizvod', p.id)
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 0',
      textAlign: 'center',
      display: 'grid',
      justifyItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'macka-sanduce.png',
    style: {
      width: 240
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 56
    }
  }, "Uskoro\u2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-70)'
    }
  }, "Ma\u010Dkica jo\u0161 sprema ovu kolekciju."))));
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
  const p = MJ_PRODUCTS.find(x => x.id === id) || MJ_PRODUCTS[0];
  const [q, setQ] = React.useState(1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--sedef)',
      padding: '60px 8% 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-70)',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => go('nakit')
  }, "Nakit"), " / ", /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => go('nakit', p.cat)
  }, p.cat), " / ", p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      boxShadow: 'var(--shadow-photo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22,
      paddingTop: 30
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, p.stone), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...MJ_H1,
      fontSize: 48
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "krem"
  }, p.cat), /*#__PURE__*/React.createElement(Badge, {
    tone: "astro"
  }, p.el), p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, p.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'baseline',
      font: '600 24px/1 Inter'
    }
  }, rsd(p.price), p.old && /*#__PURE__*/React.createElement("s", {
    style: {
      fontSize: 16,
      fontWeight: 400,
      opacity: .5
    }
  }, rsd(p.old))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...MJ_P,
      maxWidth: 480
    }
  }, "Hirur\u0161ki \u010Delik koji ne tamni i prirodni kamen \u2014 svaki komad je unikat. (Opis proizvoda: placeholder.)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: q,
    onChange: setQ
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => add(p, q)
  }, "Dodaj u korpu")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hairline-strong)'
    }
  }, [['Materijal', 'Hirurški čelik, zlatna obrada'], ['Kamen', p.stone], ['Element', p.el]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      padding: '14px 0',
      borderBottom: '1px solid var(--hairline-strong)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v)))))), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...MJ_H2,
      fontSize: 28,
      margin: '100px 0 28px'
    }
  }, "Ma\u010Dkice su uzele i ovo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 28
    }
  }, MJ_PRODUCTS.filter(x => x.id !== p.id).slice(0, 4).map(x => /*#__PURE__*/React.createElement(ProductCard, {
    key: x.id,
    image: x.img,
    name: x.name,
    stone: x.stone,
    price: rsd(x.price),
    onAdd: () => add(x),
    onOpen: () => go('proizvod', x.id)
  }))));
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
  const total = items.reduce((s, i) => s + i.p.price * i.q, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: close,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(29,26,23,.35)',
      opacity: open ? 1 : 0,
      transition: 'opacity .3s'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 440,
      background: 'var(--sedef)',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform .4s cubic-bezier(.2,.7,.2,1)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-20px 0 40px rgba(60,40,20,.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 28px',
      borderBottom: '1px solid var(--hairline-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 20px Inter',
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, "Tvoja"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: .6
    }
  }, "korpa")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Zatvori",
    onClick: close
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: '8px 28px'
    }
  }, !items.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MJ_A + 'maca-providna.png',
    style: {
      width: 110,
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-70)'
    }
  }, "Korpa je prazna. Ma\u010Dkica \u010Deka.")), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.p.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '84px 1fr',
      gap: 16,
      padding: '18px 0',
      borderBottom: '1px solid var(--hairline-strong)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: i.p.img,
    style: {
      width: 84,
      height: 104,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-70)'
    }
  }, i.p.stone), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, i.p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "sm",
    value: i.q,
    onChange: n => setQty(i.p.id, n)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, rsd(i.p.price * i.q))), /*#__PURE__*/React.createElement("a", {
    onClick: () => remove(i.p.id),
    style: {
      cursor: 'pointer',
      fontSize: 12,
      color: 'var(--ink-70)'
    }
  }, "Ukloni"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 28px 28px',
      borderTop: '1px solid var(--hairline-strong)',
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '700 15px Inter',
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Ukupno"), /*#__PURE__*/React.createElement("span", null, rsd(total))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: !items.length
  }, "Nastavi na pla\u0107anje"))));
}
Object.assign(window, {
  Nakit,
  Proizvod,
  Korpa
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
window.MJ_CONTENT = {
  "k2": "<article class=\"sk\">\n<h2>Nauka iza suptilnih vibracija</h2>\n<p>Da bismo razumeli energiju kristala, potrebno je da se osvrnemo na osnove fizike. Sve oko nas, uključujući i naše misli, sastoji se od energije koja vibrira na određenoj frekvenciji. Dok je ljudska energija nestabilna i podložna stalnim promenama usled stresa, emocija i okruženja, kristali poseduju takozvanu fiksnu i savršeno pravilnu geometrijsku rešetku.</p>\n<p>Zbog ove jedinstvene, nepromenljive strukture, kristali emituju konstantnu, stabilnu frekvenciju. Kada se nađu u neposrednoj blizini našeg energetskog polja, oni deluju po principu rezonance – svojom stabilnošću polako podižu, balansiraju i usklađuju našu unutrašnju energiju, vraćajući nas u stanje prirodne ravnoteže.</p>\n<h2>Kako kristali menjaju vašu svakodnevnicu</h2>\n<p><b>Transformacija i zaštita:</b> Određeni kristali deluju kao energetski sunđeri ili štitovi. Oni prepoznaju tešku, ustajalu i negativnu energiju iz vašeg okruženja (ili vaših sopstvenih misli) i transmutiraju je u čistu, pozitivnu svetlost.</p>\n<p><b>Fokus i mentalna jasnost:</b> Kada se suočavate sa donošenjem važnih odluka ili ste preplavljeni svakodnevnim informacijama, frekvencije pojedinih kristala pomažu u pročišćavanju uma, jačanju intuicije i vraćanju fokusa na ono što je zaista važno.</p>\n<p><b>Emotivno isceljenje i mir:</b> Delujući na suptilne energetske centre u telu (čakre), kristali mogu nežno otključati potisnute emocije, ublažiti anksioznost i doneti osećaj duboke unutrašnje sigurnosti, ljubavi prema sebi i spokoja.</p>\n<h2>Kako odabrati i aktivirati svoj kamen</h2>\n<p>Najlepša istina o kristalima jeste da kristal uvek bira vas. Kada birate nakit ili poludragi kamen, svesno isključite analitički um i dopustite sebi da vas privuče oblik, boja ili sjaj određenog komada. To je nepogrešiv znak da vaše energetsko polje trenutno rezonira s frekvencijom baš tog kamena.</p>\n<p>Kada vaš izabrani komad stigne u vaš dom, uspostavite vezu s njim. Očistite ga kroz elemente vode ili dima, a zatim ga programirajte svojom namerom. Držite ga na dlanu, zatvorite oči i usmerite misli ka onome što želite da vam donese – bilo da je to hrabrost, ljubav, uspeh ili mir. Od tog trenutka, vaš nakit prestaje da bude samo detalj i postaje vaš lični saveznik kroz vreme.</p>\n<a class=\"cta\" href=\"index.html#nakit\">Nakit</a>\n</article>",
  "chips": "<nav class=\"chips\"><a href=\"#gorski-kristal\">Gorski kristal</a><a href=\"#dalmatinski-jaspis\">Dalmatinski jaspis</a><a href=\"#zeleni-aventurin\">Zeleni aventurin</a><a href=\"#crni-ahat\">Crni ahat</a><a href=\"#amazonit\">Amazonit</a><a href=\"#hematit\">Hematit</a><a href=\"#karneol\">Karneol</a><a href=\"#lapis-lazuli\">Lapis lazuli</a><a href=\"#ametist\">Ametist</a><a href=\"#rozenkvarc\">Rozenkvarc</a></nav>",
  "stones": ["<article class=\"stone\" id=\"gorski-kristal\"><h3>Gorski kristal</h3><p><b>Katalizator čiste svetlosti:</b> Gorski kristal poseduje jedinstvenu frekvenciju koja prepoznaje tešku energiju okruženja i transformiše je u pozitivnu vibraciju, donoseći vam preko potreban mir.</p><p><b>Oslobađanje unutrašnjih blokada:</b> Svojstvom da pročišćava auru, ovaj kamen nežno zaceljuje emocionalne traume i pomaže vam da s lakoćom otklonite mentalne barijere.</p><p><b>Sidro za vaše samopouzdanje:</b> Pružajući snažnu podršku vašem energetskom polju, kristal deluje kao stabilan izvor snage koji podiže nivo vaše lične sigurnosti u svakom trenutku.</p><p><b>Univerzalni energetski pojačivač:</b> Zbog svoje čiste prirode, on ima moć da zameni bilo koji drugi kamen, istovremeno snažeći i puneći dejstvo drugog poludragog kamenja u vašoj blizini.</p><h4>Ritual i nega</h4><p>Održavanje vašeg kristala je svestan čin posvećenosti i brige o sopstvenoj energiji. Kako bi vas verno pratio, očistite ga povremeno držanjem pod mlazom mlake, tekuće vode ili ga propustite kroz mirisni dim žalfije.</p><p>Svoju punu snagu gorski kristal obnavlja izlaganjem direktnom sunčevom svetlu. Dopustite mu da upije zrake čistog sunca, koje će kasnije nesebično utkati u vaš dan.</p><p class=\"zav\">Otkrijte lepotu koja ima dublje značenje.</p></article>", "<article class=\"stone\" id=\"dalmatinski-jaspis\"><h3>Dalmatinski jaspis</h3><p><b>Razbijanje emotivnih barijera:</b> Dalmatinski jaspis deluje kao nežni pokretač koji ruši zidove koje smo podigli oko sebe, pomažući vam da prevaziđete skepticizam i ponovo poverujete u pozitivne ishode.</p><p><b>Filter protiv toksičnih misli:</b> Njegova specifična frekvencija efikasno transmutira negativnu energiju i preuzima na sebe težinu briga, ostavljajući prostor za bistrinu i mentalni mir.</p><p><b>Povratak unutrašnjoj radosti:</b> Ovaj kamen budi detinju svest i radost življenja, podsećajući vas da usporite, uživate u trenutku i s lakoćom prođete kroz izazovne periode.</p><p><b>Moćno uzemljenje i zaštita:</b> Povezujući vas s energijom zemlje, on pruža stabilan osećaj sigurnosti i drži vas fokusiranim, čak i kada je svet oko vas u potpunom haosu.</p><h4>Ritual i nega</h4><p>Negovanje dalmatinskog jaspisa je jednostavan i umirujući ritual koji održava njegovu izvornu snagu. Da biste ga očistili od nakupljenih energetskih utisaka, dovoljno je da ga isperete pod mlazom mlake, tekuće vode ili ga očistite u dimu svetog drveta.</p><p>Za razliku od nekih drugih kristala, dalmatinski jaspis najviše voli da se puni u blagoj svetlosti ranog jutarnjeg sunca ili preko noći, položen pored gorskog kristala, čime se njegova zaštitna energija u potpunosti obnavlja.</p><p class=\"zav\">Unesite u svoj život nakit koji inspiriše stabilnost i slavi radost postojanja.</p></article>", "<article class=\"stone\" id=\"zeleni-aventurin\"><h3>Zeleni aventurin</h3><p><b>Magnet za prosperitet i obilje:</b> Zeleni aventurin je kroz istoriju slavljen kao kamen dobre sreće, idealan za one koji žele da privuku nove poslovne prilike, uspeh i finansijsko blagostanje.</p><p><b>Harmonizacija srčanog centra:</b> Delujući direktno na srčanu čakru, ovaj kamen donosi duboki emotivni balans, ublažava tragove stresa i zamenjuje anksioznost osećajem spokoja i emotivne sigurnosti.</p><p><b>Podrška u vremenima promena:</b> Njegova stabilna energija pruža vam optimizam i samopouzdanje, pomažući vam da s lakoćom prihvatite nove životne faze i iskoračite iz zone komfora.</p><p><b>Zaštita od elektromagnetnog smoga:</b> Pored metafizičkih svojstava, ovaj kristal deluje i kao efikasan štit koji apsorbuje i neutrališe zračenja modernih tehnologija kojima smo svakodnevno okruženi.</p><h4>Ritual i nega</h4><p>Održavanje zelenog aventurina je svestan čin obnavljanja energije koji povezuje vaš nakit s elementima prirode. Kako bi zadržao svoju prepoznatljivu, vibrantnu zelenu boju i izvorni energetski potencijal, redovno ga čistite pod mlazom mlake, tekuće vode tokom nekoliko minuta.</p><p>Nakon čišćenja, svoj kamen napunite energijom prirode. Za razliku od nekih kristala kojima prija jako podnevno sunce, zeleni aventurin se najlepše puni na blagoj svetlosti ranog jutarnjeg sunca ili preko noći, položen u saksiju sa zdravom zelenom biljkom, kako bi se ponovo povezao s elementom zemlje iz kojeg je potekao.</p></article>"],
  "post": "<div class=\"kick\">Astrologija · O nama</div><h1>Zdravo i dobrodošla.</h1>\n<p class=\"bu\">S obzirom da mi je Sunce u znaku Blizanaca, može se slobodno reći „O nama“.<br>Pričaću ti malo o sebi na moj način. Upoznaćeš me kroz moj Mesec.</p>\n<h2>Mesec u natalu</h2>\n<p>Položaj Meseca u natalu daje informacije o svemu što ti dolazi kao sudbina. Sunce i njegovi aspekti pričaju o stvarima koje svesno činiš, tvom karakteru, onome što biraš da budeš, a Mesec, eee, on je tvoja sudbina, ono što postaješ kroz vreme. Mesec je baš brz i svi njegovi aspekti su jako lični.</p>\n<p>On opisuje tebe, kakva si stvarno, ne kako se predstavljaš svetu, već kakva si kod kuće, u odajama doma svoga. Aspekti Meseca i drugih planeta će ti reći šta te čeka u životu, šta ti je sudbina namenila, ono na šta ne možeš mnogo da utičeš slobodnom voljom.</p>\n<p>Tvoje nesvesne potrebe, osećaji tvoje duše.</p>\n<p>Gledaj sad u svoj natal i nađi Mesec. Put duše su aspekti.</p>\n<h2>Dispozitor planete</h2>\n<p>Draga ti je neka planeta u natalu, sto posto imaš neku najdražu.</p>\n<p>Sasvim slučajno je dispozitor moje duše, mog Meseca, planeta Merkur – svestrani dečko koji nosi titulu glasnika Bogova, ozbiljno odgovorna funkcija.</p>\n<p>Volim mog Merkurića, rođak je vetropirast i lukav, propusnicu i za zagrobni život ima, vodi duše preminulih dole, a sve to dok komunicira s Bogovima gore i trguje usput u sadašnjem vremenu sa običnim smrtnicima.</p>\n<p>Znači, moja duša, moj Mesec, je u Devici, tu joj je onako, nije nešto preterano ushićena.</p>\n<p>Kažu ovi pametni astrolozi da je u Devici Mesec peregriniran, što vam jezikom nas običnih smrtnika znači: nalazi se na nepoznatom terenu, uči da se ponaša, zbunjen je, neinformisan.</p>\n<p>Devica je perfekcionista, samo analizira, čisti, radi ko luda da umanji tu urođenu anomaliju mozga.</p>\n<p>Mesec hoće nežnost, zagrljaje, sevdalinke… On hoće da bude u Raku – tu mu je sedište.</p>\n<p>E sad, taj moj zbunjeni Mesec ima za dispozitora Merkura u Raku.</p>\n<p>Jupiiiii, mučeniku svanulo – misli se u sebi: „Bar rečima neka me neko pomazi, izem ti ovu Devicu, samo mi zvoca, nikad zadovoljna.“</p>\n<p>Tako vam je, ljudići: moja duša, moj Mesec, pomilovan po glavi od strane Merkura (Rakonje) – zbog koga većina vas ne voli Blizance. Nemate pojma koliko su oni u stvari gotivni, iskreni drugari – kad su ti drugari.</p>\n<a class=\"cta\" href=\"astro.html\">Astro kutak</a>\n"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.MJ_A = '../../assets/site/';
window.MJ_PRODUCTS = [{
  id: 'jarac',
  name: 'Prsten Jarac',
  stone: 'Crni ahat',
  cat: 'Prstenje',
  el: 'Zemlja',
  price: 2690,
  img: '../../assets/site/ahat-jarac.jpg',
  badge: 'Novo'
}, {
  id: 'blizanci',
  name: 'Ogrlica Blizanci',
  stone: 'Zeleni aventurin',
  cat: 'Ogrlice',
  el: 'Vazduh',
  price: 3290,
  img: '../../assets/site/aventurin-blizanci.jpg'
}, {
  id: 'lav',
  name: 'Ogrlica Lav',
  stone: 'Zeleni aventurin',
  cat: 'Ogrlice',
  el: 'Vatra',
  price: 3190,
  img: '../../assets/site/aventurin-lav.jpg'
}, {
  id: 'bik',
  name: 'Ogrlica Bik',
  stone: 'Rozenkvarc',
  cat: 'Ogrlice',
  el: 'Zemlja',
  price: 3290,
  old: 3790,
  img: '../../assets/site/bik-ogrlica.jpg'
}, {
  id: 'devica',
  name: 'Ogrlica Devica',
  stone: 'Hirurški čelik',
  cat: 'Ogrlice',
  el: 'Zemlja',
  price: 1990,
  img: '../../assets/site/devica-ogrlica.jpg',
  badge: 'Bestseler'
}, {
  id: 'turmalin',
  name: 'Narukvica Turmalin',
  stone: 'Turmalin',
  cat: 'Narukvice',
  el: 'Voda',
  price: 2990,
  img: '../../assets/site/turmalin-set.jpg'
}, {
  id: 'krug',
  name: 'Komplet Krug',
  stone: 'Crni ahat',
  cat: 'Ogrlice',
  el: 'Zemlja',
  price: 4990,
  img: '../../assets/site/komplet.jpg'
}, {
  id: 'pirit',
  name: 'Privezak Ahat & pirit',
  stone: 'Crni ahat · pirit',
  cat: 'Ogrlice',
  el: 'Vatra',
  price: 3490,
  img: '../../assets/site/ahat-pirit.jpg'
}, {
  id: 'sapice',
  name: 'Prsten Šapice',
  stone: 'Jaspis dalmatinac',
  cat: 'Prstenje',
  el: 'Vatra',
  price: 2290,
  img: '../../assets/site/jaspis.webp'
}];
window.MJ_ELEMENTS = [{
  id: 'Vatra',
  signs: 'Ovan · Lav · Strelac',
  text: 'Sirova strast, čista energija, nemogućnost da ostaneš neprimećen. Vatra gori, cvrči, pokreće, osvaja. Ne pristaje na mlako: ili te zagreje do kostiju ili te sprži do pepela.',
  quote: 'Fire doesn’t ask for attention. It commands it.',
  line: 'Ovan, Lav i Strelac su predstavnici elementa vatre.'
}, {
  id: 'Zemlja',
  signs: 'Bik · Devica · Jarac',
  text: 'Dodir, gradnja, stvaranje, uzemljenje, sigurnost. Rezultati su ono što ih pokreće, ono što možeš da opipaš, dodirneš, nazoveš svojim.',
  quote: 'Earth doesn’t dream in the clouds. It builds empires you can touch.',
  line: 'Bik, Devica i Jarac su predstavnici elementa zemlje.'
}, {
  id: 'Vazduh',
  signs: 'Blizanci · Vaga · Vodolija',
  text: 'Treperenje, let, visine, ideje, kretanje. Rasplamsava radoznalost, brzo misli, povezuje ono što drugima ne pada na pamet. Pomera granice.',
  quote: 'Air doesn’t sit still. It shifts the whole atmosphere.',
  line: 'Blizanci, Vaga i Vodolija su predstavnici elementa vazduha.'
}, {
  id: 'Voda',
  signs: 'Rak · Škorpija · Ribe',
  text: 'Preplavljuje, natapa, klizi kroz pukotine, odnosi, teče. Oseća ono što nije izgovoreno, pamti ono što je dotaklo samu dušu. Intuicija, emocija, dubina.',
  quote: 'Water doesn’t just touch you. It gets under your skin.',
  line: 'Rak, Škorpija i Ribe su predstavnici elementa vode.'
}];
window.rsd = n => n.toLocaleString('de-DE') + ' RSD';
window.MJ_H1 = {
  margin: 0,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: 56,
  lineHeight: 1.12,
  letterSpacing: '.02em',
  color: 'var(--ink-heading)'
};
window.MJ_H2 = {
  margin: 0,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: 40,
  lineHeight: 1.15,
  letterSpacing: '.08em',
  color: 'var(--ink-heading)'
};
window.MJ_P = {
  margin: 0,
  fontSize: 14,
  lineHeight: 1.6
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BlobPanel = __ds_scope.BlobPanel;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.ElementBlock = __ds_scope.ElementBlock;

__ds_ns.Cta = __ds_scope.Cta;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.MailBar = __ds_scope.MailBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.NAV_LINKS = __ds_scope.NAV_LINKS;

__ds_ns.SiteNav = __ds_scope.SiteNav;

__ds_ns.SocialLinks = __ds_scope.SocialLinks;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CollectionCard = __ds_scope.CollectionCard;

__ds_ns.ElementCard = __ds_scope.ElementCard;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

})();
