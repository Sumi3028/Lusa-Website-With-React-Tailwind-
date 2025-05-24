import React from 'react'
import OfferCard from './OfferCard'
import Cactus from "../assets/Cactus.png"
import Cactus2 from "../assets/Cactus2.png"
import Cactus3 from "../assets/Cactus3.png"
import Cactus4 from "../assets/Cactus4.png"
import Cactus5 from "../assets/Cactus5.png"
import Cactus6 from "../assets/Cactus6.png"
import Cactus7 from "../assets/Cactus7.png"
import Cactus8 from "../assets/Cactus8.png"

const Offer = () => {
  return (
    <>
      <div className="Offer">
        <h2 className='text-center text-green-700 text-4xl'>What We Offer To You</h2>
        <div className='All-cards flex gap-2'>
        <OfferCard cactus={Cactus}/>
        <OfferCard cactus={Cactus2} />
        <OfferCard cactus={Cactus3}/>
        <OfferCard cactus={Cactus4}/>
        
        <OfferCard cactus={Cactus5}/>
        <OfferCard cactus={Cactus6}/>
        <OfferCard cactus={Cactus7}/>
        <OfferCard cactus={Cactus8}/>
        </div>
      </div>
    </>
  )
}

export default Offer
