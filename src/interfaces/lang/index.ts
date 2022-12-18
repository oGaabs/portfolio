export type ILanguage = "pt" | "en" 

export interface ILangContextData {
  currentLang: ILanguage
  changeLangTo: (lang: ILanguage) => void
}

export interface ILangButtonProps {
  selected: boolean
}
