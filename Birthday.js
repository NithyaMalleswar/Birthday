/* ============================================================
   CONFIG – CHANGE EVERYTHING HERE
============================================================ */
const CONFIG = {
  herName: "My Princess Monuuuu Baeee... 👑",
  dob: "2002-10-14", // YYYY-MM-DD
  togetherDate: "2022-02-14", // YYYY-MM-DD
  photos: [
    { url: "./nithya1.jpg", caption: "Our first memory together", quote: "Every moment with you feels like a beautiful beginning." },
    { url: "./nithya2.jpg", caption: "That beautiful smile", quote: "Your smile is the reason my heart always feels at home." },
    { url: "./mine.jpg", caption: "Love in every glance", quote: "One look from you and my whole world turns golden." },
    { url: "./gift.jpg", caption: "Perfect time together", quote: "Even the quietest moments with you feel like magic." },
    { url: "./mouni3.jpg", caption: "Sweetest moments", quote: "The best memories are the ones made with you." },
    { url: "./mouni4.jpg", caption: "Forever and always", quote: "Forever is not long enough when it comes to us." },
    { url: "./nithya4.jpg", caption: "Little moments, big love", quote: "It’s the tiny moments with you that mean the most." },
    { url: "./nithya3.jpg", caption: "Birthday magic", quote: "You are my favourite kind of happiness and my forever wish." }
  ],
  gifs: [
    { url: "Birthdaywish.jpg", caption: "Happy Birthday!" },
    { url: "BUBULOVE.jpg", caption: "Love you ❤️" },
    { url: "Dudu-bubu.jpg", caption: "Celebration time" },
    { url: "For You.jpg", caption: "You're amazing" }
  ],
  reasons: [
    { icon: "fa-heart", front: "Your Smile", back: "It lights up my whole world and makes everything better." },
    { icon: "fa-star", front: "Your Kindness", back: "You care so deeply for everyone around you. It's inspiring." },
    { icon: "fa-laugh", front: "Your Laughter", back: "The sweetest sound I've ever heard. I'd do anything to hear it." },
    { icon: "fa-brain", front: "Your Mind", back: "You're brilliant, curious and always teach me something new." },
    { icon: "fa-hand-holding-heart", front: "Your Support", back: "You believe in me even when I don't believe in myself." },
    { icon: "fa-infinity", front: "Everything", back: "Simply put — you're my favourite person. Forever." }
  ],
  timeline: [
    { date: "First Met", title: "The Day I First Saw You in College", desc: "I saw you in college, and slowly, without even realising it, a beautiful love story began in my heart." },
    { date: "First Date", title: "Our First Date at Shilparamam", desc: "Spending that happy day with you at Shilparamam felt so special. Every smile, every conversation and every moment became a memory I will always love." },
    { date: "First Trip", title: "Our First Trip to Tirumala", desc: "Our Tirumala trip became one of my most precious memories because every moment felt special with you." },
    { date: "Today", title: "Every Day Since", desc: "Falling more in love with you with every passing moment." }
  ],
  quotes: [
    { text: "You are my today and all of my tomorrows.", author: "— nithya" },
    { text: "I love you not only for what you are, but for what I am when I am with you.", author: "— nithya" },
    { text: "In all the world, there is no heart for me like yours.", author: "— nithya" },
    { text: "You're the closest to heaven I'll ever be.", author: "— nithya" },
    { text: "Every love story is beautiful, but ours is my favourite.", author: "— nithya" }
  ],
  musicUrl: "song.mp3" // change to your song
};

/* ============================================================
   DOM READY
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCanvas();
  initHeartRain();
  initFloatHearts();
  initNavbar();
  initCountdown();
  initStats();
  initBalloons();
  initCake();
  initCarousel();
  initStoryCards();
  initGifGrid();
  initReasons();
  initTimeline();
  initQuotes();
  initGiftBox();
  initLoveProposal();
  initLightbox();
  initScrollTop();
  initMusic();
  initReveal();
  initCelebration();
  initSmoothScroll();
  setYear();
  setNames();
});

/* ============================================================
   PRELOADER
============================================================ */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hide'), 800);
  });
  // fallback
  setTimeout(() => preloader.classList.add('hide'), 3000);
}

