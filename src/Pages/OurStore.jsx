import React, { useState } from 'react'
import BackToHome from './BackToHome'
import { CirclePicker } from 'react-color'
import ReactStars from "react-rating-stars-component";
import { Cards } from './slider';

const OurStore = () => {
  let [col,setCol]=useState(3)
  return (
    <>
      <BackToHome title={'OurStore'} />
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="shadow p-3 py-4 filter-card mb-3 rounded-5">
              <h5 className='text-capitalize'>shop by categories</h5>
              <h6 className="text-muted">watch</h6>
              <h6 className="text-muted">tv</h6>
              <h6 className="text-muted">Cemara</h6>
              <h6 className="text-muted">Laptop</h6>
            </div>
            <div className="shadow p-3 py-4 filter-card mb-3 rounded-5">
              <h4 className="text-capitalize">filter by</h4>
              <h4 className="text-capitalize">availability</h4>
              <div className="form-check user-select-none gap-2 d-flex">
                <input type="checkbox" className='form-check-input' id='check' value="" />
                <label className='form-check-label' htmlFor="check">In stock(1)</label>
              </div>
              <div className="form-check user-select-none gap-2 d-flex">
                <input type="checkbox" className='form-check-input' id='chec' value="" />
                <label className='form-check-label' htmlFor="chec">Out of stock(0)</label>
              </div>
              <div className="price my-4">
                <h4>Price</h4>
                <div className="setRange d-flex">
                  $ <input type="number" className='ms-1 me-2 pe-2  w-50' placeholder='from' />
                  to <input type="number" className='ms-1 me-2 pe-2  w-50' placeholder='to' />
                </div>
              </div>
              <div className="colors">
                <h4>Colors</h4>
                <div className="d-flex flex-wrap gap-2">
                  <CirclePicker />
                </div>
              </div>
            </div>
            <div className="shadow p-3 py-4 filter-card mb-3 rounded-5">
              <h5 className=''>Product Tags</h5>
              <div className="tags d-flex flex-wrap align-items-center mt-4 gap-2">
                {Tag("laptops")}
                {Tag("tablets")}
                {Tag("mobile")}
                {Tag("oppo")}
                {Tag("vivo")}
              </div>
            </div>
            <div className="shadow p-3 py-4 filter-card mb-3 rounded-5">
              <h5>Random Product</h5>
              <div className="img  d-flex justify-content-between mt-3">
                <img src="src\images\watch.jpg" className='img-fluid w-50 h-50' alt="" />
                <div className="content d-flex flex-column justify-content-evenly align-items-between ">
                  <h5 className=''>Lorem  dolor sit amet. dolor, sit am...</h5>
                  <div className='rating'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      isHalf={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <span className='h6 text-bold'>$ 300</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="d-flex border justify-content-between align-item-center p-2">
              <div className="d-flex align-items-center gap-1">
                <p className='mb-0 w-50 d-block'>Sort by:</p>
                <select className='form-select'>
                  <option value="manual">Featured</option>
                  <option value="1" selected>Best Selling</option>
                  <option value="2">A-Z</option>
                  <option value="3">Z-A</option>
                  <option value="4" >new to old</option>
                  <option value="5" >old to new</option>
                </select>
              </div>
              <div className="d-flex grids align-items-center gap-2">
                <p className='mb-0 '>21 Products</p>
                <span onClick={()=>setCol(3)} className='px-1 d-none d-lg-block fw-bold border'>||||</span>
                <span onClick={()=>setCol(4)} className='px-1 d-none d-lg-block fw-bold border'>|||</span>
                <span onClick={()=>setCol(6)} className='px-1 border fw-bold'>||</span>
                <span onClick={()=>setCol(12)} className='px-1 border'><i class="fa-solid fa-bars"></i> </span>
              </div>
            </div>
            <div className="justify-content-between w-100 align-items-center my-2 d-flex flex-wrap cards">
              <Cards col={col}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function Tag(tagName) {
  return (
    <span style={{ background: 'lightGray' }} className='rounded-3 p-2 text-capitalize'>{tagName}</span>
  )
}
export default OurStore