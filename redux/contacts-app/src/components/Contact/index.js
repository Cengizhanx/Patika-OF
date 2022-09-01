import React from 'react'
import Form from "./Form";
import List from './List';
import { contactSelectors } from '../../redux/contactsSlice'
import { useSelector } from "react-redux"

function Contacts() {

    const total = useSelector(contactSelectors.selectTotal)

    return (
        <>
            <h1>Contacts ({total})</h1>
            <List></List>
            <Form></Form>
        </>
    )
}

export default Contacts