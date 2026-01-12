import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../css/Navbar.css";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experiences" },
  { label: "Project", href: "#projects" },
  { label: "Skill", href: "#skill" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ESC close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // lock scroll when menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // kalau resize ke laptop, paksa tutup drawer biar gak nyangkut
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const onChange = (e) => {
      if (!e.matches) setOpen(false); // sudah bukan mobile/tablet
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="navWrap">
      <div className="navInner">
        <a className="brand" href="#home" onClick={close}>
          <span className="brandDot" />
          <span className="brandText">Portfolio</span>
        </a>

        {/* Desktop menu */}
        <nav className="navDesktop" aria-label="Primary">
          {items.map((it) => (
            <a key={it.label} className="navItem" href={it.href}>
              {it.label}
            </a>
          ))}
        </nav>

        {/* Mobile button (muncul cuma <= 860px karena CSS) */}
        <button
          className="navToggle"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile overlay + drawer */}
      {open && (
        <div className="navOverlay" onClick={close} role="presentation">
          <div className="navDrawer" onClick={(e) => e.stopPropagation()}>
            <div className="navDrawerHead">
              <div className="brand brandSmall">
                <span className="brandDot" />
                <span className="brandText">Portfolio</span>
              </div>

              <button
                className="navClose"
                type="button"
                onClick={close}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="navMobile" aria-label="Mobile primary">
              {items.map((it) => (
                <a
                  key={it.label}
                  className="navMobileItem"
                  href={it.href}
                  onClick={close}
                >
                  {it.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
