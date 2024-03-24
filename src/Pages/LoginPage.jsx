import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  let [error, setError] = useState({
    email: "", password: ""
  })
  let login = () => {
    if (email.current.value === '') {
      setError({ ...error, email: "enter email" })
    }
    else if (password.current.value === '') {
      setError({ ...error, password: "enter password" })
    }
    else{
      setError({ ...error,email:"", password: "" })
    }
  }
  let email = useRef()
  let password = useRef()
  return (
    <div className='container-xxl pt-5 mx-auto row mt-5'>
      <div className="shadow position-relative mx-auto col-md-5 col-sm-8 col-12 border mt-5 d-flex flex-column gap-4 pb-2 p-4">
        <h1 className='mx-auto text-rimary'>Login</h1>
        <div className='d-flex flex-column'>
          <input ref={email} type="email" placeholder='email' className='p-2 border' />
          {error.email && <span className='text-danger'>{error.email}</span>}
        </div>
        <div className='d-flex flex-column'>
          <input ref={password} type="password" placeholder='password' className='p-2 border' />
          {error.password && <span className='text-danger' >{error.password}</span>}
          <Link to='/forgotPassword' className='Rlink fs-8 ps-1'>Forgot Password?</Link>
        </div>
        <div className="btns mt-3 d-flex gap-5 mx-auto">
          <button onClick={login} className='btn border shadow btn-primary px-3 rounded-pill'>Login</button>
          <Link to="/signup"> <button className='btn border shadow btn-warning px-2 rounded-pill'>
            Sign Up</button></Link>
        </div>
        <Link to='/'> <div className="position-absolute top-0 end-0 p-2">❌</div></Link>
      </div>
    </div>
  )
}

export default LoginPage