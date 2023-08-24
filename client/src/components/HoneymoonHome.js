import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import SearchDes from './SearchDes'
import RNavbar from './RNav';
import HoneyMoonpackages from './HoneyMoonpackages';
import Footer from './Footer';


const HoneymoonHome = () => {
  return (
    <div>
        <RNavbar/>
            <ul className='path' style={{ marginLeft: "59px" }}>
                <li>
                    Home<IoIosArrowForward style={{marginLeft: "10px", marginRight: "-9px"}}/>
                </li>
                <li style={{ marginLeft: "25px" }}>
                    Holiday<IoIosArrowForward style={{marginLeft: "10px", marginRight: "-9px"}} />
                </li>
                <li style={{ marginLeft: "25px" }}>
                    Domestic Honeymoon Tour Packages<IoIosArrowForward style={{marginLeft: "10px"}} />
                </li>
            </ul>
            <div className='container'>

                <div className='Result'>
                    <h1 className='Honeymoon-h1'>
                        Domestic Honeymoon Tour Packages
                    </h1>
                    <span>| </span>
                    <h6 className='path' >37 Packages</h6>
                    <span>|</span>
                    <span style={{ color: "#f90" }} className='path'>
                        <a> Modify Search</a>
                    </span>

                </div>

                <h6>Most Popular Domestic Honeymoon Tour Packages</h6>

                <table style={{ width: "100%", textAlign: "left" }}>
                    <tr className='package-table'>
                        <th>Domestic Honeymoon Holiday Packages	</th>
                        <th>No.of Days</th>
                        <th>Price*</th>
                    </tr>
                    <tr className='package-table' >
                        <td>Honeymoon - Andaman Magic Moments (Winter Special)	</td>
                        <td>4 Nights / 5 Days</td>
                        <td>Rs 59 900</td>
                    </tr>
                    <tr className='package-table' >
                        <td>Honeymoon Special - Affectionate Kerala		</td>
                        <td>5 Nights / 6 Days</td>
                        <td>Rs 93 900</td>
                    </tr>
                    <tr className='package-table' >
                        <td>Honeymoon - Charming Moments Kashmir		</td>
                        <td>6 Nights / 7 Days</td>
                        <td>Rs 59 900</td>
                    </tr>
                    <tr className='package-table' >
                        <td>Honeymoon - Himachal Magic Moments		</td>
                        <td>6 Nights / 7 Days</td>
                        <td>Rs 44 900</td>
                    </tr>
                    <tr className='package-table' >
                        <td>Royal Moments - Rajasthan Honeymoon Special	</td>
                        <td>6 Nights / 7 Days</td>
                        <td>Rs 1 07 990</td>
                    </tr>
                </table>
            </div>


            <SearchDes />
            <HoneyMoonpackages/>
           <Footer/>
    </div>
  )
}

export default HoneymoonHome