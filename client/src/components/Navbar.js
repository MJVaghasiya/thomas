import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/logo.jpg'
import img2 from '../img/care.png'
import { IoMdCall } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import { IoIosPerson } from 'react-icons/io'



const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light ">
        <div className='logo'>
          <a class="main-logo" href="#"><img src={img1} /></a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="disc-div navbar-collapse w-100 flex-md-column" id="navbarCollapse">
          <ul class="navbar-nav ml-auto small mb-2 mb-md-0">
            <li class="nav-item active" style={{ width: "81%", marginLeft: "-107px" }}>
              <a class="nav-link py-1" href="#"><IoMdCall style={{ marginRight: '2px' }} />1800-2099-100</a>
            </li>
            <li class="nav-item">
              <a class="nav-link py-1" href="#"><img src={img2} style={{ marginRight: '5px', marginTop: '-3px' }} />Care</a>
            </li>
            <li class="nav-item">
              <a class="nav-link py-1" href="#"><ImLocation />Stores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link py-1" href="#"><IoIosPerson />Login</a>
            </li>

          </ul>
          <form class="form-inline ">

            <div class="input-group">
              <div className='dd-group-btn'>
                <label class="dropdown">

                  <div class="dd-button">
                    Holiday    
                  </div>

                  <input type="checkbox" class="dd-input" id="test" />

                  <ul class="dd-menu">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                    <li class="divider"></li>
                    <li>
                      <a href="http://rane.io">Link to Rane.io</a>
                    </li>
                  </ul>

                </label>
              </div>
              <div className='dd-group-btn'>
                <label class="dropdown">

                  <div class="dd-button">
                    ShortBreak
                  </div>

                  <input type="checkbox" class="dd-input" id="test" />

                  <ul class="dd-menu">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                    <li class="divider"></li>
                    <li>
                      <a href="http://rane.io">Link to Rane.io</a>
                    </li>
                  </ul>

                </label>
              </div>
              <div className='dd-group-btn'>
                <label class="dropdown">

                  <div class="dd-button">
                    Cruise
                  </div>

                  <input type="checkbox" class="dd-input" id="test" />

                  <ul class="dd-menu">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                    <li class="divider"></li>
                    <li>
                      <a href="http://rane.io">Link to Rane.io</a>
                    </li>
                  </ul>

                </label>
              </div>
              <div className='dd-group-btn'>
                <label class="dropdown">

                  <div class="dd-button">
                    Flights
                  </div>

                  <input type="checkbox" class="dd-input" id="test" />

                  <ul class="dd-menu">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                    <li class="divider"></li>
                    <li>
                      <a href="http://rane.io">Link to Rane.io</a>
                    </li>
                  </ul>

                </label>
              </div>
              <div className='dd-group-btn'>
                <label class="dropdown">

                  <div class="dd-button">
                    Hotels
                  </div>

                  <input type="checkbox" class="dd-input" id="test" />

                  <ul class="dd-menu">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                    <li class="divider"></li>
                    <li>
                      <a href="http://rane.io">Link to Rane.io</a>
                    </li>
                  </ul>

                </label>
              </div>
              <div className='dd-group-btn'>
                <label class="dropdown">

                  <div class="dd-button">
                    Offers
                  </div>

                  <input type="checkbox" class="dd-input" id="test" />

                  <ul class="dd-menu">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                    <li class="divider"></li>
                    <li>
                      <a href="http://rane.io">Link to Rane.io</a>
                    </li>
                  </ul>

                </label>
              </div>
            </div>
          </form>
        </div>
      </nav>


    </div>
  )
}

export default Navbar