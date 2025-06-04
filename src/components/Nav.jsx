import { NavLink } from "react-router-dom";
import { useState, useRef } from 'react';
//import HamMenu from "./HamMenu";
import AnimatedHamMenu from "../motion/AnimatedHamMenu";
import SetColorMode from "./SetColorMode";
import { motion } from "framer-motion";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const navBarContent = [
        { to: "/", label: "遊戲介紹" },
        { to: "/world", label: "世界觀" },
        { to: "/gallery", label: "藝廊" },
        { to: "/fanclub", label: "粉絲俱樂部" },
        { to: "/team", label: "製作團隊" },
    ]
    const menuVariants = {
        open: {
            clipPath: "circle(1500px at calc(100% - 40px) 40px)",
            transition: {
                type: "spring",
                stiffness: 15,
                damping: 10,  
                duration: 1,  
                restDelta: 2
            }
        },
        closed: {
            clipPath: "circle(30px at calc(100% - 40px) 40px)",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 40
            }
        }
    };
    const NavBarContent = () => (
        <div className="flex flex-col sm:flex-row justify-between sm:space-x-6">
            {navBarContent.map(({ to, label }) => (
                // key 應該放在最外層元素
                <div className="-my-1 sm:my-1" key={to}>
                    <NavLink
                        to={to}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `my-3 sm:my-0 transition-all duration-500 ease-in-out ${
                                isActive ? "opacity-100" : "opacity-60"
                            } hover:opacity-100 hover:scale-115 inline-block`
                        }
                    >
                        {label}
                    </NavLink>
                </div>
            ))}
        </div>
    );
    return (
        <>
            {/* 桌面版導覽列 */}
            <div className="hidden sm:flex justify-between navbar bg-base-100">
                <div>
                    <NavLink to="/"><img className="h-[45px]" src="/images/lucidLogo.png" alt="home" /></NavLink>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <SetColorMode />
                    <ul className="menu menu-horizontal px-5 ">
                        <NavBarContent />
                    </ul>
                </div>
            </div>
            {/* 手機版 Drawer */}
            <div className="sm:hidden mobile-nav fixed top-0 w-screen z-50">
                 <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    ref={containerRef}
                >
                    <div className="flex flex-row justify-between items-center h-16 -mr-5">
                        <NavLink to="/">
                            <img className="h-[45px] pl-5" src="/images/lucidLogo.png" alt="home" />
                        </NavLink>
                        <div className="flex flex-row items-center pr-5">
                            <div className="mr-4">
                                <SetColorMode />
                            </div>
                            <AnimatedHamMenu
                                toggle={() => setIsOpen(!isOpen)}
                                isOpen={isOpen}
                            />
                        </div>
                    </div>

                    {/* dropdown menu */}
                    {isOpen && (<motion.div 
                        className="drop p-4 z-50 bg-base-100"
                        variants={menuVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                    >
                        <NavBarContent />
                    </motion.div>
                    )}
                </motion.nav>
            </div>
        </>
    );
}

export default Nav;