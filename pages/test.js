import axios from 'axios'
import { useEffect, useState } from 'react';
import PetCard from '@/components/dashboard/card';

function Test() {
    const [cardPost, setCard] = useState();

    const getCards = async () => {
        const { data } = await axios.get('/api/hello');
        setCard(data);
    }

    useEffect(() => {
        getCards();
    }, [])
    
    return (
        <div className='row gap-3'>
            {!cardPost ? ('Loading...') : (cardPost.map((value) => (
                <PetCard key={value.id} id={value.id} name={value.name} description={value.description} image={value.img1}/>
            )))}
        </div>
    )
}

export default Test