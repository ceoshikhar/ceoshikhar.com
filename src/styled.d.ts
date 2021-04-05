import "styled-components";
import { IColor, ThemeKind } from "./styles/theme";

// This helps with intellisense and typing our "Theme" object for `props.theme`
declare module "styled-components" {
  export interface DefaultTheme {
    name: ThemeKind;
    color: IColor;
  }
}
