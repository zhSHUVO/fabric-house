import React from "react";

const SingleDress = (props) => {
    const { name, img, price, quantity, description } = props.dress;
    return (
        <div>
            <div>
                <p>{name}</p>
                <img src={img} alt="" />
                <p>Price: {price}$</p>
                <p>Available: {quantity} pieces</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleDress;
