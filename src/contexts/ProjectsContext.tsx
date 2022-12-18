import { useContext, createContext, useState } from "react"

import { IParentComponentProps } from "../interfaces"
import { IProject, IProjectsContextData } from "../interfaces/projects"
import { projectList } from "../utils"

const ProjectsContext = createContext<IProjectsContextData>(
  {} as IProjectsContextData
)

export const useProjects = () => useContext(ProjectsContext)

export const ProjectsProvider = ({ children }: IParentComponentProps) => {
  const [projects] = useState<IProject[]>(projectList)

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  )
}
