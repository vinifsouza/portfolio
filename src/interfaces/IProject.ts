export {};

export interface IProject {
  name: string;
  fullName: string;
  url: string | null;
  defaultBranch: string;
  description: string;
  icons: string[];
  logo: string;
  ribbon: string | false;
}
