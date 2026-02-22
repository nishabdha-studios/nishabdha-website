function initHowWeWork() {
  const section = document.querySelector('.how-we-work');
  if (!section) return;

  const wrapper = section.querySelector('.how-we-work__scroll-wrapper');
  const stickyContainer = section.querySelector('.how-we-work__sticky-container');
  const steps = section.querySelectorAll('.how-we-work__step');
  const indicators = section.querySelectorAll('.how-we-work__indicators button');

  const STEP_COUNT = steps.length;
  const WRAPPER_HEIGHT = STEP_COUNT * 100;

  wrapper.style.height = `${WRAPPER_HEIGHT}vh`;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function updateSteps() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperTop = wrapperRect.top;
    const wrapperHeight = wrapperRect.height;
    
    const scrollProgress = clamp(-wrapperTop / (wrapperHeight - window.innerHeight), 0, 1);
    
    const totalProgress = scrollProgress * (STEP_COUNT - 1);
    const currentStepIndex = Math.floor(totalProgress);
    const nextStepIndex = Math.min(currentStepIndex + 1, STEP_COUNT - 1);
    const stepProgress = totalProgress - currentStepIndex; // 0 to 1 within current step transition
    
    const easedProgress = easeInOutCubic(stepProgress);

    steps.forEach((step, index) => {
      const stepElement = step;
      
      if (index === currentStepIndex) {
        // Current step - fading out upward
        const opacity = 1 - easedProgress;
        const translateY = -easedProgress * 80; // Move up 80px
        
        stepElement.style.opacity = opacity;
        stepElement.style.transform = `translateY(${translateY}px)`;
        stepElement.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
        
      } else if (index === nextStepIndex) {
        const opacity = easedProgress;
        const translateY = (1 - easedProgress) * 80;
        
        stepElement.style.opacity = opacity;
        stepElement.style.transform = `translateY(${translateY}px)`;
        stepElement.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
        
      } else if (index < currentStepIndex) {
        stepElement.style.opacity = 0;
        stepElement.style.transform = 'translateY(-80px)';
        stepElement.style.pointerEvents = 'none';
        
      } else {
        stepElement.style.opacity = 0;
        stepElement.style.transform = 'translateY(80px)';
        stepElement.style.pointerEvents = 'none';
      }
    });

    indicators.forEach((btn, index) => {
      if (index === currentStepIndex || (index === nextStepIndex && stepProgress > 0.5)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function onScroll() {
    requestAnimationFrame(updateSteps);
  }

  function onResize() {
    wrapper.style.height = `${WRAPPER_HEIGHT}vh`;
    updateSteps();
  }

  indicators.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const wrapperHeight = wrapper.offsetHeight;
      const stepPosition = (index / (STEP_COUNT - 1)) * (wrapperHeight - window.innerHeight);
      
      window.scrollTo({
        top: wrapperTop + stepPosition,
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);

  updateSteps();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHowWeWork);
} else {
  initHowWeWork();
}
