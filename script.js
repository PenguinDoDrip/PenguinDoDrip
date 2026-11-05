const CONTENT = {
  "name": "PenguinDoDrip",
  "canvasAspect": "16 / 9",
  "canvas": [
    {
      "kind": "text",
      "text": "ANIMATOR · PROGRAMMER · JOJO HEAVEN'S ARROW",
      "x": 0,
      "y": 2,
      "w": 60,
      "rot": 0,
      "z": 4,
      "style": {
        "fontSize": 10.5,
        "fontFamily": "'IBM Plex Mono','Courier New',monospace",
        "weight": 400,
        "color": "#9d95a8",
        "align": "left",
        "tracking": 0.12
      }
    },
    {
      "kind": "text",
      "text": "HI, I'M\nPENGUINDODRIP.",
      "x": 0,
      "y": 17,
      "w": 100,
      "rot": 0,
      "z": 5,
      "style": {
        "fontSize": 80,
        "fontFamily": "Archivo,'Arial Narrow',Arial,sans-serif",
        "weight": 800,
        "color": "#f4eee3",
        "align": "left",
        "stretch": 112,
        "tracking": -0.04,
        "leading": 0.86
      }
    },
    {
      "kind": "text",
      "text": "I'm one of the animators for JoJo Heaven's Arrow, and I also code. Most of what I make is poses and idle animations for the mod.",
      "x": 0,
      "y": 63,
      "w": 36,
      "rot": 0,
      "z": 4,
      "style": {
        "fontSize": 14,
        "fontFamily": "Archivo,'Arial Narrow',Arial,sans-serif",
        "weight": 400,
        "color": "#bdb5c6",
        "align": "left",
        "leading": 1.55
      }
    },
    {
      "kind": "button",
      "text": "See my animations  ↓",
      "href": "#work",
      "x": 0,
      "y": 85,
      "w": 30,
      "rot": 0,
      "z": 7,
      "style": {
        "fontSize": 13
      }
    },
    {
      "kind": "image",
      "src": "assets/image-1.webp",
      "alt": "Jotaro pose animation",
      "x": 71,
      "y": 0,
      "w": 22,
      "rot": 3,
      "z": 2,
      "style": {
        "radius": "0",
        "shadow": true,
        "bg": "#f59b51"
      },
      "media": {
        "aspect": "auto",
        "panX": -5.8,
        "panY": -7.5,
        "zoom": 1.15,
        "bg": "transparent",
        "natW": 371,
        "natH": 539
      }
    },
    {
      "kind": "sticker",
      "src": "assets/project3-thumb-6.webp",
      "alt": "",
      "x": 62,
      "y": 52,
      "w": 8.5,
      "rot": 0,
      "z": 6,
      "media": {
        "aspect": "auto",
        "panX": 0,
        "panY": 0,
        "zoom": 1,
        "bg": "transparent",
        "natW": 371,
        "natH": 539
      }
    }
  ],
  "projects": [
    {
      "id": "p4",
      "title": "Kars Gut Punch",
      "desc": "A gut punch for Kars, made for JoJo Heaven's Arrow.",
      "thumb": "assets/karsUS.webp",
      "link": "",
      "tags": [
        "jojo",
        "attack"
      ],
      "media": {
        "aspect": "auto",
        "panX": 0,
        "panY": 0,
        "zoom": 1,
        "bg": "transparent",
        "natW": 438,
        "natH": 564
      }
    },
    {
      "id": "p2",
      "title": "Dio Pose",
      "desc": "A JoJo pose I made for the mod JoJo Heaven's Arrow.",
      "thumb": "assets/project1-thumb-3.webp",
      "link": "",
      "tags": [
        "jojo",
        "pose"
      ],
      "media": {
        "aspect": "auto",
        "panX": -4,
        "panY": -4.8,
        "zoom": 1.1,
        "bg": "transparent",
        "natW": 371,
        "natH": 539
      }
    },
    {
      "id": "p1",
      "title": "Jotaro Pose",
      "desc": "Another one I made for JoJo Heaven's Arrow. Jotaro this time.",
      "thumb": "assets/image-1.webp",
      "link": "",
      "tags": [
        "jojo",
        "loop"
      ],
      "media": {
        "aspect": "auto",
        "panX": 0,
        "panY": 0,
        "zoom": 1,
        "bg": "transparent",
        "natW": 371,
        "natH": 539
      }
    },
    {
      "id": "p3",
      "title": "Approaching Me Idle",
      "desc": "The pose from the \"Approaching Me\" manga panel, turned into an idle.",
      "thumb": "assets/project3-thumb-6.webp",
      "link": "",
      "tags": [
        "jojo",
        "idle",
        "manga"
      ],
      "media": {
        "aspect": "auto",
        "panX": 0,
        "panY": 0,
        "zoom": 1,
        "bg": "transparent",
        "natW": 371,
        "natH": 539
      }
    }
  ],
  "about": "I'm PenguinDoDrip. I've been animating for 3+ years, and right now I'm one of the animators for JoJo Heaven's Arrow. I'm also a programmer.\n\nMost of my stuff is JoJo poses and idles for the mod, all made in Blockbench. When I'm not animating I'm usually coding something, or playing chess every once in a while.",
  "links": [
    {
      "label": "YouTube",
      "url": "https://youtube.com/@PenguinDoDrip"
    },
    {
      "label": "Discord",
      "url": "copy:penguindodrip"
    }
  ]
};

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pad = (n) => String(n).padStart(2, "0");

