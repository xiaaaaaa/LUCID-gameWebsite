import { Link } from "react-router-dom";
import Nav from "../components/Nav"

function WorldviewPage() {
    return (
        <div>
            <Nav />
            <button className="btn">
                <Link to="/world/flowershop">
                    <img src="/images/flowerShopIcon.png" alt="flowerShopIcon" />
                </Link>
            </button>
            
        </div>
    );
}

export default WorldviewPage;