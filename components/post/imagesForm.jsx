
import { useState, useEffect } from "react";

function ImagesForm({ onSubmit }) {
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
        setImages((prevTest) => ({
            ...prevTest,
            [name]: event.target.files[0],
        }));
        console.log(images)
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
                        <img
                            style={{ maxWidth: 200, maxHeight: 200 }}
                            src={URL.createObjectURL(Img)}
                            alt=""
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
            {/* <label>
                <input
                    type="file"
                    hidden
                    name="img1"
                    onChange={handleChange}
                />
                <div>
                    {images.img1 ? (
                        <img
                            style={{ maxWidth: 200, maxHeight: 200 }}
                            src={URL.createObjectURL(images.img1)}
                            alt=""
                        />
                    ) : (
                        <span> Select image</span>
                    )}
                </div>
            </label>
            
            <label>
                <input
                    type="file"
                    hidden
                    name="img2"
                    onChange={handleChange}
                />
                <div>
                    {images.img2 ? (
                        <img
                            style={{ maxWidth: 200, maxHeight: 200 }}
                            src={URL.createObjectURL(images.img2)}
                            alt=""
                        />
                    ) : (
                        <span> Select image</span>
                    )}
                </div>
            </label>

            <label>
                <input
                    type="file"
                    hidden
                    name="img3"
                    onChange={handleChange}
                />
                <div>
                    {images.img3 ? (
                        <img
                            style={{ maxWidth: 200, maxHeight: 200 }}
                            src={URL.createObjectURL(images.img3)}
                            alt=""
                        />
                    ) : (
                        <span> Select image</span>
                    )}
                </div>
            </label> */}
            </form>
        );
    }

    export default ImagesForm;