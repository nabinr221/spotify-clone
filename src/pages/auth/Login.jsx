import './auth.css'
import { Container, Navbar, NavbarBrand } from "reactstrap"
import brandImg from '../../assets/Image/SpotifyLogo.png'
// import CustomForm from '../../components/form/CustomForm'
import { Link } from 'react-router-dom'
import googleLogo from "../../assets/Image/google.png"
import fbLogo from "../../assets/Image/facebook.png"
import appleLogo from "../../assets/Image/apple.png"
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { AiOutlineEyeInvisible } from 'react-icons/ai'




const Login = () => {
    const [state, setState] = useState(true);
    return (

        <>
            <div>
                <Navbar className="p-4 color-dark" >
                    <NavbarBrand href="/">
                        <img
                            alt="logo"
                            style={{
                                marginLeft: ".9rem",
                                height: 39,
                                width: "auto"
                            }}
                            src={brandImg}
                        />
                    </NavbarBrand>
                </Navbar>
                <div className="main-container ">
                    <div className='form-container'>
                        <h1 className='text-center'>Log in to Spotify </h1>
                        <Container className='social-media'>
                            <div className='media-btn rounded-pill p-2 px-4 mt-5 mb-2'>
                                <Link className='link d-flex align-items-center gap-4 text-white'>
                                    <img src={googleLogo} alt="" width={30} />
                                    <span className='fw-bold'>Continue with Google</span></Link>
                            </div>
                            <div className='media-btn rounded-pill p-2 px-4 mb-2'>
                                <Link className='link d-flex align-items-center gap-4 text-white'>
                                    <img src={fbLogo} alt="" width={30} />
                                    <span className='fw-bold'>Continue with Google</span></Link>
                            </div>
                            <div className='media-btn rounded-pill p-2 px-4'>
                                <Link className='link d-flex align-items-center gap-4 text-white'>
                                    <img src={appleLogo} alt="" width={30} />
                                    <span className='fw-bold'>Continue with Google</span></Link>
                            </div>
                        </Container>

                        <hr />
                        <Container className='social-media'>
                            <Form >
                                <FormGroup >
                                    <Label
                                        for="exampleEmail"
                                        size="sm"
                                        className='text-white fw-600 fs-6 form-lable'
                                    >
                                        Email or username
                                    </Label>

                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Email or username"
                                        type="email"
                                        className='input-box '
                                    />

                                </FormGroup>
                                <FormGroup >
                                    <Label
                                        for="exampleEmail"
                                        size="sm"
                                        className='text-white form-lable'
                                    >
                                        Password
                                    </Label>

                                      <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Email or username"
                                        type="email"
                                        className='input-box'
                                    />
                                     
                                </FormGroup>
                                <FormGroup switch className='mb-3'>
                                    <Input
                                        type="switch"
                                        checked={state}
                                        onClick={() => {
                                            setState(!state);
                                        }}
                                    />
                                    <Label className='text-white ms-2' check>Remember me</Label>
                                  
                                </FormGroup>
                                <button className='btns mt-1 mb-3 rounded-pill w-100 fs-6 p-2 text-black fw-bold'>
                                    Log in
                                </button>
                            </Form>
                            <p className='text-center secondary-color'><Link className='text-white  '>Forget your password?</Link></p>
                        </Container>
                        <hr />
                        <Container className='w-75'>
                            <span className='text-center primary-color fs-6 '> Don't have an account?<Link to={"/login"} className='ms-2 text-white     '>Sign up for Spotify</Link></span>
                        </Container>
                    </div>
                </div >
            </div >
        </>
    )
}
export default Login