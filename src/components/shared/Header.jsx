import React from 'react'
import { Button } from '../ui/button'
import { NavMenu } from './NavMenu'

const Header = () => {
  return (
    <section className='container mb-[-120px] z-10'>
        <div className='flex justify-between items-center py-4'>

        {/* Logo Area */}
        <div>
            <span className='font-parkin font-bold text-2xl'>LOGO</span>
        </div>
        {/* Menu Area */}
        <div>
            <NavMenu/>
        </div> 
        {/* Button */}
        <div className='space-x-4'>
            <Button variant='outline'>Sign In</Button>
            <Button> Sign Up</Button>
            
        </div>
        </div>
    </section>
  )
}

export default Header