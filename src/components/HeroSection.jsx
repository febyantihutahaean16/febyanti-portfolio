import { useMemo, useState } from "react";
import "../css/HeroSection.css";

export default function HeroSection() {
  const slides = useMemo(
    () => [
      {
        title: "Febyanti.",
        subtitle: "Technology",
        caption: "Current Work: Final-year IT Student",
        imageUrl: "../img/hero-1.jpg",
      },
      {
        title: "Febyanti.",
        subtitle: "Creativity",
        caption: "Current Work: Web Development & Projects",
        imageUrl: "../img/hero-2.jpg",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const active = slides[idx];

  const prev = () => setIdx((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setIdx((p) => (p + 1) % slides.length);

  return (
    <section id="home" className="heroCard">
      <div className="heroMedia">
        <img className="heroImg" src={active.imageUrl} alt={active.subtitle} />
        <div className="heroOverlay" />

        <button
          className="heroNav heroNavLeft"
          onClick={prev}
          aria-label="Prev"
        >
          ‹
        </button>
        <button
          className="heroNav heroNavRight"
          onClick={next}
          aria-label="Next"
        >
          ›
        </button>

        <div className="heroText">
          <div className="heroTitle">
            {active.title} <span className="heroSub">{active.subtitle}</span>
          </div>
          <div className="heroCaption">{active.caption}</div>
        </div>

        <div className="heroDots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === idx ? "active" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
