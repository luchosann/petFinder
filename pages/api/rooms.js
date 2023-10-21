import { create_room_chat } from "@/services/dbService"


export default async function handler(req, res) {
  try {
    const room =  await create_room_chat(req.body);
    res.status(200).json(room)
  } catch (error) {
    res.status(401).json(error)
  }
}
