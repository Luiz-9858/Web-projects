// Script para o formulário
        document.getElementById('contato-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = this;
            const submitBtn = form.querySelector('.submit-btn');
            const statusMessage = document.getElementById('status-message');
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => {
                if (response.ok) {
                    statusMessage.className = 'status-message status-success';
                    statusMessage.textContent = 'Mensagem enviada com sucesso!';
                    statusMessage.style.display = 'block';
                    form.reset();
                } else {
                    throw new Error('Erro no envio');
                }
            })
            .catch(error => {
                statusMessage.className = 'status-message status-error';
                statusMessage.textContent = 'Erro ao enviar mensagem. Tente novamente.';
                statusMessage.style.display = 'block';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar mensagem';
                setTimeout(() => {
                    statusMessage.style.display = 'none';
                }, 5000);
            });
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