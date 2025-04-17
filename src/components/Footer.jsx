import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { selectLightMode } from "../redux/colorSlice";

const Footer = forwardRef((props, ref) => {
    const lightMode = useSelector(selectLightMode);
    const [isOpen, setIsOpen] = useState(false);
    const navBarContent = [
        { to: "/", label: "遊戲介紹" },
        { to: "/world", label: "世界觀" },
        { to: "/gallery", label: "藝廊" },
        { to: "/fanclub", label: "粉絲俱樂部" },
        { to: "/team", label: "製作團隊" },
    ]
    const NavBarContent = () => (
        <div className="flex flex-col sm:flex-row justify-between space-x-6">
            {navBarContent.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `mt-5 text-white  transition-all duration-500 ease-in-out 
                        ${isActive ? "opacity-100" : "opacity-60"} 
                        hover:opacity-100`
                    }
                >
                    {label}
                </NavLink>
            ))}
        </div>
    );
    return (
        <footer ref={ref} className="footer flex flex-col justify-center items-center bg-black text-base-content px-10 py-15 w-full">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:w-[85vw]">
                <div className="flex justify-center items-center">
                    <NavLink to="/"><img className="w-[140px] max-w-[140px] min-w-[120px] mb-10 sm:mb-0" src="/images/Mainlogo.png" alt="Logo" /></NavLink>
                </div>
                <div className="flex flex-row sm:flex-col justify-end items-end">
                    <div className="grid grid-flow-col gap-4">
                        <NavLink to="/"><img className="w-[70%] max-w-[30px] min-w-[30px]" src="/images/facebook.png" alt="facebook" /></NavLink>
                        <NavLink to="/"><img className="w-[70%] max-w-[30px] min-w-[30px]" src="/images/instagram.png" alt="instagram" /></NavLink>
                        {lightMode===true ? (
                             <NavLink to="/"><img className="w-[70%] max-w-[30px] min-w-[30px]" src="/images/twitter-light.png" alt="X" /></NavLink>
                        ):(
                            <NavLink to="/"><img className="w-[70%] max-w-[30px] min-w-[30px]" src="/images/twitter.png" alt="X" /></NavLink>
                        )}
                    </div>
                    <div className="hidden sm:flex justify-end">
                        <div className="flex flex-row sm:flex-col justify-end items-end sm:w-[400px]">
                            <ul className="">
                                <NavBarContent />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="border-[0.5px] w-[85vw] border-[#FFFFFF] rounded-full" />
            </div>
            <div className="-my-3 -mb-8">
                <p className="font-light">© LUCID 2025, Jiabun NO.1 Inc.</p>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';
export default Footer;