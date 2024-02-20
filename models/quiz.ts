export type Quiz = {
  title : string,
  image : NodeRequire,
  description : string
}

export const quizzes : Quiz[] = [
  {
    title : "Application development",
    image : require("../assets/quiz/quiz-application-development.png"),
    description : "This is the quiz to evaluate the learners about their application development skill"
  },
  {
    title : "Calculus",
    image : require("../assets/quiz/quiz-calculus.png"),
    description : "A beginner level of calculus topic in Mathematics"
  }
]

export function fetchQuizByName(quizName : string){
  return quizzes.filter(quiz => quiz.title === quizName)[0]
}