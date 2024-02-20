import { QUIZ_CATEGORY } from "../enum/quizCategory"

export type Quiz = {
  title : string,
  image : NodeRequire,
  description : string,
  category : string
}

export const quizzes : Quiz[] = [
  {
    title : "Application development",
    image : require("../assets/quiz/quiz-application-development.png"),
    description : "This is the quiz to evaluate the learners about their application development skill",
    category : QUIZ_CATEGORY.PROGRAMMING
  },
  {
    title : "Calculus",
    image : require("../assets/quiz/quiz-calculus.png"),
    description : "A beginner level of calculus topic in Mathematics",
    category : QUIZ_CATEGORY.MATHEMATICS
  }
]

export function fetchQuizByName(targetQuiz : Quiz){
  return quizzes.filter(quiz => quiz.title === targetQuiz.title)[0]
}