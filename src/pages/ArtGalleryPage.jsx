import { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ArtGalleryBody from "../components/ArtGalleryBody";
import artData from "../json/art.json";
import { selectWorldHeart } from '../redux/worldHeartSlice';

function ArtGalleryPage() {
    const [artworks] = useState(artData);
    const worldHeartData = useSelector(selectWorldHeart);
    const sortedArtworks = [...artworks].sort((a, b) => {
        const aHearts = worldHeartData.find(w => w.id === a.id)?.getHeartQty || 0;
        const bHearts = worldHeartData.find(w => w.id === b.id)?.getHeartQty || 0;
        return bHearts - aHearts;
    });

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300">
                <Nav />
            </div>
            
            <ArtGalleryBody sortedArtworks={sortedArtworks} />

            <div className='mt-60 bottom-0'>
                <Footer />
            </div>
        </div>
    );
}

export default ArtGalleryPage;