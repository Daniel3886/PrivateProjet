const button = document.getElementById('button');
const birthdayImage = document.getElementById('birthdayImage');

button.addEventListener('click', () => {
    // Show the image
    birthdayImage.classList.remove('hidden');

    // Generate confetti particles
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDuration = `${Math.random() * 4 + 3}s`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confetti.style.zIndex = `${Math.floor(Math.random() * 5)}`;
      confetti.style.backgroundImage = `url(./candies/candy-${Math.floor(Math.random() * 5) + 1}.svg)`;
      document.body.appendChild(confetti);

      confetti.addEventListener('animationend', () => {
          confetti.remove();
        });
    }
});

const playButton = document.getElementById('button');
const audioElement = document.getElementById('birthdaySong');

playButton.addEventListener('click', () => {
  if (audioElement.paused || audioElement.ended) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});
