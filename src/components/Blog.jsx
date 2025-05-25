import React from 'react'
import BlogCard from './BlogCard'



const Blog = () => {
  return (
    <>
       <div className="container Blog">
            <h2 className='text-4xl text-green-900 text-center font-bold'>Interesting blog to read</h2>
           <div className="Blog-all-cards flex gap-20">
               <BlogCard  h3="More productive with an atmosphere of greenery" p="An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress..."/>
               <BlogCard  h3="The benefits of plants in your room" p="Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being...."/>
               <BlogCard  h3="Hobbyist plants in the house" p="Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they...."/>
           </div>
      </div>
    </>
  )
}

export default Blog
