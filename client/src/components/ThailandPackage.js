import React from 'react'
import { BiRupee } from 'react-icons/bi';

import img1 from '../img/1st-t-package.jpg';
import img2 from '../img/2nd-t-package.avif';
import img3 from '../img/3rd-t-package.bmp';
import img4 from '../img/4th-t-package.webp';
import img5 from '../img/5th-t-package.jpeg';
import img6 from '../img/6th-t-package.jpeg';
import img7 from '../img/7th-t-package.jpg';
import img8 from '../img/thumbs-up.png'
import img9 from '../img/sun.png'
import img10 from '../img/airplane.png'
import img11 from '../img/hotel.png'
import img12 from '../img/sightseeing.png'
import img13 from '../img/meals.png'
import img14 from '../img/passport.png'




const ThailandPackage = () => {
  return (
    <div>
        {/* 1ST PACKAGE */}
<div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom:"20px",marginTop:"20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img1} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}}  /> Thailand - Pattaya And Bangkok - Buy 1 Get 1...


                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Munnar (2N)→Thekkady (1N)→Alleppey (1N)→Cochin (1N)→</td>
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
                            <td>
                                <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,362</price>
                                <br />
                                <price className='new-price' >< BiRupee />16,681</price>
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
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} />Phuket - Buy 1 Get 1 Free


                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Shimla (2N)→Manali (3N)→Chandigarh (1N)→</td>
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
                            <td>
                                <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />35,395</price>
                                <br />
                                <price className='new-price' >< BiRupee />17,697</price>
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
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} />Simply Thailand 5N/6D - Flight Inclusive

                                </td>
                                <td className='right-td' >5 Nights 6 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Kathmandu (1N)→Pokhara (2N)→Kathmandu (1N)→</td>
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
                                <td style={{ width: "83px" }} ><div className='icons  op'><img style={{ width: "67%" }} src={img14}  /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>                            </tr>
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
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />38,565</price>
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
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} />Simply Thailand - Flights Inclusive (4N Patt...

                                </td>
                                <td className='right-td' >6 Nights 7 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Cochin (1N)→Munnar (2N)→Thekkady (1N)→Alleppey (1N)→</td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14} /><footer className='footer' >Visa</footer></div></td>                            </tr>
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
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />45,547</price>
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
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} />Simply Thailand - Flights Inclusive (3N Patt...


                                </td>
                                <td className='right-td' >6 Nights 7 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Nainital (2N)→Kausani (2N)→Ranikhet (1N)→</td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14} /> <footer className='footer' >Visa</footer></div></td>                            </tr>
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
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />49,541</price>
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
                                <td className='left-td' ><img src={img8} style={{marginRight:"12px"}} /> Simply Thailand Fully Loaded - Flights Inc...


                                </td>
                                <td className='right-td' >5 Nights 6 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Dalhousie (2N)→Dharamsala (2N)→Manali (3N)→</td>
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
                                <td style={{ width: "83px" }} ><div className='icons  op'><img style={{ width: "67%" }} src={img14}  /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>                            </tr>
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
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />53,892</price>
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
                                <td className='left-td' ><img src={img8 }  style={{marginRight:"12px"}} />Simply Krabi And Phuket - Flights Inclusive


                                </td>
                                <td className='right-td' >5 Nights 6 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Gangtok (2N)→Pelling (1N)→Darjeeling (2N)→</td>
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
                            <td>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />57,250</price>
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
    </div>
  )
}

export default ThailandPackage