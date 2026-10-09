import React from 'react'
import { Button } from '../ui/button'
import { NavMenu } from './NavMenu'
import { MobileMenu } from './MobileMenu'

const Logo = () => (
  <span className='font-parkin font-bold text-2xl'>LOGO</span>
)

const Header = () => {
  return (
    <section className='container relative mb-[-120px] z-10'>

      {/* Desktop */}
      <div className='hidden lg:flex justify-between items-center py-4'>
        {/* Logo Area */}
        <div>
          <Logo />
        </div>
        {/* Menu Area */}
        <div>
          <NavMenu />
        </div>
        {/* Button */}
        <div className='space-x-4'>
          <Button variant='outline'>Sign In</Button>
          <Button> Sign Up</Button>
        </div>
      </div>

      {/* Tablet & Mobile */}
      <div className='lg:hidden relative flex items-center justify-between py-4'>
        {/* Hamburger Menu + Logo */}
        <div className='flex items-center gap-2'>
          <MobileMenu />
          <Logo />
        </div>

        {/* Button */}
        <Button> Sign Up</Button>
      </div>

    </section>
  )
}

export default Header
