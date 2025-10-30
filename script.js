// 🦓 Zebra Wallpapers by Monu

const images = [
  "https://images.unsplash.com/photo-1516110833967-5787bba6f71f",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1502378735452-bc7d86632805",
  "https://images.unsplash.com/photo-1502720705749-3c8d2b4de2e2",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e"
];

const gallery = document.getElementById("gallery");
const countEl = document.getElementById("count");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbClose = document.getElementById("lb-close");
const lbPrev = document.getElementById("lb-prev");
const lbNext = document.getElementById("lb-next");
const downloadBtn = document.getElementById("downloadBtn");
const lbFav = document.getElementById("lb-fav");

let current = 0;

function loadGallery() {
  countEl.textContent = ${images.length} Wallpapers;
  images.forEach((url, i) => {
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.src = ${url}?auto=format&fit=crop&w=600&q=80;
    img.alt = Zebra Wallpaper ${i + 1};
    div.appendChild(img);
    div.addEventListener("click", () => openLightbox(i));
    gallery.appendChild(div);
  });
}

function openLightbox(index) {
  current = index;
  lbImg.src = ${images[index]}?auto=format&fit=crop&w=1200&q=90;
  downloadBtn.href = images[index];
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  lightbox.setAttribute("aria-hidden", "true");
}
function next() {
  current = (current + 1) % images.length;
  openLightbox(current);
}
function prev() {
  current = (current - 1 + images.length) % images.length;
  openLightbox(current);
}

lbClose.addEventListener("click", closeLightbox);
lbNext.addEventListener("click", next);
lbPrev.addEventListener("click", prev);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

loadGallery();

// 🎨 Particle Background
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
let particles = Array.from({ length: 50 }, () => ({
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: Math.random() * 3 + 1,
  dx: Math.random() - 0.5,
  dy: Math.random() - 0.5
}));
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if (p.x < 0 || p.x > innerWidth) p.dx *= -1;
    if (p.y < 0 || p.y > innerHeight) p.dy *= -1;
  });
  requestAnimationFrame(draw);
}
draw();
