import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalHeartById, useUpdateGlobalHeart } from '../react-query'; 
import DownfadeInDiv from "../motion/DownfadeInDiv";
import ZoomMotionDiv from "../motion/ZoomMotionDiv";
import { addUserHeart, reduceCUserHeart, selectUserHeart } from '../redux/userHeartSlice'; 
import { selectLightMode } from '../redux/colorSlice'; 
//import { selectWorldHeart, reduceWorldHeart, addworldHeart } from '../redux/worldHeartSlice';

function ArtPic({ art }) {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const userLovePic = useSelector(selectUserHeart);
    const isLoved = userLovePic.some(item => Number(item.id) === Number(art.id));
    //const worldLovePic = useSelector(selectWorldHeart);
    const { data: heartData, isLoading } = useGlobalHeartById(art.id);
    const { mutate: updateHeart } = useUpdateGlobalHeart();
    const lightMode = useSelector(selectLightMode); 

    const handleHeartClick = (e) => {
        e.stopPropagation();
        if (isLoved) {
            dispatch(reduceCUserHeart(art.id));
            //dispatch(reduceWorldHeart(art.id));
            updateHeart({ 
                picId: art.id, 
                newQty: (heartData?.getHeartQty || 0) - 1 
            });
        } else {
            dispatch(addUserHeart({
                id: art.id,
            }));
            //dispatch(addworldHeart(art.id));
            updateHeart({ 
                picId: art.id, 
                newQty: (heartData?.getHeartQty || 0) + 1 
            });
        }
    };

    return (
        <>
            <DownfadeInDiv className="relative duration-100 scale-100 hover:scale-105 z-10">
                <div
                    className="bg-[#051D21] pt-[10px] pb-[60px] px-[10px] cursor-pointer"
                    onClick={() => setShowModal(true)}
                >
                    {/* 圖片卡片 */}
                    <div className="bg-[#051D21] p-0">
                        <img
                            className="w-full aspect-[1/1] object-cover"
                            src={art.image}
                            alt={art.name}
                        />
                    </div>

                    {/* 愛心圖示 - 只在 getHeart 為 true 時顯示 */}
                    {isLoved && (
                        <div className="absolute bottom-[25px] right-[10px] sm:bottom-[15px] sm:right-[4px]">
                            <img
                                src={lightMode ? "/images/art-heartIcon-fill-light.png" : "/images/art-heartIcon-fill.png"}
                                alt="heart"
                                className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"
                            />
                        </div>
                    )}

                    {/* 愛心數量 */}
                    <div className="absolute bottom-[10px] left-[10px]">
                        <div className="flex flex-row gap-[5px] items-center">
                            <img
                                src="/images/art-heartIcon.png"
                                alt="heart"
                                className="w-[15px] h-[15px] opacity-50"
                            />
                            <p className="text-gray-500 text-[12px] -mt-[2px]">
                                {isLoading ? '...' : (heartData?.getHeartQty || 0)}
                            </p>
                        </div>
                    </div>
                </div>
            </DownfadeInDiv>
            {/* Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/70 flex justify-center items-center z-[100]"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowModal(false);
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter: 'blur(2px)'
                    }}
                >
                    <ZoomMotionDiv
                        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowModal(false);
                        }}
                    >
                       
                        <div className="flex flex-col md:flex-row">
                            {/* 左側圖片 */}
                            <div className="w-full flex items-center justify-center mb-4 md:w-2/3 md:mr-4 md:mb-0">
                                <img
                                    src={art.image}
                                    alt={art.name}
                                    className="w-full h-auto max-h-[70vh] object-contain"
                                />
                            </div>

                            {/* 右側資訊 */}
                            <div className="w-full md:w-1/3 md:min-w-[100px] p-4 border-3 border-white my-0 md:my-40">
                                
                                {/* 標題和日期 */}
                                <div className="mb-20 flex flex-col items-start">
                                    <p className="text-[14px] text-gray-300 mb-2">{art.date}</p>
                                    <h3 className="text-[16px] font-bold text-white mb-2 text-left">{art.name}</h3>
                                </div>

                                {/* 愛心按鈕 */}
                                <div className="absolute bottom-4 right-4 md:my-40">
                                    <button
                                        className="flex items-center gap-0 flex-col"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleHeartClick(e);
                                        }}
                                    >
                                        <img
                                            src={isLoved 
                                                ? (lightMode ? "/images/art-heartIcon-fill-light.png" : "/images/art-heartIcon-fill.png")
                                                : "/images/art-heartIcon.png"
                                            }
                                            alt="heart"
                                            className="w-8 h-8"
                                        />
                                        <span className="text-gray-400 text-[12px]">
                                            {isLoading ? '...' : (heartData?.getHeartQty || 0)}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ZoomMotionDiv>
                </div>
            )}
        </>
    )
}

export default ArtPic;


//h-[280px] w-[220px] mb-[20px] border-t-[10px] border-b-[60px] border-x-[10px] border-solid border-[#051D21] object-cover