import { Fragment } from "react";

import styled, { useTheme } from "styled-components";

import { NiceTransition } from "../../components/Button";
import { Tooltip } from "react-tooltip";
import { socialData } from "../../data/social";

export const Socials: React.FC = () => {
    const theme = useTheme();

    return (
        <Wrapper>
            {socialData.map((social) => {
                const { Icon, link, title } = social;

                return (
                    <Fragment key={title}>
                        <div id={`social-item-${title}`}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    className="icon"
                                    color={theme.color.onBackground}
                                    size={32}
                                />
                            </a>
                        </div>
                        <Tooltip
                            anchorSelect={`#social-item-${title}`}
                            place="bottom"
                        >
                            {title}
                        </Tooltip>
                    </Fragment>
                );
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 300px;
    display: flex;
    transition: ${NiceTransition};
    margin-top: 3rem;
    column-gap: 1rem;

    .icon {
        &:hover {
            position: relative;
            top: 2px;
            transition: ${NiceTransition};
        }
    }
`;
