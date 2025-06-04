import Nav from "../components/Nav"
import Footer from "../components/Footer";

function ArtGalleryPage() {
    
    return (
        <div className="relative">
            <Nav />
            <div className="content-container">
                <div className="flex justify-center items-center">
                    <img 
                        className="flex h-[280px] w-[220px] mb-[20px] border-t-[10px] border-b-[60px] border-x-[10px] border-solid border-[#051D21] object-cover" 
                        src="/images/gameStory.jpg" 
                        alt="簡介" 
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ArtGalleryPage;  