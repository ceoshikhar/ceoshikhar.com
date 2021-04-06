import { Tooltip } from "@material-ui/core";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Send } from "../../components/Icons";

export const WorkTogether = () => {
  const theme = useTheme();
  const Icon = () => <Send size={24} color={theme.color.onPrimary} />;

  return (
    <Tooltip title="Hit me up!" placement="right" arrow>
      <div>
        <MailTo href="mailto:ceoshikhar@gmail.com">
          <Button title="Let's work together" Icon={Icon} />
        </MailTo>
      </div>
    </Tooltip>
  );
};

const MailTo = styled(OutboundLink)`
  text-decoration: none;

  &:focus {
    outline: none;
  }
`;
