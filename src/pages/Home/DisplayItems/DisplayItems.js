import React from "react";
import useDress from "../../../hooks/useDress";
import SingleDress from "../SingleDress/SingleDress";

const DisplayItems = () => {
    const [dresses, setDresses] = useDress();
    return (
        <div>
            <h1>Display {dresses.length} items</h1>
            {dresses.map((dress) => (
                <SingleDress key={dress._id} dress={dress}></SingleDress>
            ))}
        </div>
    );
};

export default DisplayItems;
