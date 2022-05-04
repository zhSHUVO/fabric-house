import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Restock.css";

const Restock = () => {
    const restockRef = useRef("");
    const { dressId } = useParams();

    const updateRestock = (event) => {
        event.preventDefault();
        const restock = restockRef.current.value;
        console.log(restock, typeof restock);
        const updateRestockValue = { restock };
        const url = `http://localhost:5000/dress/${dressId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateRestockValue),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("value updated", data);
            });
    };

    return (
        <div className="container w-50 mt-5">
            <div className="row ">
                <div className="col">
                    <h5 className="text-center">Restock Item</h5>
                    <Form className="text-center  mb-2">
                        <Form.Group className="mb-2" controlId="formRestock">
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
    );
};

export default Restock;
