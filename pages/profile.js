import Image from "next/image";
import { use, useEffect, useState } from "react";
import axios from "axios";
import LoggedNav from "@/components/loggedNav";
import SiteNav from "@/components/sitenav";
import PetCard from "@/components/dashboard/card";

function Profile(props){
    const [status, setStatus] = useState(null);
    const [user, setUser] = useState({})
    const [posts, setPost] = useState();

    useEffect(() => {
        !user.id ? getProfile() : null;
        if (user.id) {
            getPost();
        }
    }, [user, posts]);
    
    const getProfile = async () => { 
        try {
            const response = await axios.get('/api/profile');
            setUser(response.data)
            setStatus(true);
        } catch (error) {
            console.log(error.response.data)
            setStatus(false);
        }
    }

    const getPost = async () => {
        try {
            const response = await axios.post('/api/getUserPosts', {userId: user.id});
            setPost(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            { status ? <LoggedNav/> : <SiteNav/> }
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
                            <h1>{user.userName}</h1>
                            <p>{user.email}</p>
                            <p>{user.firstName}</p>
                            <p>{user.lastName}</p>

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
}

export default Profile;