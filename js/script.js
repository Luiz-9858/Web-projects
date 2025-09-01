// Script para melhorar a experiência do usuário
        document.getElementById('contato-form').addEventListener('submit', function(e) {
            const button = document.querySelector('.btn-enviar');
            const statusMessage = document.getElementById('status-message');
            
            // Mudança visual no botão durante o envio
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            button.disabled = true;
            
            // Esconder mensagens anteriores
            statusMessage.style.display = 'none';
            
            // Após 2 segundos, mostrar que foi enviado
            // (O Formspree vai redirecionar automaticamente)
            setTimeout(() => {
                statusMessage.innerHTML = 'Mensagem enviada! Redirecionando...';
                statusMessage.className = 'status-message status-success';
                statusMessage.style.display = 'block';
            }, 1000);
        });

        function abrirWhatsApp() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const numero = "5514988009858";
    const mensagem = "Olá! Vi seu portfólio online.";
    
    if (isMobile) {
        // Para mobile - abre o app
        window.open(`whatsapp://send?phone=${numero}&text=${encodeURIComponent(mensagem)}`, '_blank');
        
        // Fallback se não tiver o app
        setTimeout(() => {
            window.open(`https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`, '_blank');
        }, 1000);
    } else {
        // Para desktop - abre WhatsApp Web
        window.open(`https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`, '_blank');
    }
}