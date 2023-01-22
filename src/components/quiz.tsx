import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { questiondata } from './data';
import '../components/quiz.css'
import { useState } from 'react';
import Result from './result';
export type Props={
    score:number,
    correctAnswers:number,
    wrongAnswers:number
}
const Quiz=()=>{
    const [activeQuestion, setActiveQuestion] = useState<number>(0)
    const [selectedAnswer, setSelectedAnswer] = useState<string|boolean>('')
    const [showResult, setShowResult] = useState<boolean>(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<any>(null)
    const [result, setResult] = useState<Props>({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
  
    const { questions } = questiondata
    const { question, choices, correctAnswer } = questions[activeQuestion]
  
    const onClickNext = () => {
      setSelectedAnswerIndex(null)
      setResult((prev:any) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      )
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev:any) => prev + 1)
      } else {
        setActiveQuestion(0)
        setShowResult(true)
      }
    }
  
    const onAnswerSelected = (answer:any, index:number) => {
      setSelectedAnswerIndex(index)
      if (answer === correctAnswer) {
        setSelectedAnswer(true)
      } else {
        setSelectedAnswer(false)
      }
    }
  
    const addLeadingZero = (number:any) => (number > 9 ? number : `0${number}`)
    const reset=()=>{
        setActiveQuestion(0)
        setShowResult(false)
        setResult({
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
          })

    }
    return(<Container fluid className='quizcontainer'>
        <Row lg={1}  className='backlogo'></Row>
        <Row lg={1}  className='backlogo2'></Row>
        <Row lg={1} className='quiz5'>
            <Col lg={12} xs={12}>
            <div >
      {!showResult ? (
        <div className="quiz-container">
          <div >
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <Row lg={1}>
            <Col className='questionh3' xs={12}><h3>{question}</h3></Col>
          </Row>
          
          <ul>
            {choices.map((answer:any, index:number) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                    selectedAnswerIndex === index ? 'selected-answer' : ""
                  }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
     <Result result={result} reset={reset}/>
      )}
    </div>
            </Col>
        </Row>
    </Container>)
};
export default Quiz