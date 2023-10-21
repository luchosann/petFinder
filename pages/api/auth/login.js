import { serialize } from "cookie";
import Jwt from "jsonwebtoken";
import { find_user } from "@/services/dbService";

export default async function loginHandler(req, res) {
    const {email, password} = req.body;

    try {
        const user = await find_user(req.body);
        if (email === user.email && password === user.password){
            const token = Jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                id: user.id,
                email: user.email,
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
                status: user.status
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
    } catch (error) {
        console.log(error);
    }

    return res.status(401).json({error: 'invalid email or password'})
}