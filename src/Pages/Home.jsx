import React from 'react'
import Slider from './slider'
import Marquee from "react-fast-marquee";
import Blogs from './Blogs'
import SpecialProducts from './SpecialProducts';
const Home = () => {

  return (
    <>
      <section className='home-wrapper-1'>
        <div className='container-xxl py-5'>
          <div className="row ">

            <div className="col-md-6 col-12">

              <div className="img position-relative mb-3">
                <img src="src\images\main-banner-1.jpg"
                  className='img-fluid rounded-2 w-100' alt="main-banner-1" />

                <div className="text position-absolute p-1 p-md-5 top-0">
                  <h5 className='text-uppercase text-warning'>super charged for pros</h5>
                  <h1 className=''>iPad S13+ Pro.</h1>
                  <p>From $999.00 or &46.7/mo</p>
                  <button className='rounded-pill py-2   px-3 text-light bg-dark'>Buy Now</button>
                </div>

              </div>
              
            </div>
            <div className='col-md-6 col-12'>
              <div className="row mb-3">
                <div className="col-6 position-relative">
                  <img src="src\images\catbanner-01.jpg"
                    className='img-fluid  rounded-2 ' alt="catbanner-01.jpg" />

                  <div className="text catbanner-text position-absolute top-0 p-2 p-md-4 ">
                    <h5 className='text-uppercase  text-warning'>best sale</h5>
                    <h1 className='h6'>Laptops Max.</h1>
                    <p className='w-75 ' >From $1699.00 or &64.7/mo</p>
                  </div>
                </div>

                <div className="col-6 position-relative">
                  <img src="src\images\catbanner-02.jpg"
                    className='img-fluid rounded-2 ' alt="catbanner-02.jpg" />

                  <div className="text position-absolute p-2 p-md-4 top-0">
                    <h5 className='text-uppercase  text-warning'>15% OFF</h5>
                    <h1 className='h6'>Smartwatch 7</h1>
                    <p className='w-75 text-capitalize' >shop the latest brand styles and colors</p>
                  </div>

                </div>
              </div>
              <div className="row ">
                <div className="col-6 position-relative">
                  <img src="src\images\catbanner-03.jpg"
                    className='img-fluid rounded-2 ' alt="catbanner-03.jpg" />

                  <div className="text position-absolute p-2 p-md-4 top-0">
                    <h5 className='text-uppercase  text-warning'>new arrival</h5>
                    <h1 className='h6'>Buy iPad Air</h1>
                    <p className='w-75 ' >From $599.00 or &34.7/mo</p>
                  </div>
                </div>

                <div className="col-6 position-relative">
                  <img src="src\images\catbanner-04.jpg"
                    className='img-fluid rounded-2 ' alt="catbanner-04.jpg" />

                  <div className="text position-absolute p-2 p-md-4 top-0">
                    <h5 className='text-uppercase  text-warning'>free engraving</h5>
                    <h1 className='h6'>AirPods Max</h1>
                    <p className='w-75 text-capitalize' >high-fedility playback & ultra-low distrotion</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div></section>
      <section style={{ background: ' rgb(238, 238, 238)' }} className='home-wrapper-2 p-3'>
        <header className='container-xxl ' style={style}>
          <div className="col-12">
            <div className="services  d-md-flex justify-content-between align-items-center">
              <div style={style} className=''>
                <img src="src\images\service.png" className='img-fluid pb-3 mx-3' alt="service.png" />
                <span className='w-100'>
                  <h1 className='h6 text-capitalize'>free shipping</h1>
                  <p className='text-capitalize '>for all orders over $100</p>
                </span>
              </div>
              <div style={style} className=''>
                <img src="src\images\service-02.png" className='img-fluid pb-3  mx-3' alt="service.png" />
                <span className='w-100'>
                  <h1 className='h6  text-capitalize'>daily suprise offers</h1>
                  <p className='text-capitalize '>save upto 25% OFF</p>
                </span>
              </div>
              <div style={style} className=''>
                <img src="src\images\service-03.png" className='img-fluid pb-3  mx-3' alt="service.png" />
                <span className='w-100'>
                  <h1 className='h6  text-capitalize'>Support 24/7</h1>
                  <p className='text-capitalize '>shop with an expert</p>
                </span>
              </div>
              <div style={style} className=''>
                <img src="src\images\service-04.png" className='img-fluid pb-3  mx-3' alt="service.png" />
                <span className='w-100'>
                  <h1 className='h6  text-capitalize'>affordable prices</h1>
                  <p className='text-capitalize '>get factory direct price</p>
                </span>
              </div>
              <div style={style} className=''>
                <img src="src\images\service-05.png" className='img-fluid pb-3 mx-3' alt="service.png" />
                <span className='w-100'>
                  <h1 className='h6  text-capitalize'>secure payments</h1>
                  <p className='text-capitalize '>100% protected payments</p>
                </span>
              </div>
            </div>
          </div>
        </header>
        <div style={{ background: "white" }} className="rounded-3 container-xxl my-3 p-3 shadow">
          <div className="mx-auto row">
            <div className="col-12 text-center ps-5">
              <div className='catogories text-center  d-md-flex align-items-center justify-content-around'>
                <div className="d-flex d-md-block  gap-5 align-items-center w-100">
                  <img className='img-fluid ' height={200} width={100} src="src\images\laptop.jpg" alt="" />
                  <p className='text-capitalize '>computers & laptops</p>
                </div>
                <div className="d-flex d-md-block gap-5 align-items-center w-100">
                  <img className='img-fluid ' height={200} width={100} src="src\images\watch.jpg" alt="" />
                  <p className='text-capitalize '>Watches</p>
                </div>
                <div className="d-flex d-md-block gap-5 align-items-center w-100">
                  <img className='img-fluid ' height={200} width={100} src="src\images\speaker.jpg" alt="" />
                  <p className='text-capitalize '>Blutooth Speakers</p>
                </div><div className="d-flex d-md-block gap-5 align-items-center w-100">
                  <img className='img-fluid ' height={200} width={100} src="src\images\tv.jpg" alt="" />
                  <p className='text-capitalize '>Home Applians</p>
                </div><div className="d-flex d-md-block gap-5 align-items-center w-100">
                  <img className='img-fluid ' height={200} width={100} src="src\images\headphone.jpg" alt="" />
                  <p className='text-capitalize '>HeadPhones </p>
                </div></div>
            </div>
          </div>
        </div>
        <div className='container-xxl mb-5 features'>
          <Slider></Slider>
        </div>
        <section className='news'>
          <div className="container-xxl">
            <div className="row my-5">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3 " >
                <div className=" pt-3 h-100 ps-3  text-light" style={{background:'black',borderRadius:"10px"}}>
                  <h5 className='text-mute h6 text-capitalize'>big screen</h5>
                  <h3 className='text-capitalize text-bold'>Smart Watch series 7</h3>
                  <p className='text-capitalize text-muted '>from $299or $16.63/mo for 24mo*</p>
                  <img className='img-fluid ' src="https://www.tmonews.com/wp-content/uploads/2020/09/apple-watch-series-6-announce.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3 ">
              <div className="bg-white h-100 pt-3  ps-3" style={{borderRadius:"10px"}}>
                  <h5 className='text-mute h6 text-capitalize'>studio display</h5>
                  <h3 className='text-capitalize text-bold'>600 nits of brightness</h3>
                  <p className='text-capitalize text-muted '>17inch 5k retina display</p>
                  <img className='img-fluid ' src="https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3 ">
              <div className="bg-white pt-3 h-100  ps-3" style={{borderRadius:"10px"}}>
                  <h5 className='text-mute h6 text-capitalize'>Amoled display</h5>
                  <h3 className='text-capitalize text-bold'>smart phone 15 pro</h3>
                  <p className='text-capitalize text-muted '>6.5inch 5k retina display</p>
                  <div className="d-flex align-items-center justify-content-center">
                  <img className='img-fluid mt-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgn42-0KS12FM6k5RP-zATiXjF224_wJ3azG5uP4orEdZYYXPO7RG5kN2amn0Rdm6fdJU&usqp=CAU" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3 ">
              <div className="bg-white pt-3 h-100 ps-3" style={{borderRadius:"10px"}}>
                  <h5 className='text-mute h6 text-capitalize'>studio sound</h5>
                  <h3 className='text-capitalize text-bold'>room fillig sound</h3>
                  <p className='text-capitalize text-muted '>from $100or $5/mo*</p>
                  <img className='img-fluid ' src="https://i.ebayimg.com/images/g/3r4AAOSwN-FkLr9M/s-l400.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='speacial-products'>
          <div className="container-xxl">
            <h4>Special Products</h4>
            <div className="row ">
              <SpecialProducts/>
              <SpecialProducts/>
              <SpecialProducts/>
              <SpecialProducts/>
              <SpecialProducts/>
              <SpecialProducts/>
            </div>
          </div>
        </section>
        <section className='marquee my-4'>
          <div className="container-xxl shadow rounded-2">
            <div className="row bg-white">
              <Marquee>
                <div className="col-12 d-flex justify-content-around px-2">
                 
                    <img className='img-fluid mx-5' src="src/images/brand-01.png" alt="" />
                
                    <img className='img-fluid mx-5' src="src/images/brand-02.png" alt="" />
                 
                    <img className='img-fluid mx-5' src="src/images/brand-03.png" alt="" />
                  
                    <img className='img-fluid mx-5' src="src/images/brand-04.png" alt="" />
                
                    <img className='img-fluid mx-5' src="src/images/brand-05.png" alt="" />

                </div>
              </Marquee>

            </div>
          </div>
        </section>
        <section className='bolg'>
          <div className="container-xxl my-4">
            <h2 className='text-capitalize'>Our latest news</h2>
            <div className="row">
              <div className="col-12 justify-content-between gap-3 d-md-flex">
                <Blogs imgSrc={"src/images/blog-1.jpg"}/>
                <Blogs imgSrc={"https://www.etq.com/app/uploads/2020/07/etq-product-launch-whiteboard-notes.jpg"}/>
                <Blogs imgSrc={"https://imageio.forbes.com/specials-images/imageserve/6350000b820a60464ab5c039/Concept-of-augmented-reality-technology-in-glasses/0x0.jpg?format=jpg&crop=1353,761,x0,y55,safe&width=960"}/>
                <Blogs imgSrc={"https://qph.cf2.quoracdn.net/main-qimg-c35574e4df73905d6eebafa94da2f975-lq"}/>
              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  )
}
let style = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', justifyContent: 'center' }

export default Home