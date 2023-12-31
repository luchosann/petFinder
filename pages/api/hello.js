// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetch_userPosts_all, fetch_userPosts, fetch_post } from "@/services/dbService"


export default async function handler(req, res) {
  try {
    const response = await fetch_userPosts_all();
    res.status(200).json(response)
  } catch (error) {
    res.status(401).json(error)
  }
}
