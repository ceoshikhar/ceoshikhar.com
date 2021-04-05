import { Tooltip } from "@material-ui/core";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { useTheme } from "styled-components";
import { Button } from "../../../components/Button";
import { FiSend } from "../../../components/Icons";

export const WorkTogether = () => {
  const theme = useTheme();
  const Icon = () => <FiSend size={24} color={theme.color.onPrimary} />;

  return (
    <Tooltip title="Hit me up!" placement="right" arrow>
      <div>
        <OutboundLink
          href="mailto: ceoshikhar@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <Button title="Let's work together" Icon={Icon} />
        </OutboundLink>
      </div>
    </Tooltip>
  );
};
