import React from 'react'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import vector1 from "../assets/Vector1.png"
import vector2 from "../assets/Vector2.png"


const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="Footer h-[400px] ">
            <h2 className='text-4xl text-white text-center font-bold'>Feel free to contact us</h2>
            <div className="icons flex gap-15 ">
                <div className='w-13 h-12 border-3 border-white rounded-4xl relative'> 
                <img src={instagram} alt="" className='absolute top-1.5 left-1.5'/>
                </div>
                <div className='w-13 h-12 border-3 border-white rounded-4xl relative'>
                    <img src={facebook} alt=""  className='absolute top-1.5 left-1.5'/>
                </div>
                <div className='w-13 h-12 border-3 border-white rounded-4xl relative'>
                <img src={twitter} alt=""  className='absolute top-1.5 left-1.5'/>
                </div>
            </div>
            <div className="list-items">
                <ul className='flex text-white'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Plants</a></li>
                    <li><a href="">Delivery</a></li>
                    <li><a href="">Contact Us</a></li> 
                    <li><a href="">Blog</a></li>                   
                </ul>
            </div>
        </div>
        <div className='relative'>
           <img src={vector1} alt="" className='absolute top-[-130px] right-15 opacity-10' />
           <img src={vector2} alt="" className='absolute left-25 top-[-240px] opacity-10'/>
        </div>
      </div>
        <div className='End bg-black h-10 opacity-100'>
            <h4 className='text-xl text-white text-center font-bold'>Copyright © 2024 Lush. All rights reserved. Dennis Nzioki DNX </h4>
        </div>
    </>
  )
}

export default Footer
