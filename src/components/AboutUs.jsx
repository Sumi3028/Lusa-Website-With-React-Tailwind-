import React from 'react'
import AboutUsCard from './AboutUsCard'
import About from "../assets/Aboutus1.png"

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="About-us">
            <h2 className='text-4xl text-green-900 text-center'>What Do They Say About Us</h2>
            <div className="About-US-Cards flex gap-5">
                <AboutUsCard img={About} h4="Doris Waltston" p="“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”"/>
                <AboutUsCard img={About} h4="Katu Suzu" p="“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”"/>
                <AboutUsCard img={About} h4 ="Dyness" p="“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
