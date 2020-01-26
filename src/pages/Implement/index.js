import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "@material-ui/core";
import SocialMedia from "../../components/SocialMedia";
import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import code from "../../assets/code.png";

const BackgroundContainer = styled(Box) `
  background-image: url(${code});
  height: 700px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
`;

const HeaderTextContainer = styled.div`
  color: rgb(90, 49, 248);
  font-size: 26px;
  text-align: center;
  margin: 96px 32px 32px;
  > p {
    color: rgb(155, 155, 155);
    font-size: 18px;
    margin-top: 40px;
    text-align: center;
  }
`;

export default function Implement() {
  return (
    <>
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col lg="6">
            <HeaderTextContainer>
              <h1>
                Todo o código dos chatbots para você implementar na sua cidade
          </h1>
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
            </HeaderTextContainer>
          </Col>
        </Row>
      </Container>
      <BackgroundContainer />
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col lg="6">
            <p style={{ marginBottom: "64px", color: "rgb(155, 155, 155)", fontSize: "18px", textAlign: "center"}}>
              O projeto tem sido carinhosamente hospedado pela Ameciclo -
              Associação Metropolitana de Ciclistas do Recife e teve recursos
              iniciais para o seu desenvolvimento aportados pela Escola de
            Ativismo. <br /> <br />
              Quer implementar a Bicibot na sua cidade? Se a funcionalidade que
              você quer é a mesma das existentes nas cidades de Recife ou São
              Paulo, é perfeitamente possível! Entre em contato com a gente para
              saber como fazer.
          </p>
          </Col>
        </Row>
      </Container>
      <SocialMedia />
    </>
  );
}
