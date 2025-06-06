import { useState, useEffect } from "react";
import { useFanQuestionVotes, useUpdateFanQuestionVote } from '../react-query';
import { useQueryClient } from '@tanstack/react-query'; 
import { useSelector } from 'react-redux';
import { selectLightMode } from '../redux/colorSlice';
import DownfadeInDiv from "../motion/DownfadeInDiv";
import RightfadeInDiv from "../motion/RightfadeInDiv";
import LeftfadeInDiv from "../motion/LeftfadeInDiv";
import OshiVote from "./OshiVote";

function FanClubBody() {
    // const [voted, setVoted] = useState(false);
    // const [selected, setSelected] = useState(null); // "left" or "right"
    // const [result, setResult] = useState({ left: 100, right: 0 }); // 模擬結果
    const lightMode = useSelector(selectLightMode);
    const [voted, setVoted] = useState(false);
    const [selected, setSelected] = useState(null);
    const queryClient = useQueryClient(); 
    const { data: voteResult = { left: 0, right: 0 }, isLoading } = useFanQuestionVotes();
    const { mutate: updateVote } = useUpdateFanQuestionVote();

    const totalVotes = (voteResult?.left || 0) + (voteResult?.right || 0);
    const leftPercentage = totalVotes === 0 ? 50 : Math.round((voteResult.left / totalVotes) * 100);
    const rightPercentage = totalVotes === 0 ? 50 : Math.round((voteResult.right / totalVotes) * 100);

    useEffect(() => {
        const hasVoted = localStorage.getItem('breakfastVoted');
        const previousSelection = localStorage.getItem('breakfastSelection');
        if (hasVoted === 'true' && previousSelection) {
            setVoted(true);
            setSelected(previousSelection);
        }
    }, []);

    const handleVote = async (side) => {
        if (voted || isLoading) return;

        try {
            console.log('準備投票給:', side);
            
            // 使用 mutate 更新投票
            updateVote({ 
            way: side 
            }, {
            onSuccess: () => {
                setSelected(side);
                setVoted(true);
                localStorage.setItem('breakfastVoted', 'true');
                localStorage.setItem('breakfastSelection', side);
                queryClient.invalidateQueries('fanQuestionVotes');
            },
            onError: (error) => {
                console.error('投票失敗:', error);
                alert('投票失敗，請稍後再試');
            }
            });
        } catch (error) {
            console.error('投票處理發生錯誤:', error);
            alert('投票失敗，請稍後再試');
        }
    };

    console.log('當前投票數據:', { voteResult, totalVotes, leftPercentage, rightPercentage });

    return (
        <div className="relative">
            <div className="content-container">
                <div className="flex justify-center flex-col items-center">
                    <DownfadeInDiv className="pt-10">
                        <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
                    </DownfadeInDiv>
                    {/* 殘酷二選一｜Pick a Side< */}
                    <div className="flex flex-col justify-center mt-10">
                        <h1 className="font-bold sm:text-3xl text-2xl mb-3 sm:text-left ml-5">殘酷二選一｜Pick a Side</h1>
                        <div className="h-[2.5px] sm:w-[1250px]  bg-white m-5"></div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col justify-center items-center h-[180px] sm:w-[1200px] w-[400px] fanClubbg rounded-[20px] mt-7">
                                <h1 className="sm:text-2xl text-lg">每當開啟新的一天，你更常選擇哪種早餐口味？</h1>
                                <div className="flex flex-col sm:w-270 w-80 jusitfy-center mt-5">
                                    <div className="flex justify-between">
                                        <span>{voted ? `${leftPercentage}%` : "???"}</span>
                                        <span>{voted ? `${rightPercentage}%` : "???"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>{voted ? `${voteResult.left}` : "??"}</span>
                                        <span>{voted ? `${voteResult.right}` : "??"}</span>
                                    </div>
                                    {/* 進度條 */}
                                    <div className="relative sm:w-full  h-5 mt-2 rounded-full overflow-hidden"
                                        style={{
                                            background: voted ? "#E93969" : "linear-gradient(to right, #30B1BD, #E93969)"
                                        }}
                                    >
                                        <div
                                            className="absolute top-0 left-0 h-full transition-all duration-700"
                                            style={{
                                                width: `${voted ? leftPercentage : 0}%`,
                                                background: "#30B1BD"
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="flex sm:flex-row flex-col justify-around items-center mt-10 sm:w-[1200px] w-[400px]">
                                <img
                                    src="/images/SideLeft.png"
                                    alt="LeftSideImage"
                                    onClick={() => handleVote("left")}
                                    className={`sm:h-[430px] h-[239px] rounded-[20px] sm:mb-0 mb-[20px] cursor-pointer transition-all duration-300 hover:scale-105 
                                    ${selected === "left" ? "ring-4 ring-[#30B1BD]" : ""}${voted && selected !== "left" ? "opacity-40" : ""}`}
                                />
                                <img
                                    src="/images/SideRight.png"
                                    alt="RightSideImage"
                                    onClick={() => handleVote("right")}
                                    className={`sm:h-[430px] h-[239px] rounded-[20px] cursor-pointer transition-all duration-300 hover:scale-105 
                                    ${selected === "right" ? "ring-4 ring-[#E93969]" : ""}${voted && selected !== "right" ? "opacity-40" : ""}`}
                                />
                            </div>
                        </div>
                        {/* 趣味問答｜Fun Fact */}
                        <div className="flex flex-col text-left items-center mt-30">
                            <div className="w-[1250px]"> 
                                <h1 className="font-bold sm:text-3xl text-2xl mb-3 sm:text-left text-center">趣味問答｜Fun Fact</h1>
                                <div className="h-[2.5px] w-full bg-white mb-5"></div>
                            </div>

                            <div className={`group fanClubbg sm:w-[90%] w-[380px] rounded-[20px] pl-10 pr-10 mb-3 hover:border-[${lightMode ? '#E93969' : '#30B1BD'}] border-3 border-transparent transition-all`}>
                                 <div className={`text-xl font-bold py-4 flex justify-between items-center`}>
                                    <div className={`group-hover:text-[${lightMode ? '#E93969' : '#30B1BD'}]`}>
                                        Q. 小島上大概多大？有多少人口？
                                    </div>
                                    <span className={`transform transition-transform duration-300 group-hover:rotate-180 inline-block`}>▼</span>
                                </div>
                                
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    "max-h-0 group-hover:max-h-[100px]"
                                }`}>
                                    <div className="pb-4 text-lg">
                                        A. 約十平方公里，其中有一半的面積是山區，易於活動的地方較小，大概住有200人左右。
                                    </div>
                                </div>
                            </div>

                            {/* 第二個問題 */}
                            <div className={`group fanClubbg sm:w-[90%] w-[380px] rounded-[20px] pl-10 pr-10 mb-3 hover:border-[${lightMode ? '#E93969' : '#30B1BD'}] border-3 border-transparent transition-all`}>
                                <div className={`text-xl font-bold group-hover:text-[${lightMode ? '#E93969' : '#30B1BD'}] py-4 flex justify-between items-center`}>
                                    <div>Q. 在阿雞師開發風信子口味雞蛋糕之前，還有其他奇葩口味嗎？</div>
                                    <span className="transform transition-transform duration-300 group-hover:rotate-180 inline-block">▼</span>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    "max-h-0 group-hover:max-h-[100px]"
                                }`}>
                                    <div className="pb-4 text-lg">
                                        A. 有，多到數不清。例如：絲瓜、牛蒡、大白菜......種得出來的作物都逃不了。
                                    </div>
                                </div>
                            </div>

                            {/* 第三個問題 */}
                            <div className={`group fanClubbg sm:w-[90%] w-[380px] rounded-[20px] pl-10 pr-10 mb-3 hover:border-[${lightMode ? '#E93969' : '#30B1BD'}] border-3 border-transparent transition-all`}>
                                <div className={`text-xl font-bold group-hover:text-[${lightMode ? '#E93969' : '#30B1BD'}] py-4 flex justify-between items-center`}>
                                    <div>Q. 花店老闆用什麼方法保養得以凍齡？</div>
                                    <span className="transform transition-transform duration-300 group-hover:rotate-180 inline-block">▼</span>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    "max-h-0 group-hover:max-h-[100px]"
                                }`}>
                                    <div className="pb-4 text-lg">
                                        A. 據本人所說，只要和花草和平相處，它們就會祝福你青春永駐。
                                    </div>
                                </div>
                            </div>

                            {/* 第四個問題 */}
                            <div className={`group fanClubbg sm:w-[90%] w-[380px] rounded-[20px] pl-10 pr-10 mb-3 hover:border-[${lightMode ? '#E93969' : '#30B1BD'}] border-3 border-transparent transition-all`}>
                                <div className={`text-xl font-bold group-hover:text-[${lightMode ? '#E93969' : '#30B1BD'}] py-4 flex justify-between items-center`}>
                                    <div>Q. 路西從什麼時候開始喜歡攝影的？</div>
                                    <span className="transform transition-transform duration-300 group-hover:rotate-180 inline-block">▼</span>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    "max-h-0 group-hover:max-h-[100px]"
                                }`}>
                                    <div className="pb-4 text-lg">
                                        A. 在他10歲生日的時候得到了一台相機，從那刻起就常常用它記錄生活。
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 最愛角色票選｜Vote your Oshi */}
                        <div className="flex flex-col justify-center mt-20 mb-50">
                            <h1 className="font-bold sm:text-3xl text-2xl mb-3 sm:text-left">最愛角色票選｜Vote your Oshi</h1>
                            <div className="h-[2.5px] w-[1250px] bg-white"></div>

                            <OshiVote/>
                            <div className="flex flex-row text-left items-center justify-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default FanClubBody;