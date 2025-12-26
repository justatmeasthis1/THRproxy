(function () {
  const lsdpasscheck = 'glint_onboarding_complete';
  const lsd = '0joswashere';

  if (localStorage.getItem(lsdpasscheck) === 'yay') return;

  function whatpass() {
    const overlay = document.createElement('div');
    overlay.className = 'lsd-overlay';
    overlay.innerHTML = `
      <div class="onboarding-bg"></div>
      <div class="onboarding-particles"></div>

      <div class="onboarding-container">
        <div class="onboarding-header">
          <img src="images/thrlogo.png" alt="THR" class="onboarding-logo">
          <h1 class="onboarding-title">
            Welcome to
            <span class="title-gradient">THR's studying site</span>
          </h1>

          <div class="search-container">
            <div class="search-bar">
              <div class="search-icon">
                <i class="fa fa-unlock" aria-hidden="true"></i>
              </div>
              <input type="password" class="main-search-input" placeholder="Type password here">
            </div>
          </div>

          <p class="onboarding-error" style="display:none; color:#ff9900; margin-top:10px;">
            Incorrect password
          </p>
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

    // password check
    const input = overlay.querySelector('.main-search-input');
    const error = overlay.querySelector('.onboarding-error');

    input.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;

      if (input.value === lsd) {
        localStorage.setItem(lsdpasscheck, 'yay');
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

  whatpass();
})();
