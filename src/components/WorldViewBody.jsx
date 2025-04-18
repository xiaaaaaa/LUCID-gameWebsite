import { useState } from "react";
import { Link } from "react-router-dom";
import CameraLine from "./CameraLine";

function WorldViewBody() {
    const [current, setCurrent] = useState(0);
    const [thumbIndex, setThumbIndex] = useState(0);
    const showCount = 5;

    const images = [
        "/images/lucidLogo.png",
        "/images/npc-lucid.png",
        "/images/npc-police.png",
        "/images/lucidLogo.png",
        "/images/npc-lucid.png",
        "/images/npc-police.png",
    ];
    const next = () => {
        if (thumbIndex + showCount < images.length) {
            setThumbIndex(thumbIndex + 1);
        }
    };

    const prev = () => {
        if (thumbIndex > 0) {
            setThumbIndex(thumbIndex - 1);
        }
    };
    return (
        <div className="home-body">
            {/*Logo*/}
            <div className="flex justify-center items-center mt-25 mb-5 md:relative z-50">
                <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
            </div>
            <div className="flex flex-row justify-center md:-mt-30 md:relative z-0">
                {/*Main Content*/}
                <div className="mainContent flex justify-center items-center md:w-[80%]">
                    <CameraLine />
                    <div className="grid grid-cols-1 gap-6content xl:w-[1062px]">
                        <div className="flex flex-col justify-center items-center mt-[10%]">
                            <div className="line mt-[10%] mb-[10%] border-1 w-[60vw]" />
                        </div>
                        {/*Map Introduction*/}
                        <div className="flex justify-center items-center relative z-49">
                            <div className="homeContent flex justify-center items-center flex-col md:flex-row w-[100%] h-[100%]">
                                {/*For Moblie to display*/}
                                <div className="flex flex-row justify-center">
                                    <h2 className="sm:hidden hcontent-title flex ">地圖介紹</h2>
                                </div>
                                <div className="sm:hidden flex flex-col justify-center items-center">
                                    <div className=" border-1 w-[60vw] mb-[10%] mt-[10%] md:mb-0 line" />
                                </div>
                                {/*Map Intro*/}
                                <button className="btn h-[100px] md:h-0 bg-transparent border-0 my-10 md:my-0 cursor-pointer shadow-none" onClick={() => document.getElementById('my_modal_4').showModal()}>
                                    <div className="flex justify-center items-center">
                                        <img className="flex w-[370px] md:h-[90%] md:w-[305px] mb-5 sm:mb-0 frame" src="/images/gameMap.png" alt="地圖" />
                                    </div>
                                </button>
                                {/*Modal for Map*/}
                                <dialog id="my_modal_4" className="modal flex justify-center items-center bg-transparent shadow-none">
                                    <div className="flex flex-col md:flex-row modal-box w-11/12 max-w-5xl bg-transparent">
                                        {/*Left picture*/}
                                        <div className="flex justify-center items-center md:-ml-27">
                                            <img className="flex md:w-[60%] mb-[20px] sm:mb-0 min-w-[150px] border-3 frame md:mr-10" src="/images/shop_Map.png" alt="地圖" />
                                        </div>
                                        {/*Right Intro*/}
                                        <div className="flex flex-col  w-[80vw] md:-ml-5">
                                            {/*Button to FlowerShop*/}
                                            <button className="w-[50px]">
                                                <Link to="/world/flowershop">
                                                    <img src="/images/flowerShopIcon.png" alt="flowerShopIcon" />
                                                </Link>
                                            </button>
                                            {/*Right content*/}
                                            <div className="flex flex-col justify-center items-center mobile-nav border-3 border-white sm:-ml-15">
                                                <div className="flex flex-row justify-between items-center w-[90%]">
                                                    <h3 className="font-bold text-lg  py-5">商店街</h3>
                                                    <div className="modal-action flex justify-center items-center">
                                                        <form method="dialog">
                                                            <button className="btn bg-transparent border-none shadow-none pb-5">X</button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center items-start bg-white text-black w-[90%] mb-5 sm:pl-13 pl-5 ">
                                                    <div className="flex justify-center items-center sm:ml-16 my-5">
                                                        <img className="flex w-[70px] sm:w-[130px] ml-20 sm:ml-0 mb-[20px] sm:mb-0  frame" src="/images/flowerShop_Map.png" alt="地圖" />
                                                    </div>
                                                    <h3 className="font-bold text-lg color text-left">花店</h3>
                                                    <p className="py-4 md:w-[20vw] text-left">販售了各種各樣的花草植物，紀念日準備禮物的首選，時不時會從島外進貨島上沒有的品種。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </dialog>
                                <div className="flex flex-col justify-center sm:ml-10">
                                    <h2 className="hidden hcontent-title sm:flex text-left">地圖介紹</h2>
                                    <p className="hcontent-sectitle mb-[1%]]">【小島】</p>
                                    <p className="sm:max-w-[375px] sm:mb-0 text-left">四面環海的小島，由主要中央廣場連接著不同區塊。 島上人數不多、科技程度不算發達，有著生活樸實食衣住行多自給自足的一群住民。</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mt-[10%] mb-[10%] border-1 w-[60vw] line" />
                        </div>

                        {/*Game Character*/}
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex md:justify-start md:items-start md:mb-10 md:mr-[62%]">
                                <h2 className="hcontent-title flex md:text-left">人物設定</h2>
                            </div>
                            <div className="homeContent flex flex-col justify-around md:justify-center items-center">

                                <div className="md:hidden flex flex-col justify-center items-center">
                                    <div className="mt-[10%] mb-[10%] border-1 w-[60vw] line" />
                                </div>
                                <div className="flex flex-row justify-between items-center md:w-[90%] md:h-[374px] md:border-5 textframe -mt-2">
                                    <div className="flex flex-col justify-center items-center md:items-start md:ml-10">
                                        <div className="md:hidden flex flex-col justify-center items-start md:relative">
                                            <p className="md:hidden flex font-semibold color mb-[5px]">＜Lucian’s File＞</p>

                                        </div>
                                        <div className="flex flex-row sm:flex-col">
                                            <div className="flex flex-col justify-center md:justify-start md:items-start w-[100%] mb-5">
                                                <p className="text-bold text-[30px] ">路西安</p>
                                            </div>
                                            <div className="flex flex-row justify-around md:justify-start w-[60%] md:w-[250px] mb-5">
                                                <img
                                                    src={images[current]}
                                                    className="w-[60%] md:w-[40%] object-cover rounded shadow-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:hidden flex relative">
                                            <img
                                                src={"/images/lucidCharacter.png"}
                                                className="w-[370px] border-2 frame md:relative md:ml-30 md:mb-30"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center md:justify-start md:items-start w-[100%] border-0 md:border-5 textframe">
                                            <p className="md:w-[227px] m-4 text-left">喜歡攝影，時常抱著相機到處拍。個性直率，似乎沒有什麼朋友。</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex justify-center items-center md:relative">
                                        <div className="relative">
                                            <img
                                                src={"/images/lucidCharacter.png"}
                                                className="w-[370px] border-2 sm:border-4 frame md:relative md:ml-10 md:mb-40"
                                            />
                                        </div>
                                        <p className="hidden md:flex font-semibold color absolute pt-80 pl-40">＜Lucian’s File＞</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*下方輪播小圖*/}
                        <div className="sm:max-w-xl sm:mx-auto mb-10">
                            <div className="flex justify-center items-center mt-4 space-x-2">
                                <button
                                    onClick={prev}
                                    className="btn btn-sm color bg-transparent border-none shadow-none"
                                >
                                    ◀
                                </button>
                                {images.slice(thumbIndex, thumbIndex + showCount).map((img, index) => {
                                    const realIndex = thumbIndex + index;
                                    return (
                                        <img
                                            key={realIndex}
                                            src={img}
                                            onClick={() => setCurrent(realIndex)}
                                            className={`w-10 h-10 sm:w-20 sm:h-20 object-cover cursor-pointer border-2 md:border-4  ${current === realIndex
                                                ? "color"
                                                : "text-frame"
                                                }`}
                                        />
                                    );
                                })}
                                <button
                                    onClick={next}
                                    className="btn btn-sm  bg-transparent border-none shadow-none"
                                >
                                    ▶
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center mb-[70%] md:mb-[20%]">
                            <div className="mt-[10%] border-1 w-[60vw] line" />
                        </div>
                    </div>
                    <CameraLine />
                </div>

            </div>
        </div>
    );
}

export default WorldViewBody;