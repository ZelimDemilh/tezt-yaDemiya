import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getSizes } from "../services/api";
import { color, IProduct, size } from "../types/IProduct";
import "../styles/pages/product.css";
import Sizes from "../components/Sizes";

const Product = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [color, setColor] = useState<color | null>(null);
  const [sizes, setSizes] = useState<size[]>([]);

  const setData = async () => {
    const products = await getProducts();
    const sizes = await getSizes();

    const product: IProduct | null =
      products.find((item) => item.id === +id!) || null;

    setProduct(product);
    setColor(product?.colors[0] || null);
    setSizes(sizes);

    return null;
  };

  const handleColor = (color: color) => {
    setColor(color);
  };

  useEffect(() => {
    setData();
  }, []);

  if (!product) {
    return <h1>not found product</h1>;
  }

  return (
    <div className="product_info">
      <img src={color?.images[0]} alt="" />
      <p>{product.name}</p>
      <div className="product_info__color">
        {product.colors.map((color) => (
          <button onClick={() => handleColor(color)}> {color.name}</button>
        ))}
      </div>
      <div className="product_info__sizes">
        {sizes.map((size) => (
          <Sizes key={product?.id} product={color} size={size} />
        ))}
      </div>
    </div>
  );
};

export default Product;
