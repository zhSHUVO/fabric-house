import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Deliver.css";

const Deliver = () => {
    const { dressId } = useParams();

    const [dress, setDress] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/dress/${dressId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDress(data));
    }, []);

    const [count, setCount] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/dress/${dressId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCount(data.quantity));
    }, []);

    const decreaseStock = (event) => {
        setCount(count - 1);
        event.preventDefault();

        console.log(count, typeof count);
        const updateDeliveredValue = { count };
        const url = `http://localhost:5000/dress/${dressId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateDeliveredValue),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("delivered", data);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="text-center col-lg-6 col-sm-12">
                    <img className=" w-75" src={dress.img} alt="" />
                </div>
                <div className="text-center pt-5 col-lg-6 col-sm-12">
                    <p>Id: {dress._id}</p>
                    <p>{dress.name}</p>
                    <p>{dress.description}</p>
                    <p>Price: {dress.price}$</p>
                    <p>Available: {count} pieces</p>
                    <p>Supplier: {dress.supplier}</p>
                    <button
                        onClick={decreaseStock}
                        className="details-btn border-0 pt-2 mt-3 pb-2 ps-3 pe-3"
                    >
                        Delivered
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deliver;
