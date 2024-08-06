import "./App.css"
//import Counter from "./components/Counter/Counter";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Products from "./components/Product/Products";
//import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Signin from "./components/Signin/Signin";
//import Header from "./components/Home/Header";
//import Section3 from "./components/Home/Section3";
import Users from "./components/Users/Users";
import Home from "./components/Home/Home";
import PageNotFound from "./components/page not found/pagenotfound";
import { Route,Routes } from "react-router-dom";
import ProductDetails from "./components/Product/productdetails";
function App() {
  return (
    /*<div>
    <Nav />
    <Products />
    <productData />
    <Login />
    <SignUp />
    </div>*/
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />

      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
