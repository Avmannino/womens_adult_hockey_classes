
import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Download,
  Dumbbell,
  FileCheck2,
  Heart,
  ShieldCheck,
  UsersRound,
  Wallet,
  Waves,
} from "lucide-react";

// Edit program information here.
const PROGRAM = {
  name: "Women's Adult Hockey Classes",
  price: "$30",
  duration: "60 minutes",
  day: "Thursdays",
  time: "11 AM – 12 PM",
  address: "5 Barry Place, Stamford, CT 06902",
  email: "info@wingsarena.com",

  // PDF must be placed inside the public folder.
  waiverPath: "wings-arena-participant-waiver.pdf",

  // Temporary stock photo. Replace with your Wings Arena photo.
  heroImage:
    "https://images.unsplash.com/photo-1587463003251-ef0048d38978?auto=format&fit=crop&w=1600&q=85",
};

const benefits = [
  {
    number: "01",
    icon: Waves,
    title: "Build Your Skills",
    copy:
      "Work on skating, passing, stick-handling, and shooting with exercises led by a Wings Arena hockey coach.",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Get a Great Workout",
    copy:
      "Keep moving with fun, energetic drills and small-area games that get your heart rate up.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Find Your Crew",
    copy:
      "Enjoy the game with a fun, social group of like-minded people who love being on the ice.",
  },
];

function LinkButton({
  children,
  href,
  kind = "red",
  download = false,
  icon: Icon = ArrowUpRight,
}) {
  return (
    <a
      className={`button button--${kind}`}
      href={href}
      download={download || undefined}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
    >
      <span>{children}</span>
      <Icon size={18} strokeWidth={2.4} aria-hidden="true" />
    </a>
  );
}

