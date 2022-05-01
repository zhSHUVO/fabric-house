import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./DressDetails.css";

const DressDetails = () => {
    const { dressId } = useParams();
    const [dress, setDress] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/dress/${dressId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDress(data));
    }, []);

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="text-center col-lg-6 col-sm-12">
                        <img className=" w-75" src={dress.img} alt="" />
                    </div>
                    <div className="text-center pt-5 col-lg-6 col-sm-12">
                        <p>{dress.name}</p>
                        <p>{dress.description}</p>
                        <p>Price: {dress.price}</p>
                        <p>Available: {dress.quantity} pieces</p>
                        <button className="details-btn border-0 pt-2 mt-3 pb-2 ps-3 pe-3">
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
                                    type="text"
                                    placeholder="Amount"
                                    required
                                />
                            </Form.Group>
                            <button className="border-0 pt-2 pb-2 ps-3 pe-3">
                                Restock
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DressDetails;
