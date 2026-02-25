/* ============================================
   PORTFÓLIO LUIZ FERNANDO - SCRIPT PRINCIPAL
   Versão: 2.0 - Consolidado e Otimizado
   ============================================ */

// ========================================
// CONFIGURAÇÕES
// ========================================
const N8N_WEBHOOK_URL =
  "https://craftless-mimically-inge.ngrok-free.dev/webhook/portfolio-contact";

// ========================================
// 1. FORMULÁRIO DE CONTATO + N8N
// ========================================
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const btnText = submitButton.querySelector(".btn-text");
  const btnLoader = submitButton.querySelector(".btn-loader");
  const formMessage = document.getElementById("form-message");

  function showMessage(type, message) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = "block";

    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  }

  function setButtonState(isLoading) {
    if (isLoading) {
      submitButton.disabled = true;
      btnText.style.display = "none";
      btnLoader.style.display = "flex";
    } else {
      submitButton.disabled = false;
      btnText.style.display = "block";
      btnLoader.style.display = "none";
    }
  }

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
      nome: formData.get("name"),
      email: formData.get("email"),
      assunto: formData.get("subject"),
      mensagem: formData.get("message"),
      timestamp: new Date().toISOString(),
    };

    // Validação básica
    if (!data.nome || !data.email || !data.mensagem) {
      showMessage(
        "error",
        "⚠️ Por favor, preencha todos os campos obrigatórios.",
      );
      return;
    }

    // Valida email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showMessage("error", "⚠️ Por favor, insira um email válido.");
      return;
    }

    setButtonState(true);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showMessage(
          "success",
          "✅ Mensagem enviada com sucesso! Entrarei em contato em breve.",
        );
        contactForm.reset();
        console.log("✅ Formulário enviado:", data);
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      console.error("❌ Erro ao enviar:", error);
      showMessage(
        "error",
        "❌ Erro ao enviar mensagem. Tente novamente ou entre em contato por email.",
      );
    } finally {
      setButtonState(false);
    }
  });

  console.log("📧 Formulário de contato carregado!");
}

// ========================================
// 2. ANIMAÇÃO DAS BARRAS DE HABILIDADES
// ========================================
function animateSkillBars() {
  const skillItems = document.querySelectorAll(".skill-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector(".skill-progress");
          const progress = progressBar.getAttribute("data-progress");

          entry.target.classList.add("animated");

          setTimeout(() => {
            progressBar.style.width = progress + "%";
          }, 100);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  skillItems.forEach((item) => {
    observer.observe(item);
  });

  console.log("📊 Animação de habilidades carregada!");
}

// ========================================
// 3. ANIMAÇÕES AO SCROLL (Fade-in)
// ========================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".section-header, .about-content, .skills-grid, .projects-grid, .contact-content, .footer-content",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(el);
  });

  console.log("✨ Animações de scroll carregadas!");
}

// ========================================
// 4. EFEITO TYPEWRITER NA HERO
// ========================================
function initTypewriter() {
  const typewriterElement = document.querySelector(".typewriter-text");
  if (!typewriterElement) return;

  const texts = [
    "Desenvolvedor Front-end em Formação",
    "Criador de Experiências Web",
    "Especialista em UI Moderna",
    "Solucionador de Problemas",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const currentText = texts[textIndex];

    if (isPaused) {
      setTimeout(type, 2000);
      isPaused = false;
      return;
    }

    if (!isDeleting) {
      typewriterElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isPaused = true;
        isDeleting = true;
      }

      setTimeout(type, 100);
    } else {
      typewriterElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      setTimeout(type, 50);
    }
  }

  setTimeout(type, 1000);
  console.log("⌨️ Typewriter carregado!");
}

// ========================================
// 5. SCROLL SUAVE NOS LINKS
// ========================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href === "#" || href === "#home") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Fechar menu mobile
        const navbarMobile = document.getElementById("navbar-mobile");
        const navbarToggle = document.getElementById("navbar-toggle");
        if (navbarMobile && navbarMobile.classList.contains("active")) {
          navbarMobile.classList.remove("active");
          navbarToggle.classList.remove("active");
        }
      }
    });
  });

  console.log("🎯 Scroll suave carregado!");
}

