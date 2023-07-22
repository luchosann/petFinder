import { create_medium_user , fetch_medium_users } from "@/services/dbService"

export default async function test(req, res){
    
    await create_medium_user({
        firstName: "Luciano",
        lastName: "Gabrielli",
        status: 1
    })

    const user = await fetch_medium_users();

    return res.json(user);
}