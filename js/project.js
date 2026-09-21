/**
 * Script da Página de Detalhes do Projeto - UNDB Arquitetura
 * Carrega dinamicamente os dados do projeto baseado no parâmetro ?id= da URL
 */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let projectId = urlParams.get('id');

  // Caso não passe ID, seleciona o primeiro projeto de destaque por padrão
  if (!projectId || !UNDB_PROJECTS.some(p => p.id === projectId)) {
    projectId = UNDB_PROJECTS[0].id;
  }

  const projectIndex = UNDB_PROJECTS.findIndex(p => p.id === projectId);
  const project = UNDB_PROJECTS[projectIndex];

  // Atualizar título da página
  document.title = `${project.title} • UNDB Arquitetura`;

  // Renderizar Cabeçalho do Projeto
  document.getElementById('p-code').textContent = project.year;
  document.getElementById('p-category').textContent = project.categoryLabel;
  document.getElementById('p-title').textContent = project.title;
  document.getElementById('p-year-sem').textContent = `${project.semester} • ${project.year}`;
  document.getElementById('p-location-top').textContent = project.location;

  // Imagem de Destaque
  const coverImg = document.getElementById('p-cover-image');
  coverImg.src = project.coverImage;
  coverImg.alt = project.title;

  // Textos Conceituais
  document.getElementById('p-summary').textContent = project.summary;
  document.getElementById('p-concept').textContent = project.concept;

  // Ficha Técnica
  document.getElementById('p-author').textContent = project.author;
  document.getElementById('p-advisor').textContent = project.advisor;
  document.getElementById('p-area').textContent = project.area;
  document.getElementById('p-location').textContent = project.location;

  // Renderizar Softwares
  const softwaresContainer = document.getElementById('p-softwares');
  softwaresContainer.innerHTML = project.softwares
    .map(s => `<span class="software-tag">${s}</span>`)
    .join('');

  // Renderizar Especificações Estruturais e Ambientais
  const specsContainer = document.getElementById('p-specs-editorial');
  if (project.specs) {
    let specsHtml = '';
    for (const [key, value] of Object.entries(project.specs)) {
      specsHtml += `
        <div class="specs-editorial-row">
          <span class="specs-editorial-key">${key}</span>
          <span style="color: var(--text-primary);">${value}</span>
        </div>
      `;
    }
    specsContainer.innerHTML = specsHtml;
  }

  // Galeria de Pranchas e Vistas
  const galleryContainer = document.getElementById('p-gallery-masonry');
  if (galleryContainer && project.gallery) {
    let galHtml = '';
    project.gallery.forEach((imgUrl, idx) => {
      galHtml += `
        <div class="project-gallery-item" style="cursor: zoom-in;" onclick="window.openLightbox('${imgUrl}')">
          <img src="${imgUrl}" alt="${project.title} - Vista ${idx + 1}" loading="lazy" />
          <div style="margin-top: 0.5rem; display: flex; justify-content: space-between;">
            <span class="tag-code">Prancha // 0${idx + 1}</span>
            <span class="tag-code" style="color: var(--text-muted);">Clique para ampliar</span>
          </div>
        </div>
      `;
    });
    galleryContainer.innerHTML = galHtml;
  }

  // Navegação entre Projetos Adjacentes (Anterior e Próximo)
  const prevIndex = (projectIndex - 1 + UNDB_PROJECTS.length) % UNDB_PROJECTS.length;
  const nextIndex = (projectIndex + 1) % UNDB_PROJECTS.length;
  const prevProject = UNDB_PROJECTS[prevIndex];
  const nextProject = UNDB_PROJECTS[nextIndex];

  const prevLink = document.getElementById('p-prev-link');
  const nextLink = document.getElementById('p-next-link');

  if (prevLink) {
    prevLink.href = `projeto.html?id=${prevProject.id}`;
    document.getElementById('p-prev-title').textContent = prevProject.title;
  }

  if (nextLink) {
    nextLink.href = `projeto.html?id=${nextProject.id}`;
    document.getElementById('p-next-title').textContent = nextProject.title;
  }

  // Lightbox Simples para Pranchas
  window.openLightbox = function(imageUrl) {
    const lb = document.createElement('div');
    lb.style.position = 'fixed';
    lb.style.inset = '0';
    lb.style.backgroundColor = 'rgba(10, 10, 12, 0.9)';
    lb.style.zIndex = '9999';
    lb.style.display = 'flex';
    lb.style.alignItems = 'center';
    lb.style.justifyContent = 'center';
    lb.style.cursor = 'zoom-out';
    lb.style.padding = '2rem';
    lb.innerHTML = `
      <img src="${imageUrl}" style="max-width: 95vw; max-height: 92vh; object-fit: contain; box-shadow: 0 10px 40px rgba(0,0,0,0.5); border-radius: 2px;" />
    `;
    lb.onclick = () => document.body.removeChild(lb);
    document.body.appendChild(lb);
  };
});
