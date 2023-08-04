const { default: axios } = require("axios")
import { router } from "next/router";
import { useEffect, useState } from "react";

function Dashboard() {
    const [user, setUser] = useState({
        id: '',
        email: '',
        userName: '',
        firstName:'',
        lastName:''
    })
    
    useEffect(() => {
        getProfile()
    }, []);
    
    const getProfile = async () => { 
        const response = await axios.get('/api/profile');
        setUser(response.data)
    }

    const logoutProfile = async () => {
        try {
            await axios.post('/api/auth/logout');
        } catch (error) {
            console.log(error);
        }
        router.push('/login');
    } 
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>{user.userName}</h2>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <p> id: {user.id}</p>

            <button onClick={() => logoutProfile()}>
                logout 
            </button>
        </div>
    )
}

export default Dashboard;