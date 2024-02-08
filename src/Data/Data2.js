export const htmlQuizz = {
  questions: [
    {
      question:
        "What does the abbreviation HTML stand for?",
      choices: [
        "HyperText Markup Language",
        "HighText Markup Language",
        "HyperText Markdown Language",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "HyperText Markup Language",
    },
    {
      question: "How many sizes of headers are available in HTML by default?",
      choices: [
        "5",
        "1",
        "3",
        "6",
      ],
      type: "MCQs",
      correctAnswer: "6",
    },
    {
      question:
        "What is the smallest header in HTML by default?",
      choices: ["h1", "h2", "h6", "h4"],
      type: "MCQs",
      correctAnswer: "h6",
    },
    {
      question: "How to create an ordered list in HTML?",
      choices: ["<ul>", "<ol>", "<href>", "<b>"],
      type: "MCQs",
      correctAnswer: "<ol>",
    },
    {
      question: "HTML files are saved by default with the extension?",
      choices: [
        ".html",
        ".h",
        ".ht",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: ".html",
    },
  ],
};

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};