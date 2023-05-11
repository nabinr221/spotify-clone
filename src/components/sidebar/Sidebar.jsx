import { NavLink } from 'react-router-dom';
import logo from '../../assets/Image/SpotifyLogo.png'
import './sidebar.css'
import { TfiHeart } from 'react-icons/tfi'
import { BiHome } from "react-icons/bi"
import { BsSearch } from 'react-icons/bs'
import { FiPlusSquare } from 'react-icons/fi'
import { VscLibrary } from 'react-icons/vsc'
import { AiOutlineGlobal } from 'react-icons/ai'
import { Container } from 'reactstrap'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container position-fixed">
        <Container fluid>

          <div className='sidebar-menu '>
            <div className="logo">
              <img src={logo} alt="" width={130} />
            </div>

            <ul>
              <li className='active'><BiHome size={24} className='sidebar-icon' />  Home   </li>
              <li><BsSearch size={24} className='sidebar-icon' />  Search  </li>
              <li><VscLibrary size={24} className='sidebar-icon' />  Your Library   </li>

            </ul>
            <ul>
              <li><FiPlusSquare size={24} className='sidebar-icon' />Create Playlist</li>
              <li><TfiHeart size={24} className='sidebar-icon' /> Liked Songs</li>
              <hr />
            </ul>
          </div>
          <div className='sidebar-footer'>
            <div className='sidebar-content '>
              <span>Legal</span>
              <span>Privacy Policy</span>
              <span>Privacy Center</span>
              <span>Cookies</span>
              <span>About ads</span>
              <span>Cookies</span>
            </div>
            <div className='footer-language'>
              <AiOutlineGlobal size={24} /><span>English</span>
            </div>
          </div>
        </Container>
      </div>

    </>



  );
};

export default Sidebar;
