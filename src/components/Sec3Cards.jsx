import React from 'react'

const Sec3Cards = (props) => {
  return (
    <div>
      <div className="Sec3-card relative w-[370px] h-[355px] bg-gray-100 flex-col ">
        <div className="Sec3-card-content absolute top-10 left-10">
          <img src={props.Img} alt="" className=' w-[70px] h-[70px]'/>
          <h3 className='text-green-900 text-2xl'>{props.h3}</h3>
          <p className='text-black text-xl w-[240px] h-[80px]'>{props.p}</p>
        </div>
      </div>
    </div>
  )
}

export default Sec3Cards;