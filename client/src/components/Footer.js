import React from 'react'
import { IoIosCall } from 'react-icons/io'
import {GrFacebookOption} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'
import {IoLogoPinterest} from 'react-icons/io'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialLinkedin} from 'react-icons/ti'
import {AiOutlinePlus} from 'react-icons/ai'


const Footer = () => {
  return (
    <div>
      <div className='footer-down'>

        <div className='container'>
          <div className='row wd-set' >

            <div className='col-lg-4' >
              <h6 className='col-po-set'><IoIosCall />1800-2900-190
                <span style={{ color: "#999", fontSize: "12px", position: "relative", left: "10px" }}>(Toll Free No.)</span></h6>

            </div>
            {/* FIRST-COLUMN END */}
            <div className='col-lg-4' >
              <div className='right-col'>
                <input type="email" class="form-control email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subscribe to our updates/offers," />
                <button type="submit" class="btn btn-primary submit">Submit</button>
              </div>
            </div>
            {/* SECOND-COLUMN-END */}
          </div>
          {/* ROW END */}
        
        <div className='second-row-dd'>
          {/* FIRST-DD */}
          <div class="dropdown" style={{width:"23%",left:"-3%"}}>
            <button class="btn btn-secondary  dd-btn b-r" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <h className='width-rel'>  ABOUT THOMAS COOK INDIA</h>
              <AiOutlinePlus className='first-plus'/>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          {/* SECOND-DD */}
          <div class="dropdown" style={{width:"21%",left:"-1%"}}>
            <button class="btn btn-secondary   dd-btn b-r" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <h className='width-rel-left  top-set'> INTERNATIONAL HOLIDAYS</h>
              <AiOutlinePlus className='plus top-left'/>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          {/* THIRD-DD */}
          <div class="dropdown" style={{width:"17%", left:"1%"}}>
            <button class="btn btn-secondary  dd-btn b-r" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <h className='width-rel-left'>INDIA HOLIDAYS</h>
              <AiOutlinePlus className='plus'/>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          {/* FOURTH-DD */}
          <div class="dropdown" style={{width:"19%",left:"3%"}}>
            <button class="btn btn-secondary  dd-btn b-r" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <h className='width-rel-left'> FOREIGN EXCHANGE</h>
              <AiOutlinePlus className='plus'/>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          {/* FIFTH-DD */}
          <div class="dropdown" style={{width:"15%",left:"5%"}}>
            <button class="btn btn-secondary  dd-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <h className='width-rel-left'> VISA</h>
              <AiOutlinePlus className='plus width-top'/>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
          {/* SECOND-ROW-DD-END */}
        </div>

        <div className='icons-footer'>
       <h6 style={{marginRight: "30px",position: "relative",top: "11px", color:"white"}}>FOLLOW US</h6>
       <div className='social-icons'><GrFacebookOption className='footer-icons'/></div>
              <div className='social-icons'><AiFillYoutube    className='footer-icons'/></div>
              <div className='social-icons'><IoLogoPinterest      className='footer-icons'/></div>
              <div className='social-icons'><TiSocialInstagram      className='footer-icons'/></div>
              <div className='social-icons'><TiSocialLinkedin     className='footer-icons'/></div> 
       </div>
        {/* CONTAINER END */}
      </div>
      {/* FOOTER-DOWN END */}
    </div>
  )
}

export default Footer



{/* <div className='row'  style={{display:"flex"}}>
                    <div className='col-md-4'  style={{width:"50%"}}>
                        <h6 style={{color:"#ccc", fontSize:"16px"}}><IoIosCall/>1800-2900-190
                        <span style={{color:"#999", fontSize:"12px", position:"relative",left:"10px"}}>(Toll Free No.)</span></h6>
                    </div>
                    <div className='col-md-4' style={{width:"50%"}}>
                        <div className='right-col'>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <button type="submit" class="btn btn-primary">Submit</button>
</div>
                    </div>
                </div>
                <div className='second-row-dd'>
                <div class="dropdown" style={{width:"24%"}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   ABOUT THOMAS COOK INDIA
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>



<div class="dropdown"  style={{border:"1px solid white", width:"23%"}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    INTERNATIONAL HOLIDAYS
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>





<div class="dropdown"  style={{border:"1px solid white", width:"18%"}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    INDIA HOLIDAYS
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>




<div class="dropdown"  style={{border:"1px solid white", width:"21%"}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    FOREIGN EXCHANGE
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>


<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    VISA
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

                </div>
            </div>


            <div className='icons-footer'>
              <h6 style={{marginRight: "30px",position: "relative",top: "11px", color:"white"}}>FOLLOW US</h6>
              <div className='social-icons'><GrFacebookOption className='footer-icons'/></div>
              <div className='social-icons'><AiFillYoutube    className='footer-icons'/></div>
              <div className='social-icons'><IoLogoPinterest      className='footer-icons'/></div>
              <div className='social-icons'><TiSocialInstagram      className='footer-icons'/></div>
              <div className='social-icons'><TiSocialLinkedin     className='footer-icons'/></div> */}