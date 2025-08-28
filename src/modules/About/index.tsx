import "./style.scss";

import { Button } from "../../components";

import React from "react";
import { useNavigate } from "react-router-dom";

const AboutScreen: React.FC = () => {
  const navigate = useNavigate();

  const sendToHome = () => {
    navigate("/");
  };

  return (
    <body>
      <h1>Sobre</h1>
      <div
        className="aboutText"
        style={{ maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}
      >
        <p>
          Desenvolvedor Frontend desde 2019, especializado em React, React
          Native, TypeScript e Next.js. Tenho sólida experiência na construção
          de aplicações web e mobile modernas, com foco em performance,
          escalabilidade e excelente experiência do usuário.
        </p>

        <p style={{ marginTop: 20 }}>
          Minha jornada passou por empresas como Rethink, Fobbi e Medical Pay.
          Nessas experiências, atuei de ponta a ponta no desenvolvimento,
          aplicando práticas de componentização, clean code, testes
          automatizados, CI/CD e metodologias ágeis para garantir entregas
          rápidas e consistentes.
        </p>

        <p style={{ marginTop: 20 }}>
          Também possuo conhecimento em backend com Node.js e NestJS, o que me
          permite compreender o ciclo completo de uma aplicação. Domino
          Git/GitHub, SSR e CSR com Next.js, além de boas práticas de UI/UX para
          transformar ideias em interfaces intuitivas. Tenho inglês técnico
          sólido e grande interesse em Inteligência Artificial, área que venho
          estudando para aplicar em soluções digitais inovadoras.
        </p>

        <p style={{ marginTop: 20 }}>
          Estou sempre em busca de novos desafios que me permitam evoluir
          profissionalmente e contribuir com produtos de alto impacto, unindo
          tecnologia, inovação e visão de negócio.
        </p>
      </div>

      <Button text="Voltar" handleEvent={sendToHome} />
    </body>
  );
};

export default AboutScreen;
