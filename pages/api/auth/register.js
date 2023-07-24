import { create_medium_user , fetch_medium_users } from "@/services/dbService"
import Jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function test(req, res){
    const user = req.body;

    await create_medium_user(user);

    try {
        const token = Jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
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
    } catch (error) {
        console.log(error);
    }

    
    return res.status(401).json({error: 'invalid email or password'})
}