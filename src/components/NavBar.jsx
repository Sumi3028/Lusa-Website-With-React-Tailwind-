import React from 'react'
import Logo from "../assets/LOGO_png 1.png"
const HandleClick = () => {

}
const NavBar = () => {
  return (
    <>
        <div className="Nav flex justify-between">
            <div className="Logo flex text-2xl">
                <p>Lusa</p>
                <img src={Logo} alt=""/>
            </div>
            <div className="Nav-items">
                <ul className='flex gap-4 text-2xl '>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
            </div>
            <div className="Nav-btn flex" >
            <button> Call Us</button>

            </div>
        </div>
    </>
  )
}

export default NavBar

