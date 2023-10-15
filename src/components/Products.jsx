/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Command, CommandInput } from './ui/command'
import ProductCard from './ProductCard'
import { Search } from 'lucide-react'


const Products = (props) => {

  const URL = "https://fakestoreapi.com/products"

  const [selected, setSelected] = useState(props.selected)
  const [products, setProducts] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    setSelected(props.selected)
  }, [props])

  // get products on category
  useEffect(() => {
    setSearchInput("")

    if(selected === "all") {      
      fetch(URL)
      .then(res => res.json())
      .then(json => setProducts(json))
    }

    if(selected === "woman") {      
      fetch(URL + "/category/women's clothing")
      .then(res => res.json())
      .then(json => setProducts(json))      
    }

    if(selected === "man") {      
      fetch(URL + "/category/men's clothing")
      .then(res => res.json())
      .then(json => setProducts(json))      
    }

    if(selected === "jewelery") {      
      fetch(URL + "/category/jewelery")
      .then(res => res.json())
      .then(json => setProducts(json))      
    }

    if(selected === "electronics") {      
      fetch(URL + "/category/electronics")
      .then(res => res.json())
      .then(json => setProducts(json))      
    }
  }, [selected])

  const handleSearch = (e) => {
    e.preventDefault()
    setSelected("")
  }

  // get products on search input
  useEffect(() => {
    
    setSelected("all")
    
  }, [searchInput])
    

  
 

  return (
    <div className='flex flex-col  w-full px-20 gap-6 '>
        <h3 className='text-4xl font-black'>PRODUCT OVERVIEW</h3> 

        <div className='flex justify-between align-middle gap-8 flex-wrap'>
          <ul className='flex text-muted-foreground gap-3 lg:gap-10 flex-wrap '>
            <li onClick={() => setSelected("all")} className={selected === "all" ? "underline cursor-default" : "cursor-pointer hover:underline"}>All Products</li>
            <li onClick={() => setSelected("woman")} className={selected === "woman" ? "underline cursor-default" : "cursor-pointer hover:underline"}>Woman</li>
            <li onClick={() => setSelected("man")} className={selected === "man" ? "underline cursor-default" : "cursor-pointer hover:underline"}>Man</li>
            <li onClick={() => setSelected("jewelery")} className={selected === "jewelery" ? "underline cursor-default" : "cursor-pointer hover:underline"}>Jewelery</li>
            <li onClick={() => setSelected("electronics")} className={selected === "electronics" ? "underline cursor-default" : "cursor-pointer hover:underline"}>Eletronics</li>
          </ul>
                   
          <form onSubmit={handleSearch}>
            <input className='w-80 bg-gray-200 py-1 px-4'
              placeholder=  "Search Product"    
              value={searchInput}         
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
        </div>   

        <div id="products" className='grid py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

          {products.filter((product) => {
            if(searchInput == '') {
              return product
            }
            else if(product.title.toLowerCase().includes(searchInput.toLowerCase())){
              return product
            }
          })
          
          .map(product =>
              <ProductCard 
                key = {product.id}
                title = {product.title}
                price = {product.price}
                image = {product.image}
              />
          )}

                    

        </div>

      </div>
        
    
  )
}

export default Products