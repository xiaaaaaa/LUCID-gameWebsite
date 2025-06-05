import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ArtGalleryBody from "../components/ArtGalleryBody";
import artData from "../json/art.json";
import { selectWorldHeart } from '../redux/worldHeartSlice';
import { useGlobalHeartById } from '../react-query'; 

function ArtGalleryPage() {
    const [artworks] = useState(artData);
    const worldHeartData = useSelector(selectWorldHeart);
     const { data: heart, isLoading, error } = useGlobalHeartById("6"); 
    const sortedArtworks = [...artworks].sort((a, b) => {
        const aHearts = worldHeartData.find(w => w.id === a.id)?.getHeartQty || 0;
        const bHearts = worldHeartData.find(w => w.id === b.id)?.getHeartQty || 0;
        return bHearts - aHearts;
    });
    

    console.log('Heart data:', heart);
    console.log('Loading:', isLoading);
    console.log('Error:', error);
    console.log('完整的愛心資料:', heart);

    return (
        <div className="relative min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300">
                <Nav />
            </div>
            
            <ArtGalleryBody sortedArtworks={sortedArtworks} />
              <p>
                ID 6 的愛心數量: {isLoading 
                    ? '載入中...' 
                    : heart 
                        ? `${heart.getHeartQty}` 
                        : '無資料'
                }
            </p>
            <p>原始資料: {JSON.stringify(heart, null, 2)}</p>
            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
    );
}

export default ArtGalleryPage;