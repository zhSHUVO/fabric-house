import React from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebaseinit";

const Authorized = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

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

    if (!user) {
        return (
            <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }

    return children;
};

export default Authorized;
