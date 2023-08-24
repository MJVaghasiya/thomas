import React from 'react'
import Carousel from 'better-react-carousel'
import img1 from '../img/bali-h.jpg';
import img2 from '../img/andaman-h.jpg';
import img3 from '../img/Nepal-h.jpg';
import img4 from '../img/greece-h.jpg';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';




const Honeymoon = () => {
  return (
    <div>

<div className='holiday-package margn-bottom'>
        <h1 className='packages' >Best Honeymoon Packages</h1>

       




        <Carousel cols={4} rows={1} gap={10} loop>
          <Carousel.Item>
            <div className='img1-b'>
            <Link to='/Bali' > <img className='bali' src={img1} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%" }}>
                  <h6 className='card-title-dubai'>Bali</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%" }}>
                  <h6 className='rupee' ><BiRupee /> 12 549.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price'>Starting price</h6>
                </div>

              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='img1-b'>
              <img width="100%" src={img2} />

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>Andaman</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee /> 16 900.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price width-ds-pol'>Starting price</h6>
                </div>

              </div>
            </div>
          </Carousel.Item>
          
          <Carousel.Item>
            <div className='img1-b'>
              <img width="100%" src={img3} />

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>Nepal</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee /> 23 900.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price'>Starting price</h6>
                </div>

              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='img1-b'>
              <img width="100%" src={img4} />

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>Greece</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee /> 23 4900.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price'>Starting price</h6>
                </div>

              </div>
            </div>       
             </Carousel.Item>
          
          
         
          {/* ... */}
        </Carousel>

      </div>
    </div>
  )
}

export default Honeymoon