import React from 'react'

function Footer() {
  return (
    <div className="lg:container mx-auto px-10 lg:px-15 py-3 mt-4 border-t-2 border-gray-400 bg-black">
      <div className="flex flex-col md:flex-row justify-between gap-5 md:items-center">
        <div className="flex items-center gap-2">
            <h3 className="text-3xl font-bold text-white border-2 border-white rounded w-10 h-10 md:h-12 md:w-12 flex items-center justify-center rounded block">G</h3>
            <p className="text-white">&copy; 2026 Gaurav Dev. All rights reserved.</p>
        </div>
        <div>
            <ul className="flex items-center gap-10">
                <li><a href="" className="text-white">GitHub</a>
                </li>
                <li><a href="" className="text-white">Linkedin</a></li>
                <li><a href="" className="text-white">Instagram</a></li>
                <li><a href="" classNameName="text-white">Email</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
