import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SingleDress.css";

const SingleDress = ({ dress }) => {
    const { _id, name, img, price, quantity, description } = dress;
    const navigate = useNavigate();
    const goToDetails = (id) => {
        navigate(`/dress/${id}`);
    };
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>Available: {quantity} pieces</Card.Text>
                    <div className="d-flex justify-content-center align-items-end">
                        <button
                            onClick={() => goToDetails(_id)}
                            className="border-0 pt-2 mt-3 pb-2 ps-3 pe-3"
                        >
                            Update Stock
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleDress;
