var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate"), document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow"), document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow")
}

function playpause() {
    !1 == document.getElementById("switchforsound").checked ? audio.pause() : audio.play()
}

function visualmode() {
  const body = document.body;

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }

  document.querySelectorAll(".needtobeinvert").forEach(function (e) {
    e.classList.toggle("invertapplied");
  });

  updateSpaceBgColor();
}

window.addEventListener("load", function() {
    loader.style.display = "none", document.querySelector(".hey").classList.add("popup")
});
let emptyArea = document.getElementById("emptyarea"),
    mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"), document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"), document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"), document.getElementById("burger-bar3").classList.toggle("hamburger-animation3")
}

function hidemenubyli() {
    document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"), document.getElementById("burger-bar1").classList.remove("hamburger-animation1"), document.getElementById("burger-bar2").classList.remove("hamburger-animation2"), document.getElementById("burger-bar3").classList.remove("hamburger-animation3")
}
const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
    mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");
window.addEventListener("scroll", () => {
    let e = "";
    sections.forEach(t => {
        let o = t.offsetTop;
        t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"))
    }), mobilenavLi.forEach(t => {
        t.classList.remove("activeThismobiletab"), t.classList.contains(e) && t.classList.add("activeThismobiletab")
    }), navLi.forEach(t => {
        t.classList.remove("activeThistab"), t.classList.contains(e) && t.classList.add("activeThistab")
    })
}), console.log("%c Designed and Developed by Aysuh Tyagi ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");
let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? mybutton.style.display = "block" : mybutton.style.display = "none"
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}
window.onscroll = function() {
    scrollFunction()
}, document.addEventListener("contextmenu", function(e) {
    "IMG" === e.target.nodeName && e.preventDefault()
}, !1);
let Pupils = document.getElementsByClassName("footer-pupil"),
    pupilsArr = Array.from(Pupils),
    pupilStartPoint = -10,
    pupilRangeX = 20,
    pupilRangeY = 15,
    mouseXStartPoint = 0,
    mouseXEndPoint = window.innerWidth,
    currentXPosition = 0,
    fracXValue = 0,
    mouseYEndPoint = window.innerHeight,
    currentYPosition = 0,
    fracYValue = 0,
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
const mouseMove = e => {
        fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange, fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;
        let t = pupilStartPoint + fracXValue * pupilRangeX,
            o = pupilStartPoint + fracYValue * pupilRangeY;
        pupilsArr.forEach(e => {
            e.style.transform = `translate(${t}px, ${o}px)`
        })
    },
    windowResize = e => {
        mouseXEndPoint = window.innerWidth, mouseYEndPoint = window.innerHeight, mouseXRange = mouseXEndPoint - mouseXStartPoint
    };
window.addEventListener("mousemove", mouseMove), window.addEventListener("resize", windowResize);

