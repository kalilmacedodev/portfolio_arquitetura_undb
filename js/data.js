/**
 * Catálogo de Projetos de Arquitetura e Urbanismo - UNDB
 * Dados detalhados com fotografia em alta resolução e especificações técnicas completas
 */

const UNDB_PROJECTS = [
  {
    id: "pavi-arte-memoria",
    title: "Pavilhão de Arte Contemporânea e Memória",
    code: "ARC-2026-01",
    category: "institucional",
    categoryLabel: "Institucional & Cultural",
    year: "2026",
    semester: "9º Semestre",
    periodLabel: "9º Período • 2026.1",
    author: "Beatriz Vasconcelos & Lucas Meireles",
    advisor: "Prof. Dr. Ricardo Albuquerque",
    location: "Centro Histórico, São Luís - MA",
    area: "3.450 m²",
    softwares: ["Revit BIM", "Rhino 3D", "Enscape", "Illustrator"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
    ],
    summary: "Inserção contemporânea sensível que reinterpreta os pátios internos e os vazios dos casarões coloniais ludovicenses através de concreto aparente e claraboias zenitais.",
    concept: "O projeto investiga o limiar entre peso e leveza. Estruturado em concreto ciclópico pigmentado e pórticos rítmicos que homenageiam as arcadas da arquitetura luso-brasileira, o pavilhão organiza percursos expositivos contínuos em torno de um espelho d'água central que ameniza a temperatura equatorial.",
    specs: {
      "Sistema Construtivo": "Estrutura monolítica em concreto pigmentado aparente",
      "Conforto Ambiental": "Ventilação cruzada por efeito chaminé e brises pivotantes",
      "Programa de Necessidades": "Foyer público, galerias permanentes, ateliê de restauro, auditório para 180 lugares e café panorâmico",
      "Orientação Solar": "Fachadas cegas a poente com aberturas zenitais a sul"
    }
  },
  {
    id: "casa-brise-soleil",
    title: "Residência Brise-Soleil dos Lençóis",
    code: "ARC-2025-08",
    category: "residencial",
    categoryLabel: "Residencial Sustentável",
    year: "2025",
    semester: "8º Semestre",
    periodLabel: "8º Período • 2025.2",
    author: "Camila Mendonça & Thiago Brandão",
    advisor: "Profa. Ma. Sofia Carvalhal",
    location: "Ponta d'Areia, São Luís - MA",
    area: "580 m²",
    softwares: ["Archicad", "Twinmotion", "AutoCAD", "Photoshop"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80"
    ],
    summary: "Arquitetura residencial de linhas horizontais puras, integrada à vegetação litorânea e dotada de peles vazadas de madeira certificada para sombreamento integral.",
    concept: "Inspirada pela ventilação dos ventos alísios e pela plasticidade do modernismo tropical, a casa eleva-se suavemente sobre pilotis para permitir a respiração do solo. Grandes planos de vidro recuados garantem continuidade entre as áreas sociais e o jardim de espécies nativas da restinga.",
    specs: {
      "Sistema Construtivo": "Pilares metálicos esbeltos e lajes nervuradas de concreto",
      "Conforto Ambiental": "Painéis ripados de madeira cumaru operáveis para filtragem de luz",
      "Eficiência": "Painéis solares fotovoltaicos integrados e reuso de águas pluviais",
      "Programa de Necessidades": "4 suítes, estúdio de trabalho, área gourmet, pátio central e piscina com borda infinita"
    }
  },
  {
    id: "orla-rio-anil",
    title: "Masterplan Urbano: Parque Linear Rio Anil",
    code: "ARC-2025-12",
    category: "urbanismo",
    categoryLabel: "Urbanismo & Paisagismo",
    year: "2025",
    semester: "10º Semestre (TCC Destaque)",
    periodLabel: "10º Período • 2025.1",
    author: "Matheus Ferreira Silva",
    advisor: "Prof. Dr. Cláudio Fontenele",
    location: "Margens do Rio Anil, São Luís - MA",
    area: "42.000 m²",
    softwares: ["QGIS", "Rhino Urban", "Revit", "Lumion 12"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80"
    ],
    summary: "Reconexão da população com o ecossistema de manguezais através de deques elevados, biovaletas de drenagem e praças de convivência comunitária.",
    concept: "O projeto combate a segregação socioespacial propondo uma fita verde ativa de 3 km. A infraestrutura combina soluções baseadas na natureza (SbN), passadiços permeáveis e mobiliário cívico robusto, promovendo mobilidade ativa de pedestres e ciclistas.",
    specs: {
      "Tipologia": "Infraestrutura Verde e Espaço Público",
      "Sustentabilidade": "Jardins de chuva e biofiltros para tratamento de escoamento superficial",
      "Acessibilidade": "Rotas 100% universais (NBR 9050) com rampas de inclinação máxima de 5%",
      "Impacto Social": "Espaços para feirantes locais, anfiteatro ao ar livre e atracadouros comunitários"
    }
  },
  {
    id: "biblioteca-jaracati",
    title: "Biblioteca e Hub de Criação Digital Jaracati",
    code: "ARC-2026-03",
    category: "institucional",
    categoryLabel: "Institucional & Social",
    year: "2026",
    semester: "7º Semestre",
    periodLabel: "7º Período • 2026.1",
    author: "Larissa Holanda & Gabriel Pires",
    advisor: "Profa. Dra. Mariana Gusmão",
    location: "Bairro Jaracati, São Luís - MA",
    area: "1.920 m²",
    softwares: ["Revit", "SketchUp Pro", "V-Ray", "InDesign"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
    ],
    summary: "Um centro cívico híbrido que une acervo bibliográfico impresso, laboratórios de prototipagem rápida e espaços de estudo silencioso voltados para jardins contemplativos.",
    concept: "A volumetria em grelha modular gera uma sensação de ordem e serenidade. As paredes de concreto pigmentado contrastam com o mobiliário de linhas puras em freijó claro, criando uma atmosfera que estimula a concentração e a troca de conhecimentos.",
    specs: {
      "Sistema Estrutural": "Concreto pré-fabricado com modulação de 6x6 metros",
      "Acústica": "Forros fonoabsorventes de fibra mineral e painéis de madeira perfurada",
      "Equipamentos": "Espaço maker, cabines de videoconferência, hemeroteca e cafeteria",
      "Conectividade": "Infraestrutura de dados de alta velocidade integrada ao piso técnico"
    }
  },
  {
    id: "edificio-holandeses",
    title: "Edifício Híbrido Avenida dos Holandeses",
    code: "ARC-2025-05",
    category: "comercial",
    categoryLabel: "Comercial & Uso Misto",
    year: "2025",
    semester: "8º Semestre",
    periodLabel: "8º Período • 2025.2",
    author: "Renato Diniz & Vanessa Paiva",
    advisor: "Prof. Esp. Bruno Sampaio",
    location: "Av. dos Holandeses, Calhau, São Luís",
    area: "8.700 m²",
    softwares: ["Archicad BIM", "Rhino Grasshopper", "Twinmotion"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
    ],
    summary: "Torre contemporânea com térreo comercial transparente e ativo, intermediada por terraços jardins que funcionam como microclimas de resfriamento passivo.",
    concept: "Abordagem crítica à tipologia de edifícios comerciais isolados. A fachada é revestida por brises paramétricos de alumínio perfurado cuja angulação varia conforme a incidência solar das horas mais críticas do dia.",
    specs: {
      "Tipologia": "Uso misto (Comércio no térreo + 12 pavimentos corporativos)",
      "Certificação Almejada": "Padrão LEED Silver de eficiência energética",
      "Fachada": "Brises verticais de desenho paramétrico em alumínio anodizado grafite",
      "Circulação": "Núcleo rígido central de circulação vertical com elevadores inteligentes"
    }
  },
  {
    id: "atelie-ceramica-vernacular",
    title: "Ateliê & Galeria de Cerâmica Maranhense",
    code: "ARC-2026-06",
    category: "interiores",
    categoryLabel: "Interiores & Patrimônio",
    year: "2026",
    semester: "6º Semestre",
    periodLabel: "6º Período • 2026.1",
    author: "Juliana Frota & Amanda Nogueira",
    advisor: "Profa. Ma. Letícia Rocha",
    location: "Rua do Giz, Centro Histórico",
    area: "310 m²",
    softwares: ["AutoCAD", "SketchUp", "Corona Renderer", "Photoshop"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1400&q=80"
    ],
    summary: "Intervenção de restauro e arquitetura de interiores em imóvel tombado pelo IPHAN, valorizando a argila vermelha e a luz natural indireta.",
    concept: "O projeto estabelece um diálogo sóbrio entre as paredes coloniais de alvenaria de pedra/cal e elementos contemporâneos esguios em aço escurecido e bancadas moldadas em pedra sabão.",
    specs: {
      "Patrimônio": "Reabilitação respeitosa com reversibilidade total das novas estruturas",
      "Materialidade": "Revestimentos em cal microporosa, tijolos cerâmicos e madeira de demolição",
      "Iluminação": "Sistemas de trilhos embutidos com temperatura de cor quente (2700K)",
      "Programa": "Ateliê com tornos elétricos, fornos cerâmicos, espaço expositivo e reserva técnica"
    }
  },
  {
    id: "centro-energias-renovaveis",
    title: "Centro de Inovação em Energias Renováveis",
    code: "ARC-2025-10",
    category: "sustentabilidade",
    categoryLabel: "Sustentabilidade & TCC",
    year: "2025",
    semester: "10º Semestre (TCC)",
    periodLabel: "10º Período • 2025.2",
    author: "Enzo Vasconcelos Ribeiro",
    advisor: "Prof. Dr. Ricardo Albuquerque",
    location: "Distrito Industrial do Itaqui - MA",
    area: "5.100 m²",
    softwares: ["Revit", "Rhino Ladybug", "EnergyPlus", "Lumion"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80"
    ],
    summary: "Edifício educacional e tecnológico com pegada de carbono neutra, coberto por shed fotovoltaico translúcido e ventilação termodinâmica.",
    concept: "Desenvolvido como Trabalho de Conclusão de Curso (TCC), o projeto investiga a arquitetura como máquina viva ecológica para o clima semiúmido equatorial do Maranhão.",
    specs: {
      "Desempenho Térmico": "Redução de 42% no consumo de refrigeração artificial",
      "Envoltória": "Painéis de BIPV (Building-Integrated Photovoltaics)",
      "Água": "Bacia de retenção paisagística integrada à drenagem do lote",
      "Reconhecimento": "Indicado ao Prêmio Opera Prima de Arquitetura 2025"
    }
  },
  {
    id: "praca-civica-subterranea",
    title: "Praça Cívica e Galeria Subterrânea da Praia Grande",
    code: "ARC-2024-02",
    category: "urbanismo",
    categoryLabel: "Urbanismo & Concursos",
    year: "2024",
    semester: "9º Semestre",
    periodLabel: "9º Período • 2024.2",
    author: "Helena Castro & Arthur Silveira",
    advisor: "Profa. Dra. Mariana Gusmão",
    location: "Praia Grande, São Luís - MA",
    area: "6.800 m²",
    softwares: ["Archicad", "Grasshopper", "Twinmotion", "Photoshop"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80"
    ],
    summary: "Proposta de praça seca monumental no nível da rua com cortes geométricos que iluminam naturalmente galerias culturais no subsolo.",
    concept: "A intervenção retoma o conceito clássico de ágora grega e o combina com a austeridade geométrica da arquitetura monumental contemporânea.",
    specs: {
      "Piso e Pavimentação": "Granito polido cinza andorinha e pedras de cantaria reaproveitadas",
      "Iluminação Natural": "Pátios escavados e rasgos de luz na cota de pedestres",
      "Estrutura": "Grelha estrutural em concreto protendido de grandes vãos",
      "Uso": "Eventos cívicos, cinema a céu aberto e memorial histórico"
    }
  }
];

