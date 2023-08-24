import React from 'react'
import { BiRupee } from 'react-icons/bi';

import img1 from '../img/1st-j-package.jpeg';
import img2 from '../img/2nd-j-package.jpeg';
import img3 from '../img/3rd-j-package.jpeg';
import img4 from '../img/4th-j-package.jpeg';
import img5 from '../img/5th-j-package.jpeg';
import img6 from '../img/6th-j-package.jpeg';
import img7 from '../img/7th-j-package.jpeg';
import img8 from '../img/8th-j-package.jpeg'
import img9 from '../img/thumbs-up.png'
import { BsSunFill } from 'react-icons/bs';
import { RiFlightTakeoffFill } from 'react-icons/ri'
import { MdHotel } from 'react-icons/md'
import { BsCameraFill } from 'react-icons/bs'
import { FaPassport } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'
import { MdFlightTakeoff } from 'react-icons/md'

const JapanPackage = () => {
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
                                Japan - Cherry Blossom

                                </td>
                                <td className='right-td' >
                                7 Nights 8 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                <MdFlightTakeoff className='left-plane-icon' />
                                →Narita (1N)→Tokyo (2N)→Numazu (1N)→Hiroshima (1N)→
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
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><GiMeal style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                                2,75,309
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
                                Cherry Blossom From Osaka

                                </td>
                                <td className='right-td' >
                                7 Nights 8 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                <MdFlightTakeoff className='left-plane-icon' />
                                →Osaka (2N)→Hiroshima (1N)→Numazu (2N)→Tokyo (1N)→
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
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><GiMeal style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                                s. 2,86,513
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
                                Gujarat Special - Cherry Blossom Japan

                                      </td>
                                <td className='right-td' >
                                7 Nights 8 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    →Osaka (2N)→Hiroshima (1N)→Numazu (2N)→Tokyo (1N)→
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
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons   op'><GiMeal style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                                2,86,513
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
                                Cherry Blossom - Japan With Korea
                                </td>
                                <td className='right-td' >
                                11 Nights 12 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    →Narita (1N)→Tokyo (2N)→Numazu (1N)→Hiroshima (1N)→
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
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><GiMeal style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                                3,79,582
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
                                Cherry Blossom - South Korea With Japan



                                </td>
                                <td className='right-td' >
                                11 Nights 12 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    →Seoul (2N)→Busan (1N)→Seoul (1N)→Narita (1N)→
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
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><GiMeal style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                                3,79,582
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
                                Japan Extravaganza


                                </td>
                                <td className='right-td' >
                                   7 Nights 8 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    →Tokyo (2N)→Mishima (1N)→Hiroshima (1N)→Osaka (3N)→
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
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><GiMeal style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                                2,66,540
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
                                Dubai Fully Loaded - Buy 1 Get 1 Free (Marin...
                                </td>
                                <td className='right-td' >
                                6 Nights 7 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    Seoul (2N)→Jeonju (1N)→Busan (1N)→Shimonoseki (1N)→
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
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><GiMeal style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                                s. 1,29,752
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
                                From Seoul To Hiroshima by Europamundo

                                </td>
                                <td className='right-td' >
                                6 Nights 7 Days
                                    </td>
                            </tr>
                            <tr className='second-tr' >
                                <td className='path-td' >
                                    <MdFlightTakeoff className='left-plane-icon' />
                                    Tokyo (2N)→Kawaguchiko (1N)→Kyoto (2N)→Osaka (1N)
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
                                <td style={{ width: "83px" }} ><div className='icons'><FaPassport style={{ width: "67%" }} /><footer className='footer' >Meals</footer></div></td>
                                <td style={{ width: "83px" }} ><div className='icons  op'><GiMeal style={{ width: "67%" }} /><div id="cancel">X</div><footer className='footer' >Visa</footer></div></td>
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
                                1,57,102
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

export default JapanPackage