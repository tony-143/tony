import React from 'react'

const Options = ({ optionData, onClickAns }) => {
    return (
        <div className='mx-auto col-6 text-center'>
            {optionData.map((data, i) => {
                return <button key={i} onClick={()=>{
                    onClickAns(data.isCorrect)
                }} className='btn w-100 m-3 btn-secondary'>
                    {data.text}
                </button>
            })}
        </div>
    )
}

export default Options