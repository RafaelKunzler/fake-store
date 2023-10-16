import BackToTopButton from '@/components/BackToTopButton'
import Footer from '@/components/Footer'
import Products from '@/components/Products'

const Shop = () => {
  return (
    <div className='pt-12'>
      <Products 
        selected = "all"
      />

      <Footer />
      <BackToTopButton />
      
    </div>
  )
}

export default Shop