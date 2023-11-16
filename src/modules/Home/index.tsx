import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const sendToAbout = () => {
    navigate("/about");
  };

  const sendToProjects = () => {
    navigate("/projects");
  };
  return (
    <body>
      <h1>Olá, eu sou o Athos </h1>
      <p>
        Sou desenvolvedor desde 2019, e durante esse período, adquiri
        experiência trabalhando com diversos frameworks, incluindo Angular, Node
        e Flutter. No entanto, é no React que possuo a maior expertise, tanto na
        versão web quanto na mobile
      </p>
      <p>
        Para explorar mais sobre minhas habilidades, clique no botão abaixo.
      </p>
      <Button
        text="Sobre mim"
        handleEvent={sendToAbout}
        customStyles={{ marginTop: 35 }}
      />
      <p>Para explorar mais sobre os meus projetos, clique no botão abaixo.</p>
      <Button
        text="Projetos"
        handleEvent={sendToProjects}
        customStyles={{ marginTop: 35 }}
      />
    </body>
  );
};

export default HomeScreen;
