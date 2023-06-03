import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    let {id} = useParams();
    const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [user, setUsers] = useState([]);
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/" + id)
                .then(res => res.json())
                .then(
                    (data) => {
                        console.log(data);
                        setIsLoaded(true);
                        setUsers(data);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }, [])
    if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>{user.name}</h1>
                    <div>
                        Email: {user.email}
                    </div>
                    <div>
                        Phone: {user.phone}
                    </div>
                    <div>
                        Website: {user.website}
                    </div>
                </div>
            );
        }
}
export default User;