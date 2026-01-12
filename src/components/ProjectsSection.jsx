import { useMemo, useState } from "react";
import {
  Download,
  LayoutGrid,
  Globe,
  Smartphone,
  Server,
  Github,
  ExternalLink,
  BadgeCheck,
  Images,
} from "lucide-react";
import "../css/ProjectsSection.css";

const CATEGORIES = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "web", label: "Web", icon: Globe },
  { key: "mobile", label: "Mobile", icon: Smartphone },
  { key: "backend", label: "Backend", icon: Server },
];

const projects = [
  {
    id: "ami",
    title: "Sistem Informasi Audit Mutu Internal (AMI)",
    category: ["web", "backend"],
    summary:
      "Web-based internal quality audit system for SPM IT Del to manage FED forms, audit findings, and follow-up actions in an integrated workflow.",
    lastUpdateLabel: "Updated",
    meta: {
      timeline: "2025",
      role: "Web Developer",
      team: "Group Project",
    },
    highlights: [
      "Role-based access (SPM/Admin, Auditor, Auditee).",
      "FED submission, audit review, findings, and follow-up (ATL).",
      "Export/print-ready structured audit documentation.",
    ],
    tech: ["Laravel", "MySQL", "REST API", "Blade", "DOCX/PDF Export"],
    // ✅ taruh gambar lu di folder ini (buat sendiri): /src/img/projects/
    // recommended: 1200x700
    cover: "/src/img/projects/ami_cover.jpg",
    gallery: [
      "../img/projects/ami_1.jpg",
      "../img/projects/ami_2.jpg",
      "../img/projects/ami_3.jpg",
    ],
    links: {
      github: "", // isi kalau ada
      demo: "", // isi kalau ada
    },
    badge: "Web + Backend",
  },

  {
    id: "audit-checklist",
    title: "Audit Checklist (Web App)",
    category: ["web"],
    summary:
      "A web app to standardize audit checklist creation and evaluation workflow to reduce manual inconsistency and speed up auditing.",
    meta: {
      timeline: "2024 – 2025",
      role: "Web Developer",
      team: "Project",
    },
    highlights: [
      "Standardized checklist structure to match audit indicators.",
      "Cleaner input and review flow for auditors.",
      "Print/export-friendly layout for documentation.",
    ],
    tech: ["Laravel", "MySQL", "UI Components", "RBAC"],
    cover: "../img/projects/audit_cover.jpg",
    gallery: ["/src/img/projects/audit_1.jpg", "/src/img/projects/audit_2.jpg"],
    links: { github: "", demo: "" },
    badge: "Web",
  },

  {
    id: "ud-antoni",
    title: "Static Website UD Antoni (Hardware Store)",
    category: ["web"],
    summary:
      "A clean static website for product showcase and contact info, designed to be simple, fast, and easy to maintain.",
    meta: {
      timeline: "2024",
      role: "Front-End",
      team: "Solo",
    },
    highlights: [
      "Responsive layout for product catalog sections.",
      "Simple navigation and contact CTA.",
      "Optimized lightweight static build.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    cover: "/src/img/projects/ud_cover.jpg",
    gallery: ["/src/img/projects/ud_1.jpg", "/src/img/projects/ud_2.jpg"],
    links: { github: "", demo: "" },
    badge: "Static Web",
  },
];

function Pill({ active, icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      className={`pjPill ${active ? "isActive" : ""}`}
      onClick={onClick}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );
}

function Tag({ children }) {
  return <span className="pjTag">{children}</span>;
}

function safeOpen(url) {
  if (!url) return;
  window.open(url, "_blank", "noreferrer");
}

export default function ProjectsSection({
  lastUpdated = "August 22, 2025",
  downloadHref = "/src/doc/Portfolio_Febyanti_Hutahaean.pdf",
}) {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category.includes(filter));
  }, [filter]);

  return (
    <section className="pjWrap" id="projects">
      <div className="pjHeader">
        <div className="pjHeaderLeft">
          <h2 className="pjTitle">Projects</h2>
          <p className="pjDesc">
            A collection of projects I&apos;ve worked on, from mobile apps to
            backend systems.
          </p>

          <div className="pjUpdated">
            <span className="pjUpdatedDot" />
            <span>Last updated on {lastUpdated}</span>
          </div>

          <div className="pjPillsRow">
            {CATEGORIES.map((c) => (
              <Pill
                key={c.key}
                active={filter === c.key}
                icon={c.icon}
                label={c.label}
                onClick={() => setFilter(c.key)}
              />
            ))}
          </div>
        </div>

        <div className="pjHeaderRight">
          <a className="pjDownloadBtn" href={downloadHref} download>
            <Download size={18} />
            <span>Download Portfolio</span>
          </a>
        </div>
      </div>

      <div className="pjGrid">
        {filtered.map((p) => (
          <article key={p.id} className="pjCard">
            <div className="pjCoverWrap">
              <img
                className="pjCover"
                src={p.cover}
                alt={`${p.title} cover`}
                loading="lazy"
              />
              {p.badge ? (
                <div className="pjBadge">
                  <BadgeCheck size={16} />
                  <span>{p.badge}</span>
                </div>
              ) : null}
            </div>

            <div className="pjBody">
              <h3 className="pjCardTitle">{p.title}</h3>
              <p className="pjSummary">{p.summary}</p>

              <div className="pjMeta">
                {p.meta?.timeline ? <span>{p.meta.timeline}</span> : null}
                {p.meta?.timeline && (p.meta?.role || p.meta?.team) ? (
                  <span className="pjDotSep">•</span>
                ) : null}
                {p.meta?.role ? <span>{p.meta.role}</span> : null}
                {p.meta?.role && p.meta?.team ? (
                  <span className="pjDotSep">•</span>
                ) : null}
                {p.meta?.team ? <span>{p.meta.team}</span> : null}
              </div>

              <div className="pjTagRow">
                {(p.tech || []).slice(0, 4).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="pjActions">
                <button
                  type="button"
                  className="pjIconBtn"
                  onClick={() => safeOpen(p.links?.github)}
                  title="GitHub"
                  aria-label="GitHub"
                  disabled={!p.links?.github}
                >
                  <Github size={18} />
                </button>

                <button
                  type="button"
                  className="pjIconBtn"
                  onClick={() => safeOpen(p.links?.demo)}
                  title="Live / Demo"
                  aria-label="Live / Demo"
                  disabled={!p.links?.demo}
                >
                  <ExternalLink size={18} />
                </button>

                <div className="pjGrow" />

                <button
                  type="button"
                  className="pjGalleryBtn"
                  onClick={() => {
                    // Simple viewer: buka gambar pertama. Kalau mau modal viewer, bilang.
                    if (p.gallery?.[0]) safeOpen(p.gallery[0]);
                  }}
                  title="Preview"
                  aria-label="Preview"
                  disabled={!p.gallery?.length}
                >
                  <Images size={18} />
                </button>
              </div>

              {p.highlights?.length ? (
                <ul className="pjHighlights">
                  {p.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
