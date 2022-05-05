import React from "react";
import useDress from "../../../hooks/useDress";
import SingleDress from "../SingleDress/SingleDress";

const AllItems = () => {
    const [dresses, setDresses] = useDress();
    return (
        <div>
            <h1 className="text-center">Featured Items</h1>
            <div className="container">
                <div className="row">
                    {dresses.map((dress) => (
                        <div key={dress._id} className="col-lg-4">
                            <SingleDress dress={dress}></SingleDress>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllItems;
