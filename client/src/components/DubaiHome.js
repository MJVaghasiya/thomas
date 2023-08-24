import React from 'react'
import RNavbar from './RNav'

import { Link } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io'
import { AiFillPlayCircle } from 'react-icons/ai';
import SearchDes from './SearchDes';
import DubaiPackage from './DubaiPackage';
import Footer from './Footer';

const DubaiHome = () => {
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
                  Dubai Tour Packages
                </li></Link>
            </ul>


        </div>


        
        <div className='container'>

<div className='Result'>
    <h1 className='Honeymoon-h1'>
        Dubai Tour Packages
    </h1>
    <span>| </span>
    <h6 className='path' >20 Packages</h6>
    <span>|</span>
    <span style={{ color: "#f90" }} className='path'>
        <a className='modify-search' ><AiFillPlayCircle style={{ fill: "orange" }} /> Modify Search</a>
    </span>

</div>
</div>
<h6 className='container name '  >Most Popular Dubai Tour Packages</h6>
<div className='container'>


<table style={{ width: "100%", textAlign: "left", border: "1px solid grey " }}>
    <tr className='package-table color '>
        <th style={{ color: "white", paddingLeft: "17px" }} >Duai Tour Packages	</th>
        <th className='p-t-line' style={{ color: "white" }}>No.of Nigts/Days</th>
        <th className='p-t-line' style={{ color: "white" }} >Price*</th>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td' >Dubai Fully Loaded - Buy 1 Get 1 Free (Deira Area)		</td>
        <td className='p-t-line' >4 Nights / 5 Days</td>
        <td className='p-t-line' > Rs. 63 834
</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Simply 3N Dubai With 2N Abu Dhabi - Flights Inclusive		</td>
        <td className='p-t-line' >5 Nights / 6 Days</td>
        <td className='p-t-line' > Rs. 94 111
</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Crazy Deal Dubai - 5N	</td>
        <td className='p-t-line' > 5 Nights / 6 Days</td>
        <td className='p-t-line' > Rs. 57 849
</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Dubai Getaway		</td>
        <td className='p-t-line' >5 Nights / 6 Days</td>
        <td className='p-t-line' > Rs. 75 532
</td>
    </tr>
    <tr style={{ borderBottom: "1px solid black !important", lineHeight: "2.42857" }} >
        <td className='p-t-td'>Magical Dubai		</td>
        <td className='p-t-line' >5 Nights / 6 Days</td>
        <td className='p-t-line' > Rs. 86 789</td>
    </tr>
</table>

</div>

<SearchDes/>
<DubaiPackage/>
<Footer/>
    </div>
  )
}

export default DubaiHome