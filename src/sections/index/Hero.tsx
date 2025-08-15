import styled from "styled-components";

export const Hero: React.FC = () => {
    return (
        <Wrapper id="hero">
            <img className="image" src="./images/me.jpeg" alt="my image" />
            <Name>ceoshikhar</Name>
            <div
                style={{
                    textAlign: "left",
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                <OneLiner>
                    My name is Shikhar Sharma, also known as <b>ceoshikhar</b>{" "}
                    on the internet.
                </OneLiner>
                <OneLiner>
                    I am an entrepreneur, software engineer and a trader.
                </OneLiner>
                <OneLiner>
                    I am the founder of{" "}
                    <a
                        href="https://mudgallabs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mudgal Labs
                    </a>{" "}
                    and Mudgal Fund.
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
    line-height: 1.75rem;

    ${(props) => props.theme.screen.md} {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;
