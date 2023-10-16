/* eslint-disable react/prop-types */

const BlogBanner = (props) => {
  return (
    <div className='w-full bg-blog-banner bg-cover p-20 text-center'>
        <h1 className='font-bold text-5xl text-white'>
            {props.text}
        </h1>
    </div>
  )
}

export default BlogBanner