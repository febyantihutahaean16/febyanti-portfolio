import { useEffect, useMemo, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import "../css/OrganizationSection.css";

const organizations = [
  {
    role: "Treasurer II – Student Executive Board (BEM) IT DEL 2026",
    org: "Del Institute of Technology",
    date: "Present",
    location: "Laguboti, Indonesia",
    chip: "Org",

    logoUrl: "../img/BemITD_logo.png",

    popup: {
      title: "Treasurer II – Student Executive Board (BEM) IT DEL 2026",
      subtitle: "Del Institute of Technology",
      metaLeft: "Present",
      metaRight: "Laguboti, Indonesia",
      description:
        "Handled budgeting workflows and basic reporting for organization activities. Coordinated allocation across divisions while keeping records consistent for accountability.",
      bullets: [
        "Managed budget planning, expense tracking, and basic financial reporting.",
        "Coordinated budget allocation with internal divisions and organizational events.",
        "Ensured accurate and accountable financial records to support internal reviews.",
      ],
      img1: "../img/org_bem_proof.jpg",
      img2: "../img/org_bem_activity.jpg",
      img1Label: "Proof / Document",
      img2Label: "Activity Photo",
    },
  },
  {
    role: "Matriculation Committee",
    org: "Del Institute of Technology",
    date: "Aug 2025",
    location: "Laguboti, Indonesia",
    chip: "Org",
    logoUrl: "../img/ITD_logo.jpg",
    popup: {
      title: "Matriculation Committee",
      subtitle: "Del Institute of Technology",
      metaLeft: "Aug 2025",
      metaRight: "Laguboti, Indonesia",
      description:
        "Supported onboarding for new students through introductory learning sessions and practical guidance to help them adapt academically and culturally.",
      bullets: [
        "Taught basic programming and laptop usage to new students.",
        "Helped freshmen adapt to the learning culture and academic environment at IT Del.",
      ],
      img1: "../img/org_matriculation_proof.jpg",
      img2: "../img/org_matriculation_activity.jpg",
      img1Label: "Proof / Document",
      img2Label: "Activity Photo",
    },
  },
  {
    role: "Cadre Formation Committee for Class of 2024",
    org: "Del Institute of Technology",
    date: "Oct 2024",
    location: "Laguboti, Indonesia",
    chip: "Org",
    logoUrl: "../img/himatifITD_logo.jpg",
    popup: {
      title: "Cadre Formation Committee for Class of 2024",
      subtitle: "Del Institute of Technology",
      metaLeft: "Oct 2024",
      metaRight: "Laguboti, Indonesia",
      description:
        "Organized and facilitated sessions to help new students understand the program and adapt academically and socially.",
      bullets: [
        "Organized introduction and sharing sessions to help new students understand the study program and adapt academically and socially.",
      ],
      img1: "../img/org_cadre_proof.jpg",
      img2: "../img/org_cadre_activity.jpg",
      img1Label: "Proof / Document",
      img2Label: "Activity Photo",
    },
  },
  {
    role: "Program Cinta Almamater (PCA) Committee",
    org: "Del Institute of Technology",
    date: "Aug 2024",
    location: "Laguboti, Indonesia",
    chip: "Org",
    logoUrl: "../img/ITD_logo.jpg",
    popup: {
      title: "Program Cinta Almamater (PCA) Committee",
      subtitle: "Del Institute of Technology",
      metaLeft: "Aug 2024",
      metaRight: "Laguboti, Indonesia",
      description:
        "Supported orientation programs to help new students adapt to dorm and campus life, promoting discipline, critical thinking, and belonging.",
      bullets: [
        "Supported new students in adapting to dormitory and campus life through orientation activities that fostered discipline, critical thinking, and a sense of belonging to Institut Teknologi Del.",
      ],
      img1: "../img/org_pca_proof.jpg",
      img2: "../img/org_pca_activity.jpg",
      img1Label: "Proof / Document",
      img2Label: "Activity Photo",
    },
  },
];

function OrgLogo({ text, logoUrl }) {
  if (logoUrl) {
    return (
      <div className="orgLogoWrap" aria-hidden="true">
        <img className="orgLogoImg" src={logoUrl} alt="" />
      </div>
    );
  }

  const letter = (text || "•").trim()?.[0]?.toUpperCase() || "•";
  return (
    <div className="orgLogoWrap orgLogoFallback" aria-hidden="true">
      {letter}
    </div>
  );
}

function OrgPopup({ open, data, onClose }) {
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

  const bullets = Array.isArray(data.bullets) ? data.bullets : [];

  return (
    <div
      className="orgModalOverlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="orgModal" onClick={(e) => e.stopPropagation()}>
        <button className="orgModalClose" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="orgModalHeader">
          <h3 className="orgModalTitle">{data.title}</h3>
          {data.subtitle ? (
            <div className="orgModalSub">{data.subtitle}</div>
          ) : null}

          {(data.metaLeft || data.metaRight) && (
            <div className="orgModalMeta">
              {data.metaLeft ? <span>{data.metaLeft}</span> : null}
              {data.metaLeft && data.metaRight ? (
                <span className="dotSep">•</span>
              ) : null}
              {data.metaRight ? <span>{data.metaRight}</span> : null}
            </div>
          )}

          {data.description ? (
            <p className="orgModalDesc">{data.description}</p>
          ) : null}
        </div>

        {bullets.length > 0 && (
          <div className="orgModalBody">
            <h4 className="orgModalSectionTitle">Highlights</h4>
            <ul className="orgModalBullets">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="orgModalGrid">
          <figure className="orgModalFigure">
            <img
              className="orgModalImg"
              src={data.img1}
              alt={data.img1Label || "Proof / Document"}
              loading="lazy"
            />
            <figcaption className="orgModalCap">
              {data.img1Label || "Proof / Document"}
            </figcaption>
          </figure>

          <figure className="orgModalFigure">
            <img
              className="orgModalImg"
              src={data.img2}
              alt={data.img2Label || "Activity Photo"}
              loading="lazy"
            />
            <figcaption className="orgModalCap">
              {data.img2Label || "Activity Photo"}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default function OrganizationSection() {
  const [popup, setPopup] = useState(null);
  const orgMemo = useMemo(() => organizations, []);

  const openPopup = (o) => setPopup(o.popup);
  const closePopup = () => setPopup(null);

  return (
    <>
      <section className="secWrap" id="organization">
        <div className="secHead">
          <h2 className="secTitle">Organizational Experience</h2>
          <p className="secDesc">
            Proof you can operate in a team without everything catching fire.
          </p>
        </div>

        <div className="orgGrid">
          {orgMemo.map((o, i) => (
            <article
              key={i}
              className="orgCard orgCardClickable"
              onClick={() => openPopup(o)}
              role="button"
              tabIndex={0}
              onKeyDown={(ev) => {
                if (ev.key === "Enter" || ev.key === " ") openPopup(o);
              }}
              aria-label={`Open details for ${o.role}`}
            >
              <div className="orgTop">
                <OrgLogo text={o.role} logoUrl={o.logoUrl} />

                <div className="orgMain">
                  <div className="orgTitle">{o.role}</div>
                  <div className="orgSub">{o.org}</div>

                  <div className="orgMeta">
                    <span>{o.date}</span>
                    <span className="dotSep">•</span>
                    <span>{o.location}</span>
                  </div>
                </div>

                <span className="orgChip">{o.chip || "Org"}</span>
              </div>

              {/* ✅ ICON ONLY (no text) */}
              <button
                className="orgHintBtn"
                type="button"
                onClick={(ev) => {
                  ev.stopPropagation();
                  openPopup(o);
                }}
                aria-label={`View details for ${o.role}`}
                title="View details"
              >
                <ArrowUpRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <OrgPopup open={!!popup} data={popup} onClose={closePopup} />
    </>
  );
}
