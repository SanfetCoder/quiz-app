import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [favQuizzes, setFavQuizzes] = useState([]);

  function handleAddFavQuizzes(newQuiz) {
    setFavQuizzes(prev => [...prev, newQuiz])
  }
  
  return (
    <AppContext.Provider
      value={{
        favQuizzes,
        handleAddFavQuizzes
      }}
    >
      {children}
    </AppContext.Provider>
  )
}