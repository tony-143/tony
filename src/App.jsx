import { useState } from 'react'
import Questions from './Conponents/Questions.json'
import Options from './Conponents/Options'
import Anskey from './Conponents/Anskey'

function App() {
  let [questionNum,setQuestionNum]=useState(0)
  let [answers,setAnswers]=useState([])
  
  let handleNextQ=(ans)=>{
     setQuestionNum(questionNum+1)
    setAnswers([...answers,ans])
  }
  let reset=()=>{setQuestionNum(0);setAnswers([])}
  return (
    <>
    <div className="container  mx-auto row mt-5">
      <h1 className="text-center">Quiz App</h1>

      {questionNum< Questions.length-1 &&( <div className="border bg-warning border-black shadow mx-auto col-12 col-md-6 col-lg-6 p-3 mt-3">
       <h3 className='text-center mb-5 pt-3'>{Questions[questionNum].question}</h3>
      <Options onClickAns={handleNextQ} optionData={Questions[questionNum].answerOptions}/>
      </div>)}
      
     
      {questionNum===Questions.length-1&&(
         <div className='border border-black shadow mx-auto  w-100 p-3 mt-3'>
        <Anskey 
        Questions={Questions}
        answers={answers}
        reset={reset}
        ></Anskey></div>
      )}

    </div>
    </>
  )
}

export default App
