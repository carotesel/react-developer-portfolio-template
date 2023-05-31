import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    nodejs,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width md:pt-20 pb-20 md:pb-4">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-8">
          Mis Conocimientos
        </h1>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-14 pt-6 place-items-center">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />        
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={nodejs} title="Node JS" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
      </section>
    </main>
  );
}

export default Technologies;
