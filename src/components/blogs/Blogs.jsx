import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({ handleBookMarks, handleReadingTime }) => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch("data.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);
   return (
      <div>
         {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} handleBookMarks={handleBookMarks} handleReadingTime={handleReadingTime}></Blog>
         ))}
      </div>
   );
};

export default Blogs;