const MEDIA_DEFAULTS = { aspect: "auto", panX: 0, panY: 0, zoom: 1, bg: "transparent" };
const mediaOf = (obj) => ({ ...MEDIA_DEFAULTS, ...(obj.media || {}) });
const natOf = (m) => (m.natW && m.natH ? { w: m.natW, h: m.natH } : null);

function frameAspect(m) {
  if (m.aspect !== "auto") return m.aspect;
  const nat = natOf(m);
  return nat ? `${nat.w} / ${nat.h}` : "4 / 3";
}

function mediaHTML(src, alt, m, eager) {
  return `<img src="${esc(src)}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" draggable="false" style="position:absolute;left:${m.panX}%;top:${m.panY}%;width:${m.zoom * 100}%;height:auto;max-width:none;pointer-events:none;">`;
}

const scaledPx = (px) => {
  const floor = Math.min(px, Math.max(15, px * 0.6));
  const min = px >= 40 ? `min(${floor}px, ${(px * 0.115).toFixed(2)}cqw)` : `${floor}px`;
  return `max(${min}, calc(${px} * 100cqw / 900))`;
};

function itemEl(item, i) {
  const el = document.createElement("div");
  const s = item.style || {};
  el.className = `item ${item.kind}`;
  Object.assign(el.style, {
    left: `${item.x}%`,
    top: `${item.y}%`,
    width: `${item.w}%`,
    transform: `rotate(${item.rot || 0}deg)`,
    zIndex: item.z || 1,
    order: Math.round((item.x >= 50 ? 1000 : 0) + item.y),
    borderRadius: s.radius || "0",
    boxShadow: s.shadow ? "0 24px 60px -20px rgba(15, 10, 30, 0.35)" : "none",
    background: s.bg || "transparent",
  });
  el.style.setProperty("--i", i);

  if (item.kind === "text") {
    el.textContent = item.text;
    Object.assign(el.style, {
      fontSize: scaledPx(s.fontSize || 32),
      fontFamily: s.fontFamily || "inherit",
      fontWeight: s.weight || 400,
      fontStretch: s.stretch ? `${s.stretch}%` : "",
      color: s.color || "inherit",
      textAlign: s.align || "left",
      letterSpacing: s.tracking ? `${s.tracking}em` : "normal",
      lineHeight: s.leading || "",
    });
  } else if (item.kind === "button") {
    el.innerHTML = `<a class="btn" href="${esc(item.href || "#")}" style="font-size:${scaledPx(s.fontSize || 22)}">${esc(item.text)}</a>`;
  } else {
    const m = mediaOf(item);
    el.style.aspectRatio = frameAspect(m);
    el.innerHTML = `<div class="media-frame" style="background:${m.bg}">${mediaHTML(item.src, item.alt || "", m, true)}</div>`;
  }
  return el;
}

function renderCanvas() {
  const c = $("#canvas");
  c.style.aspectRatio = CONTENT.canvasAspect;
  c.replaceChildren(...CONTENT.canvas.map(itemEl));
}

