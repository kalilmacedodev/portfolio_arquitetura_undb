import { useEffect, useMemo, useState } from 'react';

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

const FILTERS = [
  { category: 'all', label: 'Todos' },
  { category: 'institucional', label: 'Institucional' },
  { category: 'residencial', label: 'Residencial' },
  { category: 'urbanismo', label: 'Urbanismo' },
  { category: 'sustentabilidade', label: 'Sustentabilidade' },
  { category: 'interiores', label: 'Patrimônio' }
];

function Icon({ name, size = 16 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  };

  if (name === 'lock') {
    return (
      <svg {...common}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }

  if (name === 'chevron-down') {
    return (
      <svg {...common}>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    );
  }

  if (name === 'search') {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    );
  }

  if (name === 'grid') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    );
  }

  if (name === 'list') {
    return (
      <svg {...common}>
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="index.html" className="brand-identity" aria-label="UNDB">
          <img src="assets/images/undb-brand.png" alt="UNDB" className="brand-identity__brand-img" />
        </a>

        <nav className="main-nav">
          <a href="index.html" className="nav-link active">Projetos</a>
          <a href="sobre.html" className="nav-link">Sobre o Curso</a>
          <a href="sobre.html#laboratorios" className="nav-link">Laboratórios</a>
          <a href="contato.html" className="nav-link">Contato & Submissão</a>
        </nav>

        <div className="header-actions">
          <a href="login.html" className="btn-admin-access" title="Área Restrita da Coordenação">
            <Icon name="lock" size={14} />
            Área Docente
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-editorial" id="apresentacao">
      <div className="container hero-editorial__container">
        <div className="hero-editorial__content">
          <h1 className="hero-title">
            Arquitetura como pensamento crítico, rigor construtivo e sensibilidade territorial.
          </h1>

          <p className="lead" style={{ maxWidth: 980, marginTop: '1.75rem' }}>
            O portfólio discente do curso de Arquitetura e Urbanismo da UNDB reúne projetos experimentais,
            planos diretores urbanos e investigações bioclimáticas desenvolvidos em ateliê. Uma vitrine de
            excelência acadêmica voltada à transformação do ambiente construído maranhense e global.
          </p>
        </div>

        <div className="hero-scroll-prompt">
          <a href="#galeria" className="hero-scroll-link">
            <span>Explorar Projetos</span>
            <Icon name="chevron-down" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryControls({ projects, category, onCategoryChange, searchQuery, onSearchChange, viewMode, onViewModeChange }) {
  const counts = useMemo(() => {
    return FILTERS.reduce((acc, filter) => {
      acc[filter.category] = filter.category === 'all'
        ? projects.length
        : projects.filter((project) => project.category === filter.category).length;
      return acc;
    }, {});
  }, [projects]);

  return (
    <section className="gallery-controls-section" id="galeria">
      <div className="container gallery-controls-bar">
        <div className="filter-categories" role="tablist" aria-label="Filtrar projetos por tipologia">
          {FILTERS.map((filter) => (
            <button
              className={`filter-btn${category === filter.category ? ' active' : ''}`}
              data-category={filter.category}
              key={filter.category}
              onClick={() => onCategoryChange(filter.category)}
              type="button"
            >
              {filter.label} <span className="filter-count">({counts[filter.category] || 0})</span>
            </button>
          ))}
        </div>

        <div className="gallery-tools">
          <div className="search-box">
            <Icon name="search" size={14} />
            <input
              type="text"
              id="project-search"
              placeholder="Buscar por projeto, autor..."
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>

          <div className="view-mode-toggle" title="Alterar modo de visualização">
            <button
              id="view-grid-btn"
              className={`view-btn${viewMode === 'grid' ? ' active' : ''}`}
              title="Visualização em Grade Editorial"
              type="button"
              onClick={() => onViewModeChange('grid')}
            >
              <Icon name="grid" />
            </button>
            <button
              id="view-list-btn"
              className={`view-btn${viewMode === 'list' ? ' active' : ''}`}
              title="Visualização em Lista / Índice Técnico"
              type="button"
              onClick={() => onViewModeChange('list')}
            >
              <Icon name="list" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const rhythmClass = RHYTHM_CLASSES[index % RHYTHM_CLASSES.length];
  const periodText = project.periodLabel || `${project.semester} • ${project.year}`;

  return (
    <article className={`project-card ${rhythmClass}`} data-id={project.id}>
      <button className="project-card__thumb-wrap" type="button" onClick={() => onOpen(project)}>
        <img src={project.coverImage} alt={project.title} className="project-card__thumb" loading="lazy" />
      </button>

      <div className="project-card__meta-content">
        <div className="project-card__line-location">{project.location}</div>
        <h3 className="project-card__line-title">
          <button type="button" onClick={() => onOpen(project)}>{project.title}</button>
        </h3>
        <div className="project-card__line-period">{periodText}</div>
      </div>
    </article>
  );
}

function ProjectGrid({ projects, onOpen }) {
  return (
    <div className="projects-editorial-flow">
      {projects.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.id} onOpen={onOpen} />
      ))}
    </div>
  );
}

