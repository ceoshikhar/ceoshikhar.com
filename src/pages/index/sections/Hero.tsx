import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const Hero: React.FC = () => {
  return (
    <Wrapper id="hero">
      <StaticImage
        src="../../../images/me.png"
        alt="me"
        placeholder="blurred"
        width={250}
        height={250}
        style={{
          border: "2px solid #298FCA",
          borderRadius: "50%"
        }}
      />

      <Name>SHIKHAR SHARMA</Name>

      <OneLiner>An entrepreneur, developer and sometimes an artist.</OneLiner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Name = styled.h1`
  color: ${(props) => props.theme.color.primary};
  font-size: 4rem;
  margin: 0;
  margin-top: 0.5em;
`;

const OneLiner = styled.h2`
  font-family: "Vollkorn";
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
`;
