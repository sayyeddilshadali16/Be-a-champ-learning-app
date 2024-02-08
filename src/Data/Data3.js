export const expressQuizz = {
    questions: [
      {
        question:
          "Which of the following are the core features of the Express framework?",
        choices: [
          "It allows us to set up middleware to respond to HTTP Requests.",
          "It defines a routing table that can work as per HTTP Method and URL.",
          "It is used to render the HTML pages dynamically.",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: "What is the way to store local variables that can be accessed within the application?",
        choices: [
          "Using Config file",
          "Using database",
          "Using app.locals",
          "Using app.storage",
        ],
        type: "MCQs",
        correctAnswer: "Using app.locals",
      },
      {
        question:
          "In combination with a request method, root paths define the endpoints at which requests can be made. Which of the following are valid forms of route path?",
        choices: ["strings", "string patterns", "regular expressions", "All of the above"],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: "Where are the captured values populated regarding the route parameters?",
        choices: ["req.data", "app.locals", "req.params", "All of the above"],
        type: "MCQs",
        correctAnswer: "req.params",
      },
      {
        question: "How is it possible to create chainable route handlers for a route path in Express.js?",
        choices: [
          "Using app.route()",
          "Using app.routes()",
          "Using app.router()",
          "Using app.routing()",
        ],
        type: "MCQs",
        correctAnswer: "Using app.route()",
      },
    ],
  };
  
  export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };