import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./pages/Home/Banner/Banner";
import Footer from "./pages/Universal/Footer/Footer";
import Header from "./pages/Universal/Header/Header";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Banner></Banner>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
