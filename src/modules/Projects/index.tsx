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
            Este é o clássico jogo encontrado em shoppings, no qual o
            participante assume o controle de uma garra em uma tentativa de
            capturar um prêmio.
          </p>
          <Button text="Detalhes" handleEvent={sendToDetails1} />
        </div>
        <div className="imagemHover">
          <h2>Pokedex</h2>
          <img src={ImgPokedex} height={300} alt="tela projeto pokedex" />
          <p>
            Certamente, Pokémon deixou uma marca inesquecível em sua infância.
            Eu acredito que você conhece muitos deles, e agora, você tem à
            disposição uma biblioteca repleta de informações sobre diversos
            Pokémon.
          </p>
          <Button text="Detalhes" handleEvent={sendToDetails2} />
        </div>
        <div className="imagemHover">
          <h2>Fórum</h2>
          <img src={ImgJornal} height={300} alt="tela projeto ó" />
          <p>
            Lembra-se dos fóruns no início da internet? Bem, este projeto é um
            desses sites que nos trazem nostalgia daquela época.
          </p>
          <Button text="Detalhes" handleEvent={sendToDetails3} />
        </div>
      </div>
      <Button text="Voltar" handleEvent={sendToHome} />
    </body>
  );
};

export default ProjectScreen;
