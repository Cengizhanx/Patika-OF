import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from '../../redux/charactersSlice';
import Masonry from 'react-masonry-css'
import "./styles.css";
import { Flex, Button } from "@chakra-ui/react"
import Error from '../../components/Error';
import { Link } from "react-router-dom";


function Home() {

    const data = useSelector((state) => state.characters.items);
    const status = useSelector((state) => state.characters.status);
    const page = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const error = useSelector((state) => state.characters.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCharacters())
        }
    }, [dispatch, status]);

    if (status === "failed") {
        return <Error message={error}></Error>
    }

    console.log(data);

    return (
        <div>

            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    data.map((item, key) => (
                        <div key={key}>
                            <Link to={`/char/${item.char_id}`}>
                                <img src={item.img} alt={item.name} className="character" />
                                <h3>{item.name}</h3>
                            </Link>
                        </div>
                    ))
                }
            </Masonry>

            <Flex my="10" justifyContent="center">
                {
                    status === "loading" && <Button
                        isLoading
                        loadingText='Loading'
                        colorScheme='dark'
                        variant='outline'
                        spinnerPlacement='start'
                    >
                    </Button>
                }

                {hasNextPage && status !== "loading" && <Button
                    // isLoading
                    loadingText='Loading'
                    colorScheme='dark'
                    variant='outline'
                    spinnerPlacement='start'
                    onClick={() => dispatch(fetchCharacters(page))}
                >
                    Load More ({page})
                </Button>
                }

                {
                    !hasNextPage && <Button
                        // isLoading
                        loadingText='Loading'
                        colorScheme='dark'
                        variant='outline'
                        spinnerPlacement='start'
                        disabled={true}
                    >
                        Nothing more to load
                    </Button>
                }


            </Flex>

        </div>
    )
}

export default Home