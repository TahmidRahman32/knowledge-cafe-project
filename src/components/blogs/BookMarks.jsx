import BookMark from "./BookMark";

const BookMarks = ({ bookMarks, readingTime }) => {
   // console.log(bookMarks);
   return (
      <div className="bg-slate-200 py-2 px-4 my-4 rounded-lg">
         <h3 className=" text-[14px] text-center bg-gray-700 my-4 rounded-lg py-2">Spent time on read : {readingTime} min</h3>
         <h1 className="text-center text-xl bg-gray-700 my-4 rounded-lg py-2">bookMarks: {bookMarks.length}</h1>
         {bookMarks.map((bookMark,idx) => (
            <BookMark key={idx} bookMark={bookMark}></BookMark>
         ))}
      </div>
   );
};

export default BookMarks;
