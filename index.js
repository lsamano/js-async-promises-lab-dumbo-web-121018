const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

const blank = () => {}

let question;
questionContainer = document.querySelector(".question-container")

const appendQuestion = question => {
  questionContainer.innerText = question.questionText;
}

const askQuestionThen = time => {
  question = questions[Math.floor(Math.random()*this.length)];
  appendQuestion(question);
  return new Promise (() => setTimeout(blank, time))
}

const removeQuestion = () => {
  questionContainer.innerText = ""
  return new Promise (blank);
}

const askQuestionThenRemoveQuestion = time => {
  return askQuestionThen(time)
  .then(removeQuestion)
}

const trueAndFalseButtons = () => {
  return document.querySelector(".true-false-list").querySelectorAll(".btn")
}

const toggleTrueAndFalseButtons = () => {
  trueAndFalseButtons().forEach(button => {
    if (button.classList.contains("hide")) {
      button.classList.remove("hide")
    } else {
      button.classList.add("hide")
    }
  })
}

const displayQuestionOnClick = () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
}
