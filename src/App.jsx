
import React from "react";
import heroImage from "./assets/hero.png";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
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

  waiverUrl:
    "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=3900532",

  heroImage,
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
      "Keep moving with energetic drills and small-area games that get your heart rate up.",
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
              development, a great workout, and a welcoming group.
            </p>

            <div className="hero__footnote">
              <span className="hero__footnote-icon">
                <Check size={16} strokeWidth={3} aria-hidden="true" />
              </span>
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
            <h2 id="expect-heading">
              <span>YOUR HOUR.</span> <span>YOUR GAME.</span>
            </h2>

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

            <div className="how-section__waiver">
              <LinkButton href={PROGRAM.waiverUrl}>
                SIGN WAIVER ONLINE
              </LinkButton>
            </div>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step__number">01</span>

              <div>
                <h3>Complete Your Waiver</h3>
                <p>
                  Sign the participant waiver online before
                  arriving. It only needs to be completed once.
                </p>
                <a
                  href={PROGRAM.waiverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="step__link"
                >
                  Sign waiver online
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
                  at the front desk upon arrival.
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
    </main>
  );
}
