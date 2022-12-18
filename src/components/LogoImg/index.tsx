import { ILogoImgProps } from "../../interfaces/logoImg"
import { ImgContainer } from "./styles"

export default function LogoImg({
  src,
  alt,
  height = "auto",
  width = "50%",
  heightMobile = height,
  widthMobile = width,
}: ILogoImgProps) {
  return (
    <ImgContainer
      src={src}
      alt={alt}
      width={width}
      height={height}
      widthMobile={widthMobile}
      heightMobile={heightMobile}
    />
  )
}

