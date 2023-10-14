/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardContent } from './ui/card'

const ProductCard = (props) => {
  return (    
    <Card className='p-4 w-fit'>
        <CardContent className='flex flex-col h-full gap-4  justify-between'>
          <img src={props.image} alt="" className='w-40 h-auto'/>
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-muted-foreground'>{props.title}</p>
            <p className='text-muted-foreground'>${props.price}</p>
          </div>
        </CardContent>
    </Card>
  )
}

export default ProductCard