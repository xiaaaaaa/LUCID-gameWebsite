import Nav from "../components/Nav"
import Footer from "../components/Footer";
import artData from "../json/art.json";
import ArtPic from "../components/ArtPic";

function ArtGalleryPage() {
    const sortedArtData = [...artData].sort((a, b) => b.getHeartQty - a.getHeartQty);

    return (
        <div className="relative">
            <Nav />
            <div className="content-container px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 bg-white p-8 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {sortedArtData.map((art) => (
                        <ArtPic key={art.id} art={art} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ArtGalleryPage;