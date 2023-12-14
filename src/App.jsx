import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LookUp from "./components/LookUp/LookUp";
import Login from "./components/LookUp/Login/Login";
import Register from "./components/LookUp/Register/Register";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/products" element={<><Header /><Products /><Footer /></>} />
          <Route path="/cart" element={<><Header /><Cart /><Footer /></>} />
          <Route path="/products/:_id" element={<><Header /><ProductPage /><Footer /></>} />
          <Route path="/profile" element={<><Header /><Profile /><Footer /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
          <Route path="/lookup" element={<LookUp />} />
          <Route path="/login/:email" element={<Login />} />
          <Route path="/register/:email" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
