import React from 'react'

function Services() {
  return (
        <div className="lg:container mt-10 px-10 mx-auto lg:px-15 lg:py-2">
      <div>
        <div className="flex items-center gap-4">
            <h2 className="whitespace-nowrap text-3xl lg:text-4xl">WHAT I DO</h2>
            <div className="bg-gray-400 flex-1 h-px"></div>
        </div>
        <div className="mt-10 grid grid-cols-2 md:flex gap-5  border-b-2 border-gray-400 pb-10">
            <div className="lg:flex gap-5 md:border-r-2 border-gray-400">
                <svg
                className="w-10 lg:w-15 h-8 text-gray-700 border border-solid border-gray-400 rounded shadow-[0_0_2px_gray]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                 <rect x="4" y="3" width="16" height="12" rx="1" />
                 <path  d="M2 19h20" />
                </svg>
                <div>
                    <h3 className="mt-2 text-md lg:text-xl font-medium">Web Development</h3>
                    <p className="text-gray-700 text-[18px]">Building responsive and performant websites with clean code and best practices.</p>
                </div>
            </div>

            <div className="lg:flex gap-5 md:border-r-2 border-gray-400">
                <svg
                className="w-10 lg:w-15 h-8 text-gray-700 border border-solid border-gray-400 rounded shadow-[0_0_2px_gray]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                 <rect x="4" y="3" width="16" height="12" rx="1" />
                 <path  d="M2 19h20" />
                </svg>
                <div>
                    <h3 className="mt-2 text-md lg:text-xl font-medium">Shopify Development</h3>
                    <p className="text-gray-700 text-[18px]">Custom shopify stores that are fast, scalable and easy to manage</p>
                </div>
            </div>

            <div className="lg:flex gap-5 md:border-r-2 border-gray-400">
                <svg
                className="w-10 lg:w-15 h-8 text-gray-700 border border-solid border-gray-400 rounded shadow-[0_0_2px_gray]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                 <rect x="4" y="3" width="16" height="12" rx="1" />
                 <path  d="M2 19h20" />
                </svg>
                <div>
                    <h3 className="mt-2 text-md lg:text-xl font-medium">Landing Pages</h3>
                    <p className="text-gray-700 text-[18px]">High converting landing pages that turns visitor into customers.</p>
                </div>
            </div>

            <div className="lg:flex gap-5">
                <svg
                className="w-10 lg:w-15 h-8 text-gray-700 border border-solid border-gray-400 rounded shadow-[0_0_2px_gray]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                 <rect x="4" y="3" width="16" height="12" rx="1" />
                 <path  d="M2 19h20" />
                </svg>
                <div>
                    <h3 className="mt-2 text-md lg:text-xl font-medium">Performance Optimization</h3>
                    <p classname="text-gray-700 text-[18px]">Improving website speed, responsiveness, and overall performance.</p>
                </div>
            </div>

            

            
        </div>

        </div>
    </div>
  )
}

export default Services
