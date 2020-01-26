import React from "react";
import styled from "styled-components";
import c from "../../assets/1.png";
import b from "../../assets/2.png";
import SP from "../../assets/sp.png";
import SocialMedia from "../../components/SocialMedia";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BackgroundContainer = styled.div`
  background-image: url(${c});
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

const CityWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  max-width: 650px;
  margin: 0 auto;
`;

const SPImage = styled.div`
  background-image: url(${SP});
  height: 854px;
  width: 678px;
  max-width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  float: right;
`;

const Recife = styled.div`
  background-image: url(${b});
  height: 760px;
  width: 708px;
  max-width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
`;

export default function About() {
  return (
    <>
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col lg="6">
            <HeaderTextContainer>
              <h1>Damos voz a ciclistas para que falem de seus problemas</h1>
              <p>
                O dia a dia de quem usa a bicicleta é marcado pela violência no
                trânsito e pela falta de infraestrutura segura. Para conseguir
                diagnosticar com dados essa realidade, ciclistas de Recife e São
                Paulo se uniram para desenvolver o projeto da bicibot.
              </p>
            </HeaderTextContainer>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <BackgroundContainer />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <p
              style={{
                color: "rgb(155, 155, 155)",
                fontSize: "18px",
                textAlign: "center"
              }}
            >
              A bicibot é uma assistente virtual que utiliza a inteligência
              artificial por meio de chatbot e tem como objetivo dar voz a
              ciclistas das duas cidades sobre os principais problemas de
              segurança viária a que são submetidos cotidianamente.
              <br /> <br />O objetivo da plataforma é quantificar e qualificar
              as incidências relacionadas ao uso da bicicleta por ciclistas. As
              cidades contempladas possuem diferentes propósitos para
              dimensionar a realidade de quem usa a bicicleta diariamente.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Recife />
          </Col>
          <Col className="align-self-center">
            <CityWrapper>
              <h2
                style={{
                  color: "#5A31F8",
                  fontSize: "42px",
                  lineHeight: "42px"
                }}
              >
                Recife
              </h2>
              <p
                style={{ color: "#9B9B9B", fontSize: "18px", padding: "50px" }}
              >
                Em Recife, a chatbot tem como foco denunciar motoristas
                profissionais de ônibus e táxis que desrespeitam a vida de
                ciclistas. A cada denúncia realizada o número contribui para a
                construção do ranking de maus motoristas.
              </p>
            </CityWrapper>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="align-self-center">
            <CityWrapper>
              <h2
                style={{
                  color: "#5A31F8",
                  fontSize: "42px",
                  lineHeight: "42px"
                }}
              >
                São Paulo
              </h2>
              <p
                style={{ color: "#9B9B9B", fontSize: "18px", padding: "50px" }}
              >
                Em São Paulo, o propósito é registrar as denúncias de invasão às
                ciclovias e ciclofaixas já existentes e contabilizar a demanda
                por manutenção.
              </p>
            </CityWrapper>
          </Col>
          <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <SPImage />
          </Col>
        </Row>
        <Row>
          <Col>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </>
  );
}
