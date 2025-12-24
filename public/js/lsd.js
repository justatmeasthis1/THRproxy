(function() {
  const ONBOARDING_KEY = 'glint_onboarding_complete';
  const lsd = '0joswashere';
  
  if (localStorage.getItem(ONBOARDING_KEY)) return;

  function createOnboarding() {
    const overlay = document.createElement('div');
    overlay.className = 'onboarding-overlay';
    overlay.innerHTML = `
      <div class="onboarding-bg"></div>
      <div class="onboarding-particles"></div>
      
      <div class="onboarding-container">
        <div class="onboarding-header">
          <img src="images/logoo.png" alt="Glint" class="onboarding-logo">
          <h1 class="onboarding-title">
            Please type the pass you've been given to continue to
            <span class="title-gradient">THR's studying site</span>
          </h1>
          <input type="password" class="onboarding-input" placeholder="Type password here">
          <p class="onboarding-error" style="display:none;">Incorrect password</p>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // particles
    const particlesContainer = overlay.querySelector('.onboarding-particles');
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (5 + Math.random() * 10) + 's';
      particlesContainer.appendChild(particle);
    }

    // password validation
    const input = overlay.querySelector('.onboarding-input');
    const error = overlay.querySelector('.onboarding-error');

    input.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;

      if (input.value === lsd) {
        localStorage.setItem(ONBOARDING_KEY, 'true');
        overlay.remove();
      } else {
        error.style.display = 'block';
        input.classList.add('shake');

        setTimeout(() => {
          input.classList.remove('shake');
        }, 400);
      }
    });
  }

  createOnboarding();
})();
