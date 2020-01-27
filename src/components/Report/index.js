import React from "react";
import styled from "styled-components";

const ReportContainer = styled.div`
  height: 140px;
  width: 320px;
  background-color: #fff;
  box-shadow: 0px 4px 50px rgba(205, 205, 205, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: auto 0 auto 40px;
  span:first-of-type {
    font-size: 14px;
    font-weight: 500;
  }
`;

const ReportAvatar = styled.div`
  background: #c4c4c4;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 14px;
`;

export default function Report(props) {
  return (
    <ReportContainer>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ReportAvatar />
        <div style={{ display: "flex", flexDirection: "column", marginTop: "14px" }}>
          <span>Bicibot</span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span
              style={{ fontSize: "12px", lineHeight: "14px", color: "#BBBBBB", marginRight:"10px" }}>
              @bicibot_sp
          </span>
            <span style={{ fontSize: "12px", lineHeight: "14px", color: "#BBBBBB", fontWeight:"bold"}}>
              {new Date(props.reportData.createdAt).toLocaleDateString("pt-BR")}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "15px",
          color: "#9B9B9B",
          fontSize: "12px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <p>{props.reportData.city}</p>
        <p>{props.reportData.report_type}</p>
        <p>{props.reportData.description}</p>
      </div>
    </ReportContainer>
  );
}
