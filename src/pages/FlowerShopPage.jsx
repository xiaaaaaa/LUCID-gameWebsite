import { Link } from "react-router-dom";
import products from "../json/flowerProduct.json";
import FlowerList from "../components/FlowerList";
// import FlowerItems from "../components/FlowerItems";

function FlowerShopPage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <FlowerList products={products} />

            <button className="btn">
                <Link to="/world">離開花店</Link>
            </button>
        </div>
    );
}

export default FlowerShopPage;