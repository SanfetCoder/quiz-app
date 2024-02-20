export type Quiz = {
  title : string,
  image : string,
  description : string
}

export const quizzes : Quiz[] = [
  {
    title : "Application development",
    image : "quiz-application-development.png",
    description : "This is the quiz to evaluate the learners about their application development skill"
  },
  {
    title : "Calculus",
    image : "quiz-calculus.png",
    description : "A beginner level of calculus topic in Mathematics"
  }
]