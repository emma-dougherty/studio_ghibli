import React from 'react';

const Film = ({film, onFilmClick}) => {

    const handleClick = function() {
        onFilmClick(film)
    }

    return (
        <>
        <ul>
        <li className='film-container'onClick={handleClick}>{film.title} <img id="filmImage" src={film.image}></img> </li>
        </ul>
        </>
    )
}

export default Film;