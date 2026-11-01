/*
  Dados do portfólio da Julia Brasilio.
  Para mudar contatos ou projetos, edite este arquivo. No futuro, estes
  mesmos campos virão do painel admin.

  Fotos com pessoas: marque `pessoas: true`. Elas só aparecem no site
  quando `autorizada: true` (autorização de uso de imagem confirmada).
*/

window.SITE = {
  nome: "Julia Brasilio",
  email: "juliabrasiliodasilveira@gmail.com",
  whatsapp: "5519992407629",
  whatsappMensagem: "Olá, Julia! Vi o seu portfólio e gostaria de conversar.",
  linkedin: "https://www.linkedin.com/in/julia-brasilio-336904275/",
  instagram: "ajuliaeduca"
};

// Depoimentos: a seção aparece sozinha quando houver pelo menos um.
// Formato: { texto: "...", nome: "...", cargo: "..." }
window.DEPOIMENTOS = [];

window.PROJETOS = [
  {
    slug: "literatura-e-leitura-do-mundo",
    ordem: 1,
    titulo: "O Papel do Professor na Mediação da Literatura Infantil no Processo de Leitura do Mundo pela Criança",
    tituloCurto: "Literatura infantil e leitura do mundo",
    tipo: "Pesquisa (TCC)",
    ano: "2026",
    tags: ["Literatura Infantil", "Mediação"],
    gancho: "Como o professor, ao mediar a literatura infantil, ajuda a criança a ler o mundo.",
    capa: null, // sem foto: o card mostra uma capa de livro
    ficha: {
      "Tipo": "Trabalho de Conclusão de Curso",
      "Instituição": "PUC-Campinas",
      "Período": "2026",
      "Meu papel": "Pesquisadora",
      "Método": "Referencial teórico e entrevistas com profissionais da educação"
    },
    desafio: "A literatura infantil está presente em todas as escolas, mas é a mediação que a transforma em uma experiência formadora. A pergunta que guia a pesquisa: qual é o papel do professor na formação de leitores críticos e reflexivos?",
    acao: [
      "Estudei referenciais teóricos sobre literatura infantil, mediação de leitura e leitura do mundo.",
      "Entrevistei profissionais da educação sobre como a literatura acontece no dia a dia da escola.",
      "Articulei teoria e entrevistas para compreender o papel do professor nesse processo."
    ],
    // A COMPLETAR depois da banca: principais conclusões e link para o PDF.
    resultado: "A pesquisa está em fase final. As principais conclusões e o trabalho completo entram aqui depois da banca.",
    citacao: { texto: "A leitura do mundo precede a leitura da palavra.", autor: "Paulo Freire" },
    galeria: []
  },
  {
    slug: "educacao-no-campo",
    ordem: 2,
    titulo: "Educação e Emancipação — Projeto Educação no Campo",
    tituloCurto: "Educação e Emancipação",
    tipo: "Projeto integrador",
    ano: "2026",
    tags: ["Educação Popular", "Anos Iniciais"],
    gancho: "Educação popular, vida nos assentamentos e um jogo pedagógico feito para os anos iniciais.",
    capa: "campo-2.jpg",
    capaAlt: "Julia ao lado da placa da Estrada Paulo Freire, na Floresta Nacional de Ipanema",
    ficha: {
      "Tipo": "Projeto Integrador",
      "Instituição": "PUC-Campinas",
      "Período": "2026",
      "Métodos": "Entrevistas, visitas a assentamentos e pesquisa de campo",
      "Público do jogo": "Anos iniciais do Ensino Fundamental"
    },
    desafio: "Como as práticas educativas do Movimento dos Trabalhadores Rurais Sem Terra (MST) constroem uma educação ligada à vida e ao território? E como levar essa realidade, pouco presente nos livros didáticos, para crianças dos anos iniciais?",
    acao: [
      "Estudei a educação popular e as práticas educativas do MST.",
      "Fiz entrevistas, visitas a assentamentos e pesquisa de campo.",
      "Transformei o que aprendi em um jogo pedagógico sobre a vida nos assentamentos."
    ],
    // A COMPLETAR: regras e objetivos do jogo; se foi testado com alguma turma.
    resultado: "O jogo Perfil do Assentamento Girassol, criado para os anos iniciais do Ensino Fundamental: um jogo de perfil para conhecer, valorizar e transformar, que apresenta às crianças outras formas de viver, produzir e aprender.",
    aprendi: "Partir da realidade de cada comunidade torna o aprendizado mais significativo, dentro e fora da sala de aula.", // sugestão: confirmar
    galeria: [
      { src: "campo-3.jpg", legenda: "Na pesquisa de campo", alt: "Julia sorrindo e segurando duas laranjas na frente dos olhos, em uma estrada de terra" },
      { src: "campo-1.jpg", legenda: "A caminho do assentamento", alt: "Grupo de estudantes, de costas, caminhando por uma estrada de terra" },
      { src: "materiais-1.jpg", legenda: "A identidade visual do jogo", alt: "Logotipo do jogo Perfil do Assentamento Girassol, com um girassol e uma paisagem rural" }
    ]
  },
  {
    slug: "materiais-didaticos",
    ordem: 3,
    titulo: "Criação e Desenvolvimento de Materiais Didáticos",
    tituloCurto: "Materiais didáticos",
    tipo: "Materiais didáticos",
    ano: "2023–2026",
    tags: ["Jogos", "Aprendizagem Lúdica"],
    gancho: "Jogos, materiais manipuláveis e propostas lúdicas criados ao longo da graduação.",
    capa: "materiais-2.jpg",
    capaAlt: "Logotipo do jogo Expedição pelos Quatro Ventos, com uma bússola sobre um mapa",
    capaAjuste: "contain",
    capaFundo: "#d9b98f",
    ficha: {
      "Tipo": "Produções acadêmicas e práticas pedagógicas",
      "Instituição": "PUC-Campinas",
      "Período": "2023–2026",
      "Formatos": "Jogos, materiais manipuláveis, atividades lúdicas e propostas didáticas"
    },
    desafio: "Aprender com sentido pede materiais que convidem a criança a manipular, testar e participar. Cada recurso partiu de uma faixa etária e de um objetivo de aprendizagem.",
    acao: [
      "Defini, para cada recurso, a faixa etária e o objetivo de aprendizagem.",
      "Criei jogos educativos, materiais manipuláveis, atividades lúdicas e propostas didáticas.",
      "Pensei cada material para tornar o aprendizado mais significativo, criativo e participativo."
    ],
    resultado: "Um acervo próprio de recursos prontos para levar à sala de aula.",
    // A COMPLETAR: faixa etária, objetivo e modo de usar de cada material.
    catalogo: [
      { nome: "Expedição pelos Quatro Ventos", img: "materiais-2.jpg", alt: "Logotipo do jogo Expedição pelos Quatro Ventos", texto: "" },
      { nome: "Perfil do Assentamento Girassol", img: "materiais-1.jpg", alt: "Logotipo do jogo Perfil do Assentamento Girassol", texto: "Jogo de perfil sobre a vida nos assentamentos, para os anos iniciais." }
    ],
    galeria: []
  },
  {
    slug: "memorias-do-brincar",
    ordem: 4,
    titulo: "Memórias do Brincar: Patrimônio das Infâncias",
    tituloCurto: "Memórias do Brincar",
    tipo: "Projeto integrador",
    ano: "2026",
    status: "Em desenvolvimento",
    tags: ["Educação Museal", "Infâncias"],
    gancho: "Uma exposição física e digital sobre o brincar de diferentes gerações, com o Museu Universitário da PUC-Campinas.",
    capa: "memorias-1.jpg",
    capaAlt: "Cartaz da exposição Memórias do brincar: patrimônio das infâncias, com ilustrações de crianças brincando",
    capaAjuste: "contain",
    capaFundo: "#efe6d6",
    ficha: {
      "Tipo": "Projeto Integrador",
      "Parceria": "Museu Universitário da PUC-Campinas",
      "Período": "2026 (em andamento)",
      "Entregas": "Exposição física e digital e materiais educativos"
    },
    desafio: "Brinquedos e brincadeiras guardam a história das infâncias, mas raramente são tratados como patrimônio. Como valorizar essas memórias e provocar reflexões sobre o brincar entre gerações?",
    acao: [
      "Em parceria com o Museu Universitário da PUC-Campinas, participo da organização de uma exposição física e digital.",
      "Elaboro materiais educativos que convidam o público a refletir sobre o brincar em diferentes gerações."
    ],
    // A COMPLETAR: data e link da exposição digital quando abrir.
    resultado: "Projeto em andamento. Esta página será atualizada quando a exposição abrir.",
    galeria: []
  },
  {
    slug: "vitalita",
    ordem: 5,
    titulo: "Tecnologias de Comunicação na Memória dos Idosos — Vitalitá",
    tituloCurto: "Memória dos idosos — Vitalitá",
    tipo: "Projeto integrador",
    ano: "2023",
    tags: ["Educação Não Formal", "Inclusão Digital"],
    gancho: "Redes sociais, vídeos e memórias: inclusão digital de pessoas idosas no Centro Vitalitá.",
    capa: "vitalita-2.jpg",
    capaAlt: "Logotipo do Centro Vitalitá",
    capaAjuste: "contain",
    capaFundo: "#000",
    ficha: {
      "Tipo": "Projeto Integrador · Educação não formal",
      "Local": "Centro Vitalitá",
      "Período": "2023",
      "Público": "Pessoas idosas"
    },
    desafio: "Muitas pessoas idosas ficam de fora das conversas que hoje acontecem no celular. Como incentivar a autonomia delas no mundo digital e, ao mesmo tempo, valorizar as histórias que já carregam?",
    acao: [
      "Propus atividades de familiarização com as redes sociais.",
      "Acompanhei a produção de vídeos com os participantes.",
      "Usei as memórias de cada um como ponto de partida para as atividades."
    ],
    resultado: "Atividades que incentivaram a autonomia e a participação dos idosos no mundo digital, com suas memórias valorizadas e registradas em vídeo.",
    aprendi: "Mediar o aprendizado pede escuta, paciência e respeito ao tempo de cada um, em qualquer idade.", // sugestão: confirmar
    galeria: [
      // Foto do grupo: só aparece depois de confirmada a autorização de imagem.
      { src: "vitalita-1.jpg", legenda: "Encontro no Centro Vitalitá", alt: "Grupo reunido em roda em uma sala do Centro Vitalitá", pessoas: true, autorizada: false }
    ]
  }
];
