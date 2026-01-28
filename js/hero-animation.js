// ==========================
// HERO PARTICLE BACKGROUND
// ==========================
const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");

// Function to resize the canvas properly
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "fixed"; // Always fixed
  canvas.style.top = "0"; // Top of the page
  canvas.style.left = "0"; // Left edge
  canvas.style.zIndex = "-1"; // Behind everything
  canvas.style.pointerEvents = "none"; // Clicks pass through
}

// Call on load and on resize
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Particle setup
const particles = [];
const particleCount = 60;

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    )
      this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(24,224,214,0.7)";
    ctx.fill();
  }
}

for (let i = 0; i < particleCount; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();
