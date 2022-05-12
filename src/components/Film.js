import React from 'react';

const Film = ({film, onFilmClick, onFavouriteClick}) => {

    const handleClick = function() {
        onFilmClick(film)
    }
    const handleFavouriteClick = function() {
        onFavouriteClick(film)
    }

    return (
        <>
        <ul>
        <li className='film-container'onClick={handleClick}>{film.title} <img id="filmImage" src={film.image}></img> 
        </li>
        <li>
        <button type='button' onClick={handleFavouriteClick}>Add to Favourites</button>
        </li>
    
        </ul>
        </>
    )
}

export default Film;