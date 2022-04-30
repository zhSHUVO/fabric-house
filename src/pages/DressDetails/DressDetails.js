import React from "react";
import { useParams } from "react-router-dom";

const DressDetails = () => {
    const { dressId } = useParams();
    return (
        <div>
            <h1>Details of {dressId}</h1>
        </div>
    );
};

export default DressDetails;
