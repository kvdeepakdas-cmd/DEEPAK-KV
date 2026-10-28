/* =====================================================================
   1. EDIT YOUR CONTENT HERE. Everything below this block renders from it.
   Empty strings / empty arrays hide the related element or section.
   All values marked SAMPLE are placeholders: replace them with your own.
   ===================================================================== */
const CONFIG = {
  name: "Deepak",                                  // SAMPLE
  initials: "Deepak",
  title: "DATA ANALIST",                      // SAMPLE
  roles: ["DATA ANALIST", "BUSINESS ANALIST", "FINANCIAL ANALYST"], // animated hero text
  headline: "I build fast, reliable web products people enjoy using.", // SAMPLE
  intro: "Write two sentences here about what you do and the value you bring to teams and clients.", // SAMPLE
  available: "Open to new opportunities",             // "" hides the badge
  profileImage: "https://tse1.mm.bing.net/th/id/OIP.nZ4JeSK2xvxMLLiKemw2VAHaNK?r=0&pid=ImgDet&w=188&h=333&c=7&o=7&rm=3",                                   // e.g. "assets/images/me.jpg"
  resume: "",                                         // e.g. "assets/resume.pdf"
  accent: { dark: "", light: "" },                    // optional hex overrides, e.g. { dark: "#f5a97f", light: "#1fb426" }

  about: {
    paragraphs: [
      "Introduce your background and how you got into your field. (SAMPLE)",
      "Describe your specialisations, how you approach problems, and the goals you are working toward. (SAMPLE)"
    ],
    focus: ["Frontend", "Backend", "APIs"],           // specialisations
    stats: []                                         // e.g. [{ value: "3+", label: "Years experience" }] (add only verifiable numbers)
  },

  skills: [                                           // SAMPLE categories: keep what applies
    { category: "Frontend", icon: "layout", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
    { category: "Backend", icon: "server", items: ["Node.js", "Express", "REST APIs"] },
    { category: "Databases", icon: "database", items: ["MongoDB", "PostgreSQL"] },
    { category: "Tools", icon: "wrench", items: ["Git", "GitHub", "VS Code", "Figma"] }
  ],

  projects: [                                         // SAMPLE: links and image are hidden when empty
    { title: "Sample Project One", category: "Web Development", image: "", alt: "Screenshot of Sample Project One",
      description: "One or two sentences on the problem this project solves.", stack: ["React", "Node.js", "MongoDB"],
      features: ["Describe a key feature", "Describe another feature"], live: "", code: "", caseStudy: "" },
    { title: "Sample Project Two", category: "Web Development", image: "", alt: "Screenshot of Sample Project Two",
      description: "Describe what you built and why it matters.", stack: ["JavaScript", "Tailwind CSS"],
      features: ["Describe a key feature"], live: "", code: "", caseStudy: "" },
    { title: "Sample Analysis", category: "Data Analytics", image: "", alt: "Dashboard from Sample Analysis",
      description: "Summarise the question you answered with data.", stack: ["Python", "SQL", "Power BI"],
      features: ["Describe the insight you delivered"], live: "", code: "", caseStudy: "" }
  ],

  experience: [                                       // SAMPLE: type is "work" or "education"
    { role: "Your Role", org: "Company or Institution", start: "Start", end: "End", type: "work",
      points: ["Describe a responsibility or result.", "Describe another."], stack: ["Tech"] }
  ],

  achievements: [],                                   // e.g. [{ title: "Certificate name", issuer: "Issuer", year: "2025", link: "" }]

  contact: {
    email: "you@example.com",                         // SAMPLE
    phone: "",                                        // e.g. "+15551234567"
    whatsapp: "",                                     // digits with country code, e.g. "15551234567"
    whatsappMessage: "Hi, I found your portfolio and would like to connect.",
    linkedin: "https://www.linkedin.com/in/your-handle/",   // SAMPLE
    github: "https://github.com/your-handle",               // SAMPLE
    instagram: "",
    location: ""                                      // e.g. "Kochi, India"
  }
};

/* =====================================================================
   2. RENDERING
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const icon = (n, c = "h-5 w-5") => `<i data-lucide="${n}" class="${c}" aria-hidden="true"></i>`;
const ext = 'target="_blank" rel="noopener noreferrer"';
const badges = (a) => a.map((t) => `<span class="badge">${esc(t)}</span>`).join("");
const titleBlock = (id, text, sub = "") => `<div class="reveal mb-10"><h2 id="${id}" class="section-title">${esc(text)}</h2>${sub ? `<p class="muted prose-line mt-3">${esc(sub)}</p>` : ""}</div>`;

function contactItems(c) {
  const wa = c.whatsapp ? `https://wa.me/${c.whatsapp.replace(/\D/g, "")}${c.whatsappMessage ? "?text=" + encodeURIComponent(c.whatsappMessage) : ""}` : "";
  return [
    c.email && { icon: "mail", label: "Email", sub: c.email, href: `mailto:${c.email}` },
    c.phone && { icon: "phone", label: "Phone", sub: c.phone, href: `tel:${c.phone.replace(/[^\d+]/g, "")}` },
    wa && { icon: "message-circle", label: "WhatsApp", sub: "Start a chat", href: wa, external: true },
    c.linkedin && { icon: "linkedin", label: "LinkedIn", sub: "View my profile", href: c.linkedin, external: true },
    c.github && { icon: "github", label: "GitHub", sub: "Browse my code", href: c.github, external: true },
    c.instagram && { icon: "instagram", label: "Instagram", sub: "Follow along", href: c.instagram, external: true },
    c.location && { icon: "map-pin", label: "Location", sub: c.location }
  ].filter(Boolean);
}

function renderHero(d) {
  const socials = contactItems(d.contact).filter((i) => i.external && i.label !== "WhatsApp");
  const avatar = d.profileImage ? `<img class="avatar" src="${esc(d.profileImage)}" alt="Portrait of ${esc(d.name)}" width="272" height="272" fetchpriority="high">` : `<div class="avatar" role="img" aria-label="Initials ${esc(d.initials)}">${esc(d.initials)}</div>`;
  $("#home").innerHTML = `<div class="bg-grid"></div>
  <div class="container grid items-center gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
    <div>
      ${d.available ? `<p class="badge mb-6 inline-flex items-center gap-2 py-1"><span class="pulse-dot"></span>${esc(d.available)}</p>` : ""}
      <p class="muted mb-3 text-lg">Hi, I'm ${esc(d.name)}.</p>
      <h1 id="hero-title" class="hero-title">${esc(d.headline)}</h1>
      <p class="font-heading mt-5 text-xl font-medium"><span id="role-text">${esc(d.roles[0] || d.title)}</span><span class="caret" aria-hidden="true"></span></p>
      <p class="muted prose-line mt-5 text-lg">${esc(d.intro)}</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="#projects" class="btn btn-primary">Explore My Work</a>
        <a href="#contact" class="btn btn-ghost">Get in Touch</a>
      </div>
      <div class="mt-8 flex gap-2">${socials.map((s) => `<a class="icon-btn" href="${esc(s.href)}" ${ext} aria-label="${esc(s.label)} (opens in a new tab)">${icon(s.icon)}</a>`).join("")}</div>
    </div>
    <div class="flex justify-center md:justify-end">${avatar}</div>
  </div>`;
}

function renderAbout(d) {
  const a = d.about;
  $("#about").innerHTML = `<div class="container grid gap-10 md:grid-cols-[1fr_1.4fr]">
    <div class="reveal">
      <h2 id="about-title" class="section-title">About me</h2>
      ${a.focus.length ? `<div class="mt-5 flex flex-wrap gap-2">${badges(a.focus)}</div>` : ""}
      ${d.resume ? `<a class="btn btn-ghost mt-6" href="${esc(d.resume)}" download>${icon("download", "h-4 w-4")}Download résumé</a>` : ""}
    </div>
    <div class="reveal">
      ${a.paragraphs.map((p) => `<p class="muted prose-line mb-4 text-lg">${esc(p)}</p>`).join("")}
      ${a.stats.length ? `<dl class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">${a.stats.map((s) => `<div class="card p-4"><dd class="font-heading text-3xl font-semibold">${esc(s.value)}</dd><dt class="muted text-sm">${esc(s.label)}</dt></div>`).join("")}</dl>` : ""}
    </div>
  </div>`;
}

function renderSkills(d) {
  if (!d.skills.length) return $("#skills").remove();
  $("#skills").innerHTML = `<div class="container">${titleBlock("skills-title", "Skills and technologies")}
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${d.skills.map((s) => `<article class="card reveal p-5"><h3 class="mb-4 flex items-center gap-2 text-lg font-semibold"><span class="accent">${icon(s.icon || "code", "h-5 w-5")}</span>${esc(s.category)}</h3><div class="flex flex-wrap gap-2">${badges(s.items)}</div></article>`).join("")}</div></div>`;
}

function renderProjects(d) {
  if (!d.projects.length) return $("#projects").remove();
  const cats = ["All", ...new Set(d.projects.map((p) => p.category))];
  const link = (href, ic, label, cls) => href ? `<a class="btn ${cls}" href="${esc(href)}" ${ext}>${icon(ic, "h-4 w-4")}${label}</a>` : "";
  $("#projects").innerHTML = `<div class="container">${titleBlock("projects-title", "Featured projects", "A selection of work I'm proud of.")}
    ${cats.length > 2 ? `<div class="reveal mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">${cats.map((c, i) => `<button type="button" class="filter-btn" data-filter="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join("")}</div>` : ""}
    <div id="project-grid" class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">${d.projects.map((p) => `
      <article class="card project reveal flex flex-col overflow-hidden" data-category="${esc(p.category)}">
        ${p.image ? `<img class="thumb" src="${esc(p.image)}" alt="${esc(p.alt || p.title)}" width="640" height="360" loading="lazy">` : `<div class="thumb" role="img" aria-label="${esc(p.alt || p.title)}">${icon("layout-dashboard", "h-10 w-10")}</div>`}
        <div class="flex flex-1 flex-col p-5">
          <h3 class="text-xl font-semibold">${esc(p.title)}</h3>
          <p class="muted mt-2 text-sm">${esc(p.description)}</p>
          ${p.features?.length ? `<ul class="muted mt-3 space-y-1 text-sm">${p.features.map((f) => `<li class="flex gap-2"><span class="accent mt-1">${icon("check", "h-4 w-4")}</span>${esc(f)}</li>`).join("")}</ul>` : ""}
          <div class="mt-4 flex flex-wrap gap-2">${badges(p.stack || [])}</div>
          <div class="mt-auto flex flex-wrap gap-2 pt-5">${link(p.live, "external-link", "Live demo", "btn-primary")}${link(p.code, "github", "Source code", "btn-ghost")}${link(p.caseStudy, "file-text", "Case study", "btn-ghost")}</div>
        </div>
      </article>`).join("")}</div></div>`;
}

function renderExperience(d) {
  if (!d.experience.length) return $("#experience").remove();
  $("#experience").innerHTML = `<div class="container">${titleBlock("experience-title", "Experience and education")}
    <ol class="timeline space-y-8">${d.experience.map((e) => `<li class="tl-item reveal"><div class="card p-5">
      <div class="flex flex-wrap items-baseline justify-between gap-x-4"><h3 class="text-lg font-semibold">${esc(e.role)}</h3><p class="muted text-sm">${esc(e.start)} to ${esc(e.end)}</p></div>
      <p class="accent mb-3 flex items-center gap-2 text-sm font-medium">${icon(e.type === "education" ? "graduation-cap" : "briefcase", "h-4 w-4")}${esc(e.org)}</p>
      <ul class="muted list-disc space-y-1 pl-5 text-sm">${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      ${e.stack?.length ? `<div class="mt-4 flex flex-wrap gap-2">${badges(e.stack)}</div>` : ""}</div></li>`).join("")}</ol></div>`;
}

function renderAchievements(d) {
  if (!d.achievements.length) return $("#achievements").remove();
  $("#achievements").innerHTML = `<div class="container">${titleBlock("achievements-title", "Certifications and achievements")}
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${d.achievements.map((a) => {
      const inner = `<span class="accent">${icon("award")}</span><h3 class="mt-3 font-semibold">${esc(a.title)}</h3><p class="muted text-sm">${esc([a.issuer, a.year].filter(Boolean).join(", "))}</p>`;
      return a.link ? `<a class="card reveal block p-5" href="${esc(a.link)}" ${ext}>${inner}</a>` : `<article class="card reveal p-5">${inner}</article>`;
    }).join("")}</div></div>`;
}

function renderContact(d) {
  $("#contact").innerHTML = `<div class="container">
    <div class="reveal mb-10 max-w-2xl"><h2 id="contact-title" class="section-title">Let's Connect and Build Something Great.</h2>
    <p class="muted mt-3 text-lg">Recruiters, clients and fellow developers are all welcome. Pick whichever way suits you best and I'll get back to you.</p></div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${contactItems(d.contact).map((i) => {
      const body = `<span class="accent">${icon(i.icon, "h-6 w-6")}</span><div class="min-w-0"><h3 class="font-semibold">${esc(i.label)}</h3><p class="muted truncate text-sm">${esc(i.sub)}</p></div>`;
      return i.href ? `<a class="card reveal flex items-center gap-4 p-5" href="${esc(i.href)}" ${i.external ? ext : ""}>${body}</a>` : `<div class="card reveal flex items-center gap-4 p-5">${body}</div>`;
    }).join("")}</div></div>`;
}

function renderFooter(d) {
  const socials = contactItems(d.contact).filter((i) => i.external);
  $("#footer").innerHTML = `<div class="container flex flex-col items-center justify-between gap-5 px-5 py-10 md:flex-row">
    <div><p class="font-heading text-lg font-semibold">${esc(d.name)}</p><p class="muted text-sm">&copy; <span id="year"></span> ${esc(d.name)}. All rights reserved.</p></div>
    <nav aria-label="Footer" class="muted flex flex-wrap justify-center gap-4 text-sm"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
    <div class="flex gap-2">${socials.map((s) => `<a class="icon-btn" href="${esc(s.href)}" ${ext} aria-label="${esc(s.label)} (opens in a new tab)">${icon(s.icon)}</a>`).join("")}<a class="icon-btn" href="#home" aria-label="Back to top">${icon("arrow-up")}</a></div></div>`;
  $("#year").textContent = new Date().getFullYear();
}

/* =====================================================================
   3. INTERACTIONS
   ===================================================================== */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initTheme() {
  const root = document.documentElement;
  const apply = (t) => { root.dataset.theme = t; try { localStorage.setItem("theme", t); } catch (e) {} };
  $("#theme-toggle").addEventListener("click", () => apply(root.dataset.theme === "dark" ? "light" : "dark"));
}

function initMenu() {
  const btn = $("#menu-toggle"), menu = $("#mobile-menu");
  const set = (open) => { menu.classList.toggle("hidden", !open); btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
  document.addEventListener("click", (e) => { if (!menu.contains(e.target) && !btn.contains(e.target)) set(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { set(false); btn.focus(); } });
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => e.matches && set(false));
}

function initActiveNav() {
  const links = $$("header .nav-link");
  const obs = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    links.forEach((l) => { const on = l.getAttribute("href") === `#${en.target.id}`; l.classList.toggle("active", on); on ? l.setAttribute("aria-current", "true") : l.removeAttribute("aria-current"); });
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main > section").forEach((s) => obs.observe(s));
}

function initReveal() {
  const items = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) return items.forEach((i) => i.classList.add("in"));
  const obs = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); } }), { threshold: 0.12 });
  items.forEach((i) => obs.observe(i));
}

