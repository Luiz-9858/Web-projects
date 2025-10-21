document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const submitBtn = form.querySelector('.submit-btn');
    const statusMessage = document.getElementById('status-messagem');
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    const dados = {
    nome: document.querySelector('[name="nome"]').value,
    email: document.querySelector('[name="email"]').value,
    assunto: document.querySelector('[name="assunto"]').value,
    mensagem: document.querySelector('[name="mensagem"]').value
};

// ✅ URL LOCAL do n8n
const urlLocal = 'http://localhost:5678/webhook/portfolio-contact';

// Requisição DIRETA
// Requisição DIRETA com POST
fetch(urlLocal, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados)
})
.then(response => {
    console.log('Response status:', response.status);
    return response.json();
})
.then(data => {
    console.log('Sucesso:', data);
    statusMessage.className = 'status-message status-success';
    statusMessage.textContent = 'Mensagem enviada com sucesso!';
    statusMessage.style.display = 'block';
    
    // Limpar o formulário
    document.getElementById('contato-form').reset();
})
.catch(error => {
    console.error('Erro completo:', error);
    statusMessage.className = 'status-message status-error';
    statusMessage.textContent = 'Erro ao enviar mensagem. Tente novamente.';
    statusMessage.style.display = 'block';
})
.finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar Mensagem';
});

        

        // Animação das barras de habilidade
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.skill-progress');
                    progressBars.forEach(bar => {
                        bar.style.width = bar.style.width || '0%';
                    });
                }
            });
        }, observerOptions);

        const skillsSection = document.getElementById('habilidades');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
}); 