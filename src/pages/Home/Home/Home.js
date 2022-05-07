import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.jpg";
import truck from "../../../images/delivery-truck.png";
import quality from "../../../images/quality.png";
import cost from "../../../images/save-money.png";
import DisplayItems from "../DisplayItems/DisplayItems";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <img
                className="rounded img-fluid pt-3 pb-3 mx-auto d-block"
                src={banner}
                alt=""
            />
            <DisplayItems></DisplayItems>
            <div className="text-center">
                <Link to="/allitems">
                    <button className="manage-btn border-0 mt-5 pt-2 pb-2 ps-3 pe-3">
                        All Items
                    </button>
                </Link>
            </div>
            <div className="text-center">
                <Link to="/manageinventory">
                    <button className="manage-btn border-0 mt-3 pt-2 pb-2 ps-3 pe-3">
                        Manage Inventory
                    </button>
                </Link>
            </div>

            <Container className="text-center mt-5 mb-5">
                <h1>WHY US</h1>
                <Row>
                    <Col sm={6}>
                        <img src={truck} className="w-25" alt="" />
                        <h3>On Time Delivary</h3>
                        <p>
                            We care We listen We deliver. Time is gold. We
                            deliver it to you without wasting a second and this
                            is our goal.
                        </p>
                    </Col>
                    <Col sm={6}>
                        <img src={quality} className="w-25 " alt="" />
                        <h3>Quality Assurance</h3>
                        <p>
                            A good reputation is a sensation Quality is a
                            priority Quality is the only focus It is what
                            matters. Our product is the best quality product.
                        </p>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col sm={6}>
                        <img src={cost} className="w-25" alt="" />
                        <h3>Substantial Cost Savings</h3>
                        <p>
                            Its not about how much money you make, its how much
                            you save of it! .We Sell the best quality product in
                            reasonable price.
                        </p>
                    </Col>
                    <Col sm={6}>
                        <img src={quality} className="w-25" alt="" />
                        <h3>Quality Assurance</h3>
                        <p>
                            A good reputation is a sensation. Quality is a
                            priority. Quality is the only focus. It is what
                            matters. Our product best quality product.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
