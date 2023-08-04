// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetch_userPosts_all, fetch_userPosts } from "@/services/dbService"


export default async function handler(req, res) {
  const response = await fetch_userPosts_all();
  const id = await fetch_userPosts({userId: 1});
  console.log(id)
  res.status(200).json(response)
}
