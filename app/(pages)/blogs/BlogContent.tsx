import React from 'react';
import Blog from '@/app/components/Blogs/Blog';

const BlogContent = () => {
  return (
    <div className="container max-w-[1280px] mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        
          <Blog
            title={`Learn Web Development In The Easiest Way`}
            image={"https://images.pexels.com/photos/7973205/pexels-photo-7973205.jpeg?auto=compress&cs=tinysrgb&w=600"}
            excerpt={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, praesentium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, praesentium.`}
            link={`/`}
          />  
          <Blog
            title={`Learn Web Development In The Easiest Way`}
            image={"https://images.pexels.com/photos/7973205/pexels-photo-7973205.jpeg?auto=compress&cs=tinysrgb&w=600"}
            excerpt={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, praesentium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, praesentium.`}
            link={`/`}
          />
  
        </div>
      
     </div>
  );
};

export default BlogContent;
