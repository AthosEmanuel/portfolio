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
    <div
      className="home-container"
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>Athos</h1>
      <h2>Front-end Developer desde 2019</h2>
      <p style={{ marginTop: 20 }}>
        Desenvolvedor front-end com experiência desde 2019, atuando em projetos
        web e mobile para empresas como Fobbi, IN8, e Medical Pay. Ao longo da
        minha trajetória, trabalhei com diversas tecnologias como Angular,
        Node.js, Flutter e NestJS. No entanto, minha principal especialidade é
        com React e React Native, com foco na construção de interfaces modernas,
        performáticas e componentizadas.
      </p>

      <p style={{ marginTop: 20 }}>
        Clique abaixo para conhecer mais sobre meu perfil profissional.
      </p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 25 }}>
        <Button
          text="Sobre mim"
          handleEvent={sendToAbout}
          customStyles={{ marginBottom: 10 }}
        />
      </div>

      <p style={{ marginTop: 20 }}>
        Ou, se preferir, explore alguns dos projetos que desenvolvi
        recentemente.
      </p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 25 }}>
        <Button text="Projetos" handleEvent={sendToProjects} />
      </div>
    </div>
  );
};

export default HomeScreen;
