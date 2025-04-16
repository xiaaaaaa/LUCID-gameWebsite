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
            <div className="flex justify-center items-center relative z-50">
                <img className="w-[500px] h-full object-cover" src="/images/Mainlogo.png" alt="Back to home" />
            </div>
            <div className="flex justify-center items-center -mt-28 relative z-0">
                <img className="hero w-[1125px] h-full object-cover" src="/images/MainVisual.png" alt="主視覺" />
            </div>
            <div className="flex flex-row justify-center items-center">
                <img className="w-[1015px] mt-7 relative z-49" src="/images/pictureHole.png" alt="裝飾" />
            </div>
            <div className="mainContent flex justify-center items-center -mt-424 relative z-0">
                <div className="grid grid-cols-1 gap-6content w-[1062px] bg-[#141414]">
                    <div className="flex flex-col justify-center items-center mt-8">
                        <img className="w-[150px]" src="/images/cameraIcon.png" alt="相機" />
                    </div>
                    <Npc1 />
                    <Npc2 />
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="mt-5 border-1 w-[800px] border-[#30B1BD] rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="homeContent flex md:flex-row w-[755px] h-[450px]">
                            <div className="flex justify-center items-center">
                                <img className="flex w-[370px] h-[309px]" src="/images/gameStory.jpg" alt="簡介" />
                            </div>
                            <div className="flex flex-col justify-center ml-10">
                                <h2 className="hcontent-title flex text-left">遊戲介紹</h2>
                                <p className="hcontent-sectitle mb-0.5">2D解謎RPG</p>
                                <p className="w-[375px] text-left">玩家扮演主角路西安找尋失蹤朋友芙洛爾的下落，在居住的小島上搜索、調查關鍵線索、解謎突破過程中遇到的阻礙，深入記憶與超現實世界中一步步了解事件的真相......</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="mt-5 border-1 w-[800px] border-[#30B1BD] rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="homeContent flex flex-col justify-around items-center sm:flex-row w-[755px] h-[400px]">
                            <div className="flex justify-center ml-10">
                                <h2 className="hcontent-title flex justify-center">遊戲故事</h2>
                            </div>
                            <div className="flex flex-col justify-start">
                                <p className="hcontent-sectitle mb-0.5">劇情大綱</p>
                                <p className="w-[375px] text-left">路西安是居住在小島國上的14歲小孩，在像平常一樣要找摯友芙洛爾玩耍時，得知朋友在島上下落不明？！擔心的路西安展開了調查，希望能找到失蹤的芙洛爾。</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-5 border-1 w-[800px] border-[#30B1BD] rounded-full" />
                    </div>
                    <div className="flex justify-center items-center mt-10 mb-15">
                        <div className="homeContent flex flex-col justify-around items-start w-[755px]">
                            <div className="flex justify-start items-start">
                                <h2 className="hcontent-title flex text-left">解謎機制</h2>
                            </div>
                            <div className="flex flex-row justify-between items-center w-[718px] h-[374px] border-5 border-white -mt-2">
                                <div className="flex flex-col justify-center items-start ml-10">
                                    <div className="flex flex-row justify-start w-[250px] mb-10">
                                        {thumbnails.map((item, index) => (
                                            <img
                                                key={index}
                                                src={item.src}
                                                alt="縮圖"
                                                onClick={() => setCurrent(index)}
                                                className={`w-[100px] cursor-pointer mr-5 border-4 ${current === index ? "border-[#30B1BD]" : "border-white"
                                                    } transition`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex flex-col justify-start items-start border-5 border-white">
                                        <p className="hcontent-sectitle mx-3 mt-3">{thumbnails[current].title}</p>
                                        <p className="w-[227px] m-4 text-left">{thumbnails[current].desc}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center relative">
                                    <img
                                        className="w-[370px] border-2 border-[#30B1BD] relative ml-30 mb-30"
                                        src={thumbnails[current].big}
                                        alt="解謎機制大圖"
                                    />

                                    <p className="flex font-semibold text-[#30B1BD] absolute pt-80 pl-80"> Playing... </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-20">
                        <div className="mt-5 border-1 w-[800px] border-[#30B1BD] rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBody;