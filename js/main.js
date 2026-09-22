/**
 * Script Principal da Galeria & Landing Page - UNDB Arquitetura
 * Renderização dinâmica, filtros por categoria, busca e modal de visualização rápida
 */

// Ritmos e defasagens verticais assimétricas (sem alinhamento horizontal coincidente)
const RHYTHM_CLASSES = [
  'card-flow-0',
  'card-flow-1',
  'card-flow-2',
  'card-flow-3',
  'card-flow-4',
  'card-flow-5',
  'card-flow-6',
  'card-flow-7'
];

document.addEventListener('DOMContentLoaded', () => {
  // Estado da Galeria
  const state = {
    currentCategory: 'all',
    searchQuery: '',
    viewMode: 'grid', // 'grid' | 'list'
    activeModalProject: null
  };

  // Elementos do DOM
  const galleryContainer = document.getElementById('projects-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('project-search');
  const viewGridBtn = document.getElementById('view-grid-btn');
  const viewListBtn = document.getElementById('view-list-btn');
  const projectCountEl = document.getElementById('visible-projects-count');
  
  // Elementos do Modal
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalSummary = document.getElementById('modal-summary');
  const modalMainImage = document.getElementById('modal-main-image');
  const modalThumbsContainer = document.getElementById('modal-thumbs');
  const modalAuthor = document.getElementById('modal-author');
  const modalAdvisor = document.getElementById('modal-advisor');
  const modalLocation = document.getElementById('modal-location');
  const modalArea = document.getElementById('modal-area');
  const modalFullPageLink = document.getElementById('modal-full-link');

  // Inicializar Galeria
  renderProjects();
  setupFilterCounters();

  // -------------------------------------------------------------------------
  // Event Listeners: Filtros
  // -------------------------------------------------------------------------
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentCategory = btn.dataset.category;
      renderProjects();
    });
  });

  // Event Listener: Busca
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  // Event Listeners: Alternar Modo de Visualização (Grid vs. List)
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      viewGridBtn.classList.add('active');
      viewListBtn.classList.remove('active');
      renderProjects();
    });

    viewListBtn.addEventListener('click', () => {
      state.viewMode = 'list';
      viewListBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      renderProjects();
    });
  }

  // -------------------------------------------------------------------------
  // Renderização dos Projetos
  // -------------------------------------------------------------------------
  function renderProjects() {
    if (!galleryContainer) return;

    // Filtrar dados
    const filtered = UNDB_PROJECTS.filter(project => {
      const matchCat = state.currentCategory === 'all' || project.category === state.currentCategory;
      const matchSearch = !state.searchQuery ||
        project.title.toLowerCase().includes(state.searchQuery) ||
        project.author.toLowerCase().includes(state.searchQuery) ||
        project.location.toLowerCase().includes(state.searchQuery) ||
        project.categoryLabel.toLowerCase().includes(state.searchQuery);
      return matchCat && matchSearch;
    });

    if (projectCountEl) {
      projectCountEl.textContent = `${filtered.length} projetos exibidos`;
    }

    if (filtered.length === 0) {
      galleryContainer.innerHTML = `
        <div style="grid-column: span 12; text-align: center; padding: 4rem 1rem;">
          <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">
            Nenhum projeto encontrado para o filtro selecionado.
          </p>
          <button class="btn btn-outline" style="margin-top: 1.5rem;" onclick="document.querySelector('.filter-btn[data-category=all]').click()">
            Limpar Filtros
          </button>
        </div>
      `;
      return;
    }

    if (state.viewMode === 'grid') {
      renderGridView(filtered);
    } else {
      renderListView(filtered);
    }
  }

  // Render em Grade Editorial Assimétrica
  function renderGridView(projects) {
    let html = `<div class="projects-editorial-flow">`;

    projects.forEach((proj, idx) => {
      const rhythmClass = RHYTHM_CLASSES[idx % RHYTHM_CLASSES.length];
      const periodText = proj.periodLabel || `${proj.semester} • ${proj.year}`;

      html += `
        <article class="project-card ${rhythmClass}" data-id="${proj.id}">
          <div class="project-card__thumb-wrap" onclick="window.openQuickModal('${proj.id}')">
            <img src="${proj.coverImage}" alt="${proj.title}" class="project-card__thumb" loading="lazy" />
          </div>

          <div class="project-card__meta-content">
            <div class="project-card__line-location">${proj.location}</div>
            <h3 class="project-card__line-title">
              <a href="javascript:void(0)" onclick="window.openQuickModal('${proj.id}')">${proj.title}</a>
            </h3>
            <div class="project-card__line-period">${periodText}</div>
          </div>
        </article>
      `;
    });

    html += `</div>`;
    galleryContainer.innerHTML = html;
  }

  // Render em Lista / Tabela Técnica
  function renderListView(projects) {
    let html = `
      <table class="projects-list-table">
        <thead>
          <tr>
            <th style="width: 80px;">Prancha</th>
            <th style="width: 100px;">Ano</th>
            <th>Título do Projeto</th>
            <th>Tipologia</th>
            <th>Autoria</th>
            <th>Semestre</th>
            <th style="text-align: right;">Ação</th>
          </tr>
        </thead>
        <tbody>
    `;

    projects.forEach(proj => {
      html += `
        <tr class="projects-list-row" onclick="window.location.href='projeto.html?id=${proj.id}'">
          <td>
            <img src="${proj.coverImage}" alt="${proj.title}" class="projects-list-thumb" />
          </td>
          <td class="col-code">${proj.year}</td>
          <td class="col-title">${proj.title}</td>
          <td><span class="badge-outline" style="font-size: 0.65rem;">${proj.categoryLabel}</span></td>
          <td style="font-size: 0.85rem;">${proj.author}</td>
          <td class="col-code">${proj.semester} (${proj.year})</td>
          <td style="text-align: right;">
            <button class="btn btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;" onclick="event.stopPropagation(); window.openQuickModal('${proj.id}')">
              Exibir
            </button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    galleryContainer.innerHTML = html;
  }

  // Atualizar contadores em cada botão de filtro
  function setupFilterCounters() {
    filterButtons.forEach(btn => {
      const cat = btn.dataset.category;
      const count = cat === 'all' 
        ? UNDB_PROJECTS.length 
        : UNDB_PROJECTS.filter(p => p.category === cat).length;
      
      const countSpan = btn.querySelector('.filter-count');
      if (countSpan) {
        countSpan.textContent = `(${count})`;
      }
    });
  }

  // -------------------------------------------------------------------------
  // Modal de Visualização Rápida
  // -------------------------------------------------------------------------
  window.openQuickModal = function(projectId) {
    const project = UNDB_PROJECTS.find(p => p.id === projectId);
    if (!project || !modalBackdrop) return;

    state.activeModalProject = project;

    modalTitle.textContent = project.title;
    modalSummary.textContent = project.summary;
    modalAuthor.textContent = project.author;
    modalAdvisor.textContent = project.advisor;
    modalLocation.textContent = project.location;
    modalArea.textContent = project.area;
    modalFullPageLink.href = `projeto.html?id=${project.id}`;

    // Imagem Principal
    modalMainImage.src = project.coverImage;
    modalMainImage.alt = project.title;

    // Miniaturas da Galeria
    let thumbsHtml = '';
    project.gallery.forEach((imgUrl, i) => {
      thumbsHtml += `
        <button class="modal-thumb-btn ${i === 0 ? 'active' : ''}" onclick="window.switchModalImage('${imgUrl}', this)">
          <img src="${imgUrl}" alt="Vista ${i + 1}" />
        </button>
      `;
    });
    modalThumbsContainer.innerHTML = thumbsHtml;

    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  window.switchModalImage = function(imageUrl, btnEl) {
    if (modalMainImage) {
      modalMainImage.src = imageUrl;
    }
    const allBtns = modalThumbsContainer.querySelectorAll('.modal-thumb-btn');
    allBtns.forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
  };

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
