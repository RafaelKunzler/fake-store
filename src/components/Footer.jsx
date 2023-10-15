import { Facebook, Instagram } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const Footer = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className='flex flex-wrap lg:flex-nowrap gap-6 px-20 py-12 justify-between w-full bg-zinc-800 text-muted-foreground'>
        <div className='flex flex-col gap-6 w-1/4'>
            <h3 className='text-white'>CATEGORIES</h3>
            <ul className='flex flex-col gap-3'>
                <li className='hover:text-primary hover:cursor-pointer'>Women</li>
                <li className='hover:text-primary hover:cursor-pointer'>Men</li>
                <li className='hover:text-primary hover:cursor-pointer'>Jewelery</li>
                <li className='hover:text-primary hover:cursor-pointer'>Electronics</li>
            </ul>
        </div>

        <div className='flex flex-col gap-6 w-1/4'>
            <h3 className='text-white'>HELP</h3>
            <ul className='flex flex-col gap-3'>
                <li className='hover:text-primary hover:cursor-pointer'>Track Order</li>
                <li className='hover:text-primary hover:cursor-pointer'>Returns</li>
                <li className='hover:text-primary hover:cursor-pointer'>Shipping</li>
                <li className='hover:text-primary hover:cursor-pointer'>FAQ</li>
            </ul>
        </div>

        <div className='flex flex-col justify-between w-1/4'>
        <h3 className='text-white'>GET IN TOUCH</h3>
        <p>Any questions? Let us know in store at 6th floor, 42 Wallaby Way, Sydney or call us on (12) 3456-7890</p>
        <div className='flex gap-6'>
            <Facebook />
            <Instagram />
            
        </div>
        </div>

        <div className='flex flex-col gap-6 w-1/4'>
        <h3 className='text-white'>NEWSLETTER</h3>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input type="email" placeholder='email@exemple.com' className='px-6 py-2 '/>
            <Button type="submit">SUBSCRIBE</Button>
        </form>
        </div>
    </div>
  )
}

export default Footer