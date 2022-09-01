import axios from "axios";

export const getData = async (user_id) => {
    const { data: User } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id)
    const { data: Posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)

    return { User, Posts };
}