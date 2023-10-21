import axios from "axios";
import { signIn } from "next-auth/react";
import Link from 'next/link';

function Register() {

    async function handleSubmit(e){
        e.preventDefault();
        const form = new FormData(e.target);

        try {
            const user = await axios.post('/api/auth/register', {
                firstName: form.get('firstName'),
                lastName: form.get('lastName'),
                userName: form.get('userName'),
                email: form.get('email'),
                password: form.get('password'),
            })
    
            if(!user){
                return null;
            }
            
            await signIn('credentials', {
                email: form.get('email'),
                password: form.get('password'),
                callbackUrl: '/dashboard',
            })
        } catch (error) {
            console.error('Error al registrarse:', error);
        }        

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="row gap-1">
                <input name='firstName' 
                    type='firstName' 
                    placeholder='First name'
                    required
                />
                <input name='lastName' 
                    type='lastName' 
                    placeholder='Last name'
                    required
                />
                <input name='userName' 
                    type='userName' 
                    placeholder='Username'
                    required
                />
                <input name='email' 
                    type='email' 
                    placeholder='email'
                    required
                />
                <input name='password' 
                    type='password' 
                    placeholder='password'
                    required
                />
                <button className="">Register</button>
            </form>
            <p>
                Already registered? <Link href='/login'>Login here</Link>
            </p>

        </div>
    )
}

export default Register;