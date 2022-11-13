import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebaseinit";
import google from "../../../images/google.png";
import "./SocialLogin.css";

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        const email = user.user.email;
        const url = "http://localhost:5000/login";
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
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="bg-danger horizontal-bar"></div>
                <p className="mt-2 px-2">or</p>
                <div className="bg-danger horizontal-bar"></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="border border-danger rounded  d-block mx-auto m-2 pt-2 pb-2 ps-5 pe-5 bg-light"
                >
                    <img style={{ width: "30px" }} src={google} alt="" />

                    <span className="px-2">Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
