import { serialize } from "cookie";
import Jwt from "jsonwebtoken";

export default function loginHandler(req, res) {
    const {email, password} = req.body;

    if (email === 'admin@local.local' && password === 'admin'){
        const token = Jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            email: 'admin@local.local',
            username: 'Luciano'
        }, 'secret')
        
        const serialized = serialize('tokenUser', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60,
            path: '/'
        })
    
        res.setHeader('Set-Cookie', serialized)
        return res.json('login successful')
    }

    return res.status(401).json({error: 'invalid email or password'})
}