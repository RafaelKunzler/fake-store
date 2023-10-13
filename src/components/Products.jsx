import { useEffect, useState } from 'react'
import { Command, CommandInput } from './ui/command'
import ProductCard from './ProductCard'



const Products = () => {

  const [selected, setSelected] = useState("all")
  

  

  return (
    <div className='flex flex-col  w-screen px-20 gap-6'>
        <h3 className='text-4xl font-black'>PRODUCT OVERVIEW</h3> 

        <div className='flex justify-between align-middle gap-8 flex-wrap'>
          <ul className='flex text-muted-foreground gap-3 lg:gap-10 flex-wrap '>
            <li className={selected === "all" ? "underline" : "cursor-pointer hover:underline"}>All Products</li>
            <li className={selected === "woman" ? "underline" : "cursor-pointer hover:underline"}>Woman</li>
            <li className={selected === "man" ? "underline" : "cursor-pointer hover:underline"}>Man</li>
            <li className={selected === "jewelery" ? "underline" : "cursor-pointer hover:underline"}>Jewelery</li>
            <li className={selected === "eletronics" ? "underline" : "cursor-pointer hover:underline"}>Eletronics</li>
          </ul>
                   
          <Command className='w-80 bg-gray-200'>
            <CommandInput placeholder="Search" />
          </Command>
        </div>   

        <div className='grid px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

          {}

          <ProductCard />          

        </div>

      </div>
        
    
  )
}

export default Products