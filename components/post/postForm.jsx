import { useEffect, useState } from "react";


function PostForm({ onSubmit }){
    const [post, setPost] = useState({
        name: '',
        description: '',
        petType: '',
        location: '',
        gender: '',
        size: '',
        dewormed: false,
        vaccinated: false,
        chip: false,
        sterilized: false,
    })
    
    useEffect(() => {
        onSubmit(post);
    }, [post, onSubmit])


    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'radio' ? value === 'true' : value;
        setPost((prevPost) => ({
          ...prevPost,
          [name]: newValue,
        }));
    }

    return (
        <form >
          <label>
                    <input name='name' type='name' placeholder='name'
                        onChange={handleChange}
                    />
                    <input name='description' type='description' placeholder='description'
                        onChange={handleChange}
                    />
                    <select  name='gender' value={post.gender}
                        onChange={handleChange}
                    >
                        <option value="">Sexo</option>
                        <option value="Macho">Macho</option>
                        <option value="Hembra">Hembra</option>
                    </select>
                    <select name='size' value={post.size}
                        onChange={handleChange}
                    >
                        <option value="">Tamaño</option>
                        <option value="chico">Chico</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </select>
                    <select name='petType' value={post.petType}
                        onChange={handleChange}
                    >
                        <option value="">Especie</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                        <option value="ave">Ave</option>
                        <option value="otro">Otro</option>
                    </select>
                    <select name='location' value={post.location}
                        onChange={handleChange}
                    >
                        <option value="">Departamento</option>
                        <option value="Montevideo">Montevideo</option>
                        <option value="Maldonado">Maldonado</option>
                        <option value="">...</option>
                        {/* Falta agregar los demas departamentos */}
                    </select>
                    <label>
                    Desparasitado:
                    <input
                        type="radio"
                        name="dewormed"
                        value="true"
                        checked={post.dewormed === true}
                        onChange={handleChange}
                    /> Sí
                    <input
                        type="radio"
                        name="dewormed"
                        value="false"
                        checked={post.dewormed === false}
                        onChange={handleChange}
                    /> No
                    </label>
                    <label>
                    Vacunado:
                    <input
                        type="radio"
                        name="vaccinated"
                        value="true"
                        checked={post.vaccinated === true}
                        onChange={handleChange}
                    /> Sí
                    <input
                        type="radio"
                        name="vaccinated"
                        value="false"
                        checked={post.vaccinated === false}
                        onChange={handleChange}
                    /> No
                    </label>
                    <label>
                    Chip:
                    <input
                        type="radio"
                        name="chip"
                        value="true"
                        checked={post.chip === true}
                        onChange={handleChange}
                    /> Sí
                    <input
                        type="radio"
                        name="chip"
                        value="false"
                        checked={post.chip === false}
                        onChange={handleChange}
                    /> No
                    </label>
                    <label>
                    Esterilizado:
                    <input
                        type="radio"
                        name="sterilized"
                        value="true"
                        checked={post.sterilized === true}
                        onChange={handleChange}
                    /> Sí
                    <input
                        type="radio"
                        name="sterilized"
                        value="false"
                        checked={post.sterilized === false}
                        onChange={handleChange}
                    /> No
                    </label>
                    
                </label>
        </form>
      );
};


export default PostForm;