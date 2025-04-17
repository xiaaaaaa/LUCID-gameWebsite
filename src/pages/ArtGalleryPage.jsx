import Nav from "../components/Nav"
import Footer from "../components/Footer";

function ArtGalleryPage() {
    return (
        <div className="relative">
            <Nav />
            <div className="content-container">
                <div className="flex justify-center  h-screen">
                    <div className="mt-50 sm:mt-25">
                        <p className="text-[10px] sm:text-sm">----------------------------------------------------</p>
                        <p className="text-[10px] sm:text-sm">----------------------------------------------------</p>
                        <p className="text-[10px] sm:text-sm">----------------------------------------------------</p>
                        <p className="text-[10px] sm:text-sm">----------------------------------------------------</p>
                        <p className="text-[10px] sm:text-sm">------ 🚧🚧 供你看畫的「藝廊」 施工中 🚧🚧 --------</p>
                        <p className="text-[10px] sm:text-sm">----------------------------------------------------</p>
                        <p className="text-[10px] sm:text-sm">----------------------------------------------------</p>
                        <p className="text-[10px] sm:text-sm">----------------------------------------------------</p>
                        <p className="text-[10px] sm:text-sm">----------------------------------------------------</p>
                        <p className="text-[10px] sm:text-sm">----------------------------------------------------</p>
                        <p className="text-[10px] sm:text-sm">--------------</p>
                        <p className="text-[10px] sm:text-sm">--------------</p>
                        <p className="text-[10px] sm:text-sm">--------------</p>
                        <p className="text-[10px] sm:text-sm">--------------</p>
                        <p className="text-[10px] sm:text-sm">--------------</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ArtGalleryPage;  