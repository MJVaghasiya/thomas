import React from 'react'
import RNav from './RNav'
import Slider from './Slider'
import Book from './Book'
import Gallery from './Gallery'
import Carousel2 from './Carousel2'
import InternationalPackage from'./InternationalPackage'
import IndianPackage from './IndiaPackage'
import Honeymoon from './Honeymoon'
import Package from './Package'
import Footer from './Footer'
// import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
        <RNav/>
        <Slider/>
        <Book/>
        <Gallery/>
        <Carousel2/>
        <InternationalPackage/>
        <IndianPackage/>
        <Honeymoon/>
        <Package/>
        <Footer/>
        
      
        
        
    </div>
  )
}

export default Home