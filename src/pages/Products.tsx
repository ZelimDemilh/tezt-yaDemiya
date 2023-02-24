import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { IProduct } from "../types/IProduct";
import Card from "../components/Card";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getData = async () => {
    const products = await getProducts();
    setProducts(products);

    return null;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
