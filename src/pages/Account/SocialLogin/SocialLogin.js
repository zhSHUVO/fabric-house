import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebaseinit";
import google from "../../../images/google.png";
import "./SocialLogin.css";

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    if (user) {
        navigate(from, { replace: true });
        console.log(user);
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
