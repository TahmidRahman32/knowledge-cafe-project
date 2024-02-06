import logo from '../../../public/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign.jpg';

const Header = () => {
   return (
      <div>
         <div className="flex justify-between items-center my-4">
            <div>
               <h1 className="text-xl font-bold">knowledge-cafe</h1>
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