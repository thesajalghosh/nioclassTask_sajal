
import { useState, useEffect } from 'react';
import './App.css';
import { MathJax } from "better-react-mathjax"

function App() {

  const [questionID, setQuestionID] = useState('AreaUnderTheCurve_901')
  const [questionData, setQuestionData] = useState([])
  const [arrayIndex, setArrayIndex] = useState(0);

  const QuestionArray = ['AreaUnderTheCurve_901', 'BinomialTheorem_901', 'DifferentialCalculus2_901']


  useEffect(() => {
    fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionID}`)
      .then(response => response.json())
      .then(data => setQuestionData(data))
      .catch(error => console.log(error));



  }, [questionID]);


  console.log(arrayIndex);

  const handlePrevQuestion = () => {
    setQuestionID(QuestionArray[arrayIndex - 1])

    setArrayIndex(arrayIndex - 1);


  }

  const handleNextQuestion = () => {

    setArrayIndex(arrayIndex + 1)
    setQuestionID(QuestionArray[arrayIndex + 1])
  }
  console.log(QuestionArray[arrayIndex])


  return (
    <div className="App">
      <div className="heading">Math Questions</div>
      <div className="App__container">

        <MathJax>
          <h2 className="app__heading">{questionData[0]?.Question}</h2>
        </MathJax>
        <input placeholder="Write your answer" className="app__placeholder" />
        <div className="app__button">
          {arrayIndex > 0 && <button onClick={handlePrevQuestion} className="app__btn"> Previous Question </button>}
          {arrayIndex < 2 && <button onClick={handleNextQuestion} className="app__btn"> Next Question </button>}
        </div>

      </div>
    </div>
  );
}

export default App;
