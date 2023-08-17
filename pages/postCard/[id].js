import axios from "axios"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PetCardData from "@/components/dashboard/petCard";
import LoggedNav from "@/components/loggedNav";


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
                console.log('Data de los post',response.data[0]);
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
    }, [id, route.query.id, dataPost]);

    return (
        <>
            <LoggedNav/>
            { dataPost ? <PetCardData {...dataPost}/> : <>Loading...</>} 
        </>
    )
}

export default PostCard