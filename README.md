## inv-design-radar-chart-wealth-manager

O projeto (Clojure backend + ClojureScript frontend) está dentro da pasta:

- `radar-clojure/`

Para instruções de build/execução, veja:

- [`radar-clojure/README.md`](radar-clojure/README.md)

### Rodar online (GitHub Pages)

Após habilitar o GitHub Pages para este repositório (usando **GitHub Actions**), a URL fica:

- `https://italomonteiro-nubank.github.io/inv-design-radar-chart-wealth-manager/`

## Radar Chart — Clojure (backend) + ClojureScript (frontend)

Este repositório contém uma aplicação que renderiza um **gráfico de radar** (5 dimensões) com **controle interativo** via sliders.

- **Dimensões**: Diversificação, Liquidez, Retorno, Eficiência, Proteção
- **Intervalo**: 1–100 (1 = centro, 100 = vértice)
- **Atualização em tempo real**: ao mover um slider, o gráfico é atualizado imediatamente

## O que significa “a aplicação está em Clojure”

Nesta arquitetura existem duas partes:

- **Backend em Clojure**: servidor HTTP (Ring + Jetty) responsável por servir HTML/CSS/JS estáticos.
- **Frontend em ClojureScript**: UI (labels + sliders) e lógica de atualização do gráfico.

O **Chart.js** continua sendo uma biblioteca **JavaScript** que roda no browser. O ClojureScript faz **interop** com JS para criar e atualizar o gráfico.

Em resumo: **server + UI + lógica estão em Clojure/ClojureScript**, e o Chart.js é um dependency runtime no browser.

## Como rodar localmente

### Pré-requisitos
- **Java** instalado (necessário para Clojure e para compilar ClojureScript)
- **Clojure CLI** (`clojure`) disponível no PATH

### 1) Compilar o frontend (ClojureScript)
Gera o bundle em `resources/public/js/main.js`.

```bash
cd radar-clojure
clojure -M:shadow compile app
```

### 2) Subir o servidor (Clojure)

```bash
cd radar-clojure
clojure -M:server
```

### 3) Abrir no browser

- `http://localhost:3000/`

## Estrutura do projeto

### Configuração
- **`deps.edn`**
  - Dependências do backend (Ring/Jetty, Reitit).
  - Alias **`:shadow`** para compilar ClojureScript via shadow-cljs.
  - Alias **`:server`** para iniciar o backend.

- **`shadow-cljs.edn`**
  - Build `:app` (target browser).
  - Output em `resources/public/js/`.

### Backend (Clojure)
- `src/wm/server.clj`
  - Sobe Jetty e serve `resources/public/`.
  - `/` responde o `index.html`.

### Frontend (ClojureScript)
- `src/wm/frontend/core.cljs`
  - Cria o DOM (frame + `canvas` + controller com 5 sliders).
  - Instancia o Chart.js e atualiza o dataset em tempo real.
  - Gera uma borda **inside** no polígono roxo via `clip()` no canvas.
  - Inclui um overlay de erro para facilitar debug no browser.

### Static assets
- `resources/public/index.html`
  - Entry point.
  - Inclui Chart.js e o bundle gerado do CLJS (`/js/main.js`).
- `resources/public/styles.css`
  - Estilos do frame e do controller.

## Como o Chart.js é carregado

O `index.html` referencia Chart.js via CDN. Além disso, o frontend tenta um **fallback automático** (CDNs alternativos) se `window.Chart` não estiver disponível.

Se nenhum CDN funcionar (ex.: bloqueio de rede), o overlay de erro vai indicar que o Chart.js não pôde ser carregado.

## Troubleshooting

### “Vejo textos, mas não vejo gráfico/sliders”
- Confirme que o frontend foi compilado:

```bash
clojure -M:shadow compile app
```

- Confirme que o backend está rodando e servindo `GET /js/main.js`:
  - `http://localhost:3000/js/main.js`

### “Chart is not a constructor” / “Chart.js não carregou”
- Isso indica que o Chart.js não ficou disponível no runtime do browser (CDN bloqueado, sem internet, etc.).
- Soluções comuns:
  - Liberar acesso aos CDNs no ambiente.
  - Alternativamente, baixar/servir o Chart.js localmente em `resources/public/` (se você quiser seguir por esse caminho, eu implemento).

### Porta ocupada (3000)
O servidor usa a porta **3000** por padrão. Para trocar:

```bash
PORT=3001 clojure -M:server
```

