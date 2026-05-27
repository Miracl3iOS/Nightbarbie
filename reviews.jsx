/* global React, Icon, CtaBanner */
const { useState: useStateFx } = React;

function PageCurrency({ setPage, accent, openChat }) {
  const [from, setFrom] = useStateFx({ code: "RUB", amount: 100000 });
  const [to, setTo] = useStateFx({ code: "USD", amount: 0 });
  const [open, setOpen] = useStateFx(0);

  const rates = {
    USD: 92.27,
    THB: 2.55,
    USDT: 92.40,
  };

  React.useEffect(() => {
    // simple convert RUB <-> code
    if (from.code === "RUB") {
      setTo(t => ({ ...t, amount: +(from.amount / (rates[t.code] || 1)).toFixed(2) }));
    } else if (to.code === "RUB") {
      setTo(t => ({ ...t, amount: +(from.amount * (rates[from.code] || 1)).toFixed(2) }));
    } else {
      setTo(t => ({ ...t, amount: +((from.amount * (rates[from.code] || 1)) / (rates[t.code] || 1)).toFixed(2) }));
    }
  }, [from]);

  const faq = [
    { q: "Какой курс — банковский или рыночный?", a: "Мы работаем по рыночному курсу с минимальной маржой. Курс обновляется каждые 30 секунд и фиксируется на момент сделки." },
    { q: "Есть ли минимальная сумма?", a: "Для наличных — от 500 USD/THB-эквивалента. Для безналичных — от 50 USD. Крупные суммы — на отдельных условиях, лучше курс." },
    { q: "Где проходит обмен?", a: "В офисе (Пхукет, Бангкок, Паттая, Самуи) или с выездом курьера. Безналичные и крипта — полностью онлайн." },
    { q: "Это безопасно?", a: "Да. Сделка фиксируется договором, средства проверяются, на крупные суммы — банковская комната. Мы работаем легально и официально." },
    { q: "Принимаете крипту?", a: "USDT TRC-20, ERC-20, BEP-20, BTC. Принимаем и отдаём в обе стороны." },
  ];

  return (
    <main data-screen-label="Currency">
      {/* HERO */}
      <section className="page-hero" style={{ background: "var(--ink)", color: "var(--cream)" }} data-screen-label="Currency / Hero">
        <div className="container">
          <div className="crumb" style={{ color: "rgba(255,251,247,0.6)" }}>Главная <span className="sep" style={{ color: accent }}>/</span> Обмен валют</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 40, alignItems: "center" }}>
            <div>
              <div className="eyebrow pink" style={{ background: accent, marginBottom: 18 }}>★ live · курс обновлён только что</div>
              <h1 style={{ fontSize: "clamp(46px, 6.8vw, 100px)", color: "var(--cream)" }}>
                Обмен валют<br/>
                по курсу,<br/>
                <span className="hl" style={{ background: accent }}>который не больно.</span>
              </h1>
              <p className="lead" style={{ marginTop: 22, color: "rgba(255,251,247,0.8)" }}>
                Рубли, баты, доллары, USDT. Наличные, безнал, крипта.
                Прозрачный курс, безопасные сделки в Бангкоке, Самуи, Пхукете или Паттае — или с выездом курьера.
              </p>
              <div className="hero-cta-row">
                <button className="btn btn-primary btn-lg" style={{ background: accent }} onClick={openChat}>
                  Заказать обмен <Icon.Arrow/>
                </button>
                <button className="btn btn-ghost btn-lg" style={{ background: "transparent", color: "var(--cream)", borderColor: "rgba(255,251,247,0.4)" }} onClick={() => setPage("about")}>Как это работает</button>
              </div>
            </div>

            {/* Live calculator */}
            <div className="fx-card" style={{ background: accent, boxShadow: "0 30px 80px rgba(255,45,155,0.32)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="card-tag" style={{ background: "rgba(255,255,255,0.18)", color: "white" }}>★ калькулятор</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.9 }}>● live · 12 сек назад</div>
              </div>
              <h3 style={{ color: "white", marginTop: 10 }}>Посчитайте, сколько получите</h3>
              <div className="fx-row">
                <div className="fx-field">
                  <label>отдаёте</label>
                  <div className="amt">
                    <input
                      type="text"
                      value={from.amount}
                      onChange={e => setFrom(f => ({ ...f, amount: +e.target.value.replace(/[^0-9.]/g, "") || 0 }))}
                    />
                    <select
                      className="fx-cur"
                      style={{ background: "white", color: accent, border: "none" }}
                      value={from.code}
                      onChange={e => setFrom(f => ({ ...f, code: e.target.value }))}
                    >
                      {Object.keys({ RUB: 1, ...rates }).map(k => <option key={k}>{k}</option>)}
                    </select>
                  </div>
                </div>
                <div className="fx-swap" style={{ background: "white", color: accent }} onClick={() => { setFrom({ ...from, code: to.code }); setTo({ ...to, code: from.code }); }}>
                  <Icon.Swap/>
                </div>
                <div className="fx-field">
                  <label>получаете</label>
                  <div className="amt">
                    <input type="text" value={to.amount} readOnly/>
                    <select
                      className="fx-cur"
                      style={{ background: "white", color: accent, border: "none" }}
                      value={to.code}
                      onChange={e => setTo(t => ({ ...t, code: e.target.value }))}
                    >
                      {Object.keys({ RUB: 1, ...rates }).map(k => <option key={k}>{k}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="fx-meta" style={{ color: "white" }}>
                <span>курс {from.code === "RUB" ? `1 ${to.code} ≈ ${rates[to.code]} ₽` : `1 ${from.code} ≈ ${rates[from.code]} ₽`}</span>
                <span>безопасно · по договору</span>
              </div>
              <button className="btn btn-ink btn-lg" style={{ marginTop: 18, width: "100%" }} onClick={openChat}>
                Зафиксировать курс и обменять <Icon.Arrow/>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RATES STRIP */}
      <section className="section section-sm" data-screen-label="Currency / Rates">
        <div className="container">
          <div className="logo-strip">
            {Object.entries(rates).slice(0, 6).map(([c, v]) => (
              <div key={c}>
                <span style={{ color: accent }}>{c}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, opacity: 0.7, marginLeft: 8 }}>{v} ₽</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" data-screen-label="Currency / Why">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">★ почему через нас</div>
              <h2><span className="hl" style={{ background: accent }}>Удобно.</span> Быстро.<br/>Безопасно.</h2>
            </div>
          </div>
          <div className="grid grid-4">
            <div className="bignum"><div className="n" style={{ color: accent }}>30″</div><h4>Обновление курса</h4><p>Курс — рыночный, обновляется каждые полминуты.</p></div>
            <div className="bignum"><div className="n" style={{ color: accent }}>40′</div><h4>Курьер</h4><p>Привозим наличные в пределах города за 30–60 минут.</p></div>
            <div className="bignum"><div className="n" style={{ color: accent }}>4</div><h4>Локации</h4><p>Пхукет, Бангкок, Паттая, Самуи. Офис + выезд.</p></div>
            <div className="bignum"><div className="n" style={{ color: accent }}>₽/฿</div><h4>Валюты</h4><p>Рубли, баты, доллары, USDT. Наличные и безнал.</p></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: "var(--pink-wash)" }} data-screen-label="Currency / Process">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow pink" style={{ background: accent }}>★ процесс</div>
              <h2>4 шага.<br/>Никакой бюрократии.</h2>
            </div>
          </div>
          <div className="steps">
            <div className="step"><div className="step-num" style={{ color: accent }}>01</div><h4>Заявка</h4><p>Сумма, валюта, локация. Чат, Telegram, WhatsApp — как удобно.</p></div>
            <div className="step"><div className="step-num" style={{ color: accent }}>02</div><h4>Курс и сделка</h4><p>Фиксируем курс на момент договорённости. Готовим договор.</p></div>
            <div className="step"><div className="step-num" style={{ color: accent }}>03</div><h4>Встреча</h4><p>Офис, банковская комната или курьер. По вашему сценарию.</p></div>
            <div className="step"><div className="step-num" style={{ color: accent }}>04</div><h4>Готово</h4><p>Передача, проверка, чек. Чашка кофе — бесплатно.</p></div>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="section" data-screen-label="Currency / Safety">
        <div className="container">
          <div className="media-row">
            <div className="media-frame" style={{ background: "var(--ink)" }}>
              <div className="sticker" style={{ background: accent, color: "white" }}>★ thai bear · safe</div>
              <image-slot id="currency-safety-bear" placeholder="перетащите арт-маскота" shape="rounded" radius="22"></image-slot>
            </div>
            <div>
              <div className="eyebrow">★ безопасность</div>
              <h2 style={{ marginTop: 12 }}>Сделка — это не «в подворотне».</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Мы работаем легально и официально. Каждая сделка — это договор, проверка
                банкнот, безопасная локация и сопровождение.
              </p>
              <ul className="checks" style={{ marginTop: 22 }}>
                <li>Договор и фискальный чек на каждую сделку</li>
                <li>Проверка банкнот детектором и УФ-лампой</li>
                <li>Банковская комната под крупные суммы</li>
                <li>Курьер с подтверждением личности и сопровождением</li>
                <li>Полная конфиденциальность сделки</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" data-screen-label="Currency / FAQ">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">★ FAQ</div>
              <h2>Спрашивают чаще всего.</h2>
            </div>
          </div>
          <div style={{ maxWidth: 880 }}>
            {faq.map((f, i) => (
              <div key={i} className={"faq-item " + (open === i ? "open" : "")} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="faq-q">
                  <span>{f.q}</span>
                  <span className="ico"><Icon.Plus/></span>
                </div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Зафиксируем курс и оформим обмен за 5 минут."
        sub="Напишите сумму, валюту и удобную локацию — пришлём актуальный курс и подтверждение в течение нескольких минут."
        accent={accent}
        openChat={openChat}
      />
    </main>
  );
}

window.PageCurrency = PageCurrency;
