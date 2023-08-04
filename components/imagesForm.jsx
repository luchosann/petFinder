
import { useState, useEffect } from "react";

function ImagesForm({ onSubmit }) {
    const [test, setTest] = useState({
        img1: null,
        img2: null,
        img3: null
    })
    

    useEffect(() => {
        onSubmit(test);
    }, [test, onSubmit])

    const handleChange = (event) => {
        const { name } = event.target;
        setTest((prevTest) => ({
            ...prevTest,
            [name]: event.target.files[0],
        }));
        console.log(test)
    };
    
    return (
        <form>
            <label>
                <input
                    type="file"
                    hidden
                    name="img1"
                    onChange={handleChange}
                />
                <div>
                    {test.img1 ? (
                        <img
                            style={{ maxWidth: 200, maxHeight: 200 }}
                            src={URL.createObjectURL(test.img1)}
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
                    {test.img2 ? (
                        <img
                            style={{ maxWidth: 200, maxHeight: 200 }}
                            src={URL.createObjectURL(test.img2)}
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
                    {test.img3 ? (
                        <img
                            style={{ maxWidth: 200, maxHeight: 200 }}
                            src={URL.createObjectURL(test.img3)}
                            alt=""
                        />
                    ) : (
                        <span> Select image</span>
                    )}
                </div>
            </label>
            </form>
        );
    }

    export default ImagesForm;