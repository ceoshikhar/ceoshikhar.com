import * as React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Spacer } from "../components/Spacer";
import { Hero } from "../sections/index/Hero";
import { Socials } from "../sections/index/Socials";
import { WorkTogether } from "../sections/index/WorkTogether";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const Wrapper = styled.div`
  width: 100%;
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
        <Spacer b={64} />
        <WorkTogether />
        <Spacer b={145} />
        <Socials />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
