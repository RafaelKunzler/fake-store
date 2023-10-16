import BackToTopButton from '@/components/BackToTopButton'
import BlogBanner from '@/components/BlogBanner'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <BlogBanner
          text = "Blog"
        />


      <BackToTopButton />
    </div>
  )
}

export default Blog