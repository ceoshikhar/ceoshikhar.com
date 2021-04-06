import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Spacer } from "../../components/Spacer";

export const Hero: React.FC = () => {
  return (
    <Wrapper id="hero">
      <StaticImage
        src="../../images/me.png"
        alt="me"
        placeholder="blurred"
        width={250}
        height={250}
        style={{
          border: "2px solid #298FCA",
          borderRadius: "50%"
        }}
      />
      <Spacer t={32} />
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
`;

const OneLiner = styled.h2`
  font-family: "Vollkorn";
  font-weight: 400;
  font-size: 1.5rem;
`;
