import './footer.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <Container className='p-5 footer-section'>
                <Row >
                    <Col xs={12} md={2} >
                        <Container className='footer-about'>
                            <h4 className='text-white'>Company</h4>
                            <ul>
                                <li><Link className='link' to={"/about"}>About</Link></li>
                                <li><Link className='link'>Jobs</Link></li>
                                <li><Link className='link'>For the Record</Link></li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={"12"} md={"2"}>
                        <Container className="footer-communities">
                            <h4 className='text-white'>Communities</h4>
                            <ul>
                                <li><Link className='link' to={"/about"}>For Artists</Link></li>
                                <li><Link className='link'>Developers</Link></li>
                                <li><Link className='link'>Advertising</Link></li>
                                <li><Link className='link'>Investors</Link></li>
                                <li><Link className='link'>Vendors</Link></li>
                                <li><Link className='link'>Spotify for Work</Link></li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={"12"} md={"2"}>
                        <Container className="footer-usefull-links">
                            <h4 className='text-white'>Usefull Link</h4>
                            <ul>
                                <li><Link className='link' to={"/about"}>Support</Link></li>
                                <li><Link className='link'>Free Mobile App</Link></li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={"12"} md={"6"}>
                        <div className='footer-icon d-flex justify-content-end align-items-center gap-4 mt-3 me-5'>
                            <div className='rounded-circle p-2 text-white light-bg'><AiOutlineInstagram size={24} /></div>
                            <div className='rounded-circle p-2 text-white light-bg'><AiOutlineTwitter size={24} /></div>
                            <div className='rounded-circle p-2 text-white light-bg'><FaFacebook size={24} /></div>
                        </div>
                    </Col>
                    <hr />
                </Row>

                <Container fluid className='mt-2 mb-5' >

                    {/* <div>
                        <p >© 2023 Spotify Clone</p>
                    </div> */}
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <p className='me-3'><span>Legal</span></p>
                            <p className='me-3'><span>Privacy Policy</span></p>
                            <p className='me-3'><span>Privacy Center</span></p>
                            <p className='me-3'><span>Cookies</span></p>
                            <p className='me-3'><span>About Ads</span></p>
                        </div>
                        <div className=''>
                            <span>© 2023 Spotify Clone</span>
                        </div>

                    </div>
                </Container>
            </Container>

        </>)
}

export default Footer