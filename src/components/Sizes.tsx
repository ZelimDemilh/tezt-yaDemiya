import React, { FC } from "react";
import { color, IProduct, size } from "../types/IProduct";

interface ISizesProps {
  size: size;
  product: color | null;
}

const Sizes: FC<ISizesProps> = ({ size, product }) => {
  return (
    <button disabled={product?.sizes.includes(size.id)}>{size.label}</button>
  );
};

export default Sizes;
