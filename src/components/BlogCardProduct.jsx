/* eslint-disable react/prop-types */
import React from 'react'

const BlogCardProduct = (props) => {
  return (
    <div className='flex gap-6'>
        <img src={props.image} alt=""  className='w-20 h-auto'/>
        <div className='flex flex-col justify-between py-3'>
            <h3 className='text-md hover:text-primary hover:cursor-pointer'>{props.title}</h3>
            <p className='text-muted-foreground text-sm'>$ {props.price}</p>
        </div>
    </div>
  )
}

export default BlogCardProduct