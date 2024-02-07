import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/blogs/Blogs";
import BookMarks from "./components/blogs/BookMarks";

function App() {
   const [bookMarks, setBookMarks] = useState([]);
   const [readingTime, setReadingTime] = useState(0);

   const handleBookMarks = (blog) => {
      const newBookMarks = [...bookMarks, blog];
      setBookMarks(newBookMarks);
   };
   const handleReadingTime = (id, time) => {
      const newReadingTime = readingTime + time;

      setReadingTime(newReadingTime);
      const remainingBookmark = bookMarks.filter(book => book.id !== id);
      setBookMarks(remainingBookmark);
   
   };
   return (
      <div className="md:mx-0 lg:mx-48">
         <Header></Header>
         <div className="grid md:grid-cols-5 gap-5 ">
            <div className="col-span-4">
               <Blogs handleBookMarks={handleBookMarks} handleReadingTime={handleReadingTime}></Blogs>
            </div>
            <div>
               <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
            </div>
         </div>
      </div>
   );
}

export default App;
