import React from 'react'
import { BiRupee } from 'react-icons/bi';

import img1 from '../img/1st-tr-package.jpeg';
import img2 from '../img/2nd-tr-package.jpeg';
import img3 from '../img/3rd-tr-package.jpeg';
import img4 from '../img/4th-tr-package.jpeg';
import img5 from '../img/5th-tr-package.jpeg';
import img6 from '../img/6th-tr-package.jpeg';
import img7 from '../img/7th-tr-package.jpeg';
import img8 from '../img/8th-tr-package.jpeg';
import img9 from '../img/thumbs-up.png'
import { BsSunFill } from 'react-icons/bs';
import { RiFlightTakeoffFill } from 'react-icons/ri'
import { MdHotel } from 'react-icons/md'
import { BsCameraFill } from 'react-icons/bs'
import { FaPassport } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'
import { MdFlightTakeoff } from 'react-icons/md'

const TurkiePackage = () => {
  return (
    <div>
         {/* 1ST PACKAGE */}
         <div className='container'>
                <table style={{ width: "100%", height: "254px", position: "relative", left: "-27px", marginBottom: "20px", marginTop: "20px" }}>
                    <tr className='first-tr' >
                        <td className='nakli-table-img' ><img className='nakli-table-img' src={img1} /></td>
                        <td className='mid-td' >
                            <tr className='up-tr' >
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />
                                South African Grandeur (Summer 2023)

                                </td>
                                <td className='right-td' >
                                3 Nights 4 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                <MdFlightTakeoff className='left-plane-icon' />
                                Jeddah (3N)
                                    </td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%", fill: "blue" }} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><div id="cancel">X</div><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><FaPassport style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  '><GiMeal style={{ width: "67%" }} /><footer className='footer' >Visa</footer></div></td>
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
                            {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />
                            49,030
                            </price> */}
                                <br />
                                <price className='new-price' >< BiRupee />
                                34,744
                                </price>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />
                                South African Grandeur with Add on Kenya (Summer 2023)

                                </td>
                                <td className='right-td' >
                                3 Nights 4 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                <MdFlightTakeoff className='left-plane-icon' />
                                Riyadh (3N)
                                    </td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%", fill: "blue" }} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons op'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><div id="cancel">X</div><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><FaPassport style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Meals</footer></div></td>
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
                            {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />
                            51,396
                            </price> */}
                                <br />
                                <price className='new-price' >< BiRupee />
                                39,791
                                </price>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />
                                South African Grandeur With Kenyan Dhamaka (Summer 2023)

                                      </td>
                                <td className='right-td' >
                                3 Nights 4 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    Mecca (2N)→Medina (1N)→
                                    </td>
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
                                <td style={{ width: "83px" }} ><div className='icons  op'><FaPassport style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Meals</footer></div></td>
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
                                <price className='new-price' >< BiRupee />
                                54,510

                                </price>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />
                                South African Grandeur With Kenyan Discovery (Summer 2023)

                                </td>
                                <td className='right-td' >
                                3 Nights 4 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    Alula (3N)
                                    </td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%", fill: "blue" }} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><div id="cancel">X</div><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><FaPassport style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Meals</footer></div></td>
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
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />
                                33,554
                                </price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />
                                58,295
                                </price>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />
                                Cape Town Calling

                                </td>
                                <td className='right-td' >
                                3 Nights 4 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    Riyadh (3N)→
                                    </td>
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
                                <td style={{ width: "83px" }} ><div className='icons  op'><FaPassport style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Meals</footer></div></td>
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
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />
                                33,554
                                </price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />
                                65,024
                                 </price>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />
                                Highlights of Kwazulu Natal
 </td>
                                <td className='right-td' >
                                   3 Nights 4 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    Alula (3N)
                                    <MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%", fill: "blue" }} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><div id="cancel">X</div><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><FaPassport style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Meals</footer></div></td>
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
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />
                                33,554
                                </price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />
                                71,752
                                 </price>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />
                                Cape Town and Garden Route
</td>
                                <td className='right-td' >
                                3 Nights 4 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    Glamorous Jeddah

                                    <MdFlightTakeoff className='right-plane-icon' /></td>
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
                                <td style={{ width: "83px" }} ><div className='icons op'><FaPassport style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Meals</footer></div></td>
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
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />
                                33,554
                                </price>
                                <br /> */}
                                <price className='new-price' >< BiRupee />
                                71,752
                                </price>
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
                                <td className='left-td' ><img src={img9} style={{ marginRight: "12px" }} />
                                Cape Circular

</td>
                                <td className='right-td' >
                                4 Nights 5 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    Riyadh (2N)→Jeddah (2N)
                                    <MdFlightTakeoff className='right-plane-icon' /></td>
                            </tr>
                            <tr className='down-tr' >
                                <td className='custom-td' >Customized Holidays
                                </td>
                            </tr>
                            <tr className='nakli-icons-tr' >
                                <td style={{ width: "83px" }} ><div className='icons'><BsSunFill style={{ width: "64%", fill: "blue" }} /><footer className='footer' style={{ left: "5px" }}>Highlights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><RiFlightTakeoffFill style={{ width: "64%" }} className='flight' /><div id="cancel">X</div><footer className='footer' >Flights</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><MdHotel style={{ width: "64%" }} /><footer className='footer' >Hotels</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons'><BsCameraFill style={{ width: "57%" }} /><footer className='footer' style={{ left: "1px" }}>Sightseeing</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><FaPassport style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Meals</footer></div></td>
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
                                {/* <price className='old-price' >< BiRupee style={{ fill: "#999999" }} />
                                49,030
                                </price> */}
                                <br />
                                <price className='new-price' >< BiRupee />
                                76,378
                                </price>
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
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    <li className='Question'
                    >What is the best time to visit Vietnam?
                        <br />
                        <span className='Answer'>
                            The best time to visit Vietnam could be from March to April, when rainfall is low and weather conditions are milder. The weather in Vietnam varies greatly from north to south, from temperate to tropical 
                            </span>
                    </li>
                    </ol>
                    </div>

    </div>
  )
}

export default TurkiePackage






