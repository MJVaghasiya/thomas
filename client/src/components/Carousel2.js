import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/carousel2.jpg';
import img2 from '../img/new-zealand-banner.jpg';
import img3 from '../img/jordan-banner.jpg';

function Slider() {
  return (
    <div className='container'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Second slide"
        />
      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default Slider;