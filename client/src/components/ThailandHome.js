import React from 'react';
import RNavbar from './RNav';
import {IoIosArrowForward} from 'react-icons/io';
import {AiFillPlayCircle} from 'react-icons/ai';
import SearchDes from './SearchDes'
import ThailandPackage from './ThailandPackage';
import Footer from './Footer';
// import ReadMoreReadLess from './ReadMoreReadLess';



const ThailandHome = () => {
    
  return (
    <div>
        <RNavbar/>

        <ul className='path' style={{ marginLeft: "59px" }}>
                <li>
                    Home<IoIosArrowForward style={{marginLeft: "10px", marginRight: "-9px"}}/>
                </li>
                <li style={{ marginLeft: "23px" }}>
                    Holiday<IoIosArrowForward style={{marginLeft: "10px", marginRight: "-9px"}} />
                </li>
                <li style={{ marginLeft: "20px" }}>
                    International Tour Packages<IoIosArrowForward style={{marginLeft: "10px"}} />
                </li>
                <li style={{marginLeft:"10px"}}>
                    Thailand Tour Packages<IoIosArrowForward style={{marginLeft: "10px", marginRight: "-9px"}}/>
                </li>
            </ul>

            <div className='container'>

<div className='Result'>
    <h1 className='Honeymoon-h1'>
        Thailand Tour Packages
    </h1>
    <span>| </span>
    <h6 className='path' >35 Packages</h6>
    <span>|</span>
    <span style={{ color: "#f90" }} className='path'>
        <a> <AiFillPlayCircle/>Modify Search</a>
    </span>

</div>
{/* <ReadMoreReadLess
limit={200}> */}

<h6>Most Popular Thailand Tour Packages</h6>

<table style={{ width: "100%", textAlign: "left", border:"1px solid grey "  }}>
    <tr className='package-table color '>
        <th style={{color:"white",paddingLeft: "17px"}} >Thailand Tour Packages	</th>
        <th className='p-t-line' style={{color:"white"}}>No.of Nigts/Days</th>
        <th className='p-t-line' style={{color:"white"}} >Price*</th>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td' >Thailand - Pattaya And Bangkok - Buy 1 Get 1 Free	</td>
        <td className='p-t-line' >4 Nights / 5 Days</td>
        <td className='p-t-line' >Rs 30 047</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Simply Thailand 5N/6D - Flight Inclusive		</td>
        <td className='p-t-line' >5 Nights / 6 Days</td>
        <td className='p-t-line' >Rs 43 378</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Simply Krabi And Phuket - Flights Inclusive		</td>
        <td className='p-t-line' >5 Nights / 6 Days</td>
        <td className='p-t-line' >Rs 54 264</td>
    </tr>
    <tr className='package-table' >
        <td className='p-t-td'>Thai Getaway (Summer 2023)		</td>
        <td className='p-t-line' >4 Nights / 5 Days</td>
        <td className='p-t-line' >Rs 56 103</td>
    </tr>
    <tr style={{borderBottom:"1px solid black !important",   lineHeight: "2.42857"}} >
        <td className='p-t-td'>Asia Just For You (Summer 2023)	</td>
        <td className='p-t-line' >10 Nights / 11 Days</td>
        <td className='p-t-line' >Rs 1 37 820</td>
    </tr>
</table>

{/* </ReadMoreReadLess> */}

<SearchDes/>

<ThailandPackage/>
<Footer/>











</div>
    </div>
  )
}

export default ThailandHome