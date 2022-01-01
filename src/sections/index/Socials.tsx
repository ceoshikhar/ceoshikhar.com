import * as React from "react";

import styled, { useTheme } from "styled-components";

import { NiceTransition } from "../../components/Button";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Tooltip from "@material-ui/core/Tooltip";
import { socialData } from "../../data/social";

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
                <Icon
                  className="icon"
                  color={theme.color.onBackground}
                  size={32}
                />
              </OutboundLink>
            </div>
          </Tooltip>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 300px;
  display: flex;
  position: relvative;
  transition: ${NiceTransition};
  top: 0;
  row-gap: 1rem;
  column-gap: 1rem;

  .icon {
    &:hover {
      position: relative;
      top: 2px;
      transition: ${NiceTransition};
    }
  }
`;
