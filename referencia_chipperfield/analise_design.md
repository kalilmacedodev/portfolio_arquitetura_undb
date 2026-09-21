# Análise de Referência: David Chipperfield Architects
**Fonte:** [davidchipperfield.com](https://davidchipperfield.com)

Esta pasta contém o scraping e análise detalhada da arquitetura de informação e identidade visual de **David Chipperfield Architects**, que servirá de modelo para o portfólio acadêmico do curso de **Arquitetura e Urbanismo da UNDB**.

---

## 1. Princípios de Design Identificados

### 1.1 Pureza Visual e Estrutura Editorial (Grid Suíço)
- **Fundo Limpo:** `#FFFFFF` puro e fundos de contraste suave `#F6F6F6` ou `#F9F9F9`.
- **Tipografia Grotesca / Suíça:**
  - Uso de tipografia sem serifa geométrica neutra (Grotesque), com peso regular a médio.
  - Hierarquia clara com tamanhos precisos e entrelinha (line-height) ampla e confortável.
  - Textos em caixa alta sutil (uppercase com `letter-spacing: 0.05em a 0.08em`) para categorias e metadados.
- **Linhas Técnicas Sutis (Hairlines):** Bordas finas de 1px em cinza claro (`#E5E5E5` ou `rgba(0,0,0,0.08)`) separando seções e cabeçalhos, remetendo a traços de desenho técnico e pranchas arquitetônicas.
- **Protagonismo da Fotografia:** O design não compete com as imagens. Imagens de arquitetura em alta definição, proporções puras (16:9, 4:3, 3:2) e grids assimétricos elegantes.

---

## 2. Estrutura de Telas e Navegação

### 2.1 Cabeçalho (Header)
- Logo em tipografia limpa à esquerda: **UNDB ARQUITETURA & URBANISMO**.
- Navegação à direita em lista horizontal: `Projetos`, `Sobre o Curso`, `Laboratórios`, `Contato`, com botão discreto `Painel`.

### 2.2 Galeria de Projetos
- Barra de filtros clean:
  - Todas as Tipologias
  - Residencial
  - Institucional & Cultural
  - Urbanismo & Paisagismo
  - Patrimônio & Restauro
  - TCC / Destaques Acadêmicos
- Modos de visualização (Grade / Lista técnica).
- Cartões com imagem de alta resolução, título do projeto, autoria (aluno/orientador), ano/semestre e localização.

### 2.3 Ficha Detalhada do Projeto
- Hero com prancha / foto de impacto.
- Painel de especificações técnicas (Autores, Orientador, Disciplina, Local, Área, Softwares utilizados).
- Memorial descritivo em coluna de leitura confortável.
- Galeria de plantas baixas, cortes, diagramas conceituais e fotografias de maquetes físicas.

---

## 3. Arquivos Capturados na Pasta
- `home.html`: Código-fonte completo da página inicial.
- `projects.html`: Catálogo de projetos com estrutura de filtros e listagem.
- `practice.html`: Estrutura institucional (visão, estúdio, equipes).
- `style_chipperfield.css`: Folha de estilos e regras CSS extraídas do site.
