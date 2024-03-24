import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = ({title}) => {
  return (
    <div className='my-3'>
        <div className='container text-center'>
            <Link className='Rlink' to='/'>
                Home &nbsp; 
            </Link>/ {title}
        </div>
    </div>
  )
}

export default BackToHome