import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProviders from 'next-auth/providers/credentials'
import { medium_users } from "@/database/models"


export const authOptions = {
  providers: [
    CredentialsProviders({
        name: 'Test',
        credentials: {
            email: { label: "email", type: "text", placeholder: "email" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            const { email, password } = credentials;
            if ( !email || !password ){
                throw new Error("Invalid email or password");
            }

            let { dataValues: user } = await medium_users.findOne({
                where:{
                    email : email,
                }});

            if (!user || password !== user.password) {
                throw new Error("Invalid email or password");
            }

            return user;
        },
    }),
    GithubProvider({
      clientId: 'ee1b21f1c2e139807e89',
      clientSecret: '88661bd70f259db03e935fdbb7a2f1eb1eb4d805',
    }),
  ],
  callbacks: {
    async session({session, token}) {
      session.user.id = token.id;
      session.user.userName = token.userName;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      return session;
    },
    async jwt({token, account, user}) {
      if (account) {
        token.accessToken = account.access_token
        token.id = user.id;
        token.userName = user.userName;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JTW_SECRET,
}
export default NextAuth(authOptions)