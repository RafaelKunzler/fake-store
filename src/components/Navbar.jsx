import { Menu, Search, ShoppingCart, X } from 'lucide-react'

import { NavLink } from 'react-router-dom'
import { Separator } from './ui/separator'
import { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(isOpen === true ? false : true)
    }

  return (
    
    <div className='flex flex-col max-w-screen'>
        <div className='  bg-zinc-800  text-zinc-400 justify-between  text-sm px-20 py-2.5  hidden lg:flex'>
            <div>
                <p>Free shipping for standard order over $100</p>
            </div>
            <div className='flex gap-6'>
                <p>Help & FAQs</p>
                <Separator orientation="vertical" />
                <p>My Account</p>
            </div>
        </div>

        <div className='flex justify-between p-6 lg:px-20 py-4 items-center'>
            <div className='flex gap-24 items-center'>
                <div className='flex items-center gap-6'>
                    <NavLink to='/'><h1 className='text-2xl'><span className='font-black'>FAKE</span> STORE</h1></NavLink> 
                    {isOpen ? <X className='lg:invisible' onClick={handleToggleMenu}/> : <Menu className='lg:invisible' onClick={handleToggleMenu}/>}           
                </div>
                <ul className='justify-between gap-8 font-medium hidden lg:flex'>
                    <NavLink to='/'><li className='hover:text-primary'>Home</li></NavLink>
                    <NavLink to='/shop'><li className='hover:text-primary'>Shop</li></NavLink>
                    <NavLink to='/blog'><li className='hover:text-primary'>Blog</li></NavLink>
                    <NavLink to='/about'><li className='hover:text-primary'>About</li></NavLink>
                    <NavLink to='/contact'><li className='hover:text-primary'>Contact</li></NavLink>
                </ul>
            </div>

            <div className='flex gap-7'>
            <Search />
            <ShoppingCart />
            </div>
        </div>

        {isOpen ? 
            <div>
                <div className='xl:hidden flex items-center py-6 lg:py-0 lg:flex-row justify-center'>
                <ul className='flex gap-4 lg:flex-row '>
                    <NavLink to='/'><li onClick={() => setIsOpen(false)} className='hover:text-primary' >Home</li></NavLink>
                    <NavLink to='/shop'><li onClick={() => setIsOpen(false)}  className='hover:text-primary'>Shop</li></NavLink>
                    <NavLink to='/blog'><li onClick={() => setIsOpen(false)}  className='hover:text-primary'>Blog</li></NavLink>
                    <NavLink to='/about'><li onClick={() => setIsOpen(false)}  className='hover:text-primary'>About</li></NavLink>
                    <NavLink to='/contact'><li onClick={() => setIsOpen(false)}  className='hover:text-primary'>Contact</li></NavLink>
                </ul>
            </div>
            </div> 
        : ''}

        
    </div>
  )
}

export default Navbar