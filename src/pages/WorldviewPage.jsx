import { Link } from "react-router-dom";
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import WorldViewBody from "../components/WorldViewBody";

function WorldviewPage() {
    return (
        <div className="relative">
            <Nav />
            
            <div className="content-container">
                <button className="btn">
                    <Link to="/world/flowershop">
                        <img src="/images/flowerShopIcon.png" alt="flowerShopIcon" />
                    </Link>
                </button>
            </div>
            <WorldViewBody />
            <Footer />
        </div>
    );
}

export default WorldviewPage;