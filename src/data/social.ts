import {
  IconType,
  Instagram,
  LinkedIn,
  GitHub,
  Twitter,
  YouTube
} from "../components/Icons";

interface ISocialDetails {
  title: string;
  link: string;
  Icon: IconType;
}

export const socialData: Array<ISocialDetails> = [
  {
    title: "YouTube",
    link: "https://www.youtube.com/channel/UC57Jv9O53YSJxie1DjaUTtg",
    Icon: YouTube
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
