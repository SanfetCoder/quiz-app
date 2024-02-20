import { createContext, useState } from "react";

export const InQuizContext = createContext();

export const InQuizProvider = ({children}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  return (
    <InQuizContext.Provider 
      value={{
        currentQuestionIndex,
        setCurrentQuestionIndex,
        currentScore,
        setCurrentScore
      }}
    >
      {children}
    </InQuizContext.Provider>
  )
}