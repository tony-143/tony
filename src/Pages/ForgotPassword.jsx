import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    let [error, setError] = useState({
        email: "", password: ""
      })
      let login = () => {
        if (email.current.value === '') {
          setError({ ...error, email: "enter email" })
        }
        
        else{
          setError({ ...error,email:"", password: "" })
        }
      }
      let email = useRef()
  return (
    <div className='container-xxl pt-5 mx-auto row mt-5'>
    <div className="shadow mx-auto col-md-6 col-12 border mt-5 d-flex flex-column gap-5 p-4">
      <h1 className='mx-auto text-rimary'>Login</h1>
      <div className='d-flex flex-column'>
        <input ref={email} type="email" placeholder='email' className='p-2 border' />
        {error.email && <span className='text-danger'>{error.email}</span>}
      </div>
     
      <div className="btns d-flex gap-5 mx-auto">
        <Link to="/"> <button onClick={login} className='btn border shadow btn-warning px-2 rounded-pill'>
          Submit</button></Link>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword