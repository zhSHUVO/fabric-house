import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useItem from "../../../hooks/useItem";

const MyItems = () => {
    const [item, setItem] = useItem([]);

    const deleteItem = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            console.log("deleting ", id);
            const itemUrl = `https://fabric-house-server.onrender.com/item/${id}`;

            fetch(itemUrl, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = item.filter(
                            (item) => item._id !== id
                        );
                        setItem(remaining);
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
                            <th className="hidden-column">Supplier</th>
                            <th className="hidden-column">Image</th>
                            <th className="hidden-column">Price</th>
                            <th>Quantity</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.map((item) => (
                            <tr key={item._id}>
                                <td className="hidden-column">{item._id}</td>
                                <td>{item.name}</td>
                                <td className="hidden-column">
                                    {item.supplier}
                                </td>
                                <td className="img-table hidden-column">
                                    <img
                                        className="w-25"
                                        src={item.img}
                                        alt=""
                                    />
                                </td>
                                <td className="hidden-column">{item.price}$</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button
                                        onClick={() => deleteItem(item._id)}
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

export default MyItems;
