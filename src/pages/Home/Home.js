import React from "react";
import banner from "../../images/banner.jpg";
import DisplayItems from "./DisplayItems/DisplayItems";

const Home = () => {
    return (
        <div>
            <img
                className="rounded img-fluid pt-3 pb-3 mx-auto d-block"
                src={banner}
                alt=""
            />
            <DisplayItems></DisplayItems>
        </div>
    );
};

export default Home;
