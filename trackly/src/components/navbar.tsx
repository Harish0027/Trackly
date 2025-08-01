import UserButton from '@/features/auth/components/user-button'
import React from 'react'
import MobileSiderbar from './mobile-sidebar'

const Navbar = () => {
  return (
    <nav className='pt-4 px-6 flex items-center justify-between'>
        <div className='flex-col hidden lg:flex'>
            <h1 className='text-2xl font-semibold'>Home</h1>
            <p className='text-muted-foreground'>Moniter all of your projects and tasks here</p>
        </div>
        <MobileSiderbar />
        <UserButton />
    </nav>
  )
}

export default Navbar