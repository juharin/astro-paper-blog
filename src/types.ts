import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: Author;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
  newsletter: Newsletter;
};

export type Newsletter = {
  provider: string;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type Author = {
  name: string;
  picture: string;
  bio: string;
  email: string;
  //socials: SocialObjects;
};
