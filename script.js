/* ==========================================================
   RAISA'S GRAND BIRTHDAY CELEBRATION - HYPER VFX SCRIPT
   - Background Filled with Kinetic Photo Streams & 3D Polaroids
   - Audio Beat-Reactive Pulsing (Web Audio API Analyser)
   - Beat-Synced Photo Transitions (~120 BPM Musical Phrase)
   - Full Fireworks Simulation, Starfield, Cursor Trails & 3D Objects
   - Bengali Birthday Letter with Mystery Midnight Reveal
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  init3DPhotoRing();
  initBackgroundPhotoStreams();
  initFloatingPolaroids();
  initPhotoBubblesAndCrystals();
  initAuroraCanvas();
  initStarfieldCanvas();
  initFireworksCanvas();
  initCursorTrail();
  initParticlesAndConfetti();
  initFloating3DObjects();
  initBalloons();
  initMusicPlayer();
  initCountdown();
  initMidnightCountdown();
  initGalleryAndSlideshow();
  initCake();
  initEnvelope();
  initWishGenerator();
  initCinemaExperience();
});

/* ==========================================================
   PHOTO DATA (32 PHOTOS)
   ========================================================== */
const photoFiles = [
  "6077836997310485183.jpg",
  "6077836997310485184.jpg",
  "6077836997310485185.jpg",
  "6077836997310485186.jpg",
  "6077836997310485187.jpg",
  "6077836997310485188.jpg",
  "6077836997310485189.jpg",
  "6077836997310485190.jpg",
  "6077836997310485191.jpg",
  "6077836997310485192.jpg",
  "6077836997310485195.jpg",
  "6077836997310485196.jpg",
  "6077836997310485197.jpg",
  "6077836997310485198.jpg",
  "6077836997310485199.jpg",
  "6077836997310485200.jpg",
  "6077836997310485201.jpg",
  "6077836997310485202.jpg",
  "6077836997310485205.jpg",
  "6077836997310485208.jpg",
  "6077836997310485209.jpg",
  "6077836997310485213.jpg",
  "6077836997310485214.jpg",
  "6077836997310485215.jpg",
  "6077836997310485216.jpg",
  "6077836997310485217.jpg",
  "6077836997310485218.jpg",
  "6077836997310485219.jpg",
  "6077836997310485220.jpg",
  "6077836997310485221.jpg",
  "6077836997310485222.jpg",
  "6077836997310485223.jpg"
];

/* ==========================================================
   1. 3D ORBITING BACKGROUND PHOTO RING (DESKTOP ONLY)
   ========================================================== */
function init3DPhotoRing() {
  if (window.innerWidth <= 768) return; // Prevent lag on mobile devices
  const ringContainers = [
    document.getElementById('bgPhotoRing'),
    document.getElementById('cinemaBgPhotoRing')
  ];

  const ringCount = 10;
  const angleStep = 360 / ringCount;

  ringContainers.forEach(ring => {
    if (!ring) return;
    ring.innerHTML = '';
    for (let i = 0; i < ringCount; i++) {
      const card = document.createElement('div');
      card.className = 'ring-photo-card';
      const angle = i * angleStep;
      card.style.setProperty('--ring-angle', angle);
      const photo = photoFiles[i % photoFiles.length];
      card.innerHTML = `<img src="images/${photo}" alt="Raisa 3D Memory" loading="lazy">`;
      ring.appendChild(card);
    }
  });
}

/* ==========================================================
   2. FLOATING GLOWING PHOTO BUBBLES & CRYSTALS (DESKTOP ONLY)
   ========================================================== */
function initPhotoBubblesAndCrystals() {
  if (window.innerWidth <= 768) return; // Prevent lag on mobile devices
  const bubbleContainers = [
    document.getElementById('bgPhotoBubbles'),
    document.getElementById('cinemaPhotoBubbles')
  ];
  const crystalContainer = document.getElementById('bgPhotoCrystals');

  function spawnBubble() {
    bubbleContainers.forEach(container => {
      if (!container || container.children.length > 4) return;
      const b = document.createElement('div');
      b.className = 'photo-bubble';
      const randPhoto = photoFiles[Math.floor(Math.random() * photoFiles.length)];
      b.style.left = `${Math.random() * 85 + 5}%`;
      b.style.animationDuration = `${Math.random() * 5 + 12}s`;
      b.innerHTML = `<img src="images/${randPhoto}" alt="Bubble Memory" loading="lazy">`;
      container.appendChild(b);
      setTimeout(() => b.remove(), 18000);
    });
  }

  function spawnCrystal() {
    if (!crystalContainer || crystalContainer.children.length > 3) return;
    const c = document.createElement('div');
    c.className = 'photo-crystal-tile';
    const randPhoto = photoFiles[Math.floor(Math.random() * photoFiles.length)];
    c.style.left = `${Math.random() * 80 + 10}%`;
    c.style.animationDuration = `${Math.random() * 6 + 15}s`;
    c.innerHTML = `<img src="images/${randPhoto}" alt="Crystal Memory" loading="lazy">`;
    crystalContainer.appendChild(c);
    setTimeout(() => c.remove(), 22000);
  }

  for (let i = 0; i < 2; i++) {
    setTimeout(spawnBubble, i * 1400);
    setTimeout(spawnCrystal, i * 2000);
  }
  setInterval(spawnBubble, 5000);
  setInterval(spawnCrystal, 6500);
}

/* ==========================================================
   3. KINETIC BACKGROUND PHOTO WALL STREAMS (DESKTOP ONLY)
   ========================================================== */
function initBackgroundPhotoStreams() {
  if (window.innerWidth <= 768) return; // Prevent lag on mobile devices
  const streamCols = [
    document.getElementById('streamCol1'),
    document.getElementById('streamCol2'),
    document.getElementById('streamCol3'),
    document.getElementById('streamCol4'),
    document.getElementById('cinemaStream1'),
    document.getElementById('cinemaStream2'),
    document.getElementById('cinemaStream3'),
    document.getElementById('cinemaStream4')
  ];

  const total = photoFiles.length;
  streamCols.forEach((col, colIdx) => {
    if (!col) return;
    const startIndex = (colIdx * 4) % total;
    const colPhotos = [];
    for (let i = 0; i < 8; i++) {
      colPhotos.push(photoFiles[(startIndex + i) % total]);
    }
    const fullList = [...colPhotos, ...colPhotos];
    fullList.forEach((file, i) => {
      const card = document.createElement('div');
      card.className = 'stream-photo-card';
      const rot = (i % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 1);
      card.style.setProperty('--rot', `${rot}deg`);
      card.innerHTML = `<img src="images/${file}" alt="Memory" loading="lazy">`;
      col.appendChild(card);
    });
  });
}

/* ==========================================================
   4. FLOATING 3D BACKGROUND POLAROIDS
   ========================================================== */
