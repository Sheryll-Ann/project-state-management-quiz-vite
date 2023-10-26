import useQuizStore from "../stores/useQuizStore";
import { Loader } from 'react-js-loader'

export const Summary = () => {
  const quizOver = useQuizStore((state) => state.quizOver);
  const restart = useQuizStore((state) => state.restart);

  const answers = useQuizStore((state) => state.answers);
  // const numberOfCorrectAnswers = useQuizStore((state) => state.numberOfCorrectAnswers);
  const numberOfCorrectAnswer = answers.filter((a) => (a.isCorrect === true));


  return (
    <div className="summary-part">
      {/* create the summary part, show the how many questions that user has answered correct
        <p>You have answered 2 correct questions</p> 
        */}

      {/* <div className="item">
                <Loader type="spinner-circle" bgColor={black} color={#f26a1b} title={"spinner-circle"} size={100} />
            </div> */}
      <p>Number of correct answers: {numberOfCorrectAnswer.length}</p>
      {/* <p>{numberOfCorrectAnswers}</p> */}


      {/* show the picture when the user answered how many correct questions */}
      {/* restart button */}
      {quizOver && (
        <button className="restart-btn" onClick={restart}>
          Restart
        </button>
      )}
    </div>
  );
};

