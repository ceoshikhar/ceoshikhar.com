import * as React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.color.background};
`;

const NotFound = ({ location }: IndexPageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <Wrapper>
        <h1>404 Page not found!</h1>
      </Wrapper>
    </Layout>
  );
};

export default NotFound;
