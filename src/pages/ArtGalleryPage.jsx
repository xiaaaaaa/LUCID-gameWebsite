import { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import artData from "../json/art.json";
import ArtPic from "../components/ArtPic";
import DownfadeInDiv from "../motion/DownfadeInDiv";
import { selectLightMode } from '../redux/colorSlice';

function ArtGalleryPage() {
    const [artworks, setArtworks] = useState(artData); 
    const sortedArtworks = [...artworks].sort((a, b) => b.getHeartQty - a.getHeartQty);
    const [activeTab, setActiveTab] = useState('all');
    const lightMode = useSelector(selectLightMode);
    

    const handleHeartClick = (artId) => {
        setArtworks(prevArtworks => 
            prevArtworks.map(artwork => {
                if (artwork.id === artId) {
                    return {
                        ...artwork,
                        getHeart: !artwork.getHeart,
                        getHeartQty: artwork.getHeart 
                            ? artwork.getHeartQty - 1 
                            : artwork.getHeartQty + 1
                    };
                }
                return artwork;
            })
        );
    };


    return (
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300">
                <Nav />
            </div>
            <div className="pt-30 flex justify-center">
                <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
            </div>


            <div className="m-10 mb-8 sm:m-20">
                <div className="flex gap-2">
                    <div className="w-1/2">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`w-full p-0 text-[25px] font-bold text-white rounded-t-[20px]
                                ${activeTab === 'all'
                                    ? `bg-white ${lightMode ? '!text-[#E93969]' : '!text-[#30B1BD]'}`
                                    : `bg-white/20 hover:bg-white/30 ${lightMode ? '!text-[#909090]' : '!text-[#ffffff]'}`}`}
                        >
                            <div className="flex flex-col items-center mt-5 gap-5">
                                <span>作品總覽</span>
                                <div className={`h-[2px] w-[95%] mt-0 
                                    ${activeTab === 'all'
                                        ? (lightMode ? 'bg-[#E93969]' : 'bg-[#30B1BD]')
                                        : 'bg-transparent'}`}
                                />
                            </div>
                        </button>
                    </div>
                    <div className="w-1/2">
                        <button
                            onClick={() => setActiveTab('favorite')}
                            className={`w-full p-0 text-[25px] font-bold text-white rounded-t-[20px]
                                ${activeTab === 'favorite'
                                    ? `bg-white ${lightMode ? '!text-[#E93969]' : '!text-[#30B1BD]'}`
                                    : `bg-white/20 hover:bg-white/30 ${lightMode ? '!text-[#909090]' : '!text-[#ffffff]'}`}`}
                        >
                            <div className="flex flex-col items-center mt-5 gap-5">
                                <span>我的收藏</span>
                                <div className={`h-[2px] w-[95%] mt-0 
                                    ${activeTab === 'favorite'
                                        ? (lightMode ? 'bg-[#E93969]' : 'bg-[#30B1BD]')
                                        : 'bg-transparent'}`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="bg-white p-8 min-h-[600px] rounded-b-[20px]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {activeTab === 'all'
                            ? sortedArtworks.map((art) => (
                                <ArtPic key={art.id} art={art} onHeartClick={handleHeartClick}/>
                            ))
                            : sortedArtworks
                                .filter(art => art.getHeart === true)
                                .map((art) => (
                                    <ArtPic key={art.id} art={art} onHeartClick={handleHeartClick}/>
                                ))
                        }
                    </div>
                </div>
            </div>
            <div className='mt-60'>
                <Footer />
            </div>
        </div>
    );
}


export default ArtGalleryPage;