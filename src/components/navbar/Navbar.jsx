import './navbar.css'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
const Navbar = () => {
    return (
        <>
            <div className='custom-navbar sticky-top d-flex justify-content-between align-items-center'>
                <div className='navbar-left d-flex align-items-center gap-3'  >
                    <div className='previous-arrow d-flex justify-content-center align-items-center'>
                        <MdOutlineArrowBackIosNew size={18} />
                    </div>
                    <div className='next-arrow d-flex justify-content-center align-items-center'>
                        <MdOutlineArrowForwardIos size={18} />
                    </div>
                </div >
                <div className='mr-5 d-flex gap-4 align-item-center'>
                    <div className='p-2 sign-up '>
                        <NavLink className='link text-white'>Sign up</NavLink>
                    </div>
                    <div className='border rounded-pill p-2 bg-white text-dark login '>
                        <NavLink to={'/login'} className='text-dark link'>Login</NavLink>
                    </div>
                </div>
                {/* <div>
                    <BiMenu />
                </div> */}
            </div>
        </>
    )
}

export default Navbar