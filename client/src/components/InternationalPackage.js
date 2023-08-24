import React from 'react'
import Carousel from 'better-react-carousel'
import img1 from '../img/dubai-c-baner.jpg';
import img2 from '../img/japan-c-banner.jpg';
import img3 from '../img/saudi-arabia-c-banner.jpg';
import img4 from '../img/south-african-c-banner.jpg';
import img5 from '../img/Turkey-c-banner.jpg'
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';







const InternationalPackage = () => {
  
  return (
    <div>
    
       <div className='holiday-package' >
      <h1 className='packages'>Best Selling International Holiday Package</h1>

     




        <Carousel cols={4} rows={1} gap={10} loop>
          <Carousel.Item>
            <div className='img1-b'>
              <Link to='/Dubai'><img width="100%" src={img1} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>Dubai</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee /> 12 549.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price'>Starting price</h6>
                </div>

              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='img1-b'>
            <Link to='/Japan'> <img width="100%" src={img2} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left" , width:"50%" }}>
                  <h6 className='card-title-dubai'>Japan</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right" , width:"50%" }}>
                  <h6 className='rupee' ><BiRupee /> 16 900.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price'>Starting price</h6>
                </div>

              </div>
            </div>
          </Carousel.Item>
          
          <Carousel.Item>
            <div className='img1-b' >
             <Link to='/SaudiArabia' ><img width="100%" src={img3} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left" , width:"50%" }}>
                  <h6 className='card-title-dubai'>Saudi Arabia</h6>
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
            <Link to='/SothAfrica' > <img width="100%" src={img4} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left" , width:"50%" }}>
                  <h6 className='card-title-dubai'>South Africa</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right" , width:"50%" }}>
                  <h6 className='rupee' ><BiRupee /> 23 4900.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price'>Starting price</h6>
                </div>

              </div>
            </div>       
             </Carousel.Item>
          <Carousel.Item>
            <div className='img1-b'>
              <Link to='/Turkie'><img width="100%" src={img5} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>turkiye</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee /> 12 900.<span style={{ fontSize: "13px" }}>00</span></h6>
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

export default InternationalPackage