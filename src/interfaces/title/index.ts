import { ElementType, ReactNode } from "react"

export interface ITitleProps {
  children?: ReactNode
  size?: string
  sizeMobile?: string
  wheight?: number
  wheightMobile?: number
  tag?: ElementType
}

export interface ITitleContainerProps {
  fontSize: string
  fontWheight: number
  fontSizeMobile?: string
  fontWheightMobile?: number
}
