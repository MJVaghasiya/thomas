import React from 'react'
import RNavbar from './RNav'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillPlayCircle } from 'react-icons/ai';
import { GiRoundStar } from 'react-icons/gi'
import { MdStars } from 'react-icons/md'

import { Link } from 'react-router-dom';
import SearchDes from './SearchDes';
import EgyptPackage from './EgyptPackage';
import Footer from './Footer';


const Egypt = () => {
    return (
        <div>

            <RNavbar />

<div className='container'>

            <ul className='path' style={{ marginTop: "14px" }}>
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
                    Egypt Tour Packages
                </li></Link>
            </ul>
</div>


            <div className='container'>
                <div className='Result'>
                    <h1 className='Honeymoon-h1'>
                        Egypt Tour Packages
                    </h1>
                    <span>| </span>
                    <h6 className='path' >8 Packages</h6>
                    <span>|</span>
                    <span style={{ color: "#f90" }} className='path'>
                        <a className='modify-search' ><AiFillPlayCircle style={{ fill: "orange",marginRight:"5px" }} />Modify Search</a>
                    </span>

                </div>
            </div>

            <h6 className='container name '  >Most Popular Egypt Tour Packages</h6>
            <div className='container'>


                <table style={{ width: "100%", textAlign: "left", border: "1px solid grey " }}>
                    <tr className='package-table color '>
                        <th style={{ color: "white", paddingLeft: "17px" }} >Egypt Tour Packages	</th>
                        <th className='p-t-line' style={{ color: "white" }}>No.of Nigts/Days</th>
                        <th className='p-t-line' style={{ color: "white" }} >Price*</th>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td' >Egyptian Dhamaka	   </td>
                        <td className='p-t-line' >4 Nights / 5 Days</td>
                        <td className='p-t-line' >Rs. 1 12 153</td>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td'>Delightful Egypt		</td>
                        <td className='p-t-line' >5 Nights / 6 Days</td>
                        <td className='p-t-line' >Rs. 1 41 098</td>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td'>Grand Bargain Tour of Egypt	</td>
                        <td className='p-t-line' > 6 Nights / 7 Days</td>
                        <td className='p-t-line' >Rs. 1 63 624</td>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td'>Egyptian Extravaganza	</td>
                        <td className='p-t-line' >7 Nights / 8 Days</td>
                        <td className='p-t-line' >Rs. 1 85 147</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid black !important", lineHeight: "2.42857" }} >
                        <td className='p-t-td'>Grand Bargain Tour of Egypt with Hurghada	</td>
                        <td className='p-t-line' >9 Nights / 10 Days</td>
                        <td className='p-t-line' >Rs. 1 09 496</td>
                    </tr>
                </table>

            </div>

            
            <SearchDes/>
            <EgyptPackage/>
            <Footer/>

        </div>
    )
}

export default Egypt