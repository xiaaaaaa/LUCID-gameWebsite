import { useState } from "react";

import Npc1 from "../components/Npc1";
import Npc2 from "../components/Npc2";

function HomeBody() {
    const thumbnails = [
        {
            src: "/images/gameMech1.png",
            big: "/images/gameMechanic1.png",
            title: "【雙層遮罩】",
            desc: "在特殊遮罩區塊中可以看見隱藏於現實畫面之下的資訊。",
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
            {/*Main Visual and Logo*/}
            <div className="flex justify-center items-center relative z-50">
                <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
            </div>
            <div className="flex justify-center items-center -mt-[max(10vh,10px)] relative z-49 sm:-mt-28">
                <img className="hero w-[1125px] h-full object-cover" src="/images/MainVisual.png" alt="MainVisual" />
            </div>

            {/*Main Content*/}
            {/* <div className="flex flex-row justify-center items-center relative z-50 mt-10">
                <div className="flex justify-between w-[390px]">
                    <Npc1 />
                    <Npc2 />
                </div>
            </div> */}
            <div className="flex flex-row justify-center items-center">
                <img className="w-[95%] lg:w-[1015px] h-[1800px] mt-[5%] relative z-48" src="/images/pictureHole.png" alt="裝飾" />
            </div>
            <div className="mainContent flex justify-center items-center -mt-[1900px] lg:mt-[-1900px] relative z-1">
                <div className="grid grid-cols-1 gap-6content w-[1062px] bg-[#141414] ">
                    <div className="flex flex-col justify-center items-center mt-[10%]">
                        <img className="w-[150px]" src="/images/cameraIcon.png" alt="相機" />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="mt-[10%] mb-[10%] border-1 w-[80%] border-[#30B1BD] rounded-full" />
                    </div>
                    {/*Game Introduction*/}
                    <div className="flex justify-center items-center">
                        <div className="homeContent flex justify-center items-center flex-col sm:flex-row w-[80%] h-[90%]">
                            {/*For Moblie to display*/}
                            <div className="flex flex-row justify-center">
                                <h2 className="sm:hidden hcontent-title flex ">遊戲介紹</h2>
                            </div>
                            <div className="sm:hidden flex flex-col justify-center items-center">
                                <div className=" border-1 w-[70vw] mb-[10%] mt-[10%] sm:mb-0 border-[#30B1BD] rounded-full" />
                            </div>
                            {/*Normal*/}
                            <div className="flex justify-center items-center">
                                <img className="flex w-[90%] h-[90%] sm:w-[305px] mb-[20px] sm:mb-0" src="/images/gameStory.jpg" alt="簡介" />
                            </div>
                            <div className="flex flex-col justify-center sm:ml-10">
                                <h2 className="hidden hcontent-title sm:flex text-left">遊戲介紹</h2>
                                <p className="hcontent-sectitle mb-[1%]]">2D解謎RPG</p>
                                <p className="sm:max-w-[375px] sm:mb-0 text-left">玩家扮演主角路西安找尋失蹤朋友芙洛爾的下落，在居住的小島上搜索、調查關鍵線索、解謎突破過程中遇到的阻礙，深入記憶與超現實世界中一步步了解事件的真相......</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-[10%] mb-[10%] border-1 w-[80%] border-[#30B1BD] rounded-full" />
                    </div>

                    {/*Game Story*/}
                    <div className="flex justify-center">
                        <div className="homeContent flex flex-col justify-around items-center w-[80%] sm:flex-row">
                            <div className="flex justify-center ml-0 sm:ml-10">
                                <h2 className="hcontent-title flex justify-center">遊戲故事</h2>
                            </div>
                            {/*For Moblie to display*/}
                            <div className="sm:hidden flex flex-col justify-center items-center">
                                <div className="mt-[10%] mb-[10%] border-1 w-[70vw] border-[#30B1BD] rounded-full" />
                            </div>
                            {/*Normal*/}
                            <div className="flex flex-col justify-start ">
                                <p className="hcontent-sectitle mb-[1%]">劇情大綱</p>
                                <p className="sm:max-w-[375px] sm:mb-0 text-left">路西安是居住在小島國上的14歲小孩，在像平常一樣要找摯友芙洛爾玩耍時，得知朋友在島上下落不明？！擔心的路西安展開了調查，希望能找到失蹤的芙洛爾。</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-[10%] mb-[10%] border-1 w-[80%] border-[#30B1BD] rounded-full" />
                    </div>

                    {/*Game Mechanic*/}
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex md:justify-start md:items-start md:mb-10 md:mr-[62%]">
                            <h2 className="hcontent-title flex md:text-left">解謎機制</h2>
                        </div>
                        <div className="homeContent flex flex-col justify-around md:justify-center items-center w-[80%]">

                            {/*For Moblie to display */}
                            <div className="md:hidden flex flex-col justify-center items-center">
                                <div className="mt-[10%] mb-[10%] border-1 w-[70vw] border-[#30B1BD] rounded-full" />
                            </div>
                            <div className="flex flex-row justify-between items-center md:w-[90%] md:h-[374px] md:border-5 border-white -mt-2">
                                <div className="flex flex-col justify-center items-center md:items-start md:ml-10">
                                    <div className="md:hidden flex flex-col justify-center items-start md:relative">
                                        <p className="md:hidden flex font-semibold text-[#30B1BD] mb-[5px]">＜ Playing... ＞</p>
                                        <img
                                            className="w-[370px] border-2 border-[#30B1BD]"
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
                                                className={`w-[40%] cursor-pointer md:mr-5 border-4 ${current === index ? "border-[#30B1BD]" : "border-white"
                                                    } transition`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex flex-col justify-center md:justify-start md:items-start w-[100%] border-3 md:border-5 border-white">
                                        <p className="hcontent-sectitle mx-3 mt-3">{thumbnails[current].title}</p>
                                        <p className="md:w-[227px] m-4 text-left">{thumbnails[current].desc}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex justify-center items-center md:relative">
                                    <img
                                        className="w-[370px] border-2 border-[#30B1BD] md:relative md:ml-30 md:mb-30"
                                        src={thumbnails[current].big}
                                        alt="解謎機制大圖"
                                    />
                                    <p className="hidden md:flex font-semibold text-[#30B1BD] absolute pt-80 pl-80">＜ Playing... ＞</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-[20%]">
                        <div className="mt-[10%] border-1 w-[80%] border-[#30B1BD] rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBody;