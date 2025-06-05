import DownfadeInDiv from "../motion/DownfadeInDiv";

function ArtPic({ art }) {
    return(
        <DownfadeInDiv className="relative">
            {/* 圖片卡片 */}
            <div className="bg-[#051D21] pt-[10px] pb-[60px] px-[10px]">
                <img 
                    className="w-full aspect-[1/1] object-cover"
                    src={art.image}
                    alt={art.name}
                />
            </div>
            
            {/* 愛心圖示 - 只在 getHeart 為 true 時顯示 */}
            {art.getHeart && (
                <div className="absolute bottom-[15px] right-[4px]">
                    <img 
                        src="/images/art-heartIcon-fill.png" 
                        alt="heart" 
                        className="w-[80px] h-[80px]"
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
                <p className="text-gray-500 text-[12px] -mt-[2px]">{art.getHeartQty}</p>
                </div>
            </div>
        </DownfadeInDiv>
    )
}

export default ArtPic;


//h-[280px] w-[220px] mb-[20px] border-t-[10px] border-b-[60px] border-x-[10px] border-solid border-[#051D21] object-cover