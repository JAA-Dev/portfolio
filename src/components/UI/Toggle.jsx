// import React from "react";
// import MoonLogo from "../assets/logos/Angled-Moon.png";

// export const Toggle = () => {
//   return (
//     <button
//       // onClick={toggleDarkMode}
//       className="fixed w-15 h-15 bottom-12 right-6 xl:bottom-12 xl:right-16 bg-[#233831] dark:bg-[#fafafa] flex items-center
//            justify-center  rounded-full shadow-2xl cursor-pointer hover:bg-amber-500  z-50"
//     >
//       <img
//         src={MoonLogo}
//         alt=""
//         className="w-5 h-5 filter invert dark:filter-none  dark:invert-100"
//       />
//     </button>
//   );
// };

// export default Toggle;


import React from "react";
import MoonLogo from "../assets/logos/Angled-Moon.png";
import SunLogo from "../assets/logos/Sun.png";

export const Toggle = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed w-15 h-15 bottom-12 right-6 xl:bottom-12 xl:right-14 bg-[#233831] dark:bg-[#fafafa] flex items-center
         justify-center rounded-full shadow-2xl cursor-pointer hover:bg-amber-500 z-50"
    >
      <img
        src={isDarkMode ? SunLogo : MoonLogo}
        alt=""
        className="w-5 h-5 filter invert  dark:filter-none dark:invert-100"
      />
    </button>
  );
};

export default Toggle;
