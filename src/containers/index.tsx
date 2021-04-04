import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layout/index'

import Heading from '../components/Heading'

interface IndexPageProps {
  location: {
    pathname: string
  }
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Email = styled.a`
  margin-left: 0.35em;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary};

  &:hover {
    text-decoration: underline;
  }
`

export default ({ location }: IndexPageProps) => {
  return (
    <Layout location={location}>
      <Wrapper>
        <Heading title="🚧 I AM WORKING HERE! I AM WORKING HERE!" />
        <p>
          Untill I am done working here, you can hit me up on
          <Email
            href="mailto: ceoshikhar@gmail.com"
            style={{ marginLeft: '0.35em' }}
          >
            ceoshikhar@gmail.com
          </Email>
        </p>
      </Wrapper>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    image: file(relativePath: { eq: "icon.png" }) {
      ...fluidImage
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
