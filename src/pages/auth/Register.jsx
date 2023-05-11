import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import blackLogo from "../../assets/Image/Spotify-black.png";
import googleLogo from "../../assets/Image/google.png";
import fbLogo from "../../assets/Image/facebook.png";
import fbWhiteLogo from "../../assets/Image/fb-white.png";

import { Link } from "react-router-dom";
import "./auth.css";
import brandImg from "../../assets/Image/SpotifyLogo.png";
// import { AiOutlineEyeInvisible } from 'react-icons/ai'

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Register = () => {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        password: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
    });
    // const [state, setState] = useState(true);

    return (
        <>
            <Container className=" w-50 mx-auto ">
                <Container className="register-form-container w-100 mx-auto">
                    <Container className="text-center">
                        <img src={blackLogo} alt="" width={150} className="my-5" />
                        <h4 className="fw-bold fs-3">
                            Sign up for free to start listening.
                        </h4>
                    </Container>

                    <Container className="social-media">
                        <div className="media-btn bg-primary rounded-pill mt-4 mb-3 p-2 px-4 ">
                            <Link className="link d-flex align-items-center gap-4 text-white">
                                <img src={fbWhiteLogo} alt="" width={50} />
                                <span className="fw-bold">Continue with Google</span>
                            </Link>
                        </div>
                        <div className="media-btn rounded-pill p-2 px-4 ">
                            <Link className="link d-flex align-items-center gap-4 text-dark">
                                <img src={googleLogo} alt="" width={30} />
                                <span className="fw-bold">Continue with Google</span>
                            </Link>
                        </div>
                        <div className="mt-4">
                            {" "}
                            <hr />
                        </div>
                    </Container>

                    <Container fluid className="w-75 my-4 px-5">
                        <h4 className="fw-bold mb-4">Sign up with your email address</h4>
                        <Formik
                            // initialValues={{
                            //     email: '',
                            //     password: '',
                            //     name: '',
                            //     day: '',
                            //     month: '',
                            //     year: '',
                            //     gender: '',
                            //     // day:'',
                            //     // day:'',
                            // }}
                            validationSchema={SignupSchema}
                            onSubmit={(values) => {
                                // same shape as initial values
                                console.log(values);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    {/*   </div> */}
                                    <div className="register-form-grp my-2 d-flex flex-column">
                                        <label className="dark-color text-bold-600 mb-2"> What's your email?</label>
                                        <Field name="email" placeholder="Enter your Email." className="register-input p-2" />
                                        {/* {errors.name && touched.name ? (
                                            <div>{errors.name}</div>
                                        ) : null} */}
                                    </div>
                                    <div className="register-form-grp d-flex flex-column my-3">
                                        <label className="dark-color text-bold-600 mb-2">Create a password</label>
                                        <Field type="password" name="password" placeholder="Create a password." className="register-input p-2" />
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div className="register-form-grp d-flex flex-column my-3">
                                        <label className="dark-color text-bold-600 mb-2">What should we call you?</label>
                                        <Field name="name" placeholder="Enter a profile Name" className="register-input p-2" />
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <span className="text-dark text-bold-600" >What is Your Birthday?</span>
                                        <Row md={3}>
                                            <Col>
                                                <div className="register-form-grp d-flex flex-column my-2">
                                                    <label className="dark-color text-bold-400 mb-2">Day</label>
                                                    <Field name="name" placeholder="DD" className="register-input p-2" />
                                                    {errors.password && touched.password ? (
                                                        <div>{errors.password}</div>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="register-form-grp d-flex flex-column my-2">
                                                    <label className="dark-color text-bold-400 mb-2">Month</label>
                                                    <Field name="colors" as="select" className="my-select register-input p-2">
                                                        <option value="">Month</option>
                                                        <option value="green">Green</option>
                                                        <option value="blue">Blue</option>
                                                    </Field>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="register-form-grp d-flex flex-column my-2">
                                                    <label className="dark-color text-bold-400 mb-2">Year</label>
                                                    <Field name="year" placeholder="YYYY" className="register-input p-2" />
                                                    {errors.year && touched.year ? (
                                                        <div>{errors.year}</div>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div role="group" aria-labelledby="my-radio-group " className="my-3 w-100">
                                        <label className="my-2 me-3">
                                            <Field className="me-2" type="radio" name="gender" value="Male" />
                                            Male
                                        </label>
                                        <label className="my-2 me-3">
                                            <Field type="radio" name="gender" value="female" />
                                            Female
                                        </label>
                                        <label className="my-2 me-3">
                                            <Field className="me-2" type="radio" name="gender" value="non-binary" />
                                            Non-binary
                                        </label>
                                        <label className="my-2 me-3">
                                            <Field className="me-2" type="radio" name="gender" value="other" />
                                            Other
                                        </label>
                                        <label className="my-2 me-3">
                                            <Field className="me-2" type="radio" name="gender" value="" />
                                            Prefer not to say                                        </label>
                                    </div>
                                    <div>
                                        <label className="my-2 me-3">
                                            <Field className="me-2" type="checkbox" name="terms" />
                                            Please send me news and offers from Spotify
                                        </label>
                                    </div>

                                    <div >
                                        <label className="my-2 me-3">
                                            <Field type="checkbox" className="me-2" name="terms" />
                                            Share my registration data with Spotify's content
                                            providers for marketing purposes.
                                        </label>
                                    </div>


                                    <label className="my-2 me-3">
                                        <Field className="me-2" type="checkbox" name="terms" />I agree to the
                                        Spotify Terms and Conditions of Use and Privacy Policy.{" "}
                                    </label>

                                    <button className='btns mt-4 mb-3 border-0  rounded-pill w-50 fs-6 p-2 text-black text-bold-600'>
                                        Sign up
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </Container>
                    <hr />
                    <Container className="w-50 mb-5">
                        <span className="text-center dark-color text-bold-400 fs-6 ">
                            Have an account?
                            <Link to={"/login"} className="ms-2 text-danger">
                                Login.
                            </Link>
                        </span>
                    </Container>
                </Container>
            </Container>
        </>
    );
};

export default Register;
