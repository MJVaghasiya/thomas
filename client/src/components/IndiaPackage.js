import React from 'react'
import Carousel from 'better-react-carousel'
import img1 from '../img/northeast-banner.jpg'
import img2 from '../img/bhutan-banner.jpg';
import img3 from '../img/madhya-pradesh-banner.jpg';
import img4 from '../img/ladakh-banner.jpg';
import img5 from '../img/himachal-banner.jpg'
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const IndiaPackage = () => {
  return (
    <div>
      <div className='holiday-package'>
        <h1 className='packages'>Best Selling India Holiday Packages</h1>

<Carousel cols={4} rows={1} gap={10} loop>
          <Carousel.Item>
            <div className='img1-b'>
             <Link to='/NorthEast'><img width="100%" src={img1} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>North East</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee /> 22 050.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price'>Starting price</h6>
                </div>

              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='img1-b'>
            <Link to='/Bhutan'>  <img width="100%" src={img2} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>Bhutan</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee />31 899.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price'>Starting price</h6>
                </div>

              </div>
            </div>
          </Carousel.Item>
          
          <Carousel.Item>
            <div className='img1-b height-less'>
            <Link to='/MadhyaPradesh'> <img width="100%" src={img3} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>Madhya Pradesh</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee /> 34 500.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price ds-flx set'>Starting price</h6>
                </div>

              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='img1-b'>
             <Link to='/Ladakh'> <img width="100%" src={img4} /></Link>

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>Ladakh</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee /> 1 63 700.<span style={{ fontSize: "13px" }}>00</span></h6>
                  <h6 className='price'>Starting price</h6>
                </div>

              </div>
            </div>       
             </Carousel.Item>
          <Carousel.Item>
            <div className='img1-b'>
              <img width="100%" src={img5} />

              <div className='row' style={{ marginTop: "5px" }}>

                <div className='col-lg-6' style={{ textAlign: "left", width:"50%"  }}>
                  <h6 className='card-title-dubai'>Himachal</h6>
                  <h6 className='package'>Packages</h6>
                </div>
                <div className='col-lg-6' style={{ textAlign: "right", width:"50%"  }}>
                  <h6 className='rupee' ><BiRupee /> 38 600.<span style={{ fontSize: "13px" }}>00</span></h6>
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

export default IndiaPackage