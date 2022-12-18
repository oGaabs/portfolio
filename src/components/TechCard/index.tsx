import { ITech } from "../../interfaces/techs"
import LogoImg from "../LogoImg"
import Title from "../Title"
import { CardContainer } from "./styles"

export default function TechCard({ logoSrc, name }: ITech) {
  return (
    <CardContainer>
      <LogoImg alt={name} src={logoSrc} />
      <Title size="1.2rem" wheight={500} tag="span">
        {name}
      </Title>
    </CardContainer>
  )
}