/* ============================================================
   CANVAS – CLICK HEARTS & CONFETTI
============================================================ */
function initCanvas() {
  const clickCanvas = document.getElementById('clickCanvas');
  const ctx = clickCanvas.getContext('2d');
  let hearts = [];
  let confetti = [];

  function resize() {
    clickCanvas.width = window.innerWidth;
    clickCanvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // click heart
  document.addEventListener('click', (e) => {
    // ignore clicks on buttons/links/inputs
    if (e.target.closest('button, a, input, .close-btn, .nav-toggle, .carousel-controls button, .gift-box, .flip-card')) return;
    hearts.push({
      x: e.clientX,
      y: e.clientY,
      size: 20 + Math.random() * 15,
      life: 1,
      vx: (Math.random() - 0.5) * 2,
      vy: -2 - Math.random() * 2,
      color: `hsl(${330 + Math.random() * 30}, 100%, 60%)`
    });
  });

  function drawHeart(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 20, size / 20);
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.bezierCurveTo(0, 0, -10, -5, -10, -10);
    ctx.bezierCurveTo(-10, -18, 0, -18, 0, -10);
    ctx.bezierCurveTo(0, -18, 10, -18, 10, -10);
    ctx.bezierCurveTo(10, -5, 0, 0, 0, 5);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, clickCanvas.width, clickCanvas.height);
    // hearts
    hearts = hearts.filter(h => h.life > 0);
    hearts.forEach(h => {
      h.x += h.vx;
      h.y += h.vy;
      h.vy += 0.1;
      h.life -= 0.02;
      drawHeart(ctx, h.x, h.y, h.size, h.color, h.life);
    });
    // confetti
    confetti = confetti.filter(c => c.life > 0);
    confetti.forEach(c => {
      c.x += c.vx;
      c.y += c.vy;
      c.vy += 0.15;
      c.rot += c.vr;
      c.life -= 0.01;
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot);
      ctx.fillStyle = c.color;
      ctx.globalAlpha = c.life;
      ctx.fillRect(-c.w/2, -c.h/2, c.w, c.h);
      ctx.restore();
    });
    requestAnimationFrame(animate);
  }
  animate();

  // expose confetti function globally
  window.fireConfetti = function(amount = 120) {
    const colors = ['#ff2d75', '#ffd166', '#ff5e9c', '#a8326c', '#ffffff', '#ff1493'];
    for (let i = 0; i < amount; i++) {
      confetti.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight / 2 + (Math.random() - 0.5) * 100,
        w: 8 + Math.random() * 8,
        h: 6 + Math.random() * 6,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 15 - 5,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1
      });
    }
  };
}

/* ============================================================
   HEART RAIN
============================================================ */
function initHeartRain() {
  const container = document.getElementById('heartRain');
  const hearts = ['❤️', '💕'];
  setInterval(() => {
    if (document.hidden) return;
    const el = document.createElement('div');
    el.className = 'rain-heart';
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (5 + Math.random() * 5) + 's';
    el.style.fontSize = (14 + Math.random() * 20) + 'px';
    container.appendChild(el);
    setTimeout(() => el.remove(), 10000);
  }, 600);
}

/* ============================================================
   FLOATING HEARTS BG
============================================================ */
function initFloatHearts() {
  const container = document.getElementById('floatHeartsBg');
  const hearts = ['💕'];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('div');
    el.className = 'float-heart';
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = Math.random() * 100 + 'vh';
    el.style.fontSize = (20 + Math.random() * 40) + 'px';
    el.style.animationDuration = (10 + Math.random() * 15) + 's';
    el.style.animationDelay = (-Math.random() * 15) + 's';
    container.appendChild(el);
  }
}

/* ============================================================
   NAVBAR
============================================================ */
function initNavbar() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ============================================================
   COUNTDOWN
