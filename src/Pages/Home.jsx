import React from 'react'
import Slider from '../Components/Slider'
import Productcard from '../Components/Productcard'
import Offersection from '../Components/Offersection'
import CardSlider from '../Components/CardSlider'
import VideoSection from '../Components/VideoSection'
import LogoSection from '../Components/LogoSection'
import FrudoProduct from '../Components/FrudoProduct'

const Home = ({}) => {
  return (
    <div>
      <VideoSection></VideoSection>
      <FrudoProduct></FrudoProduct>
      <CardSlider></CardSlider>
      
      <Slider></Slider>
      
      <Productcard></Productcard>
      <LogoSection></LogoSection>
      <Offersection></Offersection>
      
    </div>
  )
}

export default Home
