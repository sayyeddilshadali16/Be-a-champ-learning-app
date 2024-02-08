export const javascriptQuizz = {
    questions: [
      {
        question:
          "Which type of JavaScript language is ___.",
        choices: [
          "Object-Oriented",
          "Object-Based",
          "Assembly-language",
          "High-level",
        ],
        type: "MCQs",
        correctAnswer: "Object-Based",
      },
      {
        question: "Which one of the following also known as Conditional Expression:",
        choices: [
          "Alternative to if-else",
          "Switch statement",
          "If-then-else statement",
          "immediate if",
        ],
        type: "MCQs",
        correctAnswer: "immediate if",
      },
      {
        question:
          "The 'function' and 'var' are known as:",
        choices: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        type: "MCQs",
        correctAnswer: "Declaration statements",
      },
      {
        question: " Which of the following type of a variable is volatile?",
        choices: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
        type: "MCQs",
        correctAnswer: "Mutable variable",
      },
      {
        question: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        choices: [
          "toExponential()",
          "toFixed()",
          "toPrecision()",
          "toLocaleString()",
        ],
        type: "MCQs",
        correctAnswer: "toLocaleString()",
      },
    ],
  };
  
  export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };