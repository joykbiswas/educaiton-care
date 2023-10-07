
import { NavLink } from "react-router-dom";

const Navbar = () => {
    
  return (

    <div>

<div className="navbar bg-base-100 justify-between my-5">
  <div className="navbar-start ">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <div>
        <div className="flex flex-col gap-6">
        <ul>
          <li>
          <NavLink 
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 text-xl underline" : "text-xl"
          }
        >
          Home
        </NavLink>
          </li>
          <li>
          <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 text-xl  underline" : "text-xl"
          }
        >
          Donation
        </NavLink>
          </li>
          <li>
          <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 text-xl underline" : "text-xl"
          }
        >
          Statistics
        </NavLink>
          </li>
        </ul>
        
        
      </div>
        </div>
      </ul>
    </div>
    <div className=" w-20">
     <img src="https://i.ibb.co/2YNVVsP/edu-logo.jpg" alt="" />
      </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1"> 
      <div>
      <div className=" gap-6">
        <ul className="flex gap-8">
          <li>
          <NavLink
          to="/" 
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 text-xl underline" : "text-xl "
          }
        >
          Home
        </NavLink>
          </li>
          <li>
          <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 text-xl underline" : " text-xl "
          }
        >
          Donation
        </NavLink>
          </li>
         
        </ul>
        
       
      </div>
      </div>
    </ul>
  </div>
  <div className="navbar-end">
      <NavLink className="btn btn-sm" to="/login">Login</NavLink>
    </div>
  
</div>

    </div>


    
  );
};

export default Navbar;







// import { Link } from "react-router-dom";



// const Navbar = () => {
//     const Links=<>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/career">Career</Link></li>
//     </>
//     return (
//         <div>
//              <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {Links}
//             </ul>
//           </div>
//           <h2 className="text-3xl">Education Care</h2>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             {Links}
//           </ul>
//         </div>

//         <div className="navbar-end">
//         <Link className="btn btn-sm" to="/login">Login</Link>
//         </div>
       
//       </div>
//         </div>
//     );
// };

// export default Navbar;