import { Link } from "react-router-dom";
import products from "../json/flowerProduct.json";
import FlowerList from "../components/FlowerList";

function FlowerShopPage() {
    return (
        <div className="w-screen h-screen flex items-center justify-center flowerShop-bg">
            <div className="relative w-fill h-fill m-auto">
                <div className="hidden sm:grid">
                    <div className="z-0">
                        {/* <img src="/images/flowerShop-bg.png" alt="out flowerSop" className="object-cover h-fill w-screen md:h-screen md:w-fill" /> */}
                        <img src="/images/flowerShop-bg.png" alt="out flowerSop" className="object-cover h-auto w-screen  lg:h-screen lg:w-auto lg:mx-auto" />
                    </div>
                </div>
                <div className="sm:hidden">
                    <div className="z-0">
                        <img src="/images/flowerShop-bg-mobile.png" alt="out flowerSop" className="object-cover sm:h-screen sm:w-fill" />
                    </div>
                </div>
                
                <div className="absolute bottom-40 sm:bottom-46 md:bottom-57 lg:bottom-60 xl:bottom-60 left-2 sm:left-8">
                    <FlowerList products={products} />
                </div>
                <button className="absolute top-0 left-0">
                    <Link to="/world">
                        <img src="/images/flowerShop-Outdoor.png" alt="out flowerSop" className="w-[240px] sm:w-[300px] md:w-[400px] object-cover" />
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default FlowerShopPage;