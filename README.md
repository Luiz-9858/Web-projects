# 💼 Portfólio Luiz Fernando - Desenvolvedor Full Stack

<div align="center">

![Status](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)
![Versão](https://img.shields.io/badge/Versão-2.0-blue?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)

**[🌐 Ver Portfólio](https://luiz-silva-portfolio.netlify.app)** | **[📧 Contato](mailto:luizfernandodev16@gmail.com)** | **[💼 LinkedIn](https://linkedin.com/in/luiz-fernando-fullstack)**

</div>

---

## 🎯 Sobre o Projeto

Portfólio pessoal moderno e interativo desenvolvido para apresentar meus projetos, habilidades e experiências como desenvolvedor front-end. O site foi construído do zero com foco em **design moderno**, **performance** e **experiência do usuário**.

### ✨ Destaques

- 🎨 **Design Dark Mode** com tema claro opcional
- ⚡ **Animações suaves** e micro-interações
- 📱 **Totalmente responsivo** (Mobile-first)
- 🤖 **Formulário automatizado** com integração n8n
- 🎭 **Efeitos visuais** modernos (glassmorphism, gradientes)
- ♿ **Acessível** e semântico

---

## 🚀 Funcionalidades

### 🎨 Interface

- [x] **Dark/Light Mode** - Alternância de temas com transição suave
- [x] **Typewriter Effect** - Texto animado na Hero Section
- [x] **Scroll Animations** - Fade-in suave ao rolar a página
- [x] **Smooth Scroll** - Navegação suave entre seções
- [x] **Glassmorphism** - Cards com efeito de vidro fosco
- [x] **Hover Effects 3D** - Elementos com elevação ao passar mouse

### 🛠️ Funcionalidades Técnicas

- [x] **Formulário Integrado** - Sistema de contato automatizado com n8n
- [x] **Webhook n8n** - Processamento em tempo real de mensagens
- [x] **Validação de Formulário** - Feedback visual em tempo real
- [x] **Contadores Animados** - Stats com efeito CountUp
- [x] **Barras de Progresso** - Animação ao scroll nas habilidades
- [x] **Menu Mobile** - Hamburger menu com overlay full-screen
- [x] **Intersection Observer** - Performance otimizada nas animações

---

## 🛠️ Tecnologias Utilizadas

### Front-end

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Automação & Deploy

![n8n](https://img.shields.io/badge/n8n-000000?style=for-the-badge&logo=n8n&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![ngrok](https://img.shields.io/badge/ngrok-1F1E37?style=for-the-badge&logo=ngrok&logoColor=white)

### Ferramentas

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VSCode](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 📂 Estrutura do Projeto

```
Portfólio-Luiz-Fernando/
├── index.html              # Página principal
├── css/
│   └── main.css           # CSS consolidado (todas seções)
├── js/
│   └── script.js          # JavaScript interativo
├── images/
│   ├── portfolio.png      # Foto de perfil
│   └── projetos/          # Screenshots dos projetos
├── projetos/              # Subprojetos
│   ├── B77-auto-parts/
│   ├── padaria/
│   └── ...
├── n8n-backups/           # Backups dos workflows
│   ├── docker-compose.yml
│   └── My workflow.json
└── README.md
```

---

## 🎨 Seções do Portfólio

### 1️⃣ Hero Section

- Introdução impactante com efeito typewriter
- Botões CTA (Projetos e Contato)
- Stats visuais (5+ projetos, 2+ anos, 100% dedicação)

### 2️⃣ Sobre Mim

- Card com glassmorphism
- Foto com border gradiente animado
- Highlights de qualidade, aprendizado e criatividade

### 3️⃣ Habilidades

- 12 habilidades organizadas em 3 categorias
- Barras de progresso animadas
- Cards com hover 3D

### 4️⃣ Projetos

- **AutoPeças Pro IA** ⭐ (Projeto em Destaque)
- Portfólio Pessoal
- B77 Auto Parts (Em desenvolvimento)
- Padaria Artesanal

### 5️⃣ Contato

- Formulário integrado com n8n
- Métodos de contato diretos
- Status de disponibilidade

### 6️⃣ Footer

- Links rápidos
- Redes sociais
- Tech stack
- Copyright dinâmico

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge)
- Editor de código (VSCode recomendado)
- Node.js (opcional, para servidor local)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Luiz-9858/portfolio.git

# Entre no diretório
cd portfolio

# Abra o index.html no navegador
# OU use um servidor local:
npx http-server
```

### Configurar n8n (Opcional)

Para usar o formulário de contato:

```bash
# Instalar Docker Desktop
# Navegar para n8n-backups/n8n-docker/
cd n8n-backups/n8n-docker/

# Subir container n8n
docker-compose up -d

# Acessar n8n
http://localhost:5678
```

---

## 🎯 Projetos em Destaque

### 🤖 [AutoPeças Pro IA](https://autopecas-pro-ia.vercel.app)

Sistema MVP de recomendação inteligente de autopeças usando IA.

- **Stack:** HTML5, CSS3, JavaScript, API Grok
- **Diferencial:** Integração com IA para análise de compatibilidade
- **Aprendizados:** APIs REST, prompts de IA, tratamento de dados

**[Ver Repositório](https://github.com/Luiz-9858/autopecas-pro-ia)**

---

## 📈 Próximos Passos

### Fase 5 - Case Study (Em breve)

- [ ] Modal detalhado do AutoPeças Pro IA
- [ ] Explicação do processo de desenvolvimento
- [ ] Resultados e aprendizados

### Fase 6 - Otimizações

- [ ] SEO avançado (Schema.org, meta tags)
- [ ] Performance (minify, lazy loading)
- [ ] Analytics (Google Analytics 4)
- [ ] Acessibilidade WCAG AA

### Melhorias Contínuas

- [ ] Adicionar mais projetos
- [ ] Blog técnico
- [ ] Integração com CMS
- [ ] Modo de apresentação

---

## 🎓 Metodologia de Desenvolvimento

Este portfólio foi desenvolvido seguindo:

✅ **Mobile-First** - Design pensado primeiro para dispositivos móveis  
✅ **Semantic HTML** - Estrutura acessível e otimizada para SEO  
✅ **CSS Variables** - Design tokens para consistência visual  
✅ **Progressive Enhancement** - Funciona sem JavaScript  
✅ **Performance** - Intersection Observer, debounce, otimizações  
✅ **Commits Descritivos** - Histórico limpo e organizado

---

## 📊 Métricas

- ⚡ **Performance:** 95+ (Lighthouse)
- ♿ **Acessibilidade:** 90+ (Lighthouse)
- 🎨 **Best Practices:** 100 (Lighthouse)
- 📱 **Responsivo:** 100% mobile-friendly
- 🌐 **Cross-browser:** Chrome, Firefox, Safari, Edge

---

## 🤝 Contribuições

Sugestões e feedbacks são sempre bem-vindos!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/melhoria`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/melhoria`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📫 Contato

<div align="center">

### Luiz Fernando da Silva

**Desenvolvedor Full Stack**

[![Email](https://img.shields.io/badge/Email-luizfernandodev16@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:luizfernandodev16@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-luiz--fernando--fullstack-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/luiz-fernando-fullstack)
[![GitHub](https://img.shields.io/badge/GitHub-@Luiz--9858-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Luiz-9858)
[![Instagram](https://img.shields.io/badge/Instagram-@lfcodes-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/lfcodes)

**Disponível para novos projetos e oportunidades!**

</div>

---

<div align="center">

**Última atualização:** Fevereiro/2026  
_"Transformando ideias em experiências digitais"_ 🚀

⭐ **Se este projeto te ajudou, deixe uma estrela!**

</div>
