// Animation des éléments au scroll
class ScrollAnimator {
  constructor() {
    this.elements = document.querySelectorAll('[data-animate]');
    this.init();
  }

  init() {
    if (this.elements.length === 0) return;

    this.animateElements();
    window.addEventListener('scroll', this.animateElements.bind(this));
  }

  animateElements() {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.8;

    this.elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition < triggerPoint) {
        const animationType = element.getAttribute('data-animate');
        element.classList.add(animationType);
      }
    });
  }
}

// Initialisation lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimator();
});

// Animation du bouton CTA
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-3px)';
    button.style.boxShadow = '0 10px 20px rgba(255, 123, 172, 0.3)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = 'none';
  });
});