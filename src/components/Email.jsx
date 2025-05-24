import React from 'react'
import BgEmail from "../assets/bgEmail.png"

const Email = () => {
  return (
    <>
      <div className='Email relative'>
        <img src={BgEmail} alt="" />
     
      <div className='absolute top-50 left-20 flex gap-4 bg-transparent'>
         <div className=''>
        <h2 className='text-4xl text-white w-[550px] h-[140px]'>Enter your email address for our mailing Promo or other interesting things</h2>
      </div>
      <div>
        <input type="text" value="" placeholder='Enter Your Mail' className='w-[400px] h-[40px] border-2 border-white text-white'/>
      </div>
      <div>
        <button className='w-[100px] h-[40px] bg-green-900 text-white'>Submit</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Email
