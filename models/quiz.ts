import { QUIZ_CATEGORY } from "../enum/quizCategory"
import uuid from 'react-native-uuid';

export type Quiz = {
  id : string | Uint8Array
  title : string,
  image : NodeRequire,
  description : string,
  category : string,
  questions : any[]
}

// Simulated database
export const quizzes : Quiz[] = [
  {
    id : uuid.v1(),
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
    id : uuid.v1(),
    title : "Calculus",
    image : require("../assets/quiz/quiz-calculus.png"),
    description : "A beginner level of calculus topic in Mathematics",
    category : QUIZ_CATEGORY.MATHEMATICS,
    questions : [
      {
      question: "What is the derivative of x^2 with respect to x?",
      options: ["2x", "x^2", "2", "1"],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: "What is the integral of 2x with respect to x?",
      options: ["x^2", "x", "2x^2", "x^3"],
      correctAnswer: 2
    },
    {
      question: "What is the limit of (1/x) as x approaches infinity?",
      options: ["0", "1", "infinity", "undefined"],
      correctAnswer: 0
    },
    {
      question: "What is the derivative of sin(x) with respect to x?",
      options: ["cos(x)", "-sin(x)", "tan(x)", "cot(x)"],
      correctAnswer: 0
    },
    {
      question: "What is the integral of e^x with respect to x?",
      options: ["e^x", "ln(x)", "x^2/2", "e^x + C"],
      correctAnswer: 3
    },
    {
      question: "What is the derivative of ln(x) with respect to x?",
      options: ["1/x", "x", "cos(x)", "e^x"],
      correctAnswer: 0
    },
    {
      question: "What is the area under the curve y = x^2 from x = 0 to x = 2?",
      options: ["4", "8", "2", "6"],
      correctAnswer: 1
    },
    {
      question: "What is the derivative of a constant function?",
      options: ["0", "1", "2", "undefined"],
      correctAnswer: 0
    },
    {
      question: "What is the integral of a constant function?",
      options: ["0", "1", "x", "undefined"],
      correctAnswer: 2
    },
    {
      question: "What is the limit of (sin(x) / x) as x approaches 0?",
      options: ["1", "0", "infinity", "undefined"],
      correctAnswer: 0
    }
  ]
  }
]

export function fetchQuizByName(targetQuiz : Quiz){
  return quizzes.filter(quiz => quiz.title === targetQuiz.title)[0]
}