export type size = {
  id: number;
  label: string;
  number: number;
};

export type color = {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
};

export interface IProduct {
  id: number;
  name: string;
  colors: color[];
}
