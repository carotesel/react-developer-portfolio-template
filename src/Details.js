// Enter all your detials in this file
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import nodejs from "./assets/techstack/nodejs.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import LockitImage from "./assets/projects/Lockit.png";
import FoodieImage from "./assets/projects/Foodie2.png";
import MovieImage from "./assets/projects/movieFinder.png";


// Enter your Personal Details here
export const personalDetails = {
  name: "Carolina",
  tagline: "Hago desarrollo FrontEnd.",
  img: profile,
  about: `Soy una developer apasionada por los retos y las nuevas tecnologías.Me especializo en el area de front end aunque puedo trabajar como full stack. Además soy altamente comunicativa e intento aportar valor a cada producto que veo.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "FrontEnd Developer",
    Company: `SOUTHWORKS`,
    Location: "Capital Federal",
    Type: "Pasantía",
    Duration: "Oct. 2022 - Dic. 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Ingeniería en Informática",
    Company: `UCEMA`,
    Location: "Capital Federal",
    Duration: "Mar. 2023 - Actualidad",
    Type: "Universidad",
  },
  {
    Position: "Secundario con orientación en Informática",
    Company: `ORT`,
    Location: "Capital Federal",
    Duration: "Mar. 2018 - Nov. 2022",
    Type: "Secundaria",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  nodejs: nodejs,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "LOCKIT App",
    image: LockitImage,
    description: `Lockit es una aplicación de alquiler temporal de lockers que hicimos con mis compañeras como proyecto final para la secundaria ORT.`,
    techstack: "React Native, Node Js, PostreSQL",
    previewLink: "https://www.figma.com/proto/9MshguFTa4N8meLAmz4Wn0/LOCKIT-WIREFRAME-%26-PROTOTYPE?node-id=289-681&scaling=scale-down&page-id=112%3A2&starting-point-node-id=136%3A316",
    githubLink: "https://github.com/carotesel/Lockit-Frontend.git",
  },
  {
    title: "Foodie Landing Page",
    image: FoodieImage,
    description: `Esta es una Landing Page para un restaurante llamado Foodie. Utiliza estructuras de React y estiliza los componentes con CSS.`,
    techstack: "HTML/CSS, ReactJS",
    previewLink: "https://landing-react.vercel.app/",
    githubLink: "https://github.com/carotesel/landingReact",
  },
  {
    title: "Movie Finder",
    image: MovieImage,
    description: `Este es un trabajo que realicé durante el secundario para la materia EFSI. En él, aprendimos a consumir datos de una API en React con Axios y a mostrar la información en el sitio con cards y un scroller.`,
    techstack: "HTML/CSS, React Js",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "caroteselmann@gmail.com",
  phone: "+54 9112272 4849",
};
