import axios from "axios";

export const fetchProductList = async ({ pageParam = 0 }) => {
    const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${pageParam}&limit=12`)

    return data;
}

export const fetchProduct = async (id) => {
    const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)

    return data;
}