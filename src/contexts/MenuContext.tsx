import { createContext, useContext, useState } from "react"
import { IParentComponentProps } from "../interfaces"
import { IMenuActiveTab, IMenuContextData } from "../interfaces/menu"

const MenuContext = createContext<IMenuContextData>({} as IMenuContextData)

export const useMenu = () => useContext(MenuContext)

export const MenuProvider = ({ children }: IParentComponentProps) => {
  const [activeTab, setActiveTab] = useState<IMenuActiveTab>("about")

  const switchTab = (tab: IMenuActiveTab) => {
    setActiveTab(tab)
  }

  return (
    <MenuContext.Provider value={{ activeTab, switchTab }}>
      {children}
    </MenuContext.Provider>
  )
}
