import React, { useState, useEffect } from "react";
import axios from "axios";
import SocialMedia from "../../components/SocialMedia";
import styled from "styled-components";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
  } from 'recharts';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    }
  ];

export default function Statistics() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchReports = async () => {
          setIsLoading(true);
          const result = await axios("https://api.bicibot.org/denuncias");

          let cities = new Set(result.data.map(report => report.city)),reportData = []

          cities.forEach(city => {
            reportData.push({name: city, quantity: result.data.filter(r => r.city === city).length})
          })
          
          setData(reportData);
          setIsLoading(false);
        };
        fetchReports();
      }, []);

  return (
    <>
    <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col lg="auto">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
              width={300} 
              height={200}
              data={data}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar name="Quantidade de Denúncias" dataKey="quantity"fill="#5A31F8" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
        </Row>
    </Container>
    </>
  );
}
