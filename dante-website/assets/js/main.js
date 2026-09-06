/* ============================================================
   DANTE — shared site logic
   Header, footer, mobile nav, FAQ accordion, and the booking
   form are all rendered/driven from here so no markup is
   duplicated across pages. Edit SITE at the top to rebrand.
   ============================================================ */

const SITE = {
  brandName: "DANTE",
  tagline: "Premium Mobile Car Detailing",
  logo: "assets/img/logo-mark.png",
  description: "Professional detailing at your location, by appointment.",
  contact: {
    email: "Email — coming soon",
    phone: "Phone — coming soon",
    area: "Service area: Belgium — service area to be announced",
    areaShort: "Belgium — service area to be announced",
  },
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  year: new Date().getFullYear(),
};

const ICONS = {
  chevronDown: `<svg viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowRight: `<svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 22s7-7.4 7-13a7 7 0 10-14 0c0 5.6 7 13 7 13z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="9" r="2.4" stroke="currentColor" stroke-width="1.5"/></svg>`,
  car: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 16V11l2-5h12l2 5v5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M2 16h20v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="7.5" cy="16.5" r="1.4" stroke="currentColor" stroke-width="1.3"/><circle cx="16.5" cy="16.5" r="1.4" stroke="currentColor" stroke-width="1.3"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l1.8 5.6L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.4L12 3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="16" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 20s-7.5-4.6-10-9.4C.4 6.6 3 3 6.8 3 9 3 10.8 4.2 12 6c1.2-1.8 3-3 5.2-3C21 3 23.6 6.6 22 10.6 19.5 15.4 12 20 12 20z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.4"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.4"/><path d="M8.5 12.2l2.2 2.2L16 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  handshake: `<svg viewBox="0 0 24 24" fill="none"><path d="M2 11l4-3 4 2.4M22 11l-4-3-4 2.4M6 8.4l3.4 3.6a1.6 1.6 0 002.3.06L16 8.4M10 12l2.6 2.6a1.5 1.5 0 002.1 0M13 15l1.6 1.6a1.4 1.4 0 001.98 0" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  package: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 8l-9-5-9 5 9 5 9-5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M3 8v8l9 5 9-5V8M12 13v8" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  alertCircle: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.4"/><path d="M12 8v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="16.2" r="0.9" fill="currentColor"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 5-3 8.4-7 10-4-1.6-7-5-7-10V6l7-3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 15V4M8 8l4-4 4 4M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none"><path d="M14 8.5h2.5V5H14c-2 0-3.5 1.6-3.5 3.6V11H8v3.5h2.5V21H14v-6.5h2.4l.6-3.5h-3V9c0-.4.2-1 1-1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 9.6l5 2.4-5 2.4V9.6z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
};

const NAV_LINKS = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Services", href: "services.html", page: "services", children: [
      { label: "All Services", href: "services.html" },
      { label: "Interior Detail", href: "service-interior.html" },
      { label: "Deep Interior Detail", href: "service-deep-interior.html" },
      { label: "Exterior Detail", href: "service-exterior.html" },
      { label: "Deep Exterior Detail", href: "service-deep-exterior.html" },
      { label: "Full Detail", href: "service-full.html" },
      { label: "Extra Treatments", href: "extra-treatments.html" },
    ]
  },
  { label: "How It Works", href: "how-it-works.html", page: "how-it-works" },
  { label: "About", href: "about.html", page: "about" },
  { label: "FAQ", href: "faq.html", page: "faq" },
  { label: "Contact", href: "contact.html", page: "contact" },
];

