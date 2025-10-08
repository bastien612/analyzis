export const HomePageTab = {
  Global: "Global",
  Company: "Company",
} as const
export type HomePageTabEnum = (typeof HomePageTab)[keyof typeof HomePageTab]

export function tabToValue(tab: HomePageTabEnum): 0 | 1 {
  switch (tab) {
    case HomePageTab.Global:
      return 0
    case HomePageTab.Company:
      return 1
    default:
      return 0
  }
}

export function valueToTab(value: number): HomePageTabEnum {
  switch (value) {
    case 0:
      return HomePageTab.Global
    case 1:
      return HomePageTab.Company
    default:
      return HomePageTab.Global
  }
}
