import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';

function User() {
    const [user, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setUsers(response.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    }, [id])

    return <div>
        <h1>User Detail</h1>
        {isLoading && <div>Loading...</div>}

        {!isLoading && <code>{JSON.stringify(user)}</code>}

        <br/>
        <br/>
        
        <Link to={`/user/${parseInt(id) + 1}`} >Next User ({parseInt(id) + 1}) </Link>

    </div >

}

export default User