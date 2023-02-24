import {Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";

export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/:id" element={<Product/>}/>
        </Routes>
    </div>
  )
}
