import logo from "../../../public/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign.jpg";

const Header = () => {
   return (
      <div>
         <div className="flex justify-between md:justify-between items-center ">
            <div>
               <h1 className="text-xl font-bold">knowledge-cafe</h1>
            </div>
            <div>
               <ul className="flex gap-4">
                  <li>
                     <button>Home</button>
                  </li>
                  <li>
                     <button>About</button>
                  </li>
                  <li>
                     <button>Blogs</button>
                  </li>
               </ul>
            </div>
            <div>
               <img className="w-12 rounded-full" src={logo} alt="" />
            </div>
         </div>
         <hr />
      </div>
   );
};

export default Header;
