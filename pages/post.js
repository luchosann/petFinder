import PostForm from "@/components/post/postForm";
import ImagesForm from "@/components/post/imagesForm";
import { useState , useEffect} from 'react';
import axios from "axios";
import LoggedNav from "@/components/loggedNav";

function TestComponent() {
    const [dataPost, setPost] = useState({});
    const [images, setImages] = useState({});
    const [user, setUser] = useState({
        id: '',
        email: '',
        userName: '',
        firstName:'',
        lastName:''
    })

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => { 
        const response = await axios.get('/api/profile');
        setUser(response.data)
    }
    
    const handleUpload = async () => {
        const post = {...dataPost, ...images};
        try {
            const fromData = new FormData();
            Object.entries(post).forEach(([key, value]) => {
                fromData.append(key, value);
            });
            fromData.append('id', user.id);
            
            const response = await axios.post('/api/image', fromData);
            console.log(response);
        } catch (error) {
            console.log(err.response?.data)
        }
    }
    
    return (
        <div>
            <LoggedNav/>
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