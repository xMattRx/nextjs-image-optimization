# 🖼️ Next.js Performance PDI

Este projeto foi criado como parte do meu **PDI** para estudar e aplicar práticas de **performance e acessibilidade** usando **Next.js**.

---

## 🎯 Objetivo
- Criar um projeto simples em Next.js.
- Renderizar uma imagem principal (**hero**) e um grid de imagens.
- Aplicar boas práticas de **otimização de imagens**, incluindo:
  - Uso do componente `next/image`
  - `priority` para melhorar o **LCP**
  - **Lazy loading automático** para imagens abaixo da dobra
  - `sizes` responsivo para reduzir peso em telas menores
- Medir métricas de performance com **Lighthouse** antes e depois das melhorias.

---

## 🚀 Como Rodar o Projeto

1. Instalar dependências:
```bash
npm install
```

2. Rodar em modo desenvolvimento:
```bash
npm run dev
```

3. Para medir performance, rodar em **modo produção**:
```bash
npm run build
npm start
```
Abrir em [http://localhost:3000](http://localhost:3000)

---

## 🔎 Como Medir no Lighthouse

1. Abrir o Chrome e acessar `http://localhost:3000`.
2. Abrir DevTools (`Ctrl + Shift + I`).
3. Ir para a aba **Lighthouse**.
4. Selecionar:
   - **Mode:** Navigation
   - **Device:** Mobile
   - **Categories:** Performance (pode incluir Accessibility, Best Practices e SEO)
5. Rodar o relatório e salvar os resultados.

---

## 📊 Resultados

| Métrica                    | **ANTES** | **DEPOIS** |
|---------------------------|-----------|-----------|
| **Performance**           | 100 | 100 |
| First Contentful Paint (FCP) | 0.2 s | 0.2 s |
| Largest Contentful Paint (LCP) | 0.4 s | 0.6 s |
| Total Blocking Time (TBT) | 0 ms | 0 ms |
| Cumulative Layout Shift (CLS) | 0 | 0 |
| Speed Index               | 0.2 s | 0.2 s |

Mesmo que a pontuação final tenha se mantido em 100, a versão **depois** aplica práticas recomendadas que garantem uma melhor experiência para usuários em páginas mais pesadas e redes mais lentas.

---

## 🛠️ Tecnologias Usadas
- **Next.js 15**
- **TypeScript**
- **next/image** (para otimização automática)
- **Tailwind CSS** (para layout rápido)

---

## 📌 Conclusão
Este projeto serviu como laboratório para entender como otimizações simples de imagem impactam métricas de performance como **LCP** e **Speed Index**.  
A abordagem pode ser aplicada em projetos reais para garantir melhor carregamento, principalmente em mobile.
