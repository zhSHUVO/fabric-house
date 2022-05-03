import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found text-center mt-5">
            <div>
                <h1 className="m-5">Oops!</h1>
                <h3>404 - PAGE NOT FOUND</h3>
                <p>
                    The page you're looking for isn't available or might have
                    been removed.
                </p>
            </div>
            <div className="text-center">
                <Link to="/">
                    <button className="manage-btn border-0 mt-3 pt-2 pb-2 ps-3 pe-3">
                        GO TO HOMEPAGE
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
