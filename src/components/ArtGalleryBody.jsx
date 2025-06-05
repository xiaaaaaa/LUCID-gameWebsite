import { useState } from 'react';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import ArtPic from "./ArtPic";
import { selectLightMode } from '../redux/colorSlice';
import { selectUserHeart } from '../redux/userHeartSlice';

const ArtGallery = ({ sortedArtworks }) => {
    const [selected, setSelected] = useState(0);
    const [activeTab, setActiveTab] = useState('all');
    const lightMode = useSelector(selectLightMode);
    const userLovePic = useSelector(selectUserHeart);

    const tabBarContent = [
        { name: "作品總覽", label: 'all' },
        { name: "我的收藏", label: 'favorite' },
    ];

    return (
        <>
            <div className="pt-30 flex justify-center">
                <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
            </div>

            <div className="m-10 mb-8 sm:m-20">
                <motion.div className="flex gap-2">
                    {tabBarContent.map(({ name, label }, index) => (
                        <div key={index} className="w-1/2">
                            <button
                                onClick={() => setActiveTab(label)}
                                onHoverStart={() => setSelected(index)}
                                className={`w-full p-0 text-[25px] font-bold text-white rounded-t-[20px]
                                ${activeTab === label
                                    ? `bg-white ${lightMode ? '!text-[#E93969]' : '!text-[#30B1BD]'}`
                                    : `bg-white/20 hover:bg-white/30 ${lightMode ? '!text-[#909090]' : '!text-[#ffffff]'}`}`}
                            >
                                <div className="flex flex-col items-center mt-5 gap-5 mb-6">
                                    <motion.div className="relative">
                                        <span>{name}</span>
                                        {activeTab === label && (
                                            <motion.div
                                                className={`absolute -bottom-6 left-0 h-[3px] w-[100%] rounded-[6px] 
                                                ${lightMode ? 'bg-[#E93969]' : 'bg-[#30B1BD]'}`}
                                                layoutId="tabUnderline"
                                                transition={{
                                                    layout: {
                                                        duration: 0.3,
                                                        ease: 'easeOut',
                                                    },
                                                }}
                                            />
                                        )}
                                    </motion.div>
                                </div>
                            </button>
                        </div>
                    ))}
                </motion.div>

                <div className="bg-white p-8 min-h-[600px] rounded-b-[20px]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {activeTab === 'all'
                            ? sortedArtworks.map((art) => (
                                <ArtPic key={art.id} art={art} />
                            ))
                            : sortedArtworks
                                .filter(art => userLovePic.some(item => item.id === art.id))
                                .map((art) => (
                                    <ArtPic key={art.id} art={art} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtGallery;