import { useEffect, useMemo, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import "../css/ExperienceSection.css";

const experiences = [
  {
    role: "Apple Developer Academy – Foundation Program",
    company: "Apple Developer Academy",
    date: "Jun 2025 – Jul 2025",
    location: "Batam, Indonesia",
    logoUrl: "../img/Apple_logo.png",
    bullets: [
      "Joined an intensive iOS development bootcamp using Swift, Xcode, and the Apple ecosystem.",
      "Strengthened problem-solving and UI/UX understanding through Challenge Based Learning (CBL) and Apple Human Interface Guidelines (HIG) in a small team setting.",
    ],
    popup: {
      title: "Apple Developer Academy – Foundation Program",
      description:
        "Completed an intensive foundation program focusing on Swift, Xcode, iOS fundamentals, and design thinking. Worked in small teams using Challenge Based Learning (CBL) while following Apple Human Interface Guidelines (HIG).",
      certificateImg: "../img/apple_certificate.jpg",
      photoImg: "../img/photo_at_apple.jpg",
      certificateLabel: "Certificate",
      photoLabel: "Experience Photo",
    },
  },
  {
    role: "Teaching Assistant (Discrete Mathematics)",
    company: "Del Institute of Technology",
    date: "Jan 2025 – Jun 2025",
    location: "Laguboti, Indonesia",
    logoUrl: "../img/ITD_logo.jpg",
    bullets: [
      "Assisted in preparing materials and exercises on logic, set theory, and basic algorithms.",
      "Guided students through problem-solving sessions and provided academic support.",
    ],
    popup: {
      title: "Teaching Assistant (Discrete Mathematics)",
      description:
        "Supported the course delivery by preparing tutorial materials, facilitating problem-solving sessions, and helping students strengthen fundamentals in logic, sets, and basic algorithmic thinking.",
      certificateImg: "../img/ta_discrete_certificate.jpg",
      photoImg: "../img/ta_discrete_photo.jpg",
      certificateLabel: "Certificate / Proof",
      photoLabel: "Activity Photo",
    },
  },
  {
    role: "Teaching Assistant (English I)",
    company: "Del Institute of Technology",
    date: "Aug 2024 – Dec 2024",
    location: "Laguboti, Indonesia",
    logoUrl: "../img/ITD_logo.jpg",
    bullets: [
      "Helped prepare teaching materials and assignments for English I.",
      "Supported students in improving basic English communication skills.",
      "Conducted weekly English I tutorial sessions for the 2024 cohort of Diploma III students.",
    ],
    popup: {
      title: "Teaching Assistant (English I)",
      description:
        "Assisted students through weekly tutorial sessions, helped prepare course materials and assignments, and supported improvement of basic English communication skills for the 2024 Diploma III cohort.",
      certificateImg: "../img/ta_english_certificate.jpg",
      photoImg: "../img/ta_english_photo.jpg",
      certificateLabel: "Certificate / Proof",
      photoLabel: "Activity Photo",
    },
  },
];

function LogoBadge({ company, logoUrl }) {
  if (logoUrl) {
    return (
      <div className="xpLogoWrap" aria-hidden="true">
        <img className="xpLogoImg" src={logoUrl} alt="" />
      </div>
    );
  }
  const letter = company?.trim()?.[0]?.toUpperCase() || "•";
  return (
    <div className="xpLogoWrap xpLogoFallback" aria-hidden="true">
      {letter}
    </div>
  );
}

function splitDate(dateStr) {
  const parts = dateStr.split("–").map((s) => s.trim());
  if (parts.length === 2) return { start: parts[0], end: parts[1] };

  const parts2 = dateStr.split("-").map((s) => s.trim());
  if (parts2.length === 2) return { start: parts2[0], end: parts2[1] };

  return { start: dateStr, end: "" };
}

function ExperiencePopup({ open, data, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || !data) return null;

  return (
    <div
      className="xpModalOverlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="xpModal" onClick={(e) => e.stopPropagation()}>
        <button className="xpModalClose" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="xpModalHeader">
          <h3 className="xpModalTitle">{data.title}</h3>
          <p className="xpModalDesc">{data.description}</p>
        </div>

        <div className="xpModalGrid">
          <figure className="xpModalFigure">
            <img
              className="xpModalImg"
              src={data.certificateImg}
              alt={data.certificateLabel || "Certificate"}
            />
            <figcaption className="xpModalCap">
              {data.certificateLabel || "Certificate"}
            </figcaption>
          </figure>

          <figure className="xpModalFigure">
            <img
              className="xpModalImg"
              src={data.photoImg}
              alt={data.photoLabel || "Experience Photo"}
            />
            <figcaption className="xpModalCap">
              {data.photoLabel || "Experience Photo"}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [popup, setPopup] = useState(null);
  const experiencesMemo = useMemo(() => experiences, []);

  const openPopup = (exp) => setPopup(exp.popup);
  const closePopup = () => setPopup(null);

  return (
    <>
      <section className="secWrap" id="experience">
        <div className="secHead">
          <h2 className="secTitle">Experience</h2>
          <p className="secDesc">
            My journey through various projects and roles.
          </p>
        </div>

        <div className="xpTimeline">
          {experiencesMemo.map((e, i) => {
            const { start, end } = splitDate(e.date);

            return (
              <article key={i} className="xpItem">
                {/* LEFT */}
                <div className="xpLineWrap" aria-hidden="true">
                  <div className="xpTime">
                    <span className="xpTimeTop">{start} -</span>
                    {end ? <span className="xpTimeBottom">{end}</span> : null}
                  </div>

                  <div className="xpRail">
                    <span className="xpDot" />
                    {i !== experiencesMemo.length - 1 && (
                      <span className="xpLine" />
                    )}
                  </div>
                </div>

                {/* RIGHT */}
                <div
                  className="xpCard xpCardClickable"
                  onClick={() => openPopup(e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(ev) => {
                    if (ev.key === "Enter" || ev.key === " ") openPopup(e);
                  }}
                  aria-label={`Open details for ${e.role}`}
                >
                  <div className="xpCardTop">
                    <LogoBadge company={e.company} logoUrl={e.logoUrl} />

                    <div className="xpTopText">
                      <div className="xpRole">{e.role}</div>

                      <div className="xpMetaRow">
                        <span className="xpCompany">{e.company}</span>
                        <span className="xpDotSep">•</span>
                        <span className="xpLoc">{e.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="xpBullets">
                    {e.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>

                  {/* ✅ ICON ONLY (no text) */}
                  <button
                    className="xpHintBtn"
                    type="button"
                    onClick={(ev) => {
                      ev.stopPropagation(); // biar gak double-trigger
                      openPopup(e);
                    }}
                    aria-label={`View details for ${e.role}`}
                    title="View details"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ExperiencePopup open={!!popup} data={popup} onClose={closePopup} />
    </>
  );
}
