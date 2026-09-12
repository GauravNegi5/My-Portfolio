import React, { useState } from 'react'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu(){
    setMenuOpen(!menuOpen)
  }

  return (
        <div className="lg:container px-10 mx-auto lg:px-15 py-3">
      <nav className="flex justify-between" >
        <div>
          <div className="flex gap-3 align-item-center justify-center">
            <h3 className="text-4xl font-bold text-white bg-black h-15 w-15 flex items-center justify-center rounded block">G</h3>
            <p className="block text-2xl font-bold">GAURAV <span class="text-sm block  ">WEB DEVELOPER</span></p>
          </div>

        </div>
        <div className="lg:flex gap-10 hidden">
          <ul className="flex items-center gap-10">
            <li><a href="" class="text-[18px] font-medium hover:text-gray-700 active:underline">Home</a></li>
            <li><a href="" className="text-[18px] font-medium hover:text-gray-700">About</a></li>
            <li><a href="" className="text-[18px] font-medium hover:text-gray-700">Services</a></li>
            <li><a href="" className="text-[18px] font-medium hover:text-gray-700">Work</a></li>
            <li><a href="" className="text-[18px] font-medium hover:text-gray-700">Contact</a></li>
          </ul>
          <button className="text-[18px] font-normal cursor-pointer bg-black text-white px-8 py-4 rounded">LET'S WORK TOGETHER <span class="text-2xl ml-2">↗</span></button>
        </div>
        <div  class='hamburger' className='xl:hidden'>
          <div onClick={toggleMenu} className="flex xl:hidden flex-col gap-1">
            <div className="w-[30px] bg-black h-[3px]"></div>
            <div className="w-[30px] bg-black h-[3px]"></div>
            <div className="w-[30px] bg-black h-[3px]"></div>
          </div>
        </div>
        {menuOpen && (
        <div className="absolute overflow-hidden top-10 right-0 w-[50%] h-full bg-black text-white z-50 p-8">
          <ul className="flex flex-col gap-10">
            <li><a href="#" className='text-2xl'>Home</a></li>
            <li><a href="#" className='text-2xl'>About</a></li>
            <li><a href="#" className='text-2xl'>Services</a></li>
            <li><a href="#" className='text-2xl'>Work</a></li>
            <li><a href="#" className='text-2xl'>Contact</a></li>
          </ul>

          <button className="mt-10 bg-white pointer text-black text-sm px-2 lg:px-6 py-4 rounded">
            LET'S WORK TOGETHER ↗
          </button>
        </div>
      )}
      </nav>
    </div>
  )
}

export default Navbar
