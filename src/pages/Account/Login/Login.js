import React, { useRef } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebaseinit";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
    const emailRef = useRef("");
    const passRef = useRef("");
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, loading] =
        useSignInWithEmailAndPassword(auth);

    if (loading) {
        return (
            <div
                style={{ height: "300px" }}
                className="w-100 d-flex justify-content-center align-items-center"
            >
                <Spinner animation="border" variant="warning" />
            </div>
        );
    }

    const login = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        await signInWithEmailAndPassword(email, pass);

        const url = "https://fabric-house-server.onrender.com/login";
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.accessToken);
            });

        navigate("/home");
    };

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form pt-4">
                <h2 className="form-title mb-4">Login</h2>
                <Form onSubmit={login} className="mb-2">
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Control
                            className="w-75 d-inline"
                            ref={emailRef}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupPassword">
                        <Form.Control
                            className="w-75 d-inline"
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
                    to="/forget-pass"
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
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
