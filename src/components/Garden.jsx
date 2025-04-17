import { useSelector } from "react-redux";
import { selectGetFlowerPeople } from "../redux/getFlowerSlice";
import GardenFlowers from "./GardenFlowers";

function Garden({ isStuck }) {
    const getFlowerList = useSelector(selectGetFlowerPeople);

    return (
        <>
            {/* 桌面版 */}
            <div className="hidden sm:flex">
                {/* 當 garden 接觸到 footer 時，isStuck 會改變。isStuck=false fixed 固定在螢幕左下；isStuck=true absolute 固定在父容器上方 96px */}
                <div className={`${isStuck ? 'absolute bottom-70' : 'fixed bottom-6'} left-12 size-fit z-50 transition-all duration-300`}>
                    {getFlowerList.length > 0 ? (
                        <>
                            <ul className="menu menu-horizontal bg-transparent rounded-box -mb-1 ">
                                {getFlowerList.map((item, index) => (
                                    <li key={index}>
                                        <GardenFlowers byWho={item.name} flowerName={item.flower} />
                                    </li>
                                ))}
                            </ul>
                            <img className="w-[180px] h-auto object-contain" src="/images/garden.png" alt="flowerShopIcon" />
                        </>
                    ) : (
                        <div className="tooltip" data-tip="這裡好像可以插花">
                            <img className="w-[180px] h-auto object-contain" src="/images/garden.png" alt="flowerShopIcon" />
                        </div>
                    )}
                </div>
            </div>

            {/* 手機版 */}
            <div className="sm:hidden">
                <div className="fixed bottom-6 w-full flex justify-center z-50">
                    {/* 當 garden 接觸到 footer 時，isStuck 會改變。isStuck=false fixed 固定在螢幕左下；isStuck=true absolute 固定在父容器上方 96px */}
                    <div className={`${isStuck ? 'absolute bottom-75' : 'fixed bottom-6'} size-fit transition-all duration-300`}>
                        {getFlowerList.length > 0 ? (
                            <>
                                <ul className="menu menu-horizontal bg-transparent rounded-box -mb-1 ">
                                    {getFlowerList.map((item, index) => (
                                        <li key={index}>
                                            <GardenFlowers byWho={item.name} flowerName={item.flower} />
                                        </li>
                                    ))}
                                </ul>
                                <img className="w-[180px] h-auto object-contain" src="/images/garden.png" alt="flowerShopIcon" />
                            </>
                        ) : (
                            <div className="tooltip" data-tip="這裡好像可以插花">
                                <img className="w-[180px] h-auto object-contain" src="/images/garden.png" alt="flowerShopIcon" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Garden;
