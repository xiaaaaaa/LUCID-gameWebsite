import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"; 
import { Sun, Moon } from "lucide-react";
import { selectLightMode, setColorMode } from "../redux/colorSlice";

export default function SetColorMode() {
   const lightMode = useSelector(selectLightMode);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setColorMode(false));
      document.documentElement.setAttribute('data-theme', 'dark');
   }, []); 

   const toggleColor = () => {
      dispatch(setColorMode(!lightMode))
      if (lightMode) {
         document.documentElement.setAttribute('data-theme', 'dark');
       } else {
         document.documentElement.setAttribute('data-theme', 'light');
       }
   }

   return (
      <div onClick={toggleColor} className="cursor-pointer" >
         {
            lightMode ? (
               <Sun className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform bg-white rounded-full border-4 border-white" color="black"/>
            ) : (
               <Moon className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform bg-black rounded-full border-3 border-black" /> 
            )
         }
      </div>
   );
}
