import { useState } from "react";
import axios from "axios";

function RegisterPage() {
    const [newUser, setUser] = useState({
        firsName:'',
        lastName: '',
        userName:'',
        email:'',
        password:''
    });
    
    const handleChange = (e) => {
        setUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(newUser);
        const response = await axios.post('', newUser)
        console.log(response)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name='firsName' 
                    type='firsName' 
                    placeholder='Firs name'
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