import React from 'react'
import RNavbar from './RNav'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillPlayCircle } from 'react-icons/ai';
import { GiRoundStar } from 'react-icons/gi'
import { MdStars } from 'react-icons/md'

import { Link } from 'react-router-dom';
import SearchDes from './SearchDes';
import UttrakhandPackage from './UttrakhandPackage';
import Footer from './Footer';

const UttrakhandHome = () => {
  return (
    <div>
        <RNavbar/>


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
                    Uttrakhand Tour Packages
                </li></Link>
            </ul>
</div>


            <div className='container'>
                <div className='Result'>
                    <h1 className='Honeymoon-h1'>
                        Uttrakhand Tour Packages
                    </h1>
                    <span>| </span>
                    <h6 className='path' >8 Packages</h6>
                    <span>|</span>
                    <span style={{ color: "#f90" }} className='path'>
                        <a className='modify-search' ><AiFillPlayCircle style={{ fill: "orange",marginRight:"5px" }} />Modify Search</a>
                    </span>

                </div>
            </div>

            <h6 className='container name '  >Most Popular Uttrakhand Tour Packages</h6>
            <div className='container'>


                <table style={{ width: "100%", textAlign: "left", border: "1px solid grey " }}>
                    <tr className='package-table color '>
                        <th style={{ color: "white", paddingLeft: "17px" }} >Uttrakhand Tour Packages	</th>
                        <th className='p-t-line' style={{ color: "white" }}>No.of Nigts/Days</th>
                        <th className='p-t-line' style={{ color: "white" }} >Price*</th>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td' >Char Dham Yatra By Helicopter	   </td>
                        <td className='p-t-line' >5 Nights / 6 Days</td>
                        <td className='p-t-line' >Rs.  1 99 990</td>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td'>Uttarakhand - Trek to Chopta Tungnath Chandrashilla Peak Deoriatal	</td>
                        <td className='p-t-line' >4 Nights / 5 Days</td>
                        <td className='p-t-line' >Rs.  13 220</td>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td'>Unique stays At Naukuchiatal	</td>
                        <td className='p-t-line' > 2 Nights / 3 Days</td>
                        <td className='p-t-line' >Rs. 14 300</td>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td'>Honeymoon Special - Nainital Kausani with Ranikhet	</td>
                        <td className='p-t-line' >5 Nights / 6 Days</td>
                        <td className='p-t-line' >Rs. 56 899</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid black !important", lineHeight: "2.42857" }} >
                        <td className='p-t-td'>Uttarakhand Honeymoon Special – Romantic Mussoorie With Corbett	</td>
                        <td className='p-t-line' >4 Nights / 5 Days</td>
                        <td className='p-t-line' >Rs.  63 199</td>
                    </tr>
                </table>

            </div>

            
            <SearchDes/>
            <UttrakhandPackage/>
            <Footer/>
    </div>
  )
}

export default UttrakhandHome