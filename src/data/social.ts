import {
  IconType,
  FaInstagram,
  FaDev,
  FaGithub,
  FaLinkedin,
  FaTwitter
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
    Icon: FaLinkedin
  },
  {
    title: "GitHub",
    link: "https://github.com/ceoshikhar",
    Icon: FaGithub
  },
  {
    title: "Instagram",
    link: "https://instagram.com/ceoshikhar",
    Icon: FaInstagram
  },
  {
    title: "Twitter",
    link: "https://twitter.com/ceoshikhar",
    Icon: FaTwitter
  },
  {
    title: "DEV Community",
    link: "https://dev.to/ceoshikhar",
    Icon: FaDev
  }
];
