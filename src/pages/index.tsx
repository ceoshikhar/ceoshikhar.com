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

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <Layout pathname={props.location.pathname}>
      <Wrapper>
        <Hero />
        <WorkTogether />
        <Socials />
        <ForkOnGitHub />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
