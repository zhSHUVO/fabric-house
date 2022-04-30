import React from "react";
import useDress from "../../../hooks/useDress";
import SingleDress from "../SingleDress/SingleDress";
import "./DisplayItems.css";

const DisplayItems = () => {
    const [dresses, setDresses] = useDress();
    return (
        <div>
            <h1>Display {dresses.length} items</h1>

            <div className="container">
                <div className="row">
                    {dresses.slice(0, 6).map((dress) => (
                        <div key={dress._id} className="col-sm-6 col-lg-4">
                            <SingleDress dress={dress}></SingleDress>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisplayItems;
