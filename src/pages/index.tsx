import * as React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { ForkOnGitHub } from "../sections/index/ForkOnGitHub";
import { Hero } from "../sections/index/Hero";
import { Socials } from "../sections/index/Socials";
import { WorkTogether } from "../sections/index/WorkTogether";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <Layout pathname={props.location.pathname}>
      <ForkOnGitHub />
      <Wrapper>
        <Content>
          <Hero />
          <WorkTogether />
          <Socials />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

const Content = styled.div`
  min-height: 625px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${(props) => props.theme.screen.md} {
    min-height: 500px;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
