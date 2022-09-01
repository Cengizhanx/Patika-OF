import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from "react-router-dom";
import { fetchProduct } from '../../api';
import { Box, Text, Button } from "@chakra-ui/react"
import ImageGallery from 'react-image-gallery';


function ProductDetail() {

    const { product_id } = useParams();

    const { isLoading, error, data } = useQuery(['product', product_id], () => fetchProduct(product_id))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const images = data.images.map((url) => ({ original: url }))

    return (
        <div>
            <Button colorScheme="green">Add to basket</Button>

            <Text as="h2" fontSize="2xl">{data.title}</Text>

            <Text as="h2" fontSize="2xl">{data.price} $</Text>

            <p>{data.description}</p>

            <Box margin="10">
                <ImageGallery items={images} showThumbnails={false}></ImageGallery>
            </Box>
        </div>
    )
}

export default ProductDetail