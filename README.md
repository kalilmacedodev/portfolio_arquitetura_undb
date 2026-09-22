# Portfólio de Arquitetura & Urbanismo • UNDB

> Plataforma digital e editorial de exibição dos trabalhos acadêmicos, ateliês de projeto, memoriais descritivos e TCCs do curso de **Arquitetura e Urbanismo do Centro Universitário Dom Bosco (UNDB)** — São Luís, Maranhão.

---

## 🏛️ Sobre o Projeto

O **Portfólio de Arquitetura UNDB** é uma vitrine institucional e acadêmica desenvolvida para valorizar a produção discente do curso. A plataforma reúne projetos desenvolvidos nos ateliês integrados, abrangendo escalas diversas: desde intervenções efêmeras e arquitetura de interiores em patrimônio histórico até edifícios institucionais de uso misto e planos diretores urbanos bioclimáticos.

O objetivo é conectar alunos, corpo docente, pesquisadores e a comunidade profissional através de uma experiência imersiva de alta qualidade gráfica e rigor técnico.

---

## 📐 Inspiração e Conceito Visual

A arquitetura de informação e a identidade visual do projeto são diretamente inspiradas na estética de **[David Chipperfield Architects](https://davidchipperfield.com)** (escritório britânico laureado com o *Prêmio Pritzker*), caracterizado por:

- **Pureza Visual e Grid Suíço:** Ausência de ornamentos supérfluos, paleta sóbria (branco puro `#FFFFFF`, fundos neutros `#FAFAFB` e contrastes sutis em cinza arquitetônico), permitindo que a imagem e o desenho sejam protagonistas absolutos.
- **Tipografia Editorial Neutra:** Utilização de fontes grotescas e contemporâneas (*Inter* e *Plus Jakarta Sans*), com pesos equilibrados (regular/medium) e entrelinha generosa para leitura fluida dos memoriais conceituais.
- **Linhas Técnicas (Hairlines):** Bordas milimétricas e divisores de 1px com transparências delicadas, remetendo ao traço vetorial de plantas baixas, cortes e pranchas técnicas.
- **Apresentação em Tela Cheia (Full-Viewport Hero):** Tela inicial de manifesto conceitual que ocupa exatamente 100% da altura da janela, revelando a navegação e a galeria de projetos apenas ao rolar a página (*scroll down*).
- **Identidade Minimalista:** Cabeçalho limpo com a marca pura da UNDB, acompanhado de uma segunda topbar contextual que se fixa no topo da janela (*sticky*) com controles de filtro e busca.

---

## 🚀 Funcionalidades Já Implementadas

- [x] **Hero Editorial Fullscreen:** Apresentação de entrada com altura exata da tela (`100vh`/`100dvh`), manifesto do curso e botão animado com scroll suave para a galeria.
- [x] **Topbar e Identidade Visual Clean:** Cabeçalho com o símbolo institucional da UNDB e favicon personalizado na aba do navegador.
- [x] **Barra de Controles Sticky (Segunda Topbar):**
  - Filtros instantâneos por tipologia arquitetônica (Institucional, Residencial, Urbanismo, Sustentabilidade, Patrimônio).
  - Campo de busca em tempo real por título, autores e orientadores.
  - Alternador dinâmico de layout: **Grade Editorial** (ritmo visual assimétrico) e **Lista Técnica / Índice**.
- [x] **Modal Quick-View:** Visualização rápida com galeria de fotos em alta resolução, memorial resumido e especificações técnicas sem recarregar a página.
- [x] **Página de Detalhamento do Projeto (`projeto.html`):** Ficha completa com galeria expandida, softwares utilizados (Revit, Archicad, Rhino, etc.), sistema construtivo, conforto ambiental e programa de necessidades.
- [x] **Página Institucional do Curso (`sobre.html`):** Missão pedagógica, ateliês integrados, laboratórios de tecnologia e maquetaria, matriz curricular e corpo docente qualificado.
- [x] **Canal de Contato e Submissão Discente (`contato.html`):** Informações da coordenação e formulário estruturado para envio de pranchas e memoriais pelos estudantes.
- [x] **Área Restrita / Painel Docente (`login.html` e `admin.html`):** Interface para curadoria acadêmica e gestão de submissões.

---

## 🔮 Funcionalidades Futuras (Roadmap)

Planejadas para as próximas etapas de desenvolvimento do projeto:

- [ ] **Integração com Backend e Banco de Dados:**
  - Criação de API RESTful em Node.js/Express ou NestJS conectada a PostgreSQL/Supabase para persistência dos projetos.
- [ ] **Visualizador Interativo de Modelos 3D & BIM:**
  - Integração com *Three.js* ou *IFC.js / Autodesk Platform Services (Viewer)* para visualização em tempo real de maquetes eletrônicas interativas diretamente no navegador.
- [ ] **Repositório e Visualizador de Pranchas em PDF:**
  - Leitor integrado de pranchas arquitetônicas de concurso e TCC em altíssima resolução com zoom dinâmico e visualização em camadas.
- [ ] **Autenticação Segura & Workflow Curatorial Completo:**
  - Login docente via OAuth/JWT com níveis de permissão (Aluno, Professor Orientador, Coordenação).
  - Fluxo de aprovação de submissões discentes com comentários de banca e curadoria antes da publicação oficial.
- [ ] **Geolocalização Urbana dos Projetos:**
  - Mapa interativo (via Mapbox/Leaflet) mapeando a localização das intervenções urbanas propostas no território de São Luís e municípios do Maranhão.
- [ ] **Exportação de Fichas e Cadernos de Projeto em PDF:**
  - Geração automática de dossiês diagramados em padrão A4/A3 com visual editorial para arquivamento e impressão de anuários acadêmicos.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estruturação orientada a acessibilidade e SEO.
- **CSS3 Puro (Vanilla CSS):** Design System customizado baseado em variáveis CSS (`:root`), Grid Layout, Flexbox e animações fluidas, sem dependência de frameworks utilitários externos.
- **JavaScript (ES6+):** Manipulação de DOM, renderização assíncrona de coleções e gerenciamento de estado da galeria.
- **Node.js:** Servidor HTTP nativo e leve (`server.js`) configurado com tratamento de tipos MIME para visualização local imediata.

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina (versão 18+ recomendada).

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/kalilmacedodev/portfolio_arquitetura_undb.git
   cd portfolio_arquitetura_undb
   ```

2. **Inicie o servidor local:**
   ```bash
   node server.js
   ```

3. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

---

## 📄 Licença e Créditos

Desenvolvido para o curso de **Arquitetura e Urbanismo da UNDB** — Centro Universitário Dom Bosco.  
Projetos, textos e pranchas são de autoria intelectual de seus respectivos acadêmicos e professores orientadores.
