import "./style.scss";

import {
  ImgGarra,
  ImgJornal,
  ImgPokedex,
  ImgToDo,
  ImgTrivia,
} from "../../assets";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

const ProjectScreen: React.FC = () => {
  const navigate = useNavigate();

  const sendToHome = () => {
    navigate("/");
  };

  const sendToDetails = (id: any) => {
    navigate("/details", { state: { id: id } });
  };

  return (
    <body>
      <h1>Projetos</h1>
      <div className="contentWrapperProjects">
        <div className="imagemHover">
          <h2>Trivia</h2>
          <img src={ImgTrivia} height={340} alt="tela da aplicação Trivia" />
          <p>
            Aplicação web desenvolvida para responder quizzes de conhecimentos
            gerais em inglês. Permite escolher nome, tema e nível de
            dificuldade, apresentando perguntas de múltipla escolha em
            sequência, com resultado final ao término do jogo. Desenvolvida com
            React e TypeScript, com foco em componentização, integração com API
            pública (OpenTDB) e boas práticas de usabilidade
          </p>
          <Button text="Detalhes" handleEvent={() => sendToDetails(5)} />
        </div>

        <div className="imagemHover">
          <h2>TO DO (Lista de Tarefas)</h2>
          <img src={ImgToDo} height={340} alt="tela da aplicação To Do" />
          <p>
            Aplicação web desenvolvida para gerenciamento de tarefas diárias.
            Permite criar, editar, concluir e excluir tarefas, oferecendo uma
            interface limpa e intuitiva. Desenvolvida com React, com foco em
            componentização, organização e boas práticas de usabilidade.
          </p>
          <Button text="Detalhes" handleEvent={() => sendToDetails(4)} />
        </div>

        <div className="imagemHover">
          <h2>Prize Claw (jogo da Garra)</h2>
          <img src={ImgGarra} height={340} alt="tela projeto garra" />
          <p>
            Este é o clássico jogo encontrado em shoppings, no qual o
            participante assume o controle de uma garra em uma tentativa de
            capturar um prêmio.
          </p>
          <Button text="Detalhes" handleEvent={() => sendToDetails(1)} />
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
          <Button text="Detalhes" handleEvent={() => sendToDetails(2)} />
        </div>
        <div className="imagemHover">
          <h2>Fórum</h2>
          <img src={ImgJornal} height={300} alt="tela projeto ó" />
          <p>
            Lembra-se dos fóruns no início da internet? Bem, este projeto é um
            desses sites que nos trazem nostalgia daquela época.
          </p>
          <Button text="Detalhes" handleEvent={() => sendToDetails(3)} />
        </div>
      </div>
      <Button text="Voltar" handleEvent={sendToHome} />
    </body>
  );
};

export default ProjectScreen;
