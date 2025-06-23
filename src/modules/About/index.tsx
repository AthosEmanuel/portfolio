import "./style.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button, Span } from "../../components";

import React from "react";
import { useNavigate } from "react-router-dom";

const AboutScreen: React.FC = () => {
  const navigate = useNavigate();

  const sendToHome = () => {
    navigate("/");
  };

  const sendToGithub = () => {
    window.open("https://github.com/AthosEmanuel/");
  };
  const sendToLinkedin = () => {
    window.open("https://www.linkedin.com/in/athos-emanuel-5a1895150/");
  };

  return (
    <body>
      <h1>Sobre</h1>
      <div className="contentWrapper">
        <div
          className="aboutText"
          style={{ maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}
        >
          <p>
            Olá, sou desenvolvedor desde 2019, com uma trajetória marcada pela
            evolução constante e pela paixão por criar soluções inteligentes.
            Iniciei minha carreira com Java e Bootstrap, e rapidamente expandi
            meus conhecimentos para frameworks modernos como Angular e
            TypeScript. Ao longo dos anos, encontrei no React — tanto web quanto
            mobile — a ferramenta ideal para transformar ideias em interfaces
            dinâmicas, escaláveis e de alta performance.
          </p>

          <p style={{ marginTop: 20 }}>
            Além do React, aprofundei minhas habilidades em Node.js, meu
            framework de backend preferido, e tive experiências enriquecedoras
            com Flutter Web e NestJS. Atuei em empresas como Fobbi, IN8 e
            Medical Pay, e também como freelancer em projetos desafiadores e
            diversos, sempre focado na componentização, clean code, consumo de
            APIs REST e entrega ágil.
          </p>

          <p style={{ marginTop: 20 }}>
            Meu stack atual me permite atuar de ponta a ponta no desenvolvimento
            de sistemas modernos. Domino JavaScript, TypeScript, React, React
            Native, Node.js, SQL, HTML, CSS e ferramentas complementares como
            Git, Figma e metodologias ágeis. Estou sempre em busca de novos
            aprendizados e desafios que me permitam evoluir tecnicamente e
            contribuir com produtos de alto impacto.
          </p>
        </div>

        <div className="skillsText">
          <h2>Linguagens e Frameworks</h2>
          <Span text="JavaScript" />
          <Span text="TypeScript" />
          <Span text="HTML/CSS" />
          <Span text="React" />
          <Span text="NodeJS" />
          <Span text="Github/Git" />
          <Span text="Boostrap CSS" />
          <Span text="Java" />
          <Span text="JQuery" />
          <Span text="SQL" />
          <Span text="Angular" />
          <h2>GitHub</h2>
          <FaGithub size={30} onClick={sendToGithub} className="iconsStyle" />
          <h2>Linkedin</h2>

          <FaLinkedin
            size={30}
            onClick={sendToLinkedin}
            className="iconsStyle"
          />

          <h2>Email</h2>
          <h3 className="iconsStyle">athosevm@gmail.com</h3>
        </div>
      </div>
      <Button text="Voltar" handleEvent={sendToHome} />
    </body>
  );
};

export default AboutScreen;
