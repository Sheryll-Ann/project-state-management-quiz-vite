import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly
import { Summary } from "./Summary";
export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  const answers = useQuizStore((state) => (state.answers))
  const quizOver = useQuizStore((state) => state.quizOver);
  const submitted = useQuizStore((state) => state.submitted);

  const numberOfCorrectAnswer = useQuizStore((state) => state.numberOfCorrectAnswer);

  /*const { submitAnswer, goToNextQuestion, restart } = useQuizStore() infinite loop from Diego ?*/

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="managed-component">
      {/* Question title */}
      <h1>Question {question.id}: {question.questionText}</h1>

      {/* radio button answers  and check if it is correct, if it is correct, show the correct emoji✅, wrong emoji❌*/}
      <div>
        <ul>
          {question.options.map((option, index) => ( // https://www.geeksforgeeks.org/javascript-index-inside-map-function/
            <li key={option + 'li'}>
              < label
                className="radio-button-label"
                htmlFor="radio-btn"
                key={option} >
                <input
                  type="radio"
                  className="radio-button"
                  name="radio-btn"
                  value={option}
                  onChange={() => submitAnswer(question.id, index)}
                  required
                />
                {submitted ? (question.correctAnswerIndex === index ? option + ' ✅' : option + ' ❌') : option}
              </label>
            </li>
          ))}
        </ul>
      </div >

      <div className="next-btn-wrapper">
        <button
          className="next-btn"
          onClick={goToNextQuestion}>Next</button>
      </div>
      {/* <div className="summary-btn">
        {quizOver && (
                    <button className="go-to-summary-btn" onClick={<Summary />}>
                      Summarise
                    </button> 
          <Summary />
        )}
      </div> */}

      {/* create a progress bar */}
      <div className="progress-wrapper">
        <progress className="progress-bar" value={currentQuestionIndex + 1} max={questions.length} />
        <p>{currentQuestionIndex + 1}/{questions.length}</p>
      </div>

    </div >
  );
};
