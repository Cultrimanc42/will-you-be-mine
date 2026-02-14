const correctPassword = "foreverus"; // CHANGE THIS

const text = "Out of all the timelines in the universe, I’m grateful I landed in the one where I get to love you. You make ordinary days magical and my heart feels safest with you.";
let index = 0;

// PASSWORD CHECK
function checkPassword() {
    const input = document.getElementById("passwordInput");
    const passwordScreen = document.getElementById("passwordScreen");
    const envelopeContainer = document.getElementById("envelopeContainer");
    const errorMessage = document.getElementById("errorMessage");

    // Trim whitespace and check password
    if (input.value.trim().toLowerCase() === correctPassword.toLowerCase()) {
        passwordScreen.style.display = "none";
        envelopeContainer.style.display = "flex";
    } else {
        errorMessage.innerText = "Wrong password! Try again 😢";
        errorMessage.style.color = "red";
        input.classList.add("shake");
        setTimeout(() => {
            input.classList.remove("shake");
        }, 400);
    }
}

// Add Enter key listener for password input
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById("passwordInput");
    if (passwordInput) {
        passwordInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                checkPassword();
            }
        });
    }
});

let currentFloor = 1;

// OPEN LETTER
function openLetter() {
    const envelopeContainer = document.getElementById("envelopeContainer");
    const mainContent = document.getElementById("mainContent");
    const bgMusic = document.getElementById("bgMusic");

    envelopeContainer.style.display = "none";
    mainContent.style.display = "block";

    // Play music
    bgMusic.volume = 0.5;
    bgMusic.play().catch(error => console.log("Music play failed:", error));

    // Start typing effect
    typeWriter();

    // Show elevator container and toggle open after a short delay
    setTimeout(() => {
        const elevatorContainer = document.getElementById("elevatorContainer");
        elevatorContainer.style.display = "block";
        setTimeout(() => {
            elevatorContainer.classList.add('open');
            document.getElementById("navButtons").style.display = "block";
        }, 500);
    }, 1500);
}

// ELEVATOR NAVIGATION LOGIC
function nextFloor() {
    const elevatorContainer = document.getElementById("elevatorContainer");
    const elevatorCabin = document.getElementById("elevatorCabin");

    // Close doors
    elevatorContainer.classList.remove('open');

    setTimeout(() => {
        currentFloor++;

        if (currentFloor <= 9) {
            // Update floor display
            document.getElementById("floorNum").innerText = currentFloor;

            // Move cabin vertically (sliding effect)
            elevatorCabin.style.transform = `translateY(-${(currentFloor - 1) * 100}%)`;

            // Update active card class
            for (let i = 1; i <= 9; i++) {
                document.getElementById(`card${i}`).classList.remove('active');
            }
            document.getElementById(`card${currentFloor}`).classList.add('active');

            // Wait for movement to finish then open doors
            setTimeout(() => {
                elevatorContainer.classList.add('open');
            }, 1000);
        } else {
            // Show final question after last floor
            document.getElementById("navButtons").style.display = "none";
            document.getElementById("elevatorContainer").style.display = "none";
            document.getElementById("finalQuestion").style.display = "block";
        }
    }, 800);
}

// FLOATING HEARTS EFFECT
function createHeart() {
    const hearts = ['💖', '💕', '💗', '💓', '🌸'];
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);

// TYPING EFFECT
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// YES CLICKED
function yesClicked() {
    const response = document.getElementById("response");
    const sadChar = document.getElementById("sadCharacter");
    sadChar.classList.remove('show'); // Hide if was showing
    response.innerHTML = "<h2>Yay! I love you so much! 💖🎉</h2>";
    createConfetti();
}

// NO CLICKED
function noClicked() {
    const response = document.getElementById("response");
    const sadChar = document.getElementById("sadCharacter");

    response.innerHTML = "<h2>But... I still love you 😢💔</h2>";
    sadChar.classList.add('show');

    // Auto-hide sad character after 3 seconds
    setTimeout(() => {
        sadChar.classList.remove('show');
    }, 3000);
}

// SPARKLE EFFECT
document.addEventListener('mousemove', function (e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.innerText = '✨';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';

    // Random size and color variation
    const size = Math.random() * 20 + 10;
    sparkle.style.fontSize = size + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
});

// SIMPLE CONFETTI
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = '🎉';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'vh';
        confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
        confetti.style.zIndex = "3000";
        confetti.style.transition = 'transform 3s linear, top 3s linear';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.top = '110vh';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 100);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}
