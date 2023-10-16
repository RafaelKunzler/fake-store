/* eslint-disable react/prop-types */

import { Separator } from './ui/separator'
import { ArrowRight } from 'lucide-react'

const BlogCard = (props) => {

    

  return (
    <div className='flex flex-col pl-20 py-16 gap-6'>
        <img src={props.image} alt=""/>
        <h1 className='text-2xl font-extrabold hover:text-primary hover:cursor-pointer'>{props.title}</h1>
        <p className='text-muted-foreground'>{props.subTitle}</p>
        <div className='flex justify-between'>
            <div className='flex text-muted-foreground gap-3'>
                <p>By {props.user} </p> 
                <Separator orientation="vertical"/>
                <p>{props.tags}</p>
                <Separator orientation="vertical" />
                <p> {props.comments} Comments</p>
            </div>
            <h3 className='flex gap-2 font-medium hover:text-primary hover:cursor-pointer'>CONTINUE READING <ArrowRight /></h3>
        </div>
        <div className='bg-slate-100 absolute p-3 m-4 text-center'> 
            <p className='font-bold text-3xl'>{props.day}</p>
            <p className='text-muted-foreground text-sm'>{props.month}</p>
        </div>
    </div>
  )
}

export default BlogCard