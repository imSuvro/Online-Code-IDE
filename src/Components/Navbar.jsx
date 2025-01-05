import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar';
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { toggleClass } from '../helper';


const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img className='w-[150px] cursor-pointer' src={logo} alt="logo" />
        </div>
        <div className="links flex items-center gap-2">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Services</Link>
          <Avatar onClick={()=>{toggleClass('.dropDownNavbar', 'hidden')}} name="Suvra Samajder" size="40" round={true} className='cursor-pointer ml-2' />
        </div>
        <div className="dropDownNavbar hidden rounded-lg absolute right-[90px] top-[70px] shadow-lg shadow-black/50 bg-[#1A1919] w-[150px] h-[150px] p-[10px]">
          <div className='py-[10px] border-b-[1px] border-b-[#fff]'>
            <h3 className="text-[17px] leading-none">Suvra Samajder</h3>
          </div>
          <i className='flex p-1 rounded-lg pl-1 items-center gap-2 mt-3 mb-2 cursor-pointer hover:bg-[#202020]' style={{ fontStyle: "normal" }}><MdOutlineLightMode className='text-[20px]' />Light Mode</i>
          <i className='flex p-1 rounded-lg pl-1 items-center gap-2 mt-3 mb-2 cursor-pointer hover:bg-[#202020]' style={{ fontStyle: "normal" }}><BsFillGridFill className='text-[20px]' />Grid Layout</i>
        </div>
      </div>
    </>
  )
}

export default Navbar