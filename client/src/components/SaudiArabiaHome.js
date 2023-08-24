import React from 'react'
import RNavbar from './RNav'

import { Link } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io'
import { AiFillPlayCircle } from 'react-icons/ai';
import SearchDes from './SearchDes';
import SaudiArabiaPackage from './SaudiArabiaPackage';
import Footer from './Footer';


const SaudiArabiaHome = () => {
  return (
    <div>
       <RNavbar/>
        <div className='container'>
        <ul className='path' style={{ marginLeft: "59px" }}>
                <Link to='/Home'><li style={{ color: "grey" }} >
                    Home<IoIosArrowForward style={{ marginLeft: "10px", marginRight: "-9px", fill: "grey" }} />
                </li></Link>
                <Link to='/Home'> <li style={{ marginLeft: "25px", color: "grey" }}>
                    Holidays<IoIosArrowForward style={{ marginLeft: "10px", marginRight: "-9px", fill: "grey" }} />
                </li></Link>
                <Link to='/Home'><li style={{ marginLeft: "25px", color: "grey" }}>
                    International Tour Packages<IoIosArrowForward style={{ marginLeft: "10px", fill: "grey" }} />
                </li></Link>
                <Link to='/Home'> <li style={{ marginLeft: "11px" }} >
                  SaudiArabia Tour Packages
                </li></Link>
            </ul>


        </div>


        
        <div className='container'>

<div className='Result'>
    <h1 className='Honeymoon-h1'>
        SaudiArabia Tour Packages
    </h1>
    <span>| </span>
    <h6 className='path' >20 Packages</h6>
    <span>|</span>
    <span style={{ color: "#f90" }} className='path'>
        <a className='modify-search' ><AiFillPlayCircle style={{ fill: "orange" }} /> Modify Search</a>
    </span>

</div>
</div>

<SearchDes/>
<SaudiArabiaPackage/>
<Footer/>

    </div>
  )
}

export default SaudiArabiaHome









