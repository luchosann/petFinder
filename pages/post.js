import { useState } from 'react';
import axios from "axios";
import { router } from "next/router";
import { useSession } from "next-auth/react";

import PostForm from "@/components/post/postForm";
import ImagesForm from "@/components/post/imagesForm";
import SiteNav from "@/components/sitenav";


function TestComponent() {
    const { data } = useSession();
    const [dataPost, setPost] = useState({});
    const [images, setImages] = useState({});
    
    const handleUpload = async () => {
        const post = {...dataPost, ...images};
        try {
            const fromData = new FormData();
            Object.entries(post).forEach(([key, value]) => {
                fromData.append(key, value);
            });
            console.log(data.user);
            fromData.append('userEmail', data.user.email);            
            const response = await axios.post('/api/image', fromData);
            router.push(`/postCard/${response.data.id}`);
        } catch (error) {
            console.log(error.response?.data)
        }
    }
    
    return (
        <div>
            <SiteNav/>
            <div className="container">
                <h1>Nueva publicacion</h1>
                <PostForm onSubmit={(data)=>{
                    setPost(data);
                }}/>
                <ImagesForm onSubmit={(data)=>{
                    setImages(data);
                }}/>
                <button onClick={handleUpload}> Enviar </button>

            </div>
        </div>
    );
}


export default TestComponent;