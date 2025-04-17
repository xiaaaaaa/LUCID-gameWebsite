import Nav from "../components/Nav"
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";
import Npc1 from "../components/Npc1";
import Npc2 from "../components/Npc2";

function HomePage() {
    return (
        <div className="relative">
            <Nav />
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