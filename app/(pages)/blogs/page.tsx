import React from 'react'

import TopNav from '@/app/components/TopNav'
import BottomNav from '@/app/components/BottomNav'
import UpperBlog from '@/app/components/Blogs/UpperBlog'
import Footer from '@/app/components/Footer'
import BlogContent from './BlogContent'

const BlogsPage = () => {
  return (
    <>



    <TopNav/>
    <BottomNav/>
    <UpperBlog/>
    
    <BlogContent/>
    <Footer/>
   


    </>
  )
}

export default BlogsPage