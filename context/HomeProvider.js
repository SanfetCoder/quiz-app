import { createContext, useState } from "react";

export const HomeContext = createContext();

const HomeProvider = ({children}) => {
  const [selectedQuiz, setSelectedQuiz] = useState("none selected")

  function handleSelectQuiz(quizName){
    setSelectedQuiz(_ => quizName)
  }

  return (
    <HomeContext.Provider 
      value={{
        selectedQuiz,
        handleSelectQuiz
      }}
      >
      {children }
    </HomeContext.Provider>
  )
}

export default HomeProvider