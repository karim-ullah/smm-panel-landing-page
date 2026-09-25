import React from 'react'
import { Button } from '../ui/button'
import { NavMenu } from './NavMenu'
import { LockIcon } from 'lucide-react'

const Header = () => {
  return (
    <section className='container'>
        <div className='flex justify-between items-center py-4 px-6'>

        {/* Logo Area */}
        <div>
            <h1 className='font-parkin font-bold text-2xl'>LOGO</h1>
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