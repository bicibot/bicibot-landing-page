import React from "react";
import styled from "styled-components";

const NumberContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  margin-right: 15px;
  color: #5a31f8;
  font-size: 64px;
  font-weight: bold;
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReportsContainer = styled.div`
  margin: 20px;
  h2 {
    margin-top: 10px;
    color: #5a31f8;
    font-size: 36px;
  }
`;

export default function Counter(props) {
  const numArray = [...`${props.total}`].map(n => +n);
  const reportsCounter = numArray.map((num, i) => (
    <NumberContainer key={i}>{num}</NumberContainer>
  ));

  return (
    <>
      <ReportsContainer>
        <CounterContainer>{reportsCounter}</CounterContainer>
        <h2>denúncias</h2>
      </ReportsContainer>
    </>
  );
}
