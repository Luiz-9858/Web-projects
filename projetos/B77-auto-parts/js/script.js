function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.style.display === "flex" ? "none" : "flex";
}

// Adicione um listener para fechar o menu ao clicar fora dele
document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const menuToggle = document.querySelector(".menu-toggle");

  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.style.display = "none";
  }
});
