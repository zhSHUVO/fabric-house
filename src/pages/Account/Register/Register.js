import React, { useRef } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebaseinit";

const Register = () => {
    const emailRef = useRef("");
    const passRef = useRef("");
    const confirmRef = useRef("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

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

    const reg = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirm = confirmRef.current.value;
        createUserWithEmailAndPassword(email, pass);
    };

    if (user) {
        navigate("/home");
    }

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h2 className="form-title mb-4">Register</h2>
                <Form onSubmit={reg} className="mb-2">
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
                    <Form.Group
                        className="mb-4"
                        controlId="formGroupConfirmPassword"
                    >
                        <Form.Control
                            className="w-75 d-inline"
                            ref={confirmRef}
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                    </Form.Group>

                    <button className="border-0 pt-2 mt-3 pb-2 ps-3 pe-3">
                        Register
                    </button>
                </Form>

                <p className="mt-3">
                    Already have an account? <br />
                    <Link
                        className="text-decoration-none text-danger"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
