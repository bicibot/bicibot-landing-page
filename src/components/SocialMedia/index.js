import React from "react";
import styled from "styled-components";
import facebookIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/twitter.png";
import telegramIcon from "../../assets/icons/telegram.png";
import githubIcon from "../../assets/icons/github.png";

const SocialLinkContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 15px;
  color: #5a31f8;
  font-size: 64px;
  font-weight: bold;
  height: 95px;
  width: 95px;
`;

const SocialLink = styled.a`
  background-image: ${props => `url(${props.icon})`};
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: center;
`;

export default function SocialMedia() {
  return (
    <>
      <div style={{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        marginTop:"60px",
        textAlign:"center"
      }}
      >
        <h2
          style={{
            color: "#FFC700",
            fontSize: "36px",
            lineHeight: "42px"
          }}
        >
          Acompanhe nossas redes
        </h2>
        <p style={{ color: "#9B9B9B", fontSize: "18px", padding: "50px" }}>
          O canal faz uma publicação do Twitter a cada novo registro e reporta a
          demanda aos órgãos responsáveis.
        </p>
      </div>
      <SocialMediaContainer>
        <SocialLinkContainer>
          <SocialLink icon={facebookIcon} href="https://m.me/bicibot" />
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialLink icon={twitterIcon} href="https://twitter.com/bicibot" />
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialLink icon={telegramIcon} href="https://t.me/a_bicibot" />
        </SocialLinkContainer>
        <SocialLinkContainer>
          <SocialLink icon={githubIcon} href="https://github.com/bicibot" />
        </SocialLinkContainer>
      </SocialMediaContainer>
    </>
  );
}
