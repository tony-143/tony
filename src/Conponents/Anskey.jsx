import React from 'react'

const Anskey = ({Questions,answers,reset}) => {
    const correctAns=answers.filter((ans)=>ans).length

  return (
    <div>
        <h3 className='text-center my-3'>Your score {correctAns} out of {Questions.length}
        <span className='text-danger' onClick={()=>{reset()}}> --Click to Restart</span>
        </h3>
       <ol className='list-group-numbered'>
       {Questions.map((q,i)=>{
            if(answers[i]){
                return (
            <li className='text-success' key={i}>
            {q.question}
           </li> )}
           else{
            return (
                <li className='text-danger' key={i}>
                {q.question}
               </li>
            )
           }
        })}
       </ol>
    </div>
  )
}

export default Anskey