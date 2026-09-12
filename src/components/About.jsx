import React from 'react'

function About() {
  return (
        <div className="lg:container mt-10 px-10 mx-auto lg:px-15 lg:py-2">
        <h2 className="whitespace-nowrap text-3xl lg:text-4xl mb-4">A LITTLE ABOUT ME</h2>

        <div className="flex flex-col gap-10 md:flex-row justify-between lg:gap-20">
            <div className="md:w-[40%] lg:w-[30%]">
                <h4 className="text-2xl lg:text-3xl mb-4 font-medium">I enjoyed turning ideas into real products.</h4>
                <p className="text-md font-medium text-gray-700" >I'm a BCA graduate and passionate Full-Stack developer who loves building clean, fast and user-focused web experiences. I'm always learning and improving</p>
            </div>
            <div className="w-[30%] hidden lg:block">
                <ul>
                    <li className="text-md mb-3 text-gray-700 font-medium">BCA Graduate</li>
                    <li className="text-md mb-3 text-gray-700 font-medium">Based in Dehradun, India</li>
                    <li className="text-md mb-3 text-gray-700 font-medium">Available for Freelance</li>
                    <li className="text-md mb-3 text-gray-700 font-medium">Open to remote work</li>
                </ul>
            </div>
            <div className="md:w-[50%] lg:w-[40%]">
                <h4 className="text-md font-medium text-gray-700 mb-4">LET'S WORK TOGETHER</h4>
                <h2 className="text-2xl lg:text-3xl mb-2 font-medium">Have a project in mind?</h2>
                <p className="font-medium text-gray-700 mb-2">Let's build something amazing together.</p>
                <div className="flex gap-5 mt-5">
                    <button className="text-[14px] font-normal cursor-pointer bg-black text-white px-4 py-2 rounded">START A PROJECT <span class="text-xl lg:text-2xl ml-2">↗</span></button>
                    <button className="border px-4 py-3 font-medium rounded  border-2px border-gray-500">BOOK A CALL</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
