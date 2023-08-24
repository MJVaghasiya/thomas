import React from 'react';
import { IoMdCall } from 'react-icons/io'
import { GiPositionMarker } from 'react-icons/gi'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { IoIosPerson } from 'react-icons/io'
import img1 from '../img/logo-cut.jpg';

import img2 from '../img/care.png'




function BaliHome() {
  return (
    <>
   
  <div className='cover'>
 <div className="navbar navbar-expand-lg navbar-light up-row">
 <div className="container-fluid">
 <div class="ds-ab" id="navbarNav">
   <ul class="navbar-nav d-p-l">
     <li class="nav-item ">
     <a class="nav-link bo-r-w ds-flx " href="#"><IoMdCall className='call-nav'/><h6 className='ds_nn'>1800-2099-100</h6></a>
     </li>
     <li class="nav-item">
     <a class="nav-link bo-r-w ds-flx" href="#"><img   src={img2} className='w-h pd-l'/><h6 className='ds_nn'>Care</h6></a>
     </li>
     <li class="nav-item">
     <a class="nav-link bo-r-w ds-flx" href="#"><GiPositionMarker  className='call-nav str-wd'/><h6 className='ds_nn'>Stores</h6></a>
     </li>
     <li class="nav-item">
     <a class="nav-link login-w ds-flx pd-left" href="#"><IoIosPerson  className='call-nav str-wd'/><h6 className='ds_nn'>Login</h6></a>
     </li>
   </ul>
 </div>
 </div>
 </div> 

{/* DOWN ROW */}

 <nav class="navbar navbar-expand-lg navbar-light  down-row">
<div class="container-fluid">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<a class="navbar-brand" href="#"><img className='logo' src={img1}/></a>
<div class="collapse navbar-collapse pd-lf" id="navbarSupportedContent">
  <ul class="navbar-nav down-list-set ">
    {/* <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li> */}
    <li class="nav-item ps-rel">
     <a class="nav-link dropdown-toggle col-gr" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Holidays
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </li>



          <li class="nav-item ps-rel">
     <a class="nav-link dropdown-toggle col-gr" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Forex
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>




          </li><li class="nav-item ps-rel">
     <a class="nav-link dropdown-toggle col-gr" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Short Break
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>




          </li><li class="nav-item ps-rel">
     <a class="nav-link dropdown-toggle col-gr" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Cruise
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>




          </li><li class="nav-item ps-rel">
     <a class="nav-link dropdown-toggle col-gr" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Offers
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </li>
  </ul>
</div>
</div>
</nav>
</div>
    </>
  );
}
export default BaliHome
