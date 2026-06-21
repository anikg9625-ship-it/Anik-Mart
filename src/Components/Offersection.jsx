import React from 'react'
import offerbanner from '../Images/offerbanner.png'
import './Css/Offersection.css'

const Offersection = () => {
  return (
    <>
      <div className="container-fluid p-0" >
         <marquee behavior="scroll" direction="left" scrollamount="5" className="fst-italic mt-2 " >
        🚚 At Anik Mart, we provide super fast delivery, premium quality products, easy return and refund policy, secure packaging, and the best price guarantee for a trusted online shopping experience.
      </marquee>

        <div className="offer-wrapper">

          <img src={offerbanner} className="img-fluid w-100" alt="offer" />

        

        </div>

      </div>

     
    </>
  )
}

export default Offersection