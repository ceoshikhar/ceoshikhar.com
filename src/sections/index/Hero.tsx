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
  margin-bottom: 4em;

  .image {
    border: 2px solid #298fca;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin-bottom: 2em;
  }

  ${(props) => props.theme.screen.md} {
    margin-bottom: 2em;

    .image {
      width: 200px;
      height: 200px;
      margin-bottom: 1em;
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
    font-size: 0.875rem;
  }
`;
