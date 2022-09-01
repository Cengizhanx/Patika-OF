import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsSlice'
import { nanoid } from "@reduxjs/toolkit";
function Form() {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !number) return false;

        // Birden fazla kayıt girilirse
        // const names = name.split(",")
        // const data = names.map((name) => ({ id: nanoid(), name }))
        // dispatch(addContacts(data))

        dispatch(addContact({ id: nanoid(), name, phone_number: number }))
        setName("")
        setNumber("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Phone Number' />
                <div className="btn">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form