export const mongodbQuizz = {
    questions: [
      {
        question:
          " Amongst which of the following is / are true about MongoDB?",
        choices: [
          "MongoDB is a cross-platform database",
          "Document oriented database",
          "High performance database",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: "The data model available within MongoDB allows us to represent ___.",
        choices: [
          "Hierarchical relationships",
          "Able to handle complex structures",
          "both a and b",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "both a and b",
      },
      {
        question:
          "A record in MongoDB is a ___.",
        choices: ["Document", "Table", "Application", "None of the mentioned above"],
        type: "MCQs",
        correctAnswer: "Document",
      },
      {
        question: "MongoDB stores documents in ___.",
        choices: ["Store", "Collections", "Indexes", "None of the mentioned above"],
        type: "MCQs",
        correctAnswer: "Collections",
      },
      {
        question: "The Collections screen ___ the existing collections.",
        choices: [
          "Lists",
          "Package",
          "Network",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Lists",
      },
    ],
  };
  
  export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };