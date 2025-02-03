// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthenticated } = useSelector((state) => state.user);

//   return (
//     <nav className="flex items-center justify-between p-6 bg-gray-800 h-auto overflow-hidden">
      
//       {/* Logo */}
//       <div className="h-12 w-10  rounded-3xl">
//         <img src="src\assests\logo1.png" alt="logo" className="h-10 rounded-full bg-slate-50 p-1" />
//       </div>

//       {/* Links */}
//       <div className={`md:flex md:items-center w-full md:w-auto ${show ? 'block' : 'hidden'} md:block`}>
//         <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
//           <li>
//             <Link 
//               to="/"
//               className="text-gray-300 hover:text-white transition-colors"
//               onClick={() => setShow(!show)}
//             >
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link 
//               to="/jobs" 
//               className="text-gray-300 hover:text-white transition-colors"
//               onClick={() => setShow(!show)}
//             >
//               JOBS
//             </Link>
//           </li>
//           <li>
//             <Link 
//               to="/contact" 
//               className="text-gray-300 hover:text-white transition-colors"
//               onClick={() => setShow(!show)}
//             >
//               CONTACT
//             </Link>
//           </li>
//           {isAuthenticated ? (
//             <li>
//               <Link
//                 to="/dashboard"
//                 className="text-gray-300 hover:text-white transition-colors"
//                 onClick={() => setShow(!show)}
//               >
//                 DASHBOARD
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link
//                 to="/login"
//                 className="text-gray-300 hover:text-white transition-colors"
//                 onClick={() => setShow(!show)}
//               >
//                 LOGIN
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>

//       {/* Hamburger Icon */}
//       <GiHamburgerMenu
//         className="text-white text-3xl md:hidden cursor-pointer"
//         onClick={() => setShow(!show)}
//       />
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 bg-gray-800 h-auto overflow-hidden z-50">
      
      {/* Logo */}
      <div className="h-12 w-10 rounded-3xl">
        <img src="src/assests/logo1.png" alt="logo" className="h-10 rounded-full bg-slate-50 p-1" />
      </div>

      {/* Links */}
      <div className={`md:flex md:items-center w-full md:w-auto ${show ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <li>
            <Link 
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setShow(!show)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              to="/jobs" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setShow(!show)}
            >
              JOBS
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setShow(!show)}
            >
              CONTACT
            </Link>
          </li>
          {isAuthenticated ? (
            <li>
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setShow(!show)}
              >
                DASHBOARD
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setShow(!show)}
              >
                LOGIN
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <GiHamburgerMenu
        className="text-white text-3xl md:hidden cursor-pointer"
        onClick={() => setShow(!show)}
      />
    </nav>
  );
};

export default Navbar;
