# Jordana de Paula - Branch de Desenvolvimento

## Estrutura do Repositório

- **`gh-pages`** - Branch com build produção (dist/) - hospedada em GitHub Pages
- **`develop`** - Branch de desenvolvimento (source code)

## Status Atual

Esta é a branch `develop` onde o código-fonte do projeto React + Vite deve ser mantido.

### Site em Produção
- 🔗 URL: https://thayllor.github.io/JordanaDePaula/
- 📦 Branch: `gh-pages`
- 🚀 Deploy automático via `npm run deploy`

## Como Continuar Desenvolvendo

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/thayllor/JordanaDePaula.git
   git checkout develop
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Desenvolver localmente**
   ```bash
   npm run dev
   ```

4. **Deploy para produção**
   ```bash
   npm run deploy
   ```

## Notas

- A branch `gh-pages` contém apenas os arquivos compilados (build output)
- Todos os commits de desenvolvimento devem ser feitos na branch `develop`
- O deploy automático via `npm run deploy` constrói e publica para `gh-pages`

---

Site desenvolvido com React + TypeScript + Vite
