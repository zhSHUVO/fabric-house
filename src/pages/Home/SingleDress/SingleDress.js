import React from "react";
import { Card } from "react-bootstrap";
import "./SingleDress.css";

const SingleDress = (props) => {
    const { name, img, price, quantity, description } = props.dress;
    return (
        <div>
            <Card className="m-5 pt-3" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>Available: {quantity} pieces</Card.Text>
                    <button className="border-0 pt-2 pb-2 ps-3 pe-3">
                        Update
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleDress;
