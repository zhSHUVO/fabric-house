import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useDress from "../../../hooks/useDress";
import "./ManageInventory.css";

const ManageInventory = ({ dress }) => {
    const [dresses, setDresses] = useDress();

    const deleteItem = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            console.log("deleting ", id);
            const url = `http://localhost:5000/dress/${id}`;

            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = dresses.filter(
                            (dress) => dress._id !== id
                        );
                        setDresses(remaining);
                    }
                });
        }
    };
    return (
        <div>
            <div className="p-3 text-center">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="hidden-column">Id</th>
                            <th>Name</th>
                            <th className="hidden-column">Image</th>
                            <th className="hidden-column">Price</th>
                            <th>Quantity</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dresses.map((dress) => (
                            <tr key={dress._id}>
                                <td className="hidden-column">{dress._id}</td>
                                <td>{dress.name}</td>
                                <td className="img-table hidden-column">
                                    <img
                                        className="w-25"
                                        src={dress.img}
                                        alt=""
                                    />
                                </td>
                                <td className="hidden-column">{dress.price}</td>
                                <td>{dress.quantity}</td>
                                <td>
                                    <button
                                        onClick={() => deleteItem(dress._id)}
                                        className="border-0"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <div className="text-center">
                <Link to="/addnewitem">
                    <button className="manage-btn border-0 mt-3 pt-2 pb-2 ps-3 pe-3">
                        Add New Item
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ManageInventory;
