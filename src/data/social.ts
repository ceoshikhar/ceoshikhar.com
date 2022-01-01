import { GitHub, IconType, LinkedIn } from "../components/Icons";

interface ISocialDetails {
  title: string;
  link: string;
  Icon: IconType;
}

export const socialData: Array<ISocialDetails> = [
  {
    title: "GitHub",
    link: "https://github.com/ceoshikhar",
    Icon: GitHub
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/ceoshikhar",
    Icon: LinkedIn
  }
];
