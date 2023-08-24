import React, { Component } from 'react'

import { SimpleDropdown } from 'react-js-dropdavn'
import 'react-js-dropdavn/dist/index.css'
import MultiRangeSlider from "./MultiRangeSlider";






const SearchDes = () => {
  
  return (
    <div>


        <div className='container'>
                <div className='Search-dd'>
                    
                <div className='H-box'>
                    <h6 className='Disable-tag'>Refine Search:</h6>
                </div>
                <div className='row' style={{ marginLeft: "-45px"}}>
                    <div className='col-lg-1'>
                    <li class="nav-item dropdown"  style={{width:"48%"}}  >
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Departure City
            </a>
            <ul class="dropdown-menu">
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Surat"/>      <label style={{marginLeft:"7px"}}> Surat</label>     </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Mumbai"/>     <label style={{marginLeft:"7px"}}>Mumbai</label>      </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Vadodara"/>   <label style={{marginLeft:"7px"}}> Vadodara</label>   </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Ahmedabad"/>  <label style={{marginLeft:"7px"}}> Ahmedabad</label>   </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Banglore"/>   <label style={{marginLeft:"7px"}}> Banglore</label>    </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Kanpur"/>     <label style={{marginLeft:"7px"}}> Kanpur</label>      </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Indore"/>     <label style={{marginLeft:"7px"}}> Indore</label>      </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Delhi"/>      <label style={{marginLeft:"7px"}}> Delhi</label>       </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Dehradun"/>   <label style={{marginLeft:"7px"}}> Dehradun</label>    </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Hyderabad"/>  <label style={{marginLeft:"7px"}}> Hyderabad</label>   </li>
              <li style={{lineHeight: "26px"}}> <input type="checkbox" name="Chandigarh"/> <label style={{marginLeft:"7px"}} >Chandigarh</label>  </li>
            
            </ul>
          </li>
          </div>
                    <div className='col-lg-1' style={{marginLeft:"35px"}}>
                    <li class="nav-item dropdown"  style={{width:"54%"}}  >
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Price Per Person
            </a>
            <ul class="dropdown-menu">
            <MultiRangeSlider
      min={0}
      max={10}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
               <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          </div>
                    <div className='col-lg-1'>
                    <li class="nav-item dropdown"  style={{width:"27%"}}  >
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Month Of Travel
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          </div>
                    <div className='col-lg-1' >
                    <li class="nav-item dropdown"  style={{width:"0%"}}  >
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Duration
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          </div>
                    <div className='col-lg-1' style={{marginLeft:"8px"}} >
                    <li class="nav-item dropdown"  style={{width:"51%"}}  >
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Package Type
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
                    </div>
                    <div className='col-lg-1' style={{marginLeft:"35px"}}>
                    <li class="nav-item dropdown"  style={{width:"32%"}}  >
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Themes
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul> 
          </li>
                    </div>
                    <div className='col-lg-2' style={{ marginTop: "-14px",marginLeft: "55px"}}><label class="dropdown acs " style={{border: "0px solid gray", width: "118%", backgroundColor:"white"}}>
                   
                    <li class="nav-item dropdown"  style={{width:"32%"}}  >
            <a class="h-dd-button" id='al' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <h className='sort-select' >Sort By: <span style={{paddingLeft: "9px"}} >Select</span></h>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul> 
          </li>
                   
         
                    </label>
                    </div>
                    {/* <h style={{paddingRight:"60px"}} ><span className='Sort-select' >
                            Sort By:</span>Select</h> */}
                </div>
            </div>
                </div>





    </div>
  )
}

export default SearchDes