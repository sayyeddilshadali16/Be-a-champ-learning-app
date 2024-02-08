export const nodeQuizz = {
    questions: [
      {
        question:
          "Which of the following statements are true?",
        choices: [
          "node js is Server Side Language.",
          "node js is the Client Side Language.",
          "node js is both Server Side and Client Side Language.",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "node js is Server Side Language.",
      },
      {
        question: "What does the REPL stand for?",
        choices: [
          "REPL stands for Read Eval Print Loop.",
          "REPL stands for Research Eval Program Learn.",
          "REPL stands for Read Earn Point Learn.",
          "REPL stands for Read Eval Point Loop.",
        ],
        type: "MCQs",
        correctAnswer: "REPL stands for Read Eval Print Loop.",
      },
      {
        question:
          "Which of the following command is used to start a REPL session?",
        choices: ["$ node", "$ node start", "$ node repl", "$ node console"],
        type: "MCQs",
        correctAnswer: "$ node",
      },
      {
        question: " Which of the following command is used to install the Node.js express module?",
        choices: ["$ npm install express", "$ node install express", "$ install express", "None of the above"],
        type: "MCQs",
        correctAnswer: "$ npm install express",
      },
      {
        question: "The Node.js modules can be exposed using:",
        choices: [
          "expose",
          "module",
          "exports",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "exports",
      },
    ],
  };
  
  export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };