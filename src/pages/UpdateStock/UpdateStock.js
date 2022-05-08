import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./UpdateStock.css";

const UpdateStock = () => {
    const { dressId } = useParams();
    const restockRef = useRef("");

    const [dress, setDress] = useState([]);
    useEffect(() => {
        const url = `https://obscure-earth-50907.herokuapp.com/dress/${dressId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDress(data));
    }, []);

    const [count, setCount] = useState([]);
    useEffect(() => {
        const url = `https://obscure-earth-50907.herokuapp.com/dress/${dressId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCount(data.quantity));
    }, []);

    const updateRestock = (event) => {
        event.preventDefault();
        const restock = parseInt(restockRef.current.value);
        const updatedQuentity = count + restock;
        setCount(updatedQuentity);
        const updatedQuentityValue = { updatedQuentity };

        const url = `https://obscure-earth-50907.herokuapp.com/dress/${dressId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedQuentityValue),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("value updated", data);
            });
    };

    const updateDelivered = (event) => {
        event.preventDefault();
        const updatedQuentity = count - 1;
        setCount(updatedQuentity);
        const updatedQuentityValue = { updatedQuentity };
        const url = `https://obscure-earth-50907.herokuapp.com/dress/${dressId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedQuentityValue),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("delivary success", data);
            });
    };

    return (
        <div>
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
                            onClick={updateDelivered}
                            className="details-btn border-0 pt-2 mt-3 pb-2 ps-3 pe-3"
                        >
                            Delivered
                        </button>
                    </div>
                </div>
            </div>
            <div className="container w-50 mt-5">
                <div className="row ">
                    <div className="col">
                        <h5 className="text-center">Restock Item</h5>
                        <Form className="text-center  mb-2">
                            <Form.Group
                                className="mb-2"
                                controlId="formRestock"
                            >
                                <Form.Control
                                    className="text-center w-75 d-inline"
                                    ref={restockRef}
                                    type="number"
                                    placeholder="Amount"
                                    required
                                />
                            </Form.Group>
                            <button
                                onClick={updateRestock}
                                className="border-0 pt-2 pb-2 ps-3 pe-3"
                            >
                                Restock
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
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

export default UpdateStock;
