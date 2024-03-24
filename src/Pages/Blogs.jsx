import React from 'react'

const Blogs = ({imgSrc,length}) => {
  return (
    <div className={`shadow ${length} rounded p-2`} >
        <div className="d-flex justify-content-center" style={{overflow:'hidden'}}>
        <img className='img-fluid blog-img' width={300} style={{height:"200px"}} src={imgSrc} alt="" />
        </div>
        <div className='content my-2'>
            <h5 className='text-warning'>16 mar 2024</h5>
            <h2 className='h5 text-capitalize'>Lorem, ipsum dolor sit amet consectetur...</h2>
            <p>Veniam, quae dicta numquam enim similique reprehenderit eaque maiores...</p>
            <button className='btn btn-dark rounded-pill px-3 py-2'>Read More</button>
        </div>
    </div>
  )
}

export default Blogs