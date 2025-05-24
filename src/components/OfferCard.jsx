import React from 'react'

const OfferCard = (props) => {
  return (
    <>
      <div className='OfferCard'>
        <img src={props.cactus} alt="" />
        <h4>Cactus Plants</h4>
        <div className='flex gap-10'>
            <p><del className='text-red-600'>10$</del> 8$</p>
            <button>Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default OfferCard
