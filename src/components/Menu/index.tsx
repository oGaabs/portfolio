import { useLang } from "../../contexts/LangContext"
import { useMenu } from "../../contexts/MenuContext"
import Title from "../Title"
import { MenuTabContainer, NavContainer } from "./styles"

export default function Menu() {
  const { activeTab, switchTab } = useMenu()
  const { currentLang } = useLang()

  const menuTexts = {
    about: {
      pt: "Sobre mim",
      en: "About me",
    },
    projects: {
      pt: "Projetos",
      en: "Projects",
    },
  }

  return (
    <NavContainer>
      <MenuTabContainer
        isActive={activeTab === "about"}
        onClick={() => switchTab("about")}
      >
        <Title size="0.95rem" sizeMobile="0.85rem" tag="span">
          {menuTexts.about[currentLang]}
        </Title>
      </MenuTabContainer>

      <MenuTabContainer
        isActive={activeTab === "projects"}
        onClick={() => switchTab("projects")}
      >
        <Title size="0.95rem" sizeMobile="0.85rem" tag="span">
          {menuTexts.projects[currentLang]}
        </Title>
      </MenuTabContainer>
    </NavContainer>
  )
}

