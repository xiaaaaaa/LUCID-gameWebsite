import flowerProducts from "../json/flowerProduct.json";

function GardenFlowers({ byWho, flowerName }) {
    // 找到對應的花朵產品
    const flower = flowerProducts.find(product => product.name === flowerName);
    // 使用找到的花朵封面圖，如果沒找到則使用預設圖片
    const flowerImage = flower ? flower.image : "/images/flower1.png";

    return (
        <li className="!bg-transparent !p-0">
            <div className="tooltip !bg-transparent" data-tip={`${flowerName}  ― by ${byWho}`}>
                <div className="!bg-transparent !p-0">
                    <img src={flowerImage} alt={flowerName} className="w-[50px] h-[50px]" />
                </div>
            </div>
        </li>
    );
}

export default GardenFlowers;