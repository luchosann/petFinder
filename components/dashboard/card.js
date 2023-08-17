import React from 'react';
import { router } from 'next/router';

function PetCard(props) {
    const cardStyle = {
        width: 250,
        height: 438.28, 
        position: 'relative', 
        background: 'white', 
        boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.25)', 
        borderRadius: 35, 
        overflow: 'hidden', 
        border: '0.50px #5E5BFF solid'
    }


    return (
            <div style={cardStyle}>
                <img style={{width: 251, height: 265, left: -1, top: 0, position: 'absolute'}} src={'/uploads/'+props.image} />
                <div style={{width: 151, height: 40, left: 11, top: 271, position: 'absolute',overflow: 'hidden', textAlign: 'center', color: 'black', fontSize: 30, fontFamily: 'ABeeZee', fontWeight: '400', wordWrap: 'break-word'}}>
                    { props.name }
                </div>

                <div style={{width: 226, height: 50,left: 12, top: 319,overflow: 'hidden', position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                     { props.description }
                </div>

                {/* <img style={{width: 6, height: 11, left: 164, top: 289, position: 'absolute'}} src='/src/assets/card/Vector.png'/>               */}
                
                <div style={{left: 175, top: 286, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                    {props.locate}
                </div>
                
                <button style={{width: 169, paddingTop: 7, left: 36, top: 386, position: 'absolute', background: '#5E5BFF', borderRadius: 35, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}
                    onClick={() => {router.push(`/postCard/${ props.id }`)}}>
                    <div style={{width: 233, height: 35, textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Adoptame</div>
                </button>
                
                <div style={{width: 24, height: 24, left: 205, top: 16, position: 'absolute'}}>
                    <img style={{width: 20, height: 18, left: 2, top: 3, position: 'absolute'}} src='/src/assets/card/heart.png'/>
                </div>
            </div>
    );
}

export default PetCard;