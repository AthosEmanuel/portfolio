import React from "react";
import "./style.scss";
import { Button, Span } from "../../components";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
        <div className="aboutText">
          <p>
            Olá, sou um desenvolvedor desde 2019, iniciando minha trajetória com
            Java e Bootstrap. Em 2020, após um ano dedicado ao aprendizado,
            realizei a transição para o Angular TypeScript. Posteriormente,
            aprofundei-me no universo do React, onde descobri a ferramenta que
            mais aprecio para desenvolver. Ao longo do caminho, também explorei
            o Flutter Web e o Node.js, sendo este último meu framework de
            backend preferido para aplicar em meus projetos.
          </p>
          <p>
            Durante minha carreira, adquiri habilidades abrangentes em diversas
            linguagens de programação e frameworks, resultando na entrega de
            soluções eficientes e na colaboração em projetos de grande
            relevância. Minha paixão pela tecnologia me impulsiona a buscar
            constantemente novos desafios, visando aprimorar minhas habilidades
            e contribuir para o sucesso de projetos inovadores. Estou
            entusiasmado com as oportunidades que o futuro reserva e empenhado
            em continuar evoluindo como profissional da área de desenvolvimento.
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
