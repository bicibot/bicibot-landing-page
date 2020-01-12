import React from "react";
import styled from "styled-components";

export const FooterBar = styled.footer`
  background-color: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12);
  width: 100%;
  display: flex;
  min-height: 85px;
  margin-top: 140px;
`;

export default function Footer() {
  return (
    <>
      <FooterBar />
    </>
  );
}
