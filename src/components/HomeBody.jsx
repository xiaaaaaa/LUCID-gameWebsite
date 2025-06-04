import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { selectLightMode } from "../redux/colorSlice";
import CameraLineHome from "./CameraLineHome";
import { Camera } from "lucide-react";
import MotionDiv from "../motion/MotionDiv";

function HomeBody() {
    const mainVisualRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: mainVisualRef,
        offset: ["start end", "start start"] 
    })

    const lightMode = useSelector(selectLightMode);
    const thumbnails = [
        {
            src: "/images/gameMech1.png",
            big: "/videos/mechanism1.mp4",
            title: "【雙層遮罩】",
            desc: "在特殊遮罩區塊中可以看見隱藏於現實畫面之下的資訊。",
        },
        {
            src: "/images/gameMech2.png",
            big: "/videos/mechanism2.mp4",
            title: "【黑白彩色】",
            desc: "黑白彩色藏有細節，玩家需觀察出其中的規律。",
        },
    ];

    const [current, setCurrent] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const LeftfadeInEffect = {
        hidden: { x: -500, opacity: 0 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.0,
                ease: "easeInOut",
            },
        },
        exit: {
            x: 500,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        }
    }

    const RightfadeInEffect = {
        hidden: { x: 500, opacity: 0 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.0,
                ease: "easeInOut",
            },
        },
        exit: {
            x: -500,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        }
    }

    

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    

    return (
        <div className="mt-20 sm:home-body sm:mt-0" ref={mainVisualRef}>
            {/*Main Visual and Logo*/}
            <AnimatePresence>
                <motion.div
                    className="z-50"
                    variants={LeftfadeInEffect}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false }} 
                >
                    <div className="flex justify-center items-center relative z-50">
                        <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
                    </div>
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div
                    className="z-49"
                    variants={RightfadeInEffect}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false }} 
                >
                    <div className="flex justify-center items-center -mt-[max(10vh,10px)] relative z-49 sm:-mt-28">
                        {lightMode === true ? (
                            <img className="hero w-[1125px] h-full object-cover" src="/images/MainVisual_light.png" alt="MainVisual" />
                        ) : (
                            <img className="hero w-[1125px] h-full object-cover" src="/images/MainVisual.png" alt="MainVisual" />
                        )}
                    
                    </div>
                </motion.div>
            </AnimatePresence>

            {/*Main Content*/}
            <div className="flex  justify-center items-center">

                <div className="mainContent flex flex-row justify-center items-center relative z-1 w-[100%] sm:w-[90%]">
                    <CameraLineHome />
                    <div className="grid grid-cols-1 gap-6content w-[1062px]">
                        <div className="flex flex-col justify-center items-center mt-[10%]">
                            <img className="w-[150px]" src="/images/cameraIcon.png" alt="相機" />
                        </div>
                        <div className="flex flex-col justify-center items-center mt-5">
                            <div className="line mt-[10%] mb-[10%] border-1 w-[55vw]" />
                        </div>

                        {/*Game Picture*/}
                        <div className="flex justify-center items-center">
                            <MotionDiv className="hidden sm:flex relative -mx-60 w-[200%] min-h-[600px]   items-center justify-center sm:min-h-[1200px] ">
                               {[
                                    { num: 1, style: { top: '10%', left: '15%', transform: 'rotate(0deg)' }},
                                    { num: 2, style: { top: '18%', left: '72%', transform: 'rotate(0deg)' }},
                                    { num: 3, style: { top: '55%', left: '12%', transform: 'rotate(-0deg)' }},
                                    { num: 5, style: { top: '55%', left: '65%', transform: 'rotate(0deg)' }},
                                    { num: 6, style: { top: '75%', left: '45%', transform: 'rotate(-0deg)' }},
                                    { num: 4, style: { top: '30%', left: '40%', transform: 'rotate(-3deg)' }}
                                ].map(({ num, style }) => (
                                    <div 
                                        key={num}
                                        className="absolute w-[250px] cursor-pointer transition-all duration-300 hover:z-50"
                                        style={style}
                                    >
                                        <img
                                            src={`/images/homeGamePic/homePic${num}-rotation.png`}
                                            alt={`遊戲照片${num}`}
                                            className="w-full transition-all duration-300 scale-200 hover:scale-220"
                                            onClick={() => setSelectedImage(num)}
                                        />
                                    </div>
                                ))}
                            </MotionDiv>

                            <div className="flex relative -mx-60 w-[200%] min-h-[600px]  items-center justify-center sm:min-h-[1200px] sm:hidden  ">
                               {[
                                    { num: 1, style: { top: '0%', left: '12%', transform: 'rotate(0deg)' }},
                                    { num: 2, style: { top: '8%', left: '52%', transform: 'rotate(0deg)' }},
                                    { num: 3, style: { top: '45%', left: '12%', transform: 'rotate(-0deg)' }},
                                    { num: 5, style: { top: '50%', left: '55%', transform: 'rotate(0deg)' }},
                                    { num: 6, style: { top: '65%', left: '35%', transform: 'rotate(-0deg)' }},
                                    { num: 4, style: { top: '20%', left: '35%', transform: 'rotate(-3deg)' }}
                                ].map(({ num, style }) => (
                                    <div 
                                        key={num}
                                        className="absolute w-[250px] cursor-pointer transition-all duration-300 hover:z-50"
                                        style={style}
                                    >
                                        <img
                                            src={`/images/homeGamePic/homePic${num}-rotation.png`}
                                            alt={`遊戲照片${num}`}
                                            className="w-full transition-all duration-300 scale-100 hover:scale-120"
                                            onClick={() => setSelectedImage(num)}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Modal */}
                            {selectedImage && (
                                <div 
                                    className="fixed inset-0 bg-black/70 flex justify-center items-center z-[100]"
                                    onClick={() => setSelectedImage(null)}
                                    style={{ 
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backdropFilter: 'blur(2px)'
                                    }}
                                >
                                    <div 
                                        className="relative" 
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <img
                                            src={`/images/homeGamePic/homePic${selectedImage}.png`}
                                            alt={`遊戲照片${selectedImage}`}
                                            className="max-w-[90vw] max-h-[90vh] object-contain"
                                        />
                                        <button 
                                            className="absolute top-0 -right-10 text-gray-300 text-3xl hover:text-gray-200 transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage(null);
                                            }}
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col justify-center items-center mt-5">
                            <div className="line mt-[10%] mb-[10%] border-1 w-[55vw]" />
                        </div>

                        {/*Game Introduction*/}
                        <div className="flex justify-center items-center">
                            <div className="homeContent flex justify-center items-center flex-col lg:flex-row w-[80%] h-[90%]">
                                {/*For Moblie to display*/}
                                <div className="flex flex-row justify-center">
                                    <h2 className="sm:hidden hcontent-title flex ">遊戲介紹</h2>
                                </div>
                                <div className="sm:hidden flex flex-col justify-center items-center">
                                    <div className=" border-1 w-[55vw] mb-[10%] mt-[10%] sm:mb-0 line" />
                                </div>
                                {/*Normal*/}
                                <div className="flex justify-center items-center">
                                    <img className="flex w-[90%] h-[90%] sm:w-[305px] mb-[20px] sm:mb-0 border-2 sm:border-4 frame" src="/images/gameStory.jpg" alt="簡介" />
                                </div>
                                <div className="flex flex-col justify-center sm:ml-10">
                                    <h2 className="hidden hcontent-title sm:flex text-left">遊戲介紹</h2>
                                    <p className="hcontent-sectitle mb-[1%]]">2D解謎RPG</p>
                                    <p className="sm:max-w-[375px] sm:mb-0 text-left">玩家扮演主角路西安找尋失蹤朋友芙洛爾的下落，在居住的小島上搜索、調查關鍵線索、解謎突破過程中遇到的阻礙，深入記憶與超現實世界中一步步了解事件的真相......</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mt-[10%] mb-[10%] border-1 w-[55vw] line" />
                        </div>

                        {/*Game Story*/}
                        <div className="flex justify-center">
                            <div className="homeContent flex flex-col justify-around items-center w-[80%] lg:flex-row">
                                <div className="flex justify-center ml-0 sm:ml-10">
                                    <h2 className="hcontent-title flex justify-center">遊戲故事</h2>
                                </div>
                                {/*For Moblie to display*/}
                                <div className="sm:hidden flex flex-col justify-center items-center">
                                    <div className="mt-[10%] mb-[10%] border-1 w-[55vw] line" />
                                </div>
                                {/*Normal*/}
                                <div className="flex flex-col justify-start ">
                                    <p className="hcontent-sectitle mb-[1%]">劇情大綱</p>
                                    <p className="sm:max-w-[375px] sm:mb-0 text-left">路西安是居住在小島國上的14歲小孩，在像平常一樣要找摯友芙洛爾玩耍時，得知朋友在島上下落不明？！擔心的路西安展開了調查，希望能找到失蹤的芙洛爾。</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mt-[10%] mb-[10%] border-1 w-[55vw] line" />
                        </div>

                        {/*Game Mechanic*/}
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex md:justify-start md:items-start md:mb-10 md:mr-[62%]">
                                <h2 className="hcontent-title flex md:text-left">解謎機制</h2>
                            </div>
                            <div className="homeContent flex flex-col justify-around md:justify-center items-center w-[80%]">

                                {/*For Moblie to display */}
                                <div className="md:hidden flex flex-col justify-center items-center">
                                    <div className="mt-[10%] mb-[10%] border-1 w-[55vw] line" />
                                </div>
                                <div className="flex flex-row justify-between items-center lg:w-[90%] lg:h-[374px] lg:border-5 textframe -mt-2">
                                    <div className="flex flex-col justify-center items-center lg:items-start lg:ml-10">
                                        <div className="lg:hidden flex flex-col justify-center items-start md:relative">
                                            <p className="lg:hidden flex font-semibold color mb-[5px] md:mt-5">＜ Playing... ＞</p>
                                            {/* <img
                                                className="w-[370px] border-2 sm:border-4 frame"
                                                src={thumbnails[current].big}
                                                alt="解謎機制大圖"
                                            /> */}
                                            <video
                                                key={current}
                                                className="w-[370px] border-2 sm:border-4 frame"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            >
                                                <source src={thumbnails[current].big} type="video/mp4" />
                                            </video>
                                        </div>
                                        {/*For Moblie to display */}
                                        <div className="flex flex-row justify-around lg:justify-start w-[60%] lg:w-[250px] my-5 lg:mb-10">
                                            {thumbnails.map((item, index) => (
                                                <img
                                                    key={index}
                                                    src={item.src}
                                                    alt="縮圖"
                                                    onClick={() => setCurrent(index)}
                                                    className={`w-[40%] cursor-pointer md:mr-5 border-2 sm:border-4 ${current === index ? "frame" : "textframe"
                                                        } transition`}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex flex-col justify-center lg:justify-start lg:items-start lg:w-[100%] md:mb-5 border-2 md:border-5 textframe">
                                            <p className="hcontent-sectitle mx-3 mt-3">{thumbnails[current].title}</p>
                                            <p className="lg:w-[227px] m-4 text-left">{thumbnails[current].desc}</p>
                                        </div>
                                    </div>
                                    <div className="hidden lg:flex justify-center items-center md:relative">
                                        {/* <img
                                            className="w-[370px] border-4 frame md:relative md:ml-10 md:mb-40"
                                            src={thumbnails[current].big}
                                            alt="解謎機制大圖"
                                        /> */}
                                        <video
                                            key={current}
                                            className="w-[370px] border-4 frame md:relative md:ml-10 md:mb-40"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src={thumbnails[current].big} type="video/mp4" />
                                        </video>
                                        <p className="hidden md:flex font-semibold color absolute pt-80 pl-40">＜ Playing... ＞</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-[50%] sm:mb-[20%]">
                            <div className="mt-[10%] border-1 w-[55vw] line" />
                        </div>
                    </div>
                    <CameraLineHome />
                </div>
            </div>
        </div>
    );
}

export default HomeBody;