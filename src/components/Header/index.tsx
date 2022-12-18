import {
  CenterContainer,
  ContactContainer,
  ContactIcon,
  Container,
  LangButton,
  LangsContainer,
} from "./styles"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useLang } from "../../contexts/LangContext"

const Header = () => {
  const { currentLang, changeLangTo } = useLang()

  return (
    <Container>
      <LangsContainer>
        <LangButton
          selected={currentLang === "en"}
          onClick={() => changeLangTo("en")}
        >
          <span>EN</span>
        </LangButton>
        <LangButton
          selected={currentLang === "pt"}
          onClick={() => changeLangTo("pt")}
        >
          <span>PT</span>
        </LangButton>
      </LangsContainer>

      <CenterContainer>
        <h2>Gabriel Santana Silva</h2>
        {currentLang === "pt" ? (
          <h3> Desenvolvedor</h3>
        ) : (
          <h3> Developer</h3>
        )}
      </CenterContainer>

      <ContactContainer>
        <a href="https://github.com/punigc" target="_blank" rel="noopener noreferrer">
          <ContactIcon contactType={"github"}>
            <FaGithub size={"1.2rem"} /> <span>Github</span>
          </ContactIcon>
        </a>

        <a href="https://www.linkedin.com/in/gabriel-santana-silva/" target="_blank" rel="noopener noreferrer">
          <ContactIcon contactType={"linkedin"}>
            <FaLinkedin size={"1.2rem"} /> <span>Linkedin</span>
          </ContactIcon>
        </a>
      </ContactContainer>
    </Container>
  )
}

export default Header