============================================================ */
function initCountdown() {
  const dob = new Date(CONFIG.dob);
  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMins = document.getElementById('cdMins');
  const cdSecs = document.getElementById('cdSecs');
  const cdNote = document.getElementById('cdNote');

  function update() {
    const now = new Date();
    let next = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    if (now > next) next.setFullYear(now.getFullYear() + 1);
    // if today is birthday
    if (now.getMonth() === dob.getMonth() && now.getDate() === dob.getDate()) {
      cdNote.textContent = "🎉 It's your birthday! 🎉";
      cdDays.textContent = '00';
      cdHours.textContent = '00';
      cdMins.textContent = '00';
      cdSecs.textContent = '00';
      return;
    }
    const diff = next - now;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    cdDays.textContent = String(d).padStart(2, '0');
    cdHours.textContent = String(h).padStart(2, '0');
    cdMins.textContent = String(m).padStart(2, '0');
    cdSecs.textContent = String(s).padStart(2, '0');
    cdNote.textContent = `until your special day 💖`;
  }
  update();
  setInterval(update, 1000);
}

/* ============================================================
   STATS
============================================================ */
function initStats() {
  const dob = new Date(CONFIG.dob);
  const together = new Date(CONFIG.togetherDate);
  const now = new Date();

  // age
  let age = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
  document.getElementById('statAge').textContent = Math.max(0, age);

  // days together
  const daysTogether = Math.floor((now - together) / 86400000);
  document.getElementById('statDays').textContent = daysTogether.toLocaleString();

  // days alive
  const daysAlive = Math.floor((now - dob) / 86400000);
  document.getElementById('statAlive').textContent = daysAlive.toLocaleString();
}

/* ============================================================
   BALLOONS
============================================================ */
function initBalloons() {
  const layer = document.getElementById('balloonLayer');
  const colors = ['#ff2d75', '#ffd166', '#ff5e9c', '#a8326c', '#ff1493', '#ffb6c1'];
  for (let i = 0; i < 12; i++) {
    const b = document.createElement('div');
    b.className = 'balloon';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.background = `radial-gradient(circle at 30% 30%, ${colors[Math.floor(Math.random() * colors.length)]}, rgba(0,0,0,0.2))`;
    b.style.animationDuration = (8 + Math.random() * 8) + 's';
    b.style.animationDelay = (-Math.random() * 10) + 's';
    b.style.width = (30 + Math.random() * 40) + 'px';
    b.style.height = (40 + Math.random() * 50) + 'px';
    layer.appendChild(b);
  }
}

/* ============================================================
   CAKE
============================================================ */
function initCake() {
  const cake = document.getElementById('cakeEl');
  const btn = document.getElementById('blowBtn');
  const msg = document.getElementById('wishMsg');
  let blown = false;

  function blow() {
    if (blown) return;
    blown = true;
    cake.classList.add('blown');
    msg.textContent = "✨ Your wish is my command, my love ✨";
    window.fireConfetti(200);
  }
  cake.addEventListener('click', blow);
  btn.addEventListener('click', blow);
}

/* ============================================================
   CAROUSEL 3D
============================================================ */
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const prev = document.getElementById('carouselPrev');
  const next = document.getElementById('carouselNext');
  const photos = CONFIG.photos;
  const n = photos.length;
  const angle = 360 / n;
  const radius = 300;

  track.innerHTML = '';
  photos.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'carousel-card';
    card.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
    card.innerHTML = `
      <img src="${p.url}" alt="${p.caption}" loading="lazy" />
      <div class="card-caption">${p.caption}</div>
    `;
    card.addEventListener('click', () => openLightbox(i));
    track.appendChild(card);
  });

  let current = 0;
  function update() {
    track.style.transform = `translateZ(-${radius}px) rotateY(${-current * angle}deg)`;
  }
  prev.addEventListener('click', () => { current--; update(); });
  next.addEventListener('click', () => { current++; update(); });
  update();
}

function initStoryCards() {
  document.querySelectorAll('.story-card').forEach((card) => {
    card.addEventListener('click', () => {
      const url = card.dataset.url;
      const caption = card.dataset.caption || 'Our memory';
      const quote = card.dataset.quote || 'You are my love and my forever.';
      openCustomLightbox(url, caption, quote);
    });
  });
}

/* ============================================================
   GIF GRID
============================================================ */
function initGifGrid() {
  const grid = document.getElementById('gifGrid');
  grid.innerHTML = '';
  CONFIG.gifs.forEach(g => {
    const div = document.createElement('div');
    div.className = 'gif-card reveal';
    div.innerHTML = `
      <img src="${g.url}" alt="${g.caption}" loading="lazy" />
      <div class="gif-caption">${g.caption}</div>
    `;
    grid.appendChild(div);
  });
}

/* ============================================================
   REASONS FLIP CARDS
============================================================ */
function initReasons() {
  const grid = document.getElementById('reasonsGrid');
  grid.innerHTML = '';
  CONFIG.reasons.forEach(r => {
    const card = document.createElement('div');
    card.className = 'flip-card reveal';
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">
          <i class="fas ${r.icon}"></i>
          <p>${r.front}</p>
        </div>
        <div class="flip-back">
          <p>${r.back}</p>
        </div>
      </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });
}

/* ============================================================
   TIMELINE
============================================================ */
function initTimeline() {
  const list = document.getElementById('timelineList');
  list.innerHTML = '';
  CONFIG.timeline.forEach(t => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.innerHTML = `
      <div class="date">${t.date}</div>
      <h4>${t.title}</h4>
      <p>${t.desc}</p>
    `;
    list.appendChild(item);
  });
}

/* ============================================================
   QUOTES TYPEWRITER
============================================================ */
function initQuotes() {
  const typeEl = document.getElementById('typewriter');
  const authorEl = document.getElementById('quoteAuthor');
  const dotsEl = document.getElementById('quoteDots');
  const quotes = CONFIG.quotes;
  let qi = 0, ci = 0, deleting = false;

  // dots
  quotes.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => { qi = i; ci = 0; deleting = false; type(); updateDots(); });
    dotsEl.appendChild(d);
  });
  function updateDots() {
    dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === qi));
  }

  function type() {
    const q = quotes[qi];
    if (!deleting) {
      typeEl.textContent = q.text.slice(0, ++ci);
      if (ci === q.text.length) {
        deleting = true;
        authorEl.textContent = q.author;
        setTimeout(type, 6000);
        return;
      }
    } else {
      typeEl.textContent = q.text.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        qi = (qi + 1) % quotes.length;
        authorEl.textContent = '—';
        updateDots();
      }
    }
    setTimeout(type, deleting ? 130 : 180);
  }
  type();
}

/* ============================================================
   GIFT BOX
============================================================ */
function initGiftBox() {
  const box = document.getElementById('giftBox');
  const msg = document.getElementById('giftMessage');
  const hint = document.getElementById('giftHint');
  box.addEventListener('click', () => {
    box.classList.toggle('open');
    msg.classList.toggle('show');
    hint.textContent = box.classList.contains('open') ? '💝 For you' : 'Tap the gift 🎁';
    if (box.classList.contains('open')) window.fireConfetti(120);
  });
}

/* ============================================================
   LIGHTBOX
============================================================ */
let lbIndex = 0;
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lbImg');
  const caption = document.getElementById('lbCaption');
  const quote = document.getElementById('lbQuote');
  const open = document.getElementById('lbOpen');
  const close = document.getElementById('lbClose');
  const prev = document.getElementById('lbPrev');
  const next = document.getElementById('lbNext');

  function showImageWithAnimation(url, captionText, quoteText, direction) {
    const outClass = direction === 'next' ? 'lb-slide-out-left' : 'lb-slide-out-right';
    const inClass = direction === 'next' ? 'lb-slide-in-right' : 'lb-slide-in-left';

    img.classList.remove('lb-slide-out-left', 'lb-slide-out-right', 'lb-slide-in-right', 'lb-slide-in-left');
    img.classList.add(outClass);

    setTimeout(() => {
      img.src = url;
      caption.textContent = captionText;
      quote.textContent = quoteText;
      open.href = url;
      img.classList.remove(outClass);
      void img.offsetWidth;
      img.classList.add(inClass);
      setTimeout(() => img.classList.remove(inClass), 600);
    }, 280);
  }

  window.openCustomLightbox = function(url, captionText, quoteText) {
    img.classList.remove('lb-slide-out-left', 'lb-slide-out-right', 'lb-slide-in-right', 'lb-slide-in-left');
    img.src = url;
    caption.textContent = captionText;
    quote.textContent = quoteText;
    open.href = url;
    lb.classList.add('show');
  };

  window.openLightbox = function(i) {
    lbIndex = i;
    const p = CONFIG.photos[i];
    img.classList.remove('lb-slide-out-left', 'lb-slide-out-right', 'lb-slide-in-right', 'lb-slide-in-left');
    img.src = p.url;
    caption.textContent = p.caption;
    quote.textContent = p.quote;
    open.href = p.url;
    lb.classList.add('show');
  };
  close.addEventListener('click', () => lb.classList.remove('show'));
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('show'); });
  prev.addEventListener('click', () => {
    const prevIndex = (lbIndex - 1 + CONFIG.photos.length) % CONFIG.photos.length;
    const p = CONFIG.photos[prevIndex];
    showImageWithAnimation(p.url, p.caption, p.quote, 'prev');
    lbIndex = prevIndex;
  });
  next.addEventListener('click', () => {
    const nextIndex = (lbIndex + 1) % CONFIG.photos.length;
    const p = CONFIG.photos[nextIndex];
    showImageWithAnimation(p.url, p.caption, p.quote, 'next');
    lbIndex = nextIndex;
  });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('show')) return;
    if (e.key === 'Escape') lb.classList.remove('show');
    if (e.key === 'ArrowLeft') prev.click();
    if (e.key === 'ArrowRight') next.click();
  });
}

