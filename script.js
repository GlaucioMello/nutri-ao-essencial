// Animação suave ao rolar
window.addEventListener("scroll", function () {
  document.querySelectorAll(".section").forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
  section.style.transition = "all 0.6s ease-out";
});
