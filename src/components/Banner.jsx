import {React, useState} from 'react'
import Ban from "../assets/banner.png"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Banner = () => {


const [btn, setBtn] = useState(false)
const handleButton = () => {
  setBtn (!btn)
}


const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");

const [pass, setPass] = useState('');
const [passError, setPassError] = useState('');

const [eye, setEye] = useState(false);
const HandleEye = () => {
  setEye(!eye)
}


const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
};

const handlePass = (e) => {
   setPass(e.target.value);
   setPassError("");
};

  const handleClick = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("!!! Please input your mail")
    }
    if (!pass) {
      setPassError("!!! Please enter your password")
    }
}
  return (
    <>
      <div className="Banner h-[758px]">
        <div className="Banner-pic">
            <img src={Ban} alt="" />
        <div className="Banner-content flex flex-col gap-8">
            <h2 className='text-5xl text-white text-center'>Nature's Beauty Delivered to You</h2>
            <p className='text-white text-1xl text-center '>Nature's beauty is just a click away with our online flower and plant shop. We offer a <br /> wide variety of flowers that will bring a touch of nature to your home!</p>
            <div className="Banner-btn text-center">
                <button 
                onClick={handleButton}
                className='btn-1 bg-green-700 text-1xl text-white text-shadow-2xs text-shadow-white'>Order Now</button>
                <button className='btn-2 bg-transparent text-1xl text-white text-shadow-2xs text-shadow-white border-amber-50 border-2'>Watch Video</button>
  


              { btn ?
                 <div className="form mt-50 mb-">
                 <form action="">
                   <div className="form-content">
                    <label htmlFor="email" className='label'>Enter Mail:</label><br />
                    <input 
                      onChange={handleEmail}
                      type="email" className='input' placeholder='Enter mail'/><br />
                    <h2 className='text-1xl text-red-600'>{emailError}</h2>
                    <label htmlFor="pass" className='labelone'>Enter Password:</label><br />
                    <div className='input-field relative'>
                     <input 
                       onChange={handlePass}
                       type={eye ? "password" : "text"} className='input' placeholder='Enter password'/>
                        <h2 className='text-1xl text-red-600'>{passError}</h2>
                      <div className='absolute right-0 top-[-18px]'> 
                       <IoEye  className=' w-10 h-20  text-black' onClick={HandleEye}/>
                     </div>

                     <div className='absolute right-0 top-[-18px]'>
                       {
                        eye ? 
  
                        <IoEyeOff className='w-10 h-20 text-black' onClick={HandleEye}/> : 
                        <IoEye className='w-10 h-20 text-black' onClick={HandleEye}/> 
                       }
                     </div>

                    </div>
                    <input type="checkbox" name="" id="" className='input-check' />
                    <label htmlFor="checkbox" className='check'>Remember me</label>
                   </div>
                   <button onClick={handleClick}
                  type="button">Submit</button>
                 </form>
                 </div>: null
              }
              
           
            </div>
            
        </div>
        </div>  
      </div>


    </>
  )
}
export default Banner
