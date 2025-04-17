import { Link } from "react-router-dom";
import { useState } from 'react';
import HamMenu from "./HamMenu";
import SetColorMode from "./SetColorMode";

function Nav() {
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
                <Link
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `my-3 sm:my-0 text-white text-lg transition-all duration-500 ease-in-out ${isActive ? "opacity-100" : "opacity-60"
                        } hover:opacity-100 hover:text-shadow-lg`
                    }
                >
                    {label}
                </Link>
            ))}
        </div>
    );
    return (
        <>
            {/* 桌面版導覽列 */}
            <div className="hidden sm:flex justify-between navbar bg-base-100">
                <div>
                    <Link to="/"><img className="h-[45px]" src="/images/lucidLogo.png" alt="home" /></Link>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <SetColorMode />
                    <ul className="menu menu-horizontal px-5 ">
                        <NavBarContent />
                    </ul>
                </div>
            </div>
            {/* 手機版 Drawer */}
            <div className="sm:hidden bg-base-100 mobile-nav">
                <div className="flex flex-row justify-between items-center h-16 mr-[70px]">
                    <Link to="/"><img className="h-[45px]" src="/images/lucidLogo.png" alt="home" /></Link>
                    <div className="flex flex-row items-center">
                        <div className="mr-[10%]">
                            <SetColorMode />
                        </div>
                        <HamMenu
                            id="ham-menu"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                            isOpen={isOpen}
                        />
                    </div>
                </div>

                {/* dropdown menu，從 HamMenu 下方展開 */}
                {isOpen && (
                    <div className="absolute drop left-0 right-0 text-white p-4 z-50">
                        <NavBarContent />
                    </div>
                )}
            </div>
        </>
    );
}

export default Nav;