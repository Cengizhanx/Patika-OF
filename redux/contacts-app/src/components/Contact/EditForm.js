import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { updateContact } from '../../redux/contactsSlice'
import { useNavigate } from "react-router-dom";

function EditForm({ contact }) {

    const [name, setName] = useState(contact.name)
    const [number, setNumber] = useState(contact.phone_number)

    const dispatch = useDispatch()
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !number) return false;

        dispatch(updateContact({
            id: contact.id,
            changes: {
                name,
                phone_number:number
            }
        }))
        navigate("/");



    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Phone Number' />
                <div className="btn">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm