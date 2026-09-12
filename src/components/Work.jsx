import React from 'react'
import eduworld from '../assets/edu-world.png'
import youtube from '../assets/youtube-clone.png'
import blog from '../assets/blog.png'

function Work() {
  return (
        <div className="lg:container mt-10 px-10 mx-auto lg:px-15 lg:py-2">
        <h2 className="whitespace-nowrap text-3xl lg:text-4xl mb-10">SELECTED WORK</h2>
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:items-center md:h-[250px] mb-20" >
            <div className="flex w-[50%] gap-5 lg:gap-10 md:border-b-2 border-gray-300 md:pb-18">
                <div className="text-2xl lg:text-4xl border-2 border-gray-200 p-2 h-12 lg:h-15  shadow-[0_2px_0_gray]">
                    01
                </div>
                <div className="border-l-2 border-gray-300 pl-10">
                    <h3 className="font-medium text-md lg:text-xl mb-2">EDU-WORLD LMS</h3>
                    <p className="text-md hidden md:block lg:text-xl max-w-[500px] mb-3" >A full-stack learning platform with course management, student dashboard payments and secure authentication.</p>
                    <div className="flex gap-2 lg:gap-4">
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium">MERN Stack</span>
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium">Redux</span>
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium ">Stripe</span>
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium">MongoDB</span >
                    </div>
                </div>
            </div>
            <div className="w-[100%] md:w-[50%] h-[100%] border-2 border-gray-400 rounded-xl shadow-[0_0_2px_gray] ">
                <img src={eduworld} alt="" className="h-[100%] w-[100%] rounded-xl" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:items-center md:h-[250px] mb-20" >
            <div className="flex w-[50%] gap-5 lg:gap-10 md:border-b-2 border-gray-300 md:pb-18">
                <div className="text-2xl lg:text-4xl border-2 border-gray-200 p-2 h-12 lg:h-15  shadow-[0_2px_0_gray]">
                    02
                </div>
                <div className="border-l-2 border-gray-300 pl-10">
                    <h3 className="font-medium text-md lg:text-xl mb-2">YOUTUBE CLONE</h3>
                    <p className="text-md lg:text-xl max-w-[500px] mb-3 hidden md:block" >A responsive video browsing experience with search, video details, categories and more.</p>
                    <div className="flex gap-2 w-[500px] lg:gap-4">
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium">React</span>
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium">API</span>
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium">Tailwind CSS</span>
                    </div>
                </div>
            </div>
            <div className="md:w-[50%] h-[100%] border-2 border-gray-400 rounded-xl shadow-[0_0_2px_gray] ">
                <img src={youtube} alt="" className="h-[100%] w-[100%] rounded-xl" />
            </div>
        </div>

         <div className="flex flex-col md:flex-row md:justify-between gap-10 md:items-center md:h-[250px] mb-20" >
            <div className="flex w-[50%] gap-5 lg:gap-10 md:border-b-2 border-gray-300 md:pb-18">
                <div className="text-2xl lg:text-4xl border-2 border-gray-200 p-2 h-12 lg:h-15  shadow-[0_2px_0_gray]">
                    03
                </div>
                <div className="border-l-2 border-gray-300 pl-10">
                    <h3 className="font-medium text-md lg:text-xl mb-2">BLOG PLATFORM</h3>
                    <p className="hidden md:block text-md lg:text-xl max-w-[500px] mb-3" >A modern blogging platform with authentication, post management, rich text editor and search.</p>
                    <div className="flex gap-2 w-[100%] lg:gap-4">
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium">React</span>
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium">Appwrite</span>
                        <span className="text-sm lg:border-2 lg:border-gray-400 p-1 rounded shadow-[0_0_2px_gray] text-gray-500 font-medium">Tailwind CSS</span>
                    </div>
                </div>
            </div>
            <div className="md:w-[50%] h-[100%] border-2 border-gray-400 rounded-xl shadow-[0_0_2px_gray] ">
                <img src={blog} alt="" className="h-[100%] w-[100%] rounded-xl" />
            </div>
        </div>
    </div>
  )
}

export default Work
