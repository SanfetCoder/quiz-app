import { createContext } from "react";

export const MainScreenContext = createContext();

const MainScreenProvider = ({children, selectedCategory, setSelectedCategory}) => {
  return (
    <MainScreenContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </MainScreenContext.Provider>
  )
}

export default MainScreenProvider