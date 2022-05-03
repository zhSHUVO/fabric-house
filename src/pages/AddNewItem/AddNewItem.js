import React from "react";
import { Form } from "react-bootstrap";

const AddNewItem = () => {
    return (
        <div className="form-container">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form pt-4">
                <h2 className="form-title mb-4">Add New Item</h2>
                <Form className="mb-2">
                    <Form.Group className="mb-4" controlId="formItemName">
                        <Form.Control
                            className="w-75 d-inline"
                            type="text"
                            placeholder="Item Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formImageURL">
                        <Form.Control
                            className="w-75 d-inline"
                            type="text"
                            placeholder="Item Image Url"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-4"
                        controlId="formItemDescription"
                    >
                        <Form.Control
                            className="w-75 d-inline"
                            type="text"
                            placeholder="Item Description"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formItemPrice">
                        <Form.Control
                            className="w-75 d-inline"
                            type="text"
                            placeholder="Available Pieces"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formCurrentStock">
                        <Form.Control
                            className="w-75 d-inline"
                            type="text"
                            placeholder="Available Pieces"
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
