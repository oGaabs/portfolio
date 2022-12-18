import { useLang } from "../../contexts/LangContext"
import { listTechs } from "../../utils"
import TechCard from "../TechCard"
import Title from "../Title"
import { TechListContainer, TechsContainer } from "./styles"

const TechList = () => {
  const { currentLang } = useLang()

  const techsTitleText = {
    pt: "Ferramentas e Tecnologias",
    en: "Technologies and Tools",
  }

  return (
    <TechsContainer>
      <Title size="1.55rem" tag="h3">
        {techsTitleText[currentLang]}
      </Title>
      <TechListContainer>
        {listTechs.map((tech, index) => (
          <li key={index}>
            <TechCard name={tech.name} logoSrc={tech.logoSrc} />
          </li>
        ))}
      </TechListContainer>
    </TechsContainer>
  )
}

export default TechList
