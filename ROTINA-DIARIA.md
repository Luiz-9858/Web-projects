# 📋 Guia Diário - Rotina de Inicialização

## 🚀 PASSO A PASSO COMPLETO

### **1️⃣ Abrir Docker Desktop**

- Abra o Docker Desktop
- Aguarde até aparecer "Engine running" (ícone verde)

---

### **2️⃣ Iniciar n8n (Git Bash)**

```bash
# Navegue até a pasta do projeto:
cd ~/OneDrive/Documentos/MeusProjetos/Portf-lio-simples-com-formul-rio

# Execute o script de inicialização:
./start-n8n.sh

# Aguarde até aparecer:
# ✅ n8n está pronto!
# 🎉 n8n Iniciado com Sucesso!
```

**Resultado esperado:**

- n8n disponível em: http://localhost:5678

---

### **3️⃣ Iniciar ngrok (Novo terminal Git Bash)**

**Abra um SEGUNDO terminal Git Bash:**

```bash
# Execute o ngrok:
ngrok http 5678

# Aguarde aparecer a URL pública
```

**Copie a URL do "Forwarding":**

```
Forwarding: https://XXXXXX-XXXXXX-XXXX.ngrok-free.dev -> http://localhost:5678
```

---

### **4️⃣ Atualizar URL no código (SE A URL MUDOU)**

**⚠️ IMPORTANTE:** A URL do ngrok muda a cada reinicialização!

```bash
# Abra o VSCode:
code .

# Edite o arquivo: js/script.js ou script.js
# Encontre a linha:
const N8N_WEBHOOK_URL = 'https://OLD-URL.ngrok-free.dev/webhook/portfolio-contact';

# Substitua pela NOVA URL do ngrok:
const N8N_WEBHOOK_URL = 'https://NOVA-URL.ngrok-free.dev/webhook/portfolio-contact';

# Salve o arquivo (Ctrl+S)
```

---

### **5️⃣ Publicar alterações (Git + GitHub + Netlify)**

```bash
# Adicionar alterações:
git add .

# Commit com mensagem:
git commit -m "atualiza URL ngrok"

# Enviar para GitHub:
git push origin main

# Aguarde ~1 minuto para Netlify atualizar automaticamente
```

---

### **6️⃣ Testar no portfólio publicado**

1. Acesse: https://luiz-silva-portfolio.netlify.app
2. Preencha o formulário de contato
3. Envie
4. Deve aparecer: ✅ Mensagem enviada com sucesso!

---

## 🛑 PARAR TUDO NO FINAL DO DIA

### **Parar ngrok:**

```bash
# No terminal do ngrok, pressione:
Ctrl + C
```

### **Parar n8n:**

```bash
# Navegue até a pasta:
cd ~/OneDrive/Documentos/MeusProjetos/Portf-lio-simples-com-formul-rio/n8n-backups/n8n-docker

# Pare os containers:
docker-compose stop

# OU use o Docker Desktop e clique em "Stop"
```

### **Fechar Docker Desktop:**

- Pode fechar normalmente
- OU deixar rodando em segundo plano (consome poucos recursos)

---

## 📝 COMANDOS ÚTEIS

### **Verificar se n8n está rodando:**

```bash
docker ps
# Deve aparecer: n8n-docker-n8n-1 e n8n-docker-postgres-1
```

### **Ver logs do n8n:**

```bash
cd n8n-backups/n8n-docker
docker-compose logs -f
```

### **Acessar n8n localmente:**

```
http://localhost:5678
Usuário: admin
Senha: (a senha do docker-compose.yml)
```

---

## ⚡ ATALHOS RÁPIDOS

### **Script de inicialização completo (crie este arquivo):**

Salve como `start-all.sh` na raiz do projeto:

```bash
#!/bin/bash

echo "🚀 Iniciando ambiente completo..."

# Inicia n8n
./start-n8n.sh

# Aguarda 5 segundos
sleep 5

# Informa próximo passo
echo ""
echo "📡 Agora abra um NOVO terminal e execute:"
echo "   ngrok http 5678"
echo ""
echo "✅ Depois copie a URL do ngrok e atualize o script.js"
```

---

## 🎯 CHECKLIST DIÁRIO

- [ ] Abrir Docker Desktop
- [ ] Executar `./start-n8n.sh`
- [ ] Abrir novo terminal
- [ ] Executar `ngrok http 5678`
- [ ] Copiar URL do ngrok
- [ ] Atualizar `script.js` com nova URL
- [ ] Git add + commit + push
- [ ] Testar formulário no site

---

## 🆘 PROBLEMAS COMUNS

### **Erro: "Docker não está rodando"**

```bash
# Solução: Abra o Docker Desktop e aguarde iniciar
```

### **Erro: "Porta 5678 já está em uso"**

```bash
# Solução: Pare o processo que está usando a porta
docker-compose down
# Depois inicie novamente
./start-n8n.sh
```

### **Formulário não funciona após atualizar**

```bash
# Verifique:
1. ngrok está rodando? (terminal aberto)
2. URL do script.js foi atualizada?
3. Fez push para o GitHub?
4. Netlify já atualizou? (aguarde 1-2 minutos)
```

---

## 💡 DICA PRO

**Para evitar atualizar a URL todo dia:**

Considere o plano pago do ngrok ($8/mês):

- URL fixa que nunca muda
- Sem necessidade de atualizar código
- Mais requisições permitidas

Mais info: https://ngrok.com/pricing

---

**Última atualização:** Janeiro 2026
**Criado por:** Luiz Fernando
**Status:** ✅ Funcionando perfeitamente!
