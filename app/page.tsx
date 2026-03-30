"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

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
    title: "Home Page",
    lead:
      "The child and the adult immediately see the three main directions: letter discovery, game-based reinforcement, and cartoons for review.",
    bullets: [
      "clear navigation without overload",
      "an easy entry point where the logic of the whole learning journey is visible at once",
      "each section leads to its own type of learning activity, and together they form one complete system",
    ],
    shots: ["/fairy-english/projects/home1.png"],
    shotAlt: "Fairy English home page",
    shotLabel: "PNG / screenshot of the home page",
  },
  {
    id: "forest",
    title: "Enchanted Letter Forest — Discovering the Letter",
    lead:
      "Each letter opens as its own small learning story: the child listens, watches, interacts, and gradually remembers the sound, the image, and the word.",
    bullets: [
      "methodical guidance for the adult",
      "visual support: the letter, words, and illustrations",
      "a short cartoon or song for emotional memorization",
      "a gradual introduction to the material without overload or rush",
    ],
    shots: ["/fairy-english/projects/forest1.png"],
    shotAlt: "Letter page in Letter Forest",
    shotLabel: "PNG / screenshot of the letter page",
  },
  {
    id: "games",
    title: "Unique Original Games — English Through Action",
    lead:
      "The game block is not created as separate entertainment, but as a strong part of the learning journey. These original games help the child interact with letters, words, and images again and again, so knowledge is reinforced naturally, emotionally, and without overload.",
    bullets: [
      "the games are built into one learning logic: see → hear → recognize → play → repeat",
      "the app uses different types of mechanics: recognition, matching, search, choice, drag-and-drop, and short interactive mini-scenarios",
      "each game trains specific skills: attention, visual memory, the connection between letter, word, and image, reaction speed, and confident recognition of the material",
      "through play, the child moves from first contact with a letter to quick and easy recognition without strain",
      "this format can be scaled further: adapted to new language versions, new sets of letters, and new educational scenarios",
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
    shotAlt: "Original Fairy English games",
    shotLabel: "PNG / screenshot of the game block",
  },
  {
    id: "cartoons",
    title: "Singing Letter Valley — Cartoon Library",
    lead:
      "A separate cartoon library makes it easy to return to letters that have already been learned and review the material in a format that is comfortable for the child.",
    bullets: [
      "all videos are collected in one place",
      "the child can quickly find the needed letter",
      "this section combines emotional reinforcement, review, and gentle rest",
    ],
    shots: [
      "/fairy-english/projects/cartoons1.png",
      "/fairy-english/projects/cartoons2.png",
      "/fairy-english/projects/cartoons3.png",
    ],
    shotAlt: "Fairy English cartoon library",
    shotLabel: "PNG / screenshot of the cartoons page",
  },
  {
    id: "castle",
    title: "Magic Letter Forest — A Separate Space for Reinforcement",
    lead:
      "This block works as a separate interactive space where the child returns to familiar letters, navigates the material, and reinforces the alphabet through simple and engaging interaction.",
    bullets: [
      "the child recognizes letters in a separate visual environment",
      "the tasks support alphabet orientation and confidence in the material already learned",
      "review happens naturally through action rather than mechanical memorization",
    ],
    shots: [
      "/fairy-english/projects/castle1.png",
      "/fairy-english/projects/castle2.png",
      "/fairy-english/projects/castle3.png",
      "/fairy-english/projects/castle4.png",
      "/fairy-english/projects/castle5.png",
    ],
    shotAlt: "Letter Castle game block",
    shotLabel: "PNG / screenshot of Letter Castle",
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

export default function ProductOverviewPage() {
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
          <h1 className={styles.title}>Product Overview</h1>
        </div>
      </header>

      <section className={`${styles.card} ${styles.cardGhost}`}>
        <div className={styles.cloudTrail}>
          <div className={`${styles.cloud} ${styles.cloud1}`}>
            <p>
              <b>Our project</b> is an interactive children’s app for a first
              introduction to English through <b>letters, images, cartoons, and games</b>.
            </p>
          </div>

          <div className={`${styles.cloud} ${styles.cloud2}`}>
            <p>
              We combine what children love most: a bright visual fairy-tale
              world, simple interactive actions, short videos, and repetition
              through play.
            </p>
          </div>

          <div className={`${styles.cloud} ${styles.cloud3}`}>
            <p>
              The app is built on the principle of <b>from simple to more advanced</b>:
              first the child gets to know the letter, then connects it with a
              word and an image, and after that reinforces the knowledge through
              game-based tasks.
            </p>
          </div>

          <div className={`${styles.cloud} ${styles.cloud4}`}>
            <p>
              This format helps the child not just “see a letter,” but <b>remember it
              emotionally, visually, and through action</b>. That is why learning feels
              not like an obligation, but like an exciting adventure.
            </p>
          </div>

          <div className={`${styles.cloud} ${styles.cloud1}`}>
            <p>
              For parents, this is a convenient tool; for the child, it is a
              clear and logically structured journey into the world of English
              learning.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.header}>
        <h2 className={styles.title}>How the Learning Process Is Built</h2>
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
                              alt={`${step.shotAlt} — slide ${current + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 960px"
                            />

                            {total > 1 ? (
                              <>
                                <button
                                  type="button"
                                  className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
                                  onClick={() => goPrev(step.id, total)}
                                  aria-label={`Previous slide: ${step.title}`}
                                >
                                  ‹
                                </button>

                                <button
                                  type="button"
                                  className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
                                  onClick={() => goNext(step.id, total)}
                                  aria-label={`Next slide: ${step.title}`}
                                >
                                  ›
                                </button>
                              </>
                            ) : null}
                          </div>

                          {total > 1 ? (
                            <div
                              className={styles.carouselDots}
                              aria-label="Slide navigation"
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
                                  aria-label={`Go to slide ${dotIndex + 1}`}
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
        <h2 className={styles.h2}>Why This Is a Strong Format</h2>

        <div className={styles.keyList}>
          <div className={styles.keyItem}>
            <span className={styles.keyNum}>1</span>
            <div className={styles.keyBody}>
              <b>One Connected Learning Ecosystem</b>
              <span className={styles.keyText}>
                Letters, games, and cartoons are not separated from each other,
                but work as one connected learning journey.
              </span>
            </div>
          </div>

          <div className={styles.keyItem}>
            <span className={styles.keyNum}>2</span>
            <div className={styles.keyBody}>
              <b>A Low Entry Barrier for the Child</b>
              <span className={styles.keyText}>
                The interface is intuitive, the tasks are short and clear, and
                the visual language is friendly and gentle.
              </span>
            </div>
          </div>

          <div className={styles.keyItem}>
            <span className={styles.keyNum}>3</span>
            <div className={styles.keyBody}>
              <b>Repetition Without Boredom</b>
              <span className={styles.keyText}>
                The child returns to familiar material through different forms
                of interaction: watching, listening, tapping, searching, and
                matching.
              </span>
            </div>
          </div>

          <div className={styles.keyItem}>
            <span className={styles.keyNum}>4</span>
            <div className={styles.keyBody}>
              <b>Scalable Potential</b>
              <span className={styles.keyText}>
                This architecture can easily grow: new letters, new games, new
                cartoons, new language versions, and new educational scenarios.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}