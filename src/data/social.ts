import {
  IconType,
  Instagram,
  LinkedIn,
  GitHub,
  Twitter,
  Dev
} from "../components/Icons";

interface ISocialDetails {
  title: string;
  link: string;
  Icon: IconType;
}

export const socialData: Array<ISocialDetails> = [
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/ceoshikhar",
    Icon: LinkedIn
  },
  {
    title: "GitHub",
    link: "https://github.com/ceoshikhar",
    Icon: GitHub
  },
  {
    title: "Instagram",
    link: "https://instagram.com/ceoshikhar",
    Icon: Instagram
  },
  {
    title: "Twitter",
    link: "https://twitter.com/ceoshikhar",
    Icon: Twitter
  },
  {
    title: "DEV Community",
    link: "https://dev.to/ceoshikhar",
    Icon: Dev
  }
];
