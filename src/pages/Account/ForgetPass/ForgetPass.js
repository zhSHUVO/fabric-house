import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebaseinit";
import "./ForgetPass.css";

const ForgetPass = () => {
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h2 className="form-title mb-4">Password Reset</h2>
                <Form>
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <button
                        onClick={async () => {
                            await sendPasswordResetEmail(email);
                            alert("Sent email");
                        }}
                        type="button"
                        className="border-0 pt-2 mt-3 pb-2 ps-3 pe-3"
                    >
                        Reset
                    </button>
                </Form>
                <p className="mt-3">
                    Back to{"  "}
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

export default ForgetPass;
