import React from 'react'
import { Box, Grid, Flex, Button } from "@chakra-ui/react"
import Card from "../../components/Card";
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchProductList } from "../../api";
import { useAuth } from "../../contexts/AuthContext";

function Products() {

    const { loggedIn } = useAuth();

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(['products'], fetchProductList, {
        getNextPageParam: (lastGroups, allGroups) => {
            const morePagesExist = lastGroups?.length === 12;

            if (!morePagesExist) {
                return;
            }

            return allGroups.length + 1;
        },
    })

    if (status === "loading") return 'Loading...'

    if (status === "error") return 'An error has occurred: ' + error.message

    return (
        <div>
            { 
            
                !loggedIn && (
                    <>
                    <h1>Ürünleri görebilmek için giriş yapınız.</h1>
                    </>
                )

            }
            
            {
                loggedIn && (
                    <>
                        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                            {/* {
                    data.map((item, key) => <Card key={key} item={item} />)
                } */}

                            {data.pages.map((group, i) => (
                                <React.Fragment key={i}>
                                    {group.map((item) => (
                                        <Box key={item.id}>
                                            <Card item={item}></Card>
                                        </Box>
                                    ))}
                                </React.Fragment>
                            ))}
                        </Grid>

                        <Flex mt="10" justifyContent="center">
                            <Button isLoading={isFetchingNextPage}
                                onClick={() => fetchNextPage()}
                                disabled={!hasNextPage || isFetchingNextPage}
                            >
                                {isFetchingNextPage
                                    ? 'Loading more...'
                                    : hasNextPage
                                        ? 'Load More'
                                        : 'Nothing more to load'}
                            </Button>
                        </Flex>
                    </>
                )
            }

        </div>
    )
}

export default Products