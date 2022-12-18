import { ITitleProps } from "../../interfaces/title"
import { TitleContainer } from "./styles"

export default function Title ({
  children,
  tag: Tag = "h1",
  size = "2rem",
  sizeMobile = size,
  wheight = 600,
  wheightMobile = wheight,
}: ITitleProps) {
  return (
    <TitleContainer
      fontSize={size}
      fontSizeMobile={sizeMobile}
      fontWheightMobile={wheightMobile}
      fontWheight={wheight}
    >
      <Tag>{children}</Tag>
    </TitleContainer>
  )
}

