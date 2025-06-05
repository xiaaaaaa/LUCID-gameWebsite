import { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import artData from "../json/art.json";
import ArtPic from "../components/ArtPic";
import DownfadeInDiv from "../motion/DownfadeInDiv";
import { selectLightMode } from '../redux/colorSlice';

function ArtGalleryPage() {
    const sortedArtData = [...artData].sort((a, b) => b.getHeartQty - a.getHeartQty);
    const [activeTab, setActiveTab] = useState('all'); 
    const lightMode = useSelector(selectLightMode);

    return (
        <div className="relative">
            <Nav />
            <DownfadeInDiv className="pt-10 flex justify-center">
                <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
            </DownfadeInDiv>
            <div className="mx-20 my-20 mb-58">
                <div className="flex gap-2">
                    <button 
                        onClick={() => setActiveTab('all')}
                        className={`w-1/2 p-4 text-[25px] font-bold text-white rounded-t-[20px]
                            ${activeTab === 'all' 
                                ? `bg-white ${lightMode ? '!text-[#E93969]' : '!text-[#30B1BD]'}` 
                                : `bg-white/20 hover:bg-white/30 ${lightMode ? '!text-[#909090]' : '!text-[#ffffff]'}`}`}
                    >
                        作品總覽
                    </button>
                    <button 
                        onClick={() => setActiveTab('favorite')}
                        className={`w-1/2 p-4 text-[25px] font-bold text-white rounded-t-[20px]
                            ${activeTab === 'favorite' 
                                ? `bg-white ${lightMode ? '!text-[#E93969]' : '!text-[#30B1BD]'}` 
                                : `bg-white/20 hover:bg-white/30 ${lightMode ? '!text-[#909090]' : '!text-[#ffffff]'}`}`}
                    >
                        我的收藏
                    </button>
                </div>
                
                <div className="bg-white p-8 min-h-[600px] rounded-b-[20px]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {activeTab === 'all' 
                            ? sortedArtData.map((art) => (
                                <ArtPic key={art.id} art={art} />
                            ))
                            : sortedArtData
                                .filter(art => art.getHeart === true)
                                .map((art) => (
                                    <ArtPic key={art.id} art={art} />
                                ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default ArtGalleryPage;