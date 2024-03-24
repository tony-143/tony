import { useState } from 'react'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Layout from './Components/Layout'
import './app.css'
import OurStore from './Pages/OurStore'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import LoginPage from './Pages/LoginPage'
import SignUp from './Pages/SignUp'
import ForgotPassword from './Pages/ForgotPassword'
function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='blog' element={<BlogPage/>}/>
      <Route path='store' element={<OurStore/>}/>
      <Route path='contactPage' element={<ContactPage/>}/>
      </Route>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/forgotPassword' element={<ForgotPassword/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
