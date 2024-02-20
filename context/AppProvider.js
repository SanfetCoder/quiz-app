import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [favQuizzes, setFavQuizzes] = useState([]);

  function handleAddFavQuizzes(newQuiz) {
    setFavQuizzes(prev => [...prev, newQuiz])
  }

  function handleRemoveQuiz(targetQuiz){
    setFavQuizzes(prev => prev.filter(quiz => quiz.title !== targetQuiz.title))
  }
  
  return (
    <AppContext.Provider
      value={{
        favQuizzes,
        handleAddFavQuizzes,
        handleRemoveQuiz
      }}
    >
      {children}
    </AppContext.Provider>
  )
}