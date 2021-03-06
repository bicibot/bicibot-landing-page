import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import ReactMapGL, { Marker, GeolocateControl } from "react-map-gl";

import marker from "../../assets/marker.svg";
import bg from "../../assets/bg.svg";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Counter from "../../components/Counter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Report from "../../components/Report";
import { LinkContainer } from "react-router-bootstrap";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

const Home = () => {
  const [data, setData] = useState([]);
  const [lastReports, setLastReports] = useState([{}, {}, {}]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: -23.5489,
    longitude: -46.6388,
    zoom: 10,
    width: "100%",
    height: "500px"
  });

  const mapRef = useRef();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/spinner.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const geolocateStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10
  };

  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      const result = await axios("https://api.bicibot.org/denuncias");
      setData(result.data);
      setIsLoading(false);
    };

    fetchReports();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setLastReports(data.slice(0, 3));
    }
  }, [data]);
  return (
    <>
      <Container fluid="true">
        <Row className="fullWidth bg-cyclist">
          <Col lg={{ span: 4, offset: 1 }}>
            <Counter total={data.length} />
            <div className="report-info">
              <h6>
                Use a bicibot para fazer sua denúncia. Os dados nos ajudam a
                compreender os problemas e cobrar mudanças.
              </h6>
              <Button variant="purple">Denuncie</Button>
              <LinkContainer to="/sobre-nos">
                <Button variant="outline-yellow">Sobre Nós</Button>
              </LinkContainer>
            </div>
          </Col>
        </Row>
        <Row className="liveReports">
          <Col lg={3} md="true">
            <h1>Denúncias recentes</h1>
          </Col>
          <Col lg={3} md="true">
            <Report reportData={lastReports[0]} />
          </Col>
          <Col lg={3} md="true">
            <Report reportData={lastReports[1]} />
          </Col>
          <Col lg={3} md="true">
            <Report reportData={lastReports[2]} />
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <div className="videoDescriptionContainer">
              <p>
                O dia a dia de quem usa a bicicleta é marcado pela violência no
                trânsito e pela falta de infraestrutura segura. A Bicibot é uma
                assistente virtual que utiliza a inteligência artificial por
                meio de chatbot e tem como objetivo dar voz a ciclistas das duas
                cidades sobre os principais problemas de segurança viária a que
                são submetidos cotidianamente.
              </p>
            </div>
          </Col>
          <Col>
            <div style={{ width: "100%", height: "auto" }}>
              <ResponsiveEmbed aspectRatio="16by9">
                <embed src="https://www.youtube.com/embed/qVvTdDK4ZVg" />
              </ResponsiveEmbed>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="auto" className="main-text-container">
            <h1>Acompanhe os locais mais críticos</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <div style={{ height: "500px", width: "100%" }}>
            {isLoading ? (
              <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                isStopped={false}
                isPaused={false}
              />
            ) : (
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiaWFjYXB1Y2EiLCJhIjoiODViMTRmMmMwMWE1OGIwYjgxNjMyMGFkM2Q5OWJmNzUifQ.OFgXp9wbN5BJlpuJEcDm4A"
                onViewportChange={viewport => {
                  setViewport(viewport);
                }}
                ref={mapRef}
              >
                <GeolocateControl
                  style={geolocateStyle}
                  positionOptions={{ enableHighAccuracy: true }}
                  trackUserLocation={true}
                />
                {data.map(report => (
                  <Marker
                    key={report._id}
                    longitude={report.location[0]}
                    latitude={report.location[1]}
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer"
                      }}
                    >
                      <img
                        src={marker}
                        alt="Marcador de Denúncia"
                        style={{ height: "40px" }}
                      />
                    </button>
                  </Marker>
                ))}
              </ReactMapGL>
            )}
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="auto">
            <div className="main-text-container">
              <h1>Quer saber as estatísticas na íntegra?</h1>
              <p>
                Dados sobre locais onde há maior perigo nas vias para ciclistas,
                sobre invasão e falta de manutenção em ciclovias e ciclofaixas
              </p>
              <LinkContainer to="/estatisticas">
                <Button variant="purple">Estátisticas</Button>
              </LinkContainer>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <div
            className="container-bg"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="implement-container">
              <h1>Quer implementar a bicibot na sua cidade?</h1>
              <p>
                Todo o código do chatbot está publicado com licença livre no
                GitHub do projeto.
              </p>
              <Button href="https://github.com/bicibot" variant="white">
                Github
              </Button>
              <LinkContainer to="/implemente">
                <Button variant="outline-white">Saiba Mais</Button>
              </LinkContainer>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;
