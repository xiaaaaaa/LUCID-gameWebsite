import { Link } from "react-router-dom";
import Nav from "../components/Nav"
import Footer from "../components/Footer";

function WorldviewPage() {
    return (
        <div className="content">
            <Nav />
            <button className="btn">
                <Link to="/world/flowershop">
                    <img src="/images/flowerShopIcon.png" alt="flowerShopIcon" />
                </Link>
            </button>
            <Footer />
        </div>
    );
}

export default WorldviewPage;