function ProjectList({ projects, onOpen }) {
  return (
    <table className="projects-list-table">
      <thead>
        <tr>
          <th style={{ width: 80 }}>Prancha</th>
          <th style={{ width: 100 }}>Ano</th>
          <th>Título do Projeto</th>
          <th>Tipologia</th>
          <th>Autoria</th>
          <th>Semestre</th>
          <th style={{ textAlign: 'right' }}>Ação</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr
            className="projects-list-row"
            key={project.id}
            onClick={() => { window.location.href = `projeto.html?id=${project.id}`; }}
          >
            <td>
              <img src={project.coverImage} alt={project.title} className="projects-list-thumb" />
            </td>
            <td className="col-code">{project.year}</td>
            <td className="col-title">{project.title}</td>
            <td><span className="badge-outline" style={{ fontSize: '0.65rem' }}>{project.categoryLabel}</span></td>
            <td style={{ fontSize: '0.85rem' }}>{project.author}</td>
            <td className="col-code">{project.semester} ({project.year})</td>
            <td style={{ textAlign: 'right' }}>
              <button
                className="btn btn-outline"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onOpen(project);
                }}
              >
                Exibir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function EmptyState({ onClear }) {
  return (
    <div style={{ gridColumn: 'span 12', textAlign: 'center', padding: '4rem 1rem' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
        Nenhum projeto encontrado para o filtro selecionado.
      </p>
      <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} type="button" onClick={onClear}>
        Limpar Filtros
      </button>
    </div>
  );
}

function ProjectsShowcase({ projects, viewMode, onOpen, onClear }) {
  return (
    <main className="projects-showcase">
      <div className="container">
        <div id="projects-container">
          {projects.length === 0 ? (
            <EmptyState onClear={onClear} />
          ) : viewMode === 'grid' ? (
            <ProjectGrid projects={projects} onOpen={onOpen} />
          ) : (
            <ProjectList projects={projects} onOpen={onOpen} />
          )}
        </div>
      </div>
    </main>
  );
}

function InstitutionalSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ maxWidth: 900 }}>
          <span className="tag-code" style={{ color: 'var(--text-muted)', marginBottom: '1rem', display: 'block' }}>
            Abordagem Pedagógica
          </span>
          <h2 style={{ marginBottom: '1.5rem' }}>O Ateliê de Projeto como Laboratório de Cidade e Paisagem</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Na UNDB, o aprendizado da arquitetura ocorre através da prática reflexiva em ateliê aberto. Nossos
            acadêmicos exploram desde o detalhe construtivo em marcenaria e concreto até o planejamento urbano em
            escala metropolitana, utilizando ferramentas BIM contemporâneas, modelagem paramétrica e fabricação
            digital na Maquetaria.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="sobre.html" className="btn btn-primary">Conhecer o Curso e Docentes</a>
            <a href="contato.html" className="btn btn-outline">Submeter Projeto Discente</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(project?.coverImage || '');

  useEffect(() => {
    setActiveImage(project?.coverImage || '');
    document.body.style.overflow = project ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      id="project-modal"
      className={`project-modal-backdrop${project ? ' is-open' : ''}`}
      aria-hidden={!project}
      role="dialog"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="project-modal-card">
          <div className="project-modal-header">
            <button id="modal-close-btn" className="project-modal-close-btn" title="Fechar Visualização" type="button" onClick={onClose}>
              x
            </button>
          </div>

          <div className="project-modal-body">
            <div className="modal-main-image-wrap">
              <img id="modal-main-image" src={activeImage} alt={project.title} className="modal-gallery-main" />
            </div>

            <div className="modal-info-panel">
              <h2 id="modal-title" className="modal-project-title">{project.title}</h2>
              <p id="modal-summary" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                {project.summary}
              </p>

              <div className="modal-specs-list">
                <div className="modal-spec-item">
                  <span className="modal-spec-key">Autores</span>
                  <span id="modal-author" className="modal-spec-val">{project.author}</span>
                </div>
                <div className="modal-spec-item">
                  <span className="modal-spec-key">Orientador</span>
                  <span id="modal-advisor" className="modal-spec-val">{project.advisor}</span>
                </div>
                <div className="modal-spec-item">
                  <span className="modal-spec-key">Localização</span>
                  <span id="modal-location" className="modal-spec-val">{project.location}</span>
                </div>
                <div className="modal-spec-item">
                  <span className="modal-spec-key">Área Construída</span>
                  <span id="modal-area" className="modal-spec-val">{project.area}</span>
                </div>
              </div>
            </div>

            <div className="modal-thumbs-wrap">
              <div id="modal-thumbs" className="modal-gallery-thumbs">
                {project.gallery.map((imageUrl, index) => (
                  <button
                    className={`modal-thumb-btn${activeImage === imageUrl ? ' active' : ''}`}
                    type="button"
                    key={imageUrl}
                    onClick={() => setActiveImage(imageUrl)}
                  >
                    <img src={imageUrl} alt={`${project.title} - Vista ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-actions-footer">
              <a id="modal-full-link" href={`projeto.html?id=${project.id}`} className="btn btn-primary">
                Veja mais
                <Icon name="arrow-right" size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div>
            <h3 className="footer-brand-title">UNDB ARQUITETURA</h3>
            <p style={{ fontSize: '0.88rem', maxWidth: 320, marginBottom: '1.5rem' }}>
              Curso de Arquitetura e Urbanismo do Centro Universitário Dom Bosco. Formando profissionais com
              excelência técnica, ética e sensibilidade urbana.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Navegação</h4>
            <ul className="footer-links-list">
              <li><a href="index.html" className="footer-link">Galeria de Projetos</a></li>
              <li><a href="sobre.html" className="footer-link">Sobre o Curso</a></li>
              <li><a href="sobre.html#corpo-docente" className="footer-link">Corpo Docente</a></li>
              <li><a href="sobre.html#laboratorios" className="footer-link">Laboratórios & BIM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Tipologias</h4>
            <ul className="footer-links-list">
              <li><a href="index.html" className="footer-link">Institucional & Cultural</a></li>
              <li><a href="index.html" className="footer-link">Residencial Sustentável</a></li>
              <li><a href="index.html" className="footer-link">Urbanismo & Paisagismo</a></li>
              <li><a href="index.html" className="footer-link">Trabalhos de Graduação (TCC)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Acesso & Campus</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Av. Colares Moreira, 443<br />
              Jardim Renascença, São Luís - MA<br />
              CEP 65075-441
            </p>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>© 2026 UNDB - Centro Universitário Dom Bosco. Todos os direitos reservados.</span>
          <span>Projeto Acadêmico • Arquitetura & Urbanismo</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const projects = window.UNDB_PROJECTS || [];
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return projects.filter((project) => {
      const matchCategory = category === 'all' || project.category === category;
      const matchSearch = !query ||
        project.title.toLowerCase().includes(query) ||
        project.author.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.categoryLabel.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [category, projects, searchQuery]);

  function clearFilters() {
    setCategory('all');
    setSearchQuery('');
  }

  return (
    <>
      <Header />
      <Hero />
      <GalleryControls
        projects={projects}
        category={category}
        onCategoryChange={setCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <ProjectsShowcase
        projects={filteredProjects}
        viewMode={viewMode}
        onOpen={setActiveProject}
        onClear={clearFilters}
      />
      <InstitutionalSection />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      <Footer />
    </>
  );
}
