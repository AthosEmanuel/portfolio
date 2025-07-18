import "./style.scss";

import { useLocation, useNavigate } from "react-router-dom";
import {
  ImgGarra,
  ImgJornal,
  ImgPokedex,
  ImgToDo,
  ImgTrivia,
} from "../../assets";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { Button } from "../../components";

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
      case 4:
        window.open("https://github.com/AthosEmanuel/to-do-project");
        break;
      case 5:
        window.open("https://github.com/AthosEmanuel/quiz");
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
          <label>
            Projeto rodando:
            <a
              href="https://pokedexathos.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: 10, marginBottom: 20 }}
            >
              https://pokedexathos.netlify.app/
            </a>
          </label>

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
      ) : id === 4 ? (
        <>
          <h1>TO DO </h1>
          <img src={ImgToDo} height={340} alt="tela projeto todo" />
          <p>
            O projeto Task Manager é uma aplicação fullstack desenvolvida com
            React no frontend e NestJS no backend, integrando tecnologias
            modernas para gerenciamento de tarefas. A arquitetura do sistema é
            organizada em duas camadas separadas —front e back — facilitando a
            manutenção e a escalabilidade da aplicação.
          </p>
          <p>
            No backend, o NestJS é utilizado em conjunto com Sequelize para
            interagir com o banco de dados de forma estruturada. A API expõe
            endpoints RESTful para operações de criação, leitura, atualização e
            exclusão de tarefas (CRUD), com validações feitas por DTOs e
            documentação completa gerada via Swagger. Cada tarefa possui campos
            como nome do usuário, título e descrição.
          </p>
          <p>
            O frontend em React consome essa API utilizando bibliotecas modernas
            de requisição HTTP, organizando os dados em componentes
            reutilizáveis. A aplicação permite ao usuário visualizar, cadastrar,
            editar e deletar tarefas, com uma interface responsiva e intuitiva.
            A separação entre os ambientes front e back proporciona maior
            clareza no desenvolvimento, além de permitir futuras integrações e
            expansões, como autenticação de usuários ou dashboard de
            produtividade.
          </p>

          <FaGithub size={30} onClick={sendToGithub} className="iconsStyle" />
        </>
      ) : id === 5 ? (
        <>
          <h1>Trivia</h1>
          <img src={ImgTrivia} height={340} alt="tela projeto trivia" />
          <p>
            O projeto Trivia é uma aplicação web desenvolvida com React e
            TypeScript, voltada para quizzes de conhecimentos gerais em inglês.
            Utilizando a API pública Open Trivia DB (OpenTDB), a aplicação
            fornece perguntas de múltipla escolha com categorias e níveis de
            dificuldade selecionáveis pelo usuário.
          </p>
          <p>
            A arquitetura é organizada em componentes reutilizáveis, com foco em
            clareza de código, separação de responsabilidades e experiência do
            usuário. O sistema permite que o usuário insira seu nome, escolha o
            tema (como ciência, esportes ou história) e a dificuldade (fácil,
            médio, difícil ou aleatória), respondendo a uma sequência de 10
            perguntas com feedback no final.
          </p>
          <p>
            A integração com a API é feita por meio de requisições HTTP
            assíncronas, garantindo fluidez na navegação entre as etapas. A
            interface foi projetada para ser responsiva e acessível, oferecendo
            uma experiência simples e direta tanto em desktop quanto em
            dispositivos móveis. O projeto também serve como base para evoluções
            futuras, como placar de rankings, salvamento de pontuação ou
            multiplayer.
          </p>
          <label>
            Projeto rodando:
            <a
              href="https://ttrivia.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: 10, marginBottom: 20 }}
            >
              https://ttrivia.netlify.app/
            </a>
          </label>
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
