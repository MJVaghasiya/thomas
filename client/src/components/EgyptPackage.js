import React from 'react'
import { BiRupee } from 'react-icons/bi';

import img1 from '../img/1st-e-package.jpg';
import img2 from '../img/2nd-e-package.jpeg';
import img3 from '../img/3rd-e-package.jpeg';
import img4 from '../img/4th-e-package.jpeg';
import img5 from '../img/5th-e-package.jpeg';
import img6 from '../img/6th-e-package.jpeg';
import img7 from '../img/7th-e-package.jpeg';
import img8 from '../img/thumbs-up.png'
import img9 from '../img/sun.png'
import img10 from '../img/airplane.png'
import img11 from '../img/hotel.png'
import img12 from '../img/sightseeing.png'
import img13 from '../img/meals.png'
import img14 from '../img/passport.png'
import img15 from '../img/8th-e-package.jpeg'
import { MdFlightTakeoff } from 'react-icons/md'


const EgyptPackage = () => {
    return (
        <div>
            {/* 1ST PACKAGE */}
            <div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px", marginTop: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img1} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} /> Egyptian Dhamaka (Winter)


                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >→
                                    Cairo (4N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14} /><footer className='footer' >Visa</footer></div></td>
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
                            <td style={{ position: "absolute", top: "29px" }}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,12,460</price>
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
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img2} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Delightful Egypt (Winter)



                                </td>
                                <td className='right-td' >5 Nights 6 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >→
                                    Cairo (1N)→Hurghada (3N)→Cairo (1N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14} /><footer className='footer' >Visa</footer></div></td>
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
                            <td style={{ position: "absolute", top: "29px" }}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,41,553</price>
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
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img3} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Grand Bargain Tour of Egypt





                                </td>
                                <td className='right-td' >6 Nights 7 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff className='left-plane-icon' />→
                                    Cairo (2N)→Nile Cruise (4N)→<MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14} /><footer className='footer' >Visa</footer></div></td>
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
                            <td style={{ position: "absolute", top: "29px" }}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,64,099</price>
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
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img4} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Egyptian Extravaganza



                                </td>
                                <td className='right-td' >7 Nights 8 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff className='left-plane-icon' />→
                                    Cairo (3N)→Nile Cruise (3N)→Luxor (1N)→<MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img14} /><footer className='footer' >Visa</footer></div></td>                                                     </tr>
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
                            <td style={{ position: "absolute", top: "29px" }}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,90,830</price>
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
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img5} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Egyptian Extravaganza With Jordan



                                </td>
                                <td className='right-td' >11 Nights 12 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff className='left-plane-icon' />→
                                    Cairo (2N)→Nile Cruise (3N)→Luxor (1N)→Cairo (1N)→<MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
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
                            <td style={{ position: "absolute", top: "29px" }}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee /> 2,70,292</price>
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
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img6} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Enchanting Egypt



                                </td>
                                <td className='right-td' >6 Nights 7 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Cairo (1N)→Nile Cruise (3N)→Cairo (2N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons op'><img style={{ width: "67%" }} src={img14} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                            <td style={{ position: "absolute", top: "29px" }}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee /> 70,287</price>
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
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img7} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Explore Egypt



                                </td>
                                <td className='right-td' >6 Nights 7 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Cairo (2N)→Nile Cruise (3N)→Cairo (1N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons op'><img style={{ width: "67%" }} src={img14} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>                            </tr>
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
                            <td style={{ position: "absolute", top: "29px" }}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />72,832</price>
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


            {/* 8TH PACKAGE */}
            <div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img15} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Exciting Egypt




                                </td>
                                <td className='right-td' >7 Nights 8 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Cairo (3N)→Nile Cruise (3N)→Luxor (1N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img9} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img10} /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "64%" }} src={img11} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "57%" }} src={img12} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><img style={{ width: "67%" }} src={img13} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><img style={{ width: "67%" }} src={img14} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>                            </tr>
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
                            <td style={{ position: "absolute", top: "29px" }}>
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />33,554</price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />1,00,412</price>
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
                <h1 className='about-trip'>FAQs Egypt</h1>
                <ol>
                    <li className='Question'>What is the best time to visit Egypt?
                        <br />
                        <span className='Answer'>Between October and April is the best time to for an Egypt trip  because the weather is cooler but still pleasant. This makes the trip to Egypt more comfortable and enjoyable.</span>
                    </li>


                    <li className='Question'>How many days are enough for a trip to Egypt?

                        <br />
                        <span className='Answer'>If you are looking to enjoy the main highlights of Egypt, seven days will be enough. One week is the perfect amount of time for Egypt tour.</span>
                    </li>


                    <li className='Question'>Is Egypt open to tourists now?

                        <br />
                        <span className='Answer'>Yes. All passengers flying to Egypt (including Egyptians) must have a negative COVID-19 PCR test certificate with a QR code taken at least 72 hours before their flight departure time.</span>
                    </li>


                    <li className='Question'>Is Egypt a costly destination to visit?

                        <br />
                        <span className='Answer'>Egypt is a very affordable destination that can be visited on a budget. There are also plenty of luxury Egypt tour packages available if you so desire.</span>
                    </li>


                    <li className='Question'>What is Egypt mainly known for?

                        <br />
                        <span className='Answer'>Egypt is mostly popular for its Wildlife Safaris, Sahara Desert, Pyramids, Monuments, Khan el Khalili bazaar, mouth-watering delicacies, and the natural beauty along with its South coast. One of history's oldest peace treaties was signed in Ancient Egypt for which it is famous. Egypt is also known for its people's humorous spirit.</span>
                    </li>


                    <li className='Question'>What is Egypt mainly known for?

                        <br />
                        <span className='Answer'>Egypt is mostly popular for its Wildlife Safaris, Sahara Desert, Pyramids, Monuments, Khan el Khalili bazaar, mouth-watering delicacies, and the natural beauty along with its South coast. One of history's oldest peace treaties was signed in Ancient Egypt for which it is famous. Egypt is also known for its people's humorous spirit.</span>
                    </li>


                    <li className='Question'>What language is the most spoken language in Egypt?

                        <br />
                        <span className='Answer'>Although Modern Standard Arabic is the official language, Egyptian Arabic is the most widely spoken among the languages are spoken in Egypt. Also, people communicate in Saudi Arabic, Arabic and the majority of the people understand English, which makes it easy to communicate with tourists.</span>
                    </li>


                    <li className='Question'>How many days are sufficient for an Egypt Tour?

                        <br />
                        <span className='Answer'>If you are looking to enjoy the main highlights of Egypt, seven days will be enough. One week is the perfect amount of time for touring Egypt tour.</span>
                    </li>


                    <li className='Question'>What is the most famous thing in Egypt?

                        <br />
                        <span className='Answer'>Egypt is a traveler's paradise. Its hospitality is as impressive as its masterpieces. Egypt is known for its ancient civilization and some of the most well-known temples in the world. The Pyramids of Giza, The Great Sphinx, the temples of Luxor, Abu Simbel, Luxor Temple, White Desert, Nile River (Cruise), and Karnak Temples are some beautiful things that are quite famous and should definitely be included in your Egypt packages.</span>
                    </li>


                    <li className='Question'>How should I dress in Egypt?

                        <br />
                        <span className='Answer'>It is advisable to not wear very exposable clothes as it may be disrespectful to the local customs and traditions. Avoid wearing short clothes, it should be covering your knees and shoulders. One must dress modestly in religious places and cover their heads.</span>
                    </li>


                    <li className='Question'>Is it permissible for me to photograph monuments and everyday life in Egypt?

                        <br />
                        <span className='Answer'>Singapore has many languages and recognizes Mandarin, Malay, English, and Tamil as the major languages due to its multi-ethnic and multi-cultural society. However, Malay is the most widely spoken language in Singapore, as the Malaysian community is considered indigenous. So when on Singapore trip, tourists have no communication problems because English is widely spoken and understood.</span>
                    </li>


                    <li className='Question'>What do the Egyptians drink?

                        <br />
                        <span className='Answer'>Egyptians drink beverages like wine, local beer, coffee, mint tea, and Asab el Sokar. Egypt's national drink is tea, and coffee is served as part of the traditional welcome. Karkadeh is a traditional drink produced by boiling dried red hibiscus flowers and cooling the resulting liquid. This drink is sweetened, and it can also be served hot as an herbal tea.</span>
                    </li>


                    <li className='Question'>Is there a visa on arrival in Egypt?

                        <br />
                        <span className='Answer'>No, a visa  on arrival is not available in Egypt for Indians. Before visiting Egypt, you will need to obtain a visa.</span>
                    </li>
                    <li className='Question'>
                        Is driving with an Indian license allowed in Egypt?
                        <br /><span className='Answer'>To drive in Egypt, it is a must to have an International driver’s license along with domestic driving permits. From the time they arrive in Egypt, they can legally drive with their valid International driver's licenses for a period of six months.</span>
                    </li>
                    <li className='Question'>
                        What is the official currency of Egypt?
                        <br /><span className='Answer'>The Egyptian pound is the official currency of Egypt. </span>
                    </li>
                </ol>
            </div>


        </div>
    )
}

export default EgyptPackage