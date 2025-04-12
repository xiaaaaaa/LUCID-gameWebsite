import { Link } from "react-router-dom";

function FlowerShopPage() {
    return (
        <div >
            <div>
                <button className="btn">
                    <img src="/images/flower1.png" alt="flowerShopIcon" />
                </button>
                <button className="btn">
                    <img src="/images/flower2.png" alt="flowerShopIcon" />
                </button>
            </div>


            <button className="btn">
            <Link to="/world">離開花店</Link>
            </button>
        </div>
    );
}

export default FlowerShopPage;