import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.jpg";
import DisplayItems from "../DisplayItems/DisplayItems";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <img
                className="rounded img-fluid pt-3 pb-3 mx-auto d-block"
                src={banner}
                alt=""
            />
            <DisplayItems></DisplayItems>
            <div className="text-center">
                <Link to="/manageinventory">
                    <button className="manage-btn border-0 mt-5 pt-2 pb-2 ps-3 pe-3">
                        Manage Inventory
                    </button>
                </Link>
                <Link className="p-5" to="/allitems">
                    <button className="manage-btn border-0 mt-5 pt-2 pb-2 ps-3 pe-3">
                        All Items
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
