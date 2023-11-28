export default {
  navbar: {
    home: 'Home',
    about: 'About Me',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education'
  },
  footer: {
    copyright: "Made by ",
  },
  hero: {
    greeting: "Hi,",
    name: "I'm Ben.",
    position: "Strategy consultant by day,",
    firstTitle: "cybersecurity engineer",
    secondTitle: "software developer",
    thirdTitle: "web developer",
    endQuote: "by night.",
    objective: "Consulting and developing secure projects for humans around the world.",
  },
  about: {
    title: "About Me",
    quote: `"Balancing security and convenience"`,
    description: `<p>I am a <strong class="highlighted-content">Strategy and Transformation Consultant</strong> focusing on <strong class="highlighted-content">cybersecurity</strong> and <strong class="highlighted-content">cloud</strong> projects. I accompany clients on their security framework designs and cloud migrations. I hold dual master's degrees respectively in <strong class="highlighted-content">cybersecurity engineering</strong> and <strong class="highlighted-content">management consulting.</strong> With the knowledge and tools of these worlds, <strong class="highlighted-content">I protect my clients from cybercriminals in their daily operations.</strong></p><p> I am dynamic, analytical and I am constantly optimizing my methods. My insatiable hunger for knowledge has led me to work in various countries such as <strong class="highlighted-content">USA, France and Austria.</strong></p>`,
  },
  projects: {
    title: "Featured Projects",
    quote: `"The sum of repeated efforts"`,
    firstTab: "Consulting",
    secondTab: "Engineering",
    featured: [
      {
        consulting: [
          {
            name: "Cloud Migration for a Banking Leader",
            startDate: "2023-01-16",
            endDate: "2023-04-24",
            city: "Luxembourg",
            description: "Steered a cloud migration project board for a banking leader. Identified key options for reducing budget consumption. Followed up with action plans in cooperation with 8+ collaborators.",
            country: "Luxembourg",
            tags: [
              "Cloud",
              "Operations Management",
              "Power BI",
              "Budget Analysis",
              "Banking"
            ],
            id: "5"
          },
          {
            name: "Cyber Risk Framework for a Luxury Giant",
            startDate: "2023-04-22",
            endDate: "2023-06-16",
            city: "Paris",
            description: "Developed cybersecurity risk framework trainings for a luxury goods group. Defined multilevel risk governance committees and reviewed FAIR methodology for risk quantification.",
            country: "France",
            tags: [
              "Cybersecurity",
              "Governance",
              "ISO27005",
              "FAIR",
              "Cyber Risk Management",
              "Luxury"
            ],
            id: "4"
          },
          {
            name: "Cloud Migration Planning in the Public Sector",
            startDate: "2023-06-12",
            endDate: "2023-07-13",
            city: "Paris",
            description: "Elaborated plannings and RACI matrix for an upcoming cloud migration project. Trained, onboarded and managed newest recruit.",
            country: "France",
            tags: [
              "Cloud",
              "Operations Management",
              "Planning",
              "RACI",
              "French Public Sector"
            ],
            id: "3"
          },
          {
            name: "Zero Trust Awareness",
            startDate: "2023-03-21",
            endDate: "2023-04-21",
            city: "Paris",
            description: "Presented a Zero Trust microlearning for the Digital Trust & Security community which was re-presented during a company global cybersecurity event.",
            country: "France",
            tags: [
              "Cybersecurity",
              "Zero Trust",
              "Digital Trust & Security"
            ],
            id: "2"
          },
          {
            name: "Consulting for a Global Development Leader",
            startDate: "2022-10-18",
            endDate: "2022-12-01",
            city: "Nantes",
            description: "Met with the regional leaders and developed options for the global development consulting firm to shift position from a service provider to a trusted advisor in the eyes of its partners.",
            country: "France",
            tags: [
              "Consulting",
              "Research"
            ],
            id: "1"
          }
        ],
        engineering: [
          {
            name: "ERP and Information Systems Tools Development",
            startDate: "2021-04-01",
            endDate: "2021-08-01",
            city: "Vienna",
            description: "Developed and improved ERP/IS internal tools with a team of 4 engineers while applying an Agile with Scrum methodology. Acted as a main point of contact within the Production team. Automated 20+ tests with Postman and Azure DevOps CI/CD pipelines and wrote the related article.",
            country: "Austria",
            tags: [
              "ERP",
              "Software Development",
              "Testing",
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
    title: "Experience",
    quote: `"The only source of knowledge"`,
    experiences: [
      {
        startDate: "2023-01-16",
        city: "Paris",
        endDate: "2023-07-13",
        company: "Capgemini Invent",
        position: "Strategy and Transformation Consultant",
        country: "France",
        logo: "capgemini-invent-logo.jpg",
        id: "1"
      },
      {
        country: "Austria",
        company: "Mantu",
        city: "Vienna",
        position: "Associate Software Architecture Engineer",
        startDate: "2021-04-01",
        endDate: "2021-08-01",
        logo: "mantu-logo.jpg",
        id: "0"
      }
    ]
  },
  education: {
    title: "Education",
    quote: `"One can never be overeducated"`,
    schools: [
      {
        logo: "harvard-university-logo.svg",
        startDate: "2022-06-01",
        degree: "Summer School",
        fieldOfStudy: "Leadership & Cybersecurity",
        endDate: "2022-07-01",
        name: "Harvard University",
        id: "3"
      },
      {
        logo: "audencia-logo.jpg",
        startDate: "2022-02-01",
        degree: "MSc Management-Engineering",
        fieldOfStudy: "Management & Consulting",
        endDate: "2023-06-01",
        name: "Audencia Business School",
        id: "2"
      },
      {
        logo: "bangor-university-logo.png",
        degree: "Study Abroad Program",
        fieldOfStudy: "Electronic Engineering",
        endDate: "2019-12-01",
        name: "Bangor University",
        startDate: "2019-09-01",
        id: "1"
      },
      {
        logo: "ece-logo.jpg",
        degree: "Engineer's degree",
        fieldOfStudy: "Information Systems & Cybersecurity",
        endDate: "2023-06-01",
        name: "ECE",
        startDate: "2018-03-01",
        id: "0"
      }
    ]
  }
}