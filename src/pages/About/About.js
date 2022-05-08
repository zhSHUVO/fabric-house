import React from "react";
import warehouse from "../../images/warehouse.jpg";
import "./About.css";

const About = () => {
    return (
        <div className="d-flex justify-content-center p-5">
            <div className="col-lg-6 col-sm-12">
                <h1 className="text-center">
                    {" "}
                    <span>Fabric House</span>
                </h1>
                <div className="text-center ">
                    <img className="w-75 p-3" src={warehouse} alt="" />
                    <p>
                        <span>Street:</span>114/g, moneshwar road, jhigatala,
                        1209
                    </p>
                    <p>
                        <span>City:</span>Dhaka
                    </p>
                    <p>
                        <span>State/province/area:</span>Dhaka
                    </p>
                    <p>
                        <span>Phone number:</span>+8801672255111
                    </p>
                    <p>
                        <span>Zip code:</span>1209
                    </p>
                    <p>
                        <span>Zip code:</span>1209
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
