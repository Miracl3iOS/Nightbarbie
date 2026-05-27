/* global React */
const { useState, useEffect, useRef } = React;

/* ===================== ICONS (inline SVG) ===================== */
const Icon = {
  Arrow: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
  ),
  ArrowR: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  ),
  Chat: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-12.6 6.5L3 20l1.5-5.4A8 8 0 1 1 21 12Z"/></svg>
  ),
  Close: ({ s = 16 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
  ),
  Menu: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  ),
  Send: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/></svg>
  ),
  Telegram: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M9.04 16.4 8.7 21c.5 0 .7-.21.94-.46l2.25-2.16 4.66 3.4c.85.47 1.46.22 1.7-.79l3.07-14.43.01-.01c.27-1.26-.46-1.75-1.3-1.44L2.2 9.74c-1.23.48-1.22 1.17-.21 1.48l4.69 1.46L17.6 6.18c.51-.33.97-.15.59.19"/></svg>
  ),
  WhatsApp: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.23 5.12 4.53.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35M12 2C6.48 2 2 6.48 2 12c0 1.74.44 3.37 1.22 4.8L2 22l5.36-1.18A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2"/></svg>
  ),
  Instagram: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
  ),
  Bolt: ({ s = 20 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>
  ),
  Shield: ({ s = 20 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3Z"/></svg>
  ),
  Star: ({ s = 16 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.9 7.5.6-5.7 5 1.7 7.3-6.5-4-6.5 4 1.7-7.3L1.5 9.5 9 8.9 12 2z"/></svg>
  ),
  Plus: ({ s = 16 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
  ),
  Swap: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h13M16 3l4 4-4 4M17 17H4M8 13l-4 4 4 4"/></svg>
  ),
};

/* ===================== GRAFFITI / DECORATIVE SVG ===================== */
function GraffitiDrip({ color = "#FF2D9B", className = "", style = {} }) {
  return (
    <svg className={"graffiti " + className} style={style} width="280" height="220" viewBox="0 0 280 220" fill="none" aria-hidden="true">
      <path d="M14 28 L52 12 L94 32 L130 14 L168 36 L210 16 L252 30" stroke={color} strokeWidth="14" strokeLinecap="round"/>
      <path d="M40 36 V64 M40 64 Q42 72 36 78 Q34 84 40 88 Q44 92 42 100" stroke={color} strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M132 22 V52 M132 52 Q134 60 130 66" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M214 28 V70 M214 70 Q218 80 212 84 Q210 92 214 96" stroke={color} strokeWidth="6" strokeLinecap="round" fill="none"/>
      <circle cx="74" cy="20" r="3" fill={color}/>
      <circle cx="186" cy="22" r="3" fill={color}/>
    </svg>
  );
}

function StarBurst({ color = "#FF2D9B", size = 80, className = "", style = {} }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 5 L58 38 L92 42 L64 60 L74 92 L50 72 L26 92 L36 60 L8 42 L42 38 Z" fill={color}/>
    </svg>
  );
}

/* ===================== HEADER ===================== */
function Header({ page, setPage, accent, openChat }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "visas", label: "Визы" },
    { id: "legal", label: "Юр услуги" },
    { id: "currency", label: "Обмен валют" },
    { id: "reviews", label: "Отзывы" },
    { id: "about", label: "О нас" },
  ];
  return (
    <header className="header">
      <div className="container header-row">
        <div className="brand" onClick={() => setPage("home")}>
          <div className="brand-mark" style={{ background: accent }}>T</div>
          <div className="brand-name">thai bear<span className="dot" style={{ color: accent }}>.</span></div>
        </div>
        <nav className="nav">
          {links.map(l => (
            <button
              key={l.id}
              className={"nav-link " + (page === l.id ? "active" : "")}
              onClick={() => setPage(l.id)}
            >{l.label}</button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMobileOpen(true)}><Icon.Menu/></button>
      </div>

      <div className={"mobile-sheet " + (mobileOpen ? "open" : "")} onClick={() => setMobileOpen(false)}>
        <div className="mobile-sheet-inner" onClick={e => e.stopPropagation()}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
            <div className="brand">
              <div className="brand-mark" style={{ background: accent }}>T</div>
              <div className="brand-name">thai bear<span className="dot" style={{ color: accent }}>.</span></div>
            </div>
            <button className="menu-toggle" style={{ display: "inline-flex" }} onClick={() => setMobileOpen(false)}><Icon.Close/></button>
          </div>
          {links.map(l => (
            <div
              key={l.id}
              className={"mobile-link " + (page === l.id ? "active" : "")}
              onClick={() => { setPage(l.id); setMobileOpen(false); }}
              style={page === l.id ? { background: accent } : null}
            >{l.label}</div>
          ))}
          <button className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: 16, background: accent }} onClick={() => { openChat(); setMobileOpen(false); }}>
            <Icon.Chat/> Написать в чат
          </button>
        </div>
      </div>
    </header>
  );
}

