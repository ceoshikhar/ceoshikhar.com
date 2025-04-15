import { Tooltip } from "react-tooltip";
import styled, { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Send } from "../../components/Icons";

export const LetsConnect = () => {
    const theme = useTheme();
    const Icon = () => <Send size={24} color={theme.color.onPrimary} />;

    return (
        <>
            <div id="write-to-me">
                <MailTo href="mailto:shikhar@ceoshikhar.com">
                    <Button title="Let's connect!" Icon={Icon} />
                </MailTo>
            </div>
            <Tooltip place="right" anchorSelect="#write-to-me">
                Hit me up!
            </Tooltip>
        </>
    );
};

const MailTo = styled.a`
    text-decoration: none;

    &:focus {
        outline: none;
    }
`;
