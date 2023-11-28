export default {
  navbar: {
    home: 'Inicio',
    about: 'Sobre mi',
    projects: 'Proyectos',
    experience: 'Experiencia',
    education: 'Educación'
  },
  footer: {
    copyright: "Hecho por ",
  },
  hero: {
    greeting: "Hola,",
    name: "Soy Ben.",
    position: "Consultor de estrategia de día,",
    firstTitle: "ingeniero de ciberseguridad",
    secondTitle: "desarrollador de software",
    thirdTitle: "desarrollador web",
    endQuote: "de noche.",
    objective: "Consultoría y desarrollo de proyectos seguros para humanos en el mundo.",
  },
  about: {
    title: "Sobre mi",
    quote: `"Equilibrio entre seguridad y comodidad"`,
    description: `<p>Soy <strong class="highlighted-content">Consultor de Estrategia y Transformación</strong> centrado en proyectos de <strong class="highlighted-content">ciberseguridad</strong> y <strong class="highlighted-content">cloud</strong>. Acompaño a los clientes en sus diseños de marcos de seguridad y migraciones a la nube. Tengo doble titulación de máster respectivamente en <strong class="highlighted-content">ingeniería de ciberseguridad</strong> y <strong class="highlighted-content">consultoría de gestión.</strong> Con los conocimientos y las herramientas de estos mundos, <strong class="highlighted-content">protejo a mis clientes de los ciberdelincuentes en sus operaciones diarias.</strong>
    </p><p> Soy dinámico, analítico y optimizo constantemente mis métodos. El deseo de adquirir más conocimientos me llevó a trabajar en varios países, entre ellos <strong class="highlighted-content">Estados Unidos, Francia y Austria.</strong></p>`,
  },
  projects: {
    title: "Proyectos destacados",
    quote: `"La suma de esfuerzos repetidos"`,
    firstTab: "Consultoría",
    secondTab: "Ingeniería",
    featured: [
      {
        consulting: [
          {
            name: "Migración cloud para un líder bancario",
            startDate: "2023-01-16",
            endDate: "2023-04-24",
            city: "Luxemburgo",
            description: "Dirección un consejo de proyecto de migración a la nube para un líder bancario. Identificación de opciones clave para reducir el consumo presupuestario. Seguimiento de los planes de acción en cooperación con más de 8 colaboradores.",
            country: "Luxemburgo",
            tags: [
              "Cloud",
              "Gestión de operaciones",
              "Power BI",
              "Análisis presupuestario",
              "Banco"
            ],
            id: "5"
          },
          {
            name: "Marco de riesgos cibernéticos para un grupo de lujo",
            startDate: "2023-04-22",
            endDate: "2023-06-16",
            city: "París",
            description: "Desarrollo de formaciones sobre el marco de riesgos de ciberseguridad para un grupo de lujo. Definición de comités de gobernanza de riesgos multinivel y revisión de la metodología FAIR para la cuantificación de riesgos.",
            country: "Francia",
            tags: [
              "Ciberseguridad",
              "Gobernanza",
              "ISO27005",
              "FAIR",
              "Gestión de riesgos cibernéticos",
              "Lujo"
            ],
            id: "4"
          },
          {
            name: "Planificación de la migración cloud en el sector público",
            startDate: "2023-06-12",
            endDate: "2023-07-13",
            city: "París",
            description: "Elaboración de planes y de la matriz RACI para un próximo proyecto de migración a la nube. Formación, incorporación y gestión de los nuevos miembros del equipo.",
            country: "Francia",
            tags: [
              "Cloud",
              "Gestión de operaciones",
              "Planificación",
              "RACI",
              "Sector público francés"
            ],
            id: "3"
          },
          {
            name: "Concienciación de confianza cero",
            startDate: "2023-03-21",
            endDate: "2023-04-21",
            city: "París",
            description: "Presentación de un microaprendizaje de confianza cero para la comunidad de confianza y seguridad digital que se volvió a presentar durante un evento de ciberseguridad global de la empresa.",
            country: "Francia",
            tags: [
              "Ciberseguridad",
              "Confianza cero",
              "Confianza y seguridad digital"
            ],
            id: "2"
          },
          {
            name: "Consultoría para un líder de desarollo international",
            startDate: "2022-10-18",
            endDate: "2022-12-01",
            city: "Nantes",
            description: "Reunión con los líderes regionales y desarrollo de opciones para que la empresa pase de ser un proveedor de servicios a un asesor de confianza para sus socios.",
            country: "Francia",
            tags: [
              "Consultoría",
              "Investigación"
            ],
            id: "1"
          }
        ],
        engineering: [
          {
            name: "Desarrollo del ERP y de las herramientas de sistemas de información",
            startDate: "2021-04-01",
            endDate: "2021-08-01",
            city: "Viena",
            description: "Desarrollo y optimización de las herramientas internas ERP/IS con un equipo de 4 ingenieros aplicando una metodología Agile con Scrum. Actué como principal punto de contacto dentro del equipo de producción. Automatización de más de 20 pruebas con Postman y Azure DevOps CI/CD pipelines y escribí el artículo asociado.",
            country: "Austria",
            tags: [
              "ERP",
              "Desarrollo de software",
              "Preubas",
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
    title: "Experiencia",
    quote: `"La única fuente del conocimiento"`,
    experiences: [
      {
        position: "Consultor de Estrategia y Transformación",
        company: "Capgemini Invent",
        city: "París",
        country: "Francia",
        startDate: "2023-01-16",
        endDate: "2023-07-13",
        logo: "capgemini-invent-logo.jpg",
        id: "1"
      },
      {
        position: "Ingeniero de Arquitectura de Software",
        company: "Mantu",
        city: "Viena",
        country: "Austria",
        startDate: "2021-04-01",
        endDate: "2021-08-01",
        logo: "mantu-logo.jpg",
        id: "0"
      }
    ]
  },
  education: {
    title: "Educación",
    quote: `"Nunca se educa demasiado"`,
    schools: [
      {
        logo: "harvard-university-logo.svg",
        startDate: "2022-06-01",
        degree: "Escuela de verano",
        fieldOfStudy: "Liderazgo & ciberseguridad",
        endDate: "2022-07-01",
        name: "Harvard",
        id: "3"
      },
      {
        logo: "audencia-logo.jpg",
        startDate: "2022-02-01",
        degree: "MSc Gestión-Ingeniería",
        fieldOfStudy: "Gestión & consultoría",
        endDate: "2023-06-01",
        name: "Audencia",
        id: "2"
      },
      {
        logo: "bangor-university-logo.png",
        degree: "Estudios en el extranjero",
        fieldOfStudy: "Ingeniería Electrónica",
        endDate: "2019-12-01",
        name: "Universidad de Bangor",
        startDate: "2019-09-01",
        id: "1"
      },
      {
        logo: "ece-logo.jpg",
        degree: "Título de Ingeniero",
        fieldOfStudy: "Sistemas de información & ciberseguridad",
        endDate: "2023-06-01",
        name: "ECE",
        startDate: "2018-03-01",
        id: "0"
      }
    ]
  }
}