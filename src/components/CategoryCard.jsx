/* eslint-disable react/prop-types */

const CategoryCard = (props) => {
  return (
    <div> 
        <a href="#products">      
            <div className='flex w-full shadow-md border-2 hover:border-primary hover:shadow-2xl'>
                <div className='flex w-full h-40 content-between justify-between'>
                    <div className='w-1/2 p-3'>
                        <h3 className="text-3xl font-bold">{props.title}</h3>
                        <p className="text-muted-foreground">{props.text}</p>
                    </div>
                    <img src={props.image} alt="" className='-z-10 h-full w-1/2 object-cover p-0 hidden sm:flex'/>
                     
                </div>
            </div>
        </a>
    </div>
  )
}

export default CategoryCard