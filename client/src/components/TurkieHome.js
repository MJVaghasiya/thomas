import React from 'react'
import RNavbar from './RNav'

import { Link } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io'
import { AiFillPlayCircle } from 'react-icons/ai';
import SearchDes from './SearchDes';
import TurkiePackage from './TurkiePackage';
import Footer from './Footer';



const TurkieHome = () => {
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
                 Turkie Tour Packages
                </li></Link>
            </ul>


        </div>


        
        <div className='container'>

<div className='Result'>
    <h1 className='Honeymoon-h1'>
       Turkie Tour Packages
    </h1>
    <span>| </span>
    <h6 className='path' >20 Packages</h6>
    <span>|</span>
    <span style={{ color: "#f90" }} className='path'>
        <a className='modify-search' ><AiFillPlayCircle style={{ fill: "orange" }} /> Modify Search</a>
    </span>

</div>
</div>

\<div className='container'>


<table style={{ width: "100%", textAlign: "left", border: "1px solid grey " }}>
    <tr className='package-table color '>
        <th style={{ color: "white", paddingLeft: "17px" }} >Turkie Tour Packages	</th>
        <th className='p-t-line' style={{ color: "white" }}>No.of Nigts/Days</th>
        <th className='p-t-line' style={{ color: "white" }} >Price*</th>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td' >Turkie Grandeur			</td>
        <td className='p-t-line' >9 Nights / 10 Days</td>
        <td className='p-t-line' >Rs. 2 31 105

</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Turkie Grandeur with Add on Kenya	</td>
        <td className='p-t-line' >12 Nights/ 13 Days</td>
        <td className='p-t-line' > Rs. 3 03 413
</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Turkie Grandeur With Kenyan Dhamaka	</td>
        <td className='p-t-line' >14 Nights/ 15 Days</td>
        <td className='p-t-line' >Rs. 3 37 093
</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Turkie Grandeur With Kenyan Discovery	</td>
        <td className='p-t-line' >15 Nights/ 16 Days</td>
        <td className='p-t-line' > Rs. 3 76 246
</td>
    </tr>
    <tr style={{ borderBottom: "1px solid black !important", lineHeight: "2.42857" }} >
        <td className='p-t-td'>Turkie Surprise	</td>
        <td className='p-t-line' >7 Nights/ 8 Days</td>
        <td className='p-t-line' >Rs. 1 64 009</td>
    </tr>
</table>

</div>
<SearchDes/>
<TurkiePackage/>
<Footer/>


    </div>
  )
}

export default TurkieHome

