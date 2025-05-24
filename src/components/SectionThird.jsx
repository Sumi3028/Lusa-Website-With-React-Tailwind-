import React from 'react'
import ThirdImg from "../assets/section3img.png"
import Sec3Cards from './Sec3Cards'
import MiddleImg from "../assets/Sec3-middleimg.png"
import Timeicon from "../assets/Time-icon.png"
import Growicon from "../assets/Grow_Sprout-icon.png"
import Temparatureicon from "../assets/Temperature-icon.png"
import Pruningicon from "../assets/Pruning-icon.png"




const SectionThird = () => {

  return (
    <>
     <div className="container-fluid">
       <div className='Sec3 flex gap-10'>
        <div className='Sec3-content relative'>
          
          <img src={ThirdImg} alt=""className=' w-[950px] h-[720px]' />
          <img src={MiddleImg} alt="" className='absolute top-10 right-30'/>
       
        </div>
        <div className="Sec3-card-all flex flex-wrap gap-2.5">
      
          <Sec3Cards Img={Timeicon} h3="Quality Product" p="Our flowers are of the highest quality, carefully selected and sourced from reputable"/>
          <Sec3Cards Img={Growicon} h3="Always Fresh" p="Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment." />
         <Sec3Cards Img={Temparatureicon} h3="Work Smart" p="We work smart, using innovative techniques and technology to streamline our processes"/>
          <Sec3Cards Img={Pruningicon} h3="Excelent Service" p="We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs"/>
     
        </div>
      </div>  
      </div>   
    </>
  )
}

export default SectionThird