export type IMenuActiveTab = "about" | "projects"

export interface IMenuContextData {
  activeTab: IMenuActiveTab
  switchTab: (tab: IMenuActiveTab) => void
}

export interface IMenuTabContainerProps {
  isActive: boolean
}
