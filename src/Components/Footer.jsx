import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Footer = () => {
  const form = useRef();
  const input = useRef();
  const sendEmail = (e) => {
    if (input.current.value) {
      e.preventDefault();
      emailjs
        .sendForm('service_utvxt7d', 'template_oivu6ai', form.current, {
          publicKey: 'mghG9u4uyDgrB_lsO',
        })
        .then(
          () => {
            alert("Submited Successfully")

          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else { alert("please enter email") }
  };
  return (
    <div className='bg-dark text-light'>

      <div className='row p-4 border gap-3 gap-md-0'>
        <div className='col-md-6 col-12 ' style={style}>
          <span className="material-symbols-outlined mx-4" style={{ scale: '2' }}>
            send
          </span><h5>Sign Up for Newsletter</h5>
        </div>
        <div className='col-md-6 col-12'>
          <form ref={form} onSubmit={sendEmail} className='input-group mx-auto d-flux w-md-50 w-75'>
            <input ref={input} type="email" name="user_email" placeholder='enter email' className=' mx-auto form-control w-50 py-1 px-2 ' />
            <button className='btn btn-dark border input-group-item '>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='row p-5'>
        <div className='col-md-2 col-12'>
          <h2 className='ms-4 ps-1' style={{ fontSize: "20px", fontWeight: 'bold' }}> Contact Us</h2>
          <ul style={{ listStyle: 'none' }} className=''>
            <li className='mb-3 mt-3'>ToNy MaRt</li>
            <li className='mb-3'>No.4/1452-9,Proddatur</li>
            <li className='mb-4'>Andhra Pradesh</li>
            <li className='mb-3'>91+ 8555047507</li>
            <li className='mb-3'>saiteja084084@gmail.com</li>
            <li className='mb-3' style={{ display: 'flex', gap: '25px' }}>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-github"></i>
            </li>
          </ul>
        </div>
        <div className='col-md-2 col-12'>
          <h2 className='ms-4 ps-1' style={{ fontSize: "20px", fontWeight: 'bold' }}> Information</h2>
          <ul style={{ listStyle: 'none' }} className=''>
            <li className='mb-3 mt-3'>Privacy Policy</li>
            <li className='mb-3'>Refund Policy</li>
            <li className='mb-4'>Shipping Policy</li>
            <li className='mb-3'>Terms of services</li>
            <li className='mb-3'>Blogs</li>
          </ul>
        </div>
        <div className='col-md-2 col-12'>
          <h2 className='ms-4 ps-1' style={{ fontSize: "20px", fontWeight: 'bold' }}> Account</h2>
          <ul style={{ listStyle: 'none' }} className=''>
            <li className='mb-3 mt-3'>Search</li>
            <li className='mb-3'>About Us</li>
            <li className='mb-4'>Faq</li>
            <li className='mb-3'>Contact</li>
            <li className='mb-3'>Size chart</li>
          </ul>
        </div>
        <div className='col-md-2 col-12'>
          <h2 className='ms-4 ps-1' style={{ fontSize: "20px", fontWeight: 'bold' }}> Quick Links</h2>
          <ul style={{ listStyle: 'none' }} className=''>
            <li className='mb-3 mt-3'>Accessories</li>
            <li className='mb-3'>Laptops</li>
            <li className='mb-4'>Head Phones</li>
            <li className='mb-3'>Smart Watches</li>
            <li className='mb-3'>Tables</li>
          </ul>
        </div>
        <div className='col-md-3 col-12'>
          <h2 className='ms-4 ps-1' style={{ fontSize: "20px", fontWeight: 'bold' }}>Our App</h2>
          <p className='ms-4 ps-1 mt-5'>Download our App and get extra 15% Discount On your First Order...!</p>
          <button className='btn ms-4 ps-1 mt-2 btn-light'>
            <i class="fa-brands fa-google-play me-3"></i>GooglePlay Store
          </button>
          <button className='btn ms-4 ps-1 mt-2 btn-light'>
          <i class="fa-brands fa-apple me-3"></i>App Store
          </button>
        </div>
      </div>



      <div className='row border'>
        <span className='text-center end mx-auto col-12'>
          @ 2024:Powered by Developer's Box
        </span>
      </div>
    </div>
  )
}
let style = { display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }

export default Footer