import React from 'react';
import Film from './Film';

const DisplayFilm = ({films, onFilmClick}) => {

    const filmItems = films.map((film, index) => {
        return <Film film={film} key={index} onFilmClick={onFilmClick} />

    })
    return (
        <>
            {filmItems}
            
        </>
    )
}

export default DisplayFilm;