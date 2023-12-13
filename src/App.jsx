import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LookUp from "./components/LookUp/LookUp";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import ProductPage from "./components/ProductPage/ProductPage";
import Login from "./components/LookUp/Login/Login";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/lookup" element={<LookUp />} />
          <Route path="/login/:username" element={<Login />} />
          <Route path="/register/:username" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:_id" element={<ProductPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
