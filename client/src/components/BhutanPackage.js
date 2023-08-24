import React from 'react'
import { BiRupee } from 'react-icons/bi';

import img1 from '../img/1st-b-package.jpeg';
import img2 from '../img/2nd-b-package.jpeg';
import img3 from '../img/3rd-b-package.jpeg';
import img4 from '../img/4th-b-package.jpeg';
import img5 from '../img/5th-b-package.jpeg';
import img6 from '../img/6th-b-package.jpeg';
import img7 from '../img/7th-b-package.jpeg';
import img8 from '../img/8th-b-package.jpeg'
import img9 from '../img/thumbs-up.png'
import { BsSunFill } from 'react-icons/bs';
import { RiFlightTakeoffFill } from 'react-icons/ri'
import { MdHotel } from 'react-icons/md'
import { BsCameraFill } from 'react-icons/bs'
import { FaPassport } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'

import { MdFlightTakeoff } from 'react-icons/md'


const BhutanPackage = () => {
    return (
        <div>
            {/* 1ST PACKAGE */}
            <div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px", marginTop: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img1} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} /> Vibrant Vietnam - Summer 2023


                                </td>
                                <td className='right-td' >6 Nights 7 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >→
                                    Saigon (3N)→Hanoi (1N)→Ha Long Bay (1N)→Hanoi (1N)→</td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />Vibrant Vietnam With Thailand - Summer 2023




                                </td>
                                <td className='right-td' >10 Nights 11 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >→
                                    Saigon (3N)→Hanoi (1N)→Ha Long Bay (1N)→Hanoi (1N)→</td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />Vibrant Vietnam With Danang - Summer 2023






                                </td>
                                <td className='right-td' >8 Nights 9 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff className='left-plane-icon' />→
                                    Saigon (3N)→Hanoi (1N)→Ha Long Bay (1N)→Hanoi (1N)→<MdFlightTakeoff className='right-plane-icon' /></td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />Vibrant Vietnam And Cambodia - Summer 2023




                                </td>
                                <td className='right-td' >9 Nights 10 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff className='left-plane-icon' />→
                                    Siem Reap (3N)→Saigon (3N)→Hanoi (1N)→Ha Long Bay (1N)→<MdFlightTakeoff className='right-plane-icon' /></td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />Phu Quoc Free And Easy




                                </td>
                                <td className='right-td' >3 Nights 4 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' ><MdFlightTakeoff className='left-plane-icon' />Phu Quoc (3N)→<MdFlightTakeoff className='right-plane-icon' /></td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />Vietnam - Da Nang Free And Easy




                                </td>
                                <td className='right-td' >3 Nights 4 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Da Nang (3N)→</td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />Discover Vietnam




                                </td>
                                <td className='right-td' >4 Nights 5 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >Hanoi (1N)→Ha Long Bay (1N)→Hanoi (1N)→Sapa (1N)→</td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>
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
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img8} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />Vibrant Vietnam And Cambodia With Thai...





                                </td>
                                <td className='right-td' >13 Nights 14 Days</td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    →Siem Reap (3N)→Saigon (3N)→Hanoi (1N)→Ha Long Bay (1N)→→</td>
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
                                <td style={{ width: "83px" }} ><div className='icons'><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>
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
                <h1 className='about-trip'>People also ask about Vietnam Tour Packages</h1>
                <ol>
                    <li className='Question'>What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical </span>
                    </li>


                    <li className='Question'>Is Visa required for Vietnam tour?

                        <br />
                        <span className='Answer'>To enter Vietnam, you must have a valid passport and a visa (or pre-approval for a visa on arrival). Your passport must be valid for at least six months beyond your intended stay and contain at least one blank visa page.

</span>
                    </li>


                    <li className='Question'>Is Vietnam safe to travel?

                        <br />
                        <span className='Answer'>Although Vietnam is one of the safest countries in the world for tourists, it is always a good idea to be prepared. These health and safety tips will make your Vietnam trip more enjoyable
</span>
                    </li>


                    <li className='Question'>Which is currency commonly used in Vietnam?

                        <br />
                        <span className='Answer'>To at least see the most famous sights and experience some of the most sought after activities, a week-long trip to Uttarakhand is a good idea. Our Uttarakhand packages  allow you to choose from 1 night and 2 days to 8 nights and 9 days. 
</span>
                    </li>


                    <li className='Question'>Why Vietnam is so popular?

                        <br />
                        <span className='Answer'>Vietnam Tour is known for being a popular tourist attraction due of its stunning beaches, rich culture, incredible food (like pho), and welcoming people.</span>
                    </li>


                    <li className='Question'>Do most people in Vietnam speak English?


                        <br />
                        <span className='Answer'>Many Vietnamese will speak some English in tourist areas, but many will not. English speakers can be rare in more rural places. Vietnamese seniors occasionally speak more French than English</span>
                    </li>


                   
               
                </ol>
            </div>


        </div>
    )
}

export default BhutanPackage