function initFilters() {
  const btns = $$(".filter-btn"), cards = $$(".project");
  btns.forEach((b) => b.addEventListener("click", () => {
    btns.forEach((x) => x.setAttribute("aria-pressed", x === b));
    cards.forEach((c) => { c.hidden = b.dataset.filter !== "All" && c.dataset.category !== b.dataset.filter; });
  }));
}

function initRoleText(roles) {
  const el = $("#role-text");
  if (!el || reduceMotion || roles.length < 2) return;
  let r = 0, i = roles[0].length, del = true;
  (function tick() {
    const word = roles[r];
    i += del ? -1 : 1;
    el.textContent = word.slice(0, i);
    let wait = del ? 45 : 85;
    if (!del && i === word.length) { del = true; wait = 1600; }
    else if (del && i === 0) { del = false; r = (r + 1) % roles.length; wait = 300; }
    setTimeout(tick, wait);
  })();
}

function initToTop() {
  const btn = $("#to-top");
  window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 600), { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const d = CONFIG;
  document.title = `${d.name} | ${d.title} Portfolio`;
  $("#brand").textContent = d.initials || d.name;
  if (d.accent.dark || d.accent.light) {
    const s = document.createElement("style");
    s.textContent = `${d.accent.dark ? `:root{--accent:${d.accent.dark}}` : ""}${d.accent.light ? `[data-theme="light"]{--accent:${d.accent.light}}` : ""}`;
    document.head.appendChild(s);
  }
  renderHero(d); renderAbout(d); renderSkills(d); renderProjects(d);
  renderExperience(d); renderAchievements(d); renderContact(d); renderFooter(d);
  if (window.lucide) lucide.createIcons();
  initTheme(); initMenu(); initActiveNav(); initReveal(); initFilters(); initRoleText(d.roles); initToTop();
});