import ProjectCard from "../ProjectCard"
import { useProjects } from "../../contexts/ProjectsContext"
import { Container, ProjectsContainer } from "./styles"

export default function ProjectList() {
  const { projects } = useProjects()

  return (
    <Container>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              description={project.description}
              logoSrc={project.logoSrc}
              projectLink={project.projectLink}
              repoLink={project.repoLink}
              title={project.title}
            />
          </li>
        ))}
      </ProjectsContainer>
    </Container>
  )
}
