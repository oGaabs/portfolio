import styled from "styled-components"
import { ITitleContainerProps } from "../../interfaces/title"
import { devices } from "../../styles/global"

export const TitleContainer = styled.div<ITitleContainerProps>`
  font-family: var(--font-title);

  font-size: ${(props) => props.fontSizeMobile};
  font-weight: ${(props) => props.fontWheightMobile};

  transition: var(--transition);

  @media ${devices.tablet} {
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWheight};
  }
  &:hover {
    color: var(--color-highlight);
    transform: scale(1.1);
  } 
`
