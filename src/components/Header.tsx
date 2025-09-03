import Image from 'next/image'
import { assets } from '@/assets/assets'

import React from 'react'

const Header = () => {
  return (
    <div className='p-5 md:px-12 lg:px-24 bg-gray-800 text-white font-bold text-2xl'>
      <div className='flex justify-center items-center'>
        <Image src={assets.logo} alt='logo' width={50} height={50} className='mr-3'/>
        
      </div>
      
    </div>
  )
}

export default Header
