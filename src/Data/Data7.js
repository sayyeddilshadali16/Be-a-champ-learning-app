export const cssQuizz = {
  questions: [
    {
      question:
        "CSS stands for -",
      choices: [
        "Cascade style sheets",
        "Color and style sheets",
        "Cascading style sheets",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "Cascading style sheets",
    },
    {
      question: "Which of the following is the correct syntax for referring the external style sheet?",
      choices: [
        "<style src = example.css>",
        "<style src = 'example.css' >",
        "<stylesheet> example.css </stylesheet>",
        "<link rel='stylesheet' type='text/css' href='example.css'>",
      ],
      type: "MCQs",
      correctAnswer: "<link rel='stylesheet' type='text/css' href='example.css'>",
    },
    {
      question:
        "The property in CSS used to change the background color of an element is -",
      choices: ["bgcolor", "color", "background-color", "All of the above"],
      type: "MCQs",
      correctAnswer: "background-color",
    },
    {
      question: "The CSS property used to control the element's font-size is -",
      choices: ["text-style", "text-size", "font-size", "None of the above"],
      type: "MCQs",
      correctAnswer: "font-size",
    },
    {
      question: "The HTML attribute used to define the internal stylesheet is -",
      choices: [
        "<style>",
        "style",
        "<link>",
        "<script>",
      ],
      type: "MCQs",
      correctAnswer: "style",
    },
  ],
};

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};