function initFloatingPolaroids() {
  if (window.innerWidth <= 768) return; // Prevent lag on mobile devices
  const container = document.getElementById('bgPolaroids');
  if (!container) return;
  const captions = ['Happy Birthday 🎂', 'Sweet Smile ✨', 'Raisa 💖', 'Grace 🌸', 'Books & Knowledge 📚', 'Joy 💫'];

  function spawnPolaroid() {
    if (document.querySelectorAll('.polaroid-card').length > 5) return;
    const p = document.createElement('div');
    p.className = 'polaroid-card';
    const randPhoto = photoFiles[Math.floor(Math.random() * photoFiles.length)];
    const randCap = captions[Math.floor(Math.random() * captions.length)];
    const rot = (Math.random() - 0.5) * 20;

    p.style.left = `${Math.random() * 85 + 5}%`;
    p.style.setProperty('--init-rot', `${rot}deg`);
    p.style.animationDuration = `${Math.random() * 6 + 14}s`;
    p.innerHTML = `
      <img src="images/${randPhoto}" alt="Memory" loading="lazy">
      <div class="polaroid-caption">${randCap}</div>
    `;

    container.appendChild(p);
    setTimeout(() => p.remove(), 21000);
  }

  for (let i = 0; i < 3; i++) {
    setTimeout(spawnPolaroid, i * 1500);
  }
  setInterval(spawnPolaroid, 4500);
}

/* ==========================================================
   5. MUSIC PLAYLIST & BEAT-REACTIVE AUDIO ENGINE
   ========================================================== */
const playlist = [
  { title: "Classical Violin & Strings", src: "music/viacheslavstarostin-classical-violin-strings-music-408073.mp3" },
  { title: "Romantic Acoustic Melody", src: "music/andriig-sad-sad-acoustic-music-566795.mp3" },
  { title: "Peaceful Lo-Fi Beats", src: "music/prettyjohn1-sad-lofi-533422.mp3" },
  { title: "Soulful Strings Melody", src: "music/soulfuljamtracks-strings-violin-background-478146.mp3" },
  { title: "Isabel LaRosa - favorite", src: "music/Isabel LaRosa - favorite (Lyrics).mp3" },
  { title: "Soft Emotional Strings", src: "music/solarflex-sad-sad-music-571733.mp3" }
];

let currentTrackIndex = 0;
let isPlaying = false;
let audio = new Audio();
audio.preload = "auto";
let audioCtx = null;
let analyser = null;

function initAudioContext() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    startSynthesizedBeatLoop();
  } catch (e) {
    startSynthesizedBeatLoop();
  }
}

function startBeatDetectionLoop() {
  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  const cinemaStage = document.getElementById('cinemaStage');

  function analyze() {
    analyser.getByteFrequencyData(dataArray);
    // Lower frequency bass average
    const bass = (dataArray[0] + dataArray[1] + dataArray[2] + dataArray[3]) / 4;

    if (bass > 175) {
      cinemaStage?.classList.add('beat-pulse-active');
      setTimeout(() => cinemaStage?.classList.remove('beat-pulse-active'), 90);
    }
    requestAnimationFrame(analyze);
  }
  analyze();
}

function startSynthesizedBeatLoop() {
  // Graceful violin cadence rhythm (~500ms harmonic pulse)
  const cinemaStage = document.getElementById('cinemaStage');
  setInterval(() => {
    if (!isPlaying) return;
    cinemaStage?.classList.add('beat-pulse-active');
    setTimeout(() => cinemaStage?.classList.remove('beat-pulse-active'), 110);
  }, 500);
}

/* ==========================================================
   SONG LYRICS / POETIC QUOTES SYNCHRONIZER DATA (Classical Violin)
   ========================================================== */
const songLyrics = [
  { time: 0, en: "♪ (Classical Violin Strings - A Melody for Raisa) ♪", bn: "♪ স্নিগ্ধ ভায়োলিনের মায়াবী সুরে রইসার জন্মদিনের আয়োজন ♪" },
  { time: 5.5, en: "In every gentle string, a heartfelt prayer resonates...", bn: "ভায়োলিনের প্রতিটি মিষ্টি সুরে মিশে আছে তোমার জন্য আন্তরিক দোয়া..." },
  { time: 10.5, en: "A harmony of grace, brilliance, and timeless elegance...", bn: "তোমার মেধা, প্রজ্ঞা আর স্নিগ্ধ ব্যক্তিত্ব যেন এক অপূর্ব সুরের মূর্ছনা..." },
  { time: 15.5, en: "Happy Birthday to the most dedicated student, Raisa...", bn: "জ্ঞান ও বইপ্রেমী অনন্য শিক্ষার্থী রইসাকে জন্মদিনের রক্তিম শুভেচ্ছা..." },
  { time: 21.0, en: "Like a symphony of stars glowing across the night sky...", bn: "রাতের আকাশে যেমন তারারা আলো ছড়ায়, তেমনই দ্যুতি ছড়াক তোমার জীবন..." },
  { time: 26.5, en: "May every path you walk be filled with joy and success...", bn: "তোমার আগামীর প্রতিটি দিন ভরে উঠুক অফুরন্ত আনন্দ আর মহাসাফল্যে..." },
  { time: 32.0, en: "Every book you open blossoms into wisdom and light...", bn: "বইয়ের পাতায় তোমার একাগ্র সাধনা তোমাকে নিয়ে যাবে অনন্য উচ্চতায়..." },
  { time: 37.5, en: "Tonight at 12:00 AM, a secret awaits to be revealed...", bn: "আজ রাত ঠিক ১২:০০ টায় এক গোপন রহস্যের জট খুলবে... 🤫" },
  { time: 43.0, en: "May all your dreams and unspoken wishes come true...", bn: "তোমার মনের সকল ইচ্ছা আর না-বলা স্বপ্নগুলো সুন্দরভাবে পূরণ হোক..." },
  { time: 49.0, en: "Always keep that beautiful, innocent smile on your face...", bn: "তোমার মুখের এই স্নিগ্ধ ও পবিত্র মিষ্টি হাসি সারাজীবন অটুট থাকুক..." },
  { time: 55.0, en: "Happy Birthday Raisa! Keep shining brighter forever...", bn: "শুভ জন্মদিন রইসা! আলো ছড়াও এবং চিরকাল সুখে শান্তিতে থাকো... ✨💖" }
];

function initMusicPlayer() {
  const diskWrapper = document.getElementById('diskWrapper');
  const trackTitle = document.getElementById('trackTitle');
  const trackStatus = document.getElementById('trackStatus');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const prevTrackBtn = document.getElementById('prevTrackBtn');
  const nextTrackBtn = document.getElementById('nextTrackBtn');
  const volSlider = document.getElementById('volSlider');
  const cinemaBgLyricEn = document.getElementById('cinemaBgLyricEn');
  const cinemaBgLyricBn = document.getElementById('cinemaBgLyricBn');
  const mainBgLyricEn = document.getElementById('mainBgLyricEn');
  const mainBgLyricBn = document.getElementById('mainBgLyricBn');

  // Live Animated Background Lyrics Sync
  audio.addEventListener('timeupdate', () => {
    const curTime = audio.currentTime;
    for (let i = songLyrics.length - 1; i >= 0; i--) {
      if (curTime >= songLyrics[i].time) {
        if (cinemaBgLyricEn && cinemaBgLyricEn.textContent !== songLyrics[i].en) {
          cinemaBgLyricEn.textContent = songLyrics[i].en;
          if (cinemaBgLyricBn) cinemaBgLyricBn.textContent = songLyrics[i].bn;

          if (mainBgLyricEn) mainBgLyricEn.textContent = songLyrics[i].en;
          if (mainBgLyricBn) mainBgLyricBn.textContent = songLyrics[i].bn;

          // Trigger kinetic text pop animation
          [cinemaBgLyricEn, mainBgLyricEn].forEach(el => {
            if (el) {
              el.classList.remove('lyric-updated');
              void el.offsetWidth;
              el.classList.add('lyric-updated');
            }
          });
        }
        break;
      }
    }
  });

  function loadTrack(index) {
    currentTrackIndex = (index + playlist.length) % playlist.length;
    audio.src = playlist[currentTrackIndex].src;
    trackTitle.textContent = playlist[currentTrackIndex].title;
    if (cinemaMusicTitle) cinemaMusicTitle.textContent = playlist[currentTrackIndex].title;
    audio.volume = parseFloat(volSlider.value);
  }

  const mobileAudioUnlock = document.getElementById('mobileAudioUnlock');

  function playTrack() {
    initAudioContext();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlaying = true;
        playPauseBtn.textContent = '⏸';
        diskWrapper.classList.add('playing');
        trackStatus.textContent = 'Now Playing 🎵';
        if (mobileAudioUnlock) mobileAudioUnlock.classList.add('hidden');
      }).catch(() => {
        // Autoplay blocked by mobile browser policy
        isPlaying = false;
        trackStatus.textContent = 'Tap to play 🎵';
        if (mobileAudioUnlock) mobileAudioUnlock.classList.remove('hidden');
      });
    }
  }

  function pauseTrack() {
    audio.pause();
    isPlaying = false;
    playPauseBtn.textContent = '▶';
    diskWrapper.classList.remove('playing');
    trackStatus.textContent = 'Paused ⏸';
  }

  loadTrack(0);
  playTrack();

  const handleUserUnlockAudio = () => {
    if (!isPlaying || audio.paused) {
      playTrack();
    }
    if (mobileAudioUnlock) mobileAudioUnlock.classList.add('hidden');
  };

  ['click', 'touchstart', 'touchend', 'pointerdown', 'scroll'].forEach(evt => {
    window.addEventListener(evt, handleUserUnlockAudio, { passive: true });
    document.addEventListener(evt, handleUserUnlockAudio, { passive: true });
  });

  mobileAudioUnlock?.addEventListener('click', (e) => {
    e.stopPropagation();
    playTrack();
    mobileAudioUnlock.classList.add('hidden');
  });

  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) pauseTrack(); else playTrack();
  });

  diskWrapper.addEventListener('click', () => {
    if (isPlaying) pauseTrack(); else playTrack();
  });

  prevTrackBtn.addEventListener('click', () => {
    loadTrack(currentTrackIndex - 1);
    playTrack();
  });

  nextTrackBtn.addEventListener('click', () => {
    loadTrack(currentTrackIndex + 1);
    playTrack();
  });

  volSlider.addEventListener('input', (e) => {
    audio.volume = parseFloat(e.target.value);
  });

  audio.addEventListener('ended', () => {
    loadTrack(currentTrackIndex + 1);
    playTrack();
  });
}

function playCelebrationSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.85);
    });
  } catch (e) {}
}

function playPopSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch (e) {}
}

/* ==========================================================
   4. REALISTIC CONTINUOUS FIREWORKS SIMULATION
   ========================================================== */
