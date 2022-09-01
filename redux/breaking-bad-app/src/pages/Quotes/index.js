import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../../redux/quotesSlice'
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Item from './Item';

function Quotes() {

    const data = useSelector(quotesSelector)
    const status = useSelector(statusSelector)
    const error = useSelector(errorSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchAllQuotes())            
        }

    }, [dispatch,status])

    if (error) {
        return <Error message={error}></Error>
    }

    return (
        <div style={{ padding: 10 }}>
            <h1>Quotes</h1> <br />
            {
                status === "loading" && <Loading></Loading>
            }
            {
                status === "succeeded" && data.map((item) => (
                    <Item item={item} key={item.quote_id}></Item>
                ))
            }

            {
                status === "succeeded" && <div className="quotes_info">{data.length} quotes</div>
            }
        </div>
    )
}

export default Quotes