import Nav from "../components/Nav"
import Footer from "../components/Footer";
import TeamBody from "../components/TeamBody";

function TeamPage() {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300">
                <Nav />
            </div>
            <div className="mt-20">
                <TeamBody />
            </div>
            <Footer />
        </div>
    );
}

export default TeamPage;  