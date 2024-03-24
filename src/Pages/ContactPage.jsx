import React from 'react'
import BackToHome from './BackToHome'

const ContactPage = () => {
    return (
        <>
            <BackToHome title={"Contact"} />
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15432.963202707793!2d78.5413452807826!3d14.75545906290526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb478a0a0158009%3A0x68b1f18d54672624!2sProddatur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1711104937159!5m2!1sen!2sin"
                                width="600" height="450" className='border-0 w-100'
                                allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row shadow mb-5 p-3">
                            <div className="col-md-6 d-flex flex-column gap-4 col-12">
                                <h5>Contact</h5>
                                <input className='border p-2' type="text" placeholder='name' />
                                <input className='border p-2' type="email" placeholder='email' />
                                <input className='border p-2' type="number" placeholder='phone number' />
                                <textarea placeholder='comments' className='border p-2' name="coment" id="" cols="10" rows="3"></textarea>
                                <button className='btn mb-5 bg-dark w-25 text-light py-2 px-3 rounded-pill'>Send</button>
                            </div>
                            <div className="col-md-6 col-12">
                                <h5>Get In Touch with Us</h5>
                                <div className="d-flex gap-3 align-items-center">
                                    <i class="fa-solid fa-house"></i>
                                    <p className='mt-3 text-muted'>Andhra Pradesh Proddatur Dorasanipalle</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <i class="fa-solid fa-phone"></i>
                                    <p className='mt-3 text-muted'>+91 8555047507</p>
                                </div><div className="d-flex gap-3 align-items-center">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p className='mt-3 text-muted'>saiteja084084@gmail.com</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <i class="fa-brands fa-github"></i>
                                    <a className='text-muted ' href="https://github.com/tony-143/myPortfolio.git">https://github.com/tony-143/myPortfolio.git</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage