import * as React from "react";
import styled, { useTheme } from "styled-components";
import { socialData } from "../../data/social";
import Tooltip from "@material-ui/core/Tooltip";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { NiceTransition } from "../../components/Button";

export const Socials: React.FC = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      {socialData.map((social) => {
        const { Icon, link, title } = social;

        return (
          <Tooltip title={title} key={title} placement="top" arrow>
            <div>
              <OutboundLink
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="icon" color={theme.color.surface} size={32} />
              </OutboundLink>
            </div>
          </Tooltip>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  position: relvative;
  transition: ${NiceTransition};
  top: 0;

  .icon {
    opacity: 15%;

    &:hover {
      position: relative;
      top: 2px;
      /*  Don't want it to color.surface as that's complete white */
      fill: ${(props) => props.theme.color.onBackground};
      opacity: 100%;
      transition: ${NiceTransition};
    }
  }
`;
