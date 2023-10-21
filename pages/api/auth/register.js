import { create_medium_user , fetch_medium_users } from "@/services/dbService"
import Jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function test(req, res){
    const user = req.body;
    
    try {
        const response = await create_medium_user(user);
        return res.json('login successful')
    } catch (error) {
        console.log(error);
    }
    
    return res.status(401).json({error: 'invalid email or password'})
}