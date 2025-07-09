import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='md:flex w-full justify-between px-10 border-b-gray-300 border-2 md:h-16'>
        <div className="md:flex items-center justify-center md:gap-3 ">
            <div className="bg-gray-300 rounded-full w-10 h-10"></div>
            <h2 className='md:text-2xl font-semibold'>Office Activity Tracker </h2>
        </div>
        <div className="flex items-center justify-center md:gap-4">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar