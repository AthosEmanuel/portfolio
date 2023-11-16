import React from "react";
import "./style.scss";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { ImgGarra, ImgJornal, ImgPokedex } from "../../assets";

const ProjectScreen: React.FC = () => {
  const navigate = useNavigate();

  const sendToHome = () => {
    navigate("/");
  };

  const sendToDetails1 = () => {
    navigate("/details", { state: { id: 1 } });
  };
  const sendToDetails2 = () => {
    navigate("/details", { state: { id: 2 } });
  };
  const sendToDetails3 = () => {
    navigate("/details", { state: { id: 3 } });
  };

  return (
    <body>
      <h1>Projetos</h1>
      <div className="contentWrapperProjects">
        <div className="imagemHover">
          <h2>Prize Claw (jogo da Garra)</h2>
          <img src={ImgGarra} height={340} alt="tela projeto garra" />
          <p>
            Esse e o classico jogo que tem nos shoppings, onde o jogador
            controla uma garra para pegar um premio.
          </p>
          <Button text="Detalhes" handleEvent={sendToDetails1} />
        </div>
        <div className="imagemHover">
          <h2>Pokedex</h2>
          <img src={ImgPokedex} height={300} alt="tela projeto pokedex" />
          <p>
            Com certeza pokemon marcou a sua infancia creio eu que você sabe o
            nome de varios, e aqui você tem uma biblioteca com varias
            informações com varios pokemons.
          </p>
          <Button text="Detalhes" handleEvent={sendToDetails2} />
        </div>
        <div className="imagemHover">
          <h2>Fórum</h2>
          <img src={ImgJornal} height={300} alt="tela projeto ó" />
          <p>
            Lembra dos foruns no inicio da internet, bem esse projeto e um
            daqueles sites que nos dao nostalgia daqueles anos.
          </p>
          <Button text="Detalhes" handleEvent={sendToDetails3} />
        </div>
      </div>
      <Button text="Voltar" handleEvent={sendToHome} />
    </body>
  );
};

export default ProjectScreen;
