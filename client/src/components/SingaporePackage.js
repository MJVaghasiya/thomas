import React from 'react'
import { BiRupee } from 'react-icons/bi';

import img1 from '../img/1st-s-package.jpeg';
import img2 from '../img/2nd-s-package.jpeg';
import img3 from '../img/3rd-s-package.jpeg';
import img4 from '../img/4th-s-package.jpg';
import img5 from '../img/5th-s-package.jpeg';
import img6 from '../img/6th-s-package.jpeg';
import img7 from '../img/7th-s-package.jpeg';
import img8 from '../img/thumbs-up.png'
import img9 from '../img/sun.png'
import img10 from '../img/airplane.png'
import img11 from '../img/hotel.png'
import img12 from '../img/sightseeing.png'
import img13 from '../img/meals.png'
import img14 from '../img/passport.png'
import {MdFlightTakeoff} from 'react-icons/md'


const SingaporePackage = () => {
  return (
    <div>
         {/* 1ST PACKAGE */}
<div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom:"20px",marginTop:"20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img1} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}}  />  Honeymoon Special - Affectionate Kerala

                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Singapore (4N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11}/><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12}/><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13}/><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><img style={{ width: "67%" }} src={img14}  /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                            <td  style={{position: "absolute",top: "29px"}}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,02,143</price>
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
            


 {/* 2ND PACKAGE */}
            <div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom:"20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img2} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} />Singapore - Free & Easy


                                </td>
                                <td className='right-td' >5 Nights 6 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Sentosa (2N)→Singapore (3N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9}  /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><img style={{ width: "67%" }} src={img14}  /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                            <td  style={{position: "absolute",top: "29px"}}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,07,435</price>
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
{/* 3RD PACKAGE */}

<div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom:"20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img3} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} />Singapore With Sentosa - Free & Easy


                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff className='left-plane-icon' />→
Singapore (4N)→<MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9}  /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><img style={{ width: "67%" }} src={img14}  /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                            <td  style={{position: "absolute",top: "29px"}}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,11,093</price>
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

{/* 4TH PACKAGE */}

<div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px" , marginBottom:"20px"}}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img4} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} />Simply Singapore with Sentosa - Flight Inclusive


                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff  className='left-plane-icon'/>→
Singapore (4N)→<MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10}/><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11}/><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12}/><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13}/><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14}  /><footer className='footer' >Visa</footer></div></td>                                                     </tr>
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
                            <td  style={{position: "absolute",top: "29px"}}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,14,034</price>
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
            {/* 5TH PACKAGE */}
            <div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom:"20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img5} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} />Crazy Deal Singapore With Sentosa Island


                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff  className='left-plane-icon'/>→
Singapore (4N)→<MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10}/><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11}/><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12}/><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13}/><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14}  /><footer className='footer' >Visa</footer></div></td>                            </tr>
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
                            <td  style={{position: "absolute",top: "29px"}}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,14,409</price>
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


{/* 6TH PACKAGE */}
<div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom:"20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img6} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} />Singapore Getaway (Summer 2023)


                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff  className='left-plane-icon'/>→
Singapore (4N)→<MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10}/><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11}/><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12}/><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13}/><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14}/><footer className='footer' >Visa</footer></div></td>
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
                            <td  style={{position: "absolute",top: "29px"}}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,27,019</price>
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
 {/* 7TH PACKAGE */}
            <div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom:"20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img7} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8 }  style={{marginRight:"12px"}} /> Singapore Getaway (Winter)


                                </td>
                                <td className='right-td' >5 Nights 6 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff  className='left-plane-icon'/>→
Kuala Lumpur (2N)→Singapore (3N)→<MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10}/><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11}/><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12}/><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13}/><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14}/><footer className='footer' >Visa</footer></div></td>                            </tr>
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
                            <td  style={{position: "absolute",top: "29px"}}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,28,287</price>
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








