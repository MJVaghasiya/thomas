import React from 'react'
import { BiRupee } from 'react-icons/bi';

import img1 from '../img/1st-u-package.jpeg';
import img2 from '../img/2nd-u-package.jpeg';
import img3 from '../img/3rd-u-package.jpeg';
import img4 from '../img/4th-u-package.jpeg';
import img5 from '../img/5th-u-package.jpeg';
import img6 from '../img/6th-u-package.jpeg';
import img7 from '../img/7th-u-package.jpeg';
import img8 from '../img/thumbs-up.png'
import { BsSunFill } from 'react-icons/bs';
import { RiFlightTakeoffFill } from 'react-icons/ri'
import { MdHotel } from 'react-icons/md'
import { BsCameraFill } from 'react-icons/bs'
import { FaPassport } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'
// import img9 from '../img/sun.png'
// import img10 from '../img/airplane.png'
// import img11 from '../img/hotel.png'
// import img12 from '../img/sightseeing.png'
// import img13 from '../img/meals.png'
// import img14 from '../img/passport.png'
import img15 from '../img/8th-e-package.jpeg'
import { MdFlightTakeoff } from 'react-icons/md'


const UttrakhandPackage = () => {
    return (
        <div>
            {/* 1ST PACKAGE */}
            <div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px", marginTop: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img1} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} /> Unique stays At Naukuchiatal



                                </td>
                                <td className='right-td' >2 Nights 3 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Naukuchiatal (2N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                {/* <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%",fill:"blue"  }}/><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td> */}
                                <td style={{ width: "83px" }} ><div className='icons'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                {/* <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td> */}
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
                                <price className='new-price' >< BiRupee /> 14,300</price>
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
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Unique stays At Satkhol




                                </td>
                                <td className='right-td' >2 Nights 3 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Satkhol (2N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                {/* <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%",fill:"blue"  }}/><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td> */}
                                <td style={{ width: "83px" }} ><div className='icons'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                {/* <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td> */}
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
                                <price className='new-price' >< BiRupee />14,900</price>
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
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Do Dham Yatra By Helicopter







                                </td>
                                <td className='right-td' >2 Nights 3 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Dehra Dun (1N)→Badrinath (1N)</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                {/* <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%",fill:"blue"  }}/><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td> */}
                                <td style={{ width: "83px" }} ><div className='icons'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                {/* <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td> */}
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
                                <price className='new-price' >< BiRupee />1,18,000</price>
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
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Adi Kailash Yatra





                                </td>
                                <td className='right-td' >7 Nights 8 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Pithoragarh (1N)→Dharchula (1N)→Gunji (3N)→Didihat (1N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%", fill: "blue" }} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                {/* <td style={{ width: "83px" }} ><div className='icons'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight'  /><footer className='footer' >Flights</footer></div></td> */}
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                {/* <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>                                                    </tr> */}
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
                                <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />49,990</price>
                                <br />
                                <price className='new-price' >< BiRupee />47,490</price>
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
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Uttarakhand - Snow Experience Chopta Valley





                                </td>
                                <td className='right-td' >2 Nights 3 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Kund (2N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%", fill: "blue" }} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                {/* <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td> */}
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
                                <price className='new-price' >< BiRupee />s. 20,499</price>
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
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Uttarakhand - Snow And Skiing In Auli





                                </td>
                                <td className='right-td' >3 Nights 4 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Auli (3N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%", fill: "blue" }} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                {/* <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td> */}
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
                                <price className='new-price' >< BiRupee />31,500</price>
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
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Char Dham Yatra Ex Delhi





                                </td>
                                <td className='right-td' >11 Nights 12 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Haridwar (1N)→Barkot (2N)→Uttarkashi (2N)→Guptakashi (1N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                {/* <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%",fill:"blue"  }}/><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td> */}
                                <td style={{ width: "83px" }} ><div className='icons'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                {/* <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>                           </tr> */}
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
                                <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />56,990</price>
                                <br />
                                <price className='new-price' >< BiRupee />54,490</price>
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
                                <td className='left-td' ><img src={img8} style={{ marginRight: "12px" }} />Honeymoon Special - Nainital Kausani with Ra...







                                </td>
                                <td className='right-td' >5 Nights 6 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Nainital (2N)→Kausani (2N)→Ranikhet (1N)→</td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%", fill: "blue" }} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
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
                                <price className='new-price' >< BiRupee /> 56,899</price>
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
                <h1 className='about-trip'>FAQs  Uttarakhand Tour Packages</h1>
                <ol>
                    <li className='Question'>When Is the Best Time to Visit Uttarakhand?
                        <br />
                        <span className='Answer'>The summer months of March and April is the best time to plan an Uttarakhand tour. Summer makes for a fantastic season to try out different adventure activities and to take part in the rigorous Char Dham Yatra. If you want to avoid the peak season, then the months of September and October are the ones to go for. </span>
                    </li>


                    <li className='Question'>What Is Uttarakhand Famous For?

                        <br />
                        <span className='Answer'>Uttarakhand is adored by travelers for a variety of things, but its scenic beauty, revered and architecturally beautiful temples, the picturesque Bhabar and Terrai regions etc. are what contribute most to its popularity and should not be missed out on a Uttarakhand tour.</span>
                    </li>


                    <li className='Question'> How Far is Uttarakhand from Mumbai?

                        <br />
                        <span className='Answer'>Uttarakhand is 1744.1 kilometres from Mumbai which means it will take you 33 hours to cover the distance by car.
                        </span>
                    </li>


                    <li className='Question'>What is the distance from Delhi to Uttarakhand?

                        <br />
                        <span className='Answer'>Delhi is 349 kilometres (approx.) from Uttarakhand, essentially meaning 9hr 10min by car.
                        </span>
                    </li>


                    <li className='Question'> Is Uttarakhand safe for solo female travellers?

                        <br />
                        <span className='Answer'>Solo female travellers have nothing to worry about in Uttarakhand. The State Government ensures that Uttrakhand is both safe and comfortable for solo tourists, especially women.</span>
                    </li>


                    <li className='Question'>Does it snow in Uttarakhand?

                        <br />
                        <span className='Answer'>Several travellers come to Uttarakhand to witness the snow during the winter season. From Mussoorie and Auli to Dhanaulti and Nainital many places in the state experienced snowfall. </span>
                    </li>


                    <li className='Question'> What can I buy in Uttarakhand?

                        <br />
                        <span className='Answer'>Local artisans in Uttarakhand create some striking handicrafts that you can buy and gift your loved ones. Apart from that, pashminas, home-made jams, pickles and even local wine is loved by visitors. </span>
                    </li>


                    <li className='Question'>What language is spoken in Uttarakhand?

                        <br />
                        <span className='Answer'>Primarily, Hindi is the language spoken most in Uttarakhand. The local languages of Uttarakhand include Garhwali, Kumaoni and Jaunsari. </span>
                    </li>


                    <li className='Question'>9. What is Uttarakhand’s most famous food?


                        <br />
                        <span className='Answer'>The simple, nutritious and delicious cuisine of Uttarakhand has number of lip-smacking items up its sleeves, the most famous being Kafuli, Bhang ki Chutney, Phaanu and Chainsoo, among others.  </span>
                    </li>


                    <li className='Question'>What are the best places to visit in Uttarakhand?

                        <br />
                        <span className='Answer'>There are many interesting sites to visit in Uttarakhand. Nainital, Mukteshwar, Sattal, Bhimtal, Naukuchital, Corbett, Mussoorie, Rishikesh, Haridwar, Kedarnath, Badrinath, Ranikhet, Almora, and others are among the most popular you should not miss out on your Uttarakhand trip. </span>
                    </li>


                    <li className='Question'>What is the best way to get to the Valley of Flowers?


                        <br />
                        <span className='Answer'>GovindGhat, a mountain town in Garhwal, is the starting point for your trip to the Valley of Flowers. Take the 14-kilometer trail up to Gangharia, also known as GovindDham, which is at an elevation of 10,000 feet. A hike branches left from here, carrying you uphill for 5 kilometres into the Bhyundar Valley, also known as the Valley of Flowers.Frank Smythe, a mountaineer, discovered the Valley of Flowers in 1931 at an elevation of 10,997 feet, and named it after the region's diverse array of exotic vegetation. The valley stretches for ten kilometres and cannot be hiked in a single day.</span>
                    </li>


                    <li className='Question'>What are the best places to visit in Uttarakhand?



                        <br />
                        <span className='Answer'>There are many interesting sites to visit in Uttarakhand. Nainital, Mukteshwar, Sattal, Bhimtal, Naukuchital, Corbett, Mussoorie, Rishikesh, Haridwar, Kedarnath, Badrinath, Ranikhet, Almora, and others are among the most popular you should not miss out on your Uttarakhand trip.</span>
                    </li>


                    <li className='Question'>How many days are sufficient for an Uttarakhand trip?

                        <br />
                        <span className='Answer'>To at least see the most famous sights and experience some of the most sought after activities, a week-long trip to Uttarakhand is a good idea. Our Uttarakhand packages  allow you to choose from 1 night and 2 days to 8 nights and 9 days.

                        </span>
                    </li>

                </ol>
            </div>


        </div>
    )
}

export default UttrakhandPackage


