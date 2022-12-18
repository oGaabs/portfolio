import styled from "styled-components"
import { IImgContainerProps } from "../../interfaces/logoImg"
import { devices } from "../../styles/global"

export const ImgContainer = styled.img<IImgContainerProps>`
  width: ${(props) => props.widthMobile};
  height: ${(props) => props.heightMobile};

  @media ${devices.tablet} {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
  
`
