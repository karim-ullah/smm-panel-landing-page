import React from 'react'
import { Button } from '../ui/button'
import { NavMenu } from './NavMenu'
import { LockIcon } from 'lucide-react'

const Header = () => {
  return (
    <section className='container mt-12'>
        <div className='bg-primary rounded-2xl flex justify-between items-center py-4 px-6'>

        {/* Logo Area */}
        <div>
            <h1 className='font-parkin font-bold text-2xl'>SMM <span>Panel</span></h1>
        </div>
        {/* Menu Area */}
        <div>
            <NavMenu/>
        </div>
        {/* Button */}
        <div>
            <Button> <LockIcon size={14}/>Sign In</Button>
            
        </div>
        </div>
    </section>
  )
}

export default Header