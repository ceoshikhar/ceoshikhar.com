import styled from "styled-components";

export const Hero: React.FC = () => {
    return (
        <Wrapper id="hero">
            <img className="image" src="./images/me.jpeg" alt="my image" />
            <Name>ceoshikhar</Name>
            <div style={{ textAlign: "left" }}>
                <OneLiner>
                    My name is Shikhar Sharma, also known as <b>ceoshikhar</b>{" "}
                    on the internet.
                </OneLiner>
                <OneLiner>
                    I am an entrepreneur, software engineer and sometimes an
                    artist.
                </OneLiner>
                <OneLiner>
                    I am an active trader, mainly trading equities and currently
                    working on{" "}
                    <a
                        href="https://github.com/MudgalLabs/arthveda"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Arthveda
                    </a>{" "}
                    - an analytics dashboard for traders.
                </OneLiner>
                <OneLiner>
                    I am a FOSS & self host enthusiast. Everything I build is
                    and will be FOSS. If it's hosted, it's self hosted by me.
                </OneLiner>
                <OneLiner>
                    Welcome to my small space on the internet! ♥
                </OneLiner>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    text-align: center;
    margin-bottom: 2rem;

    .image {
        border: 2px solid ${(props) => props.theme.color.primary};
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
    font-size: 3rem;

    ${(props) => props.theme.screen.md} {
        font-size: 2rem;
    }
`;

const OneLiner = styled.h2`
    font-family: "Karla";
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.25rem;

    ${(props) => props.theme.screen.md} {
        font-size: 1rem;
    }
`;
