/* global React, Icon, Ticker, CtaBanner */
const { useState: useStateHome } = React;

function PageHome({ setPage, accent, openChat }) {
  return (
    <main data-screen-label="Home">
      {/* HERO */}
      <section className="hero" data-screen-label="Home / Hero">
        <div className="hero-bear-full" aria-hidden="true">
          <img src="assets/bear-tv-hero.png" alt=""/>
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="eyebrow pink" style={{ background: accent, marginBottom: 18 }}>
                ★ визы в Таиланд · от 23 000 ₽
              </div>
              <h1 className="hero-title">
                <span className="hl" style={{ background: accent }}>Thai Elite</span><br/>
                и все визы<br/>
                Таиланда.
              </h1>
              <p className="lead" style={{ marginTop: 18, fontSize: 17 }}>
                Elite, рабочая, пенсионная, туристическая, DTV — оформляем без вашего присутствия.
                Юр услуги, обмен валют, сопровождение.
              </p>
              <div className="hero-cta-row">
                <button className="btn btn-primary btn-lg" style={{ background: accent }} onClick={openChat}>
                  Начать оформление <Icon.Arrow/>
                </button>
                <button className="btn btn-ghost btn-lg" onClick={() => setPage("visas")}>
                  Все визы
                </button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><div className="v" style={{ color: accent }}>5</div><div className="l">типов виз</div></div>
                <div className="hero-stat"><div className="v">15y</div><div className="l">макс. Elite</div></div>
                <div className="hero-stat"><div className="v">97%</div><div className="l">одобрений</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <Ticker items={[
        "Thai Elite · 5/10/15 лет · VIP-сопровождение",
        "рабочая · пенсионная · туристическая · DTV",
        "обмен ₽ / ฿ / USDT · без присутствия",
        "Пхукет · Бангкок · Паттая · Самуи",
        "сопровождение · юр услуги · недвижимость"
      ]}/>

      {/* BEAR GALLERY — drop-in slots for user-supplied bear art */}
      <section className="section section-sm" data-screen-label="Home / Bear gallery">
        <div className="container">
          <div className="bear-gallery">
            <div className="slot-wrap bg-1 pink-22">
              <div className="slot-label">медведь · lifestyle</div>
              <image-slot id="bear-lifestyle" placeholder="перетащите арт сюда" shape="rounded" radius="22"></image-slot>
            </div>
            <div className="slot-wrap">
              <div className="slot-label">медведь · guide</div>
              <image-slot id="bear-guide" placeholder="арт-маскот" shape="rounded" radius="22"></image-slot>
            </div>
            <div className="slot-wrap lemon">
              <div className="slot-label" style={{ background: "var(--ink)", color: "var(--lemon)" }}>медведь · с документами</div>
              <image-slot id="bear-docs" placeholder="арт-маскот" shape="rounded" radius="22"></image-slot>
            </div>
            <div className="slot-wrap violet">
              <div className="slot-label">медведь · в чате</div>
              <image-slot id="bear-chat" placeholder="арт-маскот" shape="rounded" radius="22"></image-slot>
            </div>
            <div className="slot-wrap pink" style={{ background: accent }}>
              <div className="slot-label">медведь · sticker</div>
              <image-slot id="bear-sticker" placeholder="арт-маскот" shape="rounded" radius="22"></image-slot>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES — three services */}
      <section className="section" data-screen-label="Home / Services">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">★ что мы делаем</div>
              <h2>Три услуги.<br/>Один сервис.</h2>
            </div>
            <p className="lead" style={{ maxWidth: 380 }}>
              Закрываем всё, что нужно для переезда, поездки и жизни за границей —
              от подачи на визу до обмена валюты с собой в дорогу.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card card-pink" onClick={() => setPage("visas")} style={{ background: accent, cursor: "pointer" }}>
              <div className="card-tag">01 / визы</div>
              <div className="card-title" style={{ fontSize: 38 }}>Все визы Таиланда под ключ</div>
              <ul className="checks" style={{ marginTop: 8 }}>
                <li style={{ color: "white" }}>Thai Elite — 5, 10 или 15 лет</li>
                <li style={{ color: "white" }}>Рабочая, пенсионная, туристическая, DTV</li>
                <li style={{ color: "white" }}>Без вашего личного присутствия</li>
              </ul>
              <div className="card-row">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.85 }}>от 23 000 ₽</div>
                <div className="arrow"><Icon.Arrow/></div>
              </div>
            </div>

            <div className="card" onClick={() => setPage("legal")} style={{ cursor: "pointer" }}>
              <div className="card-tag">02 / юридические</div>
              <div className="card-title">Юр услуги в Таиланде</div>
              <p style={{ color: "var(--muted)", margin: 0, fontSize: 15 }}>
                Регистрация компаний, релокация бизнеса, бухгалтерия, лицензии,
                нотариус, недвижимость, договоры и переводы документов.
              </p>
              <div className="card-row">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>цена индивидуально</div>
                <div className="arrow"><Icon.Arrow/></div>
              </div>
            </div>

            <div className="card card-violet" onClick={() => setPage("currency")} style={{ cursor: "pointer" }}>
              <div className="card-tag">03 / обмен валют</div>
              <div className="card-title">Обмен ₽ / ฿ / USDT</div>
              <p style={{ color: "rgba(255,255,255,0.92)", margin: 0, fontSize: 15 }}>
                Рубли, баты, доллары, USDT — наличные, перевод, крипта.
                Пхукет, Бангкок, Паттая, Самуи. Безопасные сделки, выезд курьера.
              </p>
              <div className="card-row">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.85 }}>прозрачный курс · договор</div>
                <div className="arrow" style={{ background: "white", color: "var(--violet)" }}><Icon.Arrow/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US — big numbers */}
      <section className="section section-sm" data-screen-label="Home / Why us">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow pink" style={{ background: accent }}>★ почему мы</div>
              <h2>Не агентство.<br/>А ваш <span className="hl" style={{ background: accent }}>розовый</span> личный менеджер.</h2>
            </div>
          </div>
          <div className="grid grid-4">
            <div className="bignum"><div className="n" style={{ color: accent }}>5'</div><h4>До старта</h4><p>Пять минут от первого сообщения до запуска оформления.</p></div>
            <div className="bignum"><div className="n" style={{ color: accent }}>97%</div><h4>Одобрений</h4><p>Готовим документы так, чтобы консул не нашёл, к чему придраться.</p></div>
            <div className="bignum"><div className="n" style={{ color: accent }}>1:1</div><h4>Личный менеджер</h4><p>Один человек ведёт вас от начала до штампа в паспорте.</p></div>
            <div className="bignum"><div className="n" style={{ color: accent }}>0₽</div><h4>За консультацию</h4><p>Сначала разбираемся бесплатно, потом считаем услугу.</p></div>
          </div>
        </div>
      </section>

      {/* FEATURED VISAS — Thailand only */}
      <section className="section" style={{ background: "var(--pink-wash)" }} data-screen-label="Home / Featured visas">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">★ визы Таиланда</div>
              <h2>5 типов виз.<br/>Под любую <span className="hl" style={{ background: accent }}>задачу</span>.</h2>
            </div>
            <button className="btn btn-ink" onClick={() => setPage("visas")}>Все визы <Icon.Arrow/></button>
          </div>

          <div className="grid grid-3">
            {[
              { tag: "Thai Elite", name: "Elite Visa", sub: "5 / 10 / 15 лет · VIP", price: "от 650 000 ฿", time: "под ключ" },
              { tag: "Туризм", name: "Туристическая", sub: "60 + 30 дней · 1 или мульти", price: "от 23 000 ₽", time: "6 раб. дней" },
              { tag: "Пенсионная", name: "Пенсионная", sub: "365 дней / год · от 50 лет", price: "90 000 ₽", time: "2 недели" },
              { tag: "Рабочая", name: "Work Visa + Permit", sub: "Бизнес-виза + Work Permit", price: "180 000 ฿", time: "от 6 раб. дней" },
              { tag: "DTV", name: "DTV", sub: "5 лет · фрилансеры и nomads", price: "от 160 000 ₽", time: "10 раб. дней" },
              { tag: "Сопровождение", name: "Border-run, Fast Track, 90-day", sub: "Поддержка после визы", price: "по запросу", time: "—" },
            ].map((v, i) => (
              <div key={i} className="visa-card" style={{ cursor: "pointer" }} onClick={() => setPage("visas")}>
                <div className="card-tag" style={{ background: accent + "22", color: accent }}>{v.tag}</div>
                <h3 style={{ fontSize: 26, marginTop: 4 }}>{v.name}</h3>
                <p style={{ color: "var(--muted)", margin: 0, fontSize: 14 }}>{v.sub}</p>
                <div className="card-row" style={{ marginTop: "auto" }}>
                  <div>
                    <div className="price" style={{ color: accent, fontSize: 22 }}>{v.price}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{v.time}</div>
                  </div>
                  <div className="arrow"><Icon.Arrow/></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL + CURRENCY PREVIEW */}
      <section className="section" data-screen-label="Home / Legal + FX preview">
        <div className="container">
          <div className="grid grid-2">
            <div className="card" style={{ padding: 36, background: "var(--ink)", color: "var(--cream)", border: "none" }}>
              <div className="card-tag" style={{ background: "rgba(255,251,247,0.14)", color: "var(--cream)" }}>02 / юр услуги</div>
              <h3 style={{ fontSize: 36, marginTop: 4 }}>Юристы по Таиланду — без канцелярита</h3>
              <p style={{ opacity: 0.7, fontSize: 16, marginTop: 4 }}>
                Регистрация компаний, релокация бизнеса, бухгалтерия, лицензии,
                нотариальные услуги, недвижимость, договоры и переводы.
              </p>
              <ul className="checks" style={{ marginTop: 16 }}>
                <li style={{ color: "var(--cream)" }}>Иммиграция, корпоративное, семейное и трудовое право</li>
                <li style={{ color: "var(--cream)" }}>Индивидуальная консультация до 1 часа</li>
                <li style={{ color: "var(--cream)" }}>Стоимость — индивидуально под кейс</li>
              </ul>
              <button className="btn btn-primary" style={{ background: accent, marginTop: 24, alignSelf: "flex-start" }} onClick={() => setPage("legal")}>
                Смотреть юр услуги <Icon.Arrow/>
              </button>
            </div>

            <div className="card" style={{ padding: 36, background: "var(--violet)", color: "white", border: "none" }}>
              <div className="card-tag" style={{ background: "rgba(255,255,255,0.18)", color: "white" }}>03 / обмен валют</div>
              <h3 style={{ fontSize: 36, marginTop: 4, color: "white" }}>Рубли, баты, USDT — без сюрпризов</h3>
              <p style={{ opacity: 0.92, fontSize: 16, marginTop: 4 }}>
                Меняем наличные и безнал. Курьер по Пхукету, Бангкоку, Паттае, Самуи.
                Договор на каждую сделку. Крупные суммы — в банковской комнате.
              </p>
              <ul className="checks" style={{ marginTop: 16 }}>
                <li style={{ color: "white" }}>Помощь с банковскими картами и переводами</li>
                <li style={{ color: "white" }}>Прозрачный курс, фиксированная маржа</li>
                <li style={{ color: "white" }}>USDT TRC-20 / ERC-20 в обе стороны</li>
              </ul>
              <button className="btn btn-ink" style={{ marginTop: 24, alignSelf: "flex-start" }} onClick={() => setPage("currency")}>
                К обмену валют <Icon.Arrow/>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="section" style={{ background: "var(--pink-wash)" }} data-screen-label="Home / Reviews preview">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">★ что говорят клиенты</div>
              <h2>1 200+ отзывов.<br/>Средняя оценка <span className="hl" style={{ background: accent }}>4.98</span>.</h2>
            </div>
            <button className="btn btn-ink" onClick={() => setPage("reviews")}>Все отзывы <Icon.Arrow/></button>
          </div>
          <div className="grid grid-3">
            <div className="review-card var-pink" style={{ background: accent }}>
              <div className="review-stars">★★★★★</div>
              <div className="review-text lg">Оформили мне Thai Elite Gold за 3 недели. Я даже не успела понервничать. Не знаю, что они делают, но это работает.</div>
              <div className="review-author">
                <div className="review-avatar">К</div>
                <div><b>Карина М.</b><br/><span style={{ opacity: 0.85, fontSize: 13 }}>Thai Elite Gold</span></div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <div className="review-text">Делали пенсионную визу. Без 800k бат на счёте, без личной подачи — всё через ребят. Папа в Паттае, отдыхает.</div>
              <div className="review-author">
                <div className="review-avatar">А</div>
                <div><b>Артём К.</b><br/><span style={{ opacity: 0.7, fontSize: 13 }}>Пенсионная виза</span></div>
              </div>
            </div>
            <div className="review-card var-ink">
              <div className="review-stars">★★★★★</div>
              <div className="review-text">Был на Пхукете, нужно было срочно поменять баты. Курьер приехал через 40 минут, курс честный. В следующий раз тоже к ним.</div>
              <div className="review-author">
                <div className="review-avatar">Д</div>
                <div><b>Дима О.</b><br/><span style={{ opacity: 0.7, fontSize: 13 }}>Пхукет · обмен ₽/฿</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-strip" style={{ background: accent }} data-screen-label="Home / About preview">
        <div className="container">
          <div className="media-row">
            <div>
              <div className="eyebrow lemon" style={{ marginBottom: 18 }}>★ о бренде</div>
              <h2>Мы thai bear.<br/>Современный, дерзкий, но&nbsp;аккуратный.</h2>
              <p className="lead" style={{ color: "rgba(255,255,255,0.92)", marginTop: 18, maxWidth: 560 }}>
                Сервис нового поколения для тех, кто устал от агентств с серыми ковролинами,
                плохим Wi-Fi и тётями за стеклом. Мы — про скорость, честные цены, чат вместо
                бумажек и про то, что миграционные вопросы не должны быть страшными.
              </p>
              <div className="hero-cta-row" style={{ marginTop: 28 }}>
                <button className="btn btn-ink btn-lg" onClick={() => setPage("about")}>О нас подробно <Icon.Arrow/></button>
                <button className="btn btn-ghost btn-lg" style={{ background: "white" }} onClick={openChat}><Icon.Chat/> Написать в чат</button>
              </div>
            </div>
            <div className="media-frame" style={{ background: "rgba(255,255,255,0.16)" }}>
              <div className="sticker">★ thai bear · brand mascot</div>
              <image-slot id="home-about-bear" placeholder="перетащите арт-маскота" shape="rounded" radius="22"></image-slot>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaBanner
        title="Готовы начать? Это займёт пять минут."
        sub="Опишите задачу в чате или мессенджере — менеджер ответит за минуту, рассчитает стоимость и подскажет ближайшие слоты."
        accent={accent}
        openChat={openChat}
      />
    </main>
  );
}

window.PageHome = PageHome;
