import Image from 'next/image'

function PetCardData(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Image 
                        src={ '/uploads/'+props.img1 }
                        alt="Picture of the author"
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
                </div>
            </div>
        </div>
    )
}

export default PetCardData;