import { useState, useEffect } from "react";
import Image from "next/image";

function ImagesForm({ onSubmit }) {
    const [err, setErr] = useState(null);
    const [images, setImages] = useState({
        img1: null,
        img2: null,
        img3: null
    })
    

    useEffect(() => {
        onSubmit(images);
    }, [images, onSubmit])

    const handleChange = (event) => {
        const { name } = event.target;
        const selectedFile = event.target.files[0];

        const allowedFormats = ["image/jpeg", "image/png", "image/gif"];

        if (selectedFile && allowedFormats.includes(selectedFile.type)) {
            setImages((prevImages) => ({
              ...prevImages,
              [name]: selectedFile,
            }));
          } else {
            console.log("Archivo no permitido:", selectedFile);
          }
    };

    const ImagesComponent = (Img, name) => {
        return (
            <label>
                <input
                    type="file"
                    hidden
                    name={name}
                    onChange={handleChange}
                />
                <div>
                    {Img ? (
                        <Image 
                            src={URL.createObjectURL(Img)}
                            alt="Pet image"
                            loading="lazy"
                            width={200}
                            height={200}

                        />
                    ) : (
                        <span> Select image</span>
                    )}
                </div>
            </label>
        )
    }
    
    return (
        <form>
            {ImagesComponent(images.img1, 'img1')}
            {images.img1
                ? <>
                    {ImagesComponent(images.img2, 'img2')}
                    {images.img2 ? ImagesComponent(images.img3, 'img3') : null}
                </>
                : null
            }
            </form>
        );
    }

    export default ImagesForm;