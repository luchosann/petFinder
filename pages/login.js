import { useState } from "react";
import axios from "axios";
import { router } from "next/router";


function LoginPage() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('/api/auth/login', credentials)
        console.log(response)
        if (response.status == 200) {
            router.push('/dashboard');
        }
        
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name='email' type='email' placeholder='email'
                    onChange={handleChange}
                />
                <input name='password' type='password' placeholder='password'
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;