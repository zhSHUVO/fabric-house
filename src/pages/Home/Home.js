import React from "react";
import banner from "../../images/banner.jpg";
import DisplayItems from "./DisplayItems/DisplayItems";
import "./Home.css"

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
                <button className="border-0 pt-2 pb-2 ps-3 pe-3">Manage Inventory</button>
            </div>
        </div>
    );
};

export default Home;
