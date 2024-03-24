import React, { useRef, useState } from 'react'

const SignUp = () => {
  let [text, setText] = useState("")
  let name = useRef(null)
  let email = useRef(null)
  let password = useRef(null)
  let Cpassword = useRef(null)

  let [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    Cpassword: ""
  })
  let submit = () => {
    if (name.current.value === '') {
      setError({
        ...error,
        name: "enter name",
      })
    }
    else if(email.current.value===''){
      setError({
        ...error,
        email: "enter email",
       
      })
    }
    else if(password.current.value===''){
      setError({
        ...error,
        password: "enter password",
      
      })
    }
    else if(Cpassword.current.value===''){
      setError({
        ...error,
        password: "enter password",
        Cpassword: "conform password"
      })
    }
    else if(password.current.value!==Cpassword.current.value){
      alert("password not matched")
    }
    else {
      alert('submitted successfully')
      setError({
        ...error,
        name: "",
        email: "",
        password: "",
        Cpassword: ""
      })

    }
  }
  return (
    <div className='container-xxl pt-5 mx-auto row mt-5'>
      <div className="shadow mx-auto col-md-6 col-12 border mt-5 d-flex flex-column gap-4 p-4">
        <h1 className='mx-auto text-primary h2'>Sign up</h1>
        <div>
          <input id='name' type="text" ref={name} placeholder='name' className={`p-2 ${text} form-control`} />
          {error.name && <span className='text-danger'>{error.name}</span>}
        </div>
        <div>
          <input type="email" ref={email} placeholder='email' className='p-2 border form-control' />
          {error.email && <span className='text-danger'>{error.email}</span>}
        </div>
        <div>
          <input type="password" ref={password} placeholder='current password' className='p-2 border form-control' />
          {error.password && <span className='text-danger'>{error.password}</span>}
        </div>
        <div>
          <input type="password" ref={Cpassword} placeholder='password' className='p-2 border form-control' />
          {error.Cpassword && <span className='text-danger'>{error.Cpassword}</span>}
        </div>

        <div className="btns d-flex gap-5 mx-auto">
          <button
            onClick={submit}
            className='btn border shadow btn-primary px-3 rounded-pill'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp