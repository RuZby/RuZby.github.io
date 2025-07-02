gsap.to(".letter", {
  y: 0,
  opacity: 1,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out"
});

gsap.to('#presentation', {
  opacity: 1,
  y: 0,
  duration: 0.2,
  delay: 1.0, // Délai après l'animation des lettres
  ease: "power2.out"
});