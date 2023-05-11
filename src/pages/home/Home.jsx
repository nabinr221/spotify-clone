import Sidebar from '../../components/sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'reactstrap';
import './home.css'
import MainContent from '../../components/mainContent/MainContent';
const Home = () => {
    return (
        <>
            <div className="content d-flex">
                <div className='sidebar-section position-relative'>
                    <Sidebar />
                </div>
                <div className='content-section'>
                    <MainContent />
                </div>
            </div>
        </>
    )
}

export default Home