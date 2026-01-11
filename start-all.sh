
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