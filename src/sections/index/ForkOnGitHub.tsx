import { Tooltip } from "react-tooltip";
import styled, { useTheme } from "styled-components";

import { NiceTransition } from "../../components/Button";
import { ForkGit } from "../../components/Icons";

export const ForkOnGitHub: React.FC = () => {
    const theme = useTheme();

    return (
        <>
            <Wrapper id="github-fork">
                <a
                    href="https://github.com/ceoshikhar/ceoshikhar-dot-com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ForkGit
                        className="icon"
                        size={48}
                        color={theme.color.surface}
                    />
                </a>
            </Wrapper>
            <Tooltip anchorSelect="#github-fork" place="left">
                View source code
            </Tooltip>
        </>
    );
};

const Wrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    transition: ${NiceTransition};

    .icon {
        opacity: 15%;

        &:hover {
            transition: ${NiceTransition};
            opacity: 100%;
        }
    }
`;
