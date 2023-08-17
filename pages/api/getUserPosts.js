import { fetch_userPosts } from "@/services/dbService";

export default async function getUserPost(req, res){
    try {
        const userId = req.body.userId; 
        const response =  await fetch_userPosts({userId: userId});
        res.json(response)
    } catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
}