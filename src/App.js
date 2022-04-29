import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyItems from "./pages/MyItems/MyItems";
import Footer from "./pages/Universal/Footer/Footer";
import Header from "./pages/Universal/Header/Header";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/myitems" element={<MyItems></MyItems>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
