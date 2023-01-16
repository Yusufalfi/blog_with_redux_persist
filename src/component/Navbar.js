import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-8 h-14 items-center bg-slate-100'>
        <h1 className='text-2xl font-medium'>Blog</h1>
        <div className='flex w-40 justify-around'>
            <Link to={'/'}>Home</Link>
            <Link to={'add-post'}>Post</Link>
        
        </div>
    </nav>
  )
}

export default Navbar