function renderHeader(){
  const mount = document.getElementById("site-header");
  if(!mount) return;
  const current = document.body.dataset.page || "";

  const navItems = NAV_LINKS.map(link => {
    const isActive = link.page === current;
    if(link.children){
      return `
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger ${isActive ? 'active' : ''}" type="button" aria-haspopup="true" aria-expanded="false">
          ${link.label} ${ICONS.chevronDown}
        </button>
        <div class="nav-dropdown-panel">
          ${link.children.map(c => `<a href="${c.href}">${c.label}</a>`).join("")}
        </div>
      </div>`;
    }
    return `<a href="${link.href}" class="${isActive ? 'active' : ''}">${link.label}</a>`;
  }).join("");

  const mobileItems = NAV_LINKS.map(link => {
    const isActive = link.page === current;
    let out = `<a href="${link.href}" class="${isActive ? 'active' : ''}">${link.label}</a>`;
    if(link.children){
      out += `<span class="mobile-panel-label">Jump to a package</span><div class="mobile-sub">${link.children.slice(1).map(c => `<a href="${c.href}">${c.label}</a>`).join("")}</div>`;
    }
    return out;
  }).join("");

  mount.innerHTML = `
    <header class="site-header">
      <div class="nav-row">
        <a href="index.html" class="brand">
          <img src="${SITE.logo}" alt="${SITE.brandName} emblem" />
          <span>${SITE.brandName}</span>
        </a>
        <nav class="main-nav" aria-label="Primary">
          ${navItems}
        </nav>
        <div class="nav-right">
          <a href="contact.html" class="btn btn-gold nav-cta">Book an Appointment</a>
          <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-panel" id="mobile-panel">
      ${mobileItems}
      <a href="contact.html" class="btn btn-gold btn-block">Book an Appointment</a>
    </div>
  `;

  const toggle = document.getElementById("mobile-toggle");
  const panel = document.getElementById("mobile-panel");
  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  panel.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    panel.classList.remove("open");
    toggle.classList.remove("open");
    document.body.style.overflow = "";
  }));

  // click-to-toggle dropdown for touch devices, hover still works via CSS
  const dropdown = mount.querySelector(".nav-dropdown");
  if(dropdown){
    const trigger = dropdown.querySelector(".nav-dropdown-trigger");
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
      trigger.setAttribute("aria-expanded", dropdown.classList.contains("open"));
    });
    document.addEventListener("click", () => dropdown.classList.remove("open"));
  }
}

function renderFooter(){
  const mount = document.getElementById("site-footer");
  if(!mount) return;
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="wrap footer-top">
        <div class="footer-brand">
          <a href="index.html" class="brand">
            <img src="${SITE.logo}" alt="${SITE.brandName} emblem" />
            <span>${SITE.brandName}</span>
          </a>
          <p class="footer-tagline">${SITE.tagline}</p>
          <p class="footer-desc">${SITE.description}</p>
          <div class="footer-social">
            <a href="${SITE.social.instagram}" aria-label="Instagram">${ICONS.instagram}</a>
            <a href="${SITE.social.facebook}" aria-label="Facebook">${ICONS.facebook}</a>
            <a href="${SITE.social.youtube}" aria-label="YouTube">${ICONS.youtube}</a>
          </div>
        </div>
        <div class="footer-col">
          <h6>Services</h6>
          <ul>
            <li><a href="service-interior.html">Interior Detail</a></li>
            <li><a href="service-deep-interior.html">Deep Interior Detail</a></li>
            <li><a href="service-exterior.html">Exterior Detail</a></li>
            <li><a href="service-deep-exterior.html">Deep Exterior Detail</a></li>
            <li><a href="service-full.html">Full Detail</a></li>
            <li><a href="extra-treatments.html">Extra Treatments</a></li>
            <li><a href="coming-soon.html">Coming Soon</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h6>Company</h6>
          <ul>
            <li><a href="how-it-works.html">How It Works</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact &amp; Booking</a></li>
          </ul>
        </div>
        <div class="footer-col footer-contact">
          <h6>Contact</h6>
          <p>${SITE.contact.email}</p>
          <p>${SITE.contact.phone}</p>
          <p class="body-faint">${SITE.contact.areaShort}</p>
          <a href="contact.html" class="btn btn-outline-gold btn-sm">Book an Appointment</a>
        </div>
      </div>
      <div class="wrap footer-bottom">
        <span>© ${SITE.year} ${SITE.brandName}. All rights reserved.</span>
        <span>${SITE.tagline} — Belgium</span>
      </div>
    </footer>
  `;
}

function initFaq(){
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-q");
    const answer = item.querySelector(".faq-a");
    if(!btn || !answer) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(other => {
        if(other !== item){
          other.classList.remove("open");
          other.querySelector(".faq-a").style.maxHeight = null;
        }
      });
      item.classList.toggle("open", !isOpen);
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : null;
    });
  });
}

function initBookingForm(){
  const form = document.getElementById("booking-form");
  if(!form) return;
  const fileInput = form.querySelector("#photos");
  const dropZone = form.querySelector(".upload-drop");
  const fileList = form.querySelector(".upload-filenames");

  if(dropZone && fileInput){
    dropZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => {
      const names = Array.from(fileInput.files).slice(0, 8).map(f => f.name);
      fileList.textContent = names.length ? `${names.length} photo(s) selected: ${names.join(", ")}` : "";
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = form.querySelector(".form-status");
    status.textContent = "Thanks — your request has been noted. We'll confirm your appointment personally by email or phone shortly.";
    status.classList.add("success");
    form.reset();
    if(fileList) fileList.textContent = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initFaq();
  initBookingForm();
});
