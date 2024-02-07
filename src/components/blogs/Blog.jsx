import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
const Blog = ({ blog, handleBookMarks, handleReadingTime }) => {
   // console.log(blog);
   const { cover, author, author_img, posted_date, title, hashtags, reading_time,id } = blog;

   return (
      <div className="">
         <div className="grid md:col-span-4 my-4 border rounded-lg">
            <img className=" w-full  rounded-lg" src={cover} alt="" />
            <div className="flex justify-between items-center">
               <div className="flex gap-3 my-4 ">
                  <img className="w-10 rounded-full ms-2 " src={author_img} alt="" />
                  <div>
                     <h5 className="font-bold">{author}</h5>
                     <p>{posted_date}</p>
                  </div>
               </div>
               <div>
                  <p onClick={() => handleBookMarks(blog)} className="flex items-center gap-1 mr-1 ">
                     <span className="text-xl">{reading_time}</span> min read <FaBookmark className="hover:text-red-600 transition-all" />
                  </p>
               </div>
            </div>
            <div className="ms-3">
               <h3 className="text-3xl font-bold">{title}</h3>
               <p className="text-blue-600 mb-8">
                  #<span>{hashtags?.[0]}</span> #<span>{hashtags?.[1]}</span> #<span>{hashtags?.[2]}</span>
               </p>
               <button onClick={() => handleReadingTime(id,reading_time)} className="text-purple-600 py-3 hover:text-blue-600 transition-all">
                  Reading Time
               </button>
            </div>
         </div>
      </div>
   );
};
Blog.prototype = {
   blog: PropTypes.object.isRequired,
   handleBookMarks: PropTypes.func,
};
export default Blog;
