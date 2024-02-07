const BookMark = ({ bookMark}) => {
   const { title } = bookMark;
   return (
          <div>
            
            <div className="bg-slate-500 py-3 px-3 rounded my-3">
         <h3>{title}</h3>
      </div>
          </div>
      
   );
};

export default BookMark;
