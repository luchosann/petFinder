import { fetch_userPosts, fetch_medium_users, find_userName } from "@/services/dbService";

import Image from "next/image";
import SiteNav from "@/components/sitenav";
import PetCard from "@/components/dashboard/card";

function Page({ posts, User }){
    return (
        <div>
            <SiteNav/>
            <div className="container"> 
                <div className="row">
                    <div className="col">
                        <Image
                            src='/favicon.ico'
                            alt="Profile image"
                            width={100}
                            height={100}
                        />
                        <div>
                            <h1>{User.userName}</h1>
                            <p>{User.email}</p>
                            <p>{User.firstName}</p>
                            <p>{User.lastName}</p>
                        </div>
                    </div>
                    <div className="col">
                    {!posts ? ('No existen publicaciones') : (posts.map((value) => (
                        <PetCard key={value.id} id={value.id} name={value.name} description={value.description} image={value.img1}/>
                    )))}
                    </div>
                </div>
            </div>
        </div>
    )

};

export async function getStaticPaths() {
    
    const users = await fetch_medium_users();
    const paths = users.map((user) => {
        return {
            params: {
                username: user.dataValues.userName
            }
        };
    });

    return { 
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    try {
        const user_response = await find_userName({ userName: params.username })

        const User = {
            id: user_response.id,
            firstName: user_response.firstName,
            lastName: user_response.lastName,
            userName: user_response.userName,
            email: user_response.email,
        };

        console.log(User);

        const post_response = await fetch_userPosts({ userEmail: User.email });
    
        const posts = post_response.map((post) => ({
            id: post.dataValues.id,
            name: post.dataValues.name,
            description: post.dataValues.description,
            petType: post.dataValues.petType,
            age: post.dataValues.age,
            location: post.dataValues.location,
            gender: post.dataValues.gender,
            size: post.dataValues.size,
            dewormed: post.dataValues.dewormed,
            vaccinated: post.dataValues.vaccinated,
            chip: post.dataValues.chip,
            sterilized: post.dataValues.sterilized,
            img1: post.dataValues.img1,
            img2: post.dataValues.img2,
            img3: post.dataValues.img3,
            userEmail: post.dataValues.userEmail,
        }));

        return {
            props: {
                posts,
                User
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                posts: [],
            },
        };
    }
}

export default Page; 