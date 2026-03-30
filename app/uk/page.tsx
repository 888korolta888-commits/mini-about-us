"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";

type HowStepId = "home" | "games" | "forest" | "castle" | "cartoons";

type HowStep = {
  id: HowStepId;
  title: string;
  lead: string;
  bullets: string[];
  shots: string[];
  shotAlt: string;
  shotLabel: string;
};

const HOW_STEPS: HowStep[] = [
  {
    id: "home",
    title: "Головна сторінка",
    lead:
      "Дитина і дорослий одразу бачать три основні напрями: знайомство з літерою, закріплення через гру та мультфільми для повторення.",
    bullets: [
      "зрозуміла навігація без перевантаження",
      "легка точка входу, де одразу видно логіку всього навчального шляху",
      "кожен розділ веде до свого типу навчальної активності, а разом вони формують єдину цілісну систему",
    ],
    shots: ["/fairy-english/projects/home1.png"],
    shotAlt: "Головна сторінка Fairy English",
    shotLabel: "PNG / скриншот головної сторінки",
  },
  {
    id: "forest",
    title: "Зачарований Ліс Літер — знайомство з літерою",
    lead:
      "Кожна літера відкривається як маленька навчальна історія: дитина слухає, дивиться, взаємодіє та поступово запам’ятовує звук, образ і слово.",
    bullets: [
      "методичні підказки для дорослого",
      "візуальна опора: літера, слова та ілюстрації",
      "короткий мультфільм або пісенька для емоційного запам’ятовування",
      "поступове введення матеріалу без перевантаження і поспіху",
    ],
    shots: ["/fairy-english/projects/forest1.png"],
    shotAlt: "Сторінка літери в Letter Forest",
    shotLabel: "PNG / скриншот сторінки літери",
  },
  {
    id: "games",
    title: "Унікальні авторські ігри — англійська через дію",
    lead:
      "Ігровий блок створений не як окрема розвага, а як сильна частина навчального шляху. Ці авторські ігри допомагають дитині знову і знову взаємодіяти з літерами, словами та образами, тому знання закріплюються природно, емоційно і без перевантаження.",
    bullets: [
      "ігри вбудовані в єдину навчальну логіку: побачити → почути → впізнати → зіграти → повторити",
      "застосунок використовує різні типи механік: впізнавання, поєднання, пошук, вибір, drag-and-drop та короткі інтерактивні мінісценарії",
      "кожна гра тренує конкретні навички: увагу, зорову пам’ять, зв’язок між літерою, словом і зображенням, швидкість реакції та впевнене впізнавання матеріалу",
      "через гру дитина переходить від першого знайомства з літерою до швидкого й легкого впізнавання без напруження",
      "цей формат легко масштабується: його можна адаптувати до нових мовних версій, нових наборів літер і нових освітніх сценаріїв",
    ],
    shots: [
      "/fairy-english/projects/games1.png",
      "/fairy-english/projects/games2.png",
      "/fairy-english/projects/games3.png",
      "/fairy-english/projects/games4.png",
      "/fairy-english/projects/games5.png",
      "/fairy-english/projects/games6.png",
      "/fairy-english/projects/games7.png",
    ],
    shotAlt: "Авторські ігри Fairy English",
    shotLabel: "PNG / скриншот ігрового блоку",
  },
  {
    id: "cartoons",
    title: "Долина Співучих Літер — бібліотека мультфільмів",
    lead:
      "Окрема бібліотека мультфільмів допомагає легко повертатися до вже вивчених літер і повторювати матеріал у форматі, який комфортний для дитини.",
    bullets: [
      "усі відео зібрані в одному місці",
      "дитина може швидко знайти потрібну літеру",
      "цей розділ поєднує емоційне закріплення, повторення та м’який відпочинок",
    ],
    shots: [
      "/fairy-english/projects/cartoons1.png",
      "/fairy-english/projects/cartoons2.png",
      "/fairy-english/projects/cartoons3.png",
    ],
    shotAlt: "Бібліотека мультфільмів Fairy English",
    shotLabel: "PNG / скриншот сторінки з мультфільмами",
  },
  {
    id: "castle",
    title: "Чарівний Ліс Літер — окремий простір для закріплення",
    lead:
      "Цей блок працює як окремий інтерактивний простір, де дитина повертається до знайомих літер, орієнтується в матеріалі та закріплює алфавіт через просту й захопливу взаємодію.",
    bullets: [
      "дитина впізнає літери в окремому візуальному середовищі",
      "завдання підтримують орієнтацію в алфавіті та впевненість у вже вивченому матеріалі",
      "повторення відбувається природно через дію, а не через механічне заучування",
    ],
    shots: [
      "/fairy-english/projects/castle1.png",
      "/fairy-english/projects/castle2.png",
      "/fairy-english/projects/castle3.png",
      "/fairy-english/projects/castle4.png",
      "/fairy-english/projects/castle5.png",
    ],
    shotAlt: "Ігровий блок Letter Castle",
    shotLabel: "PNG / скриншот Letter Castle",
  },
];

