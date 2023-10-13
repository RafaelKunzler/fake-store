
import CategoryCard from '@/components/CategoryCard';
import Products from '@/components/Products';
import { Button } from '@/components/ui/button';
import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'



const Home = () => { 



  return (
    
        <div className='-z-10 top-0 left-0 absolute h-screen w-screen  '>
            <Fade className='' >
                    <div className={`flex items-center justify-center lg:justify-start bg-cover h-screen bg-none lg:bg-slider-image4 px-20 `}>
                        <div className='flex flex-col gap-7'>
                            <h3 className='text-3xl font-light'>Eletronics's Collection 2023</h3>
                            <h1 className='text-6xl font-bold'>NEW ARRIVALS</h1>
                            <Button >SHOP NOW</Button>
                        
                        </div>                
                    </div>

                    <div className={`flex items-center justify-center lg:justify-start bg-cover h-screen lg:bg-slider-image1 px-20`}>
                        <div className='flex flex-col gap-7'>
                            <h3 className='text-3xl font-light'>Woman's Collection 2023</h3>
                            <h1 className='text-6xl font-bold'>NEW ARRIVALS</h1>
                            <Button >SHOP NOW</Button>
                        
                        </div>                
                    </div>

                    <div className={`flex items-center justify-center lg:justify-start bg-cover h-screen lg:bg-slider-image2 px-20`}>
                        <div className='flex flex-col gap-7'>
                            <h3 className='text-3xl font-light'>Jewelery's Collection 2023</h3>
                            <h1 className='text-6xl font-bold'>NEW ARRIVALS</h1>
                            <Button >SHOP NOW</Button>
                        
                        </div>                
                    </div>

                    <div className={`flex items-center justify-center lg:justify-start bg-cover h-screen lg:bg-slider-image3 px-20`}>
                        <div className='flex flex-col gap-7'>
                            <h3 className='text-3xl font-light'>Man's Collection 2023</h3>
                            <h1 className='text-6xl font-bold'>NEW ARRIVALS</h1>
                            <Button >SHOP NOW</Button>
                        
                        </div>                
                    </div> 
            </Fade>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 col gap-2 mt-[1vh] px-20 py-6 lg:p-20'>
                <CategoryCard 
                    title = "Women"
                    text = "Spring 2023"
                    image = "category/woman.jpg"
                />
                <CategoryCard 
                    title = "Men"
                    text = "Spring 2023"
                    image = "category/man.jpg"
                />
                <CategoryCard 
                    title = "Jewelery"
                    text = "Spring 2023"
                    image = "category/jewelery.jpg"
                />
                <CategoryCard 
                    title = "Electronics"
                    text = "New Tech"
                    image = "category/eletronics.jpg"
                />
            </div>

            <Products />
        </div>
  )
}

export default Home