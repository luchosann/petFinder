const { default: axios } = require("axios")
import { useEffect, useState } from "react";
import SiteNav from "@/components/sitenav";
import PetCard from '@/components/dashboard/card';


function Dashboard() {
    const [cardPost, setCard] = useState();
    const [allPost, setAllCard] = useState();
    const [filters, setFilters] = useState([]); // Array para almacenar los filtros
    const [filteredPost, setFilteredCard] = useState([]);

    const [filterOptions, setOptionsFilter] = useState([
        'perro',
        'gato',
        'ave',
        'chico',
        'mediano',
        'grande'
    ])

    const getCards = async () => {
        const { data } = await axios.get('/api/hello');
        setAllCard(data);
        setFilteredCard(data);
    }

    const applyFilters = () => {
        if (filters.length === 0) {
            // Si no hay filtros, mostrar todas las tarjetas
            setFilteredCard(allPost);
        } else {
            // Filtrar las tarjetas basadas en los filtros seleccionados
            const filteredCards = allPost.filter(card => {
                // Verificar si el tipo de mascota y el tamaño están en los filtros seleccionados
                const filterByPetType = filters.includes(card.petType.toLowerCase());
                const filterBySize = filters.includes(card.size.toLowerCase()); // Asegúrate de que `size` esté en minúsculas
    
                // Devolver true si la tarjeta cumple con al menos uno de los filtros
                return filterByPetType || filterBySize;
            });
            setFilteredCard(filteredCards);
        }
    }

    // Función para agregar o quitar filtros
    const handleFilterClick = (filter) => {
        if (filters.includes(filter)) {
            // Si el filtro ya está en la lista, quitarlo
            setFilters(filters.filter(f => f !== filter));
        } else {
            // Si el filtro no está en la lista, agregarlo
            setFilters([...filters, filter]);
        }
    }


    useEffect(() => {
        getCards();
    }, [])

    useEffect(() => {
        applyFilters();
    }, [filters])

    return(
        <>
            <SiteNav/>
            <div className="container-xxl">
                <div className="row row-cols-2">
                    <div className="col-md-2 container">
                        {filterOptions.map((filter) => (
                            <div key={filter} className="col">
                                <button key={filter} onClick={() => handleFilterClick(filter)} className={filters.includes(filter) ? 'active' : ''}>{filter}</button>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-8 container-md">
                        <div className='row gap-3'>
                            {/* {!allPost ? ('Loading...') : (allPost.map((value) => (
                                <PetCard key={value.id} id={value.id} name={value.name} description={value.description} image={value.img1}/>
                            )))} */}
                            {!filteredPost ? ('Loading...') : (filteredPost.map((value) => (
                                <PetCard key={value.id} id={value.id} name={value.name} description={value.description} image={value.img1}/>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;