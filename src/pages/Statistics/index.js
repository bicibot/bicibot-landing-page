import React, { useState, useEffect } from "react";
import axios from "axios";
import SocialMedia from "../../components/SocialMedia";
import Counter from "../../components/Counter"
import styled from "styled-components";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import { Calendar } from '@nivo/calendar'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

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

  const [data, setData] = useState([]);
  const [vehiData, setVehiData] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      const result = await axios("https://api.bicibot.org/denuncias");
      const vehicles = new Set(result.data.map(report => report.invasion_vehicle))
      const vehiData = [];

      const calendarData = result.data.reduce((days, r) => {
        let createdAt = new Date(r.createdAt).toISOString().split('T')[0];
        if (!days.some(d => d.day === createdAt)) {
          days.push({ day: createdAt, value: 0 })
        }

        let dayToBeUpdated = days.filter(d => d.day === createdAt);
        dayToBeUpdated[0].value += 1;

        return days;
      }, [])

      vehicles.forEach(v => {
        if (v !== undefined) {
          vehiData.push({ name: v, quantity: result.data.filter(r => r.invasion_vehicle === v).length })
        }
      })
      console.log(calendarData)

      setCalendarData(calendarData);
      setVehiData(vehiData)
      setData(result.data);
      setIsLoading(false);
    };
    fetchReports();
  }, []);

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
            <Tabs defaultActiveKey="geral" id="uncontrolled-tab-example">
              <Tab eventKey="geral" title="Geral">
                <Row className="justify-content-md-center">
                  <Col lg="auto">
                    <Counter total={data.length} />
                  </Col>
                  <Col lg="auto">
                    <ResponsiveContainer height={300} aspect={1}>
                      <BarChart
                        data={vehiData}
                        margin={{
                          top: 20, right: 30, left: 20, bottom: 5,
                        }}
                        layout="vertical"
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar name="Tipo de veículo invasores" dataKey="quantity" fill="#5A31F8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Col>
                  <Col lg="auto">
                    <Calendar
                      data={calendarData}
                      from="2019-09-24"
                      to="2020-01-20"
                      width={1000}
                      height={600}
                      emptyColor="#eeeeee"
                      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                      minValue="auto"
                      yearSpacing={40}
                      monthBorderColor="#ffffff"
                      dayBorderWidth={2}
                      dayBorderColor="#ffffff"
                      legends={[
                        {
                          anchor: 'bottom-right',
                          direction: 'row',
                          translateY: 36,
                          itemCount: 4,
                          itemWidth: 42,
                          itemHeight: 36,
                          itemsSpacing: 14,
                          itemDirection: 'right-to-left'
                        }
                      ]} />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="sp" title="São Paulo">
                <span>Teste2</span>
              </Tab>
              <Tab eventKey="rec" title="Recife">
                <span>Teste3</span>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
}
