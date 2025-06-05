import Nav from "../components/Nav"
import Footer from "../components/Footer";
import FanClubBody from "../components/FanClubBody";
function FanClubPage() {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300">
                <Nav />
            </div>
            <div className="mt-20">
                <FanClubBody />
            </div>
            <Footer />
        </div>
    );
}

export default FanClubPage;  