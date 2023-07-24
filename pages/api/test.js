import { create_medium_user , fetch_medium_users } from "@/services/dbService"

export default async function test(req, res){
    
    await create_medium_user(req.body);

    const user = await fetch_medium_users();
    console.log(req.body);
    return res.json(user);
}