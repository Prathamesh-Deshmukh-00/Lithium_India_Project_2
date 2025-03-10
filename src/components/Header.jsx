import React from 'react'
import Ball from '../Images/bell.png';
import User from '../Images/user.png';

function Header() {
  return (
    <div className='h-18 w-screen bg-[#019D6D] flex justify-between items-center px-4'>
        <h1 className='text-white font-bold text-2xl'>Lithium India</h1>
        <div className='flex ml-6'>
          <img src={Ball} className='h-10 w-10 ml-8' alt="Ball" />
          <img src={User} className='h-10 w-10 ml-8' alt="User" />
        </div>
    </div>
  )
}

export default Header
