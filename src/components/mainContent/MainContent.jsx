import Navbar from '../navbar/Navbar'
import './mainContent.css'
import CardsContainer from '../CardContainer/CardContainer'
import Footer from '../footer/Footer'
const MainContent = () => {
    return (
        <>
            <div className="main-content">
                <Navbar />
                <CardsContainer containerTitle={"Foucs"} />
                <CardsContainer containerTitle={"Spotify Playlist"} />
                <Footer />
            </div>
        </>


    )
}

export default MainContent