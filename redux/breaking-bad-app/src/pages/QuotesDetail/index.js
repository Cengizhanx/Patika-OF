import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../../redux/quotesSlice'

function QuotesDetail() {

    const { quote_id } = useParams()

    const quote = useSelector((state) => state.quotes.items.find((item) => item.quote_id === Number(quote_id)))

    if (!quote) {
        return <Navigate to="/quotes"></Navigate>
    }

    return (
        <div>
            <h1>Quotes Detail</h1>
            <pre>
                {JSON.stringify(quote, null, 2)}
            </pre>
        </div>
    )
}

export default QuotesDetail