export default function App() {
  const waiverUrl = `${import.meta.env.BASE_URL}${PROGRAM.waiverPath}`;

  return (
    <main className="womens-hockey-page" id="top">
      {/* HERO */}
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__stripes" aria-hidden="true" />

        <div className="hero__image">
          <img
            src={PROGRAM.heroImage}
            alt="Women's adult ice hockey"
            loading="eager"
          />
          <div className="hero__image-shade" />
        </div>

        <div className="hero__inner layout-width">
          <div className="hero__copy">
            <h1 id="page-title">
              WOMEN'S
              <span>ADULT HOCKEY</span>
              CLASSES
            </h1>

            <p className="hero__lead">
              Sharpen your skills. Break a sweat. Find your people.
            </p>

            <p className="hero__subtext">
              One-hour, coach-led hockey sessions built around skill
              development, a great workout, and a welcoming group
              that makes every skate fun.
            </p>

            <div className="hero__actions">
              <a className="button button--red" href="#how-it-works">
                <span>HOW TO JOIN</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <a
                className="hero__text-link"
                href={waiverUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileCheck2 size={19} aria-hidden="true" />
                VIEW ONE-TIME WAIVER
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="hero__footnote">
              <Check size={16} aria-hidden="true" />
              Drop-in. No registration required.
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="quick-facts layout-width">
        <div className="quick-fact">
          <span className="quick-fact__icon">
            <Clock3 size={25} aria-hidden="true" />
          </span>
          <div>
            <span className="quick-fact__label">
              SESSION LENGTH
            </span>
            <strong>1 Hour</strong>
          </div>
        </div>

        <div className="quick-fact">
          <span className="quick-fact__icon">
            <Wallet size={25} aria-hidden="true" />
          </span>
          <div>
            <span className="quick-fact__label">
              PAY PER SESSION
            </span>
            <strong>
              $30 <small>/ session</small>
            </strong>
          </div>
        </div>

        <div className="quick-fact">
          <span className="quick-fact__icon">
            <Check size={25} aria-hidden="true" />
          </span>
          <div>
            <span className="quick-fact__label">
              JOIN ANY SESSION
            </span>
            <strong>Just Drop In</strong>
          </div>
        </div>
      </section>

      {/* PROGRAM BENEFITS */}
      <section
        className="intro-section section-pad"
        aria-labelledby="expect-heading"
      >
        <div className="layout-width">
          <div className="intro-section__heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow__line" />
                MORE THAN JUST ICE TIME
              </div>

              <h2 id="expect-heading">
                YOUR HOUR. <span>YOUR GAME.</span>
              </h2>
            </div>

            <div className="intro-section__aside">
              <p>
                Every session combines focused hockey instruction
                with an upbeat, supportive atmosphere. Work hard,
                have fun, and enjoy the ice with people who share
                your passion for the game.
              </p>

              <div className="class-times">
                <span className="class-times__icon">
                  <CalendarDays size={26} aria-hidden="true" />
                </span>
                <div className="class-times__when">
                  <strong>{PROGRAM.day}</strong>
                  <span
                    className="class-times__divider"
                    aria-hidden="true"
                  />
                  <strong>{PROGRAM.time}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="benefit-grid">
            {benefits.map(
              ({ number, icon: Icon, title, copy }) => (
                <article className="benefit" key={number}>
                  <div className="benefit__top">
                    <span className="benefit__icon">
                      <Icon size={29} aria-hidden="true" />
                    </span>
                    <span className="benefit__number">
                      {number}
                    </span>
                  </div>

                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <div className="benefit__red-line" />
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* HOW TO ATTEND */}
      <section
        className="how-section"
        id="how-it-works"
        aria-labelledby="how-heading"
      >
        <div className="layout-width how-section__inner">
          <div className="how-section__intro">
            <h2 id="how-heading">
              NO SIGN-UP.
              <span>JUST SKATE.</span>
            </h2>

            <p>
              Our women's classes are drop-in sessions.
              There's no registration and no long-term
              commitment required—just come ready for an
              hour on the ice.
            </p>

            <div className="drop-in-note">
              <ShieldCheck size={21} aria-hidden="true" />
              <span>
                <strong>
                  Drop-in. No registration required.
                </strong>
                <span className="note-break">
                  One waiver is all you need before your
                  first class.
                </span>
              </span>
            </div>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step__number">01</span>

              <div>
                <h3>Complete Your Waiver</h3>
                <p>
                  Download and complete the participant waiver
                  before arriving. Bring it to the front desk
                  on your first visit. It only needs to be
                  completed once.
                </p>
                <a
                  href={waiverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="step__link"
                >
                  Open waiver PDF
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <FileCheck2
                className="step__icon"
                size={30}
                aria-hidden="true"
              />
            </div>

            <div className="step">
              <span className="step__number">02</span>

              <div>
                <h3>Arrive &amp; Pay</h3>
                <p>
                  Check in and pay{" "}
                  <strong>$30 per session</strong>{" "}
                  at the Wings Arena front desk upon arrival.
                </p>
              </div>

              <Wallet
                className="step__icon"
                size={30}
                aria-hidden="true"
              />
            </div>

            <div className="step">
              <span className="step__number">03</span>

              <div>
                <h3>Hit the Ice</h3>
                <p>
                  Join your Wings Arena hockey coach for an
                  hour of skills, movement, and fun.
                </p>
              </div>

              <Heart
                className="step__icon"
                size={30}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WAIVER */}
      <section
        className="waiver-section"
        aria-labelledby="waiver-heading"
      >
        <div className="layout-width waiver-section__inner">
          <div className="waiver-section__symbol">
            <FileCheck2 size={44} aria-hidden="true" />
          </div>

          <div className="waiver-section__copy">
            <div className="eyebrow">
              <span className="eyebrow__line" />
              BEFORE YOUR FIRST VISIT
            </div>

            <h2 id="waiver-heading">
              ONE-TIME PARTICIPANT WAIVER
            </h2>

            <p>
              Download, print, and complete the Wings Arena
              waiver before your first class, then bring
              it to the front desk. You only need to
              complete it once.
            </p>
          </div>

          <div className="waiver-section__actions">
            <LinkButton
              href={waiverUrl}
              icon={Download}
              download
              kind="navy"
            >
              DOWNLOAD WAIVER
            </LinkButton>
            <span>PDF • 2 pages</span>
          </div>
        </div>
      </section>
    </main>
  );
}
