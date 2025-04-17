import { useState } from "react";

import Npc1 from "../components/Npc1";
import Npc2 from "../components/Npc2";

function WorldViewBody() {
    const thumbnails = [
        {
            src: "/images/lucidLogo.png",
            big: "/images/lucidCharacter.png",
            title: "路西安",
            desc: "喜歡攝影，時常抱著相機到處拍。個性直率，似乎沒有什麼朋友。",
        },
        {
            src: "/images/gameMech2.png",
            big: "/images/gameMech2.png",
            title: "【黑白彩色】",
            desc: "黑白彩色藏有細節，玩家需觀察出其中的規律。",
        },
    ];

    const [current, setCurrent] = useState(0);
    return (
        <div className="home-body">
            {/*Logo*/}
            <div className="flex justify-center items-center relative z-50">
                <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
            </div>
            {/* <div className="flex flex-row justify-center items-center relative z-50 mt-10">
                <div className="flex justify-between w-[390px]">
                    <Npc1 />
                    <Npc2 />
                </div>
            </div> */}

            {/*Main Content*/}
            <div className="mainContent flex justify-center items-center relative z-1">
                <div className="grid grid-cols-1 gap-6content w-[1062px]">
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="line mt-[10%] mb-[10%] border-1 w-[80%]" />
                    </div>
                    {/*Map Introduction*/}
                    <div className="flex justify-center items-center relative z-49">
                        <div className="homeContent flex justify-center items-center flex-col sm:flex-row w-[80%] h-[90%]">
                            {/*For Moblie to display*/}
                            <div className="flex flex-row justify-center">
                                <h2 className="sm:hidden hcontent-title flex ">地圖介紹</h2>
                            </div>
                            <div className="sm:hidden flex flex-col justify-center items-center">
                                <div className=" border-1 w-[70vw] mb-[10%] mt-[10%] sm:mb-0 line" />
                            </div>
                            {/*Modal*/}
                            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>
                                <div className="flex justify-center items-center">
                                    <img className="flex w-[90%] h-[90%] sm:w-[305px] mb-[20px] sm:mb-0 frame" src="/images/gameMap.png" alt="地圖" />
                                </div>
                            </button>
                            <dialog id="my_modal_4" className="modal flex justify-center items-center bg-transparent">
                                <div className="flex flex-row modal-box w-11/12 max-w-5xl bg-transparent">
                                    <div className="flex justify-center items-center">
                                        <img className="flex w-[60%] mb-[20px] sm:mb-0 min-w-[150px] border-3 frame mr-10" src="/images/shop_Map.png" alt="地圖" />
                                    </div>
                                    <div className="flex flex-col justify-center items-center bg-[#30B1BD] border-3 border-white w-[80vw]">
                                        <div className="flex flex-row justify-between items-center w-[90%]">
                                            <h3 className="font-bold text-lg  py-5">商店街</h3>
                                            <div className="modal-action flex justify-center items-center">
                                                <form method="dialog">
                                                    {/* if there is a button, it will close the modal */}
                                                    <button className="btn bg-transparent border-none">X</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center bg-white text-black w-[90%] mb-5">
                                            <div className="flex justify-center items-center">
                                                <img className="flex w-[160px] sm:w-[] mb-[20px] sm:mb-0  frame" src="/images/flowerShop_Map.png" alt="地圖" />
                                            </div>
                                            <h3 className="font-bold text-lg text-[#30B1BD]">花店</h3>
                                            <p className="py-4 w-[200px]">販售了各種各樣的花草植物，紀念日準備禮物的首選，時不時會從島外進貨島上沒有的品種。</p>
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
                        <div className="mt-[10%] mb-[10%] border-1 w-[80%] line" />
                    </div>

                    {/*Game character*/}
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex md:justify-start md:items-start md:mb-10 md:mr-[62%]">
                            <h2 className="hcontent-title flex md:text-left">角色介紹</h2>
                        </div>
                        <div className="homeContent flex flex-col justify-around md:justify-center items-center w-[80%]">

                            {/*For Moblie to display */}
                            <div className="md:hidden flex flex-col justify-center items-center">
                                <div className="mt-[10%] mb-[10%] border-1 w-[70vw] line" />
                            </div>
                            <div className="flex flex-row justify-between items-center md:w-[90%] md:h-[374px] md:border-5 textframe -mt-2">
                                <div className="flex flex-col justify-center items-center md:items-start md:ml-10">
                                    <div className="md:hidden flex flex-col justify-center items-start md:relative">
                                        <p className="md:hidden flex font-semibold color mb-[5px]">＜Lucian’s File＞</p>
                                        <img
                                            className="w-[370px] border-2 frame"
                                            src={thumbnails[current].big}
                                            alt="解謎機制大圖"
                                        />
                                    </div>
                                    {/*For Moblie to display */}
                                    <div className="flex flex-row justify-around md:justify-start w-[60%] md:w-[250px] my-5 md:mb-10">
                                        {thumbnails.map((item, index) => (
                                            <img
                                                key={index}
                                                src={item.src}
                                                alt="縮圖"
                                                onClick={() => setCurrent(index)}
                                                className={`w-[40%] cursor-pointer md:mr-5 border-4 ${current === index ? "frame" : "textframe"
                                                    } transition`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex flex-col justify-center md:justify-start md:items-start w-[100%] border-3 md:border-5 textframe">
                                        <p className="hcontent-sectitle mx-3 mt-3">{thumbnails[current].title}</p>
                                        <p className="md:w-[227px] m-4 text-left">{thumbnails[current].desc}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex justify-center items-center md:relative">
                                    <img
                                        className="w-[370px] border-2 frame md:relative md:ml-30 md:mb-30"
                                        src={thumbnails[current].big}
                                        alt="解謎機制大圖"
                                    />
                                    <p className="hidden md:flex font-semibold color absolute pt-80 pl-80">＜Lucian’s File＞</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-[20%]">
                        <div className="mt-[10%] border-1 w-[80%] line" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldViewBody;