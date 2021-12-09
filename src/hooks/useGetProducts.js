import { useState, useEffect } from 'react';
import axios from 'axios'

const useGetProducts = (API) => {

    const [products, setProducts] = useState([])

    useEffect(async () => {
        const products = await axios(API);
        setProducts(products.data)

    }, [])

    return products
};

export default useGetProducts;