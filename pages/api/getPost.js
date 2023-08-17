import { fetch_userPosts_all, fetch_userPosts, fetch_post } from "@/services/dbService"

export default async function handler(req, res) {
  try {
    const response = await fetch_post(req.body.id);
    res.status(200).json(response)
  } catch (error) {
    res.status(401).json(error)
  }
}
