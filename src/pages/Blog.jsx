import BackToTopButton from '@/components/BackToTopButton'
import BlogBanner from '@/components/BlogBanner'
import BlogCard from '@/components/BlogCard'
import BlogCardProduct from '@/components/BlogCardProduct'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
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

      <div className='flex flex-wrap'>
        <div className='w-full pr-20 lg:w-2/3'>
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

        <div className='flex flex-col gap-6 w-full lg:w-1/3 px-20 py-16'>
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

          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-extrabold '>Archive</h1>
            <div className='flex justify-between text-muted-foreground text-md hover:text-primary hover:cursor-pointer'>
                <p>October 2023</p>
                <p>(9)</p>
            </div>
            <div className='flex justify-between text-muted-foreground text-md hover:text-primary hover:cursor-pointer'>
                <p>September 2023</p>
                <p>(3)</p>
            </div>
            <div className='flex justify-between text-muted-foreground text-md hover:text-primary hover:cursor-pointer'>
                <p>August 2023</p>
                <p>(16)</p>
            </div>
            <div className='flex justify-between text-muted-foreground text-md hover:text-primary hover:cursor-pointer'>
                <p>July 2023</p>
                <p>(1)</p>
            </div>
            <div className='flex justify-between text-muted-foreground text-md hover:text-primary hover:cursor-pointer'>
                <p>June 2023</p>
                <p>(21)</p>
            </div>
            <div className='flex justify-between text-muted-foreground text-md hover:text-primary hover:cursor-pointer'>
                <p>May 2023</p>
                <p>(9)</p>
            </div>
          </div>

          <div>
            <h1 className='text-2xl font-extrabold '>Tags</h1>
            <div className=' flex flex-wrap gap-4 pt-8'>
                <Badge variant="outline" className="hover:bg-primary hover:text-white hover:cursor-pointer p-2">Fashion</Badge>
                <Badge variant="outline" className="hover:bg-primary hover:text-white hover:cursor-pointer p-2">Lifestyle</Badge>
                <Badge variant="outline" className="hover:bg-primary hover:text-white hover:cursor-pointer p-2">Denim</Badge>
                <Badge variant="outline" className="hover:bg-primary hover:text-white hover:cursor-pointer p-2">Streetstyle</Badge>
                <Badge variant="outline" className="hover:bg-primary hover:text-white hover:cursor-pointer p-2">Crafts</Badge>


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