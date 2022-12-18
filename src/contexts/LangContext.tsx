import { createContext, useContext, useState } from "react"
import { IParentComponentProps } from "../interfaces"
import { ILanguage, ILangContextData } from "../interfaces/lang"

const LangContext = createContext<ILangContextData>({} as ILangContextData)

export const useLang = () => useContext(LangContext)

export const LangProvider = ({ children }: IParentComponentProps) => {
  const [currentLang, setCurrentLang] = useState<ILanguage>("pt")

  const switchLang = (lang: ILanguage) => {
    setCurrentLang(lang)
  }

  return (
    <LangContext.Provider value={{ currentLang, changeLangTo: switchLang }}>
      {children}
    </LangContext.Provider>
  )
}
