import { createContext, useState } from "react";

export const HomeContext = createContext();

const HomeProvider = ({children}) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null)

  function handleSelectQuiz(quiz){
    setSelectedQuiz(_ => quiz)
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