import React from 'react';
import Film from './Film';

const DisplayFilm = ({films, onFilmClick, onFavouriteClick}) => {

    const filmItems = films.map((film, index) => {
        return <Film film={film} key={index} onFilmClick={onFilmClick} onFavouriteClick={onFavouriteClick}/>

    })
    return (
        <>
            {filmItems}
            
        </>
    )
}

export default DisplayFilm;