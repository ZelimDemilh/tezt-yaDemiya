import { Link, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";

export default function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}
