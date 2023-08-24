import React from 'react'
import RNavbar from './RNav'
import { Link } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io'
import { AiFillPlayCircle } from 'react-icons/ai';
import SearchDes from './SearchDes';
import SingaporePackage from './SingaporePackage';
import Footer from './Footer';


const SingaporeHome = () => {
    return (
        <div>
            <RNavbar />

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
                    Singapore Tour Packages
                </li></Link>
            </ul>


            <div className='container'>

                <div className='Result'>
                    <h1 className='Honeymoon-h1'>
                        Singapore Tour Packages
                    </h1>
                    <span>| </span>
                    <h6 className='path' >42 Packages</h6>
                    <span>|</span>
                    <span style={{ color: "#f90" }} className='path'>
                        <a className='modify-search' ><AiFillPlayCircle style={{ fill: "orange" }} /> Modify Search</a>
                    </span>

                </div>
            </div>
            <h6 className='container name '  >Most Popular Thailand Tour Packages</h6>
            <div className='container'>


                <table style={{ width: "100%", textAlign: "left", border: "1px solid grey " }}>
                    <tr className='package-table color '>
                        <th style={{ color: "white", paddingLeft: "17px" }} >Singapore Tour Packages	</th>
                        <th className='p-t-line' style={{ color: "white" }}>No.of Nigts/Days</th>
                        <th className='p-t-line' style={{ color: "white" }} >Price*</th>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td' >Crazy Deal Singapore With Sentosa Island		</td>
                        <td className='p-t-line' >4 Nights / 5 Days</td>
                        <td className='p-t-line' >Rs. 63 715</td>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td'>Crazy Deal Singapore - Universal + Sea Aquarium			</td>
                        <td className='p-t-line' >4 Nights / 5 Days</td>
                        <td className='p-t-line' >Rs. 72 439</td>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td'>Singapore Gateway	</td>
                        <td className='p-t-line' > 4 Nights / 5 Days</td>
                        <td className='p-t-line' >Rs. 85 688</td>
                    </tr>
                    <tr className='package-table' >
                        <td className='p-t-td'>Asian Dhamaka	</td>
                        <td className='p-t-line' >5 Nights / 6 Days</td>
                        <td className='p-t-line' >Rs. 1 00 120</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid black !important", lineHeight: "2.42857" }} >
                        <td className='p-t-td'>Singapore Extravaganza	</td>
                        <td className='p-t-line' >4 Nights / 5 Days</td>
                        <td className='p-t-line' >Rs. 1 09 496</td>
                    </tr>
                </table>

            </div>

            <SearchDes/>
            <SingaporePackage/>
            <Footer/>

        </div>
    )
}

export default SingaporeHome