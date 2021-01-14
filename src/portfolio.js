// Website related settings
const settings = {
  isSplash: false,
};

//Home Page
const greeting = {
  title: "Rogério Toledo",
  logo_name: "",
  nickname: "rogertjr",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "#",
  portfolio_repository: "https://github.com/rogertjr/portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rogertjr",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rogertjr/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rogertjr/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "DevImg",
      skills: [
        "⚡ Building resposive website front end using VueJS",
        "⚡ Developing mobile applications using React Native and native iOS apps using Swift",
        "⚡ Creating application backend in Laravel, NodeJS & Express",
      ],
      softwareSkills: [
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#8993be",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#42b883",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#fb503b",
          },
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  sections: [
    {
      title: "Companies",
      experiences: [
        {
          title: "iOS Developer",
          company: "Mobile2You",
          company_url: "https://www.mobile2you.com.br/",
          logo_path: "m2y_logo.png",
          duration: "Jan 2021 - PRESENT",
          location: "São Paulo, São Paulo",
          description: "Description.",
          color: "#0879bf",
        },
        {
          title: "Web Developer",
          company: "Mplan Sistemas",
          company_url: "https://www.mplansistemas.com.br",
          logo_path: "mplan_logo.png",
          duration: "May 2020 - Jan 2021",
          location: "Campinas, São Paulo",
          description: "Description.",
          color: "#0879bf",
        },
        {
          title: "Web Developer",
          company: "Guia-se Negócios Pela Internet",
          company_url: "https://www.guiase.com.br",
          logo_path: "guiase_logo.png",
          duration: "Jan 2015 - May 2018",
          location: "Indaiatuba, São Paulo",
          description: "Description.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "memoji.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  experience,
  projectsHeader,
  contactPageData,
};
