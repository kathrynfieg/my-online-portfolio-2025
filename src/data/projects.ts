type ProjectLink = {
  label: string;
  source: string;
};

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  tech: string[];
  liveLink?: string;
  sourceCodeLink?: string;
  otherLinks?: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Example Project",
    subtitle: "Optional subtitle",
    description: "TODO: Add project description.",
    imageUrl: "",
    tech: ["Vue", "TypeScript"],
    liveLink: "https://example.com",
    sourceCodeLink: "https://github.com/kathrynfieg/example",
    otherLinks: [],
  },
];
