import Nav from "../components/Nav"
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <div className="relative">
            <Nav />
            <HomeBody />
            <Footer />
        </div>
    );
}

export default HomePage;