import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const emailRef = useRef("");
    const passRef = useRef("");

    const login = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(email, pass);
    };

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h2 className="form-title mb-4">Login</h2>
                <Form onSubmit={login} className="mb-2">
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Control
                            ref={emailRef}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupPassword">
                        <Form.Control
                            ref={passRef}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>

                    <button className="border-0 pt-2 mt-3 pb-2 ps-3 pe-3">
                        Login
                    </button>
                </Form>

                <Link
                    className="text-decoration-none text-danger"
                    to="/reset-pass"
                >
                    Forgot Password?
                </Link>

                <p className="mt-3">
                    New User? <br />
                    <Link
                        className="text-decoration-none text-danger"
                        to="/register"
                    >
                        SignUp
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
