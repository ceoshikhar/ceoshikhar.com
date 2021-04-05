import * as React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";
import { Spacer } from "./Spacer";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  disabled?: boolean;
  Icon?: IconType;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { disabled, title, Icon, onClick, ...rest } = props;

  if (disabled) return null;

  return (
    <Container type="button" onClick={onClick} {...rest}>
      <ButtonBody>
        {Icon && (
          <>
            <Icon />
            <Spacer r={8} />
          </>
        )}

        <Title>{title}</Title>
      </ButtonBody>
      <OutlineBehind />
    </Container>
  );
};

const Transition = `all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)`;

const Container = styled.button`
  position: relative;
  display: inline-flex;
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const Title = styled.h6`
  margin: 0;
  font-size: 1.25rem;
  line-height: 30px;
`;

const ButtonBody = styled.div`
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.onPrimary};
  position: relative;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 8px 24px;
  z-index: 20;
  top: 0;
  right: 0;
  transition: ${Transition};

  &:hover {
    transition: ${Transition};
    top: 2px;
    right: 2px;
  }

  &:active {
    transition: ${Transition};
    top: 5px;
    right: 5px;
  }
`;

const OutlineBehind = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid ${(props) => props.theme.color.primary};
  top: 5px;
  right: 5px;
  z-index: 10;
`;
