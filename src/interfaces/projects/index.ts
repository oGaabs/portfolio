export interface IProjectDescription {
  pt: string
  en: string
}

export interface IProject {
  logoSrc: string
  title: string
  description: IProjectDescription
  repoLink: string
  projectLink: string
}

export interface IProjectsContextData {
  projects: IProject[]
}
