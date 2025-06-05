import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ArtGalleryBody from "../components/ArtGalleryBody";
import artData from "../json/art.json";
import { useGlobalHearts } from '../react-query';

function ArtGalleryPage() {
    const [artworks] = useState(artData);
    const { data: heartData, isLoading } = useGlobalHearts();

    // 使用 Firebase 的愛心數量進行排序
    const sortedArtworks = [...artworks].sort((a, b) => {
        // 從 heartData 中找到對應的愛心數量
        const aHearts = heartData?.find(h => h.picId === a.id)?.getHeartQty || 0;
        const bHearts = heartData?.find(h => h.picId === b.id)?.getHeartQty || 0;
        return bHearts - aHearts;  // 由大到小排序
    });

    if (isLoading) {
        return <div>載入中...</div>;
    }
    


    return (
        <div className="relative min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300">
                <Nav />
            </div>
            
            <ArtGalleryBody sortedArtworks={sortedArtworks} />

            {/* 測試取得 firebase 資料 */}
            {/* <p>
                ID 6 的愛心數量: {isLoading 
                    ? '載入中...' 
                    : heart 
                        ? `${heart.getHeartQty}` 
                        : '無資料'
                }
            </p>
            <p>原始資料: {JSON.stringify(heart, null, 2)}</p> */}

            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
    );
}

export default ArtGalleryPage;