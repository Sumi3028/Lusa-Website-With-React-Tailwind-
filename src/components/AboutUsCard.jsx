import React from 'react'

const AboutUsCard = (props) => {
  return (
    <div>
      <div className="About-us-card w-[360px] h-[330px] bg-gray-300">
        
        <div className='flex gap-2 relative'>
            <div> 
             <img src={props.img} alt="" className='absolute top-10 left-15' /> 
            </div>
            <div>
            <h4 className='absolute top-15 left-35'>{props.h4}</h4>
            </div>
            <div className='absolute top-30 left-15'>
                <p className='w-[240px] h-[100px]'>{props.p}</p>
            </div>
        </div>
        

    

      </div>
    </div>
  )
}

export default AboutUsCard;
