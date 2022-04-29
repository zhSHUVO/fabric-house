import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="text-center">
            <Link to="/">Home</Link>
            <Link to="/myitems">My Items</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>

            <hr className="mx-auto w-50" />
            <p>
                {" "}
                <FaRegCopyright className="react-icon"></FaRegCopyright>{" "}
                {getCurrentYear()} Fabric House, Inc
            </p>
        </footer>
    );
};

export default Footer;
