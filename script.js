const button = document.getElementById('showButton');
const birthdayImage = document.getElementById('birthdayImage');

button.addEventListener('click', () => {
    // Show the image
    birthdayImage.classList.remove('hidden');

    // Generate confetti particles
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
});

// Create decorative elements on the sides
const leftDecoration = document.createElement('div');
leftDecoration.className = 'decoration left';
document.body.appendChild(leftDecoration);

const rightDecoration = document.createElement('div');
rightDecoration.className = 'decoration right';
document.body.appendChild(rightDecoration);

