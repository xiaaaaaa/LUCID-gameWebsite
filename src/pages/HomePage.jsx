import Nav from "../components/Nav"
import HomeBody from "../components/HomeBody";

import Footer from "../components/Footer";

function HomePage() {
    return (
        <div className="relative">
            <Nav />
            <div className="content-container relative z-0">
                <HomeBody />
            </div>
            <div className="relative z-10">

                <Footer />
            </div>
        </div>
    );
}

export default HomePage;