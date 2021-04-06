import { Tooltip } from "@material-ui/core";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import styled, { useTheme } from "styled-components";
import { NiceTransition } from "../../components/Button";
import { ForkGit } from "../../components/Icons";

export const ForkOnGitHub: React.FC = () => {
  const theme = useTheme();

  return (
    <Tooltip title="View source code" placement="left" arrow>
      <Wrapper>
        <OutboundLink
          href="https://github.com/ceoshikhar/ceoshikhar-dot-com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ForkGit className="icon" size={48} color={theme.color.surface} />
        </OutboundLink>
      </Wrapper>
    </Tooltip>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  transition: ${NiceTransition};

  .icon {
    opacity: 15%;

    &:hover {
      transition: ${NiceTransition};
      opacity: 100%;
    }
  }
`;
