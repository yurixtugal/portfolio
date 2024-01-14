const heroSection = {
  title: 'Hello, I am Yuri Portugal',
  content: `a Software Engineer with 10 years experience, my expertise extends across AWS, Node.js, Vue.js, React, Next.js, and TypeScript. My professional journey is marked by successfully leading projects where I've excelled in devising innovative solutions and fostering effective collaboration among teams and clients. Holding a degree in Informatics Engineering, my passion lies in full-stack development and cloud computing. I consistently aim to merge these advanced technical skills to develop solutions that are not only impactful but also closely aligned with user needs and practicality.`,
  button: 'Contact me',
  image: '/yurixtugal.jpg'
}

const navBar = {
  logo: 'Yuri Portugal',
  links: [
    {
      name: 'About',
      path: '#about',
    },  
    {
      name: 'Experience',
      path: '#experience',
    },
    {
      name: 'Projects',
      path: '#projects'
    }
  ]
}

const experienceSection = [
  {
    year: 'Aug 2022 - Present',
    title: 'Software Engineer',
    company: 'Central Time Developers',
    description: `As a Software Engineer at Central Time Developers, I support the Simply360 project, a pivotal web application for centralized customer data management. My key contributions included leading the project's inception, integrating AWS Amplify for seamless deployment, and developing robust user authentication with AWS Cognito. I played a crucial role in backend development using AWS Lambda and enhancing the frontend experience with PrimeVue of Vue.js. Additionally, I implemented performance optimizations and collaborated effectively using Scrum methodology. Technologies used: Vue.js, AWS Amplify, Cognito, Lambda, RDS, and S3.`
  },
  {
    year: 'May 2020 - Jul 2022',
    title: 'IT Solutions Professional',
    company: 'Pontifical Catholic University of Perú',
    description: `
    As an IT Solutions Professional at the Pontifical Catholic University of Peru, I led and documented various software projects for academic and administrative sectors. My roles included analyzing and designing software solutions, coordinating the software development lifecycle, and defining technology stacks. I mentored junior developers, oversaw error resolution and testing for quality assurance, and supervised the development team during projects. I was responsible for adhering to development standards, creating SQL reports for data analytics, and implementing custom software solutions that enhanced university productivity. Key projects included integrating Orcid and Campus Virtual, managing Professor's Contract Addenda, and developing the Professor Work Plan.`
  },
  {
    year: 'Jul 2015 - Apr 2020',
    title: 'Systems Analyst I',
    company: 'Pontifical Catholic University of Perú',
    description: `As a System Analyst I at the Pontifical Catholic University of Peru, I played a pivotal role in project management, focusing on designing and implementing software solutions for academic and administrative departments. My responsibilities included analyzing user requirements, conducting unit and integration tests for quality assurance, and presenting software to end-users, integrating their feedback for improvements. I managed the deployment of software to production, ensuring compliance with standards and addressing errors for optimal system performance. Key projects I deployed included Web services for professor websites, Research Groups Management and Evaluation, Social Responsibility Fund, and Teaching Innovation Fund.`
  },
  {
    year: 'Aug 2013 - Jun 2015',
    title: 'Systems Analyst II',
    company: 'Pontifical Catholic University of Perú',
    description: `As a System Analyst II at the Pontifical Catholic University of Peru, I specialized in analyzing user requirements and developing software solutions using a diverse tech stack including Java, Oracle, PL/SQL, Web services, JavaScript, and Springboot. My responsibilities encompassed conducting unit and integration tests to guarantee high-quality outputs, presenting these software solutions to end-users, and refining them based on their feedback. I was in charge of deploying software to production, ensuring it functioned correctly and met established standards. Additionally, I managed and resolved errors efficiently to maintain optimal system performance.`
  },
  {
    year: 'Jun 2012 - Jul 2013',
    title: 'Programmer',
    company: 'DIGITRO',
    description: 'Implement software using Java and GWT technology for Public Security System Intelletotum.'
  }
]

const footerSection = {
  linkedin: 'https://www.linkedin.com/in/yuri-portugal/',
  github: 'https://github.com/yurixtugal'
}

const projectsPerson = [
  {
    title: "Draft-DB",
    description: "Draft-DB is an open source project to help developers to find database models for their projects and scripts to create the database. All the models are generate with AI and are comming more models in the future, the project is open source and free to use.",
    image: "/draft-db.png",
    github: "https://github.com/yurixtugal/draft-db",
    link: "https://draft-db.vercel.app/",
    tech: ["Next.js", "Tailwind", "Mysql", "Typescript","Shadcn","Mermaid"]
  },
  {
    title: "Rock Store",
    description: "E-commerce for any rock store. This project is can support any rock store to sell their products online. The project is open source and free to use.",
    image: "/e-commerce.png",
    github: "https://github.com/yurixtugal/e-commerce",
    link: "https://e-commerce-store-wheat.vercel.app",
    tech: ["Next.js", "Tailwind", "Mysql", "Typescript","Shadcn"]
  },
]

export { heroSection, navBar, experienceSection, footerSection, projectsPerson }