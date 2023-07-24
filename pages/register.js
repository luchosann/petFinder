import { useState } from "react";
import axios from "axios";
import { router } from "next/router";


function RegisterPage() {
    const [newUser, setUser] = useState({
        firstName:'',
        lastName: '',
        userName:'',
        email:'',
        password:'',
        status: '1'
    });
    
    const handleChange = (e) => {
        setUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('/api/auth/register', newUser)
        if (response.status == 200){
            router.push('/dashboard')
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name='firstName' 
                    type='firstName' 
                    placeholder='First name'
                    onChange={handleChange}
                />
                <input name='lastName' 
                    type='lastName' 
                    placeholder='Last name'
                    onChange={handleChange}
                />
                <input name='userName' 
                    type='userName' 
                    placeholder='Username'
                    onChange={handleChange}
                />
                <input name='email' 
                    type='email' 
                    placeholder='email'
                    onChange={handleChange}
                />
                <input name='password' 
                    type='password' 
                    placeholder='password'
                    onChange={handleChange}
                />
                <button>Register</button>

            </form>
        </div>
    )
}

export default RegisterPage;