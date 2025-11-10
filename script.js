// JavaScript for Smooth Scroll with Animation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Add Scroll Animation for Navbar
const header = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('.hero-btn').forEach(button => {
  button.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

    const phrases = [
        "No Pain, No Gain!",
        "Train Like a Beast, Look Like a Beauty!",
        "Your Only Limit is You!",
        "Stronger Every Day!",
        "Results Come to Those Who Sweat!"
    ];

    let phraseIndex = 0;
    function updateHeroText() {
        document.getElementById("hero-animated-text").innerText = phrases[phraseIndex];
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setInterval(updateHeroText, 2000); // Change every 2 seconds
    updateHeroText(); // Initial call

