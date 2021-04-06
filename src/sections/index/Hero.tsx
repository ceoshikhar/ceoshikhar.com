import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const Hero: React.FC = () => {
  return (
    <Wrapper id="hero">
      <StaticImage
        className="image"
        src="../../images/me.png"
        alt="me"
        placeholder="blurred"
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

  .image {
    border: 2px solid #298fca;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin-bottom: 1em;
  }

  ${(props) => props.theme.screen.md} {
    .image {
      margin-bottom: 0.5em;
      width: 200px;
      height: 200px;
    }
  }
`;

const Name = styled.h1`
  color: ${(props) => props.theme.color.primary};
  font-size: 4rem;

  ${(props) => props.theme.screen.md} {
    font-size: 2.25rem;
  }
`;

const OneLiner = styled.h2`
  font-family: "Vollkorn";
  font-weight: 400;
  font-size: 1.5rem;

  ${(props) => props.theme.screen.md} {
    font-size: 1rem;
  }
`;
