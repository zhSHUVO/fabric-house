import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Authorized from "./pages/Account/Authorized/Authorized";
import ForgetPass from "./pages/Account/ForgetPass/ForgetPass";
import Login from "./pages/Account/Login/Login";
import Register from "./pages/Account/Register/Register";
import AddNewItem from "./pages/AddNewItem/AddNewItem";
import Blogs from "./pages/Blogs/Blogs";
import DressDetails from "./pages/DressDetails/DressDetails";
import Home from "./pages/Home/Home/Home";
import ManageInventory from "./pages/Home/ManageInventory/ManageInventory";
import ManageItems from "./pages/ManageItems/ManageItems";
import MyItems from "./pages/MyItems/MyItems";
import NotFound from "./pages/Universal/404/NotFound";
import Footer from "./pages/Universal/Footer/Footer";
import Header from "./pages/Universal/Header/Header";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>

                <Route
                    path="/manageinventory"
                    element={
                        <Authorized>
                            <ManageInventory></ManageInventory>
                        </Authorized>
                    }
                ></Route>
                <Route
                    path="/dress/:dressId"
                    element={
                        <Authorized>
                            <DressDetails></DressDetails>
                        </Authorized>
                    }
                ></Route>
                <Route
                    path="/myitems"
                    element={
                        <Authorized>
                            <MyItems></MyItems>
                        </Authorized>
                    }
                ></Route>
                <Route
                    path="/manageitems"
                    element={
                        <Authorized>
                            <ManageItems></ManageItems>
                        </Authorized>
                    }
                ></Route>
                <Route
                    path="/addnewitem"
                    element={
                        <Authorized>
                            <AddNewItem></AddNewItem>
                        </Authorized>
                    }
                ></Route>

                <Route path="/about" element={<About></About>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>

                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/forget-pass"
                    element={<ForgetPass></ForgetPass>}
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
