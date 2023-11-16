import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { ImgGarra, ImgJornal, ImgPokedex } from "../../assets";
import { FaGithub } from "react-icons/fa";

import "./style.scss";

const DetailsScreen: React.FC = () => {
  const { state } = useLocation();
  const { id } = state;
  const navigate = useNavigate();

  const sendToProjects = () => {
    navigate("/projects");
  };

  const sendToGithub = () => {
    switch (id) {
      case 1:
        window.open("https://github.com/AthosEmanuel/prize-claw");
        break;
      case 2:
        window.open("https://github.com/AthosEmanuel/pokedex");
        break;
      case 3:
        window.open("https://github.com/AthosEmanuel/newspaper");
        break;
      default:
        break;
    }
  };

  return (
    <div className="detailsBody">
      {id === 1 ? (
        <>
          <h1>Prize Claw</h1>
          <img src={ImgGarra} height={340} alt="tela projeto garra" />
          <p>
            O projeto Prize Claw é uma aplicação interativa construída em React,
            notável pela ênfase na modularização do código para facilitar
            manutenção e expansão. A estrutura modulariza cada funcionalidade,
            como botões, a máquina de pegar prêmios e a área de entrada do nome,
            promovendo um código organizado e escalável.
          </p>
          <p>
            Destacando-se por oferecer uma experiência sonora, o projeto inclui
            música de fundo e ativa sons específicos ao pressionar os botões,
            aprimorando a interatividade e proporcionando feedback ao usuário.
          </p>
          <p>
            O jogo em si é simples e divertido, permitindo que os usuários
            controlem uma garra mecânica para pegar prêmios. Desenvolvido para
            ser responsivo, o projeto funciona eficazmente em navegadores web e
            dispositivos móveis, proporcionando uma experiência consistente e
            acessível em diversas plataformas.
          </p>
          <p>
            Ao término do jogo, os usuários têm a opção de inserir um nome
            personalizado, com um limite de três caracteres, agregando um toque
            personalizado à experiência global do jogador. Esses elementos
            combinados fazem do Prize Claw uma aplicação envolvente e cativante
            para os usuários.
          </p>
          <FaGithub size={30} onClick={sendToGithub} className="iconsStyle" />
        </>
      ) : id === 2 ? (
        <>
          <h1>Pokedex</h1>
          <img src={ImgPokedex} height={340} alt="tela projeto pokedex" />
          <p>
            O projeto Pokedex, desenvolvido em React, destaca-se pela
            modularização eficiente do código e pelo uso da biblioteca Axios
            para interagir com a API pública do Pokémon. Essa abordagem modular
            permite uma estrutura organizada, facilitando a manutenção e
            expansão futuras.
          </p>
          <p>
            A principal funcionalidade da Pokedex é consumir a API pública do
            Pokémon por meio do Axios, garantindo a obtenção de informações
            precisas e atualizadas. A modularização é evidente na separação de
            componentes para diferentes aspectos da aplicação, como exibição de
            detalhes do Pokémon, listagem e navegação.
          </p>
          <p>
            O uso da biblioteca Axios facilita as requisições HTTP,
            proporcionando uma comunicação eficaz com a API. A aplicação é capaz
            de exibir informações detalhadas sobre cada Pokémon, como tipo,
            habilidades e estatísticas, oferecendo uma experiência completa aos
            usuários.
          </p>
          <p>
            A Pokedex, além de modular e eficiente, destaca-se pela capacidade
            de fornecer dados precisos e atualizados dos Pokémon, graças à
            integração bem-sucedida com a API pública. Esse projeto ilustra a
            harmonia entre modularização e integração de bibliotecas para criar
            uma aplicação React robusta e funcional.
          </p>
          <FaGithub size={30} onClick={sendToGithub} className="iconsStyle" />
        </>
      ) : id === 3 ? (
        <>
          <h1>Fórum</h1>
          <img src={ImgJornal} height={340} alt="tela projeto forum" />
          <p>
            O projeto Fórum, desenvolvido em React, destaca-se pela sua
            arquitetura modularizada e pelo uso da biblioteca Axios para
            consumir uma API pública fictícia. O teste implementa uma estrutura
            organizada, dividindo componentes para melhor manutenção e
            escalabilidade.
          </p>
          <p>
            A aplicação simula um fórum, consumindo dados fictícios da API
            pública. O Axios facilita as requisições HTTP, possibilitando a
            obtenção de informações sobre posts e comentários de usuários de
            maneira eficiente. A modularização do código permite uma clara
            separação de responsabilidades, com componentes dedicados à exibição
            de posts, comentários e navegação.
          </p>
          <p>
            Apesar de os dados serem fictícios, o projeto Fórum ilustra de forma
            prática a integração entre React e Axios, proporcionando uma
            experiência realista de fórum online. A estrutura modular não apenas
            atende aos requisitos de teste, mas também estabelece uma base
            sólida para futuras expansões e melhorias na aplicação.
          </p>
          <FaGithub size={30} onClick={sendToGithub} className="iconsStyle" />
        </>
      ) : (
        <div></div>
      )}
      <Button
        text="Projetos"
        handleEvent={sendToProjects}
        customStyles={{ marginTop: 30 }}
      />
    </div>
  );
};

export default DetailsScreen;
