import "./index.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import OrganizationSection from "./components/OrganizationSection";
import SkillsToolsSection from "./components/SkillsToolsSection";
import Footer from "./components/Footer";

import { Mail, Github, Linkedin, Instagram, MapPin } from "lucide-react";

const profile = {
  name: "Febyanti Hutahaean",
  title: "Final-year Information Technology Student",
  summary:
    "Final-year IT student with a strong focus on web development (Laravel/PHP), databases, and practical project delivery. Comfortable working in teams, communicating clearly, and following technical procedures with discipline.",
  location: "Toba, Indonesia",
  email: "febyanti.hth.93@gmail.com",
  avatarUrl: "img/photo_mev2.png",
  resumeUrl: "doc/CV_Febyanti Hutahaean.pdf",
  socials: [
    { label: "Email", href: "mailto:febyanti.hth.93@gmail.com", icon: "email" },
    {
      label: "GitHub",
      href: "https://github.com/febyantihutahaean16",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/febyanti-hutahaean",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/feby_hth/",
      icon: "instagram",
    },
  ],
};

function SocialIcon({ name }) {
  const size = 18;
  switch (name) {
    case "email":
      return <Mail size={size} />;
    case "github":
      return <Github size={size} />;
    case "linkedin":
      return <Linkedin size={size} />;
    case "instagram":
      return <Instagram size={size} />;
    default:
      return null;
  }
}

function LocationMeta({ location }) {
  return (
    <div className="metaRow">
      <MapPin size={16} strokeWidth={2.2} />
      <span>{location}</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="layout">
        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <div className="profileCard">
            <div className="avatarWrap">
              <img
                className="avatar"
                src={profile.avatarUrl}
                alt={profile.name}
              />
            </div>

            <h1 className="profileName">{profile.name}</h1>
            <p className="profileTitle">{profile.title}</p>

            <p className="profileSummary">{profile.summary}</p>

            <a className="btnPrimary" href={profile.resumeUrl} download>
              ⬇ Download Resume
            </a>

            <div className="profileMeta">
              <LocationMeta location={profile.location} />
            </div>

            {/* ✅ social icons */}
            <div className="socialRow">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  className="socialBtn"
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  title={s.label}
                  aria-label={s.label}
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="content">
          <HeroSection />

          <section className="sectionBlock" id="experience">
            <ExperienceSection />
          </section>

          <section className="sectionBlock" id="organization">
            <OrganizationSection />
          </section>

          <section className="sectionBlock" id="skills">
            <SkillsToolsSection />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
