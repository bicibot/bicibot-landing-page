import React from "react";
import { Container, Box } from "@material-ui/core";
import styled from "styled-components";
import c from "../../assets/1.png";
import b from "../../assets/2.png";
import SocialMedia from "../../components/SocialMedia";

const BackgroundContainer = styled(Box)`
  background-image: url(${c});
  height: 700px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
`;

const Recife = styled.div`
  background-image: url(${b});
  height: 700px;
  width: 710px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
`;

export default function About() {
  return (
    <>
      <Container maxWidth="md">
        <Box
          m={4}
          textAlign={"center"}
          color={"#5a31f8"}
          fontSize={26}
          marginTop={12}
        >
          <h1>Damos voz a ciclistas para que falem de seus problemas</h1>
        </Box>
        <Box
          textAlign={"center"}
          color={"#9B9B9B"}
          fontSize={18}
          marginTop={5}
          paddingLeft={16}
          paddingRight={16}
        >
          <p>
            O dia a dia de quem usa a bicicleta é marcado pela violência no
            trânsito e pela falta de infraestrutura segura. Para conseguir
            diagnosticar com dados essa realidade, ciclistas de Recife e São
            Paulo se uniram para desenvolver o projeto da bicibot.
          </p>
        </Box>
      </Container>
      <BackgroundContainer />
      <Container maxWidth="md">
        <Box
          textAlign={"center"}
          color={"#9B9B9B"}
          fontSize={18}
          marginTop={5}
          paddingLeft={4}
          paddingRight={4}
        >
          <p>
            A bicibot é uma assistente virtual que utiliza a inteligência
            artificial por meio de chatbot e tem como objetivo dar voz a
            ciclistas das duas cidades sobre os principais problemas de
            segurança viária a que são submetidos cotidianamente.
            <br /> <br />O objetivo da plataforma é quantificar e qualificar as
            incidências relacionadas ao uso da bicicleta por ciclistas. As
            cidades contempladas possuem diferentes propósitos para dimensionar
            a realidade de quem usa a bicicleta diariamente.
          </p>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginTop="60px"
          textAlign="center"
        >
          <h2
            style={{
              color: "#5A31F8",
              fontSize: "42px",
              lineHeight: "42px"
            }}
          >
            Recife
          </h2>
          <p style={{ color: "#9B9B9B", fontSize: "18px", padding: "50px" }}>
            Em Recife, a chatbot tem como foco denunciar motoristas
            profissionais de ônibus e táxis que desrespeitam a vida de
            ciclistas. A cada denúncia realizada o número contribui para a
            construção do ranking de maus motoristas.
          </p>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginTop="60px"
          textAlign="center"
        >
          <h2
            style={{
              color: "#5A31F8",
              fontSize: "42px",
              lineHeight: "42px"
            }}
          >
            São Paulo
          </h2>
          <p style={{ color: "#9B9B9B", fontSize: "18px", padding: "50px" }}>
            Em São Paulo, o propósito é registrar as denúncias de invasão às
            ciclovias e ciclofaixas já existentes e contabilizar a demanda por
            manutenção.
          </p>
        </Box>
      </Container>
      <Container maxWidth="md">
        <SocialMedia />
      </Container>
    </>
  );
}