const isImageSrc = (src) => /\.(gif|png|jpe?g|webp|avif|svg)(\?|#|$)/i.test(src || "");

function previewHTML(p) {
  return isImageSrc(p.preview)
    ? `<img class="preview" src="${esc(p.preview)}" alt="" loading="lazy" draggable="false">`
    : `<video src="${esc(p.preview)}" muted loop playsinline></video>`;
}

function projectBand(p, i) {
  const m = mediaOf(p);
  const nat = natOf(m);
  const tags = p.tags || [];
  const num = pad(i + 1);
  return `
    <article class="card band" data-tone="${i % 2 === 0 ? "dark" : "light"}" data-pid="${esc(p.id)}" tabindex="0" aria-label="Open ${esc(p.title)}">
      <div class="band-top">
        <p class="band-label">Work <span class="label-num">${num}</span> / ${esc(tags[1] || tags[0] || "Animation")}</p>
        <p class="band-desc">${esc(p.desc)}</p>
      </div>
      <div class="band-stage">
        <h3 class="band-title">${esc(p.title)}</h3>
        <figure class="band-fig">
          <div class="thumb" style="aspect-ratio:${frameAspect(m)}">
            <div class="media-frame" style="background:${m.bg}">${mediaHTML(p.thumb, p.title, m)}</div>
            ${p.preview ? previewHTML(p) : ""}
          </div>
          <figcaption><span>Fig. ${num}</span><span>${nat ? `${nat.w} × ${nat.h}` : ""}</span></figcaption>
        </figure>
      </div>
      <div class="band-bottom">
        ${tags.length ? `<div class="tags">${tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : "<span></span>"}
        <div class="band-ctas">
          ${p.link ? `<a class="band-cta" href="${esc(p.link)}" target="_blank" rel="noopener">Watch project <span aria-hidden="true">↗</span></a>` : ""}
          <span class="band-cta">View it big <span aria-hidden="true">↗</span></span>
        </div>
      </div>
    </article>`;
}

function wireCardHover() {
  document.querySelectorAll(".card").forEach((card) => {
    const v = card.querySelector("video");
    if (!v) return;
    card.addEventListener("mouseenter", () => v.play().catch(() => {}));
    card.addEventListener("mouseleave", () => { v.pause(); v.currentTime = 0; });
  });
}

function observeReveals() {
  const els = document.querySelectorAll(".reveal, .card");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      obs.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => obs.observe(el));
}

let lbIndex = -1;

function openLightbox(pid) {
  lbIndex = CONTENT.projects.findIndex((x) => x.id === pid);
  const p = CONTENT.projects[lbIndex];
  const box = $("#lightbox");
  if (!p || !box || typeof box.showModal !== "function") return;
  const total = CONTENT.projects.length;
  box.querySelector(".lb-media").innerHTML = p.preview
    ? previewHTML(p).replace("<video ", "<video autoplay controls ")
    : `<img src="${esc(p.thumb)}" alt="${esc(p.title)}">`;
  box.querySelector(".lb-controls").hidden = total < 2;
  box.querySelector(".lb-text").innerHTML = `
    <p class="lb-count">${pad(lbIndex + 1)} / ${pad(total)}</p>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.desc)}</p>
    ${(p.tags || []).length ? `<div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
    ${p.link ? `<p><a href="${esc(p.link)}" target="_blank" rel="noopener">Watch project ↗</a></p>` : ""}`;
  if (!box.open) box.showModal();
}

function stepLightbox(dir) {
  const n = CONTENT.projects.length;
  if (!n || lbIndex < 0) return;
  openLightbox(CONTENT.projects[(lbIndex + dir + n) % n].id);
}

function wireLightbox() {
  const box = $("#lightbox");
  const media = box.querySelector(".lb-media");
  box.querySelector(".lb-close").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  box.addEventListener("close", () => { media.innerHTML = ""; lbIndex = -1; });
  box.querySelector(".lb-prev").addEventListener("click", () => stepLightbox(-1));
  box.querySelector(".lb-next").addEventListener("click", () => stepLightbox(1));
  box.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
  const projects = $("#projects");
  projects.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const card = e.target.closest(".card");
    if (card) openLightbox(card.dataset.pid);
  });
  projects.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".card");
    if (card && e.target === card) { e.preventDefault(); openLightbox(card.dataset.pid); }
  });
}

