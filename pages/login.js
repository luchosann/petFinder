import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function Login() {
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      callbackUrl: '/dashboard',
    });
  }
  
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor='email'>email:</label>
        <input type='text' id='email' name='email' required />
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' required />
        <button type='submit'>Submit</button>
      </form>
      <p>
        Not registered yet? <Link href='/register'>Register here</Link>
      </p>
    </div>
  );
}