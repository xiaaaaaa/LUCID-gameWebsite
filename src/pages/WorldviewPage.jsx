import { Link } from "react-router-dom";
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import WorldViewBody from "../components/WorldViewBody";

function WorldviewPage() {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300">
                <Nav />
            </div>
            {/*<div className="content-container">
                <button className="btn">
                    <Link to="/world/flowershop">
                        <img src="/images/flowerShopIcon.png" alt="flowerShopIcon" />
                    </Link>
                </button>
            </div>*/}
            <div className="mt-20">
                <WorldViewBody />
            </div>
            <Footer />
        </div>
    );
}

export default WorldviewPage;