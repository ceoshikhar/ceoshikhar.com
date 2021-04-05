import * as React from "react";
import styled from "styled-components";
import { px2em } from "../styles/styleUtils";

export interface ISpacerProps {
  // margin-x
  x?: number;
  // margin-y:
  y?: number;
  // margin-top
  t?: number;
  // margin-right
  r?: number;
  // margin-bottom
  b?: number;
  // margin-left
  l?: number;
}

export const Spacer: React.FC<ISpacerProps> = (props) => {
  return <Space {...props} />;
};

const Space = styled.div<ISpacerProps>`
  font-size: 1rem;
  margin: ${(props) => `${px2em(props.y || 0)}} ${px2em(props.x || 0)}`};
  margin-top: ${(props) => props.t && px2em(props.t)};
  margin-right: ${(props) => props.r && px2em(props.r)};
  margin-bottom: ${(props) => props.b && px2em(props.b)};
  margin-left: ${(props) => props.l && px2em(props.l)};
`;