function initFireworksCanvas() {
  const canvas = document.getElementById('fireworksCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let fireworks = [];
  let fwParticles = [];
  const colors = ['#ff0055', '#ffd700', '#00f2fe', '#9b51e0', '#ff007f', '#00ff88', '#ffffff'];

  class FireworkRocket {
    constructor(startX, startY, targetX, targetY, color) {
      this.x = startX;
      this.y = startY;
      this.targetX = targetX;
      this.targetY = targetY;
      this.color = color;
      this.speed = 12;
      this.angle = Math.atan2(targetY - startY, targetX - startX);
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.distanceToTarget = Math.hypot(targetX - startX, targetY - startY);
      this.distanceTraveled = 0;
      this.trail = [];
    }

    update(index) {
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > 5) this.trail.shift();

      this.x += this.vx;
      this.y += this.vy;
      this.distanceTraveled = Math.hypot(this.x - this.targetX, this.y - this.targetY);

      if (this.distanceTraveled < 15 || this.vy >= 0) {
        createExplosion(this.targetX, this.targetY, this.color);
        fireworks.splice(index, 1);
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(this.trail[0]?.x || this.x, this.trail[0]?.y || this.y);
      this.trail.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.color;
      ctx.stroke();
      ctx.restore();
    }
  }

  class FireworkParticle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.alpha = 1;
      this.decay = Math.random() * 0.015 + 0.012;
      this.gravity = 0.12;
      this.size = Math.random() * 3 + 2;
    }

    update(index) {
      this.vx *= 0.96;
      this.vy *= 0.96;
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
      if (this.alpha <= 0) fwParticles.splice(index, 1);
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function createExplosion(x, y, color) {
    const count = 55;
    for (let i = 0; i < count; i++) {
      fwParticles.push(new FireworkParticle(x, y, color));
    }
  }

  function launchRandomFirework() {
    const startX = Math.random() * width * 0.8 + width * 0.1;
    const startY = height;
    const targetX = Math.random() * width * 0.7 + width * 0.15;
    const targetY = Math.random() * height * 0.45 + height * 0.1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    fireworks.push(new FireworkRocket(startX, startY, targetX, targetY, color));
  }

  setInterval(launchRandomFirework, 900);

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update(i);
      fireworks[i]?.draw();
    }
    for (let i = fwParticles.length - 1; i >= 0; i--) {
      fwParticles[i].update(i);
      fwParticles[i]?.draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================
   5. 3D WARP SPEED STARFIELD
   ========================================================== */
function initStarfieldCanvas() {
  const canvas = document.getElementById('starfieldCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const numStars = 160;
  let stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * width,
      size: Math.random() * 2 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const cx = width / 2;
    const cy = height / 2;

    stars.forEach(star => {
      star.z -= 4;
      if (star.z <= 0) {
        star.z = width;
        star.x = (Math.random() - 0.5) * width * 2;
        star.y = (Math.random() - 0.5) * height * 2;
      }

      const k = 250 / star.z;
      const px = star.x * k + cx;
      const py = star.y * k + cy;

      if (px >= 0 && px <= width && py >= 0 && py <= height) {
        const size = Math.max(0.5, (1 - star.z / width) * 3);
        const alpha = Math.min(1, (1 - star.z / width) * 1.5);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    requestAnimationFrame(draw);
  }
  draw();
}

/* ==========================================================
   6. MAGIC CURSOR TRAIL
   ========================================================== */
function initCursorTrail() {
  const canvas = document.getElementById('cursorTrailCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let trailParticles = [];
  const emojis = ['✨', '💖', '⭐', '🌸'];

  window.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 2; i++) {
      trailParticles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 14 + 10,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        alpha: 1,
        rotation: Math.random() * 360
      });
    }
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const t = e.touches[0];
      trailParticles.push({
        x: t.clientX,
        y: t.clientY,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 16 + 12,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        alpha: 1,
        rotation: Math.random() * 360
      });
    }
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = trailParticles.length - 1; i >= 0; i--) {
      const p = trailParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.035;

      if (p.alpha <= 0) {
        trailParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.font = `${p.size}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.emoji, p.x, p.y);
      ctx.restore();
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ==========================================================
   7. FLOATING 3D OBJECTS (BOOKS, HEARTS, GIFTS, STARS)
   ========================================================== */
function initFloating3DObjects() {
  const container = document.getElementById('floating3DObjects');
  if (!container) return;
  const items = ['📚', '💖', '🎁', '⭐', '🌸', '📖', '💫'];

  function spawn3DObject() {
    if (document.querySelectorAll('.float-3d-item').length > 18) return;
    const el = document.createElement('div');
    el.className = 'float-3d-item';
    el.textContent = items[Math.floor(Math.random() * items.length)];
    el.style.left = `${Math.random() * 90 + 5}%`;
    el.style.fontSize = `${Math.random() * 24 + 28}px`;
    el.style.animationDuration = `${Math.random() * 6 + 9}s`;

    container.appendChild(el);
    setTimeout(() => el.remove(), 16000);
  }

  for (let i = 0; i < 8; i++) {
    setTimeout(spawn3DObject, i * 600);
  }
  setInterval(spawn3DObject, 1800);
}

/* ==========================================================
   8. AURORA MESH CANVAS
   ========================================================== */
function initAuroraCanvas() {
  const canvas = document.getElementById('auroraCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const orbs = [
    { x: width * 0.2, y: height * 0.3, vx: 0.9, vy: 0.6, r: 300, color: 'rgba(255, 0, 85, 0.3)' },
    { x: width * 0.8, y: height * 0.6, vx: -0.8, vy: -0.7, r: 320, color: 'rgba(155, 81, 224, 0.28)' },
    { x: width * 0.5, y: height * 0.8, vx: 0.7, vy: -0.7, r: 280, color: 'rgba(0, 242, 254, 0.22)' },
    { x: width * 0.7, y: height * 0.2, vx: -0.9, vy: 0.9, r: 300, color: 'rgba(255, 215, 0, 0.22)' }
  ];

  function draw() {
    ctx.clearRect(0, 0, width, height);
    orbs.forEach(orb => {
      orb.x += orb.vx;
      orb.y += orb.vy;
      if (orb.x < -orb.r || orb.x > width + orb.r) orb.vx *= -1;
      if (orb.y < -orb.r || orb.y > height + orb.r) orb.vy *= -1;

      const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
      grad.addColorStop(0, orb.color);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ==========================================================
   CONFETTI & SPARKLE ENGINE
   ========================================================== */
let confettiParticles = [];
let sparkleParticles = [];

function initParticlesAndConfetti() {
  const confCanvas = document.getElementById('confettiCanvas');
  const confCtx = confCanvas.getContext('2d');
  const spkCanvas = document.getElementById('sparkleCanvas');
  const spkCtx = spkCanvas.getContext('2d');

  function resize() {
    confCanvas.width = window.innerWidth;
    confCanvas.height = window.innerHeight;
    spkCanvas.width = window.innerWidth;
    spkCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 50; i++) {
    sparkleParticles.push({
      x: Math.random() * spkCanvas.width,
      y: Math.random() * spkCanvas.height,
      radius: Math.random() * 2.5 + 0.6,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1
    });
  }

  function createConfettiBurst(x, y, count = 120) {
    const colors = ['#ff0055', '#ffd700', '#00f2fe', '#9b51e0', '#ff8da1', '#ffffff', '#00ff88'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 16 + 6;
      confettiParticles.push({
        x: x || confCanvas.width / 2,
        y: y || confCanvas.height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 16,
        opacity: 1,
        shape: Math.random() > 0.35 ? 'rect' : 'circle',
        decay: Math.random() * 0.01 + 0.006
      });
    }
  }

  window.triggerConfetti = createConfettiBurst;

  document.getElementById('launchConfettiBtn')?.addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    createConfettiBurst(rect.left + rect.width / 2, rect.top, 140);
    playCelebrationSound();
  });

  setTimeout(() => {
    createConfettiBurst(window.innerWidth * 0.3, window.innerHeight * 0.35, 80);
    createConfettiBurst(window.innerWidth * 0.7, window.innerHeight * 0.35, 80);
  }, 400);

  function animate() {
    confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);
    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > confCanvas.height + 20) {
        confettiParticles.splice(i, 1);
        continue;
      }

      confCtx.save();
      confCtx.globalAlpha = p.opacity;
      confCtx.translate(p.x, p.y);
      confCtx.rotate((p.rotation * Math.PI) / 180);
      confCtx.fillStyle = p.color;

      if (p.shape === 'circle') {
        confCtx.beginPath();
        confCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        confCtx.fill();
      } else {
        confCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      }
      confCtx.restore();
    }

    spkCtx.clearRect(0, 0, spkCanvas.width, spkCanvas.height);
    sparkleParticles.forEach((spk) => {
      spk.alpha += spk.speed * spk.direction;
      if (spk.alpha > 1) { spk.alpha = 1; spk.direction = -1; }
      else if (spk.alpha < 0.1) {
        spk.alpha = 0.1;
        spk.direction = 1;
        spk.x = Math.random() * spkCanvas.width;
        spk.y = Math.random() * spkCanvas.height;
      }

      spkCtx.save();
      spkCtx.globalAlpha = spk.alpha;
      spkCtx.fillStyle = '#ffd700';
      spkCtx.shadowColor = '#fff';
      spkCtx.shadowBlur = 12;
      spkCtx.beginPath();
      spkCtx.arc(spk.x, spk.y, spk.radius, 0, Math.PI * 2);
      spkCtx.fill();
      spkCtx.restore();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================
   FLOATING BALLOONS GENERATOR
   ========================================================== */
function initBalloons() {
  const container = document.getElementById('balloonContainer');
  const colors = ['#ff0055', '#ffd700', '#00f2fe', '#9b51e0', '#ff8da1', '#00ff88', '#ff9ff3', '#feca57'];

  function spawnBalloon() {
    if (document.querySelectorAll('.balloon').length > 15) return;
    const b = document.createElement('div');
    b.className = 'balloon';
    const color = colors[Math.floor(Math.random() * colors.length)];
    b.style.backgroundColor = color;
    b.style.color = color;
    b.style.left = `${Math.random() * 90 + 5}%`;
    b.style.animationDuration = `${Math.random() * 6 + 10}s`;

    b.addEventListener('click', () => {
      const rect = b.getBoundingClientRect();
      window.triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);
      playPopSound();
      b.remove();
    });

    container.appendChild(b);
    setTimeout(() => b.remove(), 16000);
  }

  for (let i = 0; i < 6; i++) {
    setTimeout(spawnBalloon, i * 700);
  }
  setInterval(spawnBalloon, 2200);
}

/* ==========================================================
   COUNTDOWN TO BIRTHDAY (25 AUGUST 2026)
   ========================================================== */
function initCountdown() {
  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMinutes = document.getElementById('cdMinutes');
  const cdSeconds = document.getElementById('cdSeconds');
  const countdownTimer = document.getElementById('countdownTimer');
  const countdownHeading = document.getElementById('countdownHeading');

  const birthdayDate = new Date('2026-08-25T00:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance <= 0) {
      countdownHeading.textContent = "🎉 আজ রইসার জন্মদিন! শুভ জন্মদিন রইসা! 🎉";
      countdownTimer.innerHTML = `<div class="celebration-now">🎂 Happy Birthday Raisa! May all your dreams shine bright! 💖✨</div>`;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    cdDays.textContent = String(days).padStart(2, '0');
    cdHours.textContent = String(hours).padStart(2, '0');
    cdMinutes.textContent = String(minutes).padStart(2, '0');
    cdSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* ==========================================================
   COUNTDOWN TO MIDNIGHT 12:00 AM REVEAL
   ========================================================== */
function initMidnightCountdown() {
  const clockEl = document.getElementById('midnightClock');
  if (!clockEl) return;

  function updateMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    let diff = midnight.getTime() - now.getTime();
    if (diff < 0) diff = 0;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    clockEl.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  }

  updateMidnight();
  setInterval(updateMidnight, 1000);
}

/* ==========================================================
   FULLSCREEN GRAND CINEMA VIDEO STORY (BEAT-SYNCED TO SONG)
   ========================================================== */
function initCinemaExperience() {
  const cinemaWrapper = document.getElementById('cinemaWrapper');
  const cinemaExitBtn = document.getElementById('cinemaExitBtn');
  const cinemaFsToggleBtn = document.getElementById('cinemaFsToggleBtn');
  const reopenCinemaBtn = document.getElementById('reopenCinemaBtn');
  const cinemaBgImg = document.getElementById('cinemaBgImg');
  const cinemaSlideA = document.getElementById('cinemaSlideA');
  const cinemaSlideB = document.getElementById('cinemaSlideB');
  const cinemaProgress = document.getElementById('cinemaProgress');
  const cinemaCounter = document.getElementById('cinemaCounter');
  const cinemaCaptionTitle = document.getElementById('cinemaCaptionTitle');
  const cinemaCaptionSub = document.getElementById('cinemaCaptionSub');
  const cinemaPlayBtn = document.getElementById('cinemaPlayBtn');
  const cinemaPrevBtn = document.getElementById('cinemaPrevBtn');
  const cinemaNextBtn = document.getElementById('cinemaNextBtn');
  const cinemaParticles = document.getElementById('cinemaParticles');

  let cinemaIndex = 0;
  let isCinemaPlaying = true;
  let cinemaTimer = null;
  let activeSlide = 'A';
  // Beat-synced transition duration: 4000ms (~8 bars at 120 BPM)
  const cinemaDuration = 4000;

  const bengaliCaptions = [
    { title: "✨ রইসার মিষ্টি হাসির অ্যালবাম 💖", sub: "তোমার প্রতিটি দিন ভরে উঠুক সফলতায় ও আনন্দে!" },
    { title: "📚 একনিষ্ঠ শিক্ষার্থী ও বইপ্রেমী 🌸", sub: "তোমার অধ্যবসায় ও বই পড়ার ভালোবাসা সত্যিই প্রশংসনীয়।" },
    { title: "🌟 উজ্জ্বল নক্ষত্রের মতো আলো ছড়াও ✨", sub: "তোমার স্নিগ্ধ ব্যক্তিত্ব সবাইকে মুগ্ধ করে রাখে।" },
    { title: "📖 জ্ঞানের আলোয় ভরে উঠুক জীবন 💫", sub: "পড়াশোনায় তোমার একাগ্রতা তোমাকে অনেক দূর এগিয়ে নেবে।" },
    { title: "🎂 শুভ জন্মদিন রইসা! 🎉", sub: "তোমার সব স্বপ্ন আর প্রার্থনাগুলো পূর্ণ হোক!" },
    { title: "🎁 একটি ছোট্ট রহস্য অপেক্ষা করছে... 🤫", sub: "রাত ১২:০০ টায় জানতে পারবে কে এই শুভেচ্ছা জানিয়েছে!" }
  ];

  const transitionPairs = [
    { enter: 'enter-vortex-zoom', exit: 'exit-blackhole-swirl' },
    { enter: 'enter-3d-cube-fold', exit: 'exit-3d-cube-roll' },
    { enter: 'enter-hyperspace-snap', exit: 'exit-hyper-zoom-fly' },
    { enter: 'enter-heart-lens-burst', exit: 'exit-heart-shatter' },
    { enter: 'enter-cyber-hologram', exit: 'exit-glitch-disintegrate' }
  ];

  const uniquePhotoStyles = [
    'fx-photo-01', 'fx-photo-02', 'fx-photo-03', 'fx-photo-04',
    'fx-photo-05', 'fx-photo-06', 'fx-photo-07', 'fx-photo-08',
    'fx-photo-09', 'fx-photo-10', 'fx-photo-11', 'fx-photo-12',
    'fx-photo-13', 'fx-photo-14', 'fx-photo-15', 'fx-photo-16',
    'fx-photo-17', 'fx-photo-18', 'fx-photo-19', 'fx-photo-20',
    'fx-photo-21', 'fx-photo-22', 'fx-photo-23', 'fx-photo-24',
    'fx-photo-25', 'fx-photo-26', 'fx-photo-27', 'fx-photo-28',
    'fx-photo-29', 'fx-photo-30', 'fx-photo-31', 'fx-photo-32'
  ];

  const allAnimClasses = [
    ...uniquePhotoStyles,
    'enter-vortex-zoom', 'exit-blackhole-swirl',
    'enter-3d-cube-fold', 'exit-3d-cube-roll',
    'enter-hyperspace-snap', 'exit-hyper-zoom-fly',
    'enter-heart-lens-burst', 'exit-heart-shatter',
    'enter-cyber-hologram', 'exit-glitch-disintegrate',
    'fx-3d-flip', 'fx-neon-bloom', 'fx-vortex-spin', 'fx-heart-pulse', 'fx-glitch-zoom'
  ];

  const flashEl = document.getElementById('transitionFlash');
  const shockwaveEl = document.getElementById('transitionShockwave');
  const mgLaserBlade = document.getElementById('mgLaserBlade');
  const mgShutterGrid = document.getElementById('mgShutterGrid');
  const mgBrushWipe = document.getElementById('mgBrushWipe');
  const mgCanvas = document.getElementById('motionGraphicsCanvas');
  let mgCtx = mgCanvas?.getContext('2d');

  // Initialize Shutter Grid Bars
  if (mgShutterGrid && mgShutterGrid.children.length === 0) {
    for (let i = 0; i < 8; i++) {
      const bar = document.createElement('div');
      bar.className = 'mg-shutter-bar';
      bar.style.animationDelay = `${i * 0.04}s`;
      mgShutterGrid.appendChild(bar);
    }
  }

  function resizeMgCanvas() {
    if (!mgCanvas) return;
    mgCanvas.width = window.innerWidth;
    mgCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeMgCanvas);
  resizeMgCanvas();

  // Canvas Vector Motion Graphics Transition Animator
  function runCanvasMotionGraphic(type) {
    if (!mgCtx || !mgCanvas) return;
    const w = mgCanvas.width;
    const h = mgCanvas.height;
    let progress = 0;
    const colors = ['#00f2fe', '#ff0055', '#ffd700', '#9b51e0', '#00ff88', '#ffffff'];

    function drawFrame() {
      progress += 0.045;
      mgCtx.clearRect(0, 0, w, h);

      if (type === 0) {
        // Laser Slash Streak with Spark Shower
        const x = progress * w * 1.5 - w * 0.25;
        mgCtx.save();
        mgCtx.strokeStyle = '#ffffff';
        mgCtx.lineWidth = 14;
        mgCtx.shadowColor = '#00f2fe';
        mgCtx.shadowBlur = 35;
        mgCtx.beginPath();
        mgCtx.moveTo(x - 200, 0);
        mgCtx.lineTo(x + 200, h);
        mgCtx.stroke();

        // Trailing sparks
        for (let i = 0; i < 15; i++) {
          const spkX = x + (Math.random() - 0.5) * 120;
          const spkY = Math.random() * h;
          mgCtx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          mgCtx.beginPath();
          mgCtx.arc(spkX, spkY, Math.random() * 4 + 2, 0, Math.PI * 2);
          mgCtx.fill();
        }
        mgCtx.restore();
      } else if (type === 1) {
        // Starburst Multi-Arm Iris Portal
        const cx = w / 2;
        const cy = h / 2;
        const r = progress * Math.max(w, h) * 0.85;
        mgCtx.save();
        mgCtx.translate(cx, cy);
        mgCtx.rotate(progress * Math.PI);
        const arms = 12;
        for (let i = 0; i < arms; i++) {
          const angle = (i * Math.PI * 2) / arms;
          mgCtx.fillStyle = colors[i % colors.length];
          mgCtx.globalAlpha = Math.max(0, 1 - progress);
          mgCtx.beginPath();
          mgCtx.moveTo(0, 0);
          mgCtx.arc(0, 0, r, angle, angle + Math.PI / arms);
          mgCtx.fill();
        }
        mgCtx.restore();
      } else if (type === 2) {
        // Concentric Expanding Neon Geometric Rings
        const cx = w / 2;
        const cy = h / 2;
        for (let ring = 0; ring < 4; ring++) {
          const rad = (progress * w * 0.7) - (ring * 60);
          if (rad > 0) {
            mgCtx.save();
            mgCtx.strokeStyle = colors[ring % colors.length];
            mgCtx.lineWidth = 8;
            mgCtx.globalAlpha = Math.max(0, 1 - progress * 1.1);
            mgCtx.shadowColor = colors[ring % colors.length];
            mgCtx.shadowBlur = 25;
            mgCtx.beginPath();
            mgCtx.arc(cx, cy, rad, 0, Math.PI * 2);
            mgCtx.stroke();
            mgCtx.restore();
          }
        }
      } else {
        // Floating Stardust Streamers
        const numStreamers = 20;
        mgCtx.save();
        mgCtx.globalAlpha = Math.max(0, 1 - progress);
        for (let i = 0; i < numStreamers; i++) {
          const stX = (i / numStreamers) * w;
          const stY = (progress * h * 1.4) - (i * 15);
          mgCtx.fillStyle = colors[i % colors.length];
          mgCtx.shadowColor = '#ffd700';
          mgCtx.shadowBlur = 18;
          mgCtx.beginPath();
          mgCtx.arc(stX, stY, Math.random() * 5 + 3, 0, Math.PI * 2);
          mgCtx.fill();
        }
        mgCtx.restore();
      }

      if (progress < 1) {
        requestAnimationFrame(drawFrame);
      } else {
        mgCtx.clearRect(0, 0, w, h);
      }
    }
    drawFrame();
  }

  function triggerTransitionVFX(index = 0) {
    const mgType = index % 4;

    // Trigger Motion Graphics Canvas Vector
    runCanvasMotionGraphic(mgType);

    // Trigger DOM Motion Graphics Wipe Elements
    if (mgType === 0 && mgLaserBlade) {
      mgLaserBlade.classList.remove('active');
      void mgLaserBlade.offsetWidth;
      mgLaserBlade.classList.add('active');
    } else if (mgType === 1 && mgShutterGrid) {
      mgShutterGrid.classList.remove('active');
      void mgShutterGrid.offsetWidth;
      mgShutterGrid.classList.add('active');
      setTimeout(() => mgShutterGrid.classList.remove('active'), 650);
    } else if (mgBrushWipe) {
      mgBrushWipe.classList.remove('active');
      void mgBrushWipe.offsetWidth;
      mgBrushWipe.classList.add('active');
    }

    // Trigger Flash & Shockwave
    if (flashEl) {
      flashEl.classList.remove('burst');
      void flashEl.offsetWidth;
      flashEl.classList.add('burst');
    }
    if (shockwaveEl) {
      shockwaveEl.classList.remove('burst');
      void shockwaveEl.offsetWidth;
      shockwaveEl.classList.add('burst');
    }
    cinemaWrapper.classList.add('screen-shake-fx');
    setTimeout(() => cinemaWrapper.classList.remove('screen-shake-fx'), 400);
  }

  function spawnCinemaParticles() {
    if (!cinemaParticles || !isCinemaPlaying) return;
    const symbols = ['💖', '✨', '🌸', '⭐', '💕', '💫', '📚', '🎁'];
    const p = document.createElement('div');
    p.className = 'cinema-particle-item';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = `${Math.random() * 90 + 5}%`;
    p.style.fontSize = `${Math.random() * 16 + 20}px`;
    p.style.animationDuration = `${Math.random() * 2 + 3.5}s`;
    cinemaParticles.appendChild(p);
    setTimeout(() => p.remove(), 5000);
  }

  function resetCinemaProgress() {
    if (!cinemaProgress) return;
    cinemaProgress.classList.remove('animating');
    cinemaProgress.style.width = '0%';
    void cinemaProgress.offsetWidth;
    if (isCinemaPlaying) {
      cinemaProgress.classList.add('animating');
    }
  }

  function updateCinemaSlide(index) {
    cinemaIndex = (index + photoFiles.length) % photoFiles.length;
    const imgSrc = `images/${photoFiles[cinemaIndex]}`;
    const pair = transitionPairs[cinemaIndex % transitionPairs.length];
    const caption = bengaliCaptions[cinemaIndex % bengaliCaptions.length];

    cinemaBgImg.src = imgSrc;

    const currentSlideEl = activeSlide === 'A' ? cinemaSlideA : cinemaSlideB;
    const nextSlideEl = activeSlide === 'A' ? cinemaSlideB : cinemaSlideA;
    activeSlide = activeSlide === 'A' ? 'B' : 'A';

    // Outgoing image exit animation
    allAnimClasses.forEach(c => currentSlideEl.classList.remove(c));
    currentSlideEl.classList.add(pair.exit);

    // Incoming image enter animation with completely UNIQUE style for each photo
    const imgEl = nextSlideEl.querySelector('img');
    imgEl.src = imgSrc;

    const uniqueStyle = uniquePhotoStyles[cinemaIndex % uniquePhotoStyles.length];
    allAnimClasses.forEach(c => nextSlideEl.classList.remove(c));
    nextSlideEl.classList.add(pair.enter);
    nextSlideEl.classList.add(uniqueStyle);

    nextSlideEl.classList.add('active');

    setTimeout(() => {
      currentSlideEl.classList.remove('active');
    }, 750);

    cinemaCounter.textContent = `ছবি ${cinemaIndex + 1} / ${photoFiles.length}`;
    cinemaCaptionTitle.textContent = caption.title;
    cinemaCaptionSub.textContent = caption.sub;

    triggerTransitionVFX(cinemaIndex);
    resetCinemaProgress();
    for (let i = 0; i < 4; i++) {
      setTimeout(spawnCinemaParticles, i * 400);
    }
  }

  function startCinemaPlayback() {
    isCinemaPlaying = true;
    cinemaPlayBtn.textContent = '⏸';
    resetCinemaProgress();

    if (cinemaTimer) clearInterval(cinemaTimer);
    cinemaTimer = setInterval(() => {
      if (cinemaIndex + 1 >= photoFiles.length) {
        closeCinema();
        return;
      }
      updateCinemaSlide(cinemaIndex + 1);
    }, cinemaDuration);
  }

  function pauseCinemaPlayback() {
    isCinemaPlaying = false;
    cinemaPlayBtn.textContent = '▶';
    if (cinemaProgress) cinemaProgress.classList.remove('animating');
    if (cinemaTimer) clearInterval(cinemaTimer);
  }

  function openCinema() {
    cinemaWrapper.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    updateCinemaSlide(0);
    startCinemaPlayback();
  }

  function closeCinema() {
    pauseCinemaPlayback();
    cinemaWrapper.classList.add('hidden');
    document.body.style.overflow = 'auto';
    window.triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.35, 100);
  }

  openCinema();

  cinemaExitBtn.addEventListener('click', closeCinema);
  if (reopenCinemaBtn) {
    reopenCinemaBtn.addEventListener('click', openCinema);
  }

  cinemaFsToggleBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      if (cinemaWrapper.requestFullscreen) cinemaWrapper.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    }
  });

  cinemaPlayBtn.addEventListener('click', () => {
    if (isCinemaPlaying) pauseCinemaPlayback(); else startCinemaPlayback();
  });

  cinemaPrevBtn.addEventListener('click', () => {
    updateCinemaSlide(cinemaIndex - 1);
    if (isCinemaPlaying) startCinemaPlayback();
  });

  cinemaNextBtn.addEventListener('click', () => {
    updateCinemaSlide(cinemaIndex + 1);
    if (isCinemaPlaying) startCinemaPlayback();
  });

  // Mobile Touch Swipe Gesture for Next / Previous Photo
  let touchStartX = 0;
  let touchEndX = 0;
  cinemaWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  cinemaWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeDist = touchEndX - touchStartX;
    if (Math.abs(swipeDist) > 45) {
      if (swipeDist < 0) {
        // Swiped Left -> Next Photo
        updateCinemaSlide(cinemaIndex + 1);
      } else {
        // Swiped Right -> Previous Photo
        updateCinemaSlide(cinemaIndex - 1);
      }
      if (isCinemaPlaying) startCinemaPlayback();
    }
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    if (cinemaWrapper.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeCinema();
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      if (isCinemaPlaying) pauseCinemaPlayback(); else startCinemaPlayback();
    }
    if (e.key === 'ArrowRight') updateCinemaSlide(cinemaIndex + 1);
    if (e.key === 'ArrowLeft') updateCinemaSlide(cinemaIndex - 1);
  });
}

/* ==========================================================
   PHOTO GALLERY & SLIDESHOW SECTION
   ========================================================== */
function initGalleryAndSlideshow() {
  let currentIndex = 0;
  let autoplayTimer = null;
  let isAutoplay = true;
  const slideDuration = 4000;

  const mainSlideImg = document.getElementById('mainSlideImg');
  const bgSlideBackdrop = document.getElementById('bgSlideBackdrop');
  const slideCounter = document.getElementById('slideCounter');
  const prevSlideBtn = document.getElementById('prevSlideBtn');
  const nextSlideBtn = document.getElementById('nextSlideBtn');
  const toggleAutoplayBtn = document.getElementById('toggleAutoplayBtn');
  const randomSlideBtn = document.getElementById('randomSlideBtn');
  const thumbnailStrip = document.getElementById('thumbnailStrip');
  const zoomCurrentBtn = document.getElementById('zoomCurrentBtn');
  const slideProgressBar = document.getElementById('slideProgressBar');

  const slideshowView = document.getElementById('slideshowView');
  const gridView = document.getElementById('gridView');
  const photoGrid = document.getElementById('photoGrid');
  const tabBtns = document.querySelectorAll('.tab-btn');

  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  photoFiles.forEach((file, index) => {
    const thumb = document.createElement('div');
    thumb.className = `thumb-item ${index === 0 ? 'active' : ''}`;
    thumb.innerHTML = `<img src="images/${file}" alt="Thumb ${index + 1}" loading="lazy">`;
    thumb.addEventListener('click', () => goToSlide(index));
    thumbnailStrip.appendChild(thumb);

    const card = document.createElement('div');
    card.className = 'grid-card';
    card.innerHTML = `
      <img src="images/${file}" alt="Memory ${index + 1}" loading="lazy">
      <div class="grid-overlay">
        <span>ছবি #${index + 1}</span>
        <span class="grid-zoom-icon">🔍</span>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(index));
    photoGrid.appendChild(card);
  });

  function resetProgressBar() {
    if (!slideProgressBar) return;
    slideProgressBar.classList.remove('animate');
    slideProgressBar.style.width = '0%';
    void slideProgressBar.offsetWidth;
    if (isAutoplay) slideProgressBar.classList.add('animate');
  }

  function goToSlide(index) {
    currentIndex = (index + photoFiles.length) % photoFiles.length;
    mainSlideImg.style.opacity = '0.3';
    bgSlideBackdrop.style.opacity = '0.3';

    setTimeout(() => {
      const imgSrc = `images/${photoFiles[currentIndex]}`;
      mainSlideImg.src = imgSrc;
      bgSlideBackdrop.src = imgSrc;
      slideCounter.textContent = `${currentIndex + 1} / ${photoFiles.length}`;

      mainSlideImg.style.opacity = '1';
      bgSlideBackdrop.style.opacity = '0.85';

      const thumbs = thumbnailStrip.querySelectorAll('.thumb-item');
      thumbs.forEach((t, i) => t.classList.toggle('active', i === currentIndex));
      const activeThumb = thumbs[currentIndex];
      if (activeThumb && thumbnailStrip) {
        thumbnailStrip.scrollLeft = activeThumb.offsetLeft - (thumbnailStrip.clientWidth / 2) + (activeThumb.clientWidth / 2);
      }

      resetProgressBar();
    }, 200);
  }

  prevSlideBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextSlideBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
  randomSlideBtn.addEventListener('click', () => {
    goToSlide(Math.floor(Math.random() * photoFiles.length));
    window.triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.5, 50);
  });

  function startAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    isAutoplay = true;
    toggleAutoplayBtn.textContent = '⏸ অটো প্লে: চালু';
    resetProgressBar();
    autoplayTimer = setInterval(() => goToSlide(currentIndex + 1), slideDuration);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    isAutoplay = false;
    toggleAutoplayBtn.textContent = '▶ অটো প্লে: বন্ধ';
    if (slideProgressBar) slideProgressBar.classList.remove('animate');
  }

  toggleAutoplayBtn.addEventListener('click', () => {
    if (isAutoplay) stopAutoplay(); else startAutoplay();
  });

  startAutoplay();

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');
      if (view === 'slideshow') {
        slideshowView.classList.remove('hidden');
        gridView.classList.add('hidden');
      } else {
        slideshowView.classList.add('hidden');
        gridView.classList.remove('hidden');
      }
    });
  });

  let lightboxIndex = 0;
  function openLightbox(index) {
    lightboxIndex = index;
    lightboxImg.src = `images/${photoFiles[lightboxIndex]}`;
    lightboxCounter.textContent = `ছবি ${lightboxIndex + 1} / ${photoFiles.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  zoomCurrentBtn.addEventListener('click', () => openLightbox(currentIndex));
  lightboxCloseBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  lightboxPrevBtn.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + photoFiles.length) % photoFiles.length;
    lightboxImg.src = `images/${photoFiles[lightboxIndex]}`;
    lightboxCounter.textContent = `ছবি ${lightboxIndex + 1} / ${photoFiles.length}`;
  });

  lightboxNextBtn.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % photoFiles.length;
    lightboxImg.src = `images/${photoFiles[lightboxIndex]}`;
    lightboxCounter.textContent = `ছবি ${lightboxIndex + 1} / ${photoFiles.length}`;
  });
}

/* ==========================================================
   CAKE & CANDLES
   ========================================================== */
function initCake() {
  const blowBtn = document.getElementById('blowCandlesBtn');
  const blowBtnText = document.getElementById('blowBtnText');
  const wishMsg = document.getElementById('wishRevealMsg');
  const flames = document.querySelectorAll('.flame');
  let extinguished = false;

  function blowOutCandles() {
    if (extinguished) {
      flames.forEach(f => f.classList.remove('extinguished'));
      blowBtnText.textContent = '🌬️ মোমবাতি ফুঁ দিয়ে নিভাও!';
      wishMsg.classList.remove('show');
      extinguished = false;
      return;
    }

    flames.forEach(f => f.classList.add('extinguished'));
    blowBtnText.textContent = '🔥 মোমবাতি আবার জ্বালাও!';
    wishMsg.classList.add('show');
    extinguished = true;

    window.triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.45, 160);
    playCelebrationSound();
  }

  blowBtn.addEventListener('click', blowOutCandles);
  flames.forEach(f => f.addEventListener('click', blowOutCandles));
}

/* ==========================================================
   SPECIAL BIRTHDAY LETTER ENVELOPE (NO FORCED AUTO-SCROLL)
   ========================================================== */
function initEnvelope() {
  const envelope = document.getElementById('envelope');
  const scrollLetterBtn = document.getElementById('scrollLetterBtn');
  const openFullReaderBtn = document.getElementById('openFullReaderBtn');
  const closeLetterBtn = document.getElementById('closeLetterBtn');
  
  const letterReaderModal = document.getElementById('letterReaderModal');
  const readerCloseBtn = document.getElementById('readerCloseBtn');
  const readerBottomCloseBtn = document.getElementById('readerBottomCloseBtn');
  const readerBackdrop = document.getElementById('readerBackdrop');

  function openReaderModal() {
    if (letterReaderModal) {
      letterReaderModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      window.triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 80);
    }
  }

  function closeReaderModal() {
    if (letterReaderModal) {
      letterReaderModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  envelope.addEventListener('click', (e) => {
    // If clicking on action buttons or reading inside paper, don't toggle envelope
    if (e.target.closest('.letter-action-bar') || e.target.closest('#openFullReaderBtn') || e.target.closest('#closeLetterBtn')) {
      return;
    }
    if (e.target.closest('.letter-paper') && envelope.classList.contains('open')) {
      return;
    }
    const wasOpen = envelope.classList.contains('open');
    envelope.classList.toggle('open');
    if (!wasOpen) {
      const rect = envelope.getBoundingClientRect();
      window.triggerConfetti(rect.left + rect.width / 2, rect.top + 50, 110);
      playCelebrationSound();
    }
  });

  openFullReaderBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    openReaderModal();
  });

  closeLetterBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    envelope.classList.remove('open');
  });

  readerCloseBtn?.addEventListener('click', closeReaderModal);
  readerBottomCloseBtn?.addEventListener('click', closeReaderModal);
  scrollLetterBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openReaderModal();
  });
}

/* ==========================================================
   BENGALI BIRTHDAY WISH GENERATOR
   ========================================================== */
const bengaliWishes = [
  "✨ রইসার জীবনের প্রতিটি মুহূর্ত ভরে উঠুক সীমাহীন শান্তি, আনন্দ আর পবিত্র ভালোবাসায়!",
  "🌸 তুমি একজন অনন্য বইপ্রেমী ও মেধাবী মানুষ। তোমার মেধা আর প্রজ্ঞা সবসময় দ্যুতি ছড়াক!",
  "💖 তোমার মনের সকল না-বলা স্বপ্ন আর উচ্চাকাঙ্ক্ষাগুলো সুন্দরভাবে বাস্তবে রূপ নিক!",
  "💫 পড়ার টেবিলে তোমার প্রতিটি অধ্যাবসায় এনে দিক সর্বোচ্চ গৌরব আর সফলতা!",
  "🎂 চমৎকার মনের অধিকারী রইসাকে জানাই শুভ জন্মদিনের অফুরন্ত শুভেচ্ছা ও দোয়া!",
  "🌟 জীবনে চলার পথে সবসময় সত্য, ন্যায় আর নির্মল আনন্দের সঙ্গী হও!"
];

function initWishGenerator() {
  const generateWishBtn = document.getElementById('generateWishBtn');
  const wishText = document.getElementById('generatedWishText');

  generateWishBtn?.addEventListener('click', () => {
    const randomWish = bengaliWishes[Math.floor(Math.random() * bengaliWishes.length)];
    wishText.style.opacity = '0';
    setTimeout(() => {
      wishText.textContent = randomWish;
      wishText.style.opacity = '1';
      window.triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.8, 55);
    }, 250);
  });
}