/* ===================== FOOTER ===================== */
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.55 }}>
              визы / юр.услуги / обмен валют
            </div>
            <div className="footer-big">thai bear.</div>
          </div>
          <a className="btn btn-primary btn-lg" href="#" onClick={e => { e.preventDefault(); }}>
            Написать в Telegram <Icon.Arrow/>
          </a>
        </div>

        <div className="footer-grid">
          <div>
            <h5>О сервисе</h5>
            <p style={{ opacity: 0.8, maxWidth: 360, lineHeight: 1.6 }}>
              thai bear — визово-сервисный бренд по Таиланду. Оформляем визы,
              ведём юридические вопросы и обмен валют — быстро, прозрачно, без бюрократии.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <a className="fab-social tg" href="#" aria-label="Telegram"><Icon.Telegram/></a>
              <a className="fab-social wa" href="#" aria-label="WhatsApp"><Icon.WhatsApp/></a>
              <a className="fab-social ig" href="#" aria-label="Instagram"><Icon.Instagram/></a>
            </div>
          </div>

          <div>
            <h5>Навигация</h5>
            <ul>
              <li onClick={() => setPage("home")}>Главная</li>
              <li onClick={() => setPage("visas")}>Визы</li>
              <li onClick={() => setPage("legal")}>Юр услуги</li>
              <li onClick={() => setPage("currency")}>Обмен валют</li>
              <li onClick={() => setPage("reviews")}>Отзывы</li>
              <li onClick={() => setPage("about")}>О нас</li>
            </ul>
          </div>

          <div>
            <h5>Популярные визы</h5>
            <ul>
              <li>Туристическая</li>
              <li>Долгосрочная</li>
              <li>Студенческая</li>
              <li>Рабочая</li>
              <li>Пенсионная</li>
              <li>Цифровой кочевник</li>
            </ul>
          </div>

          <div>
            <h5>Связаться</h5>
            <ul>
              <li>Telegram → @thaibear</li>
              <li>WhatsApp → +66 ...</li>
              <li>Instagram → @thaibear</li>
              <li>hello@thaibear.co</li>
              <li>Пн–Вс · 09:00–22:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 thai bear. Все права защищены.</div>
          <div>Сделано с любовью в Таиланде.</div>
        </div>
      </div>
    </footer>
  );
}

/* ===================== FLOATING CHAT + FAB ===================== */
function FloatingChat({ open, setOpen, accent }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Привет! 👋 Я Пинк — ассистент команды. Чем поможем сегодня?" },
    { from: "bot", text: "Выбери тему, или напиши свой вопрос — оператор подключится за минуту.", quick: ["Виза 🇹🇷", "Виза 🇪🇺", "Юр услуги", "Обмен валют"] },
  ]);
  const [text, setText] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  const send = (msg) => {
    if (!msg.trim()) return;
    setMessages(m => [...m, { from: "me", text: msg }]);
    setText("");
    setTimeout(() => {
      setMessages(m => [...m, { from: "bot", text: "Понял! Передаю оператору. Можем уточнить пару деталей — для какой страны, на какие даты?" }]);
    }, 800);
  };

  if (!open) return null;
  return (
    <div className="chat-panel" role="dialog" aria-label="Live chat">
      <div className="chat-head" style={{ background: accent }}>
        <div className="chat-avatar"><img src="assets/bear-tv-hero.png" alt=""/></div>
        <div>
          <div className="title">Пинк · поддержка</div>
          <div className="status"><span className="dot"></span> онлайн · ответим за ~1 мин</div>
        </div>
        <button className="chat-close" onClick={() => setOpen(false)}><Icon.Close/></button>
      </div>
      <div className="chat-body" ref={bodyRef}>
        {messages.map((m, i) => (
          <React.Fragment key={i}>
            <div className={"bubble " + m.from}>{m.text}</div>
            {m.quick && (
              <div className="quick-replies">
                {m.quick.map(q => (
                  <button key={q} onClick={() => send(q)}>{q}</button>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="chat-socials">
        <a href="#"><Icon.Telegram s={14}/> Telegram</a>
        <a href="#"><Icon.WhatsApp s={14}/> WhatsApp</a>
        <a href="#"><Icon.Instagram s={14}/> Instagram</a>
      </div>
      <form className="chat-input" onSubmit={e => { e.preventDefault(); send(text); }}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Напишите сообщение…"/>
        <button type="submit" className="chat-send" style={{ background: accent }}><Icon.Send/></button>
      </form>
    </div>
  );
}

function Fab({ chatOpen, setChatOpen, accent }) {
  const [expanded, setExpanded] = useState(false);
  if (chatOpen) return null;
  return (
    <div className="fab-cluster">
      <div className={"fab-socials " + (expanded ? "" : "collapsed")}>
        <a className="fab-social tg" href="#" aria-label="Telegram"><Icon.Telegram s={20}/></a>
        <a className="fab-social wa" href="#" aria-label="WhatsApp"><Icon.WhatsApp s={20}/></a>
        <a className="fab-social ig" href="#" aria-label="Instagram"><Icon.Instagram s={20}/></a>
      </div>
      <button
        className="fab-main"
        style={{ background: accent }}
        onClick={() => { if (!expanded) { setExpanded(true); } else { setChatOpen(true); setExpanded(false); } }}
        onMouseEnter={() => setExpanded(true)}
      >
        <span className="pulse" style={{ borderColor: accent }}></span>
        <Icon.Chat s={24}/>
      </button>
    </div>
  );
}

/* ===================== CTA BANNER ===================== */
function CtaBanner({ title, sub, accent, openChat }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner" style={{ background: accent }}>
          <div>
            <div className="eyebrow lemon" style={{ marginBottom: 14 }}>★ начать сейчас</div>
            <h2>{title}</h2>
            <p style={{ fontSize: 17, opacity: 0.92, maxWidth: 520, marginTop: 14 }}>{sub}</p>
            <div className="actions">
              <button className="btn btn-ink btn-lg" onClick={openChat}><Icon.Chat/> Открыть чат</button>
            </div>
          </div>
          <img className="bear" src="assets/bear-tv-hero.png" alt=""/>
        </div>
      </div>
    </section>
  );
}

/* ===================== MARQUEE TICKER ===================== */
function Ticker({ items }) {
  const list = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {list.map((t, i) => (
          <span key={i} className="ticker-item">
            <span className="star">✦</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Icon, GraffitiDrip, StarBurst, Header, Footer, FloatingChat, Fab, CtaBanner, Ticker });
