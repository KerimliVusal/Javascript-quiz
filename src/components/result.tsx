import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { questiondata } from "./data"
import { Props } from "./quiz"
type Prop={
    result:Props,
    reset:()=>void,
}
const Result:React.FC<Prop>=({result,reset})=>{
    const { questions } = questiondata

    return(
        <Container>
              <Row lg={1} className='resultrow'><Col lg={7} xs={10}>
       <Row lg={1} className='resultrow2 p-4' xs={1} sm={1} >
        <Col><h2 >Result</h2></Col>
          <Col > < p className='resultrow1'>
          <span>  Total Question:</span> <span>{questions.length}</span>
          </p></Col>
         
          <Col ><p className='resultrow1'> 
          <span> Total Score:</span> <span> {result.score}</span>
          </p></Col>
         <Col > < p className='resultrow1'>
         <span>   Correct Answers:</span> <span> {result.correctAnswers}</span>
          </p></Col>
          <Col ><p  className='resultrow1'>
          <span>  Wrong Answers:</span> <span> {result.wrongAnswers}</span>
          </p></Col>
          <Col className='my-3'><button onClick={()=>reset()}>Reset</button></Col>
          </Row>
        </Col></Row>
        </Container>
    )
};export default Result