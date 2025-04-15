import styled from "styled-components";

import { ForkOnGitHub } from "../sections/index/ForkOnGitHub";
import { Hero } from "../sections/index/Hero";
import { Socials } from "../sections/index/Socials";
import { LetsConnect } from "../sections/index/LetsConnect";

const IndexPage: React.FC = () => {
    return (
        <>
            <ForkOnGitHub />
            <Wrapper>
                <Content>
                    <Hero />
                    <LetsConnect />
                    <Socials />
                </Content>
            </Wrapper>
        </>
    );
};

export default IndexPage;

const Content = styled.div`
    min-height: 625px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 1rem;

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
