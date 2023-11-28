export default {
  navbar: {
    home: 'Accueil',
    about: 'A propos',
    projects: 'Projets',
    experience: 'Expérience',
    education: 'Education'
  },
  footer: {
    copyright: "Réalisé par ",
  },
  hero: {
    greeting: "Bonjour,",
    name: "Je suis Ben.",
    position: "Consultant en stratégie le jour,",
    firstTitle: "ingénieur en cybersécurité",
    secondTitle: "développeur de logiciels",
    thirdTitle: "développeur web",
    endQuote: "la nuit.",
    objective: "Conseil et développement de projets sécurisés pour les humains à travers le monde.",
  },
  about: {
    title: "A propos",
    quote: `"Équilibrer la sécurité et la commodité"`,
    description: `<p>Je suis un <strong class="highlighted-content">consultant en stratégie et transformation</strong> et je travail sur des projets de <strong class="highlighted-content">cybersécurité</strong> et de <strong class="highlighted-content">cloud.</strong> J'accompagne les clients dans la conception de leur cadre de sécurité et dans leurs migrations vers le cloud. Je suis titulaire d'un double master, respectivement en <strong class="highlighted-content">ingénierie en cybersécurité</strong> et en <strong class="highlighted-content">conseil en management.</strong> Avec les connaissances et les outils de ces deux mondes,<strong class="highlighted-content"> je protège mes clients des cybercriminels dans leurs opérations quotidiennes.</strong></p><p> Je suis dynamique, analytique et j'optimise constamment mes méthodes. L'envie d'acquérir plus de connaissances m'a amené à travailler dans plusieurs pays comme les <strong class="highlighted-content">États-Unis, la France et l'Autriche.</strong></p>`,
  },
  projects: {
    title: "Projets vedettes",
    quote: `"La somme des efforts répétés"`,
    firstTab: "Conseil",
    secondTab: "Ingénierie",
    featured: [
      {
        consulting: [
          {
            name: "Migration cloud pour un leader bancaire",
            startDate: "2023-01-16",
            endDate: "2023-04-24",
            city: "Luxembourg",
            description: "Pilotage d'un comité de projet de migration vers le cloud pour un leader du secteur bancaire. Identification des options clés pour réduire la consommation budgétaire. Suivi des plans d'action en coopération avec plus de 8 collaborateurs.",
            country: "Luxembourg",
            tags: [
              "Cloud",
              "Gestion des opérations",
              "Power BI",
              "Analyse budgétaire",
              "Banque"
            ],
            id: "5"
          },
          {
            name: "Cadre de risques cyber pour un géant du luxe",
            startDate: "2023-04-22",
            endDate: "2023-06-16",
            city: "Paris",
            description: "Élaboration de formations sur le cadre des risques de cybersécurité pour un groupe de luxe. Définition des comités de gouvernance de risques à plusieurs niveaux et étude de la méthodologie FAIR pour la quantification des risques.",
            country: "France",
            tags: [
              "Cybersécurité",
              "Gouvernance",
              "ISO27005",
              "FAIR",
              "Gestion des riques cyber",
              "Luxe"
            ],
            id: "4"
          },
          {
            name: "Planning de migration cloud dans le secteur public",
            startDate: "2023-06-12",
            endDate: "2023-07-13",
            city: "Paris",
            description: "Élaboration de plans et d'une matrice RACI pour un projet de migration vers le cloud. Formation, intégration et gestion de la nouvelle recrue.",
            country: "France",
            tags: [
              "Cloud",
              "Gestion des opérations",
              "Planning",
              "RACI",
              "Secteur public français"
            ],
            id: "3"
          },
          {
            name: "Sensibilisation à la confiance zéro",
            startDate: "2023-03-21",
            endDate: "2023-04-21",
            city: "Paris",
            description: "Présentation d'un microlearning sur la confiance zéro pour la communauté cybersécurité, qui a été re-présenté lors d'un événement mondial organisé par l'entreprise.",
            country: "France",
            tags: [
              "Cybersécurité",
              "Confiance zéro",
              "Confiance et sécurité numérique"
            ],
            id: "2"
          },
          {
            name: "Conseil pour un leader du développement international",
            startDate: "2022-10-18",
            endDate: "2022-12-01",
            city: "Nantes",
            description: "Rencontre avec les dirigeants régionaux et élaboration d'options permettant à l'entreprise de passer de prestataire de services à conseiller de confiance pour ses partenaires.",
            country: "France",
            tags: [
              "Conseil",
              "Recherche"
            ],
            id: "1"
          }
        ],
        engineering: [
          {
            name: "Développement de PGI et d'outils de SI",
            startDate: "2021-04-01",
            endDate: "2021-08-01",
            city: "Vienne",
            description: "Développement et amélioration d'outils internes PGI/SI avec une équipe de 4 ingénieurs en appliquant une méthodologie Agile avec Scrum. A agi comme un point de contact principal au sein de l'équipe de production. Automatisation de plus de 20 tests avec Postman et Azure DevOps CI/CD pipelines et rédaction de l'article correspondant.",
            country: "Autriche",
            tags: [
              "ERP",
              "Développement de logiciels",
              "Tests",
              "CI/CD",
              "Agile",
              "Scrum",
              "Postman",
              "Azure DevOps"
            ],
            id: "0"
          }
        ]
      }
    ]
  },
  experience: {
    title: "Expérience",
    quote: `"La seule source de connaissance"`,
    experiences: [
      {
        position: "Consultant en stratégie et transformation",
        company: "Capgemini Invent",
        city: "Paris",
        country: "France",
        startDate: "2023-01-16",
        endDate: "2023-07-13",
        logo: "capgemini-invent-logo.jpg",
        id: "1"
      },
      {
        position: "Ingénieur d'architecture de logiciel",
        company: "Mantu",
        city: "Vienne",
        country: "Autriche",
        startDate: "2021-04-01",
        endDate: "2021-08-01",
        logo: "mantu-logo.jpg",
        id: "0"
      }
    ]
  },
  education: {
    title: "Education",
    quote: `"On n'est jamais trop instruit"`,
    schools: [
      {
        logo: "harvard-university-logo.svg",
        startDate: "2022-06-01",
        degree: "Ecole d'été",
        fieldOfStudy: "Leadership & cybersécurité",
        endDate: "2022-07-01",
        name: "Harvard",
        id: "3"
      },
      {
        logo: "audencia-logo.jpg",
        startDate: "2022-02-01",
        degree: "MSc Management-Ingénierie",
        fieldOfStudy: "Management & Conseil",
        endDate: "2023-06-01",
        name: "Audencia",
        id: "2"
      },
      {
        logo: "bangor-university-logo.png",
        degree: "Semestre à l'étranger",
        fieldOfStudy: "Ingénierie électronique",
        endDate: "2019-12-01",
        name: "Université de Bangor",
        startDate: "2019-09-01",
        id: "1"
      },
      {
        logo: "ece-logo.jpg",
        degree: "Diplôme d'ingénieur",
        fieldOfStudy: "Systèmes d'information & cybersécurité",
        endDate: "2023-06-01",
        name: "ECE",
        startDate: "2018-03-01",
        id: "0"
      }
    ]
  }
}