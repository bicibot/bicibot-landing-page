import React from "react";
import { Container, Box } from "@material-ui/core";
import SocialMedia from "../../components/SocialMedia";
import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import code from "../../assets/code.png";

const BackgroundContainer = styled(Box)`
  background-image: url(${code});
  height: 700px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
`;

export default function Implement() {
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
          <h1>
            Todo o código dos chatbots para você implementar na sua cidade
          </h1>
        </Box>
        <Box
          textAlign={"center"}
          color={"#9B9B9B"}
          fontSize={18}
          marginTop={5}
          paddingLeft={16}
          paddingRight={16}
        >
          <p style={{ marginBottom: "64px" }}>
            Todo o código dos chatbots está publicado com licença livre no
            GitHub do projeto.
          </p>
          <Button
            variant="purple"
            href="https://github.com/bicibot"
            size="lg"
          >
              Github
          </Button>
        </Box>
      </Container>
      <BackgroundContainer />
      <Container maxWidth="md">
        <Box
          textAlign={"center"}
          color={"#9B9B9B"}
          fontSize={18}
          marginTop={5}
          paddingLeft={16}
          paddingRight={16}
        >
          <p style={{ marginBottom: "64px" }}>
            O projeto tem sido carinhosamente hospedado pela Ameciclo -
            Associação Metropolitana de Ciclistas do Recife e teve recursos
            iniciais para o seu desenvolvimento aportados pela Escola de
            Ativismo. <br /> <br />
            Quer implementar a Bicibot na sua cidade? Se a funcionalidade que
            você quer é a mesma das existentes nas cidades de Recife ou São
            Paulo, é perfeitamente possível! Entre em contato com a gente para
            saber como fazer.
          </p>
        </Box>
      </Container>
      <SocialMedia />
    </>
  );
}