type SlideState = Record<HowStepId, number>;

const INITIAL_SLIDES: SlideState = {
  home: 0,
  games: 0,
  forest: 0,
  castle: 0,
  cartoons: 0,
};

export default function ProductOverviewUkPage() {
  const [slides, setSlides] = useState<SlideState>(INITIAL_SLIDES);

  function goPrev(stepId: HowStepId, total: number) {
    setSlides((prev) => ({
      ...prev,
      [stepId]: prev[stepId] === 0 ? total - 1 : prev[stepId] - 1,
    }));
  }

  function goNext(stepId: HowStepId, total: number) {
    setSlides((prev) => ({
      ...prev,
      [stepId]: prev[stepId] === total - 1 ? 0 : prev[stepId] + 1,
    }));
  }

  function goTo(stepId: HowStepId, index: number) {
    setSlides((prev) => ({
      ...prev,
      [stepId]: index,
    }));
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>Огляд проєкту</h1>
        </div>
      </header>

      <section className={`${styles.card} ${styles.cardGhost}`}>
        <div className={styles.cloudTrail}>
          <div className={`${styles.cloud} ${styles.cloud1}`}>
            <p>
              <b>Наш проєкт</b> — це інтерактивний дитячий застосунок для
              першого знайомства з англійською мовою через <b>літери, образи,
              мультфільми та ігри</b>.
            </p>
          </div>

          <div className={`${styles.cloud} ${styles.cloud2}`}>
            <p>
              Ми поєднуємо те, що діти люблять найбільше: яскравий казковий
              візуальний світ, прості інтерактивні дії, короткі відео та
              повторення через гру.
            </p>
          </div>

          <div className={`${styles.cloud} ${styles.cloud3}`}>
            <p>
              Застосунок побудований за принципом <b>від простого до складнішого</b>:
              спочатку дитина знайомиться з літерою, потім поєднує її зі словом
              і зображенням, а після цього закріплює знання через ігрові завдання.
            </p>
          </div>

          <div className={`${styles.cloud} ${styles.cloud4}`}>
            <p>
              Такий формат допомагає дитині не просто “побачити літеру”, а <b>запам’ятати
              її емоційно, візуально і через дію</b>. Саме тому навчання сприймається
              не як обов’язок, а як захоплива пригода.
            </p>
          </div>

          <div className={`${styles.cloud} ${styles.cloud1}`}>
            <p>
              Для батьків це зручний інструмент; для дитини — зрозумілий і
              логічно побудований шлях у світ англійської мови.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.header}>
        <h2 className={styles.title}>Як побудований навчальний процес</h2>
      </div>

      <section className={styles.card}>
        <div className={styles.flow}>
          {HOW_STEPS.map((step, index) => {
            const total = step.shots.length;
            const current = slides[step.id];
            const currentShot = step.shots[current];

            return (
              <div key={step.id}>
                <details>
                  <summary className={styles.stepHeader}>
                    <span className={styles.h3}>{step.title}</span>
                  </summary>

                  <div className={styles.step}>
                    <p className={styles.stepText}>{step.lead}</p>

                    <div className={styles.shot} aria-label={step.title}>
                      {currentShot ? (
                        <div className={styles.carousel}>
                          <div className={styles.carouselViewport}>
                            <Image
                              className={styles.shotImg}
                              src={currentShot}
                              alt={`${step.shotAlt} — слайд ${current + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 960px"
                            />

                            {total > 1 ? (
                              <>
                                <button
                                  type="button"
                                  className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
                                  onClick={() => goPrev(step.id, total)}
                                  aria-label={`Попередній слайд: ${step.title}`}
                                >
                                  ‹
                                </button>

                                <button
                                  type="button"
                                  className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
                                  onClick={() => goNext(step.id, total)}
                                  aria-label={`Наступний слайд: ${step.title}`}
                                >
                                  ›
                                </button>
                              </>
                            ) : null}
                          </div>

                          {total > 1 ? (
                            <div
                              className={styles.carouselDots}
                              aria-label="Навігація по слайдах"
                            >
                              {step.shots.map((_, dotIndex) => (
                                <button
                                  key={`${step.id}-dot-${dotIndex}`}
                                  type="button"
                                  className={
                                    dotIndex === current
                                      ? `${styles.carouselDot} ${styles.carouselDotActive}`
                                      : styles.carouselDot
                                  }
                                  onClick={() => goTo(step.id, dotIndex)}
                                  aria-label={`Перейти до слайду ${dotIndex + 1}`}
                                />
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div className={styles.shotInner}>{step.shotLabel}</div>
                      )}
                    </div>

                    {step.bullets.length ? (
                      <ul className={styles.bullets}>
                        {step.bullets.map((bullet) => (
                          <li key={`${step.id}-${bullet}`}>{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className={styles.shotInner}>{step.shotLabel}</div>
                    )}
                  </div>
                </details>

                {index < HOW_STEPS.length - 1 ? (
                  <div className={styles.arrow} aria-hidden="true" />
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>Чому це сильний формат</h2>

        <div className={styles.keyList}>
          <div className={styles.keyItem}>
            <span className={styles.keyNum}>1</span>
            <div className={styles.keyBody}>
              <b>Єдина навчальна екосистема</b>
              <span className={styles.keyText}>
                Літери, ігри та мультфільми не відокремлені одне від одного, а
                працюють як єдиний пов’язаний навчальний шлях.
              </span>
            </div>
          </div>

          <div className={styles.keyItem}>
            <span className={styles.keyNum}>2</span>
            <div className={styles.keyBody}>
              <b>Низький поріг входу для дитини</b>
              <span className={styles.keyText}>
                Інтерфейс інтуїтивний, завдання короткі й зрозумілі, а візуальна
                мова дружня та м’яка.
              </span>
            </div>
          </div>

          <div className={styles.keyItem}>
            <span className={styles.keyNum}>3</span>
            <div className={styles.keyBody}>
              <b>Повторення без нудьги</b>
              <span className={styles.keyText}>
                Дитина повертається до знайомого матеріалу через різні форми
                взаємодії: перегляд, слухання, натискання, пошук і поєднання.
              </span>
            </div>
          </div>

          <div className={styles.keyItem}>
            <span className={styles.keyNum}>4</span>
            <div className={styles.keyBody}>
              <b>Масштабований потенціал</b>
              <span className={styles.keyText}>
                Ця архітектура легко розвивається: нові літери, нові ігри, нові
                мультфільми, нові мовні версії та нові освітні сценарії.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>Для партнерських запитів</h2>
        <p className={styles.keyText}>
          Ми будемо раді обговорити партнерство, ліцензування або пілотну співпрацю.
        </p>
        <p className={styles.keyText}>
          <b>Email:</b>{" "}
          <a href="mailto:888korolta888@gmail.com">888korolta888@gmail.com</a>
        </p>
      </section>
    </main>
  );
}