/* ============================================================
   SCROLL TOP
============================================================ */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   MUSIC
============================================================ */
function initMusic() {
  const btn = document.getElementById('musicBtn');
  const audio = document.getElementById('bgMusic');
  audio.src = CONFIG.musicUrl;
  let playing = false;
  btn.addEventListener('click', () => {
    if (playing) {
      audio.pause();
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
      audio.play().catch(() => {});
      btn.classList.add('playing');
      btn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    playing = !playing;
  });
}

/* ============================================================
   REVEAL ON SCROLL
============================================================ */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ============================================================
   CELEBRATION OVERLAY
============================================================ */
function initCelebration() {
  window.triggerCelebration = function() {
    document.getElementById('celebrationOverlay').classList.add('show');
    window.fireConfetti(250);
  };
  window.closeCelebration = function() {
    document.getElementById('celebrationOverlay').classList.remove('show');
  };
}

/* ============================================================
   SMOOTH SCROLL
============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ============================================================
   YEAR & NAMES
============================================================ */
function setYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}
function setNames() {
  document.getElementById('navName').textContent = CONFIG.herName.split(' ')[0] || 'Her';
  document.getElementById('herName').textContent = CONFIG.herName;
  document.getElementById('footerName').textContent = `Happy Birthday, ${CONFIG.herName} ❤️`;
  const dob = new Date(CONFIG.dob);
  const months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
  document.getElementById('dobBadge').textContent = `${dob.getDate()} ${months[dob.getMonth()]}`;
}

/* ============================================================
   LOVE PROPOSAL
============================================================ */
function initLoveProposal() {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const noNote = document.getElementById('noNote');
  const popup = document.getElementById('lovePopup');
  const closeBtn = document.getElementById('lovePopupClose');
  const doneBtn = document.getElementById('lovePopupDone');

  if (!yesBtn || !noBtn || !popup) return;

  let dodgeCount = 0;
  const dodgePositions = [
    [-110, 0], [105, -12], [-85, 20], [95, 18], [0, -28],
    [-125, -18], [120, 24]
  ];

  function dodgeNoButton() {
    const [x, y] = dodgePositions[dodgeCount % dodgePositions.length];
    noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${dodgeCount % 2 ? 4 : -4}deg)`;
    dodgeCount += 1;
    noNote.textContent = 'No option is running away... try Yes instead 💕';
  }

  function showLovePopup() {
    popup.classList.add('show');
    document.body.classList.add('popup-open');
    window.fireConfetti(260);
  }

  function closeLovePopup() {
    popup.classList.remove('show');
    document.body.classList.remove('popup-open');
  }

  yesBtn.addEventListener('click', showLovePopup);
  noBtn.addEventListener('mouseenter', dodgeNoButton);
  noBtn.addEventListener('click', dodgeNoButton);
  closeBtn.addEventListener('click', closeLovePopup);
  doneBtn.addEventListener('click', closeLovePopup);
  popup.addEventListener('click', (event) => {
    if (event.target === popup) closeLovePopup();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLovePopup();
  });
}