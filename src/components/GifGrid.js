import React, { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//Con useEffect solo se lanza una vez la peticion
//Podemo controla la peticion, para que no se haga
//cada que hago un cambio
export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    //Estamos enviando la category
    const { data:images , loading } = useFetchGifs( category );

    //Ahora esta implementado en el useFetchGifs.js
    // useEffect(() => {
    //     getGifs( category )
    //     .then( imgs => setImages( imgs ));
    //     // .then( setImages ); seria lo mismo de arriba
    // }, [ category ])

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>
            {/* aqui evaluamos si es verdadero */}
            { loading && <p className="animate__animated animate__flash">Cargando...</p>}
            {/* aqui evaluamos si es verdadero o falso
            { loading ? 'Cargando...' : 'Data cargada'} */}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            // img={img}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