{/* Q  &  A */}
<div className='container'>
                <h1 className='about-trip'>People also ask about Singapore Tour Packages</h1>
                <ol>
                    <li className='Question'>Which is the best time to travel to Singapore?<br/>
                        <span  className='Answer'>The best time to travel to Singapore is between December and February when the entire city is lit up for Christmas, New Year and Chinese New Year. </span>
                    </li>


                    <li  className='Question'>Is visa on arrival available for Indian nationals in Singapore?<br/>
                        <span  className='Answer'>Indian nationals do not have the option for visa on arrival in Singapore. They need to obtain a Singapore entry visa before they arrive. However, those who are in transit can get short visas to enter the city</span>
                    </li>


                    <li  className='Question'>Which is the most widely spoken language in Singapore?<br/>
                        <span  className='Answer'>Singapore has many languages and recognizes Mandarin, Malay, English, and Tamil as the major languages due to its multi-ethnic and multi-cultural society. However, Malay is the most widely spoken language in Singapore, as the Malaysian community is considered indigenous. So when on Singapore trip, tourists have no communication problems because English is widely spoken and understood.</span>
                    </li>


                    <li  className='Question'>How many days can I stay in Singapore on a tourist visa?<br/>
                        <span  className='Answer'>A Singapore tourist visa lets you stay in the country for a maximum of 30 days and the visa has a validity of 2 years.</span>
                    </li>


                    <li className='Question'>How many days are required for a vacation to Singapore?<br/>
                        <span  className='Answer'>You will need at least 3 days to have a satisfactory vacation in Singapore as places like Sentosa and Jurong Bird Park are liable to take an entire day each. A day to walk around and see the sights and do some shopping should be factored in as well.</span>
                    </li>


                    <li className='Question'>Is Singapore an expensive holiday destination?<br/>
                        <span  className='Answer'>Yes, it is one of the priciest holiday destinations but if you book ahead and choose accommodation wisely and opt for public transport often, you will find it to be quite reasonable.</span>
                    </li>


                    <li  className='Question'>Is my Indian driver's license valid in Singapore?<br/>
                        <span  className='Answer'>Yes, it’s valid in Singapore but you also need to have an International Driving Permit that has been issued by an authorised body in India.</span>
                    </li>


                    <li  className='Question'>Are there Indian restaurants in Singapore?<br/>
                        <span  className='Answer'>Yes, since Indian cuisine is very popular in Singapore and there’s a vibrant Indian community living here, there are numerous Indian restaurants in Singapore. From the high-end Colony in Ritz Carlton to RAS in Clarke Quay, or the Tiffin Room in the iconic Raffles Hotel, Indian restaurants form an important part of Singapore’s international cuisine.</span>
                    </li>


                    <li  className='Question'>How far is Changi Airport from the city?<br/>
                        <span  className='Answer'>Changi Airport is approximately 24km from the centre of the city.</span>
                    </li>


                    <li  className='Question'>How far is Sentosa Island from the airport?<br/>
                        <span  className='Answer'>Sentosa Island is around 26.5km from Changi Airport. Taxi is the fastest way to reach Sentosa from Changi.</span>
                    </li>


                    <li  className='Question'>Which is the most widely spoken language in Singapore?<br/>
                        <span  className='Answer'>Singapore has many languages and recognizes Mandarin, Malay, English, and Tamil as the major languages due to its multi-ethnic and multi-cultural society. However, Malay is the most widely spoken language in Singapore, as the Malaysian community is considered indigenous. So when on Singapore trip, tourists have no communication problems because English is widely spoken and understood.</span>
                    </li>


                    <li  className='Question'>When is the Great Singapore Sale held?<br/>
                        <span  className='Answer'>The Great Singapore Sale is held every year in the month of June and July.</span>
                    </li>


                    <li  className='Question'>Which is the best time to visit Singapore?<br/>
                        <span  className='Answer'>The best time to visit Singapore is between December and February when the entire city is lit up for Christmas, New Year and Chinese New Year.</span>
                    </li>
                </ol>
            </div>







    </div>
  )
}

export default SingaporePackage