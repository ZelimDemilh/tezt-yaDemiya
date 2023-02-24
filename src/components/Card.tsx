import React, { FC } from "react";
import { IProduct } from "../types/IProduct";
import "../styles/components/card.css";
import { Link } from "react-router-dom";

interface ICardProps {
  product: IProduct;
}

const Card: FC<ICardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.colors[0].images[0]} alt="image product" />
      <p>{product.name}</p>
    </Link>
  );
};

export default Card;
