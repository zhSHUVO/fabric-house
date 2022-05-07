// import React from "react";
// import { Card, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const SingleMyItem = ({ item }) => {
//     const { _id, name, userMail, img, price, quantity, description, supplier } =
//         item;

//     return (
//         // <div>
//         //     <Card>
//         //         <Card.Img variant="top" src={img} />
//         //         <Card.Body>
//         //             <Card.Title>Id: {_id}</Card.Title>
//         //             <Card.Title>{name}</Card.Title>
//         //             <Card.Title>{userMail}</Card.Title>
//         //             <Card.Text>{description}</Card.Text>
//         //             <Card.Text>Price: {price}$</Card.Text>
//         //             <Card.Text>Available: {quantity} pieces</Card.Text>
//         //             <Card.Text>Supplier: {supplier}</Card.Text>
//         //         </Card.Body>
//         //     </Card>
//         // </div>
//         <div>
//             <div className="p-3 text-center">
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th className="hidden-column">Id</th>
//                             <th>Name</th>
//                             <th className="hidden-column">Supplier</th>
//                             <th className="hidden-column">Image</th>
//                             <th className="hidden-column">Price</th>
//                             <th>Quantity</th>
//                             <th>Operation</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {dresses.map((dress) => (
//                             <tr key={dress._id}>
//                                 <td className="hidden-column">{dress._id}</td>
//                                 <td>{dress.name}</td>
//                                 <td className="hidden-column">
//                                     {dress.supplier}
//                                 </td>
//                                 <td className="img-table hidden-column">
//                                     <img
//                                         className="w-25"
//                                         src={dress.img}
//                                         alt=""
//                                     />
//                                 </td>
//                                 <td className="hidden-column">
//                                     {dress.price}$
//                                 </td>
//                                 <td>{dress.quantity}</td>
//                                 <td>
//                                     <button
//                                         onClick={() => deleteItem(dress._id)}
//                                         className="border-0"
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </div>

//             <div className="text-center">
//                 <Link to="/addnewitem">
//                     <button className="manage-btn border-0 mt-3 pt-2 pb-2 ps-3 pe-3">
//                         Add New Item
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default SingleMyItem;
