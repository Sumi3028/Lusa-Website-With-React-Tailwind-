import React from 'react'
import Calendar from "../assets/Calendar.svg"
import Arrow from "../assets/Arrow.svg"
import Pic from "../assets/Pic2.png"


const BlogCard = (props) => {
  return (
    <div>
      <div className="Card w-[360px] h-[520px] rounded-4xl">
        <img src={Pic} alt="" className='w-100% h-320px' />
        <h3 className='text-green-900 text-xl font-bold h-[60px]'>{props.h3}</h3>
        <p>{props.p}</p>
        <div className='flex gap-3'>
            <div className='flex gap-1.5 relative'>
            <img src={Calendar} alt=""/> 
            <p className='w-[150px] absolute top-[-15px] left-8'>26 May 2025</p>
            </div>
            <div className='arrow-btn flex relative left-40'>
                <button className='border-2 border-green-700 rounded-2xl w-[150px] h-[30px]'><a href="" className='absolute left-5 top-0.5'>Read more</a> <img src={Arrow} alt=""  className='absolute top-1 right-6'/></button>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