function linkRow(l) {
  const url = String(l.url || "");
  if (url.startsWith("copy:")) {
    const text = url.slice(5);
    return `<button type="button" class="copy" data-copy="${esc(text)}">
      <span class="link-label">${esc(l.label)}</span>
      <span class="link-meta">${esc(text)} <span class="copy-hint">· click to copy</span></span></button>`;
  }
  const shown = url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return `<a href="${esc(url)}" target="_blank" rel="noopener">
    <span class="link-label">${esc(l.label)}</span>
    <span class="link-meta">${esc(shown)}</span></a>`;
}

function wireCopyLinks() {
  $("#links-body").addEventListener("click", async (e) => {
    const b = e.target.closest("button[data-copy]");
    if (!b) return;
    const hint = b.querySelector(".copy-hint");
    try {
      await navigator.clipboard.writeText(b.dataset.copy);
      hint.textContent = "· copied!";
    } catch {
      hint.textContent = "· couldn't copy, it's " + b.dataset.copy;
    }
    clearTimeout(b._t);
    b._t = setTimeout(() => { hint.textContent = "· click to copy"; }, 1800);
  });
}

function fitBandTitles() {
  document.querySelectorAll(".band-title").forEach((h) => {
    const avail = h.parentElement.clientWidth;
    if (!avail) return;
    h.style.fontSize = "100px";
    const fs = Math.max(20, Math.min(250, (avail / h.offsetWidth) * 100 * 0.98)).toFixed(1);
    h.style.fontSize = `${fs}px`;
    h.closest(".band").style.setProperty("--fs", `${fs}px`);
  });
}

function updateHeaderTone() {
  const header = $("header.top");
  const y = header.getBoundingClientRect().bottom - 8;
  const under = document.elementsFromPoint(innerWidth / 2, Math.max(1, y))
    .map((el) => el.closest("[data-tone]"))
    .find((el) => el && !header.contains(el));
  if (under) header.classList.toggle("on-light", under.dataset.tone === "light");
}

function wireScrollEffects() {
  const header = $("header.top");
  let lastY = scrollY;
  let queued = false;
  const update = () => {
    queued = false;
    const y = scrollY;
    const v = y - lastY;
    lastY = y;
    if (v < -4 || y < 200) header.classList.remove("hide");
    else if (v > 4) header.classList.add("hide");
    updateHeaderTone();
  };
  addEventListener("scroll", () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();

  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll("header nav a")];
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["home", "work", "mod", "about", "faq", "contact"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
}

function wireTilt() {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".band").forEach((band) => {
    const thumb = band.querySelector(".thumb");
    if (!thumb) return;
    let frame = 0;
    let ev = null;
    const apply = () => {
      frame = 0;
      const r = thumb.getBoundingClientRect();
      const b = band.getBoundingClientRect();
      const dx = Math.max(-1, Math.min(1, (ev.clientX - (r.left + r.width / 2)) / (b.width / 2)));
      const dy = Math.max(-1, Math.min(1, (ev.clientY - (r.top + r.height / 2)) / (b.height / 2)));
      thumb.style.setProperty("--ry", `${(dx * 14).toFixed(2)}deg`);
      thumb.style.setProperty("--rx", `${(-dy * 10).toFixed(2)}deg`);
      thumb.style.setProperty("--gx", `${(50 + dx * 50).toFixed(1)}%`);
      thumb.style.setProperty("--gy", `${(50 + dy * 50).toFixed(1)}%`);
    };
    band.addEventListener("pointermove", (e) => {
      ev = e;
      thumb.classList.add("tilting");
      if (!frame) frame = requestAnimationFrame(apply);
    });
    band.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      frame = 0;
      thumb.classList.remove("tilting");
      ["--rx", "--ry", "--gx", "--gy"].forEach((k) => thumb.style.removeProperty(k));
    });
  });
}

