import { useState, useEffect } from 'react';
import Nav from "../components/Nav"
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";
import Npc1 from "../components/Npc1";
import Npc2 from "../components/Npc2";

function HomePage() {
    const [showElements, setShowElements] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // 當滾動超過視窗高度的 10% 時顯示元素
            if (window.scrollY > window.innerHeight * 0.1) {
                setShowElements(true);
            } else {
                setShowElements(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            <div className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${showElements ? 'opacity-100' : 'opacity-0'}`}>
                <Nav />
            </div>

            <div className={`transition-opacity duration-300 ${showElements ? 'opacity-100' : 'opacity-0'}`}>
                <div className="hidden md:flex">
                    <div className="absolute top-300 left-3 z-10">
                        <Npc1 />
                    </div>
                    <div className="absolute top-450 right-3 z-10">
                        <Npc2 />
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="absolute top-100 left-10 z-10">
                        <Npc1 />
                    </div>
                    <div className="absolute top-350 right-8 z-10">
                        <Npc2 />
                    </div>
                </div>
            </div>
            <div className="h-screen w-full content-center bg-[#2D2D2D]">
                <video 
                    className="hero w-screen object-cover object-center" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="/videos/main-video.mp4" type="video/mp4" />
                </video>
            </div>
            {/* <video 
                className="w-full h-screen object-cover object-center fixed top-0 left-0" 
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src="/videos/main-video.mp4" type="video/mp4" />
            </video> */}

            <div className="content-container relative z-0">
                <HomeBody />
            </div>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;