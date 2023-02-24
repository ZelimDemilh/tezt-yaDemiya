import React, {useEffect, useState} from 'react';
import {getProducts, getSizes} from "../services/api";
import {IProduct, size} from "../types/IProduct";
import Card from "../components/Card";

const Products = () => {

    const [sizes, setSizes] = useState<size[]>([])
    const [products, setProducts] = useState<IProduct[]>([])


    const getData = async () => {
        const products = await getProducts()
        setProducts(products)

        const sizes = await getSizes()
        setSizes(sizes)

        return null
    }

    useEffect(() => {
        getData()
    })


    return (
        <div>
            {
                products.map( product => <Card product={product}/>)
            }
        </div>
    );
};

export default Products;