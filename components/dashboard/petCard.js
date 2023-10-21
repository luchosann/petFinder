import Image from 'next/image'
import axios from 'axios';
import { useSession } from 'next-auth/react';


function PetCardData(props) {
    const { data: sessionData, status: sessionStatus } = useSession(); 


    const handleAdopt = async () => {
        try {
            const User = {
                postId: props.id,
                User1: props.userEmail,
                User2: sessionData.user.email,
                title: props.name,
                last_msg: ''
            }
            await axios.post('/api/rooms', User);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Image 
                        src={ '/uploads/'+props.img1 }
                        alt={props.petType}
                        width={501}
                        height={501}
                    />
                </div>
                <div className="col">
                    <div className="Name">
                        <h1>{props.name}</h1>
                    </div>
                    <div className="description">
                        <h5>{props.description}</h5>
                    </div>
                    <div>
                        <div className="row">
                            <p className="col">Desparasitado</p>
                            <p className="col">{ props.dewormed ? <p>true</p> : <p>false</p> }</p>
                        </div>
                        <div className="row">
                            <p className="col">Vacunado</p>
                            <p className="col">{ props.vaccinated ? <p>true</p> : <p>false</p> }</p>
                        </div>
                        <div className="row">
                            <p className="col">chip</p>
                            <p className="col">{ props.chip ? <p>true</p> : <p>false</p> }</p>
                        </div>
                        <div className="row">
                            <p className="col">Esterilizado</p>
                            <p className="col">{ props.sterilized ? <p>true</p> : <p>false</p> }</p>
                        </div>
                        
                    </div>
                    <div className="row">
                        <p className="col">{ props.gender }</p>
                        <p className="col">{ props.size }</p>
                        <p className="col">{ props.petType }</p>
                        <p className="col">{ props.gender }</p>
                    </div>
                    <div>
                        <button onClick={() => handleAdopt()}>adoptar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetCardData;