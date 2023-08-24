import React from 'react'
import RNavbar from './RNav'

import { Link } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io'
import { AiFillPlayCircle } from 'react-icons/ai';
import SearchDes from './SearchDes';
import JapanPackage from './JapanPackage';
import Footer from './Footer';


const JapanHome = () => {
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
                  Japan Tour Packages
                </li></Link>
            </ul>


        </div>


        
        <div className='container'>

<div className='Result'>
    <h1 className='Honeymoon-h1'>
        Japan Tour Packages
    </h1>
    <span>| </span>
    <h6 className='path' >20 Packages</h6>
    <span>|</span>
    <span style={{ color: "#f90" }} className='path'>
        <a className='modify-search' ><AiFillPlayCircle style={{ fill: "orange" }} /> Modify Search</a>
    </span>

</div>
</div>
<h6 className='container name '  >Most Popular Japan Tour Packages</h6>
<div className='container'>


<table style={{ width: "100%", textAlign: "left", border: "1px solid grey " }}>
    <tr className='package-table color '>
        <th style={{ color: "white", paddingLeft: "17px" }} >Japan Tour Packages	</th>
        <th className='p-t-line' style={{ color: "white" }}>No.of Nigts/Days</th>
        <th className='p-t-line' style={{ color: "white" }} >Price*</th>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td' >Japan - Cherry Blossom		</td>
        <td className='p-t-line' >7 Nights / 8 Days</td>
        <td className='p-t-line' > Rs. 2 72 570
</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Cherry Blossom From Osaka	</td>
        <td className='p-t-line' >7 Nights / 8 Days</td>
        <td className='p-t-line' >  Rs. 2 83 300
</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Cherry Blossom - Japan With Korea	</td>
        <td className='p-t-line' >11 Nights / 12 Days</td>
        <td className='p-t-line' >	 Rs. 3 75 535
</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Cherry Blossom - South Korea With Japan		</td>
        <td className='p-t-line' >11 Nights / 12 Days</td>
        <td className='p-t-line' > 	 Rs. 3 75 535
</td>
    </tr>
    <tr style={{ borderBottom: "1px solid black !important", lineHeight: "2.42857" }} >
        <td className='p-t-td'>From Seoul To Hiroshima by Europamundo	</td>
        <td className='p-t-line' >6 Nights / 7 Days</td>
        <td className='p-t-line' >  Rs. 1 24 080</td>
    </tr>
</table>

</div>

<SearchDes/>
<JapanPackage/>
<Footer/>

    </div>
  )
}

export default JapanHome


