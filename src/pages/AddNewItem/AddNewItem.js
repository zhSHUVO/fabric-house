import React, { useRef } from "react";
import { Form } from "react-bootstrap";

const AddNewItem = () => {
    const itemRef = useRef("");
    const imgRef = useRef("");
    const priceRef = useRef("");
    const availableRef = useRef("");
    const desRef = useRef("");
    const supplierRef = useRef("");

    const addItem = (event) => {
        event.preventDefault();
        const name = itemRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;
        const quantity = availableRef.current.value;
        const description = desRef.current.value;
        const supplier = supplierRef.current.value;
        const dress = { name, img, description, price, quantity, supplier };

        fetch("http://localhost:5000/dress", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(dress),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("success", data);
            });
    };

    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form pt-4">
                <h2 className="form-title mb-4">Add New Item</h2>
                <Form onSubmit={addItem} className="mb-2">
                    <Form.Group className="mb-4" controlId="formItemName">
                        <Form.Control
                            ref={itemRef}
                            className="w-75 d-inline"
                            type="text"
                            placeholder="Item Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formImageURL">
                        <Form.Control
                            ref={imgRef}
                            className="w-75 d-inline"
                            type="text"
                            placeholder="Item Image Url"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formItemPrice">
                        <Form.Control
                            ref={priceRef}
                            className="w-75 d-inline"
                            type="number"
                            placeholder="Item Price"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formCurrentStock">
                        <Form.Control
                            ref={availableRef}
                            className="w-75 d-inline"
                            type="number"
                            placeholder="Available Pieces"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-4"
                        controlId="formItemDescription"
                    >
                        <Form.Control
                            ref={desRef}
                            className="w-75 d-inline"
                            type="text"
                            placeholder="Item Description"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formItemSupplier">
                        <Form.Control
                            ref={supplierRef}
                            className="w-75 d-inline"
                            type="text"
                            placeholder="Item Supplier"
                            required
                        />
                    </Form.Group>

                    <button className="border-0 pt-2  pb-2 ps-3 pe-3">
                        Add To Database
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default AddNewItem;
