import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/blogs/Blogs";
import BookMarks from "./components/blogs/BookMarks";

function App() {
   return (
      <div className="mx-48">
         <Header></Header>
         <div className="grid grid-cols-5 gap-5 ">
            <div className="col-span-4">
               <Blogs></Blogs>
            </div>
            <div>
               <BookMarks></BookMarks>
            </div>
         </div>
      </div>
   );
}

export default App;
