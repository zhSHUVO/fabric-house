import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    const emailRef = useRef("");
    const passRef = useRef("");
    const confirmRef = useRef("");

    const reg = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirm = confirmRef.current.value;
        console.log(email, pass, confirm);
    };

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h2 className="form-title mb-4">Register</h2>
                <Form onSubmit={reg} className="mb-2">
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
                    <Form.Group
                        className="mb-4"
                        controlId="formGroupConfirmPassword"
                    >
                        <Form.Control
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
