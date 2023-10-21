import { find_userName } from "@/services/dbService";

export default async function getUser(req, res){
    try {
        const user = req.body.userName; 
        const response =  await find_userName({userName: user});
        res.json(response)
    } catch (error) {
        res.status(401).json(error);
    }
}