import React from 'react';
import profile from '../assets/hero1.png';

function Hero() {
    return (
        <div className="lg:container px-10 mx-auto lg:px-15 lg:py-2">
            <div className="md:flex lg:gap-20">
                <div className="w-[100%] pt-10">
                    <div className="font-medium text-[20px]"> Full-Stack Developer</div>
                    <h1 className="lg:text-7xl text-5xl font-medium mt-4 leading-[55px] lg:leading-[80px]" >I Build Digital <br /> Experiences That Make An <span className="text-[#6b5b45]">Impact.</span></h1>
                    <p className="mt-5 max-w-[600px] text-2xl text-gray-700">I'm a Full-Stack Developer who helps businesses and brands turn their ideas clean, fast and modern web experiences.</p>
                    <div className="flex items-center gap-10 mt-6">
                        <button className="text-[14px] md:text-[16px] font-normal cursor-pointer bg-black text-white px-8 py-3 rounded">VIEW MY WORK <span className="text-xl ml-2">↗</span></button>
                        <button className="text-[16px] font-bold py-3 border-b-2 cursor-pointer">BOOK A CALL</button>
                    </div>
                </div>
                <div className='mt-10 md:w-[800px] lg:w-full'>
                    <img src={profile} alt="" className="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
