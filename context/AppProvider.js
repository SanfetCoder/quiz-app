import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [favQuizzes, setFavQuizzes] = useState([]);
  return (
    <AppContext.Provider
      value={{
        favQuizzes
      }}
    >
      {children}
    </AppContext.Provider>
  )
}