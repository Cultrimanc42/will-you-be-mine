const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const buttonArea = document.getElementById("buttonArea");

// Function to move the No button randomly within the button area
function moveNoButton() {
  const maxX = buttonArea.offsetWidth - noBtn.offsetWidth - 20;
  const maxY = buttonArea.offsetHeight - noBtn.offsetHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Mouse hover - button runs away
noBtn.addEventListener("mouseenter", moveNoButton);

// Touch support for mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Also move on click attempt
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// YES button - the winning click
yesBtn.addEventListener("click", () => {
  message.innerText = "You just made me the happiest person ever 💖";
  celebrate();
  
  // Send the answer to the backend
  fetch("/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ choice: "YES" })
  });
});

// Celebration effects
function celebrate() {
  // Change background color
  document.body.style.background = "linear-gradient(135deg, #ff4d6d, #ff1744)";
  
  // Create confetti
  createConfetti();
  
  // Disable buttons after yes
  yesBtn.disabled = true;
  noBtn.disabled = true;
}

// Confetti animation
function createConfetti() {
  const confettiCount = 150;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.borderRadius = "50%";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.opacity = "1";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";
    
    document.body.appendChild(confetti);
    
    // Animate confetti falling
    const duration = Math.random() * 3 + 2; // 2-5 seconds
    const xMove = (Math.random() - 0.5) * 200;
    
    confetti.animate(
      [
        {
          transform: "translateY(0) translateX(0) rotate(0deg)",
          opacity: 1
        },
        {
          transform: `translateY(${window.innerHeight + 20}px) translateX(${xMove}px) rotate(360deg)`,
          opacity: 0
        }
      ],
      {
        duration: duration * 1000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }
    );
    
    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}

// Helper function to get random colors for confetti
function getRandomColor() {
  const colors = ["#ff4d6d", "#ff1744", "#ff69b4", "#ffb3c1", "#ff6b9d", "#ffc0cb"];
  return colors[Math.floor(Math.random() * colors.length)];
}