window.addEventListener('DOMContentLoaded', function() {

  const snakeGame = document.getElementById('snake-game-container');
const dotGame = document.getElementById('catch-the-dot-game');
const openSnakeBtn = document.getElementById('open-snake-game');
const openDotBtn = document.getElementById('open-dot-game');
const closeSnakeBtn = document.getElementById('close-snake-game');
const closeDotBtn = document.getElementById('close-dot-game');

  // Mini Snake Game
  const snakeCanvas = document.getElementById('snake-canvas');
  const snakeScoreDiv = document.getElementById('snake-score');
  if (snakeCanvas && snakeScoreDiv) {
    const ctx = snakeCanvas.getContext('2d');
    const grid = 12;
    let count = 0;
    let snake = { x: 120, y: 120, cells: [], maxCells: 4, dx: grid, dy: 0 };
    let apple = { x: 0, y: 0 };
    let score = 0;

    function randomApple() {
      apple.x = Math.floor(Math.random() * (snakeCanvas.width / grid)) * grid;
      apple.y = Math.floor(Math.random() * (snakeCanvas.height / grid)) * grid;
    }
    randomApple();

    function loop() {
      requestAnimationFrame(loop);
      if (++count < 10) return;
      count = 0;
      ctx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);

      snake.x += snake.dx;
      snake.y += snake.dy;

      if (snake.x < 0) snake.x = snakeCanvas.width - grid;
      if (snake.x >= snakeCanvas.width) snake.x = 0;
      if (snake.y < 0) snake.y = snakeCanvas.height - grid;
      if (snake.y >= snakeCanvas.height) snake.y = 0;

      snake.cells.unshift({ x: snake.x, y: snake.y });
      if (snake.cells.length > snake.maxCells) snake.cells.pop();

      // Draw apple
      ctx.fillStyle = "#6bc5f8";
      ctx.beginPath();
      ctx.arc(apple.x + grid/2, apple.y + grid/2, grid/2-1, 0, Math.PI*2);
      ctx.fill();

      // Draw snake
      ctx.fillStyle = "#8000ff";
      snake.cells.forEach((cell, idx) => {
        ctx.beginPath();
        ctx.arc(cell.x + grid/2, cell.y + grid/2, grid/2-1, 0, Math.PI*2);
        ctx.fill();

        // Snake eats apple
        if (cell.x === apple.x && cell.y === apple.y) {
          snake.maxCells++;
          score++;
          snakeScoreDiv.textContent = "Score: " + score;
          randomApple();
        }

        // Check collision with self
        for (let i = idx + 1; i < snake.cells.length; i++) {
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            // Reset game
            snake.x = 120;
            snake.y = 120;
            snake.cells = [];
            snake.maxCells = 4;
            snake.dx = grid;
            snake.dy = 0;
            score = 0;
            snakeScoreDiv.textContent = "Score: 0";
            randomApple();
          }
        }
      });
    }
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft' && snake.dx === 0) {
        snake.dx = -grid; snake.dy = 0;
      } else if (e.key === 'ArrowUp' && snake.dy === 0) {
        snake.dy = -grid; snake.dx = 0;
      } else if (e.key === 'ArrowRight' && snake.dx === 0) {
        snake.dx = grid; snake.dy = 0;
      } else if (e.key === 'ArrowDown' && snake.dy === 0) {
        snake.dy = grid; snake.dx = 0;
      }
    });
    loop();
  }

  if (closeDotBtn && dotGame) {
    closeDotBtn.addEventListener('click', () => {
      dotGame.style.display = 'none';
    });
  }

  if (closeSnakeBtn && snakeGame) {
    closeSnakeBtn.addEventListener('click', () => {
      snakeGame.style.display = 'none';
    });
  }
  // Footer particles
  const footerCanvas = document.getElementById('footer-particles');
  if (footerCanvas) {
    function resizeFooterCanvas() {
      footerCanvas.width = footerCanvas.offsetWidth;
      footerCanvas.height = footerCanvas.offsetHeight;
    }
    resizeFooterCanvas();
    window.addEventListener('resize', resizeFooterCanvas);

    const fctx = footerCanvas.getContext('2d');
    let fParticles = [];
    for (let i = 0; i < 30; i++) {
      fParticles.push({
        x: Math.random() * footerCanvas.width,
        y: Math.random() * footerCanvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: `rgba(128,0,255,${Math.random() * 0.5 + 0.2})`
      });
    }
    function animateFooterParticles() {
      fctx.clearRect(0, 0, footerCanvas.width, footerCanvas.height);
      for (let p of fParticles) {
        fctx.beginPath();
        fctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        fctx.fillStyle = p.color;
        fctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > footerCanvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > footerCanvas.height) p.dy *= -1;
      }
      requestAnimationFrame(animateFooterParticles);
    }
    animateFooterParticles();
  }


  // Hide games, show open buttons at start
  if (snakeGame) snakeGame.style.display = 'none';
  if (dotGame) dotGame.style.display = 'none';
  if (openSnakeBtn) openSnakeBtn.style.display = 'block';
  if (openDotBtn) openDotBtn.style.display = 'block';

  // Open Snake Game
  if (openSnakeBtn && snakeGame) {
    openSnakeBtn.addEventListener('click', () => {
      snakeGame.style.display = 'flex';
      openSnakeBtn.style.display = 'none';
    });
  }
  // Close Snake Game
  if (closeSnakeBtn && snakeGame && openSnakeBtn) {
    closeSnakeBtn.addEventListener('click', () => {
      snakeGame.style.display = 'none';
      openSnakeBtn.style.display = 'block';
    });
  }

  // Open Dot Game
  if (openDotBtn && dotGame) {
    openDotBtn.addEventListener('click', () => {
      dotGame.style.display = 'block';
      openDotBtn.style.display = 'none';
    });
  }
  // Close Dot Game
  if (closeDotBtn && dotGame && openDotBtn) {
    closeDotBtn.addEventListener('click', () => {
      dotGame.style.display = 'none';
      openDotBtn.style.display = 'block';
    });
  }
  const canvas = document.getElementById('space-bg');
  animate();
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth, h = window.innerHeight;
  let stars = [];

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }
  window.addEventListener('resize', resize);
  resize();

  // Create stars
  function createStars() {
    stars = [];
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.2,
        d: Math.random() * 0.8 + 0.2,
        tw: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.2 + 0.05
      });
    }
  }
  createStars();
  window.addEventListener('resize', createStars);

  // Animate stars
  function animate() {
  // Always get the latest background color from CSS variable
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--main-bg').trim() || "#0b0b1a";
  ctx.fillRect(0, 0, w, h);

  for (let s of stars) {
    // Twinkle
    let twinkle = Math.abs(Math.sin(s.tw += 0.02)) * 0.6 + 0.4;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r * twinkle, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${twinkle})`;
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 8 * twinkle;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Move star downward (space effect)
    s.y += s.speed;
    if (s.y > h) {
      s.x = Math.random() * w;
      s.y = 0;
    }
  }
  requestAnimationFrame(animate);
}
 animate();
});

function updateSpaceBgColor() {
  const canvas = document.getElementById('space-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  // Get computed background from CSS variable
  const bg = getComputedStyle(document.body).getPropertyValue('--main-bg').trim() || "#0b0b1a";
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const canvas = document.getElementById('particle-bg');const snakeGame = document.getElementById('snake-game-container');
const dotGame = document.getElementById('catch-the-dot-game');
const openSnakeBtn = document.getElementById('open-snake-game');
const openDotBtn = document.getElementById('open-dot-game');
const closeSnakeBtn = document.getElementById('close-snake-game');
const closeDotBtn = document.getElementById('close-dot-game');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticles() {
  particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: `rgba(128,0,255,${Math.random() * 0.5 + 0.2})`
    });
  }
}
ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--main-bg').trim() || "#0b0b1a";
ctx.fillRect(0, 0, w, h);
createParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', function(e) {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = `translate(${x*0.15}px,${y*0.15}px) scale(1.05)`;
  });
  btn.addEventListener('mouseleave', function() {
    btn.style.transform = '';
  });
});

// Add to main.js or a <script> tag
function confettiBurst(x, y) {
  for (let i = 0; i < 30; i++) {
    const conf = document.createElement('div');
    conf.className = 'confetti';
    conf.style.left = x + 'px';
    conf.style.top = y + 'px';
    conf.style.background = `hsl(${Math.random()*360},80%,60%)`;
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 1500);
  }
}
document.querySelectorAll('.letsTalkBtn').forEach(btn => {
  btn.addEventListener('click', e => {
    const rect = btn.getBoundingClientRect();
    confettiBurst(rect.left + rect.width/2, rect.top + rect.height/2);
  });
});

function getCurrentMode() {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const color = getCurrentMode() === "dark" ? "#ffffff" : "#000000"; // white in dark, black in light
    ctx.fillStyle = color;

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const observer = new MutationObserver(drawParticles);
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
