import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="text-center">
            <a href="#" className="link-secondary ">
                Home
            </a>
            <a href="#" className="link-secondary">
                Items
            </a>
            <a href="#" className="link-secondary">
                About
            </a>
            <a href="#" className="link-secondary">
                Blogs
            </a>
            <hr className="mx-auto w-50" />
            <p>
                {" "}
                <FaRegCopyright className="react-icon"></FaRegCopyright>{" "}
                {getCurrentYear()} Fabric Store, Inc
            </p>
        </footer>
    );
};

export default Footer;
