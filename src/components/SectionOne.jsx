import React from 'react'
import SecondCard from './SecondCard'
import IndoorPlants from "../assets/Indoor_Plant.png"
import OutdoorPlants from "../assets/Outdoor_Plant-green.png"
import PlantsPots from "../assets/Bamboo.png"
const SectionOne = () => {
  return (
    <>
    <div className='Full'>
        <div className='Upper flex gap-10'>
            <h3 className='text-4xl text-green-700 '>We Help choose the most <br />suitable plants for you</h3>
            <p className='text-1xl'>Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. </p>
        </div>
        <div className="Lower flex gap-0">
            <SecondCard icon={IndoorPlants} h4="Indoor Plants" p="Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants" />
            <SecondCard icon={OutdoorPlants} h4="Outdoor Plants" p="Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants" />
            <SecondCard icon={PlantsPots} h4="Plants Pots" p="Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants" />
        </div>
    </div>
    </>
  )
}

export default SectionOne
