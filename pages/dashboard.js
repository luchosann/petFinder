const { default: axios } = require("axios")
import { router } from "next/router";
import { useState } from "react";


function Dashboard() {
    const [user, setUser] = useState({
        email: '',
        username: '',
    })
    
    
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
            <pre>
                {JSON.stringify(user, null ,2)}
            </pre>

            <button onClick={() => getProfile()}>
                get profile
            </button>

            <button onClick={() => logoutProfile()}>
                logout 
            </button>
        </div>
    )
}

export default Dashboard;