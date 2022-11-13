import React from "react";
import useDress from "../../../hooks/useDress";
import SingleDress from "../SingleDress/SingleDress";
import "./DisplayItems.css";

const DisplayItems = () => {
    const [dresses] = useDress();
    return (
        <div>
            <h1 className="text-center">Featured Items</h1>
            <div className="container">
                <div className="row">
                    {dresses.slice(0, 6).map((dress) => (
                        <div key={dress._id} className="col-lg-4">
                            <SingleDress dress={dress}></SingleDress>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisplayItems;
