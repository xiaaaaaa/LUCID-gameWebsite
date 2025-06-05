import { useState } from "react";
import DownfadeInDiv from "../motion/DownfadeInDiv";
import RightfadeInDiv from "../motion/RightfadeInDiv";
import LeftfadeInDiv from "../motion/LeftfadeInDiv";

function FanClubBody() {
    const [voted, setVoted] = useState(false);
    const [selected, setSelected] = useState(null); // "left" or "right"
    const [result, setResult] = useState({ left: 100, right: 0 }); // 模擬結果

    const handleVote = (side) => {
        if (voted) return;

        // 模擬結果：左邊 70%，右邊 30%
        const mockResult = side === "left" ? { left: 70, right: 30 } : { left: 40, right: 60 };
        setSelected(side);
        setResult(mockResult);
        setVoted(true);
    };
    return (
        <div className="relative">
            <div className="content-container">
                <div className="flex justify-center flex-col items-center">
                    <DownfadeInDiv className="pt-10">
                        <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
                    </DownfadeInDiv>
                    {/* 殘酷二選一｜Pick a Side< */}
                    <div className="flex flex-col justify-center mt-10">
                        <h1 className="font-bold text-3xl mb-3 text-left">殘酷二選一｜Pick a Side</h1>
                        <div className="h-[2.5px] w-[1250px] bg-white"></div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col justify-center items-center h-[160px] w-[1200px] fanClubbg rounded-[20px] mt-7">
                                <h1 className="text-2xl">每當開啟新的一天，你更常選擇哪種早餐口味？</h1>
                                <div className="flex flex-col w-270 mt-5">
                                    <div className="flex justify-between">
                                        <span>{voted ? `${result.left}%` : "???"}</span>
                                        <span>{voted ? `${result.right}%` : "???"}</span>
                                    </div>
                                    {/* 進度條 */}
                                    <div className="relative w-full h-5 mt-2 bg-[#E93969] rounded-full overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full transition-all duration-700"
                                            style={{
                                                width: `${voted ? result.left : 100}%`,
                                                background: voted
                                                    ? "#30B1BD"
                                                    : "linear-gradient(to right, #30B1BD, #E93969)",
                                            }}
                                        />
                                        {/*<progress className="progress bg-amber-300 progress-[#30B1BD] w-270 h-5 justify-center" value={50} max="100"></progress>*/}
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-row justify-around items-center mt-10 w-[1200px]">
                                <img
                                    src="/images/SideLeft.png"
                                    alt="LeftSideImage"
                                    onClick={() => handleVote("left")}
                                    className={`h-[430px] rounded-[20px] cursor-pointer transition-all duration-300 hover:scale-105 
                                    ${selected === "left" ? "ring-4 ring-[#30B1BD]" : ""}`}
                                />
                                <img
                                    src="/images/SideRight.png"
                                    alt="RightSideImage"
                                    onClick={() => handleVote("right")}
                                    className={`h-[430px] rounded-[20px] cursor-pointer transition-all duration-300 hover:scale-105 
                                    ${selected === "right" ? "ring-4 ring-[#E93969]" : ""}`}
                                />
                            </div>
                        </div>
                        {/* 趣味問答｜Fun Fact */}
                        <div className="flex flex-col justify-center mt-30">
                            <h1 className="font-bold text-3xl mb-3 text-left">趣味問答｜Fun Fact</h1>
                            <div className="h-[2.5px] w-[1250px] bg-white"></div>

                            <div className="flex flex-col text-left items-center">
                                <div className="flex flex-col justify-center items-center w-[1148px] mt-7">
                                    <div className="collapse collapse-arrow peer fanClubbg rounded-[20px] pl-10 pr-10 mb-3 border-3 border-transparent peer-checked:border-[#30B1BD] transition-all">
                                        <input type="radio" name="my-accordion-2" className="peer" defaultChecked />
                                        <div className="collapse-title text-xl font-bold peer-checked:text-[#30B1BD]">Q. 小島上大概多大？有多少人口？</div>
                                        <div className="collapse-content text-lg">A. 約十平方公里，其中有一半的面積是山區，易於活動的地方較小，大概住有200人左右。</div>
                                    </div>
                                    <div className="collapse collapse-arrow fanClubbg rounded-[20px] pl-10 pr-10 mb-3">
                                        <input type="radio" name="my-accordion-2" className="peer" />
                                        <div className="collapse-title text-xl font-bold peer-checked:text-[#30B1BD]">Q. 在阿雞師開發風信子口味雞蛋糕之前，還有其他奇葩口味嗎？</div>
                                        <div className="collapse-content text-lg">A. 有，多到數不清。例如：絲瓜、牛蒡、大白菜......種得出來的作物都逃不了。</div>
                                    </div>
                                    <div className="collapse collapse-arrow fanClubbg rounded-[20px] pl-10 pr-10 mb-3">
                                        <input type="radio" name="my-accordion-2" className="peer" />
                                        <div className="collapse-title text-xl font-bold peer-checked:text-[#30B1BD]">Q. 花店老闆用什麼方法保養得以凍齡？</div>
                                        <div className="collapse-content text-lg">A. 據本人所說，只要和花草和平相處，它們就會祝福你青春永駐。</div>
                                    </div>
                                    <div className="collapse collapse-arrow fanClubbg rounded-[20px] pl-10 pr-10 mb-3">
                                        <input type="radio" name="my-accordion-2" className="peer" />
                                        <div className="collapse-title text-xl font-bold peer-checked:text-[#30B1BD]">Q. 路西從什麼時候開始喜歡攝影的？</div>
                                        <div className="collapse-content text-lg">A. 在他10歲生日的時候得到了一台相機，從那刻起就常常用它記錄生活。</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 最愛角色票選｜Vote your Oshi */}
                        <div className="flex flex-col justify-center mt-20 mb-50">
                            <h1 className="font-bold text-3xl mb-3 text-left">最愛角色票選｜Vote your Oshi</h1>
                            <div className="h-[2.5px] w-[1250px] bg-white"></div>

                            <div className="flex flex-row text-left items-center justify-center">
                                <div className="flex justify-center items-center mt-7 mr-[20px]">
                                    <div className="bg-[url('/images/LucidOshi.png')] h-[600px] pt-[440px]">
                                        <div className="flex flex-col justify-between items-start w-[250px] bg-[#020E10] rounded-b-[20px] p-5">
                                            <div className="flex flex-row justify-between items-start w-[200px]">
                                                <h1 className="text-xl font-bold text-white">路西安</h1>
                                                <div className="flex flex-col">
                                                    <img
                                                        src="/images/art-heartIcon.png"
                                                        alt="heart"
                                                        className="w-[20px] h-[20px] "
                                                    />
                                                    <p className="flex justify-end items-end text-white">44</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-outline btn-accent w-[200px] mt-[30px] rounded-[10px]">選擇他！</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center mt-7 mr-[20px]">
                                    <div className="bg-[url('/images/FlourOshi.png')] h-[600px] pt-[440px]">
                                        <div className="flex flex-col justify-between items-start w-[250px] bg-[#020E10] rounded-b-[20px] p-5">
                                            <div className="flex flex-row justify-between items-start w-[200px]">
                                                <h1 className="text-xl font-bold text-white">芙洛爾</h1>
                                                <div className="flex flex-col">
                                                    <img
                                                        src="/images/art-heartIcon.png"
                                                        alt="heart"
                                                        className="w-[20px] h-[20px] "
                                                    />
                                                    <p className="flex justify-end items-end text-white">44</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-outline btn-accent w-[200px] mt-[30px] rounded-[10px]">選擇他！</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center mt-7 mr-[20px]">
                                    <div className="bg-[url('/images/BossOshi.png')] h-[600px] pt-[440px]">
                                        <div className="flex flex-col justify-between items-start w-[250px] bg-[#020E10] rounded-b-[20px] p-5">
                                            <div className="flex flex-row justify-between items-start w-[200px]">
                                                <h1 className="text-xl font-bold text-white">花店老闆</h1>
                                                <div className="flex flex-col">
                                                    <img
                                                        src="/images/art-heartIcon.png"
                                                        alt="heart"
                                                        className="w-[20px] h-[20px] "
                                                    />
                                                    <p className="flex justify-end items-end text-white">44</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-outline btn-accent w-[200px] mt-[30px] rounded-[10px]">選擇他！</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center mt-7 mr-[20px]">
                                    <div className="bg-[url('/images/AjinOshi.png')] h-[600px] pt-[440px]">
                                        <div className="flex flex-col justify-between items-start w-[250px] bg-[#020E10] rounded-b-[20px] p-5">
                                            <div className="flex flex-row justify-between items-start w-[200px]">
                                                <h1 className="text-xl font-bold text-white">阿鯨船長</h1>
                                                <div className="flex flex-col">
                                                    <img
                                                        src="/images/art-heartIcon.png"
                                                        alt="heart"
                                                        className="w-[20px] h-[20px] "
                                                    />
                                                    <p className="flex justify-end items-end text-white">44</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-outline btn-accent w-[200px] mt-[30px] rounded-[10px]">選擇他！</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default FanClubBody;