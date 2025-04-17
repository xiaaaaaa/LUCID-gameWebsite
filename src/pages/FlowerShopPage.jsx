import { Link } from "react-router-dom";
import products from "../json/flowerProduct.json";
import FlowerList from "../components/FlowerList";
// import FlowerItems from "../components/FlowerItems";

function FlowerShopPage() {
    return (
        <div className="w-screen h-screen flex items-center justify-center flowerShop-bg">
            <div className="relative w-fill h-fill m-auto">
                <div className="z-0">
                    <img src="/images/flowerShop-bg.png" alt="out flowerSop" className="object-cover md:h-screen md:w-fill" />
                </div>
                <div className="absolute bottom-38 sm:bottom-46 md:bottom-57 lg:bottom-64 left-8">
                    <FlowerList products={products} />
                </div>
                <button className="absolute top-0 left-0">
                    <Link to="/world">
                        <img src="/images/flowerShop-Outdoor.png" alt="out flowerSop" className="w-[180px] sm:w-[300px] md:w-[400px] object-cover" />
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default FlowerShopPage;