function buildScrubber() {
  const keys = [
    ["home", "Start"], ["work", "Work"], ["mod", "The mod"],
    ["about", "About"], ["faq", "FAQ"], ["contact", "Say hi"],
  ].map(([id, name]) => ({ el: document.getElementById(id), name })).filter((k) => k.el);
  const ticks = [...document.querySelectorAll(".band")].map((el) => ({ el }));
  const TOTAL = 240;

  const bar = document.createElement("div");
  bar.className = "scrub";
  bar.innerHTML = `
    <div class="scrub-track">
      <div class="scrub-fill"></div>
      ${ticks.map(() => `<span class="scrub-tick"></span>`).join("")}
      ${keys.map((k) => `<button class="scrub-key" type="button" tabindex="-1" aria-hidden="true" data-name="${esc(k.name)}"></button>`).join("")}
      <span class="scrub-head"></span>
    </div>
    <span class="scrub-frame" aria-hidden="true">F <b>000</b> / ${TOTAL}</span>`;
  document.body.append(bar);

  const fill = bar.querySelector(".scrub-fill");
  const head = bar.querySelector(".scrub-head");
  const frameNum = bar.querySelector(".scrub-frame b");
  const keyEls = [...bar.querySelectorAll(".scrub-key")];
  const tickEls = [...bar.querySelectorAll(".scrub-tick")];
  let spots = [];

  keyEls.forEach((btn, i) => {
    btn.addEventListener("click", () => keys[i].el.scrollIntoView({ behavior: "smooth" }));
  });

  const maxScroll = () => Math.max(1, document.documentElement.scrollHeight - innerHeight);
  const spotOf = (el) => Math.min(1, Math.max(0, (el.getBoundingClientRect().top + scrollY) / maxScroll()));

  const layout = () => {
    spots = keys.map((k) => spotOf(k.el));
    keyEls.forEach((btn, i) => { btn.style.left = `${spots[i] * 100}%`; });
    tickEls.forEach((t, i) => { t.style.left = `${spotOf(ticks[i].el) * 100}%`; });
    update();
  };

  const update = () => {
    const p = Math.min(1, Math.max(0, scrollY / maxScroll()));
    fill.style.transform = `scaleX(${p})`;
    head.style.left = `${p * 100}%`;
    frameNum.textContent = String(Math.round(p * TOTAL)).padStart(3, "0");
    keyEls.forEach((btn, i) => btn.classList.toggle("hit", p >= spots[i] - 0.002));
    const under = document.elementsFromPoint(innerWidth / 2, innerHeight - 14)
      .map((el) => el.closest("[data-tone]"))
      .find((el) => el && !bar.contains(el));
    if (under) bar.classList.toggle("on-light", under.dataset.tone === "light");
  };

  let queued = false;
  addEventListener("scroll", () => {
    if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; update(); }); }
  }, { passive: true });
  let t;
  const relayout = () => { clearTimeout(t); t = setTimeout(layout, 120); };
  addEventListener("resize", relayout);
  addEventListener("load", layout);
  if ("ResizeObserver" in window) new ResizeObserver(relayout).observe(document.body);
  layout();
}

function init() {
  document.documentElement.classList.add("js");
  $("#site-name").textContent = CONTENT.name;
  $("#footer-name").textContent = CONTENT.name;
  $("#year").textContent = new Date().getFullYear();
  renderCanvas();
  $("#projects").innerHTML = CONTENT.projects.map(projectBand).join("");
  $("#work-count").textContent = `${pad(CONTENT.projects.length)} project${CONTENT.projects.length === 1 ? "" : "s"}`;
  $("#about-body").innerHTML = CONTENT.about.split("\n").filter(Boolean).map((p) => `<p>${esc(p)}</p>`).join("");
  $("#links-body").innerHTML = CONTENT.links.map(linkRow).join("");

  wireCardHover();
  wireLightbox();
  wireCopyLinks();
  wireScrollEffects();
  wireTilt();
  buildScrubber();
  observeReveals();
  fitBandTitles();
  updateHeaderTone();
  document.fonts?.ready.then(fitBandTitles);
  document.fonts?.addEventListener("loadingdone", fitBandTitles);
  addEventListener("load", fitBandTitles);
  let fitTimer;
  addEventListener("resize", () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitBandTitles, 120); });
  if (!document.getElementById("terminal-intro")) document.documentElement.classList.add("hero-in");
}

init();
