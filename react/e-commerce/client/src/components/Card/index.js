import { Box, Image, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";

function Card({item}) {
    return <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">

        <Link to={`/product/${item.id}`}>
            <Image src={item.images[0]} alt="product"></Image>

            <Box p="6">
                <Box d="plex" alignItems="baseline">
                    17/08/2022
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {item.title}
                </Box>

                <Box>
                    {item.price} $
                </Box>
            </Box>
        </Link>

        <Button colorScheme="red">
            Add to basket
        </Button>

    </Box>
}

export default Card