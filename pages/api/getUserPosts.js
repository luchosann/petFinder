import { fetch_userPosts } from "@/services/dbService";

export default async function getUserPost(req, res){
    try {
        const userName = req.body.userName; 
        const response =  await fetch_userPosts({userName: userName});
        res.json(response)
    } catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
}