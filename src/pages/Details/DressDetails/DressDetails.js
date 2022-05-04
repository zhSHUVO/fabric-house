import React from "react";
import { Link } from "react-router-dom";
import Deliver from "../Delivare/Deliver";
import Restock from "../Restock/Restock";
import "./DressDetails.css";

const DressDetails = () => {
    return (
        <div>
            <Deliver></Deliver>
            <Restock></Restock>

            <div className="text-center">
                <Link to="/manageinventory">
                    <button className="manage-btn border-0 mt-5 pt-2 pb-2 ps-3 pe-3">
                        Manage Inventory
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DressDetails;
