
import About from "../../components/About"
import Menu from "../../components/Menu"
import ProjectList from "../../components/ProjectList"
import TechList from "../../components/TechList"
import { useMenu } from "../../contexts/MenuContext"
import {
    AsideContainer,
    Container,
    FooterContainer,
    MainContainer,
} from "./styles"

import avatarDev from "../../assets/images/dev_ga.jpeg"
import { HiDocumentDownload } from "react-icons/hi"
import { ContactContainer, ContactIcon } from "../../components/Header/styles"
import { NavLink } from "react-router-dom"

const Home = () => {
    const { activeTab } = useMenu()

    return (
        <Container>
            <div>
                <MainContainer>
                    <Menu />
                    {activeTab === "about"
                        ? <About />
                        : <ProjectList />}

                </MainContainer>

                <AsideContainer>
                    <div>
                        <img src={avatarDev} alt="Developer!" />
                        <ContactContainer>
                            <NavLink to={'/cv'}>
                                <ContactIcon contactType={"cv"}>
                                    <HiDocumentDownload size={"1.2rem"} /> <span>Download CV.pdf</span>
                                </ContactIcon>
                            </NavLink>
                        </ContactContainer>
                    </div>
                </AsideContainer>

            </div>

            <FooterContainer>
                <TechList />
            </FooterContainer>
        </Container>
    )
}

export default Home
