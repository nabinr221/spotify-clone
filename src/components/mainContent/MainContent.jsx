import Navbar from '../navbar/Navbar'
import './mainContent.css'
import CardsContainer from '../CardContainer/CardContainer'
import Footer from '../footer/Footer'
import Category from '../category/Category'
const MainContent = () => {
    return (
        <>
            <div className="main-content">
                <Navbar />
                <Category />
                {/* <CardsContainer containerTitle={"Foucs"} />
                <CardsContainer containerTitle={"Spotify Playlist"} /> */}
                <Footer />
            </div>
        </>


    )
}

export default MainContent