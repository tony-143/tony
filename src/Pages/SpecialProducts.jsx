import React from 'react'
import ReactStars from "react-rating-stars-component";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
const SpecialProducts = () => {
    let date = new Date()
    // let time = () => {
    //     return (
    //         <>
    //             <span className='p-2 rounded-circle bg-danger'>{date.getHours()}</span>:
    //             <span className='p-2 rounded-circle bg-danger'>{date.getMinutes()}</span>:
    //             <span className='p-2 rounded-circle bg-danger'>{date.getSeconds()}</span>
    //         </>
    //     )
    // }
    return (
        <div className='col-12 mb-4 col-md-6 col-lg-4' >
            <div style={{ borderRadius: '10px' }} className="p-3 specialProduct gap-4 rounded-5  bg-white justify-content-between d-flex shadow rouded-2">
                <div className="imgs position-relative d-flex flex-column  align-center justify-content-center">
                    <img src="src\images\laptop.jpg" className='img-fluid' alt="" />
                    <div className="smallImgs d-flex w-50 justify-content-between">
                        <img src="src\images\watch.jpg" alt="" className="img-fluid" />
                        <img src="src\images\laptop.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="links position-absolute end-0 top-0">
                        <i class="fa-regular fa-heart   fs-6"></i>
                    </div>
                    
                </div>
                <div className="content">
                    <h5 className='text-success fw-bold text-capitalize'>Brand</h5>
                    <h4 className='text-capitalize'>Product Name</h4>
                    <div className='rating'>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            isHalf={true}
                            activeColor="#ffd700"
                        />
                    </div>
                    <h6 className='price d-flex gap-2 text-danger'>$26.33
                        <span className='text-muted text-decoration-line-through'>$40.45</span>
                    </h6>
                    <div className="time d-flex gap-2 align-items-center">
                        237<span className='text-muted'>Days</span>
                        <span className='time d-flex gap-2 align-items-center'>
                            <span className='p-2 rounded-circle bg-danger'>{date.getHours()}</span>:
                            <span className='p-2 rounded-circle bg-danger'>{date.getMinutes()}</span>:
                            <span className='p-2 rounded-circle bg-danger'>{date.getSeconds()}</span>
                        </span>
                    </div>
                    <div className="progres mt-3">
                        <p className='text-muted'>Products: 200</p>
                        <ProgressBar completed={60} height='8px' isLabelVisible={false} />
                    </div>
                    <Link id='btn' className='btn link px-3 my-2 shadow rounded-pill'>Option</Link>
                </div>
            </div>
        </div>
    )
}

export default SpecialProducts