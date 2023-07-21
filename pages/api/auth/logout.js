import { verify } from "jsonwebtoken";
import { serialize } from "cookie";

export default function logout (req, res) {
    const {tokenUser} = req.cookies;
    if (!tokenUser) {
        return res.status(401).json({error: 'no token'});
    }

    try {
        verify(tokenUser, 'secret');
        const serialized = serialize('tokenUser', null, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        })
        res.setHeader('Set-Cookie', serialized);
        res.status(200).json('logout succesfully');
    } catch (error) {
        return res.status(401).json({error: 'invalid token'})
    }

};