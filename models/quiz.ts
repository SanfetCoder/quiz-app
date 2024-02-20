import { QUIZ_CATEGORY } from "../enum/quizCategory"

export type Quiz = {
  title : string,
  image : NodeRequire,
  description : string,
  category : string,
  questions : any[]
}

export const quizzes : Quiz[] = [
  {
    title : "Application development",
    image : require("../assets/quiz/quiz-application-development.png"),
    description : "This is the quiz to evaluate the learners about their application development skill",
    category : QUIZ_CATEGORY.PROGRAMMING,
    questions : [
      {
        question: "What is the primary purpose of React Native?",
        options: ["Building native iOS apps", "Building native Android apps", "Building cross-platform mobile apps", "Building web applications"],
        correctAnswer: 2
      },
      {
        question: "Which programming language is primarily used for building Android apps with Android Studio?",
        options: ["Java", "Swift", "Kotlin", "Objective-C"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of CSS in web development?",
        options: ["Defining the structure and layout of web pages", "Adding interactivity and functionality to web pages", "Storing data on the client-side", "Styling the appearance of web pages"],
        correctAnswer: 3
      },
      {
        question: "Which of the following is not a version control system?",
        options: ["Git", "SVN (Subversion)", "Mercurial", "Docker"],
        correctAnswer: 3
      },
      {
        question: "What does API stand for in the context of web development?",
        options: ["Application Process Interface", "Advanced Programming Interface", "Application Programming Interface", "Advanced Process Interface"],
        correctAnswer: 2
      },
      {
        question: "Which HTTP method is typically used for retrieving data from a server?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of a database in web development?",
        options: ["Storing and managing application data", "Defining the layout and structure of web pages", "Handling user interactions on the client-side", "Generating dynamic content on web pages"],
        correctAnswer: 0
      },
      {
        question: "Which of the following is not a valid data type in JavaScript?",
        options: ["String", "Array", "Tuple", "Boolean"],
        correctAnswer: 2
      },
      {
        question: "What does MVC stand for in the context of software architecture?",
        options: ["Model-View-Component", "Model-View-Controller", "Model-View-Configuration", "Model-View-Client"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a popular framework for building user interfaces in JavaScript?",
        options: ["Angular", "Laravel", "Django", "Flask"],
        correctAnswer: 0
      }
    ]
  },
  {
    title : "Calculus",
    image : require("../assets/quiz/quiz-calculus.png"),
    description : "A beginner level of calculus topic in Mathematics",
    category : QUIZ_CATEGORY.MATHEMATICS,
    questions : [
      {

      }
    ]
  }
]

export function fetchQuizByName(targetQuiz : Quiz){
  return quizzes.filter(quiz => quiz.title === targetQuiz.title)[0]
}