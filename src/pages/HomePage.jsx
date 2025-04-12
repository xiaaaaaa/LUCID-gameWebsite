import Nav from "../components/Nav"
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <div className="relative">
            <Nav />
            <div className="content-container">
                <HomeBody />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;