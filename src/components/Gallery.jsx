import React from 'react'
import Left from "../assets/left.png"
import Right1 from "../assets/right1.png"
import Right2 from "../assets/right2.png"
import Right3 from "../assets/right3png.png"
import Right4 from "../assets/right4.png"

const Gallery = () => {
  return (
    <>
      <div className='container-fluid Gallery'>
        <h2 className='text-5xl text-green-900 text-center '>Our Gallary View</h2>
        <div className='Gallery-img'>
            <div className="Left-img">
               <img src={Left} alt="" className='w-[900px] h-[660px]'/>
            </div>
            <div className="Right-img flex gap-2 flex-wrap">
                <img src={Right1} alt="" className='w-[400px] h-[325px]'/>
                <img src={Right2} alt="" className='w-[400px] h-[325px]' />
                <img src={Right3} alt="" className='w-[400px] h-[325px]'/>
                <img src={Right4} alt="" className='w-[400px] h-[325px]'/>



            </div>

        </div>

      </div>
    </>
  )
}

export default Gallery
