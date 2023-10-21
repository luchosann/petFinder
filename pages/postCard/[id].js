import axios from "axios"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PetCardData from "@/components/dashboard/petCard";
import SiteNav from "@/components/sitenav";

function PostCard() {
    const route = useRouter();
    const [id, setId] = useState({
        id: null
    });
    const [dataPost, setDataPost] = useState(null);
    
    const getpost = async () => {
        try {
            if(id){
                const response = await axios.post('/api/getPost', { id: id });
                setDataPost(response.data[0]);
            }
        } catch (error) {
            console.error('Error fetching post data:', error);
        }
    }

    useEffect(() => {
        setId(route.query.id);
        if (id && !dataPost) {
            getpost();
        }
    }, [route.query.id, dataPost]);

    return (
        <>
            <SiteNav/>
            { dataPost ? <PetCardData {...dataPost} id={route.query.id}/> : <p>Loading...</p>} 
        </>
    )
}

export default PostCard