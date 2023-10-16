import BackToTopButton from '@/components/BackToTopButton'
import BlogBanner from '@/components/BlogBanner'
import BlogCard from '@/components/BlogCard'
import BlogCardProduct from '@/components/BlogCardProduct'
import Footer from '@/components/Footer'
import { Input } from '@/components/ui/input'


import { useEffect, useState } from 'react'

const Blog = () => {

  const [products, setProducts] = useState([])
    const URL = "https://fakestoreapi.com/products"

    useEffect(() => {
        fetch(URL)
          .then(res => res.json())
          .then(json => setProducts(json))
    }, [])    

  return (
    <div>
        <BlogBanner
          text = "Blog"
      />

      <div className='flex'>
        <div className='w-2/3'>
          <BlogCard 
            image = "/blog/blog-04.jpg"
            title = "8 Inspiring Ways to Wear Dresses in the Winter"
            subTitle = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
            user = "Admin"
            tags = "StreetStyle, Fashion, Couple"
            comments = {8}
            day = "16"
            month = "Oct 2023"
          />

          <BlogCard 
            image = "/blog/blog-05.jpg"
            title = "The Great Big List of Men’s Gifts for the Holidays"
            subTitle = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
            user = "Admin"
            tags = "StreetStyle, Fashion, Couple"
            comments = {6}
            day = "14"
            month = "Oct 2023"
          />

          <BlogCard 
            image = "/blog/blog-06.jpg"
            title = "5 Winter-to-Spring Fashion Trends to Try Now"
            subTitle = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
            user = "Admin"
            tags = "StreetStyle, Fashion, Couple"
            comments = {9}
            day = "13"
            month = "Oct 2023"
          />
        </div>

        <div className='flex flex-col gap-6 w-1/3 px-20 py-16'>
          <Input placeholder="Search"/>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-extrabold'>Categories</h1>
            <ul className='flex flex-col gap-2'>
              <li className='text-muted-foreground border-b-2 py-2 hover:text-primary hover:cursor-pointer'>Fashion</li>
              <li className='text-muted-foreground border-b-2 py-2 hover:text-primary hover:cursor-pointer'>Beauty</li>
              <li className='text-muted-foreground border-b-2 py-2 hover:text-primary hover:cursor-pointer'>Street Style</li>
              <li className='text-muted-foreground border-b-2 py-2 hover:text-primary hover:cursor-pointer'>Life Style</li>
              <li className='text-muted-foreground border-b-2 py-2 hover:text-primary hover:cursor-pointer'>DIY & Crafts</li>
            </ul>
          </div>

          <div className='flex flex-col gap-6'>
            <h1 className='text-2xl font-extrabold '>Featured Products</h1>
            <div className='flex flex-col gap-10'>
              {products.filter((product) => {
                if(product.id < 4){
                  return product
                }
              })
              .map(product => 
                <BlogCardProduct 
                  key = {product.id}
                  image = {product.image}
                  title = {product.title}
                  price = {product.price}
                />
              )}
            </div>
          </div>


        </div>



      </div>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default Blog