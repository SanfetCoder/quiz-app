import { createContext, useState } from "react";

export const InQuizContext = createContext();

export const InQuizProvider = ({children}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  return (
    <InQuizContext.Provider 
      value={{
        currentQuestionIndex
      }}
    >
      {children}
    </InQuizContext.Provider>
  )
}