document
  .getElementById("contato-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;
    const submitBtn = form.querySelector(".submit-btn");
    const statusMessage = document.getElementById("status-messagem");

    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    const dados = {
      nome: document.querySelector('[name="nome"]').value,
      email: document.querySelector('[name="email"]').value,
      assunto: document.querySelector('[name="assunto"]').value,
      mensagem: document.querySelector('[name="mensagem"]').value,
    };

    // ✅ URL LOCAL do n8n
    const urlLocal = "http://localhost:5678/webhook/portfolio-contact";

    // Requisição DIRETA com POST
    fetch(urlLocal, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    // Animação das barras de habilidade
    const observerOptions = {
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll(".skill-progress");
          progressBars.forEach((bar) => {
            bar.style.width = bar.style.width || "0%";
          });
        }
      });
    }, observerOptions);

    const skillsSection = document.getElementById("habilidades");
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  });

// ============================================
// Integração Formulário de Contato + n8n
// Autor: Luiz Fernando
// Versão: 1.0
// ============================================

// Configuração do webhook n8n
const N8N_WEBHOOK_URL =
  "https://craftless-mimically-inge.ngrok-free.dev/webhook/portfolio-contact";

// Seleciona o formulário
const contactForm = document.querySelector("form");
const submitButton = contactForm.querySelector('button[type="submit"]');

// Função para mostrar mensagem de feedback
function showMessage(type, message) {
  // Remove mensagem anterior se existir
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Cria nova mensagem
  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message form-message--${type}`;
  messageDiv.textContent = message;

  // Adiciona após o botão de envio
  submitButton.insertAdjacentElement("afterend", messageDiv);

  // Remove mensagem após 5 segundos
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Função para desabilitar/habilitar botão
function setButtonState(isLoading) {
  if (isLoading) {
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
    submitButton.style.opacity = "0.6";
    submitButton.style.cursor = "not-allowed";
  } else {
    submitButton.disabled = false;
    submitButton.textContent = "Enviar mensagem";
    submitButton.style.opacity = "1";
    submitButton.style.cursor = "pointer";
  }
}

// Handler do formulário
async function handleFormSubmit(event) {
  event.preventDefault();

  // Coleta dados do formulário
  const formData = new FormData(contactForm);
  const data = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    assunto: formData.get("assunto"),
    mensagem: formData.get("mensagem"),
    timestamp: new Date().toISOString(),
  };

  // Validação básica
  if (!data.nome || !data.email || !data.mensagem) {
    showMessage(
      "error",
      "⚠️ Por favor, preencha todos os campos obrigatórios."
    );
    return;
  }

  // Valida email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showMessage("error", "⚠️ Por favor, insira um email válido.");
    return;
  }

  // Desabilita botão durante envio
  setButtonState(true);

  try {
    // Envia para n8n
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
        "✅ Mensagem enviada com sucesso! Entrarei em contato em breve."
      );
      contactForm.reset(); // Limpa o formulário

      // Log para debug
      console.log("✅ Formulário enviado com sucesso:", data);
    } else {
      throw new Error("Erro ao enviar mensagem");
    }
  } catch (error) {
    console.error("❌ Erro ao enviar:", error);
    showMessage(
      "error",
      "❌ Erro ao enviar mensagem. Tente novamente ou entre em contato por email."
    );
  } finally {
    // Reabilita botão
    setButtonState(false);
  }
}

// Adiciona listener ao formulário
contactForm.addEventListener("submit", handleFormSubmit);

console.log("📧 Form handler carregado e pronto!");
