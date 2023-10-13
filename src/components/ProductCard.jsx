import React from 'react'
import { Card, CardContent } from './ui/card'

const ProductCard = (props) => {
  return (    
    <Card className='p-4 w-fit'>
        <CardContent className='flex flex-col gap-4 '>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className='w-40 h-auto'/>
         <p>Product Name Here</p>
         <p>Price</p>
        </CardContent>
    </Card>
  )
}

export default ProductCard