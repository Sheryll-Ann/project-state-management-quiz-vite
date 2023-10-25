import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  const quizOver = useQuizStore((state) => state.quizOver);

  /*const { submitAnswer, goToNextQuestion, restart } = useQuizStore() infinite loop from Diego ?*/

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="managed-component">
      {/* Question tilte */}

      <h1>Question: {question.questionText}</h1>
      {/* radio button answers  and check if it is correct, if it is correct, show the correct emoji✅, wrong emoji❌*/}
      <div className="answer-options">
        {question.options.map(
          (
            option,
            index // https://www.geeksforgeeks.org/javascript-index-inside-map-function/
          ) => (
            <label
              className="radio-button-label"
              htmlFor="radio-btn"
              key={option}
            >
              <input
                type="radio"
                className="radio-button"
                name="radio-btn"
                value={option}
                onChange={submitAnswer(question.id, index)}
                //checked={value === option}
              />
              {option}
            </label>
          )
        )}
      </div>
      <div className="next-btn-wrapper">
        <button className="next-btn" onClick={goToNextQuestion}>
          Next
        </button>
      </div>
      {/* create a progress bar */}
      <div className="progress-wrapper">
        <progress className="progress-bar" value="65" max="100" />
      </div>
    </div>
  );
};
