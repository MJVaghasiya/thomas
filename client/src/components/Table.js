import React from 'react';
import img1 from '../img/1stpackage.jpg';
import img2 from '../img/sun.png';
import img3 from '../img/airplane.png';
import img4 from '../img/hotel.png';
import img5 from '../img/sightseeing.png';
import img6 from '../img/meals.png';
import img7 from '../img/thumbs-up.png';
import { BiRupee } from 'react-icons/bi';
import { IoIosPerson } from 'react-icons/io'

import 'bootstrap/dist/css/bootstrap.min.css';
import { GiTripleClaws } from 'react-icons/gi';









const table = () => {
    return (
        <div>

            <div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img1} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img7} />  Thailand - Pattaya And Bangkok - Buy 1 Get 1 ....
                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Pattaya (2N)→Bangkok (2N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img2} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img3} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img4} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img5} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img6} /><footer className='footer' >Meals</footer></div></td>
                            </tr>
                        </td>
                    </tr>
                    <tr className='lst-tr' >
                        <tr className='side-up-tr' >
                            <td style={{ width: "66%", color: "#a0a8b4" }}>Tour Type</td>
                            <td>
                                <div>
                                    <select id="colours" style={{ border: "none" }} >
                                        <option value="Standard">Standard</option>
                                        <option value="Deluxe">Deluxe</option>
                                        <option value="Premium">Premium</option>
                                    </select>
                                </div></td>
                        </tr>
                        <tr className='price-sec-tr' >
                            <td>
                                <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br />
                                <price className='new-price' >< BiRupee />16,777</price>
                                <br />

                                <tag className='price-tag' >Starting Price Per Adult</tag>
                            </td>
                        </tr>
                        <tr className='button-tr' >
                            <td className='call-td' ><button className='call-btn' >Want us to call you?</button></td>
                            <td className='detail-td' ><button className='detail-btn'>VIEW DETAILS</button></td>
                        </tr>
                    </tr>
                </table>
            </div>






            {/* 


            <div className='container'>
                <table style={{ width: "100%", position: "absolute" }}>
                    <tr>
                        <tr>
                            <td className='table-border' style={{ width: "72%" }}>
                                <tr>
                                    <td><img style={{ borderRadius: "18px" }} src={img1} /></td>
                                    <td className='middte-td' >
                                        <tr className='name-days-tr' >
                                            <td className='name-td'><img className='thumbs-up' src={img7} />Honeymoon Special - Affectionate Kerala
                                            </td>
                                            <td className='days-td ' >5 Nights
                                                6 Days</td>
                                        </tr>
                                        <tr className='ways-tr'><td className='ways-td' >Munnar (2N)→Thekkady (1N)→Alleppey (1N)→Cochin (1N)→</td></tr>
                                        <tr style={{ lineHeight: "4", position:"absolite" }} ><td className='custmized-td' >Customized Holidays</td></tr>
                                        <tr className='icons-tr' >
                                            <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img2} /><footer className='footer' >Highlights</footer></div></td>
                                            <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img3} /><footer className='footer' >Flights</footer></div></td>
                                            <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img4} /><footer className='footer' >Hotels</footer></div></td>
                                            <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img5} /><footer className='footer' >Sightseeing</footer></div></td>
                                            <td style={{ width: "51px" }} ><div className='icons'><img style={{ width: "64%" }} src={img6} /><footer className='footer' >Meals</footer></div></td>
                                        </tr>
                                    </td>
                                </tr>
                            </td>
                            <tr className='last-tr' >
                                <td className='table-border'>
                                    <tr className='tour-type' >
                                        <td style={{ width: "66%" }}>Tour Type</td>
                                        <td>
                                        <li class="nav-item dropdown" style={{width:"17%"}} >
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Standard
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Deluxe</a></li>
              <li><a class="dropdown-item" href="#">Premium</a></li>
            </ul>
          </li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='price-tr'> <BiRupee style={{ position: "relative", top: "-2px" }} />37 500</td>
                                    </tr>
                                    <tr >
                                        <td className='tag-td' >Starting price per adult</td>
                                    </tr>
                                    <tr className='btn-tr' >
                                        <td className='call-btn-td' ><button className='call-btn' >Want us to call you?</button></td>
                                        <td className='detail-btn-td' ><button className='detail-btn'>VIEW DETAILS</button></td>
                                    </tr>
                                </td>
                            </tr>
                        </tr>
                    </tr>

                </table>
            </div> */}
        </div>
    )
}

export default table