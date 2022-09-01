import { NavLink, Outlet } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';

function Users() {
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div>
            <h3>Users</h3>
            {isLoading && <div>Loading...</div>}
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'deactive')} to={`/user/${user.id}`}>{user.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <Outlet />
        </div>
    )
}

export default Users