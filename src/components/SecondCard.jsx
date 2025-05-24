import React from 'react'

const SecondCard = (props) => {
  return (
    <>
    <div className='all'>
      <div className='card flex-col'>
        <img src={props.icon} alt="" />
        <h4 className='text-3xl '> {props.h4}</h4>
        <p className='text-1xl'>{props.p}</p>
      </div>
    </div>
    </>
  )
}

export default SecondCard