// ========================================
// 6. DARK MODE TOGGLE
// ========================================
function initDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) {
    console.warn("⚠️ Botão theme-toggle não encontrado!");
    return;
  }

  const icon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {
      // Mudar para dark
      document.documentElement.setAttribute("data-theme", "dark");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      console.log("🌙 Mudou para Dark Mode");
    } else {
      // Mudar para light
      document.documentElement.setAttribute("data-theme", "light");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      console.log("☀️ Mudou para Light Mode");
    }

    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";
  });

  console.log("🎨 Dark mode carregado!");
}

// ========================================
// 7. CONTADOR ANIMADO NOS STATS
// ========================================
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const targetText = counter.textContent;
          const target = parseInt(targetText.replace("+", ""));

          if (isNaN(target)) return;

          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.floor(current) + "+";
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + "+";
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  counters.forEach((counter) => observer.observe(counter));
  console.log("🔢 Contadores carregados!");
}

// ========================================
// 8. MENU MOBILE TOGGLE
// ========================================
function initMobileMenu() {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMobile = document.getElementById("navbar-mobile");

  if (!navbarToggle || !navbarMobile) return;

  navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMobile.classList.toggle("active");
  });

  const mobileLinks = document.querySelectorAll(".navbar-mobile-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarToggle.classList.remove("active");
      navbarMobile.classList.remove("active");
    });
  });

  console.log("📱 Menu mobile carregado!");
}

// ========================================
// 9. NAVBAR SCROLL EFFECT
// ========================================
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  console.log("📜 Navbar scroll carregado!");
}

// ========================================
// 10. DEBOUNCE (Performance)
// ========================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// INICIALIZAÇÃO PRINCIPAL
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Inicializando JavaScript Interativo...");
  console.log("📅 Data:", new Date().toLocaleString("pt-BR"));

  // Inicializar todas as funcionalidades
  initContactForm();
  animateSkillBars();
  initScrollAnimations();
  initTypewriter();
  initSmoothScroll();
  initDarkMode();
  initCounters();
  initMobileMenu();
  initNavbarScroll();

  console.log("✅ JavaScript carregado com sucesso!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
});

// ========================================
// LOG DE ERROS GLOBAIS
// ========================================
window.addEventListener("error", function (e) {
  console.error("❌ Erro JavaScript:", e.message);
  console.error("📍 Arquivo:", e.filename);
  console.error("📍 Linha:", e.lineno);
});

console.log("📦 Script carregado - Aguardando DOM...");

// ========================================
// GOOGLE ANALYTICS - EVENTOS PERSONALIZADOS
// ========================================

// Evento: Envio de Formulário
document.getElementById("contact-form").addEventListener("submit", function () {
  gtag("event", "form_submit", {
    event_category: "Contato",
    event_label: "Formulário Principal",
    value: 1,
  });
});

// Evento: Clique em "Ver Projetos"
document.querySelectorAll('a[href*="projetos"]').forEach((link) => {
  link.addEventListener("click", function () {
    gtag("event", "click", {
      event_category: "Navegação",
      event_label: "Ver Projetos",
      value: 1,
    });
  });
});

// Evento: Clique em Redes Sociais
document
  .querySelectorAll(".social-link, .navbar-mobile-socials a")
  .forEach((link) => {
    link.addEventListener("click", function (e) {
      const platform = this.getAttribute("aria-label") || "Social";
      gtag("event", "click", {
        event_category: "Social",
        event_label: platform,
        value: 1,
      });
    });
  });

// Evento: Alternância Dark/Light Mode
document.getElementById("theme-toggle").addEventListener("click", function () {
  const theme = document.documentElement.getAttribute("data-theme");
  gtag("event", "theme_change", {
    event_category: "Preferências",
    event_label: theme === "light" ? "Dark Mode" : "Light Mode",
    value: 1,
  });
});

console.log("📊 Google Analytics eventos configurados!");
