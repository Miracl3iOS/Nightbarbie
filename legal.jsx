/* global React, Icon, CtaBanner */

function PageAbout({ setPage, accent, openChat }) {
  return (
    <main data-screen-label="About">
      {/* HERO */}
      <section className="page-hero" data-screen-label="About / Hero">
        <div className="container">
          <div className="crumb">Главная <span className="sep">/</span> О нас</div>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40, alignItems: "center" }}>
            <div>
              <div className="eyebrow pink" style={{ background: accent, marginBottom: 18 }}>★ thai bear · с 2022</div>
              <h1 style={{ fontSize: "clamp(48px, 7vw, 120px)" }}>
                Сервис нового<br/>поколения для<br/>
                <span className="hl" style={{ background: accent }}>тех, кому надоело</span>
              </h1>
              <p className="lead" style={{ marginTop: 22 }}>
                Мы — thai bear. Команда визово-юридического сервиса по Таиланду.
                Никаких серых ковролинов и тёть за стеклом — только чат, скорость,
                честные цены и розовый медведь.
              </p>
              <div className="hero-cta-row">
                <button className="btn btn-primary btn-lg" style={{ background: accent }} onClick={openChat}>
                  Написать команде <Icon.Arrow/>
                </button>
                <button className="btn btn-ghost btn-lg" onClick={() => setPage("visas")}>Что мы делаем</button>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div className="slot-wrap pink-22" style={{ maxWidth: 480, aspectRatio: "1/1", borderRadius: "var(--r-lg)" }}>
                <div className="slot-label">медведь · team hero</div>
                <image-slot id="about-hero-bear" placeholder="перетащите арт" shape="rounded" radius="22"></image-slot>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="about-strip" style={{ background: accent }} data-screen-label="About / Mission">
        <div className="container">
          <div className="eyebrow lemon" style={{ marginBottom: 18 }}>★ миссия</div>
          <h2 style={{ maxWidth: 1100 }}>
            Сделать миграцию,<br/>визы и валюту <span className="hl hl-ink">страшными</span><br/>
            простыми, быстрыми и красивыми.
          </h2>
        </div>
      </section>

      {/* STORY */}
      <section className="section" data-screen-label="About / Story">
        <div className="container">
          <div className="media-row">
            <div>
              <div className="eyebrow">★ история</div>
              <h2 style={{ marginTop: 12 }}>Как мы появились</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                В 2022 году много людей вдруг столкнулись с задачами, к которым были не готовы:
                визы, ВНЖ, переезды, обмен валюты. Сервисов было много, но все они выглядели
                так, будто их верстали в 2008-м, разговаривали канцеляритом и считали клиентов
                по головам.
              </p>
              <p className="lead" style={{ marginTop: 14 }}>
                Мы собрались командой юристов, визовиков и дизайнеров и сделали то, чего нам
                самим не хватало: сервис, где можно решить вопрос в чате, без бюрократии,
                по фикс прайсу, и где не стыдно показать главную страницу другу. Назвали в честь
                нашего талисмана — розового медведя.
              </p>
            </div>
            <div className="media-frame">
              <div className="sticker">★ thai bear · since 2022</div>
              <image-slot id="about-story-bear" placeholder="перетащите арт-маскота" shape="rounded" radius="22"></image-slot>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES / PRINCIPLES */}
      <section className="section" style={{ background: "var(--pink-wash)" }} data-screen-label="About / Values">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">★ принципы</div>
              <h2>На чём держится<br/><span style={{ color: accent }}>розовый</span> сервис.</h2>
            </div>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-num" style={{ color: accent }}>01</div>
              <div className="card-title">Скорость без потери качества</div>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                5 минут — наш отраслевой стандарт ответа. Но «быстро» — это не «лишь бы».
                Каждый документ проверяется дважды.
              </p>
            </div>
            <div className="card card-pink" style={{ background: accent }}>
              <div className="card-num" style={{ color: "var(--lemon)" }}>02</div>
              <div className="card-title">Прозрачность как стандарт</div>
              <p style={{ color: "rgba(255,255,255,0.92)", margin: 0 }}>
                Цены — на сайте и в договоре. Никаких «всплыло ещё 8 000» и комиссий мелким шрифтом.
              </p>
            </div>
            <div className="card">
              <div className="card-num" style={{ color: accent }}>03</div>
              <div className="card-title">Чат, а не колл-центр</div>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                Мы не звоним с городского, не предлагаем «оформить пакет премиум».
                Просто чат, где быстро отвечают.
              </p>
            </div>
            <div className="card">
              <div className="card-num" style={{ color: accent }}>04</div>
              <div className="card-title">1:1 личный менеджер</div>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                Не очередь и не «робот в скрипте». Один человек ведёт вас от начала до результата.
              </p>
            </div>
            <div className="card">
              <div className="card-num" style={{ color: accent }}>05</div>
              <div className="card-title">Договор и гарантии</div>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                Каждый кейс — на договоре. NDA, гарантии, возврат при отказе. Это база.
              </p>
            </div>
            <div className="card card-ink">
              <div className="card-num" style={{ color: "var(--lemon)" }}>06</div>
              <div className="card-title" style={{ color: "var(--cream)" }}>Красиво — это уважение</div>
              <p style={{ color: "rgba(255,251,247,0.7)", margin: 0 }}>
                Сайт, переписка, документы, упаковка — всё должно быть красиво.
                Это знак уважения к клиенту.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section" data-screen-label="About / Numbers">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">★ цифры</div>
              <h2>Что у нас за плечами.</h2>
            </div>
          </div>
          <div className="grid grid-4">
            <div className="bignum"><div className="n" style={{ color: accent }}>4y</div><h4>в индустрии</h4><p>С 2022 года, без перерывов и каникул.</p></div>
            <div className="bignum"><div className="n" style={{ color: accent }}>8.4k</div><h4>клиентов</h4><p>Большинство — приходят повторно или по рекомендации.</p></div>
            <div className="bignum"><div className="n" style={{ color: accent }}>22</div><h4>в команде</h4><p>Юристы, визовики, дизайнеры, операторы поддержки.</p></div>
            <div className="bignum"><div className="n" style={{ color: accent }}>4</div><h4>офиса</h4><p>Москва, Дубай, Стамбул, Белград.</p></div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK / TIMELINE */}
      <section className="section" style={{ background: "var(--ink)", color: "var(--cream)" }} data-screen-label="About / How we work">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow pink" style={{ background: accent }}>★ как мы работаем</div>
              <h2 style={{ color: "var(--cream)" }}>Идеология сервиса<br/>в шести пунктах.</h2>
            </div>
          </div>
          <div className="grid grid-2">
            {[
              { n: "Сначала разбираемся, потом считаем", d: "Первая консультация — всегда бесплатная. Сначала понимаем задачу, потом обсуждаем цену." },
              { n: "Один менеджер на всю историю", d: "Никаких «передам коллегам». Один человек знает вашу историю и доводит до результата." },
              { n: "Чат как основной канал", d: "Telegram, WhatsApp, чат на сайте. Звонки — только если вы сами хотите голосом." },
              { n: "Договор и фикс прайс", d: "Каждый кейс — на договоре с конкретной стоимостью. Без «плюс комиссия консульства» под звёздочкой." },
              { n: "Прозрачность процесса", d: "Каждый шаг — с фиксацией. Видите статус, кто ведёт, что сейчас на проверке." },
              { n: "Долгосрочные отношения", d: "Виза — это начало. Дальше — ВНЖ, продление, обмен валюты, недвижимость. Мы рядом." },
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 18, padding: "18px 0", borderTop: "1px solid rgba(255,251,247,0.1)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: accent, lineHeight: 1, width: 48, flexShrink: 0 }}>0{i + 1}</div>
                <div>
                  <h4 style={{ color: "var(--cream)" }}>{p.n}</h4>
                  <p style={{ color: "rgba(255,251,247,0.7)", marginTop: 6 }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PLACEHOLDER GRID */}
      <section className="section" data-screen-label="About / Team">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">★ команда</div>
              <h2>Люди, которые<br/>держат всё это.</h2>
            </div>
            <p className="lead" style={{ maxWidth: 360 }}>Здесь будут фотографии команды. Пока — медведь.</p>
          </div>
          <div className="grid grid-4">
            {["Анна · CEO", "Михаил · юрист", "Карина · визы", "Олег · валюта"].map((m, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div className="slot-wrap" style={{ background: i % 2 ? "var(--pink-wash)" : "color-mix(in oklch, " + accent + " 18%, white)", aspectRatio: "4/5", borderRadius: 0 }}>
                  <image-slot id={"team-" + i} placeholder="фото команды" shape="rounded" radius="0"></image-slot>
                </div>
                <div style={{ padding: 18 }}>
                  <h4>{m.split(" · ")[0]}</h4>
                  <p style={{ color: "var(--muted)", fontSize: 13, margin: 0 }}>{m.split(" · ")[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Поговорим? Без формальностей."
        sub="Если хотите узнать больше о команде, поработать с нами или просто поздороваться — напишите. Мы любим знакомиться."
        accent={accent}
        openChat={openChat}
      />
    </main>
  );
}

window.PageAbout = PageAbout;
