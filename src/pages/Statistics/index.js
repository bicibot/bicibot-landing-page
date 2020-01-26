import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import './styles.scss';

import Lottie from "react-lottie";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import StatisticsBuilder from "../../components/StatisticsBuilder";

export default function Statistics() {

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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/spinner.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState('geral');

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

    if (data) {
      if (key !== "geral") {
        setFilteredData(data.filter(r => r.city === key))
      }
    }
  }, [data, key])

  return (
    <>
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col lg="6">
            <HeaderTextContainer>
              <h1>Veja como estão as
          denúncias da sua cidade</h1>
              <p>
                Use a bicibot para fazer sua denúncia. Os dados nos ajudam a compreender os problemas e cobrar por mudanças.
          </p>
            </HeaderTextContainer>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="auto">
            <Tabs activeKey={key} onSelect={k => setKey(k)} variant="statistics-tab">
              <Tab eventKey="geral" title="Geral">
                {isLoading ? (
                  <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={false}
                    isPaused={false}
                  />
                ) : (
                    <StatisticsBuilder data={data} />
                  )}
              </Tab>
              <Tab eventKey="São Paulo" title="São Paulo">
                <StatisticsBuilder data={filteredData} />
              </Tab>
              <Tab eventKey="Recife" title="Recife">
                <StatisticsBuilder data={filteredData} />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
}
