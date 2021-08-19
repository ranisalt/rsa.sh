import * as Icons from "./components/Icons";

export const meta = {
  title: "ranieri - rsa.sh",
  tags: {
    description:
      "Experienced software engineer with a demonstrated history of working in the computer software industry,  with a bachelor's degree focused in Computer Science. Skilled in C++, Javascript, Python, and Linux.",
  },
} as const;

export const social = [
  { name: "GitHub", url: "https://github.com/ranisalt", icon: Icons.GitHub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ranisalt",
    icon: Icons.LinkedIn,
  },
];

export const works = [
  {
    name: "node-argon2",
    url: "https://github.com/ranisalt/node-argon2",
    description: "Node.js bindings for Argon2 hashing algorithm.",
    role: "author",
  },
  {
    name: "otland/forgottenserver",
    url: "https://github.com/otland/forgottenserver",
    description:
      "A free and open-source MMORPG server emulator written in C++.",
    role: "maintainer",
  },
];
