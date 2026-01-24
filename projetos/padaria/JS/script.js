// Efeito de parallax suave //
function scrollTo(elementId) {
  document.getElementById(elementId).scrollIntoView({
    behavior: "smooth",
  });
}

// Efeito de parallax suave
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    const speed = scrolled * 0.5;
    hero.style.transform = `translateY(${speed}px)`;
  }
});