// Dados institucionais do curso de Arquitetura UNDB
const UNDB_COURSE_INFO = {
  institution: "UNDB - Centro Universitário Dom Bosco",
  course: "Arquitetura e Urbanismo",
  degree: "Bacharelado (10 Semestres / 5 Anos)",
  mecRating: "Nota Máxima no MEC",
  location: "Av. Colares Moreira, 443 - Jardim Renascença, São Luís - MA",
  email: "arquitetura@undb.edu.br",
  phone: "(98) 4009-7070",
  faculty: [
    {
      name: "Prof. Dr. Ricardo Albuquerque",
      role: "Coordenador do Curso & Professor de Projeto",
      education: "Doutor em Arquitetura (FAU-USP), Mestre em Teoria e História da Arquitetura",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Profa. Dra. Mariana Gusmão",
      role: "Líder de Urbanismo & Planejamento Territorial",
      education: "Doutora em Gestão Urbana (UFRJ), Especialista em Cidades Sustentáveis",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Profa. Ma. Sofia Carvalhal",
      role: "Professora de Conforto Ambiental & Tecnologia BIM",
      education: "Mestre em Engenharia Civil e Arquitetura Bioclimática (Unicamp)",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Prof. Esp. Bruno Sampaio",
      role: "Professor de Práticas Construtivas & Detalhamento",
      education: "Especialista em Estruturas e Sistemas Prediais Contemporâneos",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  laboratories: [
    {
      name: "Maquetaria & Modelagem Física",
      description: "Oficina completa com máquinas de corte a laser, cortadores de fio quente de precisão, ferramentas para madeira nobre e bancadas ergonômicas para confecção de modelos tridimensionais.",
      icon: "cube"
    },
    {
      name: "FabLab & Núcleo BIM",
      description: "Estações de trabalho gráficas equipadas com Revit, Archicad, Rhino/Grasshopper, impressoras 3D e óculos de realidade virtual para imersão espacial nos projetos.",
      icon: "monitor"
    },
    {
      name: "Laboratório de Conforto & Climatologia",
      description: "Heliodon para simulação de trajetórias solares e sombras em maquetes, túnel de vento e sensores micrometeorológicos para avaliação bioclimática precisa.",
      icon: "sun"
    },
    {
      name: "Ateliês Integrados de Criação",
      description: "Espaços amplos em plano livre que fomentam o aprendizado por ateliê de projeto, discussões críticas em banca e bancadas de pranchas técnicas em grandes formatos.",
      icon: "pencil-ruler"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.UNDB_PROJECTS = UNDB_PROJECTS;
  window.UNDB_COURSE_INFO = UNDB_COURSE_INFO;
}
