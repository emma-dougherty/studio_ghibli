import React from 'react';

const Film = ({film, index}) => {

    return (
        <>
        <li>{film.title} </li>
        <li key={index}><img id="filmImage" src={film.image}/></li>
        
        </>
    )
}

export default Film;